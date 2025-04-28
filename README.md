🎵 iTunesFAV

**iTunesFAV** is a responsive React web application that enables users to search for and save their favorite media content (music, podcasts, movies, and more) from the iTunes API. It features a clean UI styled with Bootstrap and allows users to manage a personalized collection of favorite media items.

## 🚀 Features

- 🔍 **Media Search** – Search for songs, albums, artists, podcasts, and movies via the iTunes API.
- 🎧 **Favorites Management** – Add or remove media items to your personalized favorites list.
- 📄 **Media Details** – View key information about each item including artwork, artist name, genre, and release date.
- 🔄 **Toggle View** – Easily switch between search results and your list of favorites.
- 📱 **Responsive Design** – Built with Bootstrap for mobile-friendly user experience.

# 🧪 Testing

This project uses **Vitest** for testing React components. Tests are located alongside the components in the `frontend` folder.


## frontend

cd frontend
npm install bootstrap axios react-bootstrap react react-dom react-router-dom
npm run dev

## backend

cd backend
npm install axios express cors dotenv jsonwebtoken nodemon
nodemon index.js

## 🎮 How to Use

1. **Search** – Use the search bar at the top of the page to find media content.
2. **Filter by Type** – Use the dropdown menu to filter results by media type (e.g., music, podcast, movie).
3. **Add to Favorites** – Click the **"Add to Favorite"** button on any media item you'd like to save.
4. **View Favorites** – Click the **"Show My Favorite"** button to toggle between search results and your list of saved favorites.