export default function PostList({ posts, onEdit, onDelete }) {
  return (
    <div className="w-full max-w-md mx-auto mb-20">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 p-4 mb-4 rounded shadow font-semibold"
        >
          {post.image && (
            <div className="flex justify-center">
              <img
                src={post.image}
                alt="post"
                className="max-w-[200px] max-h-[200px] rounded mb-2 object-cover"
              />
            </div>
          )}
          <p className="text-gray-800 dark:text-gray-200">{post.text}</p>
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => onEdit(post.id)}
              className="bg-violet-400 text-violet-700 font-semibold px-2 py-1 rounded text-sm hover:bg-violet-700 hover:text-white"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="bg-violet-400 text-violet-700 font-semibold px-2 py-1 rounded text-sm hover:bg-violet-700 hover:text-white"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
