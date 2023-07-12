let statusBtn = true;
const getBtn = document.querySelector(".Btn");

getBtn.addEventListener("click", () => {
    if(statusBtn) {
        document.querySelector(".buttonForm").classList.add("active")
        statusBtn = false;
    } else {
        document.querySelector(".buttonForm").classList.remove("active")
        statusBtn = true;
    }
    console.log(statusBtn);
})