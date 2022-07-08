const fetchMoedas = async () => {
    const url = `https://api.coincap.io/v2/assets`;
    const coins = await fetch(url)
    .then((response) => response.json())
    .then(data => data.data)
    .catch((error) => error.toString())

    return coins;
};

const setCoins = async () => {
    const coins = await fetchMoedas()

    const listCoins = document.getElementById('cripto');

    coins
    .filter((_,index) => index < 10)
    .forEach(element => {
        const newList = document.createElement('li');
        const usdPrice = Number(element.priceUsd); 
        
        newList.innerText = `${element.name}(${element.symbol}): ${usdPrice.toFixed(2)}`

        listCoins.appendChild(newList);
    });
}

window.onload = () => setCoins();

//{ headers: { Accept: 'application/json' } })
  //  .then(response => response.json())
    //.then(
   // );