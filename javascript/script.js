const logoButton = document.querySelector(".logo-button")

const header = document.querySelector(".main__header")

        // menu //
logoButton.addEventListener("click", function(){
  const menu = document.querySelector(".menu")

  const body = document.body



  menu.classList.toggle("non-active")
  
  body.classList.toggle("no-scroll")
});
        // menu //

const hotBtns = document.querySelectorAll(".hotbar-btn");

hotBtns.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log("D")
    button.classList.toggle("active-button");
  });
});

        
        




