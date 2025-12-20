// src/Components/ReactionSystem.jsx
import { useState } from "react";

const REACTIONS = [
  "❤️", "😂", "😮", "😢", "😡", "👍", "🚀"
];

// এটা প্রপার কম্পোনেন্ট — hook গুলো এখানে সেফ
const ReactionProvider = ({ children, initialReactions = {}, onReact }) => {
  const [totalReactions, setTotalReactions] = useState(initialReactions);
  const [userReactions, setUserReactions] = useState({});
  const [showPicker, setShowPicker] = useState(false);

  const toggleReaction = (emoji) => {
    const isReacted = userReactions[emoji];
    const newUser = { ...userReactions };
    const newTotal = { ...totalReactions };

    if (isReacted) {
      delete newUser[emoji];
      newTotal[emoji]--;
      if (newTotal[emoji] <= 0) delete newTotal[emoji];
    } else {
      newUser[emoji] = true;
      newTotal[emoji] = (newTotal[emoji] || 0) + 1;
    }

    setUserReactions(newUser);
    setTotalReactions(newTotal);
    onReact?.(newTotal);
    setShowPicker(false);
  };

  const value = {
    totalReactions,
    userReactions,
    showPicker,
    setShowPicker,
    toggleReaction,
  };

  return children(value);
};

// Reactions Display Component
export const ReactionsBar = ({ totalReactions, userReactions, onToggle }) => {
  if (Object.keys(totalReactions).length === 0) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {Object.entries(totalReactions)
        .sort(([, a], [, b]) => b - a)
        .map(([emoji, count]) => (
          <button
            key={emoji}
            onClick={() => onToggle(emoji)}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
              userReactions[emoji]
                ? "bg-(--accent) text-white border border-(--border-color)"
                : "bg-(--background) hover:bg-(--border-color)"
            }`}
          >
            <span className="text-lg">{emoji}</span>
            <span>{count}</span>
          </button>
        ))}
    </div>
  );
};

// React Button Component
export const ReactButton = ({ showPicker, setShowPicker, onToggle ,className}) => (
  <div className="relative inline-block">
    <button
      onClick={() => setShowPicker(!showPicker)}
      className={`${className} cursor-pointer py-1 px-4 flex items-center gap-1 bg-(--accent) rounded-sm text-[13px] transition-all group `}
    >
      <span className="text-lg group-hover:scale-110 transition-transform">😊</span>
      Like
    </button>

    {showPicker && (
      <>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-(--accent) border border-(--border-color) rounded-md p-2 flex gap-2 z-50">
          {REACTIONS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => onToggle(emoji)}
              className="text-[25px] transition-all duration-300 hover:scale-150 hover:-translate-y-4 cursor-pointer"
            >
              {emoji}
            </button>
          ))}
        </div>
        <div className="fixed inset-0 z-40" onClick={() => setShowPicker(false)} />
      </>
    )}
  </div>
);

// Main export — wrapper
const ReactionSystem = ({ initialReactions, onReact, children }) => (
  <ReactionProvider initialReactions={initialReactions} onReact={onReact}>
    {children}
  </ReactionProvider>
);

export default ReactionSystem;