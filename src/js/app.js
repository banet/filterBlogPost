


const header = document.querySelector('.hero');
const mainNav = document.querySelector('.mainNav');
const input = document.querySelector('#blogSearch');

// Intersection observer

//3 Check if intersetion is not true add a (applyBackground class) 
const navObsCallback = (e) => {
    !e[0].isIntersecting ? mainNav.classList.add('applyBackground') : mainNav.classList.remove('applyBackground')
}
// 2 define options: treshold => is mean how much of it has to be off the page or on the page for you to consider inetesecting
// threshold: 0.9 is mean only o.9 from 1 is to be considere no longer ukrtsa intesecting

const navObsOptions = { threshold: 0.9}
// 1. define new inersection with freenamed parameteras
const navObs = new IntersectionObserver(navObsCallback, navObsOptions);

navObs.observe(header)


// Filter 

input.addEventListener('keyup', addFilter)

function addFilter() {
    let newSearch = input.value.toLowerCase()
    console.log(newSearch)

    const posts = document.querySelectorAll('.card').forEach( item => {
       item.innerText.toLowerCase().indexOf(newSearch) 
       > -1 ? item.style.display = '' : item.style.display = 'none'
    }) 
}