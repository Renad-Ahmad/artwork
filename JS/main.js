const allTmages = document.getElementsByClassName("all_images");

function add() {
    const date = Date().slice(0,21);
    let file = document.querySelector("input[type=file]");

    for (let i = 0; i < file.files.length; i++) {
        let e = file.files[i];
        let div = document.createElement("div");
        var image = document.createElement("img");
        let time = document.createElement("small");

        image.setAttribute("height", "400");
        image.setAttribute("width", "400");

        let reader = new FileReader();

        reader.onloadend = function () {
            image.src = reader.result;
        };

        if (e) {
            reader.readAsDataURL(e);
        } else {
            image.src = "";
        }
        time.innerHTML = date + "\n"; 

        div.appendChild(image);
        div.appendChild(time); 
        allTmages[i].appendChild(div);
    }
    console.log(image);
}

