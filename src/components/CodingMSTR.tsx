import React from 'react'
import { useRef, useState } from 'react';
import profileImage from '../assets/pexels-anna-nekrashevich-8993561.jpg'

const CodingMSTR = () => {
    const inputRef: any = useRef(null);
    const [image, SetImage]: any = useState("");




    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0]
        console.log(file)
        SetImage(e.target.files[0])

    };
    return (
        <div className='p-8 flex justify-center items-center h-[90vh]'>
            <div className='border-dashed border-2 border-[#ccc] rounded-md py-32 px-28 flex flex-col justify-center items-center'>
                <label htmlFor="image-upload-input" className='text-2xl font-bold mb-4 cursor-pointer'>
                    {image ? image.name : "Choose an image"}
                </label>
                <div onClick={handleImageClick}>
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="" className='w-52 h-52 rounded-full' />
                    ) : (<img src={profileImage} alt="" className='w-52 h-52 ml-4' />
                    )}
                    <input type="file" name="" id="" onChange={handleImageChange} ref={inputRef} hidden />
                </div>
                <button className='bg-[#4CAF50] text-white py-3 px-5 mt-4 cursor-pointer rounded-md hover:bg-[#3eBe41]'>Upload</button>
            </div>
        </div>
    )
}

export default CodingMSTR
