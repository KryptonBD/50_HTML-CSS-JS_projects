const container = document.getElementById('container');
var panels;
let imageData = [];

fetch("images.json")
.then(res =>res.json())
.then(data => {
    imageData.push(...data);
    renderer();
})

function renderer() {
    
    imageData.forEach((img, i) =>{
        let div = document.createElement('div');
        let h3 = document.createElement("h3");
        h3.innerText = img.title;
        div.classList = "panel";
        div.style.backgroundImage = `url('${img.url}')`;
        if(i == 0) {
            div.classList.add("active");
        }
        div.appendChild(h3);
        container.appendChild(div);
    })

    panels = document.querySelectorAll(".panel");
    panels.forEach(panel =>{
        panel.addEventListener('click', ()=>{
            removeActiveClass();
            panel.classList.add("active");
        });
    })
}

function removeActiveClass() {
    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}