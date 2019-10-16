window.onload = () => {
    var dom = document;
    var listItem = dom.querySelectorAll(".main_nav-link");

    function removeClass(){
        for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.remove("active");
        }
    }
    function addClassOk(e){
        e.target.classList.add("active");
    }
    listItem.forEach((e) => {
            e.addEventListener("mouseover", removeClass);
            e.addEventListener("click", addClassOk);
        }
    );
}