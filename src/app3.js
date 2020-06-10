import $ from 'jquery'
import './app3.css'

//获得这个元素并加点击事件，同时.toggleClass是有则减，有则增
const $square = $('#app3 .square')
$square.on('click', () => {
    $square.toggleClass('active')
})