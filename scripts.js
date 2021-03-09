function makeBig(element) {
  element = document.getElementById("title");
  element.classList.add("makeBig");
}

function clickColor(element) {
  element = document.getElementById("title");
  element.onclick = function() {
    element.classList.add("makeOrange");
  }
}

function clickSections(element) {
  element = document.getElementById("header1");
  element.onclick = function(ul) {
    ul = document.getElementById("show1")
    ul.classList.add("shown");
  }
  
  element = document.getElementById("header2");
  element.onclick = function(ul) {
    ul = document.getElementById("show2")
    ul.classList.add("shown");
  }
  
  element = document.getElementById("header3");
  element.onclick = function(ul) {
    ul = document.getElementById("show3")
    ul.classList.add("shown");
  }
}

function addSection(element) {
  element = document.getElementById("section");
  element.innerHTML = "Created by Jake Stephens"
}

window.onload = function() {
  makeBig();
  clickColor();
  clickSections();
  addSection()
  
}