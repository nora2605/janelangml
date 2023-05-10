# Key Innovations of jane

## It's very flexible

It doesn't care whether you use commas, colons or spaces in your arrays,
whether you have semicolons or not,
whether you want a callback hell or not,
whether you like null, undefined or nil,

jane's goal is it to make it as easy as possible to write working programs intuitively.
There's no exclusive syntax sugar anywhere, everything is possible in all ways.

## The philosophy

If it's annoying or ugly, there's syntax sugar for it.
The engineers of jane have very big heads full of code and sometimes a good syntax sugar pops out.

Check out these amazing uncallback-helled closures:

```jane
array.map() element {
    // wow so much cleaner that (() => {})
}
```

## The abyss

We thought that there needs to be one to unite all the nulls and undefineds, some are saying different things, some the same
and while functional languages as well as some other major ones have agreed on the empty tuple `()` as
unit type, because it is a type as well as a value as well as a value type and thus fits the characteristics of
what nil should be, we find it a bit too technical and confusing to write () as type since it interferes strongly with function declarations.

That's why we introduce `abyss`, the brand new keyword that's easy to remember because

1. it's brand new it'll surely get stuck in your head that's how marketing works right
2. you don't have to remember it!

Although a warning/information will be shown, `()`, `void`, `nil`, `null` and `undefined` are all aliases for `abyss`

## Binary flags

Get rid of those pesky modifiers from your favorite OOP langs `public`, `protected`, `private` are all way too long and access modifiers stack up easily

fortunately, an `internal protected static override abstract virtual explicit operator` does not exist in jane.*

instead of access modifiers the user is presented with binary flags. Similar to command line syntax a keyword has these flags:

```jane
fn -s //...
```

The s stands for static. That means the function is available without an instance of the parenting class.

```jane
while -a //...
```

The a here stands for always. It is basically a do-while.

A full list of these can be found in the documentation for each keyword.

*: it doesn't exist in any other language either but c# is pretty close

## The power operator

Hundreds of years mathematicians have been disappointed by the absence of the power operator in programming languages...
Some started implementing **, but ^ remained xor or some other weird shit no one needs.

Jane uses ^ as power operator. No math lib explicitly referenced, no imports, nothing

just 2^4 and the result will be 16

(it is differently implemented for integers than for floats, so using it won't reduce the speed of integer calculations like all Math.Pow functions do)

## Extension blocks

Tired of enclosing everything in brackets?
same
now we have
extensions

well other programming languages did this already but i find our way particularly beautiful

using

```jane
ext <class> {

}
```

you can add, overwrite and remove functions from a class/type.
these are only valid in the current assembly if not flagged with `-g`, then they are available when their namespace is imported,
from a library for example.

## it's cuter

`this` sounds threatening, `self` is weird,
we use `me` because it's short and cute.

We officially support using the light blue heart emoji as file extension!

We have a ball as mascot! Her name is IDA
