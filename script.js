const grid = document.querySelector("#int-grid")
const tabs = document.querySelectorAll(".tab__link")
const containers = document.querySelectorAll(".din-cont__container")
const din1 = document.querySelector("#din1")
const din2 = document.querySelector("#din2")
const din3 = document.querySelector("#din3")
document.addEventListener("DOMContentLoaded", () => {
    grid.addEventListener('click', (e) => {
        let t = e.target.closest(".tab__link")
        e.preventDefault()
        tabs.forEach(tab => {
            tab.classList.remove("border-red")
        })
        t.classList.add("border-red")
        containers.forEach(cont => {
            cont.style.display = "none";
        })
        if (t.id === "tab1") {
            din1.style.display = "block";
        }
        if (t.id === "tab2") {
            din2.style.display = "grid";
        }
        if (t.id === "tab3") {
            din3.style.display = "block";
        }
    })
})