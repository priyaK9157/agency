import React from 'react';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import { Pie } from 'react-chartjs-2'; // Updated import statement
import Navbar from './common/Navbar';
import Frame19 from '../asset/Frame19.png';
import Frame20 from '../asset/Frame20.png';

const Home = () => {
  // Mock data for the pie chart
  const pieChartData = {
    labels: ['YouTube', 'Instagram', 'Facebook'],
    datasets: [
      {
        data: [60, 30, 10], // Adjust these values based on your data
        backgroundColor: ['#FF5733', '#33FF57', '#3366FF'], // You can customize the colors
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className='flex flex-col gap-6 justify-between mt-7'>
        {/* ... Your existing code ... */}
        <div>
          <p className='font-bold'>Active Influencers</p>
          <div>
            {/* ... Your existing code ... */}

            {/* Add the Pie chart component here */}
            <div className='mt-4'>
              <Pie data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
