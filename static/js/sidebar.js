// Assuming the overview data is passed from Flask as a JSON string in an element with id 'overview'
let overviewData = JSON.parse(document.getElementById('overview').textContent);

// Get the sidebar element
let sidebar = document.getElementById('sidebar');

// Iterate over each key-value pair in the overview data
for (let key in overviewData) {
    // Create a new list item
    let listItem = document.createElement('li');

    // Set the text of the list item to the key and value
    listItem.textContent = key + ': ' + overviewData[key];

    // Add the list item to the sidebar
    sidebar.appendChild(listItem);
}
