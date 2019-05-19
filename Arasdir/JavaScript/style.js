// let allLi =document.getElementById("container");

let allLi = document.querySelectorAll("#container ul li");
// console.log(allLi);

for (let i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener("click", function () {
    let activeLi = document.querySelector(".active_li");
    activeLi.classList.remove("active_li");
    this.classList.add("active_li");



    let getcontent = document.querySelectorAll(".contains");
    let activecontent = document.querySelector(".active_p");
    activecontent.classList.remove("active_p")
    let iden = this.getAttribute('data-id');



    for (let paragraph of getcontent) {
      if (paragraph.getAttribute('get-type') == iden) {
        paragraph.classList.add("active_p");


      }

    }

  })
}

