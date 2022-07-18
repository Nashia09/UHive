const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

window.onload=function(){
    
    sign_up_btn.addEventListener('click', () => {
      container.classList.add("sign-up-mode");
    });
    
    sign_in_btn.addEventListener('click', () => {
      container.classList.remove("sign-up-mode");
    });
  }

  

// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
