const readline = require('readline-sync');

let doadores = []; // Aqui ele irá armazenar todos os doadores

function cadastrarDoador() {
    let usuario = {};
    

    usuario.nome = readline.question("Digite o nome do doador: ");
    usuario.idade = readline.questionInt("Digite a idade do doador: ");
    usuario.peso = readline.questionFloat("Digite o peso do doador: ");
    usuario.tipoSanguineo = readline.question("Digite o tipo sanguineo do doador: ");
    usuario.ultimaDoacao = readline.question("Digite a data da ultima doacao (dd/mm/aaaa): ");
    
    
    doadores.push(usuario);

    console.log("Doador cadastrado com sucesso!");
//Essa função permite cadastrar um doador

}

function listarDoadores() {
    if (doadores.length === 0) {
        console.log("Não há doadores cadastrados.");
        return;
    }

    let lista = "===== LISTA DE DOADORES =====\n";
    doadores.forEach((doador, index) => {
        lista += `${index + 1}. Nome: ${doador.nome} - Idade: ${doador.idade} - Peso: ${doador.peso} - Tipo Sanguíneo: ${doador.tipoSanguineo} - Última Doação: ${doador.ultimaDoacao}\n`;
    });

    console.log(lista);
}// Essa função irá listar todos os doadores cadastrados

function procurarDoadorPorTipoSanguineo() {
    const tipoSanguineo = readline.question("Digite o tipo sanguíneo para buscar: ");
    const resultados = doadores.filter(doador => doador.tipoSanguineo.toLowerCase() === tipoSanguineo.toLowerCase());

    if (resultados.length === 0) {
        console.log("Nenhum doador encontrado com esse tipo sanguíneo.");
        return;
    }

    let listaResultados = "===== RESULTADOS =====\n";
    resultados.forEach((doador, index) => {
        listaResultados += `${index + 1}. Nome: ${doador.nome} - Idade: ${doador.idade} - Peso: ${doador.peso} - Tipo Sanguíneo: ${doador.tipoSanguineo} - Última Doação: ${doador.ultimaDoacao}\n`;
    });

    console.log(listaResultados);
}// Essa função irá buscar o tipo sanguineo especifico que o usuario procurar.

function procurarUltimaDoacao() {
    const dataUltimaDoacao = readline.question("Digite a data da ultima doacao para buscar (dd/mm/aaaa): ");
    let dataRecebidaInvertida = dataUltimaDoacao.split('/'); // [01, 01, 2001]
    dataRecebidaInvertida = dataRecebidaInvertida[2]+dataRecebidaInvertida[1]+dataRecebidaInvertida[0]
    let encontrados = []
    for (let i=0; i < doadores.length; i++) {

        let dataDoadorInvertida = doadores[i].ultimaDoacao.split('/')
        dataDoadorInvertida = dataDoadorInvertida[2]+dataDoadorInvertida[1]+dataDoadorInvertida[0]
        if (dataDoadorInvertida <= dataRecebidaInvertida) {
            encontrados.push(doadores[i])
        } 
    }
    console.log("===== RESULTADOS =====\n")

    for (let i=0; i < encontrados.length; i++) {

        console.table(doadores);
    }
};



function removerDoador() {
    if (doadores.length === 0) {
        console.log("Nao ha doadores para remover.");
        return;
    }

    listarDoadores();
    const indice = readline.questionInt("Digite o número do doador a ser removido: ") - 1;

    if (indice < 0 || indice >= doadores.length) {
        console.log("Doador nao encontrado.");
        return;
    }

    doadores.splice(indice, 1); // Ele remove um doador de um local determinado.
    console.log("Doador removido com sucesso.");
}// Essa função irá remover um doador especifico.

function menu() {
    console.log(`
     __   __  _______  __   __  _______  _______  _______  __    _  _______  ______    _______ 
    |  | |  ||       ||  |_|  ||       ||       ||       ||  |  | ||       ||    _ |  |       |
    |  |_|  ||    ___||       ||   _   ||       ||    ___||   |_| ||_     _||   | ||  |   _   |
    |       ||   |___ |       ||  | |  ||       ||   |___ |       |  |   |  |   |_||_ |  | |  |
    |       ||    ___||       ||  |_|  ||      _||    ___||  _    |  |   |  |    __  ||  |_|  |
    |   _   ||   |___ | ||_|| ||       ||     |_ |   |___ | | |   |  |   |  |   |  | ||       |
    |__| |__||_______||_|   |_||_______||_______||_______||_|  |__|  |___|  |___|  |_||_______|`)
    while (true) {
        let opcao = readline.questionInt("===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n1. Cadastrar doador\n2. Listar doadores\n3. Procurar doador por tipo sanguineo\n4. Procurar doador por ultima doacao\n5. Remover doador\n6. Sair\nEscolha uma opcao: ");
       
        
        switch (opcao) {
            case 1:
                cadastrarDoador();
                break;
            case 2:
                listarDoadores();
                break;
            case 3:
                procurarDoadorPorTipoSanguineo();
                break;
            case 4:
                procurarUltimaDoacao();
                break;
            case 5:
                removerDoador();
                break;
            case 6:
                console.log("Saindo do programa...");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();











































































































































