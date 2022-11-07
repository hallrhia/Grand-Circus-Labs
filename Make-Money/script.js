const form = document.getElementById("makeMoney");
const responseDiv = document.getElementById("responses")
 

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();

    let data = new FormData(form);

    let coinType = data.get("coin-type");
    let quantity = data.get("quantity");

    let response = coinType.repeat(quantity);

    let coinElement = document.createElement("div");

    coinElement.innerText = response;

    responseDiv.appendChild(coinElement);
}


// responseDiv.addEventListener('click', removeCoin);

// function removeCoin(){
//     responseDiv.target.remove();
// }


//     response.addEventListener('click', (event) => {
//         event.target.remove();
//     });


// append response div innertext to have image?


