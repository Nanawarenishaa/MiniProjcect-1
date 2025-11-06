import React, { useState } from "react";
import AddVlogForm from "./AddVlogForm";

export default function Dashboard() {
  const [posts, setPosts] = useState(() => {
    // Load from local storage (optional)
    const saved = localStorage.getItem("skillVlogs");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAdd = (newPost) => {
    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem("skillVlogs", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="text-center py-6 border-b bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-indigo-700">SkillSprint Dashboard</h1>
        <p className="text-gray-600">Share your daily progress — vlog your growth!</p>
      </header>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        {/* Add new vlog form */}
        <AddVlogForm onAdd={handleAdd} />

        {/* Posts Feed */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No vlogs yet. Start by adding your first one! 🎬
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {post.type === "video" ? (
                  <video
                    src={post.mediaUrl}
                    controls
                    className="w-full h-64 object-cover"
                  />
                ) : post.type === "image" ? (
                  <img
                    src={post.mediaUrl}
                    alt="Vlog"
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="p-4 text-gray-700 italic">
                    “{post.caption}”
                  </div>
                )}

                <div className="p-4">
                  <p className="font-semibold text-gray-800 mb-2">
                    {post.caption || "No caption"}
                  </p>
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                    <div className="flex gap-3">
                      <button className="hover:text-indigo-600 transition">
                        ❤️ Like
                      </button>
                      <button className="hover:text-indigo-600 transition">
                        🔁 Share
                      </button>
                    </div>
                    <span className="text-xs">
                      {new Date(post.id).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
