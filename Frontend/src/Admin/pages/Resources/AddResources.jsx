import React, { useRef, useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { MdOutlineCloudUpload } from "react-icons/md";
import Button, {
  ButtonDiamond,
  ButtonPrimary,
  ButtonRed,
} from "../../../Components/ui/Button/Button";
import Input from "../../../Components/ui/Input/Input";
import { FaRegSave } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import {
  FiCheckCircle,
  FiFileText,
  FiAlignLeft,
  FiFolder,
  FiImage,
  FiCalendar,
  FiGlobe,
} from "react-icons/fi";
import RadioOption from "../../../Components/ui/Radio/RadioOption";
import CheckboxOption from "../../../Components/ui/Checkox/CheckboxOption";
import ProductFileUpload from "../../../Components/ProductFileUpload";

const AddResources = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "", // Summary
    description: "",
    category: "",
    subCategory: "",
    price: 0,
    currency: "USD",
    isFree: false,
    tags: [],
    currentTag: "",
    thumbnail: null, // Cover image
    coverMode: "text",
    resourceFile: null,
    supportThread: "",
    downloadPermissions: ["member"],
    purchaseRequired: true,
    status: "pending",
    supportedVersions: [],
    supportedLanguages: [],
  });
  const fileInputRef = useRef(null);
  const [activeProductTabRender, setActiveProductTabRender] = useState("basic");

  const categories = ["Minecraft", "Website", "Other"];
  const subCategories = {
    Minecraft: [
      "Plugins",
      "Configs",
      "Maps",
      "Skins",
      "Models",
      "Textures",
      "Tools",
    ],
    Website: ["Themes", "Plugins", "Scripts", "Templates"],
    Other: ["Miscellaneous"],
  };

  const addTag = (e) => {
    if (e.key === "Enter" && formData.currentTag.trim()) {
      e.preventDefault();
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, prev.currentTag.trim()],
        currentTag: "",
      }));
    }
  };

  const removeTag = (index) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submission Checklist Items
  const checklistItems = [
    { key: "title", label: "Title", tab: "basic" },
    { key: "shortDescription", label: "Summary", tab: "basic" },
    { key: "category", label: "Category", tab: "basic" },
    { key: "subCategory", label: "Sub-Category", tab: "basic" },
    { key: "tags", label: "Tags", tab: "basic" },
  ];

  const isFieldComplete = (key) => {
    if (key === "thumbnail") return formData.thumbnail !== null;
    if (Array.isArray(formData[key])) return formData[key].length > 0;
    return formData[key]?.toString().trim() !== "";
  };

  const completedCount = checklistItems.filter((item) =>
    isFieldComplete(item.key)
  ).length;
  const totalRequired = checklistItems.length;

  const handleChecklistClick = (tab) => {
    setActiveProductTabRender(tab);
  };

  const createProductTabRender = () => {
    switch (activeProductTabRender) {
      case "basic":
        return (
          <>
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}
                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* title */}
                  <div className="h-20 mb-5 flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-center">
                      <label htmlFor="title">Title:</label>
                      <span className="text-[12px]">Required</span>
                    </div>
                  </div>

                  <div className="h-15 mb-5 flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-center">
                      <label htmlFor="slug">Slug:</label>
                      <span className="text-[12px]">Auto gen</span>
                    </div>
                  </div>

                  <div className="h-20 mb-5 flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-center">
                      <label htmlFor="shortDescription">Summary:</label>
                      <span className="text-[12px]">Required</span>
                    </div>
                  </div>

                  <div className="h-20 flex flex-col justify-center mb-5">
                    <div className="h-10 flex flex-col items-center">
                      <label htmlFor="category">Category:</label>
                      <span className="text-[12px]">Required</span>
                    </div>
                  </div>

                  <div className="h-24 mb-5 flex flex-col pt-3">
                    <div className="h-10 flex flex-col items-center">
                      <label htmlFor="tags">Tags:</label>
                      <span className="text-[12px]">Optional</span>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
                  {/* Title */}
                  <div className="h-20 mb-5">
                    <div className="h-15 flex flex-col justify-center">
                      <Input
                        id="title"
                        type="text"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <span className="text-[13px]">
                      Give your resource a title. Resource titles must be
                      shorter than 40 characters
                    </span>
                  </div>

                  {/* Slug */}
                  <div className="h-15 mb-5">
                    <div className="h-15 flex flex-col justify-center">
                      <Input
                        id="slug"
                        type="text"
                        readOnly
                        value={formData.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "")}
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="h-20 mb-5">
                    <div className="h-15 flex flex-col justify-center">
                      <Input
                        id="shortDescription"
                        name="shortDescription"
                        type="text"
                        value={formData.shortDescription}
                        onChange={handleInputChange}
                      />
                    </div>
                    <span className="text-[13px]">
                      Provide a very brief, one-line description of your
                      resource.
                    </span>
                  </div>

                  {/* Category & Subcategory */}
                  <div className="h-20 flex items-center gap-5 w-[95%] mb-5">
                    <div className="flex-1 ">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none"
                      >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex-1 w-[50%]">
                      <select
                        name="subCategory"
                        value={formData.subCategory}
                        onChange={handleInputChange}
                        disabled={!formData.category}
                        className="w-full h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[15px] rounded-sm outline-none"
                      >
                        <option value="">Select Sub-category</option>
                        {(subCategories[formData.category] || []).map((sub) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="h-auto mb-5">
                    <div className="h-auto flex flex-col justify-center">
                      <div className="w-[95%] border border-(--input-border-color) flex flex-wrap items-center gap-3 bg-(--background-color) min-h-12 rounded-sm py-2 px-2">
                        {formData.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-2 bg-(--accent) px-4 py-2 rounded-md text-sm font-medium select-none border border-(--border-color)"
                          >
                            <span>{tag}</span>
                            <button
                              type="button"
                              onClick={() => removeTag(i)}
                              className="ml-1 hover:text-(--custom-color) text-[19px] leading-none"
                            >
                              ×
                            </button>
                          </span>
                        ))}

                        <input
                          id="tags"
                          name="tags"
                          type="text"
                          value={formData.currentTag}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              currentTag: e.target.value,
                            }))
                          }
                          onKeyDown={addTag}
                          placeholder={
                            formData.tags.length === 0
                              ? "premium, leaked, spigot..."
                              : ""
                          }
                          className="flex-1 min-w-[200px] bg-transparent outline-none text-white pl-2"
                        />
                      </div>
                    </div>
                    <span className="text-[13px] mt-2 block">
                      Adding tags to your product significantly increases
                      discoverability.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "images":
        return (
          <>
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}

                <div className="bg-[--secondary] w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* Product file upload */}
                  <div className=" h-80">
                    <div className="flex flex-col items-end">
                      <label>Product file upload:</label>
                      <span className="text-[12px] ">Required</span>
                    </div>
                  </div>

                  {/* cover image */}
                  <div className="mt-  flex flex-col justify-center">
                    <div className="flex flex-col items-end">
                      <label>Cover image:</label>
                      <span className="text-[12px]">Required</span>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-[--secondary] w-[75%] py-4 pl-8">
                  {/* Product File Upload */}
                  <ProductFileUpload
                    file={formData.resourceFile}
                    onFileChange={(file) => {
                      setFormData((prev) => ({
                        ...prev,
                        resourceFile: file,
                        fileUploadStatus: "uploading",
                        fileUploadProgress: 0,
                      }));

                      // সিমুলেটেড আপলোড
                      let prog = 0;
                      const interval = setInterval(() => {
                        prog += 12;
                        setFormData((prev) => ({
                          ...prev,
                          fileUploadProgress: prog,
                        }));
                        if (prog >= 100) {
                          clearInterval(interval);
                          setFormData((prev) => ({
                            ...prev,
                            fileUploadStatus: "success",
                          }));
                        }
                      }, 350);
                    }}
                    progress={formData.fileUploadProgress}
                    status={formData.fileUploadStatus}
                    onRemoveFile={() => {
                      setFormData((prev) => ({
                        ...prev,
                        resourceFile: null,
                        fileUploadProgress: 0,
                        fileUploadStatus: "",
                      }));
                    }}
                  />

                  {/* Cover image input */}
                  <div className="mb-5">
                    <div className="space-y-6">
                      {/* Use text cover */}

                      <RadioOption
                        title="Use text cover"
                        name="coverType"
                        id="textCover"
                        checked={formData.coverMode === "text"}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            coverMode: "text",
                            thumbnail: null,
                          })
                        }
                      />
                      {/* Text Cover Preview  */}
                      {formData.coverMode === "text" && (
                        <div className="ml-8 mt-4 bg-(--custom-color)/70 rounded-lg w-96 h-48 flex items-center justify-center transition-all duration-300">
                          <span className="text-(--white-color) text-[20px] font-medium text-center px-8">
                            {formData.title || "Your Resource Title"}
                          </span>
                        </div>
                      )}

                      {/* Use custom cover */}
                      <RadioOption
                        title="Use custom cover (recommended)"
                        className="w-70!"
                        name="coverType"
                        id="customCover"
                        checked={formData.coverMode === "custom"}
                        onChange={() =>
                          setFormData({ ...formData, coverMode: "custom" })
                        }
                      />

                      {/* Custom Cover Section */}
                      {formData.coverMode === "custom" && (
                        <div className=" mt-4 space-y-4 transition-all duration-300">
                          {/* Preview Image — যদি thumbnail থাকে */}
                          {formData.thumbnail && (
                            <div className="space-y-4">
                              <img
                                src={URL.createObjectURL(formData.thumbnail)}
                                alt="Cover preview"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                              />

                              {/* Attach cover + Remove cover — পাশাপাশি */}
                              <div className="flex items-center gap-4">
                                {/* Attach cover button */}
                                <Button
                                  icon={<MdOutlineCloudUpload />}
                                  type="button"
                                  onClick={() => fileInputRef.current?.click()}
                                  className="flex items-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition"
                                >
                                  Attach cover
                                </Button>

                                {/* Remove cover button */}
                                <ButtonRed
                                  type="button"
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      thumbnail: null,
                                    })
                                  }
                                  className="px-6 py-3 rounded-lg text-sm font-medium transition"
                                >
                                  Remove cover
                                </ButtonRed>
                              </div>
                            </div>
                          )}

                          {/* যদি কোনো ইমেজ না থাকে — শুধু Attach cover দেখাও */}
                          {!formData.thumbnail && (
                            <Button
                              icon={<MdOutlineCloudUpload />}
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="flex items-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition"
                            >
                              Attach cover
                            </Button>
                          )}

                          {/* Hidden file input (একবারই থাকবে, বাইরে রাখলাম যাতে duplicate না হয়) */}
                          <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setFormData({
                                  ...formData,
                                  thumbnail: e.target.files[0],
                                });
                              }
                            }}
                          />

                          {/* Description + Checkbox */}
                          <p className="font-light text-[13px]">
                            Covers will be auto-cropped to a 2:1 aspect ratio.
                            <br />
                            It is recommended that you use an image that is at
                            least 1024x512 pixels.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <div className="p-10 text-center text-gray-400">
            This tab is under development
          </div>
        );
    }
  };

  return (
    <>
      <div className="pb-3">
        <h2 className=" text-[20px] font-semibold capitalize">
          Add a new resource
        </h2>
      </div>

      <div className="flex gap-5 h-auto w-full">
        {/* Left Side - Main Form */}
        <div className="w-[70%]">
          <div className=" h-auto bg-(--accent)">
            {/* Tabs */}
            <div className="container bg-(--accent) border border-(--border-color)">
              <div className="flex space-x-6">
                <TabButton
                  icon={<TbFileDescription />}
                  label="Basic"
                  active={activeProductTabRender === "basic"}
                  onClick={() => setActiveProductTabRender("basic")}
                />
                <TabButton
                  icon={<FiImage />}
                  label="Images"
                  active={activeProductTabRender === "images"}
                  onClick={() => setActiveProductTabRender("images")}
                />
                <TabButton
                  icon={<FiAlignLeft />}
                  label="Description"
                  active={activeProductTabRender === "description"}
                  onClick={() => setActiveProductTabRender("description")}
                />
                <TabButton
                  icon={<MdOutlineVideoCameraBack />}
                  label="Media"
                  active={activeProductTabRender === "media"}
                  onClick={() => setActiveProductTabRender("media")}
                />
                <TabButton
                  icon={<IoFilter />}
                  label="Filtering"
                  active={activeProductTabRender === "filtering"}
                  onClick={() => setActiveProductTabRender("filtering")}
                />
                <TabButton
                  icon={<MdOutlinePayment />}
                  label="Payment"
                  active={activeProductTabRender === "payment"}
                  onClick={() => setActiveProductTabRender("payment")}
                />
                <TabButton
                  icon={<FaGears />}
                  label="Advance"
                  active={activeProductTabRender === "advance"}
                  onClick={() => setActiveProductTabRender("advance")}
                />
              </div>
            </div>

            <div>{createProductTabRender()}</div>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <div className="w-[30%] h-auto! rounded-md  flex flex-col gap-6">
          {/* Top Buttons */}
          <div className="flex items-center gap-4">
            <Button icon={<FaRegSave />} className="py-2! px-4! text-[13px]">
              Save and exit
            </Button>
            <ButtonDiamond
              icon={<IoMdBook />}
              className="py-2! px-3! text-[13px]"
            >
              Knowledge base
            </ButtonDiamond>
          </div>

          {/* Submission Checklist */}
          <div className="bg-(--accent) border border-(--border-color) rounded-md p-5">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[18px] font-semibold capitalize">
                Submission checklist
              </h3>
              <span
                className={`text-[18px] font-semibold ${
                  completedCount === totalRequired
                    ? "text-green-400"
                    : "text-(--custom-color)"
                }`}
              >
                {completedCount}/{totalRequired}
              </span>
            </div>

            <p className="text-[12px] font-light mb-1">
              The following fields must be set before you can save.
            </p>
            <p className="text-[12px] font-light mb-5">
              You can click each item to be directed to the tab it’s on!
            </p>

            {/* Incomplete Items Only */}
            {completedCount === totalRequired ? (
              <div className="text-center ">
                <div className="inline-flex items-center gap-2 text-green-400">
                  <span className="text-[15px] font-medium">
                    All requirements completed!
                  </span>
                </div>
                <p className="text-[12px]  mt-2">
                  You can now save your resource.
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {checklistItems
                  .filter((item) => !isFieldComplete(item.key))
                  .map((item) => (
                    <li key={item.key}>
                      <button
                        onClick={() => handleChecklistClick(item.tab)}
                        className="w-full text-left flex items-center gap-3 transition-colors"
                      >
                        {/* Icon + Label */}
                        <div className="flex items-center gap-2.5">
                          {item.label === "Title" && (
                            <FiFileText className="w-5 h-4 text-(--custom-color) opacity-70" />
                          )}
                          {item.label === "Summary" && (
                            <FiAlignLeft className="w-5 h-4 text-(--custom-color) opacity-70" />
                          )}
                          {item.label === "Category" && (
                            <FiFolder className="w-5 h-4 text-(--custom-color) opacity-70" />
                          )}

                          {item.label === "Sub-Category" && (
                            <FiFolder className="w-5 h-4 text-(--custom-color) opacity-70" />
                          )}

                          {item.label === "Tags" && (
                            <IoPricetagsOutline className="w-5 h-4 text-(--custom-color) opacity-70" />
                          )}
                          <span className="hover:text-(--custom-color) text-[13px]">
                            {item.label}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

function TabButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 ${
        active
          ? "text-(--custom-color) cursor-pointer bg-(--accent-foreground) py-3 px-3"
          : "hover:text-(--white-color) cursor-pointer py-3 px-3"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default AddResources;
