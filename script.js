/*Grab toggle and nav */
const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

/*if it's applied then add it
if it's not applied then remove it*/
toggle.addEventListener('click', () => nav.classList.toggle('active'))