function redirect(){
    console.log("button!");
    window.location.href='#buy';
}

var countDate = new Date('Jan 1, 2023 00:00:00').getTime();

function time(){
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second*60;
    var hour = minute* 60;
    var day = hour* 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / second);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText= h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function(){
    time();
}, 1000)


//crypto prices
const bitcoin = document.getElementById('bitcoinprice');
const ethereum = document.getElementById('ethereumprice');
const dogecoin = document.getElementById('dogecoinprice');

var livePrice = {
    'async': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cdragon-coin&vs_currencies=usd',
    
    'method': 'GET',
    'headers': {}
}

$.ajax(livePrice).done(function(response){
    console.log(response);
    bitcoin.innerHTML = response.bitcoin.usd + '💲';
    ethereum.innerHTML = response.ethereum.usd + '💲';
    dogecoin.innerHTML = response.dogecoin.usd + '💲';
});

