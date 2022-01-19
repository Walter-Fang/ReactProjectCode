import { Bar, } from 'react-chartjs-2';
import { csv } from 'd3'
import {useEffect,useState} from 'react'


function ChartJs(props){

    const [chartData, setChartData] = useState([])
    useEffect(()=>{
        csv('../static/data.csv').then(data =>{
            // console.log(data)
            setChartData(data)
        })


    },[])
    // console.log(chartData)

    const area = []
    const properties_returned_k = []
    const lpt_collected_m = []
    chartData.map((item) =>{
        return (
            area.push(item['local_authority']),
            properties_returned_k.push(item['properties_returned_k']),
            lpt_collected_m.push(item['lpt_collected_€m'])
        )
    })

    return (
        <>
            <Bar
                data={{
                    title:'hello',
                    labels:area,
                    datasets: [
                        {
                            label: 'properties_returned_k',
                            data: properties_returned_k,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'lpt_collected_€m',
                            data: lpt_collected_m,
                            backgroundColor: 'black',
                            borderColor: 'white',
                            borderWidth: 1
                        }
                    ]
                }}
                height={200}
                width={300}
                options={{
                    maintainAspectRatio:false,
                    plugins: {
                        title:{
                            display:true,
                            text: 'Ireland Property Tax (LPT) statistics (October 2019)',
                            font:{
                                size:25
                            }
                        }
                    }
                }}
            />
        </>
    )
}

export default ChartJs