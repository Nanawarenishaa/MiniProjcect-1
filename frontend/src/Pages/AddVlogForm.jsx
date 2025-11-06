import React, { useState } from "react";

export default function AddVlogForm({ onAdd }) {
  const [media, setMedia] = useState(null);
  const [caption, setCaption] = useState("");
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!media && !caption) return alert("Add a video, image, or note!");
    const newPost = {
      id: Date.now(),
      caption,
      mediaUrl: preview,
      type: media ? (media.type.includes("video") ? "video" : "image") : "text",
    };
    onAdd(newPost);
    setMedia(null);
    setCaption("");
    setPreview(null);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Vlog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write what you practiced today..."
          className="p-3 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
          className="border p-2 rounded-lg"
        />
        {preview && (
          <div className="mt-3">
            {media?.type.includes("video") ? (
              <video src={preview} controls className="rounded-lg w-full" />
            ) : (
              <img src={preview} alt="preview" className="rounded-lg w-full" />
            )}
          </div>
        )}
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
        >
          Post Vlog
        </button>
      </form>
    </div>
  );
}
