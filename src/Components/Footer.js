import  './Footer.css';
import Schedule from './Schedule';
import Piechart from './Piechart';
import { Pie } from 'recharts';

export default function Footer({chartData}) {
  const data = [
    {
        color : "#9BDD7C",
        heading : "Meeting with suppliers from Kuta Bali",
        time : "14:00-15:00",
        place : "at Sunset Road, Kuta Bali"
    },
    {
        color : "#6972C3",
        heading : "Check operation at Giga Factory 1",
        time : "18:00-21:00",
        place : "at Central Jakarta"
    }
  ]
  return (
    <div className='footer'>
        <div className='footer-section'>
            <div className='Footer-content'>
                <div className='right-footer-heading'>
                    <div><h3>Top Products</h3></div>
                    <div><p style={{"fontSize" : "12px" , "color" : "rgba(133,133,133,1)"}}>See All</p></div>
                </div>
                <div style={{"height" : "100%"}}>
                    <Piechart data={chartData}/>
                </div>
            </div>
        </div>
        <div className='footer-section'>
            <div className='Footer-content'>
                <div className='right-footer-heading'>
                    <div><h3>Today's schedule</h3></div>
                    <div><p style={{"fontSize" : "12px" , "color" : "rgba(133,133,133,1)"}}>See All</p></div>
                </div>
                <div>
                    <div>
                        <Schedule data={data}/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}
