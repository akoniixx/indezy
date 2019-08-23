import React, { Component, Fragment } from 'react';
import LineChart from './charts/line';





class chart extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets:[
          {
            label:'value',
            fill: false,
            borderColor: 'rgba(241, 169, 160, 1)',
            data:[
              617594,
              381045,
              553060,
              406519,
              205162,
              395072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <Fragment>
        <LineChart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
        </Fragment>
    );
  }
}

export default chart;
