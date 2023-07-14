// -----------------TYPING EFFECT--------------------
const textElement = document.getElementById("typing");
const text = textElement.innerHTML;
textElement.innerHTML = "";

let index = 0;
function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();


// -----------------ANIMATION ON SCROLL--------------------

const animItems = document.querySelectorAll('.anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnscroll)
    function animOnscroll(){
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i],
                animItemHeight = animItem.offsetHeight,
                animItemOffset = offset(animItem).top,
                animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            } else{
                animItem.classList.remove('active');
            }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}