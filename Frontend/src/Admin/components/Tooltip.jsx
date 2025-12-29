import TooltipPortal from "./Tooltip"; // path অনুযায়ী ঠিক করো
import { useRef, useState } from "react";

const  Tooltip = ({ label, badge, subItems }) => {
  const { pathname } = useLocation();
  const [position, setPosition] = useState(null);
  const triggerRef = useRef(null);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top + rect.height / 2,
        left: rect.right + 12, // sidebar-এর ডান থেকে একটু gap
      });
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={updatePosition}
        className="w-full h-full"
      />

      <TooltipPortal isVisible={true} position={position}>
        <div className="bg-gray-900 text-white rounded-lg shadow-2xl border border-gray-700 min-w-56 overflow-hidden -translate-y-1/2">
          {/* তোমার আগের tooltip content একদম same */}
          {!subItems && (
            <div className="px-5 py-3 flex items-center justify-between border-b border-gray-700">
              <span className="font-medium">{label}</span>
              {badge && (
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {badge}
                </span>
              )}
            </div>
          )}

          {subItems && subItems.length > 0 && (
            <div className="py-2 max-h-96 overflow-y-auto">
              {subItems.map((sub) => {
                const subActive = pathname === sub.to || pathname.startsWith(sub.to);
                return (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    className={`block px-5 py-2.5 text-sm transition-all duration-200 ${
                      subActive
                        ? "bg-[#FFA41F] text-white font-bold shadow-[inset_0_4px_0px_#ffd953,inset_0_-5px_0px_#ff791a]"
                        : "hover:bg-gray-800"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between">
                      <span>{sub.label}</span>
                      {sub.badge && (
                        <span className="bg-emerald-500 text-xs px-2 py-1 rounded-full">
                          {sub.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
            <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-900" />
          </div>
        </div>
      </TooltipPortal>
    </>
  );
};

export default Tooltip()