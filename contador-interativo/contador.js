let contador = 0;

const numero = document.getElementById("numero");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnZerar = document.getElementById("zerar");

function atualizarContador() {
    numero.textContent = contador;

    if (contador > 0) {
        numero.style.color = "green";
    } else if (contador < 0) {
        numero.style.color = "red";
    } else {
        numero.style.color = "black";
    }
}

btnIncrementar.addEventListener("click", function() {
    contador++;
    atualizarContador();
});

btnDecrementar.addEventListener("click", function() {
    contador--;
    atualizarContador();
});

btnZerar.addEventListener("click", function() {
    contador = 0;
    atualizarContador();
});