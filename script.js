var formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
var pesos = document.getElementById("pesos");
 var dolar = 1298.50;
var pesos = pesos.value;
var total = Math.round(pesos / dolar)
Swal.fire({
  title: "Cantidad:" + (" $") + (total),
  text: "¡Felicitaciones, puedes comprar dolares!",
  icon: "success"
});
})