const showPopUp = () => {
  const popUp = document.querySelector(".pop-up");
  const signUpBtn = document.querySelector("#sign-up-btn");
  const closePopUpBtn = document.querySelector(".pop-up__close-btn");

  signUpBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    popUp.classList.add('visible');

    document.addEventListener("click", e => {
      let name = e.target.classList;
      name = [...name];
      name.forEach(classItem => {
        if(classItem === "pop-up") {
          popUp.classList.remove("visible");
        }
      });
    }, false);
  }, false);
  
  closePopUpBtn.addEventListener("click", function() {
    popUp.classList.remove('visible');
  }, false);
}

export default showPopUp;