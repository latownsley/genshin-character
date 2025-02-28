# Genshin Character Info

A simple web application that provides information about various characters from the game *Genshin Impact*. Users can select a character from a dropdown menu and view their details, including an image, element type, weapon type, and description.

## Features
- Displays character information dynamically upon selection.
- Fetches data from a server endpoint using `fetch` API.
- Simple and interactive UI.
- Reset button to clear the displayed character data.

## Technologies Used
- HTML, CSS, JavaScript
- Node.js with Express.js
- Fetch API for handling requests

## Installation & Usage
### Prerequisites
- Node.js installed on your system
- A package manager like `npm` or `yarn`

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and set the required variables:
   ```
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. Open `http://localhost:3000/public/index.html` in your browser.

## Project Structure
```
/project-root
│── public/
│   ├── index.html          # Main HTML file
│   ├── character_data.js   # JavaScript for handling character data
│   ├── images/             # Character and element images
│── server.mjs              # Express server file
│── .env                    # Environment variables (not included in repo)
│── package.json            # Dependencies and scripts
```

## API Endpoint
### `POST /get-char`
**Request:**
```json
{
  "id": "ayaka"
}
```

**Response:**
```json
{
  "image": "./images/character-icons/Kamisato_Ayaka_Icon.png",
  "type": "Cryo",
  "name": "Kamisato Ayaka",
  "weapon": "Sword",
  "description": "Ayaka is a kind-hearted girl with a pleasant temperament..."
}
```

## License
This project is for educational purposes only. *Genshin Impact* and related assets are owned by miHoYo.

## Author
- Developed by Leela Townsley

