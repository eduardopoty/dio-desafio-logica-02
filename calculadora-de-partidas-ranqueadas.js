let vitorias = 150
let derrotas = 90

function saldoRanqueadas(paramVitorias, paramDerrotas) {
    let resultado = paramVitorias - paramDerrotas
    return resultado
}

function determinaNivel(saldoVitorias) {

    let resultadoNivel = ""

    if(saldoVitorias <= 10) {
        resultadoNivel = "Ferro"
    }
    else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        resultadoNivel = "Bronze"
    }
    else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        resultadoNivel = "Prata"
    }
    else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        resultadoNivel = "Ouro"
    }
    else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        resultadoNivel = "Diamante"
    }
    else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        resultadoNivel = "Lendário"
    }
    else if (saldoVitorias > 90 && saldoVitorias >= 101) {
        resultadoNivel = "Imortal"
    }

    return resultadoNivel

}

let saldoVitorias = saldoRanqueadas(vitorias, derrotas)
let nivel = determinaNivel(saldoVitorias)

for (let i = 1; i <= 2; i++) {

    switch (i) {
        
        case 1: {
            console.log("Resultado:")
            console.log("O herói tem o saldo de " +saldoVitorias+ " e está no nível de " +nivel)
            break
        }

        case 2: {
            console.log("*****")
            console.log("Repetindo:")
            console.log("O herói tem o saldo de " +saldoVitorias+ " e está no nível de " +nivel)
            break
        }

        
    }

}
