// Card.jsx
import React, { useState } from "react";
import { FiHeart, FiMessageSquare, FiTrash2, FiEdit3 } from "react-icons/fi";

const Card = ({ post, index, editPost, deletePost, likePost, addComment }) => {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border w-full">

      {/* DATE + ACTIONS */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
        <span>{post.date}</span>
        <div className="flex gap-4">
          <FiEdit3
            size={18}
            className="text-yellow-600 cursor-pointer"
            onClick={() => editPost(index)}
          />
          <FiTrash2
            size={18}
            className="text-red-600 cursor-pointer"
            onClick={() => deletePost(index)}
          />
        </div>
      </div>

      {/* POST DESCRIPTION */}
      <p className="mb-3 text-gray-800">{post.description}</p>

      {/* IMAGE / VIDEO */}
      {post.image && <img src={post.image} className="w-full rounded-xl shadow mb-3 object-cover max-h-64" />}
      {post.video && <video src={post.video} controls className="w-full rounded-xl shadow mb-3 max-h-64" />}

      {/* LIKE + COMMENT COUNT */}
      <div className="flex gap-6 mb-3">
        <div
          className="flex items-center gap-2 cursor-pointer text-rose-700"
          onClick={() => likePost(index)}
        >
          <FiHeart size={18} /> {post.likes}
        </div>
        <div className="flex items-center gap-2 text-indigo-600">
          <FiMessageSquare size={18} /> {post.comments.length}
        </div>
      </div>

      {/* COMMENT INPUT */}
      <div className="flex gap-2 mb-2">
        <input
          className="border p-2 w-full rounded-xl"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          onClick={() => {
            addComment(index, commentText);
            setCommentText("");
          }}
          className="bg-indigo-600 text-white px-4 rounded-xl"
        >
          Send
        </button>
      </div>

      {/* COMMENTS LIST */}
      <div className="mt-2 space-y-2">
        {post.comments.map((c, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded-xl text-sm">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
