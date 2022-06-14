const NUMERO_ATUAL = document.getElementById('numeroAtual');
let contador = 0;

function incremento() {
    if (contador < 10) {
         contador++;
        NUMERO_ATUAL.innerHTML = contador;
    }

}

function decremento() {
    if (contador > 0) {
         contador--;
        NUMERO_ATUAL.innerHTML = contador;
    }
}

