
# Form DB Project

This is a simple **Express.js** project that connects a form to an **Oracle database**. Users can submit data through the form, which is saved in the database.

## Features

- Submit form data to Oracle DB
- Basic Express.js server setup
- Shows success/failure messages on form submission
- Uses `.env` file for database credentials

## Prerequisites

- Node.js installed
- Oracle database setup
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/form-db-project.git
````

2. Navigate into the project folder:

   ```bash
   cd form-db-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with your database credentials:

   ```
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   DB_CONNECTIONSTRING=your_db_connection_string
   ```

## Running the Project

Start the Express server:

```bash
npm start
```

Open your browser and go to:

```
http://localhost:3000
```

Submit the form and check your Oracle database for the saved data.

## Project Structure

```
form-db-project/
│
├─ node_modules/       # Dependencies (ignored in git)
├─ public/             # Static files (HTML, CSS, JS)
├─ routes/             # Express routes
├─ views/              # EJS or HTML templates
├─ .gitignore          # Git ignore file
├─ package.json        # Node dependencies
├─ server.js           # Main server file
└─ README.md           # Project documentation
```

## Notes

* Do **not** upload your `.env` file to GitHub.
* Make sure your Oracle DB is running locally or remotely and credentials match `.env`.


