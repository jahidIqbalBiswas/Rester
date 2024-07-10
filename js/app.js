$(document).ready(function() {
    $('#mainMenu').hcOffcanvasNav({
        disableAt: 961,
    });
});
// desktop right sidebar
const desktopRightSidebar = document.querySelector('#desktopRightSidebar')
const desktopRightSidebarOpener = document.querySelector('#desktopRightSidebarOpener')
const rightSidebarCloseBtn = document.querySelector('#rightSidebarCloseBtn')
desktopRightSidebarOpener.addEventListener("click",() => {
    desktopRightSidebar.classList.add('open-right-sidebar')
})
rightSidebarCloseBtn.addEventListener("click",() => {
    desktopRightSidebar.classList.remove('open-right-sidebar')
})