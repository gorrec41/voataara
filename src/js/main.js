window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header')
    circle = document.querySelectorAll('.slaid-circle')
    tab = document.querySelectorAll('.tab__item'),
    tabItems = document.querySelector('.tab__items'),
    tabVideo = document.querySelectorAll('.tabcontent'),
    feedback = document.querySelector('.feedback-tabs'),
    feedbackItem = document.querySelectorAll('.feedback-item'),
    next = document.querySelector('.btn-next'),
    back = document.querySelector('.btn-back'),
    modalGallary = document.querySelector('.modalgallary'),
    gellaryItem = document.querySelectorAll('.foto-gallery'),
    fotoWrap = document.querySelector('.foto-wrap'),
    modalHides = document.querySelector('.modal-close'),
    arrowModalNext = document.querySelector('.neximg'),
    arrowModalBack = document.querySelector('.backimg'),
    galleryImage = document.querySelectorAll('.imggalary')  
    arrHeader = [
        "url('./../../img/header/bg1.jpg')",
        "url('./../../img/header/bg2.jpg')",
        "url('./../../img/header/bg3.jpg')",
    ];

let index = 0,
    hIndex= 0;

// ------------------bg header slider--------
    function circleHide() {
        circle.forEach (item=> {
            item.classList.remove('activ')
        })
    }
    function circleActiv() {
        circle.forEach((item, i) => {
            if (hIndex == i) {
                circleHide()
                item.classList.add('activ')
            }
        })
    }
    function hIndexNamber() {
        if (hIndex > 2) {
            
            sliderHederBg()
            hIndex = 0
        } else {
            sliderHederBg()
            ++hIndex
    }
}
function sliderHederBg() {
    header.style.backgroundImage = arrHeader[hIndex]
    circleActiv()
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
            }else{
                hideFeedback();
                showFeedback(index);
            } 
        })
        back.addEventListener('click',()=>{
            index=--index;
            if(index<0){
                index=feedbackItem.length-1
                hideFeedback();
                showFeedback(index);
            }else{
                hideFeedback();
                showFeedback(index);
            }
        })
    // -----------------/ Slider--------------------
    // ------------------Modal Gallary--------------
            //---open and close modal window---
    function hideGallary() {
        modalGallary.classList.remove('modalshow')
    }
    function showGallary() {
        modalGallary.classList.add('modalshow')
    }
    fotoWrap.addEventListener('click', (ev) => {
        const target = ev.target
        if (target.classList.contains("gallery-title")==true){
            showGallary()
        }
    })
    modalHides.addEventListener('click', () => {
        hideGallary()
    })
            //-// open and close modal window---
            //---listen images------
    function hudeImgGallary() {
        galleryImage.forEach(it => {
            it.classList.remove('imgactive')
        })
    }
    let indexModal = 0;
    function showImgGallary(i=0) {
        galleryImage.forEach(()=> {
            galleryImage[i].classList.add('imgactive')
        })
    }
    
    hudeImgGallary()
    showImgGallary()
    arrowModalNext.addEventListener('click', () => {
        indexModal++
        if (indexModal > galleryImage.length-1) {
            indexModal = 0
            hudeImgGallary()
            showImgGallary(indexModal)
        } else {
            hudeImgGallary()
            showImgGallary(indexModal)
        }     
    })
    arrowModalBack.addEventListener('click', () => {
        indexModal--
        if (indexModal < 0) {
            indexModal = galleryImage.length-1
            hudeImgGallary()
            showImgGallary(indexModal)
        } else {
            hudeImgGallary()
            showImgGallary(indexModal)
        }     
    })
            //---// listen images---
     // ------------------Modal Gallary--------------
})