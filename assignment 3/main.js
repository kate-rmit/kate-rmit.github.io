  const stickySection = [...document.querySelectorAll(".sticky")]
 
window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySection.length; i++){
        transform(stickySection[i])
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight * 100);
    percentage = percentage < 0 ? 0 : percentage > 900 ? 900 : percentage ;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    
}

// youtube tutorial for horizontal scrolling: https://youtu.be/yXnK8ND76z8?si=Z2UHInG4Bw5pk3Jq
// youtube tutorial for adding music: https://www.youtube.com/watch?v=ZFqtk0Tsnsc
// youtube tutorial for transition object: https://youtu.be/pVW3_5Pweqk?si=B8YJgHS62j8DqRNb


// i found a some code on function stack that have a 
// function of changing position fixed object to become sticky/stop at a certain point
// https://jsfiddle.net/Hf5wH/139/ and https://jsfiddle.net/Tgm6Y/1/
// I tried to implement it to my code but it use jquery so i decided not to


const gui = document.querySelector('.sharpGui');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {  // adjust 300px to when you want it to start
    gui.classList.add('scrolled');
  } else {
    gui.classList.remove('scrolled');
  }
});

