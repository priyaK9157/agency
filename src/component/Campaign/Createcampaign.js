import React, { useRef, useCallback, useState } from 'react';
import Navbar from '../common/Navbar';
import { useDropzone } from 'react-dropzone';
import FramePic from '../../asset/FramePic.png';

const validFileTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif', 'video/*'];
const maxFileSize = 3 * 1024 * 1024; // 3MB

const FilePreview = ({ file }) => {
  if (!file) {
    return null;
  }

  if (file.type.startsWith('image/')) {
    return <img src={URL.createObjectURL(file)} alt="Upload" />;
  }

  if (file.type.startsWith('video/')) {
    return <video width="320" height="240" controls>
      <source src={URL.createObjectURL(file)} type={file.type} />
    </video>;
  }

  return null;
};

const Createcampaign = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      // Handle the dropped file as needed
      console.log('Dropped file:', file);
      setSelectedFile(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: validFileTypes.join(','),
    maxSize: maxFileSize,
  });

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file change as needed
    const file = e.target.files[0];
    if (file) {
      console.log('File selected:', file);
      setSelectedFile(file);
    }
  };

  return (
    <div>
      <div className='flex flex-col gap-4 '>
        <Navbar />

        <div>
          <button className='ml-20'>Back</button>
        </div>

        <div className='text-2xl font-bold ml-20'>
          Create Campaign
        </div>

        <div className='flex w-15/20 mx-auto border border-pink-600'>
          <div className='flex flex-col gap-3 p-3'>
            <p>BASIC DETAILS</p>
            <p>PRODUCT DETAILS</p>
            <p>CAMPAIGN TYPE</p>
        </div>

          <div className='border border-black p-7'>
            <p>Campaign Image</p>
            

<div className='border border-black'>
  <p>Campaign Image</p>
  <form action="/upload" method="post" encType="multipart/form-data">
    <label htmlFor="fileInput" className="cursor-pointer">
      {selectedFile && selectedFile.type.startsWith('image/') ? (
        <img src={URL.createObjectURL(selectedFile)} alt="Upload" onClick={handleImageClick} />
      ) : (
        <FilePreview file={selectedFile} />
      )}
      <img src={FramePic} alt="Upload" onClick={handleImageClick} />
    </label>
    <input
      type="file"
      id="fileInput"
      name="picture"
      accept={validFileTypes.join(',')}
      style={{ display: 'none' }}
      ref={fileInputRef}
      onChange={handleFileChange}
    />
  </form>

  {/* ... rest of the code ... */}
</div>



           
            <fieldset className="border m-3 p-2">
                <legend className="text-sm font-semibold">Company Name</legend>
                <input
                placeholder="John"
                />
            </fieldset>

            <fieldset className="border m-3 p-2">
                <legend className="text-sm font-semibold">Company Description</legend>
                <input
                placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                />
            </fieldset>

            <div {...getRootProps()} style={dropzoneStyle} className='w-[900px] h-[300px]'>
              <input {...getInputProps()} />
              <p>
                {isDragActive
                  ? 'Drop the files here ...'
                  : 'Click or drag-and-drop to upload SVG, PNG, JPG, GIF, or video (max. 3MB)'}
              </p>
              <p>SVG, PNG, JPG or GIF (max. 3MB)</p>
            </div>

            <p className='text-[#00000099] m-3' >Campaign Type</p>
            <div className='flex gap-3 '>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">Barter</label><br/>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label for="css">Paid</label><br/>
            </div>

            <p className='text-[#00000099] m-3'>Campaign Duration</p>
            <div className='flex gap-3'>
                <fieldset className="border m-3 ">
                    <legend className="text-sm font-semibold text-[#00000099]">Start Date</legend>
                    <input
                    placeholder="John"
                    />
                </fieldset>
                <fieldset className="border m-3 p-2">
                    <legend className="text-sm font-semibold text-[#00000099]">End Date</legend>
                    <input
                    placeholder="John"
                    />
                </fieldset>
            </div>

            <fieldset className="border m-3 p-2">
            <legend className="text-sm font-semibold text-[#00000099]">NSFW Content</legend>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">Yes</label><br/>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label for="css">No</label><br/>
            </fieldset>

            <button className='bg-[#6B8DE6] text-white rounded-md p-2 ml-[55rem] m-3'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #aaaaaa',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default Createcampaign;
