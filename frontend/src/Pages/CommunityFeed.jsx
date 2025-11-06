import React, { useState } from "react";

export default function CommunityFeed() {
  const [feed, setFeed] = useState([
    {
      id: 1,
      username: "alex",
      caption: "Practiced UI design for 2 hours! 🎨",
      mediaUrl: "/demo-design.png",
      type: "image",
      likes: 3,
      comments: ["Looks awesome!", "Great progress!"],
      isFollowing: true,
    },
    {
      id: 2,
      username: "jordan",
      caption: "Shared my React project progress 🚀",
      mediaUrl: "/demo-video.mp4",
      type: "video",
      likes: 5,
      comments: ["Nice work!", "Keep it up!"],
      isFollowing: true,
    },
  ]);

  const handleLike = (id) => {
    setFeed((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const handleComment = (id, newComment) => {
    setFeed((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, comments: [...p.comments, newComment] }
          : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">
          Community Feed 🌍
        </h1>
        <p className="text-gray-600">
          See what people you follow are learning today!
        </p>
      </header>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {feed.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all"
          >
            <div className="p-4 flex items-center justify-between border-b">
              <span className="font-semibold text-gray-800">
                @{post.username}
              </span>
              <span className="text-xs text-gray-500">Following</span>
            </div>

            {post.type === "video" ? (
              <video src={post.mediaUrl} controls className="w-full h-72 object-cover" />
            ) : (
              <img
                src={post.mediaUrl}
                alt={post.caption}
                className="w-full h-72 object-cover"
              />
            )}

            <div className="p-4">
              <p className="text-gray-700 mb-3">{post.caption}</p>

              {/* Like & Comment Buttons */}
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <button
                  onClick={() => handleLike(post.id)}
                  className="hover:text-indigo-600 font-medium"
                >
                  ❤️ {post.likes} Likes
                </button>
                <button
                  onClick={() =>
                    handleComment(post.id, prompt("Write a comment:"))
                  }
                  className="hover:text-indigo-600 font-medium"
                >
                  💬 {post.comments.length} Comments
                </button>
              </div>

              {/* Comments Section */}
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                {post.comments.map((c, i) => (
                  <p key={i} className="text-gray-700">
                    💬 {c}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
