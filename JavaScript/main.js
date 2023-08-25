const footList = document.querySelectorAll("footer .col-one ul h3");

footList.forEach((e) => {
  e.addEventListener("click", () => {
    footList.forEach((ele) => {
      if (
				e.parentElement.parentElement.getAttribute("class") ===
				ele.parentElement.parentElement.getAttribute("class")
			) {
				ele.parentElement.parentElement.classList.toggle("active");
			} else {
				ele.parentElement.parentElement.classList.remove("active");
			}
    })
  })
})