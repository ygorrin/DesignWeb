window.onload = iniciar;


function iniciar(){
    //Asocia el click a un evento contemplado en una funcion
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){
    //Ingresa valores a JavaScript
    var peso = document.getElementById("txtPeso").value;
    var altura = document.getElementById("txtAltura").value;
    var imc = peso/(altura*altura);
    document.getElementById("resultado").value = Math.round(imc);

    alert("Su IMC es: " + Math.round(imc));

}




