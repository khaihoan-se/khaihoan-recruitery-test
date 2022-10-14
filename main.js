const buttonVideo = document.querySelector('.recruitery__step--btn')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')
function openVideo(e) {
    e.preventDefault();
    body.style.overflowY = 'hidden'
    modal.classList.add('active')
}
buttonVideo.addEventListener('click', (e) => {
    e.stopPropagation();
    body.style.overflowY = 'hidden'
    modal.classList.add('active')
})
document.addEventListener('click', () => {
    body.style.overflowY = 'auto'
    modal.classList.remove('active')
})
// ------------------
const slides = document.querySelector('.headhunters__slider--list');
const slide = Array.from(document.querySelectorAll('.headhunters__slider--item'));
const slidegr = document.querySelector('.headhunters__container');

var num_page 

function makeslide(numberonetime) {
    var percentwidth_slide=100/numberonetime;
    num_page=Math.ceil(slide.length/numberonetime);
    slide.forEach((el,index)=>{
        el.style.width=(slidegr.offsetWidth/100*percentwidth_slide)+'px';
    })

    slides.style.width=(slidegr.offsetWidth/100*percentwidth_slide)*slide.length+'px';
}
makeslide(2);

var curpage = 1;
function showslide(pagenumber){
    slides.style.marginLeft = -(slidegr.offsetWidth*(pagenumber-1))+'px';
}
showslide(1);

const dot = document.querySelectorAll('.headhunters__dot')

function removeActiveDot() {
    dot.forEach((ele, index) => {
        ele.classList.remove('active')
    })
}
let ofwArr = []
slide.forEach((ofw, indexS) => {
    ofwArr.push(ofw.offsetWidth)
})
dot.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        slides.style.marginLeft=-(ofwArr[index] * index)+'px'
        removeActiveDot()
        ele.classList.add('active')
    })
})

// -------------
const content = document.querySelectorAll('.question__boxcontent--text')
const subContent = document.querySelectorAll('.question__boxcontent--subtext')

function removeActiveSubContent() {
    subContent.forEach((element, index) => {
        element.classList.remove('active')
    })
}
content.forEach((element, index) => {
    element.addEventListener('click', () => {
        if(subContent[index].classList.contains('active')) {
            removeActiveSubContent()
        } else {
            removeActiveSubContent()
            subContent[index].classList.add('active')
        }
    })
})