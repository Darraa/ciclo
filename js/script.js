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

const animItems = document.querySelectorAll(".anim-items");
const fullpage = document.querySelector(".fullpage-scroll");
let isIncreased = false;

if (animItems.length > 0) {
   fullpage.addEventListener("scroll", animOnscroll);
   function animOnscroll() {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if (
            scrollY > animItemOffset - animItemPoint &&
            scrollY < animItemOffset + animItemHeight
         ) {
            animItem.classList.add("active");
            countTo(80, "counter1");
            countTo(75, "counter2");
            countTo(80, "counter3");
            countTo(55, "counter4");
            countTo(95, "counter5");
            if (!isIncreased) {
               increase();
               isIncreased = true;
            }
         } else {
            if (!animItem.classList.contains("anim-stop")) {
               animItem.classList.remove("active");
            }
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
         scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }
}

// -----------------PROGRESS-BAR--------------------

function increase() {
   let SPEED = 40;
   const limit1 = parseInt(document.getElementById("value1").innerHTML, 10);
   const limit2 = parseInt(document.getElementById("value2").innerHTML, 10);

   function animateValue1(currentValue) {
      if (currentValue <= limit1) {
         document.getElementById("value1").innerHTML = currentValue + "%";
         setTimeout(function () {
            animateValue1(currentValue + 1);
         }, SPEED);
      }
   }

   function animateValue2(currentValue) {
      if (currentValue <= limit2) {
         document.getElementById("value2").innerHTML = currentValue + "%";
         setTimeout(function () {
            animateValue2(currentValue + 1);
         }, SPEED);
      }
   }
   animateValue1(0);
   animateValue2(0);
}

// -----------------COUNTER--------------------

function countTo(target, elementId) {
   let current = 0;
   const step = Math.ceil(target / 100);

   function updateCounter() {
      if (current < target) {
         current += step;
         if (current > target) {
            current = target;
         }
         document.getElementById(elementId).textContent = current;
         setTimeout(updateCounter, 10);
      }
   }

   updateCounter();
}
