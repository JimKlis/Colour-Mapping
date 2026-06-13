const picker = document.getElementById("colorPicker");
const triangles = document.querySelectorAll(".triangle");

let active = null;

triangles.forEach(t => {
    t.addEventListener("click", () => {
        active = t;

        picker.focus();
        picker.click();
    });
});

picker.addEventListener("input", () => {
    if (active) {
        active.style.backgroundColor = picker.value;
    }
});