// Função para obter o ID do Pokémon da URL
function getPokemonIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Função para carregar os detalhes do Pokémon
function loadPokemonDetails() {
    const pokemonId = getPokemonIdFromUrl();
    
    if (!pokemonId) {
        window.location.href = 'index.html';
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(pokemon => {
            displayPokemonDetails(pokemon);
        })
        .catch(error => {
            console.error('Error fetching Pokémon details:', error);
            window.location.href = 'index.html';
        });
}

// Função para exibir os detalhes do Pokémon
function displayPokemonDetails(pokemon) {
    const detailsContainer = document.getElementById('pokemonDetails');
    const primaryType = pokemon.types[0].type.name;
    
    // Adiciona a classe do tipo principal ao container
    detailsContainer.className = `pokemon-details ${primaryType}`;
    
    // Formata os tipos
    const typesHtml = pokemon.types.map(type => 
        `<span class="type ${type.type.name}">${type.type.name}</span>`
    ).join('');
    
    // Formata as estatísticas
    const statsHtml = pokemon.stats.map(stat => `
        <tr>
            <th>${stat.stat.name.replace('-', ' ')}</th>
            <td>${stat.base_stat}</td>
        </tr>
    `).join('');
    
    // Formata as habilidades
    const abilitiesHtml = pokemon.abilities.map(ability => 
        ability.ability.name.replace('-', ' ')
    ).join(', ');
    
    // Cria o HTML com todos os detalhes
    detailsContainer.innerHTML = `
        <div class="header">
            <h1 class="name">${pokemon.name}</h1>
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        </div>
        
        <div class="types">${typesHtml}</div>
        
        <img class="image" src="${pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}" alt="${pokemon.name}">
        
        <div class="info">
            <h3>Informações</h3>
            <table class="info-table">
                <tr>
                    <th>Altura</th>
                    <td>${(pokemon.height / 10).toFixed(1)} m</td>
                </tr>
                <tr>
                    <th>Peso</th>
                    <td>${(pokemon.weight / 10).toFixed(1)} kg</td>
                </tr>
                <tr>
                    <th>Habilidades</th>
                    <td>${abilitiesHtml}</td>
                </tr>
            </table>
            
            <h3>Estatísticas</h3>
            <table class="info-table">
                ${statsHtml}
            </table>
        </div>
    `;
}

// Carrega os detalhes quando a página é aberta
document.addEventListener('DOMContentLoaded', loadPokemonDetails);