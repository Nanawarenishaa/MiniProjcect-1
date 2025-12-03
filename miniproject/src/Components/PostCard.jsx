import FollowButton from "./FollowButton";
import { FiMoreHorizontal, FiThumbsUp, FiMessageSquare, FiBookmark } from "react-icons/fi";

const PostCard = ({ name, avatar, time, text }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-start">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full border border-gray-200" />
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-500 text-sm">{time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FollowButton />
          <FiMoreHorizontal className="text-xl text-gray-500 cursor-pointer" />
        </div>
      </div>

      <p className="mt-4 text-gray-800">{text}</p>

      <div className="flex gap-6 mt-4 text-gray-600 text-sm">
        <button className="flex items-center gap-2 hover:text-rose-500"><FiThumbsUp /> Like</button>
        <button className="flex items-center gap-2 hover:text-rose-500"><FiMessageSquare /> Comment</button>
        <button className="flex items-center gap-2 hover:text-rose-500"><FiBookmark /> Save</button>
      </div>
    </div>
  );
};
