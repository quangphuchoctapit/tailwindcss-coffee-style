
let toggleMenuIcon = document.querySelector('.tw-toggle-top-menu-icon')
let topMenu = document.querySelector('#top-menu')
let iconMenuMobile =document.querySelector('.tw-icon')

document.addEventListener('click', (e) => {
    if (toggleMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('tw-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        if (topMenu.classList.contains('tw-top-menu-expanded')) {
            topMenu.classList.remove('tw-top-menu-expanded')
        topMenu.classList.add('hidden')
        }
    }
    
})