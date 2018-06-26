import React from 'react';

import {
    VerticalBarSeries,
    FlexibleWidthXYPlot,
    HorizontalGridLines,
    XAxis,
    YAxis
} from 'react-vis';

const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 0},
    {x: 3, y: 0},
    {x: 4, y: 0},
    {x: 5, y: 0},
    {x: 6, y: 0},
    {x: 7, y: 0},
    {x: 8, y: 0}
];

const defaultProps = {
    margin: {top: 10, left: 10, right: 10, bottom: 10}
};

const FlexibleCharts = ({height, width}) => (
    <div>
        <div className="flexible-width" style={{width: '100%', height: '100%', border: '1px solid #ccc'}}>
            <FlexibleWidthXYPlot {...defaultProps} height={460}>
                    <HorizontalGridLines />
                    <VerticalBarSeries data={data} color="tomato"/>
                    <XAxis title="round" />
                    <YAxis title="value"/>
            </FlexibleWidthXYPlot>
        </div>
    </div>
);

export default FlexibleCharts