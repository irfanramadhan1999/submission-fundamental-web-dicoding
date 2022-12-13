import { async } from "regenerator-runtime";

  const baseUrl = "https://dummyjson.com";

  let dataProducts = [];
  console.log(dataProducts);

  const getProduct = () => {
    fetch(`${baseUrl}/products`)
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        dataProducts.push(...item.products);
        renderAllProduct(dataProducts);
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

    const insertProduct = (product) => {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: `${product.id}`,
          title: `${product.title}`,
          description: `${product.description}`,

          /* other product data */
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // showResponseMessage(responseJson.message);
          dataProducts.push(data);
          renderAllProduct(dataProducts);
        })
        .catch((error) => {
          showResponseMessage(error);
        });
    };

  const renderAllProduct = (products) => {
    const listProductElement = document.querySelector("#listProduct");
    listProductElement.innerHTML = "";

    products.forEach((product) => {
      listProduct.innerHTML += `
            <div class="card">
                 <div class="card-body">
                     <h4> Judul : ${product.title}</h4>
                     <p>Deskripsi : ${product.description}</p>
                 </div>
             </div>
        `;
    });
  };



  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputProductId = document.querySelector("#inputProductId");
    const inputProductName = document.querySelector("#inputProductName");
    const inputProductDeskripsi = document.querySelector(
      "#inputProductDeskripsi"
    );
    const submitSave = document.querySelector("#SubmitSave");

    submitSave.addEventListener("click", (e) => {
      e.preventDefault();
      const product = {
        id: inputProductId.value,
        title: inputProductName.value,
        description: inputProductDeskripsi.value,
      };

      insertProduct(product);
    });

    getProduct();
  });

  // async function main() {
  //   getProduct();
  // }




  
