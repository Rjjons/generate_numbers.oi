      document.getElementById("generateButton").value;
      document.getElementById("network").value;
      document.getElementById("enterDeno").value;
      document.getElementById("enterQuantity").value;
      
      const pattern = "XXXX-XXXX-XXXX-XXXX";

      let card = "";
      

      function generateRechargeCard() {
        
        for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "X") {
      card += Math.floor(Math.random() * 10);
    } else {
      card += pattern[i];
    }
  }
      

      card = card.slice(0, 4) + "" + card.slice(4, 8) + "" + card.slice(8, 12) + "" + card.slice(12);

return card;
}
document.getElementById("output").innerHTML=generateRechargeCard();



      
      
    