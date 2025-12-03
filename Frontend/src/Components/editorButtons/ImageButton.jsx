import React, { useCallback } from "react";

export default function ImageButton({ editor, maxImages = 5 }) {
  if (!editor) return null;

  // Recursive function to count images in editor content
  const countImages = (nodes) => {
    if (!nodes) return 0;
    let count = 0;
    nodes.forEach((node) => {
      if (node.type === "image") count += 1;
      if (node.content) count += countImages(node.content);
    });
    return count;
  };

  const handleImageUpload = useCallback(() => {
    const currentImages = countImages(editor.getJSON().content);
    const remainingSlots = maxImages - currentImages;

    if (remainingSlots <= 0) {
      alert(`You can only add up to ${maxImages} images!`);
      return;
    }

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;

    input.onchange = () => {
      const files = Array.from(input.files);

      if (files.length > remainingSlots) {
        alert(`You can only add ${remainingSlots} more image(s)!`);
        return;
      }

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          editor.chain().focus().setImage({ src: reader.result }).run();
        };
        reader.readAsDataURL(file);
      });
    };

    input.click();
  }, [editor, maxImages]);

  return (
    <button onClick={handleImageUpload} title="Insert Image">
      🖼 Image
    </button>
  );
}
