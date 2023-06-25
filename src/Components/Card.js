import './Card.css';

export default function Card({data}) {
  const renderedData = data.map(card => {
    return <div key={card.text} className="fixHeight" style={{"backgroundColor" : `${card.color}`}}>
        <div style={{"flex" : "4" , "paddingTop" : "25%" , "paddingLeft" : "10%"}}> 
            <div style={{"fontSize" : "1rem"}}>{card.text}</div>
            <div style={{"fontSize" : "1.5rem" , "fontWeight" : "700"}}>{card.value}</div>
        </div>
        <div style={{"flex" : "1" , "paddingTop" : "10%" , "fontSize" : "1.5rem" , "color" : "black"}}>{card.icon}</div>
    </div>
  })
  return (
    <div className='cardSection'>
        {renderedData}
    </div>
  )
}
