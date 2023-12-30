import React, { useState, useEffect } from 'react';
import { FaSearch, FaRegCopy } from 'react-icons/fa';
import Navbar from '../common/Navbar';
import user from '../../asset/user.png';
import EchOnboard from '../Influencer/TABS/EchOnboard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {

    const item = [
        {
            name:"Jeremy Jane",
            img: user,
            Platform1 : "Instagram",
            Platform2 : "Youtube",
            Audience1: "Follower 1M",
            Audience2:"Subscriber 1M",
            Gender:"Male",
            EarnedAmount :"$800",
            Status : "Onboarded",
        },
        {
            name:"Jeremy Jane",
            img: user,
            Platform1 : "Instagram",
            Platform2 : "Youtube",
            Audience1: "Follower 1M",
            Audience2:"Subscriber 1M",
            Gender:"Male",
            EarnedAmount :"$800",
            Status : "Onboarded",
        }
    ]


  const [clickout, setClickout] = useState(0);
  const token = localStorage.getItem('Token');
  const [data, setdata] = useState([]); // Updated to an array
  const navigate = useNavigate();
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

  useEffect(() => {
    // Fetch data logic
    async function getInfluencerPlan() {
      try {
        const item = {
          filters: {
            name: "none"
          },
          page: 1,
          pageSize: 1
        };
        const response = await axios.post("https://agencyapi.getmentore.com", item, token);
        if (response) {
          setdata(response?.item?.results);
        }
      } catch (error) {
        console.log("error", error.message);
      }
    }

    getInfluencerPlan();
  }, [token]);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchValue(searchText);
    filterData();
  };

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    filterData();
  };

  const handlePopularityChange = (filter) => {
    setPopularityFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
    filterData();
  };

  const handleCampaignPreferenceChange = (preference) => {
    setCampaignPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preference]: !prevPreferences[preference],
    }));
    filterData();
  };

  const handlePlatformChange = (platform) => {
    setPlatformFilters((prevFilters) => ({
      ...prevFilters,
      [platform]: !prevFilters[platform],
    }));
    filterData();
  };

  const handleEngagementRateChange = (event) => {
    const value = parseInt(event.target.value);
    setEngagementRate(value);
    filterData();
  };

  const handleRateChange = (event) => {
    const value = parseInt(event.target.value);
    setRate(value);
    filterData();
  };

  const handleCategoriesChange = (event) => {
    const value = event.target.value;
    setCategories(value);
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
    <div>
      <Navbar />
      <div>
        <div className='flex justify-center gap-2 mt-4'>
          <button className='bg-[#1976D2] text-white rounded-full p-2'>Onboard</button>
          <button className='bg-[#E8E8E8] text-black rounded-full p-2'>Brand deal</button>
        </div>

        <div className='text-2xl font-bold ml-16'>Echio Onboarding</div>

        <div className='flex justify-center'>
          <input
            placeholder='search'
            className='border border-slate-300 w-[30%] rounded-md p-2 outline-none'
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>

        <div className='flex'>
                <div className='shadow-md'>
                    <div className='ml-16 p-4'>
                        <p>Popularity</p>
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
                        <p>Campaign Preference</p>
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
                        <p>Platform</p>
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
                        <p className='uppercase'>Engagement rate</p>
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
                        <p className='uppercase'>Rate</p>
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
                        <p>Categories</p>
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


          <div>
            <div className='text-sm font-bold'>Sort by</div>

            <div className='flex gap-72'>
              <div className='flex gap-2 p-3'>
                <button
                  className={`px-2 rounded-3xl p-1 text-sm ${clickout === 0 ? 'bg-[#1976D2] text-white' : 'bg-[#00000014]'}`}
                  onClick={() => setClickout(0)}
                >
                  High to Low
                </button>
                <button
                  className={`px-2 rounded-3xl p-1 text-sm 
                            ${clickout === 1 ? 'bg-[#1976D2] text-white' : 'bg-[#00000014]'}`}
                  onClick={() => setClickout(1)}
                >
                  Low to high 
                </button>
                <button
                  className={`px-2 rounded-3xl p-1 text-sm 
                            ${clickout === 2 ? 'bg-[#1976D2] text-white' : 'bg-[#00000014]'}`}
                  onClick={() => setClickout(2)}
                >
                  Newest
                </button>
                <button
                  className={`px-2 rounded-3xl p-1 text-sm 
                            ${clickout === 3 ? 'bg-[#1976D2] text-white' : 'bg-[#00000014]'}`}
                  onClick={() => setClickout(3)}
                >
                  Popular
                </button>
              </div>
              <div className='uppercase flex items-center text-[#6B8DE6] text-sm border border-[#6B8DE680] px-2 gap-1'> <FaRegCopy className='flex items-conter' />Influencer refer link</div>
            </div>

            <div className='flex gap-20 mt-3 bg-[#EBEBEB] p-2 font-semibold text-sm'>
              <p className='px-11'>Name</p>
              <p className='px-1'>Platform</p>
              <p className='px-4'>Audience</p>
              <p>Gender</p>
              <p className='px-3'>Earned Amount</p>
              <p>Status</p>
            </div>

            <div>
              {clickout === 0 ? (
                <EchOnboard data={item} />
              ) : clickout === 1 ? (
                <EchOnboard data={item} />
              ) : clickout === 2 ? (
                <EchOnboard data={item} />
              ) : clickout === 3 ? (
                <EchOnboard data={item} /> //use filtered data here
              ) : <EchOnboard data={item} />
              }
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
