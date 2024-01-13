const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const btnLeft = document.querySelector('#btn-left')
const btnRight = document.querySelector('#btn-right')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))    
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))    
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

// btnLeft.addEventListener('click', () => {
//     container.classList.add('hover-left')
//     container.classList.remove('hover-right')})

// right.addEventListener('click', () => {
//     container.classList.remove('hover-left')
//     container.classList.add('hover-right')})


// btnLeft.addEventListener('click', () => {
//     container.classList.add('hover-left');
//     container.classList.remove('hover-right');
// });
     
// right.addEventListener('click', () => {
//     container.classList.remove('hover-left');
//     container.classList.add('hover-right');
// });










