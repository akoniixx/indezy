import React, { Component, Fragment } from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import {nameRef,point,round} from 'Constants/firebase';
import firebase from 'firebase';
import ChartBoxLine from 'Components/chartBox';
class BarChart extends Component {
    constructor(props){
        super(props);
        this.getFirebaseLabel = this.getFirebaseLabel.bind(this)
        this.state = {
            name: "1234",
            point: "Test",
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[
                    {
                        label:'Population',
                        fill: false,
                        borderColor: 'rgba(241, 169, 160, 1)',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
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
            },
            dataChartaaa:{},
            labelChange:{}
        }
        
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right'
    }

    componentDidMount()
    {
        nameRef.on('value', snap => {
            this.setState({
                name:snap.val()
            });
        });
        point.on('value', snap => {
            this.setState({
                point:snap.val()
            });
        });
        round.on('value', snap => {
            this.setState({
                round:snap.val()
            });
        });
        let data = [
            1,
            10,
            100,
            1000,
            10000,
          ];
        let label = 'test0';
        this.setState({
            dataChartaaa : data,
            labelChange : label
        });
    }

    getFirebaseLabel(){
        
    }

    render(){
        this.state.chartData.datasets[0].data = this.state.dataChartaaa;
        this.state.chartData.datasets[0].label = this.state.labelChange;
        // console.log('data',this.state.chartData.datasets[0].data);
        // console.log('aaa', this.state.dataChartaaa);
        // console.log('alldata', this.state.chartData);
         console.log("name", this.state.name, "point", this.state.point)
         console.log("round", this.state.round)
        return(
            <Fragment>
                    <Line
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:this.props.displayTitle,
                                text:'Largest Cities In Massachusetts',
                                fontSize:40
                            },
                            legend:{
                                display:this.props.displayLegend,
                                position:this.props.legendPosition
                            }
                        }}
                    />
            </Fragment>
        )
      }
}

export default BarChart;
