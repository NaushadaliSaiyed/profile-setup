import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const CodingChatGptRepeat = () => {
    const editorRef = useRef<any>(null);
    const [imagePath, setImagePath] = useState('');
    const [zoom, setZoom] = useState(1);
    const [showGrid, setShowGrid] = useState(true);
    const [borderRadius, setBorderRadius] = useState(0);
    const [avatarWidth, setAvatarWidth] = useState(200);
    const [avatarHeight, setAvatarHeight] = useState(200);
    const [rotate, setRotate] = useState(0);
    const [canvasRotation, setCanvasRotation] = useState(0);
    const [transparentImage, setTransparentImage] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            setImagePath(reader.result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSave = () => {
      if (editorRef.current) {
        const canvasScaled = editorRef.current.getImageScaledToCanvas();
        // Use the canvasScaled data URL as needed
      }
    };
  
    const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setZoom(Number(event.target.value));
    };
  
    const handleGridChange = () => {
      setShowGrid((prevShowGrid) => !prevShowGrid);
    };
  
    const handleBorderRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBorderRadius(Number(event.target.value));
    };
  
    const handleAvatarWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAvatarWidth(Number(event.target.value));
    };
  
    const handleAvatarHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAvatarHeight(Number(event.target.value));
    };
  
    const handleRotateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRotate(Number(event.target.value));
    };
  
    const handleCanvasRotationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCanvasRotation(Number(event.target.value));
    };
  
    const handleTransparentImageChange = () => {
      setTransparentImage((prevTransparentImage) => !prevTransparentImage);
    };
  
    const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setBackgroundColor(event.target.value);
    };
  
  return (
    <div>
    <input type="file" accept="image/*" onChange={handleImageChange} />

    {imagePath && <img src={imagePath} alt="Preview" style={{ maxWidth: '100%', marginBottom: '1rem' }} />}

    <AvatarEditor
      ref={editorRef}
      image={imagePath}
      width={avatarWidth}
      height={avatarHeight}
      border={borderRadius}
      color={[255, 255, 255, 0.6]}
      scale={zoom}
      rotate={rotate}
      borderRadius={borderRadius}
      style={{ background: backgroundColor }}
      onPositionChange={(position) => console.log('Position:', position)}
      disableCanvasRotation={false}
      crossOrigin="anonymous"
      onLoadFailure={(error) => console.log('Load Failed:', error)}
      onLoadSuccess={() => console.log('Load Success')}
      onMouseUp={() => console.log('Mouse Up')}
      onMouseMove={() => console.log('Mouse Move')}
      onImageChange={() => console.log('Image Change')}
      disableBoundaryChecks={false}
    />

    <div>
      <label>Zoom:</label>
      <input type="range" min={0.1} max={2} step={0.1} value={zoom} onChange={handleZoomChange} />

      <label>Show Grid:</label>
      <input type="checkbox" checked={showGrid} onChange={handleGridChange} />

      <label>Border Radius:</label>
      <input type="number" value={borderRadius} onChange={handleBorderRadiusChange} />

      <label>Avatar Width:</label>
      <input type="number" value={avatarWidth} onChange={handleAvatarWidthChange} />

      <label>Avatar Height:</label>
      <input type="number" value={avatarHeight} onChange={handleAvatarHeightChange} />

      <label>Rotate:</label>
      <input type="number" value={rotate} onChange={handleRotateChange} />

      <label>Canvas Rotation:</label>
      <input type="number" value={canvasRotation} onChange={handleCanvasRotationChange} />

      <label>Transparent Image:</label>
      <input type="checkbox" checked={transparentImage} onChange={handleTransparentImageChange} />

      <label>Background Color:</label>
      <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} />
    </div>

    <button onClick={handleSave}>Save</button>
  </div>
  )
}

export default CodingChatGptRepeat