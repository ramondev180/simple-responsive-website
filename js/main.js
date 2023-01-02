let $ = function (selector) {
    return document.querySelector(selector);
}
let $all = function (selector) {
    return document.querySelectorAll(selector);
}
$(".menu").addEventListener("click", function (e) {
    e.stopPropagation();
    $(".menu").classList.toggle("open");
    $(".navbar-area").classList.toggle("active");
    $(".navbar-area.active").addEventListener("click", function () {
        $(".menu").classList.remove("open");
        $(".navbar-area").classList.remove("active");
    })
});

scrollTo(0,innerHeight+document.documentElement.scrollHeight);
let sliderItems = $all(".carousel .sliders .item");
let index = 0;
clearSlider();
sliderItems[index].classList.remove("freeze");
sliderItems[index].classList.add("ani");
setInterval(function () {
    index++;
    sliderNext();
}, 5000);
function sliderNext() {
    clearSlider();
    if (index > sliderItems.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = sliderItems.length - 1;
    }
    sliderItems[index].classList.remove("freeze");
    sliderItems[index].classList.add("ani");
}
function clearSlider() {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.add("freeze");
        sliderItems[i].classList.remove("ani");
    }
}
$(".controller .next").addEventListener("click", function () {
    index++;
    sliderNext()
})
$(".controller .prev").addEventListener("click", function () {
    index--;
    sliderNext();
})