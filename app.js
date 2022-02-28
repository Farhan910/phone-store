const searching = () =>{
    const searchBox = document.getElementById('search-box').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data.data))


}

const displayData = (phones) =>{
    
}