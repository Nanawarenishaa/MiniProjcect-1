import React, { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "ahsin_dev",
    bio: "Python + React enthusiast | Learning one sprint at a time 🧠",
    streak: 14,
    followers: 128,
    following: 87,
    profilePic:
      "https://api.dicebear.com/9.x/avataaars/svg?seed=ahsin", // random avatar
  });

  const [editing, setEditing] = useState(false);
  const [tempBio, setTempBio] = useState(profile.bio);

  const handleSave = () => {
    setProfile({ ...profile, bio: tempBio });
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Profile Picture */}
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
          />

          {/* Profile Info */}
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800">
              @{profile.username}
            </h1>

            {editing ? (
              <div className="mt-3">
                <textarea
                  value={tempBio}
                  onChange={(e) => setTempBio(e.target.value)}
                  className="w-full border rounded-lg p-2 text-gray-700"
                />
                <div className="mt-2 space-x-3">
                  <button
                    onClick={handleSave}
                    className="px-4 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="px-4 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-2 text-gray-600 italic">"{profile.bio}"</p>
            )}

            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="mt-3 px-4 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Edit Bio
              </button>
            )}

            {/* Stats */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6 text-gray-700">
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-700">
                  {profile.streak}
                </p>
                <p className="text-sm">Day Streak</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{profile.followers}</p>
                <p className="text-sm">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{profile.following}</p>
                <p className="text-sm">Following</p>
              </div>
            </div>
          </div>
        </div>

        {/* User’s Posts Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Vlogs & Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Example posts */}
            {[
              "https://images.unsplash.com/photo-1522199710521-72d69614c702",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
            ].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt="Vlog post"
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
