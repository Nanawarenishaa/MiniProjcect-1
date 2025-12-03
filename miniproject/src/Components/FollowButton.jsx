import React, { useState } from "react";

const FollowButton = () => {
  const [following, setFollowing] = useState(false);

  const handleClick = () => setFollowing(!following);

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
        following
          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
          : "bg-rose-500 text-white hover:bg-rose-600"
      }`}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
