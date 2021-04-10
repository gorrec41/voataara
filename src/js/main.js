window.addEventListener('DOMContentLoaded', () => {
    const header= document.querySelector('.header')
    tab = document.querySelectorAll('.tab__item'),
    tabItems = document.querySelector('.tab__items'),
    tabVideo = document.querySelectorAll('.tabcontent'),
    feedback = document.querySelector('.feedback-tabs'),
    feedbackItem = document.querySelectorAll('.feedback-item'),
    next = document.querySelector('.btn-next'),
    back = document.querySelector('.btn-back'),
    arrHeader = [
        "url('./../../img/header/bg1.jpg')",
        "url('./../../img/header/bg2.jpg')",
        "url('./../../img/header/bg3.jpg')",
    ];

let index = 0,
    hIndex= 0;

// ------------------bg header slider--------
    function hIndexNamber() {
        if (hIndex > 2) {
            console.log(hIndex)
            sliderHederBg()
            hIndex = 0
        } else {
            console.log(hIndex)
            sliderHederBg()
            ++hIndex
    }
}
function sliderHederBg() {
    header.style.backgroundImage = arrHeader[hIndex]
    }
sliderHederBg()
setInterval(hIndexNamber, 5000);
    // ------------------Tabs--------------------
    function delActiv() {
        tab.forEach(item => {
            item.classList.remove('tab_active')
        })
        tabVideo.forEach(item => {
            item.classList.remove('activvideo')
        })
    }
    function addActiv(i=0) {
        tab[i].classList.add('tab_active')
        tabVideo[i].classList.add('activvideo')
    }
    tabItems.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tab__item')) {
            tab.forEach((item,i )=> {
                if (target == item) {
                    delActiv()
                    addActiv(i)
                }
            })
        }
    })
    // -----------------/ Tabs--------------------

    // ------------------Slider--------------------
        function hideFeedback(){
            feedbackItem.forEach(item=>{
                item.classList.remove('feedback-activ')
                item.classList.add('feedback-hide')
            })
        }
        function showFeedback(n){
            feedbackItem[n].classList.remove('feedback-hide')
            feedbackItem[n].classList.add('feedback-activ')
            }
        hideFeedback();
        showFeedback(index)
        next.addEventListener('click',()=>{
            index=++index;
            if(index>feedbackItem.length-1){
                index=0
                hideFeedback();
                showFeedback(index);
                console.log(index)
            }else{
                hideFeedback();
                showFeedback(index);
                console.log(index)
            } 
        })
        back.addEventListener('click',()=>{
            index=--index;
            if(index<0){
                index=feedbackItem.length-1
                hideFeedback();
                showFeedback(index);
                console.log(index)
            }else{
                hideFeedback();
                showFeedback(index);
                console.log(index)
            }
        })
    // -----------------/ Slider--------------------
})