function getStarted(){
    var money = owo.innerHTML
    var amount = Quality.value + price.value
    priceItem = Number(amount)

    if (price.value == "" || product.value == "" || Quality.value =="") {
        error.style.display = "block"
        setTimeout(() => {
            error.style.display = "none"
        }, 2000);
    }else if (priceItem > 0  && priceItem > money) {
        errors.style.display = "block"
        setTimeout(() => {
            errors.style.display = "none"
        }, 3000);

    }

    else{
         
        show.innerHTML += ` 
        <tr>
                    <td>${product.value}</td>
                    <td>${price.value}</td>
                    <td>${Quality.value}</td>
                    <td>${price.value * Quality.value}</td>
        

                </tr>
        `
    }

    document.getElementById('product').value =""
    document.getElementById('price').value =""
    document.getElementById('Quality').value = ""
    document.getElementById('Amount'). value = ""
    document.getElementById('Total'). value = ""

}

function login(){
    location.href = "http://127.0.0.1:5500/index.html"
}