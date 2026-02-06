
const inputNome = document.getElementById('inputNome');
const inputTelefone = document.getElementById('inputTelefone');
const btnCadastrar = document.getElementById('btnCadastrar');
const tabelaBody = document.getElementById('tabelaContatosBody');


const telefonesCadastrados = [];


function adicionarContato(event) {

    event.preventDefault();

    const nome = inputNome.value.trim();
    const telefone = inputTelefone.value.trim();


    if (nome === '' || telefone === '') {
        alert('Por favor, preencha ambos os campos (Nome e Telefone).');

    }


    if (telefonesCadastrados.includes(telefone)) {
        alert(`O número de telefone ${telefone} já está cadastrado.`);
        return; // Impede a continuação da função
    }


    adicionarLinhaNaTabela(nome, telefone);
    telefonesCadastrados.push(telefone); 

    inputNome.value = '';
    inputTelefone.value = '';
    inputNome.focus();
}


function adicionarLinhaNaTabela(nome, telefone) {
    const novaLinha = document.createElement('tr');

    const celulaNome = document.createElement('td');
    celulaNome.textContent = nome;

    const celulaTelefone = document.createElement('td');
    celulaTelefone.textContent = telefone;

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaTelefone);

    tabelaBody.appendChild(novaLinha);
}


btnCadastrar.addEventListener('click', adicionarContato);
