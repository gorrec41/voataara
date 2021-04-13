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
    galleryImage = document.querySelectorAll('.imggalary'),
    modalgGalary1 = document.querySelectorAll('.mg1'),
    modalgGalary2 = document.querySelectorAll('.mg2'),
    modalgGalary3 = document.querySelectorAll('.mg3'), 
    body = document.querySelector('body'),    
    arrHeader = [
        "url('./../../img/header/bg1.jpg')",
        "url('./../../img/header/bg2.jpg')",
        "url('./../../img/header/bg3.jpg')",
    ];

let index = 0,
    hIndex = 0,
    indexModal = 0,
    imgfunc = '',
    func = '';
//-------------------------------------------
//Инициализировать приложение

window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

function InitApp() //Растягиваем холст на весь экран
{
    body.width = window.innerWidth;
    body.height = window.innerHeight;
}
InitApp(); 
//-------------------------------------------
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
        if (hIndex > arrHeader.length-1) {
            
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
setInterval(hIndexNamber, 2000);
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
        document.querySelector('body').classList.add('noscroll')
    }
    
    fotoWrap.addEventListener('click', (ev) => {
        const target = ev.target
        if (target.classList.contains("gl1") == true) {
            imgfunc = 'gl1'
            func = 'modalgGalary1'
            hideGallary()
            hudeImgGallary()
            showGallary()
            showImgGallary()
        } else if (target.classList.contains("gl2") == true) {
            imgfunc = 'gl2'
            func = 'modalgGalary2'
            hideGallary()
            showGallary()
            showImgGallary()
        }else if (target.classList.contains("gl3") == true) {
            imgfunc = 'gl3'
            func = 'modalgGalary3'
            hideGallary()
            showGallary()
            showImgGallary()
        }
        
    })
    modalHides.addEventListener('click', () => {
        document.querySelector('body').classList.remove('noscroll')
        document.querySelector('body').classList.add('body')
        hideGallary()
        hudeImgGallary()
    })
            //-// open and close modal window---
            //---listen images------
    function hudeImgGallary() {
        galleryImage.forEach(it => {
            it.classList.remove('imgactive')
        })
    }
    
    function showImgGallary(i = 0) {
        if (imgfunc == 'gl1') {
            modalgGalary1.forEach(()=> {
            modalgGalary1[i].classList.add('imgactive')
            })
        } else if(imgfunc == 'gl2'){
            modalgGalary2.forEach(()=> {
                modalgGalary2[i].classList.add('imgactive')
                })
        } else if(imgfunc == 'gl3'){
            modalgGalary3.forEach(()=> {
                modalgGalary3[i].classList.add('imgactive')
                })
        }
    }
    hudeImgGallary()
    arrowModalNext.addEventListener('click', () => {
        indexModal++
        if (indexModal > func.length-1) {
            indexModal = 0
            hudeImgGallary()
            showImgGallary(0)
            console.log(func.length)
        } else {
            hudeImgGallary()
            showImgGallary(indexModal)
            console.log(func.length)
        }     
    })
    arrowModalBack.addEventListener('click', () => {
        indexModal--
        if (indexModal < 0) {
            indexModal = func.length-1
            hudeImgGallary()
            showImgGallary(func.length-1)
            console.log(func.length)
        } else {
            hudeImgGallary()
            showImgGallary(indexModal)
            console.log(indexModal)
        }     
    })
            //---// listen images---
     // ------------------Modal Gallary--------------
})