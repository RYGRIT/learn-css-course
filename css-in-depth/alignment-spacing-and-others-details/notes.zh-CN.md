## 对齐、间距等细节

通常情况下，创建一个弹性盒子需要用到前面提及的这些方法。

- 选择一个容器及其子元素，给容器设置`display: flex;`
- 如有必要，给容器设置 flex-direction
- 给弹性子元素设置外边距和/或 flex 值，用来控制他们的大小

### 理解**弹性容器**的属性

#### flex-wrap 属性

flex-wrap 属性允许弹性子元素换到新的一行或多行显示。它可以设置为 nowrap（初始值）、wrap 或者 wrap-reverse。启用换行后，子元素不在根据 flex-shrink 值收缩，任何超过弹性容器的子元素都会换行显示。

如果弹性方向是 column 或 column-reverse，那么 flex-wrap 会允许弹性子元素换到新的一列显示，不过这只在限制了容器高度的情况下会发生，否则容器会扩展高度以包含全部弹性子元素。

#### flex-flow 属性

flex-flow 属性是 flex-direction 和 flex-wrap 的简写。例如，`flex-flow: column wrap;`指定弹性子元素按照从上到下的方式排列，必要时换到新的一列。

#### justify-content 属性

当子元素未填满容器是，justify-content 属性控制子元素沿主轴方向的间距。它的值包括几个关键字：flex-start、flex-end、center、space-between 以及 space-around。

默认值 flex-start 让子元素从主轴的开始位置顺序排列；

值为 flex-end，子元素就从主轴的结束位置开始排列；

值为 center 的话，让子元素居中；

值为 space-between 将第一个弹性子元素放在主轴开始的地方，最后一个子元素放在主轴结束的地方，剩下的子元素间隔均匀地放在这两者之间的区域；

值为 space-around 类似，只不过给第一个子元素的前面和最后一个子元素的后面也加上了相同的间距。

间距是在元素的外边距之后进行计算的，而且 flex-grow 的值要考虑进来。也就是说，如果任意子元素的 flex-grow 的值不为 0，或者任意子元素在主轴方向的外边距为 auto，justify-content 就失效了。

#### align-items 属性

align-items 属性控制子元素在副轴方向的对齐方式。align-items 的初始值为 stretch，在水平排列的情况下让所有子元素填充容器的高度，在垂直排列的情况下让子元素填充容器的宽度，因此它能实现等高列。

flex-start 和 flex-end 让子元素与副轴的开始或结束为止对齐；

center 让元素居中；

baseline 让元素根据每个弹性子元素里大字号标题的基线与其他弹性子元素里较小文字的基线对齐时，baseline 就能派上用场。

#### align-content 属性

如果开启了换行，align-content 属性就可以控制弹性容器内沿副轴方向每行之间的间距。它支持的值有 flex-start、flex-end、center、stretch（初始值）、space-between 以及 space-around。这些值对间距的处理类似上面的 justify-content。

### 理解**弹性子元素**的属性

#### align-self 属性

该属性控制弹性子元素沿着容器副轴方向的对齐方式。它跟弹性容器的 align-items 属性效果相同，但是它能单独给弹性子元素设定不同的对齐方式。auto 为初始值，会以容器的 align-items 值为准。其他值会覆盖容器的设置。align-self 属性支持的关键字与 align-items 一样：flex-start、flex-end、center、stretch 以及 baseline。

#### order 属性

order 属性能改变子元素排列的顺序。还可以将其指定为任意正负整数。如果多个弹性子元素有一样的值，它们就会按照源码顺序出现。

初始状态下，所有的弹性子元素的 order 都为 0。指定一个元素的值为-1，它会移动到列表的最前面；指定为 1，则会移动到最后。
