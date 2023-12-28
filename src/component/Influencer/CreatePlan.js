import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import axios from 'axios'
const CreatePlan = () => {

  const[set,setState]=useState({
     name:'',
     description:'',
     category:'',
     platforms:'',
     language:'',
  })

  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const[selectedplatform,SetselectedPlatform]=useState('');
  const[selectedLang,setSelectedLanguage]=useState('')
   

  const handleLanguageChange = (name) => {
    setSelectedLanguage(name);
    console.log("name",selectedLang)
    setState({
        ...set,
        language:name
    })
  };

  const handleCheckboxChange = (name) => {
    setSelectedCheckbox(name);
    setState({
        ...set,
        category:name
    })
  };
   
  const handleCheckboxPlatform = (name) => {
    SetselectedPlatform(name);
    setState({
        ...set,
        platforms:name
    })
  };
  const{name,description,language,platforms,category}=set;
   console.log("data",name,description,language,platforms,category)
   const token=localStorage.getItem('Token')
   async function handlesubmit(){
     try{
         const response=await axios.post("https://agencyapi.getmentore.com/groups/create",{
             name,
             description,
             category,
             language,
             platforms
         },{
            headers: {
                Authorization: `Bearer ${token}`, 
     }})
     } catch(error){

     }
   }
  return (
   <div>
           <Navbar/>
    <div className='w-11/12 mx-auto'>
   
        <h1 className="text-[#000000DE]  mt-10 font-roboto text-3xl font-semibold leading-[123.5%] tracking-tighter">Create Plan</h1>

         <div className=' mt-6 flex justify-between w-9/12 '>
                  {/*left part*/}
                <div className=' mt-4 flex flex-col gap-3'>
                    <p className='text-[#6B8DE6]'>Basic Details</p>
                    <p>Product Detail</p>
                    <p>Campaign type</p>
                </div>

                {/*right part*/}
                <div className=' shadow-xl p-3'>
                <fieldset className=" p-[7px] border-slate-300">
                    <legend className="text-lg text-slate-400">Plan Name</legend>
                    <input
                        placeholder="XYZ"
                        onChange={(event)=>{
                             setState({
                                ...set,
                                name:event.target.value
                             })
                        }}
                        className='border-none bg-slate-100 p-1 w-[28rem] outline-none'
                    />
                </fieldset>

                    {/*description*/}
                    <fieldset className="border ">
                                        <legend className="text-sm  text-slate-500 px-3">Plan description</legend>
                                        <textarea onChange={(event)=>{
                                            setState({
                                                ...set,
                                                description:event.target.value
                                            })
                                        }}
                                        placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. " className=' p-2 px-2 border-none border border-slate-300 w-[28rem] h-32 outline-none'
                                        />
                    </fieldset>

                    {/*plan category*/}
                    <fieldset className=' mt-6'>
                        
                    <p className=' text-slate-600'>Plan Category</p>
                        <div className=' mt-2'>
                            <input type="checkbox" id="" name="Autos"  checked={selectedCheckbox === 'Autos'}
                                onChange={() => handleCheckboxChange('Autos')} />
                            <label for="Autos">Autos & Vehicles</label>
                        </div>

                        <div className=' flex gap-1 mt-3'>
                            <input type="checkbox"  name="Animation" checked={selectedCheckbox === 'Animation'}
                                        onChange={() => handleCheckboxChange('Animation')} />
                            <label for="Animation">Animation</label>
                        </div>

                        <div className=' flex gap-1 mt-3'>
                            <input type="checkbox"  name="Agriculture & Allied Sectors" checked={selectedCheckbox === 'Agriculture & Allied Sectors'}
                                        onChange={() => handleCheckboxChange('Agriculture & Allied Sectors')}   />
                            <label for="Agriculture & Allied Sectors">Agriculture & Allied Sectors</label>
                        </div>

                        <div className=' flex gap-1 mt-3'>
                            <input type="checkbox"  name="Arts & Craft" checked={selectedCheckbox === 'Arts & Craft'}
                                        onChange={() => handleCheckboxChange('Arts & Craft')} />
                            <label for="Arts & Craft">Arts & Craft</label>
                        </div>

                        <div className=' flex gap-1 mt-3'>
                            <input type="checkbox"  name="Beauty" checked={selectedCheckbox === 'Beauty'}
                                        onChange={() => handleCheckboxChange('Beauty')}/>
                            <label for="Beauty">Beauty</label>
                        </div>

                        <div className=' flex gap-1 mt-3'>
                            <input type="checkbox"  name="Blogs and Travel" checked={selectedCheckbox === 'Blogs and Travel'}
                                        onChange={() => handleCheckboxChange('Blogs and Travel')}/>
                            <label for="Blogs and Travel">Blogs and Travel</label>
                        </div>

                </fieldset>

                    {/*platform*/}
                    <h1 className=' mt-5 text-slate-400'>PlatForm</h1>
                    <div className=' flex gap-5 items-center'>
                            <div className=' flex gap-1 mt-2'>
                                <input  type='checkbox' name='instagram'  checked={selectedplatform === 'Instagram'}
                                onChange={() => handleCheckboxPlatform('Instagram')}/>
                                <label  for='instagram'>Instagram</label>
                                </div>

                                <div  className=' flex gap-1 mt-2'>
                                <input  type='checkbox' name='Facebook'  checked={selectedplatform === 'FaceBook'}
                                onChange={() => handleCheckboxPlatform('FaceBook')}/>
                                    <label  for='Facebook'>Facebook</label>
                                </div>
                                
                                <div  className=' flex gap-1 mt-2'>                                    
                                <input  type='checkbox' name='YouTube' checked={selectedplatform === 'Youtube'}
                                onChange={() => handleCheckboxPlatform('Youtube')}/>
                                <label  for='YouTube'>YouTube</label>
                                </div>

                    </div>
                    {/*influencer language*/}
                    <h1 className=' mt-4 text-slate-400'>Influencer Language</h1>
                    <div className=' flex gap-4 mt-3'>
                        <input  type='checkbox' name='Hindi'  checked={selectedLang === 'Hindi'}
                                onChange={() => handleLanguageChange('Hindi')}/>
                        <label  for='Hindi'>Hindi</label>

                        <input  type='checkbox' name='English'  checked={selectedLang === 'English'}
                                onChange={() => handleLanguageChange('English')}/>
                        <label  for='English'>English</label>
                    </div>   

                    <div className=' mt-[10rem] flex justify-end w-[500px]'>
                    <button onClick={handlesubmit}  type="button" className="  rounded-xl ml-12 text-white bg-[#6B8DE6]  focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Save
                    </button>
                    </div> 
                </div>
         </div>
    </div>
   </div>
  )
}

export default CreatePlan