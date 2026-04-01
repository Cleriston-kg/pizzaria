// JavaScript source code
window.onload = function (e) {

    // se eu colocar pra pegar os campos ja aqui eles vao esta vazios....

    btncadastro.onclick = function (e) {

        e.preventDefault();

        var nomepizza = document.getElementById("nome").value;
        var ingredientes = document.getElementById("ingredientes").value;
        var valor = document.getElementById("valor").value;
        var status = document.getElementById("status").value;
        var sabor = document.getElementById("sabor").value;

        alert(ingredientes);

        console.log(nomepizza);
        console.log(sabor);
        console.log(status);


    }
}