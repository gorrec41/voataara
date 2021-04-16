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
    gallaryClickImg1 = document.querySelector('.gl1'),
    gallaryClickImg2 = document.querySelector('.gl2'),
    gallaryClickImg3=document.querySelector('.gl3'),
    fotoWrap = document.querySelector('.foto-wrap'),
    modalHides = document.querySelector('.modal-close'),
    arrowModalNext = document.querySelector('.neximg'),
    arrowModalBack = document.querySelector('.backimg'),
    galleryImage = document.querySelector('.imggalary'),
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
        "url('./../../img/header/bg1.jpg')",
        "url('./../../img/header/bg2.jpg')",
        "url('./../../img/header/bg3.jpg')",
    ];
    gallery1 = [
        '<img src="./img/ft/IMG_7981.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_7982.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_7984.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_7985.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_7988.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_7990.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8060.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8081.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8111.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8149.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8200.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8204.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8212.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8216.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8222.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8223.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_8273.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9292.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9303.jpg" alt="фото"/>'
]
gallery2 = [
    '<img src="./img/fb/IMG_8185.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9373.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9381.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9396.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9401.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9418.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9431.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9434.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9435.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9436.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9443.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9448.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9454.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9509.jpg" alt="фото"/>',
    '<img src="./img/fb/IMG_9510.jpg" alt="фото"/>'
],
    gallery3 = [
        '<img src="./img/ft/IMG_9314.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9317.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9365.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9384.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9407.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9417.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9421.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9444.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9445.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9466.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9475.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9489.jpg" alt="фото"/>',
        '<img src="./img/ft/IMG_9519.jpg" alt="фото"/>'
]
    ;
    let indeximg = 0,
        indexvid = 0,
        hIndex = 0,
        indexModal = 0,
        func ;
    //-----иницилизация размеров
        window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново
        function InitApp() //Растягиваем холст на весь экран
        {
            body.width = window.innerWidth;
            body.height = window.innerHeight;
        }
        InitApp(); 
        //-------------------------------------------
            
    
    // ------------------Modal Gallary--------------
    function modalShowGallary() {
        modalGallary.classList.add('modalshow')
    }
    function showImgGallary(gallary,indeximg) {
        galleryImage.innerHTML=gallary[indeximg]
    }
    function hideImggallary() {
        galleryImage.innerHTML=''
    }
    function maxIndexImg(gall,index) {
        if (index>gall.length-1) {
            indexModal = 0
        } else {
            indexModal = index
        }
    }
    function minIndexImg(gallary,index) {
        if (index==0||index<0) {
            indexModal = gallary.length - 1
        } else {
            indexModal = index
        }
    }
    gallaryClickImg1.addEventListener('click', () => {
        modalShowGallary()
        showImgGallary(gallery1, indexModal)
        func=1
    })
    gallaryClickImg2.addEventListener('click', () => {
        modalShowGallary()
        showImgGallary(gallery2, indexModal)
        func=2
    })
    gallaryClickImg3.addEventListener('click', () => {
        modalShowGallary()
        showImgGallary(gallery3, indexModal)
        func=3
    })
    arrowModalNext.addEventListener('click', ()=>{
        switch (func) {
            case 1:
                indexModal++;
                hideImggallary();
                maxIndexImg(gallery1, indexModal);
                showImgGallary(gallery1, indexModal)
                break;
            case 2:
                indexModal++;
                hideImggallary();
                maxIndexImg(gallery2, indexModal);
                showImgGallary(gallery2, indexModal)
                break;
            case 3:
                indexModal++;
                hideImggallary();
                maxIndexImg(gallery3, indexModal);
                showImgGallary(gallery3, indexModal)
                break;
        }
    })
    arrowModalBack.addEventListener('click', () => {
        switch (func) {
            case 1:
                indexModal--;
                hideImggallary();
                minIndexImg(gallery1, indexModal);
                showImgGallary(gallery1, indexModal)
                break;
            case 2:
                indexModal--;
                hideImggallary();
                minIndexImg(gallery2, indexModal);
                showImgGallary(gallery2, indexModal)
                break;
            case 3:
                indexModal--;
                hideImggallary();
                minIndexImg(gallery3, indexModal);
                showImgGallary(gallery3, indexModal)
                break;
        }
    })
    modalHides.addEventListener('click', () => {
        modalGallary.classList.remove('modalshow')
        indexModal = 0
        func=0
    })
     // ------------------Modal Gallary--------------

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

})