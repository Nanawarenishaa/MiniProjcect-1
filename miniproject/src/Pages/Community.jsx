import React, { useState } from "react";
import {
  FiImage,
  FiSend,
  FiThumbsUp,
  FiMessageSquare,
  FiBookmark,
  FiMoreHorizontal,
  FiHash,
} from "react-icons/fi";

// Sample users
const users = [
  { id: 1, name: "Aarav Sharma", avatar: "https://i.pravatar.cc/50?img=32" },
  { id: 2, name: "Sneha Patil", avatar: "https://i.pravatar.cc/50?img=12" },
  { id: 3, name: "Rohan Mehta", avatar: "https://i.pravatar.cc/50?img=44" },
  { id: 4, name: "Ananya Joshi", avatar: "https://i.pravatar.cc/50?img=52" },
  { id: 5, name: "Kartik Verma", avatar: "https://i.pravatar.cc/50?img=65" },
];

// Sample posts
const posts = [
  { id: 1, userId: 1, text: "Just completed my first React project! Any tips?" },
  { id: 2, userId: 2, text: "What are the best resources to learn DSA?" },
  { id: 3, userId: 3, text: "Started exploring TailwindCSS for styling!" },
  { id: 4, userId: 4, text: "Learning NodeJS and building APIs!" },
  { id: 5, userId: 5, text: "Anyone interested in contributing to open-source?" },
];

// 🔹 Follow Button Component
const FollowButton = ({ userId, following, toggleFollow }) => {
  const isFollowing = following.includes(userId);
  return (
    <button
      onClick={() => toggleFollow(userId)}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
        isFollowing
          ? "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
          : "bg-rose-500 text-white hover:bg-rose-600"
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

const Community = () => {
  const [following, setFollowing] = useState([]);

  const toggleFollow = (userId) => {
    setFollowing((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  // Feed shows posts only from followed users
  const feedPosts = posts.filter((post) => following.includes(post.userId));

  // Suggested users = users you are NOT following yet
  const suggestedUsers = users.filter((user) => !following.includes(user.id));

  return (
    <div className="pt-24 px-4 md:px-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Community</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="bg-white p-5 rounded-2xl shadow hidden lg:block h-fit">
          <h2 className="font-semibold text-lg mb-4 text-gray-900">Explore Categories</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">🔥 Trending</li>
            <li className="hover:text-gray-900 cursor-pointer">❓ Q&A</li>
            <li className="hover:text-gray-900 cursor-pointer">💻 Programming</li>
            <li className="hover:text-gray-900 cursor-pointer">🚀 Projects</li>
            <li className="hover:text-gray-900 cursor-pointer">🎯 Career</li>
            <li className="hover:text-gray-900 cursor-pointer">📚 Study Resources</li>
          </ul>
        </aside>

        {/* MIDDLE CONTENT */}
        <main className="lg:col-span-2 flex flex-col gap-6">

          {/* CREATE POST */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <textarea
              className="w-full bg-gray-100 p-3 rounded-xl outline-none text-gray-900"
              placeholder="Start a discussion or share your thoughts..."
            />
            <div className="flex justify-between items-center mt-4">
              <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-xl text-gray-900">
                <FiImage /> Image
              </button>
              <button className="bg-rose-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-rose-600">
                <FiSend /> Post
              </button>
            </div>
          </div>

          {/* FEED POSTS */}
          {feedPosts.length === 0 && (
            <p className="text-gray-500 text-center mt-4">
              Follow people to see their posts in your feed.
            </p>
          )}

          {feedPosts.map((post) => {
            const user = users.find((u) => u.id === post.userId);
            return (
              <PostCard
                key={post.id}
                user={user}
                text={post.text}
                toggleFollow={toggleFollow}
                following={following}
              />
            );
          })}
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-white p-5 rounded-2xl shadow h-fit hidden lg:block">
          {/* Popular Topics */}
          <h2 className="font-semibold text-lg mb-3 text-gray-900">Popular Topics</h2>
          <div className="space-y-3 mt-2">
            <Topic label="ReactJS" />
            <Topic label="JavaScript" />
            <Topic label="Coding Tips" />
            <Topic label="Interview Prep" />
            <Topic label="Open Source" />
          </div>

          {/* Suggested People */}
          {suggestedUsers.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold text-lg mb-3 text-gray-900">Suggested People</h2>
              <div className="flex flex-col gap-3">
                {suggestedUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <img src={user.avatar} alt="" className="w-10 h-10 rounded-full border border-gray-200" />
                      <span className="text-gray-900 font-medium">{user.name}</span>
                    </div>
                    <FollowButton userId={user.id} following={following} toggleFollow={toggleFollow} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

      </div>
    </div>
  );
};

// 🔹 COMPONENT: Post Card
const PostCard = ({ user, text, toggleFollow, following }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-start">
          <img src={user.avatar} alt="" className="w-12 h-12 rounded-full border border-gray-200" />
          <div>
            <h3 className="font-semibold text-gray-900">{user.name}</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FollowButton userId={user.id} following={following} toggleFollow={toggleFollow} />
          <FiMoreHorizontal className="text-xl text-gray-500 cursor-pointer" />
        </div>
      </div>

      <p className="mt-4 text-gray-800">{text}</p>

      <div className="flex gap-6 mt-4 text-gray-600 text-sm">
        <button className="flex items-center gap-2 hover:text-rose-500">
          <FiThumbsUp /> Like
        </button>
        <button className="flex items-center gap-2 hover:text-rose-500">
          <FiMessageSquare /> Comment
        </button>
        <button className="flex items-center gap-2 hover:text-rose-500">
          <FiBookmark /> Save
        </button>
      </div>
    </div>
  );
};

// 🔹 COMPONENT: Topic tag
const Topic = ({ label }) => (
  <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-xl text-gray-700 cursor-pointer hover:bg-rose-50 hover:text-rose-600">
    <FiHash /> {label}
  </div>
);

export default Community;
