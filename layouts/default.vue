<template>
  <div class="font-instrument-sans flex flex-col bg-gray-900 min-h-screen">
    <Header />
    <main class="flex flex-grow justify-center">
      <svg id="vbg" width="100%" height="100%"></svg>
      <div style="z-index: 1" class="flex">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import * as d3 from "d3";
import * as d3v from "d3-voronoi";

export default {
  mounted() {
    const svg = d3.select("#vbg");
    const offScreen = 50;
    const extentMin = [-offScreen, -offScreen];
    const POINTS = 100;
    const trancendentals = d3.range(POINTS);

    let width = window.innerWidth;
    let height = window.innerHeight;
    let extentMax = [width + offScreen, height + offScreen];
    let voronoi = d3v.voronoi().extent([extentMin, extentMax]);
    let randomSites = randomizePoints(trancendentals);
    let sites = voronoi(randomSites).polygons().map(d3.polygonCentroid);
    addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      extentMax = [width + offScreen, height + offScreen];
      voronoi = d3v.voronoi().extent([extentMin, extentMax]);
      randomSites = randomizePoints(trancendentals);
      sites = voronoi(randomSites).polygons().map(d3.polygonCentroid);
    });

    let polygon = svg
      .append("g")
      .attr("class", "polygons")
      .selectAll("path")
      .data(voronoi.polygons(sites))
      .enter()
      .append("path")
      .call(redrawPolygon);

    let link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(voronoi.links(sites))
      .enter()
      .append("line")
      .call(redrawLink);

    let site = svg
      .append("g")
      .attr("class", "sites")
      .selectAll("circle")
      .data(sites)
      .enter()
      .append("circle")
      .attr("r", 2.5)
      .call(redrawSite);

    function redraw() {
      const diagram = voronoi(sites);
      polygon = polygon.data(diagram.polygons()).call(redrawPolygon);
      link = link.data(diagram.links());
      link.exit().remove();
      link = link.enter().append("line").merge(link).call(redrawLink);
      site = site.data(sites).call(redrawSite);
    }

    function redrawPolygon(polygon) {
      polygon.attr("d", (d) => (d ? "M" + d.join("L") + "Z" : null));
    }

    function redrawLink(link) {
      link
        .attr("x1", (d) => d.source[0])
        .attr("y1", (d) => d.source[1])
        .attr("x2", (d) => d.target[0])
        .attr("y2", (d) => d.target[1]);
    }

    function redrawSite(site) {
      site.attr("cx", (d) => d[0]).attr("cy", (d) => d[1]);
    }

    const RELAXITION_RATE = 0.01;
    const FOCUS_RATE = 0.0001;
    const RANDOMIZE_TIMEOUT = 100;
    let goal = sites.slice();
    let randomizedAt = 0;

    function randomizePoints(trancendentals) {
      return trancendentals.map(randomizePoint);
    }

    function randomizePoint() {
      return [Math.random() * width, Math.random() * height];
    }

    function step(time) {
      if (time - randomizedAt > RANDOMIZE_TIMEOUT) {
        const pointToUpdate = Math.floor(Math.random() * POINTS);
        goal[pointToUpdate] = randomizePoint();
        randomizedAt = time;
      }
      sites = voronoi(sites)
        .polygons()
        .map((polygon, index) => {
          const [x0, y0] = sites[index];
          const [goalX, goalY] = goal[index];
          const [cx, cy] = d3.polygonCentroid(polygon);

          const x1 = x0 + (cx - x0) * RELAXITION_RATE;
          const y1 = y0 + (cy - y0) * RELAXITION_RATE;

          const x2 = x1 + (goalX - x1) * FOCUS_RATE;
          const y2 = y1 + (goalY - y1) * FOCUS_RATE;

          return [x2, y2];
        });

      redraw();
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  },
};
</script>

<style>
:root {
  --polyhon-color: #00bcd4;
  --site-color: #ffffff10;
  --link-color: #ffffff05;
}

#vbg {
  position: fixed;
  inset: 0;
}

.sites {
  fill: var(--site-color);
  stroke: none;
}

.links {
  stroke: var(--link-color);
}

.polygons {
  fill: none;
  stroke: var(--polyhon-color);
  stroke-opacity: 0.3;
  animation: color-hue-animation 20s infinite;
}

@keyframes color-hue-animation {
  0% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(100deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
}
</style>
