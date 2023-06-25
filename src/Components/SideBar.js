import ButtonSideBar from "./ButtonSideBar"
import './SideBar.css';

export default function SideBar({data}) {
  const renderedData = data.map(btn => {
    return <div key={btn.text} className="pad"><ButtonSideBar img={btn.img} text = {btn.text} fontSize = {btn.fontSize}/></div>
  })


  return (
    <div className="SideBar">
        <div className="pad">
            <p style={{"fontSize" : "2rem"}}><b>Board.</b></p>
        </div>
        <div>
            {renderedData}
        </div>
        <div className="padchange">
            <div style={{"padding" : "1px"}}><ButtonSideBar img="" text="Help" fontSize={14}/></div>
            <div style={{"marginTop" : "20px"}}><ButtonSideBar img = "" text="Contact Us" fontSize={14}/></div>
        </div>
    </div>
  )
}
