const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
        // cleat data
        searchField.value = '';

    // load data
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data.docs))
}

//display search result
const displaySearch = books => {
    // console.log(books)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
         <div class="card h-100">
         <img src= 'https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg' class="card-img-top" alt="...">
         <div class="card-body">
         <h2 class="card-title">Book Name: ${book.title}</h2>
         <h4> Athor Name: ${book.author_name}</h4>
         <h4> Publisher Name: ${book.publisher}</h4>
         <h5>First Publish year: ${book.first_publish_year}</h5>
         </div>
         </div>
        `
        searchResult.appendChild(div)
    });

}


