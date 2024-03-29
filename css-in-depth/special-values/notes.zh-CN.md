# 特殊值

有两个特殊值可以赋给任意属性，用于控制层叠：inherit 和 initial。

## inherit 关键字

有时，我们想用继承代替一个层叠值。这是可以用 inherit 关键字。可以用它来覆盖另一个值，这样该元素就会继承起父元素的值。

这么做的好处是，如果父元素发生任何样式改变的话（比如修改第二个规则集，或者被别的样式覆盖），子元素的样式就会跟着父元素的内容一起改变。

还可以使用 inherit 关键字强制继承一个通常不会被继承的属性。

## initial 关键字

有时，你需要撤销作用于某个元素的样式。这可以用 initial 关键字来实现。每一个 CSS 属性都有初始（默认）值。如果将 initial 值赋给某个属性，那么就会有效地将其重置默认值，这种操作相当于硬复位了该值。

initial 重置为属性的初始值，而不是元素的初始值。inline 才是 display 属性的初始值。
