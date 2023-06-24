import './Dashboard.css';
import { useEffect , useState } from 'react';
import axios from 'axios';

import {BsTags} from 'react-icons/bs';
import {PiUserSwitchBold} from 'react-icons/pi';
import {FiSettings} from 'react-icons/fi';
import {AiOutlineSchedule} from 'react-icons/ai';
import {RiPieChartLine} from 'react-icons/ri';
import {AiOutlineLike} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {PiDownload} from 'react-icons/pi';

import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Chart from '../Components/Chart';
import Footer from '../Components/Footer';

export default function Dashboard() {
  const data = [
    {
      text : "Dashboard",
      fontSize : 18,
      img : <RiPieChartLine/>
    },
    {
      text : "Transactions",
      fontSize : 18,
      img : <BsTags/>
    },
    {
      text : "Schedules",
      fontSize : 18,
      img : <AiOutlineSchedule/>
    },
    {
      text : "Users",
      fontSize : 18,
      img : <PiUserSwitchBold/>
    },
    {
      text : "Settings",
      fontSize : 18,
      img : <FiSettings/>
    },
  ]

  const cardData = [
    { 
      color : "rgba(221,239,224,1)",
      text : "Total Revenue",
      icon : <PiDownload/>,
      value : "$2,129,430"
    },
    { 
      color : "rgba(244,236,221,1)",
      text : "Total Transactions",
      icon : <BsTags/>,
      value : "1,520"
    },
    { 
      color : "rgba(239,218,218,1)",
      text : "Total Likes",
      icon : <AiOutlineLike/>,
      value : "9,721"
    },
    { 
      color : "rgba(222,224,239,1)",
      text : "Total Users",
      icon : <FiUsers/>,
      value : "892"
    }
  ]

  const [chartData , setchartData] = useState([]);

    const getData = async() => {
      const result = await axios.get('https://api.waqi.info/feed/shanghai/?token=demo');;
      let temp = result.data.data.iaqi;
      let data1 = [];
      for(let key in temp){
        if(temp.hasOwnProperty(key)){
          let value = temp[key];
          data1.push({gases : key , concentration : value.v});
        }
      }
      setchartData(data1);
    }

    useEffect(() => {
        getData();
    } , [])

  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='side-bar'><SideBar data={data}/></div>
        <div className='right-bar'>
          <div><Navbar/></div>
          <div className='cards'><Card data={cardData}/></div>
          <div className='chart'><Chart data={chartData}/></div>
          <div className='footer-dashboard'><Footer chartData={chartData}/></div>
        </div>
      </div>
    </div>
  )
}
