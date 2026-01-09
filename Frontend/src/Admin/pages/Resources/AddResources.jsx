import React, { useRef, useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { MdOutlineCloudUpload } from "react-icons/md";
import Button, {
  ButtonDiamond,
  ButtonRed,
} from "../../../Components/ui/Button/Button";
import Input from "../../../Components/ui/Input/Input";
import { FaRegSave } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FiAlignLeft, FiImage } from "react-icons/fi";
import RadioOption from "../../../Components/ui/Radio/RadioOption";
import CheckboxOption from "../../../Components/ui/Checkox/CheckboxOption";
import ProductFileUpload from "../../../Components/ProductFileUpload";
import CustomEditor from "../../../Components/Tiptep/Tiptep";
import Breadcrumbs from "../../../Components/Breadcrumbs";

const AddResources = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    description: "",
    category: "",
    subCategory: "",
    tags: [],
    thumbnail: null,
    configurationFor: "",
    types: [],
    supportedVersions: [],
    supportedLanguages: [],
    price: 0,
    currency: "USD",
    isFree: false,
    file: "",
    currentTag: "",
    coverMode: "text",
    resourceFile: null,
    supportThread: "",
    downloadPermissions: ["member"],
    purchaseRequired: true,
    status: "draft", // ডিফল্ট draft
    approvedStatus: "pending", // অ্যাডমিন অ্যাপ্রুভালের জন্য পেন্ডিং
    newOwner: "",
  });

  const fileInputRef = useRef(null);
  const [activeProductTabRender, setActiveProductTabRender] = useState("basic");

  const categories = ["Minecraft", "Website", "Other"];

  const subCategories = {
    Minecraft: {
      Plugins: {
        types: ["Free", "Premium", "Spigot", "Paper", "BungeeCord"],
        supportedVersions: [
          "1.8.x",
          "1.12.x",
          "1.16.x",
          "1.18.x",
          "1.20.x",
          "1.21.x",
        ],
      },
      Configs: {
        types: ["YAML", "JSON", "Custom"],
        supportedVersions: ["1.8+", "1.16+", "1.20+", "Universal"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Maps: {
        types: ["Survival", "Creative", "Adventure", "Minigame", "PvP"],
        supportedVersions: ["1.12+", "1.16+", "1.18+", "1.20+", "1.21+"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Skins: {
        types: ["Boy", "Girl", "HD", "Animated"],
        supportedVersions: ["1.8+", "All Versions"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Models: {
        types: ["Blockbench", "Custom 3D", "Entity"],
        supportedVersions: ["1.14+", "1.19+", "1.20+", "OptiFine Required"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Textures: {
        types: ["Resource Pack", "16x", "32x", "512x"],
        supportedVersions: ["1.8+", "1.16+", "1.20+", "1.21+"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Tools: {
        types: ["Builder", "WorldEdit", "Schematic"],
        supportedVersions: ["1.8+", "1.16+", "1.20+", "Forge/Fabric"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
    },
    Website: {
      Themes: {
        types: ["WordPress", "HTML/CSS", "React", "Bootstrap"],
        supportedVersions: [
          "WordPress 6.x",
          "Bootstrap 5",
          "React 18",
          "Tailwind CSS",
        ],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Plugins: {
        types: ["jQuery", "WordPress Plugin", "PHP"],
        supportedVersions: [
          "PHP 8.0+",
          "PHP 8.1+",
          "PHP 8.2+",
          "WordPress 6.x",
        ],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Scripts: {
        types: ["JavaScript", "Utility", "Animation", "API"],
        supportedVersions: ["ES6+", "Node.js 18+", "Browser Compatible"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
      Templates: {
        types: ["Landing Page", "Portfolio", "E-commerce", "Blog"],
        supportedVersions: ["HTML5", "Responsive", "Mobile First"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
    },
    Other: {
      Miscellaneous: {
        types: ["Tutorial", "Guide", "Config Pack", "Other"],
        supportedVersions: ["Any Version", "N/A", "Universal"],
        supportedLanguage: [
          "This product doesn't contain text",
          "english",
          "spainsh",
          "Russian",
          "German",
          "French",
          "Portugese",
          "Polish",
        ],
      },
    },
  };

  const handleTypeChange = (type) => {
    setFormData((prev) => {
      const current = prev.types || [];
      if (current.includes(type)) {
        return { ...prev, types: current.filter((t) => t !== type) };
      } else {
        if (current.length >= 2) {
          return prev;
        }
        return { ...prev, types: [...current, type] };
      }
    });
  };

  const handleVersionChange = (version) => {
    setFormData((prev) => ({
      ...prev,
      supportedVersions: prev.supportedVersions.includes(version)
        ? prev.supportedVersions.filter((v) => v !== version)
        : [...prev.supportedVersions, version],
    }));
  };

  const handleLanguageChange = (lang) => {
    setFormData((prev) => ({
      ...prev,
      supportedLanguages: prev.supportedLanguages.includes(lang)
        ? prev.supportedLanguages.filter((l) => l !== lang)
        : [...prev.supportedLanguages, lang],
    }));
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
    { key: "thumbnail", label: "Thumbnail", tab: "images" },
    { key: "description", label: "Description", tab: "description" },
    { key: "configurationFor", label: "Configuration", tab: "filtering" },
    { key: "supportedVersions", label: "Supported Versions", tab: "filtering" },
    {
      key: "supportedLanguages",
      label: "Supported Languages",
      tab: "filtering",
    },
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

  // নতুন: Save and exit handler – admin approval এ পাঠাবে
  const handleSave = () => {
    if (completedCount !== totalRequired) {
      alert(
        "⚠️ Please complete all required fields in the checklist before saving!"
      );
      return;
    }

    const dataToSubmit = {
      ...formData,
      status: "draft",
      approvedStatus: "pending",
    };

    console.log("Resource saved for admin approval:", dataToSubmit);

    alert(
      "✅ Resource successfully saved as draft!\nIt has been sent for admin approval."
    );
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
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="title"
                        className=" text-(--dim-white-color)"
                      >
                        Title:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>

                  <div className="h-15 mb-5 flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="slug"
                        className=" text-(--dim-white-color)"
                      >
                        Slug:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Auto gen
                      </span>
                    </div>
                  </div>

                  <div className="h-20 mb-5 flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="shortDescription"
                        className=" text-(--dim-white-color)"
                      >
                        Summary:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>

                  <div className="h-20 flex flex-col justify-center mb-5">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="category"
                        className=" text-(--dim-white-color)"
                      >
                        Category:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>

                  <div className="h-24 mb-5 flex flex-col pt-3">
                    <div className="h-10 flex flex-col items-center">
                      <label
                        htmlFor="tags"
                        className=" text-(--dim-white-color)"
                      >
                        Tags:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Optional
                      </span>
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
                    <span className="text-[12px] text-(--dim-white-color)">
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
                    <span className="text-[12px]  text-(--dim-white-color)">
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
                        className="w-[80%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[14px]  text-(--dim-white-color) rounded-sm outline-none"
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
                        value={formData.subCategory || ""}
                        onChange={handleInputChange}
                        disabled={!formData.category}
                        className="w-[80%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[14px]  text-(--dim-white-color) rounded-sm outline-none"
                      >
                        <option value="">Select Sub-category</option>
                        {formData.category &&
                          Object.keys(
                            subCategories[formData.category] || {}
                          ).map((sub) => (
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
                    <span className="text-[12px] mt-2 block  text-(--dim-white-color)">
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

                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* Product file upload */}
                  <div className=" h-90">
                    <div className="flex flex-col items-end">
                      <label className=" text-(--dim-white-color)">
                        Product file upload:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>

                  {/* cover image */}
                  <div className="mt-  flex flex-col justify-center">
                    <div className="flex flex-col items-end">
                      <label className=" text-(--dim-white-color)">
                        Cover image:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
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

      case "description":
        return (
          <>
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}
                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* Description */}
                  <div className="h-20  flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="description"
                        className=" text-(--dim-white-color)"
                      >
                        Description:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
                  {/* Description */}
                  <div className="h-auto mb-5">
                    <div className=" flex flex-col justify-center">
                      <div className=" mx- pb-1  ">
                        <CustomEditor
                          value={formData.description}
                          onChange={(html) =>
                            setFormData((prev) => ({
                              ...prev,
                              description: html,
                            }))
                          }
                          className="bg-amber-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "filtering":
        return (
          <>
            {/* config and Type */}
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}
                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* Configuration for */}
                  <div className="h-20 mb-10 flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="configurationFor"
                        className=" text-(--dim-white-color)"
                      >
                        Configuration for:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="h-20">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="type"
                        className=" text-(--dim-white-color)"
                      >
                        Type:
                      </label>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
                  {/* Configuration for */}
                  <div className="h-20 mb-10">
                    <div className="h-15 flex flex-col justify-center">
                      <Input
                        id="configurationFor"
                        type="text"
                        name="configurationFor"
                        required
                        value={formData.configurationFor}
                        onChange={handleInputChange}
                      />
                    </div>
                    <span className="text-[12px] text-(--dim-white-color)">
                      What plugin or software was the configuration designed
                      for? <br />
                      Only enter the name of one product and ensure that it is
                      spelled correctly!
                    </span>
                  </div>

                  {/* Type input */}
                  <div className="h-auto ">
                    <div className="h-auto flex flex-col justify-center">
                      {/* Types Checkbox - Only show when category & subCategory selected */}
                      {formData.category && formData.subCategory && (
                        <div className="flex flex-col gap-2 mb-4">
                          {/* শুধু types অ্যারে ম্যাপ করো */}
                          {(
                            subCategories[formData.category]?.[
                              formData.subCategory
                            ]?.types || []
                          ).map((type) => (
                            <CheckboxOption
                              key={type}
                              title={type}
                              checked={formData.types?.includes(type) || false}
                              onChange={() => handleTypeChange(type)}
                            />
                          ))}
                        </div>
                      )}

                      {/* যদি subCategory না সিলেক্ট করা থাকে */}
                      {formData.category && !formData.subCategory && (
                        <p className="text-[13px] opacity-45 pb-3">
                          Please select a sub-category to see available types.
                        </p>
                      )}
                    </div>

                    <span className="text-[12px] text-(--dim-white-color)">
                      Which of the above options best describe this resource?
                      <br />
                      Select up to <strong>2</strong> of the most relevant
                      options. Leave blank if none apply.
                    </span>

                    {/* Optional: Show selected count */}
                    {formData.types && formData.types.length > 0 && (
                      <p className="mt-3 text-sm text-[#FFA41F]">
                        Selected: {formData.types.length}/2
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Supported versions: */}
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}
                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* Supported versions */}
                  <div className="h-20 mb-10 flex flex-col ">
                    <div className="h-10 flex flex-col items-end">
                      <label className=" text-(--dim-white-color)">
                        Supported versions:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
                  {/* Supported versions input */}
                  <div className="h-auto ">
                    <div className="h-auto flex flex-col justify-center mb-5">
                      {/* Supported Versions Checkbox */}
                      {formData.category && formData.subCategory && (
                        <div className="flex flex-col gap-2">
                          {(
                            subCategories[formData.category]?.[
                              formData.subCategory
                            ]?.supportedVersions || []
                          ).map((version) => (
                            <CheckboxOption
                              key={version}
                              title={version}
                              checked={
                                formData.supportedVersions?.includes(version) ||
                                false
                              }
                              onChange={() => handleVersionChange(version)}
                            />
                          ))}
                        </div>
                      )}

                      {/* If no subCategory selected yet, show placeholder or nothing */}
                      {!formData.subCategory && (
                        <p className="text-[13px] opacity-45 pb-3">
                          Please select a sub-category to see available types.
                        </p>
                      )}
                    </div>
                    <span className="text-[12px] text-(--dim-white-color)">
                      Which of the above options have you tested this resource
                      with to verify that it works properly? <br />
                      Only select options you're certain are supported.
                      Misleading users by selecting unsupported options violates
                      our rules, and buyers may be eligible for a refund if they
                      dispute the product not working as described. Select all
                      options that apply.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supported Language */}
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}
                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* Supported versions */}
                  <div className="h-20 mb-10 flex flex-col ">
                    <div className="h-10 flex flex-col items-end">
                      <label className=" text-(--dim-white-color)">
                        Supported versions:
                      </label>
                      <span className="text-[12px]  text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
                  {/* Supported versions input */}
                  <div className="h-auto ">
                    <div className="h-auto flex flex-col justify-center mb-5">
                      {/* Supported Versions Checkbox */}
                      {formData.category && formData.subCategory && (
                        <div className="flex flex-col gap-2">
                          {(
                            subCategories[formData.category]?.[
                              formData.subCategory
                            ]?.supportedLanguage || []
                          ).map((lang) => (
                            <CheckboxOption
                              key={lang}
                              title={lang}
                              checked={
                                formData.supportedLanguages?.includes(lang) ||
                                false
                              }
                              onChange={() => handleLanguageChange(lang)}
                            />
                          ))}
                        </div>
                      )}

                      {/* If no subCategory selected yet, show placeholder or nothing */}
                      {!formData.subCategory && (
                        <p className="text-[13px] opacity-45 pb-3">
                          Please select a sub-category to see available types.
                        </p>
                      )}
                    </div>
                    <span className="text-[12px] text-(--dim-white-color)">
                      Does this resource contain text (e.g., in-game messages,
                      GUI, config comments, website content)?
                      <br />
                      If yes, select all languages it fully supports. If it
                      contains no text at all, select "This product doesn't
                      contain text".
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "payment":
        return (
          <>
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}
                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* Free or paid */}
                  <div className="h-26 mb-10 flex flex-col ">
                    <div className="h-10 flex flex-col items-end">
                      <label className="text-(--dim-white-color)">
                        Free or paid:
                      </label>
                      <span className="text-[12px] text-(--dim-white-color)">
                        Required
                      </span>
                    </div>
                  </div>

                  {/* Price (only shown if paid) */}
                  {formData.isFree === false && (
                    <div className="h-20 mb-10 flex flex-col">
                      <div className="h-10 flex flex-col items-end">
                        <label className="text-(--dim-white-color)">
                          Price:
                        </label>
                        <span className="text-[12px] text-(--dim-white-color)">
                          Required
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
                  {/* Free or Paid Selection */}
                  <div className="h-auto mb-8">
                    <div className="flex flex-col gap-4">
                      {/* Free Option */}
                      <label className="flex items-center cursor-pointer">
                        <RadioOption
                          title="Free resource"
                          name="isFree"
                          checked={formData.isFree === true}
                          onChange={() => {
                            setFormData((prev) => ({
                              ...prev,
                              isFree: true,
                              price: 0,
                            }));
                          }}
                          className="w-20"
                        />
                      </label>

                      {/* Paid Option */}
                      <label className=" flex items-center cursor-pointer">
                        <RadioOption
                          title="Premium resource (one-time payment)"
                          type="radio"
                          name="isFree"
                          checked={formData.isFree === false}
                          onChange={() => {
                            setFormData((prev) => ({
                              ...prev,
                              isFree: false,
                            }));
                          }}
                          className="w-70!"
                        />
                      </label>
                    </div>

                    <span className="block mt-4 text-[12px] text-(--dim-white-color)">
                      Free resources can be downloaded by anyone. Premium
                      resources require a one-time payment to download and are a
                      great way to support your work.
                    </span>
                  </div>

                  {/* Price Input - Conditional (only if paid) */}
                  {formData.isFree === false && (
                    <div className="h-auto ">
                      <div className="flex items-end gap-3">
                        <div className="flex-1">
                          <Input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={formData.price || ""}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                price: parseFloat(e.target.value) || 0,
                              }))
                            }
                            placeholder="0.00"
                            required
                          />
                        </div>

                        <div className="w-32">
                          <select
                            value={formData.currency || "USD"}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                currency: e.target.value,
                              }))
                            }
                            className="w-[80%] h-10 bg-(--foreground-color) border border-(--input-border-color) pl-3 text-[14px]  text-(--dim-white-color) rounded-sm outline-none"
                          >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                          </select>
                        </div>
                      </div>

                      <span className="block mt-4 text-[12px] text-(--dim-white-color)">
                        The price buyers will pay to download this resource.
                        BuiltByBit takes a small platform fee — you’ll see your
                        estimated earnings before confirming.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        );

      case "advance":
        return (
          <>
            {/* config and Type */}
            <div className="flex flex-col">
              <div className="flex gap-0 px-14 h-auto">
                {/* Label Side */}
                <div className="bg-(--secondary) w-[25%] flex flex-col items-end pt-4 pr-3 border-r border-(--border-color)">
                  {/* New owner */}
                  <div className="h-20 mb-10 flex flex-col justify-center">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="newOwner"
                        className=" text-(--dim-white-color)"
                      >
                        New owner:
                      </label>
                    </div>
                  </div>

                  <div className="h-20 mb-10 ">
                    <div className="h-10 flex flex-col items-end">
                      <label
                        htmlFor="newOwner"
                        className=" text-(--dim-white-color)"
                      >
                        Visibility:
                      </label>
                    </div>
                  </div>
                </div>

                {/* Input Side */}
                <div className="bg-(--secondary) w-[75%] py-4 px-4">
                  {/* new Owner for */}
                  <div className="h-20 mb-10">
                    <div className="h-15 flex flex-col justify-center">
                      <Input
                        id="newOwner"
                        type="text"
                        name="newOwner"
                        required
                        value={formData.newOwner}
                        onChange={handleInputChange}
                      />
                    </div>
                    <span className="text-[12px] text-(--dim-white-color)">
                      Pushing your content to another user cannot be undone and
                      will be done immediately after approved by another user.
                    </span>
                  </div>

                  <div className="h-auto mb-10">
                    <div className="h-auto flex flex-col justify-center">
                      {/* Visibility Radio Options */}
                      <div className="flex flex-col gap-3">
                        {/* Published */}
                        <label className="flex items-center cursor-pointer">
                          <RadioOption
                            title="Published"
                            name="status"
                            value="published"
                            checked={formData.status === "published"}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                status: e.target.value,
                              }))
                            }
                          />
                          <span className="ml-3 text-[13px] text-(--dim-white-color)">
                            Visible on all of our discovery pages (recommended)
                          </span>
                        </label>

                        {/* Unlisted */}
                        <label className="flex items-center cursor-pointer">
                          <RadioOption
                            title="Unlisted"
                            name="status"
                            value="unlisted"
                            checked={formData.status === "unlisted"}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                status: e.target.value,
                              }))
                            }
                          />
                          <span className="ml-3 text-[13px] text-(--dim-white-color)">
                            Unlisted (hidden from search and listings)
                          </span>
                        </label>

                        {/* Draft */}
                        <label className="flex items-center cursor-pointer">
                          <RadioOption
                            title="Draft"
                            name="status"
                            value="draft"
                            checked={formData.status === "draft"}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                status: e.target.value,
                              }))
                            }
                          />
                          <span className="ml-3 text-[13px] text-(--dim-white-color)">
                            Draft (only visible to you)
                          </span>
                        </label>

                        {/* Unpublished - নতুন যোগ করা */}
                        <label className="flex items-center cursor-pointer">
                          <RadioOption
                            title="Unpublished"
                            name="status"
                            value="unpublished"
                            checked={formData.status === "unpublished"}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                status: e.target.value,
                              }))
                            }
                          />
                          <span className="ml-3 text-[13px] text-(--dim-white-color)">
                            Unpublished (completely hidden from everyone)
                          </span>
                        </label>
                      </div>
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
      <div className="flex flex-col gap-5 h-auto w-full">
        <div className="bg-(--accent) rounded-md flex items-center justify-between py-3 px-4 ">
          <h2 className="w-[50%] text-[20px] font-semibold capitalize">
            Add Resource
          </h2>
        </div>

        <div className="flex gap-5 h-auto w-full">
          {/* Left Side - Main Form */}
          <div className="w-[70%]">
            <div className="h-auto rounded-lg bg-(--accent)">
              {/* Tabs */}
              <div className="bg-(--accent) border border-(--border-color)">
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
          <div className="w-[30%] h-auto! rounded-md flex flex-col gap-6">
            {/* Top Buttons */}
            <div className="flex items-center gap-4">
              <Button
                icon={<FaRegSave />}
                className="py-2! px-4! text-[13px]"
                onClick={handleSave} // এখানে handleSave যোগ হয়েছে
              >
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

              {completedCount === totalRequired ? (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-green-400">
                    <span className="text-[15px] font-medium">
                      All requirements completed!
                    </span>
                  </div>
                  <p className="text-[12px] mt-2">
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
                          <div className="flex items-center gap-2.5">
                            <MdEdit className="w-5 h-4 text-(--custom-color) opacity-70" />
                            <span className="hover:text-(--custom-color) text-[13px] cursor-pointer">
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
          : "hover:text-(--white-color) text-(--dim-white-color) cursor-pointer py-3 px-3"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default AddResources;
