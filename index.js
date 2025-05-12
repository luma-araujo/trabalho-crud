const digite= require('prompt-sync')();

let produtos= [];
let usuarios= [];
let vendas= [];

// Geração de id para os produtos
let idProd= 0;

function genIdProduto() {
        idProd= idProd + 1;
    
        return idProd;
}

// Menu principal 
let option;

do {
    console.log("MENU SISTEMA DE COMPRAS");
    console.log("1. Gerenciar produtos");
    console.log("2. Gerenciar usuários");
    console.log("3. Realizar Compra");
    console.log("4. Listar lucro por mês");
    console.log("5. Sair");

    option = Number(digite("Escolha uma opção: "));


    switch (option) {
        case 1:
            menuProdutos();
        break;

        case 5: 
        console.log("Encerrando...");
    }


}  

while (option != 5);

function menuProdutos() {
    let option;
    
    do {
        console.log("MENU PRODUTOS");
        console.log("1. Adicionar produto");
        console.log("2. Listar produtos");
        console.log("3. Atualizar produtos");
        console.log("4. Deletar produto");
        console.log("5. Sair");
        
        option = Number(digite("Escolha uma opção digitando seu número correspondente: "));

          switch(option) {
             case 1:
                    let nomeProd= digite("Digite o nome do produto: ");
                    let precoProd= Number(digite("Digite o preço: "));
                    let quantidadeProd= Number(digite("Digite a quantidade: "));
                    produtos.push({
                        id: genIdProduto(), 
                        nome: nomeProd,
                        preco: precoProd,
                        quantidadeProd: quantidadeProd
                    });
                    console.log('Produto adicionado com sucesso.'); 
                     break;

                  // O bloco acima capta as informações que o usário insere e coloca dentro do array produtos



             case 2:
                
                    console.log("Lista de produtos");
                    console.log(produtos.length);
                    for (let i = 0; i < produtos.length; i++) {
                    console.log(produtos[i]);
                }

                

                break;
                // O objetivo desse é listar os produtos, mas está incompleto
        

             default: 
             console.log("Opção inválida. Digite uma opção válida.");
             break;
              //  O objetivo desse default é, em caso de o usuário não digitar um número entre as opções dadas, exibir essa mensagem, solicitando uma opção válida.
            }
    }
                
               
            
    while (option !== 5);
     // Enquanto a opção escolhida pelo usuário for diferente de 5, o do é executado, exibindo o menu de produtos   

            
} 




// function CadastrarProdutos() {
//     let nomeProd= digite("Digite o nome do produto: ");
//     let precoProd= Number(digite("Digite o preço: "));
//     let qtd= digite("Digite a quantidade: ");

// }
    
// function listarProd() {
//     console.log(produtos);
// }

/*
console.log(MENU SISTEMA DE COMPRAS)
console.log(1. Gerenciar produtos)
console.log(2. Gerenciar usuários)
console.log(3. Realizar Compras )
console.log(4. Listar lucro por mês)
console.log(5. Sair)

option = Number(digite("Escolha uma opção digitando seu número correspondente: "));
*/

/*
    1. Gerenciar produtos
    2. Gerenciar usuários
    3. Realizar Compras 
    4. Listar lucro por mês
    5. Sair */


    // {
//     id: ;
//     nome: ;
//     preco: ;
//     qtd: ;
// }

// {
//     id: ;
//     nome: ;
//     email: ;
// }

// {
//     id: ;
//     usuarioId: ;
//     produtoId: ;
//     quantidade: ;
//     dataCompra: ;
// }


// let id= 0;

// function genId() {
//     id= id + 1;

//     return id;
// }


    
