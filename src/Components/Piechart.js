import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Piechart.css'

export default function Piechart({data}) {
    const chartData = data.slice(1 , 4);
    const COLORS = ['#98D89E', 'rgba(238,132,132,1)', 'rgba(246 , 220,125,1)'];
    const percentage = chartData.map(gas => {
        let sum = chartData[0].concentration + chartData[1].concentration + chartData[2].concentration; 
        return ((gas.concentration / sum )*100).toFixed(2);
    })

    const renderPercentage = percentage.map((num,index) => {
        return <div key={index} className='legend-content'>
                    <div style={{"display" : "flex" , "justifyContent" : "center" , "margin" : "0px 0px 5px 0px"}}>
                    <div style={{"backgroundColor" : `${COLORS[index]}` , "borderRadius" : "50%" , "height" : "8px" , "width" : "8px" , "margin" : "5px 3px 0px 0px"}}></div> 
                    <div style={{"fontSize" : "14px" , "textTransform" : "capitalize"}}><b>{chartData[index].gases}</b></div>
                    </div>
                    <div style={{"fontSize" : "12px"}}>{num}%</div>
                </div>
    })

    return (
    <div style={{"width" : "100%" , "height" : "100%"}} className='left-footer-content'>
        <div className='left-footer-section'>
            <ResponsiveContainer width="80%" height="80%">
            <PieChart width={400} height={400}>
            <Pie data={chartData} dataKey="concentration" outerRadius={60} fill="#8884d8">
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            </PieChart>
        </ResponsiveContainer>
        </div>
        <div className='left-footer-section'>{renderPercentage}</div>
    </div>
  )
}
