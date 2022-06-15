var contadorElemento = document.getElementById("campoValor");
var btnAdd =document.getElementById("btn-add");
var btnSub =document.getElementById("btn-sub");

var contador = 0;
btnAdd.style.borderColor = "coral"

function increment(){
    contador = contador + 1
    contadorElemento.innerHTML = contador 
    btnAdd.style.borderColor ="green"
    btnSub.style.borderColor = "coral"
}

function decrement (){
   if(contador <= 0  ){
       alert("Não é possivel decrementar")
   }else{
    contador= contador-1
    contadorElemento.innerHTML = contador
    btnSub.style.borderColor = "red"
    btnAdd.style.borderColor ="coral"
   }
}
