# 📚 Book Finder App

A sleek and responsive web application that allows users to search for books by title using the Open Library API. Built with **React**, **TypeScript**, and **Vite**, this project demonstrates clean UI design, API integration, and modern frontend development practices.

---

## ✨ Features

- 🔍 **Search by Book Title** — Users can search for books using keywords or full titles.
- 📖 **Book Details** — Displays book title, author(s), and cover image (if available).
- 🎨 **Clean UI** — Centered layout with a gradient background and styled components.
- ⚡ **Fast Development** — Powered by Vite for lightning-fast HMR and builds.
- 🧠 **Error Handling** — Gracefully handles empty input and missing data.

---

## 🛠️ Tech Stack

| Technology     | Description                            |
|----------------|----------------------------------------|
| React          | UI library for building components     |
| TypeScript     | Strongly typed JavaScript              |
| Vite           | Fast dev server and bundler            |
| Open Library   | Free API for book data                 |
| CSS / Tailwind | Custom styling (choose your approach)  |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-finder.git
cd book-finder
2. Install Dependencies
bash
npm install
3. Start the Development Server
bash
npm run dev
Visit http://localhost:5173 in your browser.

🧩 Project Structure
Code
book-finder/
├── public/
├── src/
│   ├── App.tsx          # Main component with search logic
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   └── assets/          # (Optional) Static assets
├── package.json
├── tsconfig.json
└── vite.config.ts
🧠 How It Works
The user types a book title into the search bar.

On clicking "Search", the app fetches data from:

Code
https://openlibrary.org/search.json?title=your_query
The top 10 results are displayed with:

Book title

Author(s)

Cover image (if available via cover_i)

📸 Screenshots
<img width="960" height="539" alt="image" src="https://github.com/user-attachments/assets/ca2c7ac4-343e-4b2e-b01d-a900d1591ce5"/>

<img width="960" height="539" alt="image" src="https://github.com/user-attachments/assets/327ef6a1-e93f-474d-b76b-69e2d19355ff"/>

🌐 API Reference
Open Library Search API https://openlibrary.org/dev/docs/api/search

Example query:

Code
https://openlibrary.org/search.json?title=harry+potter
📦 Build for Production
bash
npm run build
Output will be in the dist/ folder.

🙌 Acknowledgements

Open Library

React

Vite

TypeScript

💡 Future Improvements

Add pagination for more results

Display more book metadata (publish year, subjects, etc.)

Add loading indicators and error messages

Improve accessibility and mobile responsiveness

👨‍💻 Author
Parise — LinkedIn | GitHub
