var checkbox = document.querySelector("input[name=dark]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("body").style.backgroundColor = "black";
    document.getElementById("title").style.backgroundColor = "gray";
    document.querySelectorAll(".bodyText").forEach((el, i) => {
      el.style.color = "white";
    });
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.getElementById("title").style.backgroundColor = "purple";
    document.querySelectorAll(".bodyText").forEach((el, i) => {
      el.style.color = "black";
    });
  }
});
