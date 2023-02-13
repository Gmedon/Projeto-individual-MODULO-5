const readline = require('readline');
const promp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Coloque aqui sua lista de CSS, sua lista deve vim separando os itens com "," para que a ordenação funcione perfeitamente:');
promp.on('line', (input) => {
    if (input === 'sair') {
        promp.close();
        return;
    }

    let items = input.split(',');
    items.sort();
    console.log('Sorted list:');
    items.forEach(function (item) {
        console.log(item.trim());
    });
    console.log("escreva 'sair' para sair desta tela")
});

promp.on('close', () => {
    console.log('Volte sempre :)');
});