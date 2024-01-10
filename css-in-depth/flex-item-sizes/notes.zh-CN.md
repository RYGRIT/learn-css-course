## 弹性子元素的大小

### flex 属性

flex 属性控制弹性子元素在主轴方向上的大小（在这里指的元素的宽度）。

flex 属性是三个不同大小属性的简写：flex-grow、flex-shrink 和 flex-basis。

flex-basis 定义里元素大小的基准值，即一个初始的“主尺寸”。它可以设置为任意的 width 值，包括 px、em、百分比。它的初始值是 auto，此时浏览器会检查元素是否设置了 width 属性值。如果有，则使用 width 的值作为 flex-basis 的值；如果没有，则用元素内容自身的大小。如果 flex-basis 的值不是 auto，width 属性会被忽略。

flex-grow 的值为非负整数。如果一个弹性子元素的 flex-grow 值为 0，那么它的宽度不会超过 flex-basis 的值；如果某个弹性子元素的增长因子（flex-grow）非 0，那么这些元素会增长到所有剩余空间被分配完，也就意味着弹性子元素会填满容器的宽度。它的值越大，元素的“权重”越高，也就会占据更大的剩余宽度。例如：一个`flex-grow: 2;`的子元素增长的宽度是`flex-grow: 1;`的子元素的两倍。

> 提示
>
> 如果某个字属性被省略，那么 flex 简写属性会给出有用的默认值：flex-grow 为 1、flex-shrink 为 1、flex-basis 为 0%。

flex-shrink 属性与 flex-grow 遵循相似的原则。计算出弹性子元素的初始主尺寸后，它们的累加值可能会超过弹性容器的可用宽度。如果不用 flex-shrink，就会导致溢出。每个子元素的 flex-shrink 值代表了它是否应该收缩以防止溢出。如果某个子元素为`flex-shrink: 0;`，则不会收缩；如果值大于 0，则会收缩至不再溢出。按照 flex-shrink 值的比例，值越大的元素收缩越多。

> 说明
>
> 当 flex-basis 为 0%时，内边距会改变弹性子元素的初始主宽度计算的方式。
