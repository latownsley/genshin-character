window.addEventListener("DOMContentLoaded", domLoaded); 

let called = false      // tracks whether there's already a character description

function addData(json_data) {
    
    console.log('made it to add data');

    console.log(json_data);

    //data = JSON.parse(json_data);
    data =json_data

    if (called == true){
        clearOld();
    };

    const xhrdata = document.getElementById('data');

    //get image
    let char_img = document.createElement("img");
    char_img.src = data.image;
    xhrdata.appendChild(char_img);

    //get name
    const name = document.createElement('p');
    name.textContent = data.name;   
    xhrdata.appendChild(name);

    //get description
    const description = document.createElement('p');
    description.textContent = data.description;   
    xhrdata.appendChild(description);

    //get element
    const element = document.createElement('p');
    element.textContent = data.type;   
    xhrdata.appendChild(element);
    
    //get weapon type
    const weapon = document.createElement('p');
    weapon.textContent = data.weapon;   
    xhrdata.appendChild(weapon);

    called = true;

}

function clearOld() {
    const container = document.getElementById('data');
    removeAllChildNodes(container);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        
    }
}

async function domLoaded(){
    let char_select = document.getElementById("form");
    
    char_select.addEventListener("submit", async function(){
        event.preventDefault()
        console.log("Sending request...");
        let char_name = document.getElementById("get-char").value;
        const selected_user = {
            id : char_name
        }

        return fetch("/get-char", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(selected_user)
        })
            .then(response => response.json())
            .then(data => addData(data))
            .then(console.log(data))
            .catch(error => console.error(error));

    });

    char_select.addEventListener("reset", async function(){
        console.log("Resetting form...")
        clearOld();
    });
}





