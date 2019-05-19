let allLi = document.querySelectorAll("#grandParent ul li");
//klassik for
for (i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function () {
        let activeLi = document.querySelector(".active_menu");
        activeLi.classList.remove("active_menu");
        this.classList.add("active_menu");//allLi[i]

        let getcontent = document.querySelectorAll(".contains");

        let activecontent = document.querySelector(".active_contain");
        activecontent.classList.remove("active_contain");

        let activator = this.getAttribute('data-id');
        // for of 
        // console.log(getcontent.length);
        for (let paragraph of getcontent) {
            console.log(paragraph);
            if (paragraph.getAttribute('get-type') == activator) {
                paragraph.classList.add('active_contain');
            }
        }
    })
}
// for in Arasdirilacaq

