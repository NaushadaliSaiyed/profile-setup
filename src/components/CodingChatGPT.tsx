import React, { useState, useRef, ChangeEvent } from 'react';
import AvatarEditor from 'react-avatar-editor';

const CodingChatGPT = () => {
  // State variables to store the selected image and zoom level
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  // Ref to access the AvatarEditor component instance
  const editorRef = useRef<AvatarEditor | null>(null);

  // Event handler for image upload
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Event handler for saving the edited image
  const handleSaveImage = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const editedImage = canvas.toDataURL('image/jpeg');
      console.log(editedImage);
    }
  };

  return (
    <div>
      {/* Input element for image upload */}
      <input type="file" accept="image/*" className="mx-auto" onChange={handleImageUpload} />

      {/* Display the AvatarEditor component and image editing controls if an image is selected */}
      {selectedImage && (
        <div>
          {/* AvatarEditor component */}
          <AvatarEditor
            ref={editorRef}
            image={selectedImage}
            width={250}
            height={250}
            border={50}
            borderRadius={125}
            rotate={0}
            scale={zoom}
            className="mx-auto"
          />

          {/* Zoom control */}
          <div>
            <label htmlFor="zoom">Zoom:</label>
            <input
              type="range"
              id="zoom"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
            />
          </div>

          {/* Save button */}
          <div>
            <button onClick={handleSaveImage}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodingChatGPT;
