import "./app1.css";
import $ from "jquery";

//找到四个按钮和数值
const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");
//获得当前值，并保存起来
const n = localStorage.getItem("n");
$number.text(n || 100);

//绑定事件,获得数值并参与运算
$button1.on("click", () => {
    let n = parseInt($number.text());
    n += 1;
    //设置当前值为n
    localStorage.setItem("n", n);
    $number.text(n);
});
$button2.on("click", () => {
    let n = parseInt($number.text());
    n -= 1;
    $number.text(n);
    localStorage.setItem("n", n);
});
$button3.on("click", () => {
    let n = parseInt($number.text());
    n *= 2;
    $number.text(n);
    localStorage.setItem("n", n);
});
$button4.on("click", () => {
    let n = parseInt($number.text());
    n /= 2;
    $number.text(n);
    localStorage.setItem("n", n);
});