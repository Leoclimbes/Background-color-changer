let changeButton = document.getElementById("change-button");
let secretButton = document.getElementById("secret-button");
let goHomeBtn = document.getElementById("goHome")

const colorsArray = [
        "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(192, 192, 192)", "rgb(128, 128, 128)", "rgb(128, 0, 0)", "rgb(128, 128, 0)",
        "rgb(0, 128, 0)", "rgb(128, 0, 128)", "rgb(0, 128, 128)", "rgb(0, 0, 128)", "rgb(255, 165, 0)", "rgb(255, 192, 203)", "rgb(218, 112, 214)", "rgb(75, 0, 130)", "rgb(240, 230, 140)", "rgb(173, 216, 230)",
        "rgb(0, 255, 127)", "rgb(255, 105, 180)", "rgb(70, 130, 180)", "rgb(139, 69, 19)", "rgb(255, 140, 0)", "rgb(154, 205, 50)", "rgb(255, 20, 147)", "rgb(0, 191, 255)", "rgb(220, 20, 60)", "rgb(124, 252, 0)",
        "rgb(255, 215, 0)", "rgb(135, 206, 250)", "rgb(219, 112, 147)", "rgb(199, 21, 133)", "rgb(255, 228, 225)", "rgb(72, 209, 204)", "rgb(60, 179, 113)", "rgb(0, 250, 154)", "rgb(238, 130, 238)", "rgb(176, 224, 230)",
        "rgb(95, 158, 160)", "rgb(255, 160, 122)", "rgb(152, 251, 152)", "rgb(255, 222, 173)", "rgb(210, 105, 30)", "rgb(112, 128, 144)", "rgb(176, 196, 222)", "rgb(119, 136, 153)", "rgb(47, 79, 79)", "rgb(255, 250, 250)",
        "rgb(0, 255, 255)", "rgb(245, 245, 220)", "rgb(255, 239, 213)", "rgb(255, 228, 181)", "rgb(221, 160, 221)", "rgb(238, 232, 170)", "rgb(250, 250, 210)", "rgb(255, 250, 205)", "rgb(240, 255, 240)", "rgb(255, 245, 238)",
        "rgb(255, 255, 224)", "rgb(245, 245, 245)", "rgb(240, 248, 255)", "rgb(248, 248, 255)", "rgb(255, 248, 220)", "rgb(255, 255, 240)", "rgb(250, 235, 215)", "rgb(255, 228, 196)", "rgb(255, 218, 185)", "rgb(238, 232, 170)",
        "rgb(240, 230, 140)", "rgb(189, 183, 107)", "rgb(128, 128, 0)", "rgb(255, 215, 0)", "rgb(184, 134, 11)", "rgb(218, 165, 32)", "rgb(238, 221, 130)", "rgb(255, 255, 0)", "rgb(255, 69, 0)", "rgb(255, 99, 71)",
        "rgb(255, 127, 80)", "rgb(255, 160, 122)", "rgb(255, 165, 0)", "rgb(255, 140, 0)", "rgb(255, 215, 0)", "rgb(255, 0, 0)", "rgb(220, 20, 60)", "rgb(178, 34, 34)", "rgb(139, 0, 0)", "rgb(128, 0, 0)",
        "rgb(255, 20, 147)", "rgb(199, 21, 133)", "rgb(219, 112, 147)", "rgb(255, 182, 193)", "rgb(255, 105, 180)", "rgb(255, 192, 203)", "rgb(255, 228, 225)" 
];
let btnColor = [
    "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(192, 192, 192)", "rgb(128, 128, 128)", "rgb(128, 0, 0)", "rgb(128, 128, 0)",
        "rgb(0, 128, 0)", "rgb(128, 0, 128)", "rgb(0, 128, 128)", "rgb(0, 0, 128)", "rgb(255, 165, 0)", "rgb(255, 192, 203)", "rgb(218, 112, 214)", "rgb(75, 0, 130)", "rgb(240, 230, 140)", "rgb(173, 216, 230)",
        "rgb(0, 255, 127)", "rgb(255, 105, 180)", "rgb(70, 130, 180)", "rgb(139, 69, 19)", "rgb(255, 140, 0)", "rgb(154, 205, 50)", "rgb(255, 20, 147)", "rgb(0, 191, 255)", "rgb(220, 20, 60)", "rgb(124, 252, 0)",
        "rgb(255, 215, 0)", "rgb(135, 206, 250)", "rgb(219, 112, 147)", "rgb(199, 21, 133)", "rgb(255, 228, 225)", "rgb(72, 209, 204)", "rgb(60, 179, 113)", "rgb(0, 250, 154)", "rgb(238, 130, 238)", "rgb(176, 224, 230)",
        "rgb(95, 158, 160)", "rgb(255, 160, 122)", "rgb(152, 251, 152)", "rgb(255, 222, 173)", "rgb(210, 105, 30)", "rgb(112, 128, 144)", "rgb(176, 196, 222)", "rgb(119, 136, 153)", "rgb(47, 79, 79)", "rgb(255, 250, 250)",
        "rgb(0, 255, 255)", "rgb(245, 245, 220)", "rgb(255, 239, 213)", "rgb(255, 228, 181)", "rgb(221, 160, 221)", "rgb(238, 232, 170)", "rgb(250, 250, 210)", "rgb(255, 250, 205)", "rgb(240, 255, 240)", "rgb(255, 245, 238)",
        "rgb(255, 255, 224)", "rgb(245, 245, 245)", "rgb(240, 248, 255)", "rgb(248, 248, 255)", "rgb(255, 248, 220)", "rgb(255, 255, 240)", "rgb(250, 235, 215)", "rgb(255, 228, 196)", "rgb(255, 218, 185)", "rgb(238, 232, 170)",
        "rgb(240, 230, 140)", "rgb(189, 183, 107)", "rgb(128, 128, 0)", "rgb(255, 215, 0)", "rgb(184, 134, 11)", "rgb(218, 165, 32)", "rgb(238, 221, 130)", "rgb(255, 255, 0)", "rgb(255, 69, 0)", "rgb(255, 99, 71)",
        "rgb(255, 127, 80)", "rgb(255, 160, 122)", "rgb(255, 165, 0)", "rgb(255, 140, 0)", "rgb(255, 215, 0)", "rgb(255, 0, 0)", "rgb(220, 20, 60)", "rgb(178, 34, 34)", "rgb(139, 0, 0)", "rgb(128, 0, 0)",
        "rgb(255, 20, 147)", "rgb(199, 21, 133)", "rgb(219, 112, 147)", "rgb(255, 182, 193)", "rgb(255, 105, 180)", "rgb(255, 192, 203)", "rgb(255, 228, 225)"     
]
let body = document.querySelector("body")

function getRandomIndex() {
        return  Math.floor(Math.random() * colorsArray.length);
};
 
 function changecolor() {
        let color = colorsArray[getRandomIndex()];
        body.style.backgroundColor = color;
        secretButton.style.backgroundColor = color;
        secretButton.style.color = color;
        changeBtnColor();
 }

 function getRandomColor() {
        return Math.floor(Math.random() * btnColor.length);
 }
 function changeBtnColor() {
        let color = btnColor[getRandomColor()];
        changeButton.style.backgroundColor = color;
 }
 function goSecret() {
       document.querySelector(".secretScreen").style.display = "flex";
       document.querySelector("main").style.display = "inline-block";
   }
   function goHome() {
    document.querySelector(".secretScreen").style.display = "none";
   }
   
   document.addEventListener("dblclick", function(event) {
       event.preventDefault();  
   });
   
   
   document.addEventListener("touchstart", function(event) {
       if (event.touches.length > 1) {
           event.preventDefault(); 
       }
   }, { passive: false });
changeButton.onclick = changecolor;
secretButton.onclick = goSecret;
goHomeBtn.onclick = goHome; 

