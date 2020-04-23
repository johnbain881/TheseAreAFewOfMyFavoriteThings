const submit = document.getElementById("submit")
const thing = document.getElementById("thing")
const location1 = document.getElementById("location")
const output = document.getElementById("output")

submit.addEventListener("click", function () {
    output.innerHTML = `I can purchase ${thing.value} at ${location1.value}`
    thing.value = "";
    location1.value = "";
    thing.focus();
    thing.select();
})