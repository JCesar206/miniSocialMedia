import { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleAdd = (post) => {
    setPosts([post, ...posts]);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const handleEdit = (id) => {
    const newText = prompt("Edita tu publicación");
      if (newText !== null) {
        setPosts(
          posts.map((p) => p.id === id ? { ...p, text: newText } : p
          )
        );
      }
    };
  
  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}>
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-violet-500 text-white px-4 py-1 rounded hover:text-pink-400 hover:bg-pink-600"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      <h1 className="text-center text-3xl font-bold mb-6 dark:text-white">
        🗨️ Mini Red Social
      </h1>
      <PostForm onAdd={handleAdd} />
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      <Footer />
    </div>
  );
}