const sidebar = document.querySelector(".sidebar");
const body2 = document.querySelector("#body2")
body2.addEventListener("click",()=>{

    // omenu.classList.toggle("fa-bars");
    // omenu.classList.toggle("fa-xmark");
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        
    } else {
        // sidebar.style.display = "block";
        omenu.classList.toggle("fa-bars");
        omenu.classList.toggle("fa-xmark");
    }
    fadeOut()
    sidebar.style.display = "none"
})

const omenu = document.getElementById("omenu");

omenu.addEventListener("click", () => {
    if (sidebar.style.display === "block" || sidebar.style.display === "") {
        fadeOut()
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
    omenu.classList.toggle("fa-bars");
    omenu.classList.toggle("fa-xmark");


    
});

if (sidebar.style.display === "block" || sidebar.style.display === "") {
    fadeOut()
    sidebar.style.display = "none";
} else {
    sidebar.style.display = "block";
}

const bcolorinput = document.querySelector("#bci");
const savedBackgroundColor = localStorage.getItem("background-color");

if (savedBackgroundColor) {
    const cbc = document.body; // Select the body element
    cbc.style.backgroundColor = savedBackgroundColor;
    bcolorinput.value = savedBackgroundColor;
}

bcolorinput.addEventListener("input", () => {
    const newBackgroundColor = bcolorinput.value;
    localStorage.setItem("background-color", newBackgroundColor);
    const cbc = document.body;
    cbc.style.backgroundColor = newBackgroundColor;
});

const hfcolorinput = document.querySelector("#hfcolor");
const savedhfColor = localStorage.getItem("hf-color");

if (savedhfColor) {
    const chfc = document.querySelector("header"); // Select the header element
    chfc.style.backgroundColor = savedhfColor;
    hfcolorinput.value = savedhfColor;

    const cfhc = document.querySelector("footer");
    cfhc.style.backgroundColor = savedhfColor;
}

hfcolorinput.addEventListener("input", () => {
    const newHFColor = hfcolorinput.value;
    localStorage.setItem("hf-color", newHFColor);
    const chfc = document.querySelector("header");
    chfc.style.backgroundColor = newHFColor;
    const cfhc = document.querySelector("footer");
    cfhc.style.backgroundColor = newHFColor;

    const hf_text_c = document.querySelector("header") 
    const fh_text_c = document.querySelector("footer") 
    const h_btn_c = document.querySelector(".h-btn") 
    const h_btni_c = document.querySelector("#h-btn") 
    const textColor = isColorDark(newHFColor) ? "#fff" : "#000";
    localStorage.setItem("textColor",textColor)
    const stextColor = localStorage.getItem("textColor")
    hf_text_c.style.color = stextColor;
    h_btn_c.style.color = stextColor;
    h_btni_c.style.color = stextColor;
    fh_text_c.style.color = stextColor;
});

function isColorDark(color) {
    const rgb = parseInt(color.slice(1), 16); // Convert hex to decimal
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Calculate brightness

    return brightness < 128; // You can adjust this threshold for what you consider "dark"
}

document.querySelector('.fa-bars').addEventListener('click', function() {
    var animatedDiv = document.querySelector(".sidebar");
    animatedDiv.classList.remove('hidden');
    animatedDiv.style.animationName = 'fadeIn';
    animatedDiv.style.animationFillMode = 'forwards';
    animatedDiv.style.animationIterationCount = 1;
    animatedDiv.style.animationDuration = '0.9s';
    animatedDiv.style.animationTimingFunction = 'ease';
   animatedDiv.style.animationDirection = 'normal';
  });



 function fadeOut() {
    // alert()
    var animatedDiv = document.querySelector(".sidebar");
    animatedDiv.style.animationName = 'fadeOut';
    animatedDiv.style.animationFillMode = 'forwards';
    animatedDiv.style.animationIterationCount = 1;
    animatedDiv.style.animationDuration = '0.5s';
    animatedDiv.style.animationTimingFunction = 'ease';
    animatedDiv.style.animationDirection = 'normal';
    animatedDiv.addEventListener('animationend', function() {
      animatedDiv.classList.add('hidden');
    });
}

const hf_text_c = document.querySelector("header") 
    const fh_text_c = document.querySelector("footer") 
    const h_btn_c = document.querySelector(".h-btn") 
    const h_btni_c = document.querySelector("#h-btn") 

const stextColor = localStorage.getItem("textColor")
    hf_text_c.style.color = stextColor;
    h_btn_c.style.color = stextColor;
    h_btni_c.style.color = stextColor;
    fh_text_c.style.color = stextColor;
