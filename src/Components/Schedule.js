import './Schedule.css'

export default function Schedule({data}) {
    const renderedData = data.map(listItem => {
    return <div style={{"display" : "flex" , "margin-bottom" : "15px"}}>
            <div style={{"border-left" : `6px solid ${listItem.color}`}}></div>
            <div className="schedule-list">
                <div style={{"color" : "#666"}}><b>{listItem.heading}</b></div>
                <div>{listItem.time}</div>
                <div>{listItem.place}</div>
            </div>
            </div>
  })
  return (
    <div>{renderedData}</div>
  )
}
