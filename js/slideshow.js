window.onload = () =>
{
    cycleSlide();
};

let loopHandle = 0;
let index = 0;

function cycleSlide()
{
    let allSlides = document.getElementsByClassName("slideshow-slide");
    for(let i = 0; i < allSlides.length; i++)
        allSlides[i].style.display = "none";

    index += 1;
    
    if(index > allSlides.length)
        index = 1;

    allSlides[index - 1].style.display = "block";

    if(!loopHandle)
        loopHandle = setInterval(cycleSlide, 5000);
}