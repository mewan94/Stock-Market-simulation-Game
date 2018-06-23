import React from 'react';
import {
    XAxis,
    YAxis,
    HorizontalGridLines,
    FlexibleWidthXYPlot,
    LineSeries,
    DiscreteColorLegend
} from 'react-vis';
import 'react-vis/dist/style.css';

export default class TimelineCon extends React.Component {

    state = {
        lastDrawLocation: null,
        series: [
            {
                title: 'Sector 1',
                data: [
                    {x:0,y:10},
                    {x:1,y:9},
                    {x:2,y:5},
                    {x:3,y:4},
                    {x:4,y:1},
                    {x:5,y:9},
                    {x:6,y:7},
                    {x:7,y:3},
                    {x:8,y:7},
                    {x:9,y:6},
                ]
            },
            {
                title: 'Sector 2',
                data: [
                    {x:0,y:10},
                    {x:1,y:29},
                    {x:2,y:2},
                    {x:3,y:44},
                    {x:4,y:1},
                    {x:5,y:19},
                    {x:6,y:7},
                    {x:7,y:24},
                    {x:8,y:7},
                    {x:9,y:6},
                ]
            },
            {
                title: 'Sector 3',
                data: [
                    {x:0,y:10},
                    {x:1,y:5},
                    {x:2,y:9},
                    {x:3,y:154},
                    {x:4,y:10},
                    {x:5,y:39},
                    {x:6,y:45},
                    {x:7,y:22},
                    {x:8,y:3},
                    {x:9,y:7},
                ]
            },
        ]
    };

    render() {
        const {series, lastDrawLocation} = this.state;
        return (
            <div>
                <div className="example-with-click-me">
                    <div className="chart no-select">
                        <FlexibleWidthXYPlot
                            animation
                            xDomain={lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]}
                            height={300}>
                            <HorizontalGridLines />
                            <YAxis />
                            <XAxis />

                            {series.map(entry => (
                                <LineSeries
                                    key={entry.title}
                                    data={entry.data}
                                />
                            ))}

                        </FlexibleWidthXYPlot>
                    </div>
                </div>
            </div>
        );
    }
}