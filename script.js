let balance = 200000;

    function getStarted() {
        const product = document.getElementById('product').value;
        const price = parseFloat(document.getElementById('price').value);
        const quality = parseInt(document.getElementById('quality').value);
        const totalCost = price * quality;

        if (!product || !price || !quality) {
            document.getElementById('error').style.display = "block";
            setTimeout(() => {
                document.getElementById('error').style.display = "none";
            }, 2000);
            return;
        }

        if (totalCost > balance) {
            document.getElementById('errors').style.display = "block";
            setTimeout(() => {
                document.getElementById('errors').style.display = "none";
            }, 3000);
            return;
        }

        balance -= totalCost;
        document.getElementById('owo').innerText = `# ${balance}`;

        document.getElementById('show').innerHTML += `
            <tr>
                <td>${product}</td>
                <td>${price}</td>
                <td>${quality}</td>
                <td>${totalCost}</td>
            </tr>
        `;

        document.getElementById('product').value = "";
        document.getElementById('price').value = "";
        document.getElementById('quality').value = "";

        if (balance <= 0) {
            document.getElementById('errors').style.display = "block";
            setTimeout(() => {
                document.getElementById('errors').style.display = "none";
            }, 3000);
        }
    }