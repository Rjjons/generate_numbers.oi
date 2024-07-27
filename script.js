function generateRechargeCard() {
  const qty = document.getElementById("enterQuantity").value;
  const deno = document.getElementById("enterDeno").value;
  const network = document.getElementById("network").value;

  if (network === "mtn") {
    //alert(network);
    mtn(network, deno, qty);
  }
  if (network === "glo") {
    //alert(network);
    glo(network, deno, qty);
  }
  if (network === "airtel") {
    //alert(network);
    airtel(network, deno, qty);
  }

  if (network === "nineMobile") {
   // alert(network);
    nineMobile(network, deno, qty);
  }
}

// function to generate the random numbers
function generate() {
  function getRandomSegment(val) {
    return Math.floor(Math.random() * 10000).toString().padStart(val, "0"); 
  }

  let segment1 = getRandomSegment(4);
  let segment2 = getRandomSegment(4);
  let segment3 = getRandomSegment(4);
  let segment4 = getRandomSegment(3);

  return `${segment1}-${segment2}-${segment3}-${segment4}`;
}
let result = "";

function mtn(network, deno, qty) {
  for (let i = 0; i < qty; i++) {
    result += `
  <div class="card-container">
<p><b>Network:</b>MTN</p>
<p><b>Amount:</b>${deno}</p>
<p><b>PIN:</b>${ generate()}</p>
</div>
  `;
  }

  document.getElementById("output").innerHTML = result;
}

function glo(network, deno, qty) {
  for (let i = 0; i < qty; i++) {
    result += `
  <div class="card-container">
<p><b>Network:</b>GLO</p>
<p><b>Amount:</b>${deno}</p>
<p><b>PIN:</b>${generate()}</p>
</div>
  `;
  }

  document.getElementById("output").innerHTML = result;
}

function airtel(network, deno, qty) {
  for (i = 0; i < qty; i++) {
    result += `
  <div class="card-container">
<p><b>Network:</b>Airtel</p>
<p><b>Amount:</b>${deno}</p>
<p><b>PIN:</b>${generate()}</p>
</div>
  `;
  }

  document.getElementById("output").innerHTML = result;
}

function nineMobile(network, deno, qty) {
  for (i = 0; i < qty; i++) {
    result += `
  <div class="card-container">
<p><b>Network:</b>9mobile</p>
<p><b>Amount:</b>${deno}</p>
<p><b>PIN:&p </b>${generate()}</p>
</div>
  `;
  }
  document.getElementById("output").innerHTML = result;
}


