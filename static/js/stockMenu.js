let parentElement = document.getElementById('stockMenu');
let stocks = ["AAPL", "MSFT", "NVDA", "TSM", "AVGO", "ORCL", "ADBE", "ASML", "CSCO", "CRM"]

for (let symbol of stocks) {
   let div = document.createElement("div");
   div.className = "stockMenu-grid";

   let ticker = document.createElement("h3");
   ticker.className = "ticker";
   ticker.className = "accent";
   ticker.textContent = symbol;
   div.appendChild(ticker);

   // Add the onclick event
   div.onclick = function() {
      window.location.href = url + "?symbol=" + ticker.textContent;
   };

   parentElement.appendChild(div);
}
