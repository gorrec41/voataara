window.addEventListener('DOMContentLoaded', () => {
    const tab = document.querySelectorAll('.tab__item'),
        tabItems = document.querySelector('.tab__items'),
        tabVideo = document.querySelectorAll('.tabcontent');
    
    function delActiv() {
        tab.forEach(item => {
            item.classList.remove('tab_active')
            console.log(item)
        })
        tabVideo.forEach(item => {
            item.classList.remove('activvideo')
            console.log(item)
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




    
})