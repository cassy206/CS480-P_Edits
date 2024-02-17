// Get the parent element to add the divs
let parentElement = document.body;

for (let symbol in stockData) {
   let div = document.createElement("div");
   div.className = "dashboard-grid";

   let ticker = document.createElement("h3");
   ticker.className = "ticker";
   ticker.className = "accent";
   ticker.textContent = symbol;
   div.appendChild(ticker);

   let recentData = stockData[symbol];

   let high = document.createElement("h3");
   high.className = "high";
   high.textContent = "High: $" + parseFloat(recentData['2. high']).toFixed(2);
   div.appendChild(high);

   let low = document.createElement("h3");
   low.className = "low";
   low.textContent = "Low: $" + parseFloat(recentData['3. low']).toFixed(2);
   div.appendChild(low);

   let open = document.createElement("h3");
   open.className = "open";
   open.textContent = "Open: $" + parseFloat(recentData['1. open']).toFixed(2);
   div.appendChild(open);

   let close = document.createElement("h3");
   close.className = "close";
   close.textContent = "Close: $" + parseFloat(recentData['4. close']).toFixed(2);
   div.appendChild(close);

   // Add the onclick event
   div.onclick = function() {
      window.location.href = url + "?symbol=" + ticker.textContent;
   };

   parentElement.appendChild(div);
}
