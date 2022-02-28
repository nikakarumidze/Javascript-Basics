// Page Color Change Button

var btn = document.getElementById("button");

btn.addEventListener("click", function (event) {
    if(event.target.innerHTML == "ღილაკი") {
        event.target.innerHTML = "დააჭირე";
        event.target.style.backgroundColor = "";
        document.body.setAttribute("style", "background-color: blue !important");
        return;
    }
    event.target.innerHTML = "ღილაკი";
    event.target.style.backgroundColor = "red";
    document.body.setAttribute("style", "background-color: orange !important");
});

// Form with Alert

var form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    var dat = document.querySelectorAll(".input-value");
    var total = "";
    for(y of dat) {
        total += y.value + " ";
    }
    alert("გამარჯობა, " + total);
})

// Hover Name Change

var heading = document.getElementById("xsp");
var yuti = document.getElementById("yuti");

yuti.addEventListener("mouseover", function () {
    heading.innerHTML = "ჟანგი" ;
})

yuti.addEventListener("mouseout", function () {
    heading.innerHTML = "სალამური";
})

// Scroll Arrow Button

var pagetop;
window.addEventListener("scroll", function(){
    pagetop = window.pageYOffset;
    if (pagetop >150) {
        document.getElementById("btn").style.display = "block";
    }
    else if (pagetop <200) {
        document.getElementById("btn").style.display = "none";
    }
})

var knopka = document.getElementById("esari");
knopka.onclick = function() {
    window.scrollTo(0,0);
}

// Delete Items Button

var dButton = document.getElementById("washla");
var addButton = document.getElementById("damateba");

var mainDiv = document.getElementById("main-div");

dButton.onclick = function () {
    var allP = document.querySelectorAll("#main-div p");
    var last = allP.length - 1;
    if (last == 0) {
        alert("მართლა შლი?");
    }
    allP[last].remove(); 
    
}

// Add Items Button

var base = document.body.scrollHeight;

addButton.onclick = function () {
    var allP = document.querySelectorAll("#main-div p");

    var insideText = document.createTextNode("პარაგრაფი " + (allP.length+1));
    var pCreate = document.createElement("p");

    pCreate.appendChild(insideText);
    mainDiv.appendChild(pCreate);

    var actual = document.body.scrollHeight - base;
    var scroll = window.pageYOffset + actual;
    window.scrollTo(0,scroll);
}

// Number Input Form
var numberForm = document.getElementById("numberform");

numberForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var inputV = document.getElementById("fontgive").value;
    var inputN = Number(inputV);
    if (inputN > 5 && inputN < 200) {
        document.getElementById("fonttake").setAttribute("style", `font-size: ${inputN}px !important`);
    }
    else {
        alert("წესიერად! 6-დან 200-მდე");
    }
})


// Hover For Circle
var hoverDiv = document.getElementById("hoverdiv");

hoverDiv.addEventListener("mouseover", function(e){
    hoverDiv.classList.add("big");
})
hoverDiv.addEventListener("mouseout", function(e){
    hoverDiv.classList.remove("big");
})


// Slideshow
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
var currentImage = 0;
var nextButton = document.getElementById("nextB");
var previousButton = document.getElementById("previousB");

nextButton.onclick = function(e){ 
    e.preventDefault();
    currentImage++;
    currentImage = currentImage % images.length;
    document.getElementById("myimage").setAttribute("src", images[currentImage]);
    document.getElementById("imageNumber").innerHTML = currentImage+1;
}

previousButton.onclick = function(e){
    e.preventDefault();
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length-1;
    }
    document.getElementById("myimage").setAttribute("src", images[currentImage]);
    document.getElementById("imageNumber").innerHTML = currentImage+1;
}

// Slideshow 2 advanced
var currentImage1 = 0;
var nextButton1 = document.getElementById("next1");
var previousButton1 = document.getElementById("previous1");
var content = document.getElementById("content");



function swapSlide (o) {
    var newSlide = document.createElement("img");
    newSlide.src = images[currentImage1];
    newSlide.className = "fadeinimg";
    content.appendChild(newSlide);
    if (content.children.length > 2) {
        content.removeChild(content.children[0]);
    }
}

nextButton1.addEventListener("click", function (e) {
    e.preventDefault();
    currentImage1 ++;
    if (currentImage1 > images.length-1) {
        currentImage1 = 0;
    }
    swapSlide();
   
})

previousButton1.addEventListener("click", function (e) {
    e.preventDefault();
    currentImage1 --;
    if (currentImage1 < 0) {
        currentImage1 = images.length-1;
    }
    swapSlide();
})

let flowImages = setInterval(Slider, 3000);

function Slider () {
    currentImage1 ++;
    if (currentImage1 > images.length-1) {
        currentImage1 = 0;
    }
    swapSlide();
}
content.addEventListener("mouseover", function(){
    clearInterval(flowImages);
})
content.addEventListener("mouseout", function(){
    flowImages = setInterval(Slider, 3000);
})

// Distance Converter
document.getElementById("convert").addEventListener("submit", function(e) {
    e.preventDefault();
    var distance = parseFloat(document.getElementById("distance").value);
    var measureType = document.getElementById("measure").value;
    var measureTypeTo = document.getElementById("measure-to").value;
    var answerOutput = document.getElementById("answer");
    if(distance) {
        if (measureType == "kilometers" && measureType !== measureTypeTo) {
            var answer = (distance / 1.609344).toFixed(3);
            answerOutput.innerHTML =`<h2>${distance} ${measureType} converts to ${answer} ${measureTypeTo}</h2>`;
            answerOutput.childNodes[0].className = "text-danger";
        }
        else if(measureType == "miles" && measureType !== measureTypeTo) {
            var answer = (distance * 1.609344).toFixed(3);
            answerOutput.innerHTML =`<h2>${distance} ${measureType} converts to ${answer} ${measureTypeTo}</h2>`;
            answerOutput.childNodes[0].className = "text-danger";
        }
        else if (measureType === measureTypeTo) {
            answerOutput.innerHTML =`<h2>${distance} ${measureType} converts to ${distance} ${measureTypeTo}</h2>`;
            answerOutput.childNodes[0].className = "text-danger";
        }
    }
    else {
        alert("not a number");
    }
})

// Vacation destination
var destinationForm = document.getElementById("d-form");
var firstCard = document.getElementById("first-button");
firstCard.addEventListener("click", function(e) {
    e.target.parentElement.parentElement.parentElement.remove();
})

var destButton = document.getElementById("btn-add");
destinationForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var destName = document.getElementById("dest").value;
    var destLocation = document.getElementById("location").value;
    var destPhoto = document.getElementById("photo").value;
    var destDescription = document.getElementById("description").value;
    
    var cardPlace = document.getElementById("cards");
    var createDiv = document.createElement("div");
    createDiv.className = "col-md-6 mt-5 d-flex flex-column align-items-center";
    createDiv.innerHTML =
    `
    <h4 class="text-light mb-3">
        Enter Destination Details
    </h4>
    <div class="card bg-light">
        <img src="${destPhoto}" class="m-2">
        <div class="card-body">
            <h4>${destName}</h4>
            <h5>${destLocation}</h5>
            <p class="card-text text-dark">${destDescription}</p>
            <button class="btn btn-danger card-btn-remove">Remove</button>
        </div>
    </div>
    `
    cardPlace.appendChild(createDiv);

    var allCards = document.querySelectorAll(".card-btn-remove");
    for (x of allCards) {
        x.addEventListener("click", function(e) {
            e.target.parentElement.parentElement.parentElement.remove();
        })
    }

    for (let i = 0; i < this.length-1; i++) {
        this[i].value = "";
    }
})


const allUls = document.querySelectorAll(".sub-menu");
function closeMenu() {
    for (let i of allUls) {
        i.className = "hide-menu";
    }
}
closeMenu();

const menuLink = document.querySelectorAll(".menulink");
for(let x of menuLink) {
    x.onclick = function(e) {
        e.preventDefault();
        if( this.nextElementSibling.className === "hide-menu") {
            closeMenu();
            this.nextElementSibling.className = "show-menu";
        }
        else {
            this.nextElementSibling.className = "hide-menu";
        }
    }
}

// Clicked with jQuery
$("#thisItems li a").click(
function changePar (e) {
    e.preventDefault();
    $(this).parent().addClass("active");
    $("#thisItems li").not($(this).parent()).removeClass("active");

    var divId = $(this).attr("href");
    $("#ajax1 div").not(`${divId}`).addClass("d-none");
    $(`${divId}`).removeClass("d-none");
}
)

// jQuery ajax
$.ajax({
    url: "first.json", 
    success: function(result)
    {
        $("#tabs-1").html(
            `
            <p>${result.paragraph1[0]}</p>
            <p>${result.paragraph1[1]}</p>
            `
            );

        $("#tabs-2").html(
            `
            <p>${result.paragraph2[0]}</p>
            <p>${result.paragraph2[1]}</p>
            `
            );
        
        $("#tabs-3").html(
            `
            <p>${result.paragraph3[0]}</p>
            <p>${result.paragraph3[1]}</p>
            `
            );
    }
});


// Ajax with JS Vanilla

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var obj = JSON.parse(this.response);

        document.querySelector("#tabs1j").innerHTML = 
        `
        <p>${obj.paragraph1[0]}</p>
        <p>${obj.paragraph1[1]}</p>
        
        `;

        document.querySelector("#tabs2j").innerHTML = 
        `
        <p>${obj.paragraph2[0]}</p>
        <p>${obj.paragraph2[1]}</p>
        
        `;

        document.querySelector("#tabs3j").innerHTML = 
        `
        <p>${obj.paragraph3[0]}</p>
        <p>${obj.paragraph3[1]}</p>
        
        `;
        }
    xhttp.open("GET", "first.json", true);
    xhttp.send();
    }

    loadDoc();
    

// Click with JS Vanilla
var allLinks = document.querySelectorAll("#thisItems1 li a");

for (var y of allLinks){
    y.addEventListener("click", function(e){
        e.preventDefault();
        for (y of allLinks){
            y.parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
        
        var clicked = this.getAttribute("href");

        var divAjax = document.querySelectorAll(`#ajax2 div:not(${clicked}`);
        for (let z of divAjax){
            z.classList.add("d-none");
        }

        document.querySelector(clicked).classList.remove("d-none");
        
        
    })
}

// Recursive Content Rotator
const rotatorP = document.querySelectorAll("#container-rotator p");
var currentP = 0;

setInterval(() => {

    for (x of rotatorP){
        x.classList.add("d-none");
    }

    currentP ++;
    if (currentP > rotatorP.length-1) {
        currentP = 0;
    }
    rotatorP[currentP].className = "fadeinimg";


}
,4000)

// Add Todos
var addBtnText = document.querySelector(".add");
const toDos = document.querySelector(".todos");

addBtnText.addEventListener("submit", (e) => {
    e.preventDefault();
if (addBtnText.add.value.trim()){
    var createLi = document.createElement("li");
    createLi.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    createLi.innerHTML= `
    <span>${addBtnText.add.value.trim()}</span>
    <div>
        <input type="checkbox" class="form-check-input" style="margin-right: 40px;">
        <i class="far fa-trash-alt delete"></i>
    </div>
    `;
    toDos.appendChild(createLi);
}
    addBtnText.reset();
})

// Delete Todos
toDos.addEventListener("click", e => {
    if(e.target.classList.contains("far")){
        e.target.parentElement.parentElement.remove();
    }
})

// Search
const searchTodos = term => {
    Array.from(toDos.children)
    .filter( e => !e.textContent.toLowerCase().includes(term))
    .forEach( e => e.classList.add("d-none"))

    Array.from(toDos.children)
    .filter( e => e.textContent.toLowerCase().includes(term))
    .forEach( e => e.classList.remove("d-none"))
}

const searchBar = document.querySelector(".search input");
searchBar.addEventListener("keyup", () => {
    const term = searchBar.value.trim().toLowerCase();
    searchTodos(term);

})
