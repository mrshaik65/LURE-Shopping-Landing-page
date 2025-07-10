

const rootE1 = document.getElementById("root");

async function api() {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    displayCards(response);
    localStorage.setItem("apiData" ,JSON.stringify(response))
  } catch (error) {
    console.log(error, "errot accured");
    alert(error);
  } finally {
    console.log("api call completed");
  }
}

if(localStorage.getItem("apiData")){
    displayCards(JSON.parse(localStorage.getItem("apiData")))
}else{
    api()
}

function displayCards(apiData) {
  rootE1.innerHTML = "";
  for (let eachProduct of apiData) {
    const myCard = `
    <div class="card shadow-sm" style="width: 18rem">

<img
src="${eachProduct.image}"
class="card-img-top p-3"
alt="lure-com-image"
height="300"
/>
<div class="card-body">
<h5 class="card-title"><b>${eachProduct.title}</b></h5>
<p class="card-text my-0">
${eachProduct.description.slice(0, 40)}
</p>
<p class="m-0"><b>Price: </b>${eachProduct.price}</p>
<p class="m-0"><b>Rating: </b>${eachProduct.rating.rate}(${
      eachProduct.rating.count
    })</p>
<a href="#" class="btn btn-success my-2">Buy Now</a>
</div>
</div>
    `;
    rootE1.innerHTML += myCard;
  }
}
