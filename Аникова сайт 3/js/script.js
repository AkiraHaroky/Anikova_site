
//ТАБЫ
function hideEl(el) {
    el.classList.add("hide");
}
function showEl(el) {
    el.classList.remove("hide");
}

let tab_btn = document.getElementsByClassName("change-content-btn"),
    tab_btn_container = document.getElementById("container-btn"),
    tab_btn_Text = document.querySelectorAll(".change-content-btn__text"),
    tab_content = document.querySelectorAll(".content-container");


tab_btn_container.addEventListener("mouseover", function (event) {
    let target = event.target;

    if (target && target.classList.contains("change-content-btn")) {

        for (var i = 0; i < tab_btn.length; i++) {
            // showEl(tab_btn_Text[i]);
            // tab_btn[i].classList.add("change-content-btn_anim");
            if (target == tab_btn[i]) {
                tab_btn[i].addEventListener("mouseover", function (event) {
                    let target = event.target;



                    showEl(tab_btn_Text[i]);


                });
                tab_btn[i].addEventListener("mouseout", function (event) {
                    let target = event.target;


                    hideEl(tab_btn_Text[i]);

                });
                tab_btn[i].addEventListener("click", function () {

                    for (var j = 0; j < tab_content.length; j++) {
                        if (!tab_content[j].classList.contains("content-hide")) {
                            tab_content[j].classList.add("content-hide");

                        }
                    }
                    tab_content[i].classList.remove("content-hide");
                });
                break;
            }

        }
    }
});
//ТАБЫ

//СЛАЙДЕР
const next_btn = this.document.getElementById('slider-next'),
    prev_btn = this.document.getElementById('slider-prev'),
    content_slider = this.document.getElementsByClassName("slider__main-sec");
let active_number = 0;

for (var i = 0; i < content_slider.length; i++) {
    if (!content_slider[i].classList.contains("active")) {
        content_slider[i].style.display = "none";
    }

}

next_btn.addEventListener("click", function () {

    // if (!content_slider[active_number].classList.contains("slider__main-sec_animation_over_dir")){
    //     content_slider[active_number].classList.remove("slider__main-sec_animation_over_dir");
    // }

    content_slider[active_number].style.display = "none";
    content_slider[active_number].classList.remove("slider__main-sec_animation_over_dir");
    active_number++;
    if (active_number == content_slider.length) {
        content_slider[content_slider.length - 1].style.display = "none";
        active_number = 0;

    }
    console.log(active_number);
    content_slider[active_number].style.display = "flex";

});

prev_btn.addEventListener("click", function () {

    content_slider[active_number].classList.remove("slider__main-sec_animation_over_dir");
    content_slider[active_number].style.display = "none";
    active_number--;
    if (active_number < 0) {
        content_slider[0].style.display = "none";
        active_number = content_slider.length - 1;

    }
    console.log(active_number);

    content_slider[active_number].classList.add("slider__main-sec_animation_over_dir");
    content_slider[active_number].style.display = "flex";

});
//СЛАЙДЕР

//АККОРДИОН
const accordion = () => {
    const accordeon_btn = document.querySelectorAll(".accordeon-el__slide-down-btn");
    accordeon_btn.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.classList.toggle("accordeon-el__slide-down-btn_animation");
            console.log("клик по кнопке");
            this.nextElementSibling.classList.toggle("info-hide");
        });
    });
};
accordion();
//АККОРДИОН