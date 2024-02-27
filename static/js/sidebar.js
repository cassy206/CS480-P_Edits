// Assuming the overview data is passed from Flask as a JSON string in an element with id 'overview'
let overviewData = JSON.parse(document.getElementById('overview').textContent);

// Get the sidebar element
let sidebar = document.getElementById('sidebar');

// Function to add commas to large numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to add spaces before capital letters
function addSpaces(s) {
    return s
        .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space between lower case and upper case letters
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')  // Add space between groups of upper case letters and a group starting with an upper case letter followed by lower case letters
        .replace(/([0-9])([A-Za-z])/g, '$1 $2');  // Add space between a number and a letter
}

// Define the categories
let categories = {
    "General Company Info": ["Symbol", "Name", "Industry", "AssetType", "Address", "Description"],
    "Relevant Financial Data": ["MarketCapitalization", "EBITDA", "PERatio", "PEGRatio", "BookValue", "EPS", "ProfitMargin", "RevenueTTM", "GrossProfitTTM", "SharesOutstanding"],
    "Trailing 12 Month Info": ["RevenuePerShareTTM", "OperatingMarginTTM", "ReturnOnAssetsTTM", "ReturnOnEquityTTM", "DilutedEPSTTM", "TrailingPE", "PriceToSalesRatioTTM", "52WeekHigh", "52WeekLow"],
    "Dividends": ["DividendPerShare", "DividendYield", "DividendDate", "ExDividendDate"],
    "Long-term growth and future value": ["FiscalYearEnd", "LatestQuarter", "QuarterlyEarningsGrowthYOY", "QuarterlyRevenueGrowthYOY", "AnalystTargetPrice", "ForwardPE"],
    "Misc Financial Data": ["CIK", "Beta", "PriceToBookRatio", "EVToRevenue", "EVToEBITDA", "200DayMovingAverage", "50DayMovingAverage"],
    "Misc Company Info": ["CIK", "Exchange", "Currency", "Country", "Sector"]
};


// Iterate over each category
for (let categoryName in categories) {
    // Create a new container for this category
    let categoryContainer = document.createElement('div');
    categoryContainer.className = 'category';
    categoryContainer.innerHTML = `<h4>${categoryName}</h4>`;

    // Iterate over each field in this category
    for (let field of categories[categoryName]) {
        // Check if this field exists in the overview data
        if (field in overviewData) {
            // Create a new list item
            let listItem = document.createElement('li');

            // Format the key and value
            let formattedKey = addSpaces(field);
            let formattedValue = isNaN(overviewData[field]) ? overviewData[field] : numberWithCommas(overviewData[field]);

            // Set the text of the list item to the formatted key and value
            listItem.innerHTML = `<span class="key">${formattedKey}:</span> <span class="value">${formattedValue}</span>`;

            // Add the list item to the category container
            categoryContainer.appendChild(listItem);
        }
    }

    // Add the category container to the sidebar
    sidebar.appendChild(categoryContainer);
}

