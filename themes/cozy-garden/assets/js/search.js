const searchBox = document.getElementById("search-query");
const searchResult = document.getElementById("search-results");

const options = {
  keys: ['title']
}

function executeSearch() {
	fetch("/index.json")
	   .then(res => res.json())
	   .then(data => {
			const fuse = new Fuse(data, options);
      return fuse.search(searchBox.value); 
			})
			.then(listOfResult => {
					render(listOfResult);
				})
			.catch(e => console.log(e)) 
}

function render(listOfResult) {
	let searchItem = "";
	for(result of listOfResult) {
	  searchItem += `<a href="${result.item.permalink}"><h3 class="search-item">${result.item.title}</h3></a>`;
	}
	searchResult.innerHTML = searchItem;
}

