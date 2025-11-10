//====Acessou o id do input====
const tela = document.getElementById("tela")

//====Função de adicionar valor====
function adicionarValor(valor) {
    tela.value += valor
}

//====Função de limpar a tela====
function limparTela() {
    tela.value = ""
}

//====Função de apagar unidade====
function apagarUltimo() {
    tela.value = tela.value.slice(0,-1)
    // Substitui o texto pelo mesmo texto sem o último caractere

}

//=====Função de Calcular resultado=====
function calcularResultado() {
    try { // tenta executar o bloco a seguir - se der erro, vai para o catch

        tela.value = eval(tela.value) //Atenção: eval executa código JavScript - funciona para exressões simples simples, mas requer cuidado com entrada do usuário

    } catch(erro) // captura qualquer erro vindo do try (por exemplo expressão inválida)
    {
        tela.value = "Erro"
    }
}

// Faz a calculadora adicionar um evento de cliques do teclado
// Chamando evento pelo JavaScript

//Nova declaração de função inde acontece dentro do evento

document.addEventListener("keydown", function(evento) {
const tecla = evento.key; //Pega o valor da tecla pressionada (ex.: "1", "+", "enter", "backspace")

if("0123456789+-*/.".includes(tecla)) {
    adicionarValor(tecla)
if(tecla === "Enter") {
    calcularResultado()
}
}
} 