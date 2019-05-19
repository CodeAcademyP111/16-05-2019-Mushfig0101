// let allLi =document.getElementById("container");

let allLi = document.querySelectorAll("#container ul li");
// console.log(allLi);

//  console.log(containP);





for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function () {

        // console.log(this);
        let activeLi = document.querySelector(".active_li");
        activeLi.classList.remove("active_li");
        allLi[i].classList.add("active_li");


  
        let containP = document.querySelectorAll("#container .contains")
        let activeP = document.querySelector(".active_p");
        activeP.classList.remove("active_p")
        let identify = allLi[i].getAttribute("data-id")



        for (let p = 0; p < containP.length; p++) {
            if (containP[p].getAttribute("get-type") == identify) {
                containP[p].classList.add("active_p")

            }

        }





    })
}