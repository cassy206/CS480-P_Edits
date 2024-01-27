// Get the parent element to add the divs
let parentElement = document.body;

// Array of 10 tech stocks
let stocks = ["AAPL", "MSFT", "NVDA", "TSM", "AVGO", "ORCL", "ADBE", "ASML", "CSCO", "CRM"];

for (let i = 0; i < stocks.length; i++) {
   let div = document.createElement("div");
   div.className = "dashboard-grid";

   let ticker = document.createElement("h3");
   ticker.className = "ticker";
   ticker.textContent = stocks[i];
   div.appendChild(ticker);

   let high = document.createElement("h3");
   high.className = "high";
   high.textContent = "High: $43.37"; // Replace with actual data
   div.appendChild(high);

   let low = document.createElement("h3");
   low.className = "low";
   low.textContent = "Low: $43.37"; // Replace with actual data
   div.appendChild(low);

   let open = document.createElement("h3");
   open.className = "open";
   open.textContent = "Open: $43.37"; // Replace with actual data
   div.appendChild(open);

   let close = document.createElement("h3");
   close.className = "close";
   close.textContent = "Close: $43.37"; // Replace with actual data
   div.appendChild(close);

   // Add the onclick event
   div.onclick = function() {
      console.log(url);
      window.location.href = url + "?symbol=" + ticker.textContent;
   };

   parentElement.appendChild(div);
}
