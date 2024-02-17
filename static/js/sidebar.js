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

// Iterate over each key-value pair in the overview data
for (let key in overviewData) {
    // Create a new list item
    let listItem = document.createElement('li');

    // Format the key and value
    let formattedKey = addSpaces(key);
    let formattedValue = isNaN(overviewData[key]) ? overviewData[key] : numberWithCommas(overviewData[key]);

    // Set the text of the list item to the formatted key and value
    listItem.innerHTML = `<span class="key">${formattedKey}:</span> <span class="value">${formattedValue}</span>`;

    // Add the list item to the sidebar
    sidebar.appendChild(listItem);
}
