const submit = document.getElementById("submit")
const thing = document.getElementById("thing")
const location1 = document.getElementById("location")
const output = document.getElementById("output")

submit.addEventListener("click", function () {
    if (thing.value === "" || location1.value === "") {
        alert("All information needs to be entered")
    } else {
        output.innerHTML = `I can purchase ${thing.value} at ${location1.value}`
        thing.value = "";
        location1.value = "";
        thing.focus();
        thing.select();
    }
})