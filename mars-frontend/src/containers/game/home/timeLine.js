import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    FlexibleXYPlot,
    FlexibleWidthXYPlot,
    FlexibleHeightXYPlot
} from 'react-vis';
import 'react-vis/dist/style.css';

export default class TimelineCon extends React.Component {

    state = {
        useCanvas: false
    };

    render() {
        const {useCanvas} = this.state;
        const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
        const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

        return (
            <div>
                <XYPlot
                    xType="ordinal"
                    width={500}
                    height={300}
                    xDistance={100}
                >

                    {/* <VerticalGridLines /> */}
                    {/* <HorizontalGridLines /> */}
                    <XAxis />
                    <YAxis />
                    <BarSeries
                        className="vertical-bar-series-example"
                        data={[
                            {x: 'Turn 1', y: 10},
                            {x: 'Turn 2', y: 5},
                            {x: 'Turn 3', y: 15},
                            {x: 'Turn 4', y: 10},
                            {x: 'Turn 5', y: 5},
                            {x: 'Turn 6', y: 15},
                            {x: 'Turn 7', y: 10},
                            {x: 'Turn 8', y: 5},
                            {x: 'Turn 9', y: 15},
                            {x: 'Turn 10', y: 15}
                        ]}/>
                </XYPlot>
                
            </div>
        );
    }
}