import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class LineChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: props.height,
      options: {
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'May', 'June',]
        },
        // fill: {
        //   type: 'gradient',
        //   gradient: {
        //     shade: 'light',
        //     gradientToColors: [ '#ff6b6b'],
        //     shadeIntensity: 1,
        //     type: 'horizontal',
        //     opacityFrom: 1,
        //     opacityTo: 1,
        //     stops: [0, 100, 100, 100]
        //   },
        // },
      },
      series: [{
        name: "People Attended",
        data: [30, 40, 25, 50, 49]
      }],
    }
  }

  render() {
    return (
      <div className="line">
        <Chart options={this.state.options} series={this.state.series} type="line" height={this.state.height} />
      </div>
    );
  }
}

export default LineChart;