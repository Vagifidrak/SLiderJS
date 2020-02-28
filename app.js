var btnLeft=document.getElementById("btnLeft");
var btnRight=document.getElementById("btnRight")
var allSlider=document.querySelectorAll(".sliderItem")

var hazSlider=0;
btnLeft.onclick=function(){
    SliderAll(hazSlider -1)
}

btnRight.onclick=function(){
    SliderAll(hazSlider +1)
}


function SliderAll(say){
    allSlider[hazSlider].className = "sliderItem"
    hazSlider =(say + allSlider.length) % allSlider.length
    allSlider[hazSlider].className = "sliderItem active"
}

document.addEventListener("keyup", function(e){
    if(e.keyCode==39){
        SliderAll(hazSlider+1)
    }
    else if(e.keyCode==37){
        SliderAll(hazSlider-1)
    }
})