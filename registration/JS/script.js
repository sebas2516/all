function img(){
    var canvas = document.getElementById('main-canvas');
    var dataURL = canvas.toDataURL();
    // console.log(dataURL);
    // document.getElementById('firma').innerHTML = dataURL;
    $("#firma").append('<input id="firma-1" type="text" name="firma" value='+dataURL+'>')
}

//Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;

const dibujar = (cursorX, cursorY) => {
    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = 1;
    context.strokeStyle = "#000";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
};

const mouseDown = (evt) => {
    initialX = evt.offsetX;
    initialY = evt.offsetY;
    dibujar(initialX, initialY);
    mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
    dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
    mainCanvas.removeEventListener("mousemove", mouseMoving);
};

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);



const getValueInput = () =>{
    let inputId= document.getElementById("id").value; 
    let inputName = document.getElementById("name").value; 
    let inputApellido = document.getElementById("lastName").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let inputFirma = document.getElementById("firma-1").value;
    
    // let inputImagen = document.getElementById("imagen1").value;
    // document.getElementById("valueInput").innerHTML = inputValue; 
    // console.log(inputApellido)

    localStorage.setItem("ID", inputId);
    localStorage.setItem("Nombres", inputName);
    localStorage.setItem("Apellidos", inputApellido);
    localStorage.setItem("Email", inputEmail);
    localStorage.setItem("Contraseña", inputPassword);
    localStorage.setItem("Firma", inputFirma);
    // localStorage.setItem("Imagen", inputImagen);
}