const rect = document.querySelector('#contaner');

rect.addEventListener('mousemove',function(details){
    const rectPotion = rect.getBoundingClientRect();
    const insideRectVal = Math.ceil(details.clientX - rectPotion.left);

    if(insideRectVal < rectPotion.width/2){
        const redColor = gsap.utils.mapRange(0,rectPotion.width/2,255,0,insideRectVal);
        gsap.to(rect,{
        backgroundColor: `rgb(${redColor},0,0)`,
        ease : Power4
    })
}
    else{
        const blueColor = gsap.utils.mapRange(rectPotion.width/2,rectPotion.width,0,255,insideRectVal);
        gsap.to(rect,{
        backgroundColor: `rgb(0,0,${blueColor})`,
        ease : Power4
    })
    }

}) 

rect.addEventListener('mouseleave',function(){
    gsap.to(rect,{
        backgroundColor: "white"
    })
})