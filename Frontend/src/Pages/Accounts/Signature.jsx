import React, { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import CustomEditor from "../../Components/Tiptep/Tiptep";

const Signature = () => {
  // Loader
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState("");

  return (
    <>
      <div className="bg-(--accent) rounded-md h-auto">
        {/* Account details */}
        <div className="flex flex-col">
          <h1 className="py-5 px-14 text-[20px] capitalize bg-(--popup-bg) text-(--white-color) border-b border-(--border-color)">
            Account details
          </h1>

          {/* TipTap */}
          <div className="p-4 ">
            <CustomEditor
              value={text}
              onChange={setText}
              className=""
              toolbarClass=""
              buttons={{
                bold: true,
                italic: true,
                underline: true,
                strike: true,
                bulletList: true,
                orderedList: true,
                quote: true,
                image: true,
                table: true,
                link: true,
                color: true,
                undo: true,
                redo: true,
                fontSize: true,
                heading: true,
                align: true,
                slash: true,
                emoji: true,
              }}
            />
          </div>

          {/* Save button */}
          <div className="sticky bottom-0 w-full flex items-center justify-center py-4 bg-(--accent) border border-(--border-color)">
            {loading ? (
              <div className="relative flex items-center justify- btn gap-1">
                <button className="font-semibold cursor-pointer">
                  <Loader
                    size={20}
                    color="#ffffff"
                    label="Please Wait.."
                    labelClass="text-()"
                  />
                </button>
              </div>
            ) : (
              <div className="relative flex items-center justify- btn gap-1">
                <FaRegSave size={18} className=" left-0" />
                <button className="font-semibold cursor-pointer">
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signature;
