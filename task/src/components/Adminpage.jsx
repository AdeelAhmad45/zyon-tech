import { useAuth0 } from '@auth0/auth0-react';
import { Pie, Line } from '@ant-design/plots';
import { Button } from 'antd';
import data from "./data.json"
import { FaUsers } from "react-icons/fa";
import { isEqual } from 'lodash';
import React, { memo, useState } from 'react';
import { createRoot } from 'react-dom';
import DashboardTable from './DashboardTable';


const DemoPie = memo(
  ({ data, onReady }) => {
    var config = {
      data,
      angleField: 'value',
      colorField: 'type',
      label: {
        text: 'value',
        position: 'outside',
      },
      onReady,
    };
    return <Pie {...config} />;
  },
  (pre, next) => {
    return isEqual(pre?.data, next?.data);
  },
);

function Adminpage() {

  const { user, logout, isAuthenticated } = useAuth0();
    console.log(user);
     const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      type: 'Registered User',
      value: 27,
    },
    {
      type: 'Enrolled User',
      value: 7,
    },
    
    {
      type: 'Others',
      value: 40,
    },
  ]);
    
    const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleLogin = () => {
    loginWithRedirect({ appState: { returnTo: '/admin' } }); // set return target
  };

  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
      // value: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
    },
    xField: (d) => new Date(d.year),
    yField: 'value',
    sizeField: 'value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: 'category',
  };

//   return (
//     <div className="pt-5  flex flex-col flex-wrap gap-10 text-black">
//      <h1 className="text-center mt-4 pt-5 text-4xl font-semibold text-[#2525AD]">
//           Admin Dashboard
//         </h1>
//        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-auto mt-5 mx-10">
//         <div className="flex flex-col items-center gap-10 p-5 shadow-[0_0_10px_#2525AD] rounded-md">
//           <div className="w-80 h-80">
//               <span>{count}</span>
//       <DemoPie  data={data} onReady={({ chart }) => {}} />
//           </div>


// <div className="grid grid-cols-2 gap-5 text-black">
//             <div className="flex items-center justify-center gap-5 p-5 rounded-md shadow-[0_0_10px_#2525AD]">
//               <div className="flex flex-col items-center">
//                 <p className="font-semibold">Registered User</p>
//                 <h3 className="font-4xl font-bold">
//                   {data[0].value}
//                 </h3>
//               </div>
//               <FaUsers className="text-5xl text-[#2525AD]" />
//             </div>

//             <div className="flex items-center justify-center gap-5 p-5 rounded-md shadow-[0_0_10px_#2525AD]">
//               <div className="flex flex-col items-center">
//                 <p className="font-semibold">Enrolled User</p>
//                 <h3 className="font-4xl font-bold">
//                   {data[1].value}
//                 </h3>
//               </div>
//               <FaUsers className="text-5xl text-orange-500" />
//             </div>
//           </div>

          
//         </div>
//         <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-md shadow-[0_0_10px_#2525AD]">
//             <div className="h-80 w-full relative">
//              <Line {...config} className="absolute bottom-0 h-80 w-full" />
//           </div>
//           </div>
//        </div>
    
//     <DashboardTable />
//     </div>
//   )
return (
  <div className="pt-5 px-4 flex flex-col flex-wrap gap-10 text-black w-full">
  <div className='flex justify-around'>
  <h1 className="text-center ml-3 mt-4 pt-5 text-3xl sm:text-4xl font-semibold text-black">
       {isAuthenticated && <h2>Hello {user.name}</h2>}
     
    </h1> 
    
<button onClick={handleLogout} className='px-5 w-[100px] py-2 rounded-md bg-[#2525AD] hover:bg-red-600 text-white font-semibold shadow-md transition duration-300'>Logout</button>
  </div>
    <h1 className="text-center ml-3 mt-4 pt-5 text-3xl sm:text-4xl font-semibold text-[#2525AD]">
       Admin Dashboard
     
    </h1>
    

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-auto w-full max-w-6xl">
      
      <div className="flex flex-col items-center gap-10 p-5 shadow-[0_0_10px_#2525AD] rounded-md w-full min-w-0">
        <div className="w-full h-64 sm:h-80">
          <span>{count}</span>
          <DemoPie data={data} onReady={() => {}} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full text-black">
          <div className="flex items-center justify-between sm:justify-center gap-5 p-5 rounded-md shadow-[0_0_10px_#2525AD] w-full">
            <div className="flex flex-col items-start sm:items-center">
              <p className="font-semibold">Registered User</p>
              <h3 className="text-2xl sm:text-3xl font-bold">{data[0].value}</h3>
            </div>
            <FaUsers className="text-5xl text-[#2525AD]" />
          </div>

          <div className="flex items-center justify-between sm:justify-center gap-5 p-5 rounded-md shadow-[0_0_10px_#2525AD] w-full">
            <div className="flex flex-col items-start sm:items-center">
              <p className="font-semibold">Enrolled User</p>
              <h3 className="text-2xl sm:text-3xl font-bold">{data[1].value}</h3>
            </div>
            <FaUsers className="text-5xl text-orange-500" />
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-md shadow-[0_0_10px_#2525AD] w-full min-w-0">
        <div className="h-64 sm:h-80 w-full relative">
          <Line {...config} className="absolute bottom-0 h-full w-full" />
        </div>
      </div>
    </div>

    <div className="w-full max-w-6xl mx-auto">
      <DashboardTable />
    </div>
  </div>
)

}

export default Adminpage