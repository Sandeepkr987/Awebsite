const btn_toggle = document.querySelector('.btn_toggle');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo')
const Wrapper = document.querySelector('.wrapper');

btn_toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    if(sidebar.classList.contains('active')){
        logo.setAttribute("style", "display:flex");
        Wrapper.setAttribute("style", "left:240px;width: calc(100% - 240px)")
        return
    }
    logo.setAttribute("style", "display:none");
    Wrapper.setAttribute("style", "left:68px")
})