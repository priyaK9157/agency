import React, { useState, useEffect } from 'react';
import { FaSearch, FaRegCopy } from 'react-icons/fa';
import Navbar from '../common/Navbar';
import user from '../../asset/user.png';
import EchOnboard from '../Influencer/TABS/EchOnboard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



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