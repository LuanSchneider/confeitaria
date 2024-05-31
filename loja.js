
document.getElementById('adicionar-produto').addEventListener('click', function() {
    // Cria uma nova linha
    var row = document.createElement('tr');
  
    // Cria as células para produto, preço, quantidade e total
    var produtoCell = document.createElement('td');
    var precoCell = document.createElement('td');
    var quantidadeCell = document.createElement('td');
    var totalCell = document.createElement('td');
  
    // Adiciona um campo de entrada para o produto e o preço
    produtoCell.innerHTML = '<input type="text" id="produto-input" placeholder="Nome do produto">';
    precoCell.innerHTML = '<input type="text" id="preco-input" placeholder="Preço">';
  
    // Adiciona um seletor para a quantidade
    quantidadeCell.innerHTML = '<select id="quantidade-select"><option value="1">1</option><option value="2">2</option><option value="3">3</option><!-- ... --><option value="29">29</option><option value="30">30</option></select>';
  
    // Adiciona as células à linha
    row.appendChild(produtoCell);
    row.appendChild(precoCell);
    row.appendChild(quantidadeCell);
    row.appendChild(totalCell);
  
    // Adiciona a linha ao corpo da tabela
    document.querySelector('tbody').appendChild(row);
    
    // Adiciona um botão de salvar
    var saveButton = document.createElement('button');
    saveButton.innerHTML = 'Salvar';
    saveButton.addEventListener('click', function() {
        // Pega os valores dos campos de entrada
        var produto = document.getElementById('produto-input').value;
        var preco = document.getElementById('preco-input').value;
        var quantidade = document.getElementById('quantidade-select').value;
        
        // Adiciona os valores à tabela
        produtoCell.innerHTML = produto;
        precoCell.innerHTML = preco;
        quantidadeCell.innerHTML = quantidade;
        totalCell.innerHTML = preco * quantidade;
    });
    
    // Adiciona o botão de salvar à linha
    row.appendChild(saveButton);

    // Adiciona um botão de remover
    var linha = document.createElement('button');
    linha.innerHTML = 'Remover';
    linha.addEventListener('click', function() {
        // Remove a linha da tabela
        row.parentNode.removeChild(row);
    });

    // Adiciona o botão de remover à linha
    row.appendChild(linha);
});
