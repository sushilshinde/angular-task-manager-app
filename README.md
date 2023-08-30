This "angular-task-manager-app" contains an Angular application that utilizes JSON data, Material UI, Bootstrap, and Material Icons. The application also integrates with a JSON server to provide a mock backend. This README will guide you through setting up and running the application.

# Prerequisites:

Before you begin, ensure you have the following software installed:

Node.js and npm (Node Package Manager)
Angular CLI
JSON Server

# You can install Angular CLI using the following command

npm install -g @angular/cli

# You can install JSON Server using the following commands:

npm install -g json-server

# Install the project dependencies:

Install npm packages.
Install the npm packages described in the package.json and verify that it works:

npm install

# Running the Application:

Follow these steps to run the Angular application along with the JSON server:

Open a terminal window and navigate to the project's root directory.

Start the JSON server: ‘json-server --watch db.json --port 3000’
In another terminal window, start the Angular development server:’ng serve’
Open your web browser and navigate to ‘http://localhost:4200’ to view the running Angular app.

# Additional Notes:

The JSON server will serve mock data from the db.json file on ‘http://localhost:3000’
The Angular development server will run the app on http://localhost:4200.
