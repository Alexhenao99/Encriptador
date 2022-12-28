
//  variables
const resulDefecto = document.getElementById("resultDefecto").style;
const resultRta = document.getElementById("resultRta").style;
const inputText = document.getElementsByName("input-text")[0];
const outputText = document.getElementById("messegeRta");
const result = document.getElementById("result");
const logo = document.getElementById("logoI");
const info = document.getElementById("info");

// Variable Botones
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btn-copiar");

// Funciones
const ocultarResultDefecto = () => {
    resulDefecto.display = "none";
    resultRta.display = "grid";
}
const btnCopiarDefect = () => {
    result.style.boxShadow = "0px 24px 32px 18px rgba(0, 0, 0, 0.1)";
    btnCopiar.value = "Copiar" 
    logo.src = "./images/encriptado.png"
}
const alertInfo = () => {
    info.style.color = "red";
    info.style.fontWeight = "bold";
    info.style.fontSize = "20px";
}
const alertInfoDesact = () => {
    info.style.color = "#2C3333";
    info.style.fontWeight = "normal";
    info.style.fontSize = "16px";
}
const encriptar = (texto) => {
    if(texto !== texto.toLowerCase() || texto.includes("á") || texto.includes("é") || texto.includes("í") || texto.includes("ó") || texto.includes("ú")){
        alertInfo();
    } else {
        let encriptado = texto.replaceAll( "e", "enter" ).replaceAll( "i", "imes" ).replaceAll( "o", "ober" ).replaceAll( "a", "ai" ).replaceAll( "u", "ufat" )
        alertInfoDesact();
        return encriptado;
    }
}
const desencriptado = (texto) => {
    if(texto !== texto.toLowerCase() || texto.includes("á") || texto.includes("é") || texto.includes("í") || texto.includes("ó") || texto.includes("ú")){
        alertInfo();
    } else {
        let encriptado = texto.replaceAll( "enter", "e" ).replaceAll( "imes", "i" ).replaceAll( "ober", "o" ).replaceAll( "ai", "a" ).replaceAll( "ufat", "u" )
        alertInfoDesact();
        return encriptado;
    }
}

btnEncriptar.addEventListener( "click", () => {
    if(inputText.value) {
        let rta = encriptar(inputText.value);
        if(rta){
            ocultarResultDefecto();
            outputText.value = rta;
            inputText.value = "";
            inputText.style.border = "none";
            btnCopiarDefect(); 
        }
    } else {
        inputText.style.border = "8px double #1F4068";
        alert("No hay nada que Encriptar");
    }
})

btnDesencriptar.addEventListener( "click", () => {
    if(inputText.value) {
        let rta = encriptar(inputText.value);
        if(rta){
            ocultarResultDefecto();
            let rta = desencriptado(inputText.value);
            outputText.value = rta;
            inputText.value = "";
            btnCopiarDefect();
        }
    } else {
        inputText.style.border = "8px double #1F4068";
        alert("No hay nada que Desencriptar");
    }
})

btnCopiar.addEventListener("click",function(){
	this.value="¡Copiado!";
    result.style.boxShadow = "0px 24px 32px 18px #22a39f50";
    outputText.select();
    document.execCommand("copy");
    logo.src = "./images/encriptado (1).png";
    inputText.value = outputText.value;
});

