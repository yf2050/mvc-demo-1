import "./app2.css";
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
//用事件委托，监听li的点击事件
$tabBar.on('click', 'li', e => {
    //获得事件绑定元素的下标$li.index()
    const $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    const index = $li.index()
    //通过内容的下标，添加一个active类和删除兄弟类
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})
//默认通过下标触发点击.eq(0).trigger
$tabBar.children().eq(0).trigger('click')