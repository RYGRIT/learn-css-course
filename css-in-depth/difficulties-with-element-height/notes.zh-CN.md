## 元素高度的问题

处理元素高度的方式跟处理宽度不一样。之前对 border-box 对修改依然适用于高度，而且很有用，但是通常最好避免给元素指定明确的高度。普通文档流是为限定的宽度和无限的高度设计的。内容会填满视口的宽度，然后在必要的时候折行。

### 控制溢出行为

当明确设置一个元素的高度时，内容可能会移除容器。文档流不考虑溢出的情况，其容器下方的任何内容都会渲染到溢出内容的上面。

用 overflow 属性可以控制溢出内容的行为，该属性支持以下 4 个值。

- visible（默认值）：所有内容可见，即使溢出容器边缘。
- hidden：溢出容器内边距边缘的内容被裁剪，无法看见。
- scroll：容器出现滚动条，用户可以通过滚动查看剩余内容。在一些操作系统上，会出现水平和垂直两种滚动条，即使所有内容都可见（不溢出）。不过，在这种情况下，滚动条不可滚动（置灰）。
- auto：只有内容溢出时容器才会出现滚动条。

大多数情况下，建议使用 auto 而不是 scroll，因为这样滚动条不会一直出现。

请谨慎地使用滚动条。浏览器给网页最外层加上了滚动条，如果网页内部再嵌套滚动区域，滚轮就会停止滚动网页，当鼠标到达一个较小的滚动区域，滚轮就会停止滚动网页，转而滚动较小的区域。

> 注意：水平方向的溢出
>
> 一个典型的场景就是在一个很窄的容器中放一条很长的 URL。溢出的规则跟垂直方向上的一致。

### 百分比高度的备选方案

用百分比指定高度存在问题。百分比参考的是元素容器块的大小，但是容器的高度通常是由子元素的高度决定的。这样会造成死循环，浏览器处理不了，因此它会忽略这个声明。**要想让百分比高度生效，必须给父元素明确定义一个高度。**

#### 等高列

表格布局、伪元素、负外边距、Flexbox 实现等高列

Flexbox 默认会产生等高的元素。

给容器设置`display: flex;`，它就变成了一个弹性容器（flex container），子元素默认等高。你可以给子元素设置宽度和外边距，尽管加起来可能超过 100%，Flexbox 也能妥善处理。

> ⚠️ 警告
>
> 除非别无选择，否则不要明确设置元素的高度。设置高度一定会导致更复杂的情况。

### 使用 min-height 和 max-height

可以用这两个属性指定高度的最小值或最大值，而不是明确定义高度，这样元素就可以在这些界限内自动决定高度。

min-height 指定一个最小高度，而不指定它的明确高度。这意味着元素至少等于你指定的高度，如果内容太多，浏览器就会允许元素自己扩展高度，以免内容溢出。

max-height 允许元素自然地增高到一个特定界限。如果到达这个界限，元素就不再增高，内容会溢出。

### 垂直居中内容

vertical-align 声明只会影响行内元素或者 table-cell 元素。对于行内元素，它控制着该元素跟同一个行内其他元素之间的对齐关系。对于显示为 table-cell 的元素，vertical-align 控制了内容在单元格内的对齐。

CSS 中最简单的垂直居中方法是给容器相等的上下内边距。

在容器里让内容居中最好的方式是根据特定场景考虑不同因素。做出判断前，先逐个询问自己以下几个问题，直到找到合适的解决办法。

- 可以用一个自然高度的容器吗？给容器加上相等的上下内边距让内容居中。
- 容器需要指定高度或者避免使用内边距吗？对容器使用 display: table-cell 和 vertical-align: middle。
- 可以用 Flexbox 吗？如果不需要支持 IE9，可以用 Flexbox 居中内容。
- 容器里面的内容只有一行文字吗？设置一个大的行高，让它等于理想的容器高度。这样会让容器高度扩展到能够容纳行高。如果内容不是行内元素，可以设置为 inline-block。
- 容器和内容的高度都知道吗？将内容绝对定位。
- 不知道内部元素的高度？用绝对定位结合变形（transform）。