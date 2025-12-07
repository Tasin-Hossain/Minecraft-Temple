import React from "react";
import ForumAccordion from "../../Components/According/According";
import { FaBullhorn } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillAudio } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";
import { GoPlug } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { PiDesktopTower } from "react-icons/pi";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";



const Forums = () => {
  return (
    <>
      <div className="py-2">
        {/* Minecraft Temple */}
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

        {/* Communication */}
        <ForumAccordion title="Communication" defaultOpen={true}>
          <div className="flex flex-col ">
            {/* Introductions */}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <AiFillAudio size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Introductions
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/*Introductions logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*Introductions title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/* Introductions name and username */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Oct 1, 2025</span>
                    <span className="text-[13px] hover:underline cursor-pointer">
                      Minitasin Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contests & giveaways*/}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <IoGiftOutline size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Giveaways & Contests
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/*Contests & giveaways logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*Contests & giveaways title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/* Contests & giveaways name and username */}
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

        {/* Development */}
        <ForumAccordion title="Development" defaultOpen={true}>
          <div className="flex flex-col ">
            {/* Minecraft Plugin Development Request */}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <GoPlug size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Minecraft Plugin Development Request
                </span>
              </div>
              <div className="flex items-center gap-3">
                {/*Minecraft Plugin Development Request logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*Plugin Development Request title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/* Plugin Development Request name and username */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Oct 1, 2025</span>
                    <span className="text-[13px] hover:underline cursor-pointer">
                      Minitasin Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Web design & development*/}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <CgWebsite size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Web Design & Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Web design & development logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/* Web design & development title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/*  Web design & development name and username */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Oct 1, 2025</span>
                    <span className="text-[13px] hover:underline cursor-pointer">
                      Minitasin Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* App & program development*/}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <PiDesktopTower size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  App & Program Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* App & program developmentlogo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*App & program development title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/*App & program development name and username */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Oct 1, 2025</span>
                    <span className="text-[13px] hover:underline cursor-pointer">
                      Minitasin Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Configuration */}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <MdOutlineSettingsSuggest size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Configuration
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Configuration logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/*Configuration title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/*Configuration name and username */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Oct 1, 2025</span>
                    <span className="text-[13px] hover:underline cursor-pointer">
                      Minitasin Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* server Stuff */}
            <div className="border-b border-(--border-color) flex justify-between items-center px-4 py-4 ">
              <div className="flex items-center gap-3">
                <MdSupportAgent size={25} />
                <span className="text-[18px] hover:underline cursor-pointer">
                  Server Stuff
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/*  Server Stuff logo */}
                <div className="w-10 cursor-pointer">
                  <img
                    className="w-full rounded-md "
                    src="https://nullforums.net/data/avatars/m/127/127402.jpg?1762426796"
                    alt=""
                  />
                </div>
                <div>
                  {/* Server Stuff title */}
                  <h1 className="text-[13px] cursor-pointer hover:underline">
                    March 2025 Changelog -add aduit log
                  </h1>
                  {/* Server Stuff name and username */}
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
