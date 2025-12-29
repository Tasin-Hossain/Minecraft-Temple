// src/pages/admin/resources/AddResources.jsx
import React, { useState } from "react";
import {
  MdTitle,
  MdPerson,
  MdCategory,
  MdAttachMoney,
  MdDescription,
  MdCloudUpload,
  MdLink,
  MdPreview,
  MdSave,
  MdArrowBack,
  MdImage,
  MdCode,
  MdTag,
  MdWarning,
  MdForum,
  MdSecurity,
  MdMonetizationOn,
  MdCheckCircle,
} from "react-icons/md";

const AddResources = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    description: "",
    category: "",
    subCategory: "",
    price: 0,
    currency: "USD",
    isFree: false,
    tags: [],
    currentTag: "",
    thumbnail: null,
    resourceFile: null,
    supportThread: "",
    downloadPermissions: ["member"],
    purchaseRequired: true,
    status: "pending",
  });

  const categories = ["Minecraft", "Roblox", "Website", "Other"];
  const subCategories = {
    Minecraft: ["Plugins", "Configs", "Maps", "Skins", "Models", "Textures", "Tools"],
    Roblox: ["Scripts", "Models", "Clothing", "Game Passes"],
    Website: ["Themes", "Plugins", "Scripts", "Templates"],
    Other: ["Miscellaneous"],
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      price: value === "" ? 0 : parseFloat(value),
      isFree: value === "free",
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

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }));
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    // পরে এখানে backend API call করবে
    console.log("Submitted Resource:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 max-w-4xl mx-auto bg-(--accent) min-h-screen flex items-center justify-center">
        <div className="text-center">
          <MdCheckCircle className="text-9xl text-green-500 mx-auto mb-8" />
          <h2 className="text-5xl font-bold text-green-400 mb-6">
            Resource Submitted Successfully!
          </h2>
          <p className="text-2xl text-gray-300 mb-4">
            Status: <span className="text-orange-400 font-bold">PENDING REVIEW</span>
          </p>
          <p className="text-lg text-gray-400 mb-10">
            A moderator will review your resource soon.
          </p>
          <button
            onClick={() => window.location.href = "/admin/resources"}
            className="bg-(--primary-color) hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition"
          >
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto bg-(--accent) min-h-screen">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            onClick={() => window.history.back()}
            className="p-3 rounded-xl hover:bg-(--accent-foreground) transition"
          >
            <MdArrowBack className="text-2xl text-gray-300" />
          </button>
          <h1 className="text-4xl font-bold text-(--primary-color) flex items-center gap-4">
            <MdCloudUpload className="text-5xl" />
            Add New Resource (Admin)
          </h1>
        </div>
        <div className="text-gray-400 text-lg">
          Step {step} / 4
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-12 flex items-center justify-center gap-8">
        {["Basic Info", "Media", "Details", "Settings & Submit"].map((label, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                step > i + 1
                  ? "bg-green-500 text-white"
                  : step === i + 1
                  ? "bg-(--primary-color) text-white scale-110"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              {step > i + 1 ? "✓" : i + 1}
            </div>
            <span className="ml-3 text-gray-300 font-medium hidden lg:block">
              {label}
            </span>
            {i < 3 && (
              <div
                className={`w-32 h-1 mx-6 transition-all ${
                  step > i + 1 ? "bg-green-500" : "bg-gray-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="bg-(--accent-foreground) rounded-2xl p-8 border border-(--border-color)">
            <h2 className="text-2xl font-bold text-(--primary-color) mb-8 flex items-center gap-3">
              <MdTitle className="text-3xl" />
              Basic Information
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-300 mb-2">Resource Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white focus:ring-2 focus:ring-(--primary-color)"
                  placeholder="e.g. Advanced AntiCheat Pro"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Slug (auto-generated)</label>
                <input
                  type="text"
                  value={formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}
                  readOnly
                  className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Main Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Sub Category</label>
                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                  disabled={!formData.category}
                >
                  <option value="">Select sub-category</option>
                  {(subCategories[formData.category] || []).map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <MdMonetizationOn />
                  Price
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="number"
                    value={formData.isFree ? "" : formData.price}
                    onChange={handlePriceChange}
                    disabled={formData.isFree}
                    className="flex-1 px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                    step="0.01"
                  />
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                  <label className="flex items-center gap-2 text-gray-300">
                    <input
                      type="checkbox"
                      checked={formData.isFree}
                      onChange={(e) => setFormData(prev => ({ ...prev, isFree: e.target.checked, price: e.target.checked ? 0 : prev.price }))}
                    />
                    Free
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2 flex items-center gap-2">
                  <MdTag />
                  Tags (Enter to add)
                </label>
                <input
                  type="text"
                  value={formData.currentTag}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentTag: e.target.value }))}
                  onKeyDown={addTag}
                  className="w-full px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                  placeholder="premium, leaked, spigot..."
                />
                <div className="flex flex-wrap gap-3 mt-4">
                  {formData.tags.map((tag, i) => (
                    <span key={i} className="bg-(--primary-color) text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                      {tag}
                      <button onClick={() => removeTag(i)} className="hover:bg-orange-700 rounded-full w-6 h-6 flex items-center justify-center">×</button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Media */}
        {step === 2 && (
          <div className="bg-(--accent-foreground) rounded-2xl p-8 border border-(--border-color)">
            <h2 className="text-2xl font-bold text-(--primary-color) mb-8 flex items-center gap-3">
              <MdImage className="text-3xl" />
              Media Upload
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <label className="block text-gray-300 mb-4">Thumbnail *</label>
                <div className="border-2 border-dashed border-gray-600 rounded-2xl p-12 text-center hover:border-(--primary-color)">
                  <MdImage className="text-7xl text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-6">Drop thumbnail (800x600 recommended)</p>
                  <input type="file" id="thumb" onChange={(e) => handleFileChange(e, "thumbnail")} className="hidden" accept="image/*" />
                  <label htmlFor="thumb" className="cursor-pointer bg-(--primary-color) text-white px-8 py-4 rounded-xl">Choose Thumbnail</label>
                  {formData.thumbnail && <p className="mt-4 text-green-400">✓ {formData.thumbnail.name}</p>}
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-4">Resource File *</label>
                <div className="border-2 border-dashed border-gray-600 rounded-2xl p-12 text-center hover:border-(--primary-color)">
                  <MdCloudUpload className="text-7xl text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-6">Drop .jar/.zip file</p>
                  <input type="file" id="file" onChange={(e) => handleFileChange(e, "resourceFile")} className="hidden" accept=".jar,.zip,.rar,.7z" />
                  <label htmlFor="file" className="cursor-pointer bg-(--primary-color) text-white px-8 py-4 rounded-xl">Upload File</label>
                  {formData.resourceFile && <p className="mt-4 text-green-400">✓ {formData.resourceFile.name}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Description */}
        {step === 3 && (
          <div className="bg-(--accent-foreground) rounded-2xl p-8 border border-(--border-color)">
            <h2 className="text-2xl font-bold text-(--primary-color) mb-8 flex items-center gap-3">
              <MdDescription className="text-3xl" />
              Description & Support
            </h2>
            <div className="space-y-8">
              <div>
                <label className="block text-gray-300 mb-3">Short Description</label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-3">Full Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="12"
                  className="w-full px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-3">
                  <MdForum className="inline mr-2" />
                  Support Thread URL
                </label>
                <input
                  type="url"
                  name="supportThread"
                  value={formData.supportThread}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-(--accent) border border-(--border-color) rounded-xl text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Settings & Submit */}
        {step === 4 && (
          <div className="bg-(--accent-foreground) rounded-2xl p-8 border border-(--border-color)">
            <h2 className="text-2xl font-bold text-(--primary-color) mb-8 flex items-center gap-3">
              <MdSecurity className="text-3xl" />
              Access Settings & Submit
            </h2>
            <div className="space-y-8">
              <div>
                <label className="block text-gray-300 mb-4 text-lg">Download Permissions</label>
                <div className="flex flex-wrap gap-8">
                  {["member", "moderator", "admin"].map((role) => (
                    <label key={role} className="flex items-center gap-3 text-gray-300">
                      <input
                        type="checkbox"
                        checked={formData.downloadPermissions.includes(role)}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setFormData(prev => ({
                            ...prev,
                            downloadPermissions: checked
                              ? [...prev.downloadPermissions, role]
                              : prev.downloadPermissions.filter(r => r !== role)
                          }));
                        }}
                        className="w-5 h-5 accent-(--primary-color)"
                      />
                      <span className="capitalize">{role}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="flex items-center gap-3 text-gray-300">
                  <input
                    type="checkbox"
                    name="purchaseRequired"
                    checked={formData.purchaseRequired}
                    onChange={handleInputChange}
                    className="w-5 h-5 accent-(--primary-color)"
                  />
                  Purchase Required (even for free resources)
                </label>
              </div>
              <div className="bg-yellow-900/30 border border-yellow-700 rounded-xl p-6 flex items-start gap-4">
                <MdWarning className="text-3xl text-yellow-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-yellow-400">Admin Submission</p>
                  <p className="text-gray-300 mt-2">
                    This resource will be submitted as <strong>PENDING</strong>. Moderator review required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-12">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-8 py-4 border border-gray-600 rounded-xl hover:bg-(--accent-foreground) text-gray-300"
            >
              ← Back
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto bg-(--primary-color) text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3"
            >
              Next Step →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="ml-auto bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-xl font-bold text-xl flex items-center gap-4 shadow-lg"
            >
              <MdSave className="text-2xl" />
              Submit for Review
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddResources;