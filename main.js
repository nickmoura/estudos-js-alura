let celular = document.getElementById("celular")

celular.addEventListener(
    "input", () => {
        // Remover os caracteres não-numéricos usando a rxpressão regular /\D/g e limitar a 11 dígitos.
        let limparValor = celular.value.replace(/\D/g, "").substring(0,11);

        // Dividir a string em um array de caracteres individuais

        let numerosArray = limparValor.split("");

        // Criar a variável para receber o número formatado

        let numeroFormatado = "";

        // Acessa o IF quando a quantidade de números é maior do que zero

        if(numerosArray.length > 0) {
            numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
        }

        // Acessa o IF quando a quantidade de números é maior do que dois

        if(numerosArray.length > 2) {
            numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`
        }

        // Acessa o IF quando a quantidade de números é maior do que sete

        if(numerosArray.length > 7) {
            numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
        }

        // Enviar formatado
        celular.value = numeroFormatado;
    }
)