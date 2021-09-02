const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
        // cleat data
        searchField.value = '';

    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.docs))
}

//display search result
const displaySearch = books => {
    document.getElementById('total-found').innerHTML =`
       <h1 class="text-center text-info"> Total Books Found: ${books.length}</h1>
    `;
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
         <div class="card h-100">
         <img src= 'https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg' class="card-img-top" alt="...">
         <div class="card-body">
         <h2 class="card-title">Book Name: ${book.title}</h2>
         <h4> Athor Name: ${book.author_name}</h4>
         <p> Publisher Name: ${book.publisher}</p>
         <h5>First Publish year: ${book.first_publish_year}</h5>
         </div>
         </div>
        `
        searchResult.appendChild(div)
    });

}
