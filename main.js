// Seleciona os elementos do DOM
const inputNome = document.getElementById('inputNome');
const inputTelefone = document.getElementById('inputTelefone');
const btnCadastrar = document.getElementById('btnCadastrar');
const tabelaBody = document.getElementById('tabelaContatosBody');

// Array para armazenar telefones já cadastrados para garantir unicidade
const telefonesCadastrados = [];

// Função que será executada ao clicar no botão
function adicionarContato(event) {
    // Impede o comportamento padrão de recarregar a página se estiver dentro de um <form>
    event.preventDefault();

    const nome = inputNome.value.trim();
    const telefone = inputTelefone.value.trim();

    // 1. Validação: Campos não podem ser vazios
    if (nome === '' || telefone === '') {
        alert('Por favor, preencha ambos os campos (Nome e Telefone).');
        return; // Impede a continuação da função
    }

    // 2. Validação: Telefone único por lista
    if (telefonesCadastrados.includes(telefone)) {
        alert(`O número de telefone ${telefone} já está cadastrado.`);
        return; // Impede a continuação da função
    }

    // Se as validações passarem, adiciona o novo contato
    adicionarLinhaNaTabela(nome, telefone);
    telefonesCadastrados.push(telefone); // Adiciona o novo telefone ao nosso array de controle
    
    // Limpa os campos de input após o cadastro
    inputNome.value = '';
    inputTelefone.value = '';
    inputNome.focus(); // Coloca o foco de volta no primeiro campo
}

// Função para criar e inserir a nova linha na tabela
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

// Adiciona um "ouvinte de evento" (event listener) ao botão de cadastrar
btnCadastrar.addEventListener('click', adicionarContato);
