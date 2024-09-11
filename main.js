
const cube = document.getElementById('box');
function box_element () {
    
    box.style.top = Math.random() * 100  + "px"
    box.style.left = Math.random() * 1000  + "px"
    box.style.right = Math.random() * 5000  + "px"
    box.style.bottom = Math.random() * 20  + "px"
    
    
let colour1 = Math.random() * 255;
let  colour2 = Math.random() * 255;
let  colour3 = Math.random() * 255;

box.style.backgroundColor = `rgb(${colour1}, ${colour2}, ${colour3})`;

    
   
   
    box.style.width = Math.random() * 1000 + 10  +"px" ;
    box.style.height = Math.random()  * 100; +"px"
    
}


setInterval(box_element, 2000);































