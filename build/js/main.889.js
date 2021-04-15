window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header')
    circle = document.querySelectorAll('.slaid-circle')
    tab = document.querySelectorAll('.tab__item'),
    tabItems = document.querySelector('.tab__items'),
    tabVideo = document.querySelector('.tabcontent'),
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
    divImgFeedback = document.querySelector('.feedback-foto'),
    divVideoFeedback = document.querySelector('.feedback-video'),
    ImgFeedback = divImgFeedback.querySelectorAll('img'),
    namesFeedback = document.querySelector('.feedback-name'),
    tabVideos=[
        "j6m_IKIQgsI",
        "tfZl3wjIMPw",
        "Drp4i-u6DEA",
        "xYJQOzbKVE4",
        "4R3ZJO25rTc",
        "y2Np3N_jTAI"
    ]
    videoFeedback = [
        "b-ZNuNCtg2M",
        "iI-vQsTzJ94",
        "4q7dZNYkQUk",
        "o8ndky6INwc",
        "xFAEpnzz84I",
        ],
    nameFedback = [
        "Гузель",
        "Марина",
        "Лора",
        "Айрат",
        "Максим"
    ],
    arrHeader = [
        "url('./img/header/bg1.jpg')",
        "url('./img/header/bg2.jpg')",
        "url('./img/header/bg3.jpg')",
    ];

    let indeximg = 0,
        indexvid = 0,
        hIndex = 0,
        indexModal = 0,
        imgfunc = '',
        func = '';
    
    
   // ------------------Slider feedback--------------
    function video(divBlock,idVideo, itemVideo = 0) {
        divBlock.innerHTML='<iframe src="https://www.youtube.com/embed/'+idVideo[itemVideo]+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    function addImg(g = 0) {
        ImgFeedback[g].classList.remove('fed-img')
        ImgFeedback[g].classList.add('img-active')
        namesFeedback.textContent=nameFedback[g]
    }
    function dellImg() {
        ImgFeedback.forEach((i) => {
            i.classList.remove('img-active')
            i.classList.add('fed-img')
        })
    }
    dellImg()
    addImg()
    video(divVideoFeedback, videoFeedback)
    video(tabVideo,tabVideos)
    next.addEventListener('click', () => {
        if (indexvid > videoFeedback.length - 1 || indeximg > ImgFeedback.length - 2) {
            indexvid = 0
            indeximg = 0
        } else {  
            ++indexvid
            ++indeximg 
        }
        dellImg()
        addImg(indeximg)
        video(divVideoFeedback,videoFeedback, indexvid)
    })
    back.addEventListener('click', () => {
        if (indexvid ==0 || indeximg ==0) {
            indexvid = videoFeedback.length-1
            indeximg = --ImgFeedback.length
        } else {  
            --indexvid
            --indeximg
        }
        dellImg()
        addImg(indeximg)
        video(divVideoFeedback, videoFeedback, indexvid)
    })
// -----------------/ Slider feedback--------------------   
    
    
    
    
    
    
    
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
    }
    function addActiv(i=0) {
        tab[i].classList.add('tab_active')
    }
    tabItems.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tab__item')) {
            tab.forEach((item,i )=> {
                if (target == item) {
                    delActiv()
                    addActiv(i)
                    video(tabVideo,tabVideos,i)
                }
            })
        }
    })
    // -----------------/ Tabs--------------------







  










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
            console.log(+1)
            indexModal++
            if (indexModal > func.length - 1) {
                indexModal = 0
                console.log(+2)
                hudeImgGallary()
                showImgGallary(0)
                console.log(func.length)
            } else {
                console.log(+3)
                hudeImgGallary()
                showImgGallary(indexModal)
            }
            console.log(+4)
        })
        arrowModalBack.addEventListener('click', () => {
            indexModal--
            if (indexModal < 0) {
                indexModal = func.length - 1
                hudeImgGallary()
                showImgGallary(func.length - 1)
                console.log(func.length)
            } else {
                hudeImgGallary()
                showImgGallary(indexModal)
                console.log(indexModal)
            }
            console.log(-1)
        })

            //---// listen images---
     // ------------------Modal Gallary--------------
    //----------- API yutube-------------------------
   
    const tag = document.createElement("script");
    tag.src = "//www.youtube.com/player_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
     //---------// API yutube-------------------------

})