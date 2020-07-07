
const currencyRatio = {
  vnd: {
    usd: 0.000043,
    krw: 0.051,
    eur: 0.000039,
    vnd: 1
  },
  usd: {
    usd: 1,
    krw: 1193.27,
    eur: 0.9,
    vnd: 23235.5
  },
  krw: {
    usd: 0.00084,
    krw: 1,
    eur: 0.00075,
    vnd: 19.47
  },
  eur:{
    usd:1.13,
    krw:1350.73,
    eur:1,
    vnd:26240
  }
};





function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}
function change(){

  
  let from=document.getElementById('from').value.toLowerCase();
  let to=document.getElementById('to').value.toLowerCase();
  let result = amountInput.value;
  if (result===""){
    document.getElementById("result").innerHTML = `please write numbers again`;
  }else{
  let convertedAmount = formatCurrency(to.toUpperCase(),result * currencyRatio[from][to]);
  document.getElementById("result").innerHTML = `${result} ${from.toUpperCase()} is ${convertedAmount}`;
  }
}

 function reverse(){
  let from=document.getElementById('from').value;
  let to=document.getElementById('to').value;
  document.getElementById('to').value=from;
  document.getElementById('from').value=to;
 }
let amountInput = document.getElementById('amount');

let convertButton= document.getElementById('convertButton');
convertButton.addEventListener("click",change);
let reverseButton=document.getElementById('btn-reverse');
reverseButton.addEventListener("click",reverse);





