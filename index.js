let code = "";
            var mainpreview = document.getElementById("mainpreview");
const color = document.getElementById("backgroundColor");
color.addEventListener('change', addColor);
let currentTextColor = "#000000"; 

function addMyLink() {
    var url = linkUrl.value;
    var content = linkContent.value;
    var link = document.createElement("a");
    link.href = url; 
    link.innerHTML = content;
    mainpreview.appendChild(link);
}
function addColor() {
  let selectedColor = color.value;
  mainpreview.style.backgroundColor = selectedColor;
  return selectedColor;
}


document.getElementById("textColor").addEventListener("change", function() {
    currentTextColor = this.value; 
}); 
function addHeading() {
  var headingInput = document.createElement("input");
  let isTyping = false;
  mainpreview.appendChild(headingInput);
  headingInput.style.border = "none";
  headingInput.style.padding = "10px";
  headingInput.style.fontFamily = "'Open Sans', sans-serif";
  headingInput.style.fontSize = "34px";
  headingInput.style.fontWeight = "bold";
  headingInput.style.color = currentTextColor;
  headingInput.value = "Click to add heading";
  headingInput.style.width = "55%";
  headingInput.style.backgroundColor = "transparent";

  headingInput.addEventListener("focus", function () {
    headingInput.style.border = "3px solid blue";
    headingInput.style.borderRadius = "5px";
    headingInput.style.outline = "none";
    headingInput.value = "";
    isTyping = true;
  });

  var headingContent; 

  headingInput.addEventListener("blur", function () {
    isTyping = false;
    if (headingContent == "") {
      alert("Please enter heading content");
      return;
    }

    headingContent = headingInput.value;
    let heading = document.createElement("h1");
    mainpreview.appendChild(heading);
    heading.style.color = currentTextColor;
    heading.textContent = headingContent;
    headingInput.remove();
  });
  return function () {
    return headingContent;
  };
}

function addBody() {
  mainpreview.appendChild(document.createElement("br"));
  var bodyInput = document.createElement("input");
  let isTyping = false;
  bodyInput.style.border = "none";
  bodyInput.style.padding = "10px";
  bodyInput.style.fontFamily = "'Open Sans', sans-serif";
  bodyInput.style.fontSize = "17px";
  bodyInput.style.color = currentTextColor;
  bodyInput.value = "Click to add body";
  bodyInput.style.width = "40%";
  bodyInput.style.backgroundColor = "transparent";

  bodyInput.addEventListener("focus", function() {
    bodyInput.style.border = "3px solid blue";
    bodyInput.style.borderRadius = "5px";
    bodyInput.style.outline = "none";
    bodyInput.value = "";
    isTyping = true;
  });

  var bodyContent;
  mainpreview.appendChild(bodyInput);

  bodyInput.addEventListener("blur", function() {
    if (isTyping) {
      bodyContent = bodyInput.value;
      isTyping = false;

      if (bodyContent === "") {
        alert("Please enter body content");
        return;
      }

      const body = document.createElement("p");
      body.style.color = currentTextColor;
      body.textContent = bodyContent;
      mainpreview.appendChild(body);
      bodyInput.remove();
    }
  });
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function addButton() {
  var aInput = document.createElement("input");
    aInput.placeholder = "Your url..";
    var buttonInput = document.createElement("input");
    buttonInput.placeholder = "Your button text..";
    var addButton = document.createElement("button");
    addButton.textContent = "Add";

    const container = document.createElement("div");
    container.appendChild(aInput);
    container.appendChild(buttonInput);
    container.appendChild(addButton);
    

    mainpreview.appendChild(container);

    addButton.onclick = function() {
      var buttonContent = buttonInput.value;
      var aUrl = aInput.value;

      if (buttonContent === "") {
        alert("Please enter button content");
        return;
      }

      const button = document.createElement("button");
      const a = document.createElement("a");
      a.appendChild(button);
      button.style.color = "white";
      button.innerHTML = buttonContent;
      a.href = aUrl;
      mainpreview.appendChild(a);

      container.remove(); 
    }
}
function compileCode() {
  let codeContainer = document.getElementById("codeContainer");
  let backgroundColor = addColor();
  code = "<!DOCTYPE html><html><head><title>This website was made with Falcon Sites</title><style>@import url('https://fonts.googleapis.com/css2?family=Comic+Neue&family=Libre+Franklin&family=Open+Sans&family=Roboto+Mono&display=swap');#mainenclosure {background: rgb(255, 242, 216);border-radius: 3px;height: 80%;width: 99%;top: 3px;right: 5px;}body {background-color: " + backgroundColor + ";font-family: 'Open Sans', sans-serif;scrollbar-width: none;}#side {background-color: rgb(255, 230, 181);left: 10px;height: 80%;top: 0px;border-radius: 3px;width: 40%;padding: 20px;}#mainpreview {background-color: white;width: 60%;border-radius: 3px;right: 10px;top: 40px;height: 80%;position: absolute;padding: 20px;}.modal {display: none;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);}.modal-content {background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 80%;}.close {color: #aaaaaa;float: right;font-size: 28px;font-weight: bold;}.close:hover,.close:focus {color: #000;text-decoration: none;cursor: pointer;}button {padding: 3px;border-radius: 5px;background-color: green;color: white;min-width: 100px;border: none;font-size: 20px;font-family: 'Open Sans', sans-serif;}button:hover {opacity: 50%;cursor: pointer;}.hero-image {background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('images/theme1.JPG');height: 50%;background-position: center;background-repeat: no-repeat;background-size: cover;position: relative;}.hero-text {text-align: center;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);color: white;}#title {position: absolute;top: 100px;right: 100px;}#videoplayer {position: absolute;left: 150px;bottom: 50px;}</style></head><body>" + mainpreview.innerHTML + "</body></html>";
  codeContainer.value = code;
}
function copyCode() {
    var copyText = codeContainer;
copyText.select();
copyText.setSelectionRange(0, 99999);
navigator.clipboard.writeText(copyText.value);
alert("Code copied. Paste it into a text editor such as W3schools Tryit Editor to view it.");
} 
