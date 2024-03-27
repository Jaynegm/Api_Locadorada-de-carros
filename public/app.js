fetch('http://localhost:8080/locadora')
    .then(response => response.json())
    .then(data => {
        const carrosList = document.getElementById('carro-list');
        data.forEach(carro => {
            // Criar um novo card para cada item
            const carroDiv = document.createElement('div');
            carroDiv.classList.add('card'); // Adiciona a classe 'card'
            carroDiv.innerHTML = `
                <h2>${carro.nome}</h2>
                <img src="${carro.foto}" alt="${carro.nome}">
                <p><strong>Categoria:</strong> ${carro.categoria}</p>
                <p><strong>Descrição:</strong> ${carro.descricao}</p>
                <p><strong>Valor:</strong> ${carro.valor}</p>
                <p class="contato"><strong>Contato:</strong> ${carro.contato}</p>
            `;
            // Adiciona o card à lista de carros
            carrosList.appendChild(carroDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar catálogo:', error));