File Structure
The application is organized into several Python files:

app.py: This is the entry point of the application. It creates the Flask application, registers the blueprints, initializes the database, and starts the server.

models.py: This file contains functions for interacting with the SQLite database. It includes functions to initialize the database, insert data into the database, and retrieve data from the database.

utils.py: This file contains utility functions for the application. The get_data function fetches data from an API and caches it in the SQLite database.

views.py: This file defines the routes for the application. It includes routes for the homepage, dashboard, and stock data page.

error_handlers.py: This file defines error handlers for the application. Currently, it includes a handler for 404 errors.

Running the Application
Clone the project, in the terminal run "pip install -r requirements.txt"
To run the application, execute the following command:

python app.py

or by pressing the green run button.
This will start the Flask development server, and the application will be accessible at http://localhost:5000.
