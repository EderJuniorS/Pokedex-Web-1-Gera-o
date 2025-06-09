// script.js (parte modificada)
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const novoHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}" onclick="window.location.href='details.html?id=${pokemon.number}'">
                <span class="numero">#${pokemon.number}</span>
                <span class="nome">${pokemon.name}</span>

                <div class="detalhe">
                    <ol class="tipos">
                        ${pokemon.types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
        pokemonList.innerHTML += novoHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsWithNextPage = offset + limit

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else{
        loadPokemonItens(offset, limit)
    }
})