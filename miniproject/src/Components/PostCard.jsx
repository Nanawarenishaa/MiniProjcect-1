const PostCard = ({ user, text, toggleFollow, following }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md transition-all duration-200 hover:shadow-xl hover:scale-[1.01]">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-start">
          <img
            src={user.avatar}
            alt=""
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div>
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              {user.name}
              <span className="px-2 py-0.5 text-xs bg-rose-100 text-rose-600 rounded-full">
                🔥 Streak 12
              </span>
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">2 hours ago</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FollowButton
            userId={user.id}
            following={following}
            toggleFollow={toggleFollow}
          />
          <FiMoreHorizontal className="text-xl text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Post Content */}
      <p className="mt-4 text-gray-800 leading-relaxed">{text}</p>

      {/* Tags */}
      <div className="flex gap-2 mt-3">
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-xl">#Learning</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-xl">#React</span>
      </div>

      {/* Divider */}
      <div className="border-b mt-4 mb-3"></div>

      {/* Actions */}
      <div className="flex gap-6 text-gray-600 text-sm">
        <button className="flex items-center gap-2 hover:text-rose-600 transition active:scale-90">
          <FiThumbsUp /> Like
        </button>

        <button className="flex items-center gap-2 hover:text-rose-600 transition active:scale-90">
          <FiMessageSquare /> Comment
        </button>

        <button className="flex items-center gap-2 hover:text-rose-600 transition active:scale-90">
          <FiBookmark /> Save
        </button>
      </div>
    </div>
  );
};
