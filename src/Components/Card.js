import './Card.css';

export default function Card({data}) {
  const renderedData = data.map(card => {
    return <div className="fixHeight" style={{"backgroundColor" : `${card.color}`}}>
        <div style={{"flex" : "4" , "padding-top" : "25%" , "padding-left" : "10%"}}> 
            <div style={{"fontSize" : "1rem"}}>{card.text}</div>
            <div style={{"fontSize" : "1.5rem"}}>{card.value}</div>
        </div>
        <div style={{"flex" : "1" , "padding-top" : "10%" , "fontSize" : "1.5rem" , "color" : "black"}}>{card.icon}</div>
    </div>
  })
  return (
    <div className='cardSection'>
        {renderedData}
    </div>
  )
}
