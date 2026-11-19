# Toy Tales

Toy Tales is a React app for managing a toy collection. Users can view all toys, add a new toy, like a toy, and donate a toy to GoodWill.

## Functionality

- Display All Toys: Fetches all toys from the backend when the page loads and displays them.
- Add a Toy: A form collects a toy's name and image URL, sends it to the backend, and adds the new toy to the list.
- Delete / Donate a Toy: Clicking "Donate to GoodWill" deletes that toy from the list.
- Like a Toy: Clicking "Like" increases the toy's likes by 1.

## How to Run

1. Start the backend: json-server --watch db.json --port 3001
2. Start the frontend: npm install, then npm run dev

## Technologies Used

- React (useState, useEffect)
- Vite
- JSON Server
- JavaScript, HTML, CSS