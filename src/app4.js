import $ from 'jquery'
import './app4.css'

//mouseenter和mouseleave
const $circle = $('#app4 .circle')
$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})