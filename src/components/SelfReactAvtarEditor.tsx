import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import myProfile from '../assets/myProfile.png';
import { AiOutlineEdit } from 'react-icons/ai';


const SelfReactAvtarEditor = () => {
    const inputRef: any = useRef();
    const [isNewImage, setIsNewImage]: any = useState(myProfile)
    const [isImageZoom, setIsImageZoom]: any = useState(1);
    const [isImageBorderRadius, setIsImageBorderRadius]: any = useState(0);
    const [isImageRotate, setIsImageRotate]: any = useState(0);
    const editorRef:any = useRef(); {/* new for preview img */ }
    const [previewImage, setPreviewImage] = useState(""); {/* new for preview img */ }


    const handlePreview = () => {
        const canvas = editorRef.current.getImageScaledToCanvas();
        const dataURL = canvas.toDataURL();
        setPreviewImage(dataURL);
    };


    const handImageClick = () => {
        inputRef.current.click()
    }


    const handleImageChange: any = (e: any) => {
        const file = e.target.files[0]
        setIsNewImage(file)
        setPreviewImage(""); // Reset the preview when a new image is selected
    }

    const handleZoomChange: any = (e: any) => {
        setIsImageZoom(e.target.value)
    }

    const handleImageBorderRadius: any = (e: any) => {
        setIsImageBorderRadius(e.target.value)
    }

    const handleImageRotate: any = (e: any) => {
        setIsImageRotate(e.target.value)

    }



    return (
        <div className='border border-red-900 flex flex-col items-center'>
            <div className='border border-red-500 w-fit' >
                <input type="file" name="" id="" onChange={handleImageChange} ref={inputRef} hidden />  {/* ref={inputRef} */}
                <AvatarEditor
                    ref={editorRef}
                    image={isNewImage ? isNewImage : myProfile}
                    width={250}
                    height={250}
                    border={50}
                    borderRadius={Number(isImageBorderRadius)}
                    color={[105, 105, 105]} // RGBA
                    scale={Number(isImageZoom)}
                    rotate={Number(isImageRotate)}
                />
            </div>
            <div className='flex mx-80'>
                <AiOutlineEdit onClick={handImageClick} />
            </div>
            <span className='flex gap-3'>
                <label htmlFor="zoom">Zoom</label>
                <input onChange={handleZoomChange} value={isImageZoom} type="range" min={1} max={5} step={0.1} className='cursor-pointer' />
            </span>
            <span className='flex gap-3'>
                <label htmlFor="borderRadius">Border Radius</label>
                <input onChange={handleImageBorderRadius} value={isImageBorderRadius} type="range" min={0} max={150} step={1} className='cursor-pointer' />
            </span>
            <span className='flex gap-3'>
                <label htmlFor="rotate">Rotate</label>
                <input onChange={handleImageRotate} value={isImageRotate} type="range" min={0} max={360} step={1} className='cursor-pointer' />
            </span>
            <div className="preview-area">
                <h4>Preview Image:</h4>
                <img src={previewImage ? previewImage : ""} alt='' className='rounded-full' />
                <button onClick={handlePreview}>Preview</button>
            </div>
        </div>
    )
}

export default SelfReactAvtarEditor
