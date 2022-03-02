document.getElementById("error-msg").style.display ="none"
const searching = () => {
  const searchBox = document.getElementById("search-box");
  const searchInput = searchBox.value
  
  
  

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data.data))
    
  
};



const displayData = (phones) => {
  console.log(phones);
 if (phones.length == 0){
    document.getElementById("error-msg").style.display ="block"
    document.getElementById('gif').style.display = 'block'
    document.getElementById("main").innerHTML = "";
    document.getElementById("details-main").innerHTML = "";
  }
  else{
    const phone20 = phones.slice(0, 20);
    const main = document.getElementById("main");
    document.getElementById('foot').style.display="block"
    document.getElementById("error-msg").style.display ="none"
    document.getElementById('gif').style.display = 'none'
    document.getElementById("main").innerHTML = "";
    document.getElementById("details-main").innerHTML = "";
    document.getElementById('search-box').value = "";
    phone20.forEach((phone) => {
      console.log(phone);
      const div = document.createElement("div");
      div.classList.add("col-lg-4");
      div.classList.add("col-12");
      div.innerHTML = `
         <div class="card mt-5 mx-auto me-0 me-lg-5  border-light  " style="width: 18rem;">
          <img src="${phone.image}" class="card-img-top card-image " alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">${phone.phone_name}</h5>
            <p class="card-text text-center text">${phone.brand}</p>
            <a href="#" onclick="details('${phone.slug}')" class="btn btn-success button text-center w-100">Details</a>
          </div>
        </div>
         `;
  
      main.appendChild(div);
    });
  }

  
};


const details = (id) => {
  const url = `
  https://openapi.programming-hero.com/api/phone/${id}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.data));
};

const displayDetails = (details) => {
  console.log(details);
  const detailsMain = document.getElementById("details-main");
  document.getElementById("details-main").innerHTML = "";
  const div = document.createElement("div");

  div.innerHTML = `
  <div class="card mb-3 mt-3 container border-light" style="max-width: 540px;">
  
    <div class="">
      <img src="${details.image}" class=" rounded-start" alt="...">
    </div>
    
      <div class="card-body">
      
        <h2  class="card-title">${details.name}</h2>
        <h5 class="allName">Main features : </h5>
        <p  class="card-text"> <span class="allName"> Display size :</span> <span class="text">${details.mainFeatures.displaySize}</span></p>
        <p  class="card-text"> <span class="allName">Release date : </span><span class="text">${details.releaseDate}</span></p>
        <p  class="card-text"><span class="allName">Chip set : </span><span class="text">${details.mainFeatures.chipSet}</span></p>
        <p  class="card-text"><span class="allName">Storage : </span><span class="text">${details.mainFeatures.storage}</span></p>
        <p  class="card-text"><span class="allName">Memory : </span><span class="text">${details.mainFeatures.memory}</span></p>
        <p  class="card-text"><span class="allName">Sensors : </span><span class="text">${details.mainFeatures.sensors}</span> </p>
        <h5 class="allName">Others : </h5>
        <p  class="card-text"><span class="allName">Bluetooth : </span><span class="text">${details.others.Bluetooth}</span></p>
        <p  class="card-text"><span class="allName">GPS : </span><span class="text">${details.others.GPS}</span></p>
        <p  class="card-text"><span class="allName">NFC : </span><span class="text">${details.others.NFC}</span></p>
        <p  class="card-text"><span class="allName">Radio : </span><span class="text">${details.others.Radio}</span></p>
        <p  class="card-text"><span class="allName">USB : </span><span class="text">${details.others.USB}</span></p>
        <p  class="card-text"><span class="allName">WLAN : </span><span class="text">${details.others.WLAN}</span></p>
      </div>
    

 </div>
  `;
  if (details.releaseDate == "") {
    div.innerHTML = `
   <div  class="card mb-3 mt-3 container border-light" style="max-width: 540px;">
  
    <div class="">
      <img src="${details.image}" class=" rounded-start" alt="...">
    </div>
    
    <div class="card-body">
        <h3  class="card-title">${details.name}</h3>
        <h5>Main features : </h5>
        <p  class="card-text"> <span class="allName"> Display size :</span> <span class="text">${details.mainFeatures.displaySize}</span></p>
        <p  class="card-text"> <span class="allName">Release date : </span><span class="text" id="release">This phone has no release date</span></p>
        <p  class="card-text"><span class="allName">Chip set : </span><span class="text">${details.mainFeatures.chipSet}</span></p>
        <p  class="card-text"><span class="allName">Storage : </span><span class="text">${details.mainFeatures.storage}</span></p>
        <p  class="card-text"><span class="allName">Memory : </span><span class="text">${details.mainFeatures.memory}</span></p>
        <p  class="card-text"><span class="allName">Sensors : </span><span class="text">${details.mainFeatures.sensors}</span> </p>
        <h5 class="allName">Others : </h5>
        <p  class="card-text"><span class="allName">Bluetooth : </span><span class="text">${details.others.Bluetooth}</span></p>
        <p  class="card-text"><span class="allName">GPS : </span><span class="text">${details.others.GPS}</span></p>
        <p  class="card-text"><span class="allName">NFC : </span><span class="text">${details.others.NFC}</span></p>
        <p  class="card-text"><span class="allName">Radio : </span><span class="text">${details.others.Radio}</span></p>
        <p  class="card-text"><span class="allName">USB : </span><span class="text">${details.others.USB}</span></p>
        <p  class="card-text"><span class="allName">WLAN : </span><span class="text">${details.others.WLAN}</span></p>
      </div>
    

 </div>
   `;
  }

  detailsMain.appendChild(div);
};
