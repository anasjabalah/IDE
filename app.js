
const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const reslt = document.getElementById("reslt");

btn.addEventListener("click", () => {
    reslt.innerHTML = textarea.value;
})

