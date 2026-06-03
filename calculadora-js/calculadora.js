function somar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let resultado = num1 + num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}

function subtrair() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let resultado = num1 - num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}

function multiplicar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let resultado = num1 * num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}

function dividir() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let resultado = num1 / num2;

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}