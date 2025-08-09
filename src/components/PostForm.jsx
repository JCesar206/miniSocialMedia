import { useState } from "react";

export default function PostForm({ onAdd }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const emojis = ["😀", "😂", "😍", "😎", "🤔", "😭", "🔥", "🎉", "👍", "💡"];

  const handleAdd = () => {
    if (!text.trim() && !image) return;
    onAdd({ id: Date.now(), text, image });
    setText("");
    setImage("");
  };

  const handleClear = () => {
    setText("");
    setImage("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const addEmoji = (emoji) => {
    setText((prev) => prev + emoji);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full max-w-md mx-auto mb-20">
      <textarea
        className="w-full p-2 rounded border dark:bg-gray-600 dark:text-white font-semibold"
        placeholder="Escribe algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 mt-2">
        {emojis.map((emoji, idx) => (
          <button
            key={idx}
            onClick={() => addEmoji(emoji)}
            className="text-xl"
            type="button"
          >
            {emoji}
          </button>
        ))}
      </div>

      <input
        type="file"
        accept="image/*"
        className="w-full mt-2 text-sm text-gray-600 dark:text-gray-300"
        onChange={handleImageUpload}
      />

      {image && (
        <div className="flex justify-center mt-2">
          <img
            src={image}
            alt="preview"
            className="max-w-[150px] max-h-[150px] rounded object-cover"
          />
        </div>
      )}

      <div className="flex justify-between mt-3">
        <button
          onClick={handleAdd}
          className="bg-violet-500 hover:bg-violet-700 text-white px-4 py-1 rounded font-semibold"
        >
          Agregar
        </button>
        <button
          onClick={handleClear}
          className="bg-violet-500 hover:bg-violet-700 text-white px-4 py-1 rounded font-semibold"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}
