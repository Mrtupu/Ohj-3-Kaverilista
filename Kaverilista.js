

const names = []

const Help = document.querySelector("#Myform")

Help.addEventListener("submit", onsubmit)

function onsubmit(e) {
    e.preventDefault()
    if (names.length >= 9) {
        names.push(document.getElementById("name").value)
        document.querySelector("#Myform").remove()
        for (let name of names) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${name}`));
            friendList.appendChild(li);
        }
    } else if (document.getElementById("name").value.length < 3) {
        window.alert("syöte ei saa olla alle 3 merkkiä")
        document.getElementById("name").value = ("")
    } else {
        names.push(document.getElementById("name").value)
        document.getElementById("name").value = ("")
        console.log(names)
    }
}