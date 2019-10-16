window.onload = () => {
    var dom = document;
    var listItem = dom.querySelectorAll(".main_nav-link");

    function addClass(e){
        e.target.classList.add("active");
    }
    function removeClass(){
        for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.remove("active");
        }
    }
    function removeClassHover(e){
        e.target.classList.remove("active");
    }
    function addClassOk(e){
        e.target.removeEventListener("mouseout", removeClassHover);
        e.target.classList.add("active");
    }

    listItem.forEach((e) => {
            e.addEventListener("mouseover", removeClass);
            e.addEventListener("mouseover", addClass);
            e.addEventListener("mouseout", removeClassHover);
            e.addEventListener("click", addClassOk);
        }
    );
}