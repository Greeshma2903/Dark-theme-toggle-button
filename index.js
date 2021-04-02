const check = document.getElementById("check");
const label = document.querySelector(".label");

check.addEventListener( 'click', () => {
    document.body.classList.toggle('dark');
    label.classList.toggle('dark');
});