const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "",
  },
];



function creatFrutasTemplate(arr) {

  let ul_fruits = document.querySelector(".ul_fruits")
  for (index = 0; index < arr.length; index++) {
    if (arr[index].category == "Frutas") {
      ul_fruits.innerHTML += `    
        <li class="product">
          <img
            src= ${arr[index].image}
            alt=""
            title=""
            class="product-img"
          />
          <div class="product-main">
            <h1 class="product-title"> ${arr[index].title} </h1>
            <h5 class="product-category">${arr[index].category}</h5>
            <strong class="product-price">${arr[index].price}</strong>
          </div>
        </li>
      `
    }
  }
}

function creatBebidasTemplate(arr){

  let ul_bebidas = document.querySelector(".ul_bebidas")
  for (let index = 0; index < arr.length; index++){
    if (arr[index].category == "Bebidas"){
      ul_bebidas.innerHTML += `
      <li class="product">
          <img
            src= ${arr[index].image}
            alt=""
            title=""
            class="product-img"
          />
          <div class="product-main">
            <h1 class="product-title"> ${arr[index].title} </h1>
            <h5 class="product-category">${arr[index].category}</h5>
            <strong class="product-price">${arr[index].price}</strong>
          </div>
        </li>
      `
    }
  }
}

function creatHigieneTemplate(arr){

  let ul_higiene = document.querySelector(".ul_higiene")
  for (let index = 0; index < arr.length; index++){
    if (arr[index].category == "Higiene"){
      ul_higiene.innerHTML += `
      <li class="product">
          <img
            src= ${arr[index].image}
            alt=""
            title=""
            class="product-img"
          />
          <div class="product-main">
            <h1 class="product-title"> ${arr[index].title} </h1>
            <h5 class="product-category">${arr[index].category}</h5>
            <strong class="product-price">${arr[index].price}</strong>
          </div>
        </li>
      `
    }
  }
}


creatFrutasTemplate (products)
creatBebidasTemplate(products)
creatHigieneTemplate(products)