// function to change color of nav when scrolling
setInterval(()=>{
    const scroll = window.scrollY
    const nav = document.querySelector('.nav')
    scroll > 100 ? nav.style.background = "black" : nav.style.background = "initial"
},.0000000001)

// get element of menu 
const buttonNav = document.querySelector('nav .menu .nav-link')
// get element of side bar 
const sideBar = document.querySelector('.side-bar')
// function to open side bar
buttonNav.addEventListener('click',()=>{
    sideBar.style.left = '0'
})
// function to close side bar
const closeIcone = document.querySelector('.close-icon')
closeIcone.addEventListener('click',()=>{
    sideBar.style.left = '-300px'
})