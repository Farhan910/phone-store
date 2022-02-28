const searching = () =>{
    const searchBox = document.getElementById('search-box').value
    document.getElementById('search-box').value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchBox}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data.data))


}

const displayData = (phones) =>{
   const phone20 = phones.slice(0,20)
   const  main = document.getElementById('main')
   document.getElementById('main').innerHTML = "";
   phone20.forEach((phone ) => {
       console.log(phone);
       const div = document.createElement('div')
       div.classList.add('col-lg-4')
       div.innerHTML = `
       <div class="card mt-5 border-light " style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          <a href="#" class="btn btn-success">Details</a>
        </div>
      </div>
       `
       
       main.appendChild(div)

   })
}