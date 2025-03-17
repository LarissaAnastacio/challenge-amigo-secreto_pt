const nomes = [];

const nomeInput = document.getElementById('nome');
const lista = document.getElementById('lista');
const resultado = document.getElementById('resultado');
const botaoAdicionar = document.getElementById('adicionar');
const botaoSortear = document.getElementById('sortear');

// Função para adicionar amigos
function adicionarAmigo() {
    const nome = nomeInput.value.trim();

    // Validação da entrada
    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array
    nomes.push(nome);

    // Limpa o campo de entrada
    nomeInput.value = "";

    // Atualiza a lista exibida
    atualizarLista();
}

// Atualiza a lista de nomes exibida
function atualizarLista() {
    lista.innerHTML = ""; // Limpa a lista para evitar duplicatas

    // Percorre o array com um loop for
    for (let i = 0; i < nomes.length; i++) {
        const li = document.createElement('li');
        li.textContent = nomes[i];

        const removerBtn = document.createElement('span');
        removerBtn.textContent = '❌';
        removerBtn.classList.add('remover');
        removerBtn.addEventListener('click', () => removerNome(i));

        li.appendChild(removerBtn);
        lista.appendChild(li); // Adiciona o <li> à lista
    }
}

// Remove nome da lista
function removerNome(index) {
    nomes.splice(index, 1);
    atualizarLista();
}

// Função para sortear amigo secreto
function sortearAmigoSecreto() {
    // Verificar se há amigos disponíveis
    if (nomes.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }

    // Gerar índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);

    // Obter o nome sorteado
    const amigoSorteado = nomes[indiceAleatorio];

    // Atualizar o conteúdo do elemento de resultado
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}

// Conectar os botões às funções
botaoAdicionar.addEventListener('click', adicionarAmigo);
botaoSortear.addEventListener('click', sortearAmigoSecreto);


