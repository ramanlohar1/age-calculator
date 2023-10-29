const hf_text_c = document.querySelector("header") 
    const fh_text_c = document.querySelector("footer") 
    const h_btn_c = document.querySelector(".h-btn") 
    const h_btni_c = document.querySelector("#h-btn") 

const stextColor = localStorage.getItem("textColor")
    hf_text_c.style.color = stextColor;
    h_btn_c.style.color = stextColor;
    h_btni_c.style.color = stextColor;
    fh_text_c.style.color = stextColor;

// Change the status bar color to red
document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FF0000');

// Change the status bar color to blue
Android.changeStatusBarColor(stextColor);
