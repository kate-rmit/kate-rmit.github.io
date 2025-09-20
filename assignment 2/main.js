// hover on the disks -> the disks spread out. movement of the disks when hover on
/* many album, click left right to see diff
 click on one, pernamently setting the album there
timeline show up, showing time.
*/
let scrollContainer = document.querySelector("albumWrap");
let backBtn= document.getElementById("backBtn");
let nextBtn= document.getElementById("nextBtn");

nextBtn.addEventListener("click", function(
    scrollContainer +=900;
));

// function nextSlide()
// ;
backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -=900;
})