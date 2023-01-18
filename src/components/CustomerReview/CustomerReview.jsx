import React from 'react'
import Chart from 'react-apexcharts'

const CustomerReview = () => {
    const data = {
        series: [
            {
                name: "Review",
                data: [10, 50, 30, 90, 40, 120, 100],
            }
        ],
        options: {
            chart: {
                type: "area",
                height: 'auto'
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            },
            fill: {
                colors: ["#fff"],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                colors: ["white"]
            },
            tooltip: {
                x: {
                    format: "dd/MM/YY HH:mm"
                }
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2022-12-31T00:00:00:000Z",
                    "2022-12-31T01:30:00:000Z",
                    "2022-12-31T02:30:00:000Z",
                    "2022-12-31T03:30:00:000Z",
                    "2022-12-31T04:30:00:000Z",
                    "2022-12-31T05:30:00:000Z",
                    "2022-12-31T06:30:00:000Z",
                ]
            },
            yaxis: {
                show: false
            },
            toolbar: {
                show: false
            }
        }
    }

    return (
        <div className='CustomerReview'>
            <Chart series={data.series} options={data.options} type='area' />
        </div>
    )
}

export default CustomerReview