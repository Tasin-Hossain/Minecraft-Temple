import React from "react";
import ForumAccordion from "../../Components/According/According";
import { FaBullhorn } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
const Forums = () => {
  return (
    <>
      <div className="">
        <ForumAccordion title="Minecraft Temple" defaultOpen={true}>
          <div className="flex flex-col ">
            {/* announcement */}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <FaBullhorn size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Announcements
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/*announcer logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*announcer title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/* announcer name and username */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Oct 1, 2025</span>
                    <span className="text-[13px] hover:underline cursor-pointer">
                      Minitasin Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
              {/* Submit your idea to the forum! */}
             <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <FaRegLightbulb size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Submit Your Idea 
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/*submit your idea logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*submit your idea  title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/* submit your idea  name and username */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Oct 1, 2025</span>
                    <span className="text-[13px] hover:underline cursor-pointer">
                      Minitasin Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bug Fixes */}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <BiSupport size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Bug Fixes 
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/*Bug Fixer logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*Bug Fixer title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/* Bug Fixer name and username */}
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
        </ForumAccordion>
      </div>
    </>
  );
};

export default Forums;
