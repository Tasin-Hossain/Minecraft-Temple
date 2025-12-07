import React from "react";
import { FcLike } from "react-icons/fc";
import { LuMessageSquareText } from "react-icons/lu";
import { TbCoins } from "react-icons/tb";
import Button from "../../Components/ui/Button/Button";
import { TbMessage } from "react-icons/tb";

const Posts = () => {
  return (
    <>
      <div className="flex flex-col gap-4 my-12 mx-4 rounded-md ">
        {/* Threads Profile  */}
        <div className="bg-(--accent) p-2 rounded-md border border-(--border-color) ">
          <div className="bg-(--secondary) flex flex-col items-center py-4 gap-3">
            {/* Logo */}
            <div className="w-25 cursor-pointer">
              <img
                className="w-full rounded-md"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
            </div>
            {/*like , comment, Counts */}
            <h1 className="text-[15px]">Minitasin</h1>
            <div className="flex items-center gap-10">
              {/* Like */}
              <div className="flex flex-col items-center">
                <FcLike size={20} />
                <span>100</span>
              </div>
              {/* comment */}
              <div className="flex flex-col items-center">
                <LuMessageSquareText size={20} />
                <span>87</span>
              </div>
              {/* Points */}
              <div className="flex flex-col items-center">
                <TbCoins size={20} />
                <span>87</span>
              </div>
            </div>

            {/* POst Thread */}
            <div className="mt-4 w-full flex justify-center">
              <Button className="w-[95%] ">Post Threads</Button>
            </div>
          </div>
        </div>

        {/* Latest Threads */}
        <div className="border border-(--border-color) bg-(--accent) p-2 rounded-md flex flex-col gap-3">
          <div className="flex items-center  gap-2">
            <TbMessage size={18}/>
            <h2 className="text-[16px]">Latest Threads</h2>
          </div>
          <div className="flex items-center gap-3">
            {/*Threads logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/*Threads logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/*Threads logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/*Threads logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/*Threads logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/*Threads logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Letast Posts */}
        <div className="border border-(--border-color) bg-(--accent) p-2 rounded-md flex flex-col gap-3">
          <div className="flex items-center  gap-2">
            <TbMessage size={18}/>
            <h2 className="text-[16px]">Latest Posts</h2>
          </div>
          <div className="flex items-center gap-3">
            {/*Posts logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Posts title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Posts name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/*Posts logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/*Threads logo */}
            <div className="w-10 cursor-pointer">
              <img
                className="w-full rounded-md "
                src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                alt=""
              />
            </div>
            <div>
              {/*Threads title */}
              <h1 className="text-[13px] cursor-pointer hover:underline">
                March 2025 Changelog -add aduit log
              </h1>
              {/* Threads name and username */}
              <div className="flex items-center gap-2">
                <span className="text-[13px]">Oct 1, 2025</span>
                <span className="text-[13px] hover:underline cursor-pointer">
                  Minitasin Studio
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Posts;
