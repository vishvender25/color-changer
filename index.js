

// var colors = ["red", "green", "black", "blue" , "orange", "yellow"];
var num_r = 0 , num_g = 0 , num_b = 0;
var hexcol = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var heading_color = "";
function setHexColor(){
    var color = "";
    for(var i = 0 ; i<6 ; i++){
      var idx = Math.floor(Math.random()*16);
      color += hexcol[idx];
    }
  return color;
}

function changeBgColor(){
     num_r = Math.ceil(Math.random()*255);
     num_g = Math.ceil(Math.random()*255);
     num_b = Math.ceil(Math.random()*255);
    
    // document.querySelector("body").style.background = `rgb(${num_r},${num_g},${num_b})`; 
    // document.querySelector(".color").innerHTML =  `rgb(${num_r},${num_g},${num_b})`;
    // document.getElementById("bg-heading").style.color =  `rgb(${num_r},${num_g},${num_b})`;
    // document.getElementById("rgb-color").style.color =  `rgb(${num_r},${num_g},${num_b})`;
    heading_color = document.getElementById("bg-heading").innerText;
    var length = heading_color.length;
    if(length < 20)
    {   
        document.querySelector("body").style.background = `rgb(${num_r},${num_g},${num_b})`; 
        document.querySelector(".color").innerHTML =  `rgb(${num_r},${num_g},${num_b})`;
        document.getElementById("bg-heading").style.color =  `rgb(${num_r},${num_g},${num_b})`;
        document.getElementById("rgb-color").style.color =  `rgb(${num_r},${num_g},${num_b})`;
    }
    else{
        var color_obtained = setHexColor();
        document.querySelector("body").style.background = `#${color_obtained}`;
        document.querySelector(".color").innerHTML = `#${color_obtained}`;
        document.getElementById("bg-heading").style.color = `#${color_obtained}`;
        document.getElementById("rgb-color").style.color = `#${color_obtained}`;

    }
   
}   
document.getElementById("click-me").addEventListener("click",changeBgColor);

const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  