import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
const Left = () => {


  const [data, setdata] = useState([]); // Updated to an array
  const navigate =useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [popularityFilters, setPopularityFilters] = useState({
    nano: false,
    micro: false,
    macro: false,
    custom: false,
  });
  const [sliderValue, setSliderValue] = useState(0);
  const [campaignPreferences, setCampaignPreferences] = useState({
    barter: false,
    paid: false,
  });
  const [platformFilters, setPlatformFilters] = useState({
    youtube: false,
    instagram: false,
  });
  const [engagementRate, setEngagementRate] = useState(0);
  const [rate, setRate] = useState(0);
  const [categories, setCategories] = useState('');
  const [filteredData, setFilteredData] = useState([]);

    const handleSliderChange = (event) => {
        const value = parseInt(event.target.value);
        setSliderValue(value);
        filterData();
      };

      const filterData = () => {
        const filtered = data
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .filter((item) => {
            if (
              popularityFilters.nano &&
              item.popularity >= 1000 &&
              item.popularity <= 9000
            ) {
              return true;
            }
            if (
              popularityFilters.micro &&
              item.popularity >= 100000 &&
              item.popularity <= 999000
            ) {
              return true;
            }
            if (
              popularityFilters.macro &&
              item.popularity >= 1000000 &&
              item.popularity <= 10000000
              ) {
                return true;
              }
              return false;
          })
          .filter((item) => {
            if (campaignPreferences.barter ) {
              return true;
            }
            if (campaignPreferences.paid) {
              return true;
            }
            return false;
          })
          .filter((item) => {
            if (platformFilters.youtube ) {
              return true;
            }
            if (platformFilters.instagram ) {
              return true;
            }
            return false;
          })
          .filter((item) => item.engagementRate >= engagementRate)
          .filter((item) => item.rate >= rate)
          .filter((item) => item.categories.includes(categories));
    
        setFilteredData(filtered);
      };
  return (
    <div className='shadow-md'>
                    <div className='ml-16 p-4'>
                        <p className=' text-black font-semibold uppercase'>Popularity</p>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Nano(1k-9k)</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Micro(100k-999k)</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Macro(1M-10M)</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Custom</label>
                        </div>
                        <div className="slider-container mt-4">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                className="ml-2"
                            />
                            <div className="slider-values text-sm">
                                <span className="min-value">0</span>
                                <span className="max-value ml-24">10M</span>
                            </div>
                        </div>
                    </div>
                    <div className='ml-16 p-4'>
                        <p className=' text-black font-semibold uppercase'>Campaign Preference</p>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Barter</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Paid</label>
                        </div>
                    </div>
                    <div className='ml-16 p-4 '>
                        <p className=' text-black font-semibold uppercase'>Platform</p>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">YouTube</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Instagram</label>
                        </div>
                    </div>
                    <div className='ml-16 p-4'>
                        <p className=' text-black font-semibold uppercase'>Engagement rate</p>
                        <div className="slider-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                className="ml-2"
                            />
                            <div className="slider-values text-sm">
                                <span className="min-value">0</span>
                                <span className="max-value ml-24">10M</span>
                            </div>
                        </div>
                    </div>
                    <div className='ml-16 p-4'>
                        <p className=' text-black font-semibold uppercase'>Rate</p>
                        <div className="slider-container">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                className="ml-2"
                            />
                            <div className="slider-values text-sm">
                                <span className="min-value">0</span>
                                <span className="max-value ml-24">10M</span>
                            </div>
                        </div>
                    </div>
                    <div className='ml-16 p-4 '>
                        <p className=' text-black font-semibold uppercase'>Categories</p>
                        <div className="mt-4 w-full">
                            <fieldset className='border'>
                                <legend className="text-sm font-semibold">Search Category</legend>
                                <input placeholder='Value' type="text"/>
                            </fieldset>
                        </div>
                        <div className="flex items-center space-x-2 p-1 mt-4">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Autos & Vehicles</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Animation</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Agriculture & Allied Sectors</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Arts & Craft</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Beauty</label>
                        </div>
                        <div className="flex items-center space-x-2 p-1">
                            <input type="checkbox" id="active" />
                            <label htmlFor="active">Blogs and Travel</label>
                        </div>
                    </div>
                </div>
  )
}

export default Left

