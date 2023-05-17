

const names = []
const add = document.querySelector('#lisaa');
const del = document.querySelector('#poista')
const arrange = document.querySelector('#sort')

add.addEventListener("click", lisaa)
del.addEventListener("click", poista)
arrange.addEventListener("click", sort)

function lisaa(e) {
    e.preventDefault()
    if (document.getElementById("name").value.length < 3) {
        window.alert("syöte ei saa olla alle 3 merkkiä")
        document.getElementById("name").value = ("")
    } else {
        names.push(document.getElementById("name").value)
        console.log(names)

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(document.getElementById("name").value));
        friendList.appendChild(li);

        document.getElementById("name").value = ("")
    }
}
function poista(e){
    e.preventDefault()
    for(let i = 0; i < names.length; i++){
        if(names[i] == document.getElementById("name").value){
            names.splice(i, 1)
        }
    }

    document.getElementById("name").value = ("")

    while (friendList.firstChild) {
        friendList.removeChild(friendList.lastChild);
    }
    for(let i = 0; i < names.length; i++){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(names[i]));
        friendList.appendChild(li);
    }


    console.log(names)
}
function sort(e) {
    e.preventDefault()
    names.sort()

    while (friendList.firstChild) {
        friendList.removeChild(friendList.lastChild);
    }
    for(let i = 0; i < names.length; i++){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(names[i]));
        friendList.appendChild(li);
    }

    console.log(names)
}

