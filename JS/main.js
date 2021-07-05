const allTmages = document.getElementsByClassName("all_images");
let test = document.getElementById("test");

function newInput(){
    let divForFileINPUT = document.createElement("div");
    let newInputImg = document.createElement("INPUT");
    let newTextarea = document.createElement("textarea");
    let addButton = document.createElement("INPUT");
    let cancelButton = document.createElement("INPUT");

    divForFileINPUT.setAttribute("id","uniqueID");

    newInputImg.setAttribute("type", "file");
    newInputImg.setAttribute("accept","image/*");
    divForFileINPUT.appendChild(newInputImg);

    newTextarea.setAttribute("type", "text");
    newTextarea.setAttribute("value", "value");
    newTextarea.setAttribute("id", "txtArea");
    newTextarea.setAttribute("placeholder", "Write a caption ...");
    divForFileINPUT.appendChild(newTextarea);

    addButton.setAttribute("type", "button");
    addButton.setAttribute("value","Add");
    addButton.setAttribute("onclick","add()");
    divForFileINPUT.appendChild(addButton);

    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value","cancel");
    cancelButton.setAttribute("onclick","cancel()");
    divForFileINPUT.appendChild(cancelButton);

    test.appendChild(divForFileINPUT);
}

function addParag(elm){
    let text = document.getElementById("txtArea").value;
    let paragraph = document.createElement("p");
    paragraph.innerHTML = text;
    elm.appendChild(paragraph);
}

function add() {
    const date = Date().slice(0,21);
    let file = document.querySelector("input[type=file]");

    for (let i = 0; i < file.files.length; i++) {
        let e = file.files[i];
        let div = document.createElement("div");
        var image = document.createElement("img");
        let time = document.createElement("small");
        let remove = document.createElement("INPUT");

        image.setAttribute("height", "400");
        image.setAttribute("width", "400");

        time.innerHTML = date + "\n";

        remove.setAttribute("type", "button");
        remove.setAttribute("value","DELETE");
        remove.setAttribute("onclick","removeElement(this)");

        let reader = new FileReader();

        reader.onloadend = function () {
            image.src = reader.result;
        };

        if (e) {
            reader.readAsDataURL(e);
        } else {
            image.src = "";
        } 
        div.appendChild(image);
        div.appendChild(time); 
        div.appendChild(remove);
        addParag(div);
        allTmages[i].appendChild(div);
    }
    let un_id = document.getElementById("uniqueID");
    test.removeChild(un_id);
}


function cancel(){
    let un_id = document.getElementById("uniqueID");
    test.removeChild(un_id);
}

function removeElement(element){
    //the button.the new div.all-posts div
    //child  .parent     .parent
    element.parentElement.parentElement
               //button.new div
    .removeChild(element.parentElement);
}
