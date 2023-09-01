
```markdown
# Contact List Web Application

This is a simple web application for managing a contact list. Users can add new contacts, view existing contacts, and toggle between SIM and Device storage options.

## Features

- Add new contacts with a name and phone number.
- Choose to store contacts in either SIM or Device storage.
- View the list of added contacts.
- Toggle the contact list drawer for easy access.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/contact-list-app.git
   ```

2. Open the project directory:

   ```bash
   cd contact-list-app
   ```

3. Install any necessary dependencies:

   ```bash
   # Assuming you have Node.js installed
   npm install
   ```

4. Build the project:

   ```bash
   npm run build
   ```

5. Open the `index.html` file in your web browser to run the application.

## Usage

- Click the "Show Contacts" button to open the contact list drawer.
- Fill in the contact's name and phone number.
- Choose whether to store the contact in SIM or Device storage.
- Click the "Submit" button to add the contact to the list.
- You can toggle the contact list drawer by clicking the close button.

## Project Structure

The project is structured as follows:

- `src/` directory contains the TypeScript source files.
  - `even.ts` - Main Events of projects.
  - `functions.ts` - Utility functions.
  - `importer.ts` - DOM element imports.
  - `state.ts` - Repeated DOM element imports (Consider consolidating with importer.ts).
  - `types.ts` - TypeScript type definitions.
- `dist/` directory contains the compiled JavaScript files and tailwind output.css classes.
- `index.ts` - Main application logic.
- `index.html` - HTML template for the web application.
## Authors
- [@MohammadMehdiSalehi](https://github.com/mohammadmehdisalehi)
