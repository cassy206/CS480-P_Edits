document.addEventListener('DOMContentLoaded', (event) => {
    const chartData = JSON.parse(document.getElementById('data').textContent);

    const chart = LightweightCharts.createChart(document.getElementById('chart'), { width: 800, height: 600 });
    const lineSeries = chart.addLineSeries();

    lineSeries.setData(chartData);
});
