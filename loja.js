// Crio uma função para a navegação da página
function navegacao() {
  // Seleciono o elemento nav do HTML
  var nav = document.querySelector("nav");
  // Faço alguma coisa com a navegação, por exemplo, mudar a cor dos links
  var links = nav.querySelectorAll("a");
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "white";
  }
}

// Crio uma função para o título da página
function titulo() {
  // Seleciono o elemento h2 do HTML
  var h2 = document.querySelector("h2");
  // Faço alguma coisa com o título, por exemplo, mudar o texto
  h2.textContent = "Seu carrinho está cheio!";
}

// Crio uma função para o resumo da compra
function resumo() {
  // Seleciono o elemento aside do HTML
  var aside = document.querySelector("aside");
  // Faço alguma coisa com o resumo, por exemplo, calcular o total
  var ul = aside.querySelector("ul");
  var li1 = ul.querySelector("li:nth-child(1)");
  var li2 = ul.querySelector("li:nth-child(2)");
  var li3 = ul.querySelector("li:nth-child(3)");
  
  var subtotal = parseInt(li1.textContent.split(": ")[1]);
  var frete = parseInt(li2.textContent.split(": ")[1]);
  var total = subtotal + frete;
  
  li3.textContent = "Total: R$ " + total;
}

// Crio uma função para o botão de finalizar compra
function finalizar() {
    // Seleciono o elemento button do HTML
    var button = document.querySelector("button");
    // Faço alguma coisa com o botão, por exemplo, redirecionar para outra página
    button.addEventListener("click", function() {
      window.location.href = "https://www.bing.com/";
    });
}
var quantidade = document.getElementById("quantidade-select");




// Select the td element that contains the total of the product
var total = quantidade.parentElement.parentElement.lastElementChild.previousElementSibling;

// Create a function to update the total of the product
function atualizarTotal() {
  // Get the value of the quantity
  var qtd = parseInt(quantidade.value);

  // Get the unit price of the product
  var preco = parseInt(quantidade.parentElement.previousElementSibling.textContent.replace('R$ ', ''));

  // Calculate the total of the product
  var totalProduto = qtd * preco;
  

  // Update the cell of the total of the product
  total.textContent = "R$ " + totalProduto;
}


// Add a change event to the quantity selector
quantidade.addEventListener("change", atualizarTotal);

function finalizar2() {
  // Seleciono o elemento button do HTML
  var button = document.querySelector("button");
  // Faço alguma coisa com o botão, por exemplo, redirecionar para outra página
  button.addEventListener("click", function() {
    window.location.href = "https://www.bing.com/";
  });
}
var quantidade = document.getElementById("quantidade-select");
var quantidade = document.getElementById("quantidade-select2");




// Select the td element that contains the total of the product
var total = quantidade.parentElement.parentElement.lastElementChild.previousElementSibling;

// Create a function to update the total of the product
function atualizarTotal() {
// Get the value of the quantity
var qtd = parseInt(quantidade.value);

// Get the unit price of the product
var preco = parseInt(quantidade.parentElement.previousElementSibling.textContent.replace('R$ ', ''));

// Calculate the total of the product
var totalProduto = qtd * preco;


// Update the cell of the total of the product
total.textContent = "R$ " + totalProduto;
}


// Add a change event to the quantity selector
quantidade.addEventListener("change", atualizarTotal);

