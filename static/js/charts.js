document.addEventListener("DOMContentLoaded", (event) => {
   const chartData = JSON.parse(document.getElementById("data").textContent);

   const chart = LightweightCharts.createChart(document.getElementById("chart"), {
         width: window.innerWidth * (2/3),
         height: window.innerHeight * .4,
         layout: {
            background: { color: "#282b30" },
            textColor: "#7289da"
         },
         grid: {
            vertLines: { color: "#444" },
            horzLines: { color: "#444" }
         }
      }
   );

   // Setting the border color for the vertical axis
   chart.priceScale().applyOptions({
      borderColor: "#71649C"
   });

   // Setting the border color for the horizontal axis
   chart.timeScale().applyOptions({
      borderColor: "#71649C"
   });

   // Adjust the starting bar width (essentially the horizontal zoom)
   chart.timeScale().applyOptions({
      barSpacing: 12
   });

   chart.applyOptions({
      layout: {
         fontFamily: "'Poppins', sans-serif"
      },
      crosshair: {
         // Change mode from default 'magnet' to 'normal'.
         // Allows the crosshair to move freely without snapping to datapoints
         mode: LightweightCharts.CrosshairMode.Normal,

         // Vertical crosshair line (showing Date in Label)
         vertLine: {
            width: 8,
            color: "#C3BCDB44",
            style: LightweightCharts.LineStyle.Solid,
            labelBackgroundColor: "#7289da"
         },

         // Horizontal crosshair line (showing Price in Label)
         horzLine: {
            color: "#9B7DFF",
            labelBackgroundColor: "#7289da"
         }
      }
   });

   const chart2 = LightweightCharts.createChart(document.getElementById("chart"), {
         width: window.innerWidth * (2/3),
         height: window.innerHeight * .4,
         layout: {
            background: { color: "#282b30" },
            textColor: "#7289da"
         },
         grid: {
            vertLines: { color: "#444" },
            horzLines: { color: "#444" }
         }
      }
   );

   // Setting the border color for the vertical axis
   chart2.priceScale().applyOptions({
      borderColor: "#71649C"
   });

   // Setting the border color for the horizontal axis
   chart2.timeScale().applyOptions({
      borderColor: "#71649C"
   });

   // Adjust the starting bar width (essentially the horizontal zoom)
   chart2.timeScale().applyOptions({
      barSpacing: 12
   });

   // Customizing the Crosshair
   chart2.applyOptions({
      layout: {
         fontFamily: "'Poppins', sans-serif"
      },
      crosshair: {
         // Change mode from default 'magnet' to 'normal'.
         // Allows the crosshair to move freely without snapping to datapoints
         mode: LightweightCharts.CrosshairMode.Normal,

         // Vertical crosshair line (showing Date in Label)
         vertLine: {
            width: 8,
            color: "#C3BCDB44",
            style: LightweightCharts.LineStyle.Solid,
            labelBackgroundColor: "#7289da"
         },

         // Horizontal crosshair line (showing Price in Label)
         horzLine: {
            color: "#9B7DFF",
            labelBackgroundColor: "#7289da"
         }
      }
   });

   const areaSeries = chart.addAreaSeries({
      lastValueVisible: false, // hide the last value marker for this series
      crosshairMarkerVisible: false, // hide the crosshair marker for this series
      lineColor: "transparent", // hide the line
      topColor: "rgba(56, 33, 110,0.6)",
      bottomColor: "rgba(56, 33, 110, 0.1)"
   });
   // Set the data for the Area Series
   areaSeries.setData(chartData.map(item => ({ time: item.time, value: item.close })));

   // Add a line series
   const lineSeries = chart.addLineSeries();
   lineSeries.setData(chartData.map(item => ({ time: item.time, value: item.close })));

   // Add a candlestick series
   const candlestickSeries = chart2.addCandlestickSeries();
   candlestickSeries.setData(chartData.map(item => ({
      time: item.time,
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close
   })));

   // Changing the Candlestick colors
   candlestickSeries.applyOptions({
      wickUpColor: "#7289da",
      upColor: "#7289da",
      wickDownColor: "rgb(225, 50, 85)",
      downColor: "rgb(225, 50, 85)",
      borderVisible: false
   });

   window.addEventListener("resize", () => {
      chart.resize(window.innerWidth / 2, window.innerHeight / 2);
      chart2.resize(window.innerWidth / 2, window.innerHeight / 2);
   });
});