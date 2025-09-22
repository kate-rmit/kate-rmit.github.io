// hover on the disks -> the disks spread out. movement of the disks when hover on
/* many album, click left right to see diff
 click on one, pernamently setting the album there
timeline show up, showing time.
*/
const scrollContainer = document.getElementById("albumWrap");
const backBtn= document.getElementById("backBtn");
const nextBtn= document.getElementById("nextBtn");

const SCROLL_AMOUNT = 900;

nextBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
});
backBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
});

scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;  // or -= to invert
}, { passive: false });
// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// })

// nextBtn.addEventListener("click",  () => {
//     scrollContainer.scrollBehavior + "smooth";
//     scrollContainer.scrollLeft -=900;
// })

// backBtn.addEventListener("click", () => {
//     scrollContainer.scrollLeft -=900;
// })

// const vinyl = document.getElementById("vinyl");
// const coverText = document.getElementById("coverText");
// const album1 = document.getElementById("album1");

// album1.addEventListener("mouseover", function(){movingDisk})

// function movingDisk(){
// vinyl.classList.add(`spin`)
// console.log("mouse enter")
// }
 