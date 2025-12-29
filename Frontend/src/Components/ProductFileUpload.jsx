// ProductFileUpload.jsx (Compact + No Double Scroll Fix)
import { useState } from "react";
import { GoFileZip } from "react-icons/go";
import { MdOutlineDriveFolderUpload, MdOutlineFileUpload } from "react-icons/md";
import Button from "./ui/Button/Button";

export default function ProductFileUpload({
  file,
  onFileChange,
  progress = 0,
  status = "",
  onRemoveFile,
}) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (selectedFile) => {
    if (selectedFile.size > 200 * 1024 * 1024) {
      alert("File size exceeds 200MB limit!");
      return;
    }
    onFileChange(selectedFile);
  };

  return (
    <div className="w-full h-auto mb-5">
      {/* Compact Upload Card */}
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center 
          transition-all duration-300 backdrop-blur-sm 
          ${dragActive 
            ? "border-(--custom-color) bg-(--custom-color)/10 shadow-xl shadow-(--custom-color)/20" 
            : "border-white/20 bg-(--accent-foreground)/50"
          }
          ${status === "uploading" ? "opacity-80 pointer-events-none" : ""}
        `}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          disabled={status === "uploading"}
        />

        {/* File Selected */}
        {file ? (
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="p-4 bg-(--custom-color)/15 rounded-2xl">
                <GoFileZip size={40} className="text-(--custom-color)" />
              </div>
              <div className="text-left">
                <p className=" font-semibold text-(--white-color)">{file.name}</p>
                <p className=" opacity-50">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              {onRemoveFile && status !== "uploading" && (
                <button
                  onClick={onRemoveFile}
                  className="ml-auto p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition"
                >
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Progress */}
            {status === "uploading" && (
              <div className="space-y-3 max-w-sm mx-auto">
                <div className="relative h-3 bg-(--accent)/40 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-linear-to-r from-(--custom-color) to-(--primary-color) transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-(--white-color)">
                    {progress}%
                  </span>
                </div>
                <p className="text-sm text-(--custom-color)">Uploading...</p>
              </div>
            )}

            {/* Success */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Upload complete!
              </div>
            )}
          </div>
        ) : (
          /* Empty State - Compact */
          <div className="space-y-6 py-4">
            <MdOutlineDriveFolderUpload size={48} className="mx-auto text-(--white-color)/40" />

            <div className="space-y-2">
              <p className="text-[16px] font-medium text-(--white-color) opacity-50">
                Drag & drop your file here
              </p>
              <p className="opacity-50">or click to browse</p>
            </div>

            <Button
              disabled={status === "uploading"}
              icon={<MdOutlineFileUpload size={18} />}
              className="mx-auto px-6 py-3 text-sm font-semibold"
            >
              Choose File
            </Button>
          </div>
        )}
      </div>

      {/* Description - Compact */}
      <p className="mt-6 text-xs  leading-relaxed text-center max-w-2xl mx-auto">
        Upload the file users will download. Max size: <span className="text-(--white-color) font-bold">200MB</span>.
        Unauthorized redistribution may result in account suspension.
      </p>
    </div>
  );
}