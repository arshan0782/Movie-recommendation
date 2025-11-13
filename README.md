# 🎬 Movie Recommendation App (MERN + Groq AI)

This project is a **Movie Recommendation Web App** built using the **MERN stack** and **Groq AI (llama-3.1-8b-instant)**. The app takes a movie name as input and returns **similar movies with their release years**. Results are also **clickable**, redirecting users to Google search pages for quick details.

---

## 🚀 Features

* Search movies using an input box
* AI‑powered recommendation using **Groq AI**
* Extracted clean results: **Movie Name + Release Year** only
* Clickable results → opens Google search for that movie
* Beautiful UI made with **Tailwind CSS**
* Backend built with Express.js + MongoDB
* Proper error handling

---

## 🛠 Tech Stack

### **Frontend:**

* React.js
* Axios
* Tailwind CSS

### **Backend:**

* Node.js + javaScript.js
* Express.js
* Groq SDK (AI model)
* MongoDB + Mongoose

---

## 📦 Installation Guide

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd movie-recommendation-app
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

##  Environment Variables

Create a `.env` file in your **backend** folder:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
GROQ_API_KEY=your_groq_api_key
```

You can create a free Groq API key from:
👉 [https://console.groq.com](https://console.groq.com)

---

##  AI Model Used

We used the **llama-3.1-8b-instant** model:

* Fast
* Highly accurate
* Free to use on Groq

---

##  API Endpoints

### **POST /api/movie**

Takes user input and returns a list of movies:

#### Request:

```json
{
  "query": "krish"
}
```

#### Response:

```json
{
  "movies": [
    { "title": "Baahubali", "year": "2015" },
    { "title": "Eega", "year": "2012" }
  ]
}
```

---

## Backend Logic (Summary)

1. Receive movie name from frontend
2. Send query to Groq AI
3. Extract movie titles and years from AI response
4. Format output as array of objects
5. Return to frontend

---

## Frontend Logic (Summary)

* User enters a movie name
* Sends it to backend using Axios
* Displays results in a card-like UI
* Each result is clickable (Google Search)

---

##  Run the Project

### Start Backend

```bash
cd backend
npm run dev or npm start
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Then open browser:
👉 [http://localhost:5173](http://localhost:5173)

---

##  How Clicking Works

Every movie result opens a Google search:

```
https://www.google.com/search?q=Movie+Name+Year+movie
```

This helps user instantly view:

* IMDb rating
* Cast
* Trailer
* Streaming platforms

---

##  Future Improvements

* Add user authentication
* Add movie posters
* Dark/light mode
* Save search history
* Admin dashboard

---

## 🙌 Developed by

**Mohd Arshan**

If you want more features or deployment help — just ask!
