function calcularTabuada() {
    const numMultiplicando = document.getElementById("multiplicandoId").value;
    const minMultiplicador = document.getElementById("multiplicadorMinId").value;
    const maxMultiplicador = document.getElementById("multiplicadorMaxId").value;


    const resultadoDIV = document.getElementById("resultado");

    // 3. Limpa o resultado antigo antes de calcular o novo
    resultadoDIV.innerHTML = "";

    // 4. Faz a conta repetindo do multiplicador mínimo até ao máximo
    for (let multiplicador = minMultiplicador; multiplicador <= maxMultiplicador; multiplicador++) {
        let resultado = numMultiplicando * multiplicador;

        // Adiciona a linha na tela (ex: 2 x 0 = 0)
        resultadoDIV.innerHTML += numMultiplicando + " x " + multiplicador + " = " + resultado + "<br>";
    }
}

function novaTabuada() {
    // Limpa os campos de texto
    document.getElementById("multiplicandoId").value = "";
    document.getElementById("multiplicadorMinId").value = "";
    document.getElementById("multiplicadorMaxId").value = "";

    // Limpa a área do resultado
    document.getElementById("resultado").innerHTML = "";
}
