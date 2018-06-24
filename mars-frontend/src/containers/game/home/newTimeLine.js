import React from 'react';

import {
    VerticalBarSeries,
    FlexibleWidthXYPlot,
    FlexibleHeightXYPlot,
    FlexibleXYPlot
} from 'react-vis';

const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2}
];

const defaultProps = {
    margin: {top: 10, left: 10, right: 10, bottom: 10}
};

const FlexibleCharts = ({height, width}) => (
    <div>
        <div className="flexible-width" style={{width: '100%', height: '100%', border: '1px solid #ccc'}}>
            <FlexibleWidthXYPlot {...defaultProps} height={460}>
                <VerticalBarSeries data={data} />
            </FlexibleWidthXYPlot>
        </div>
    </div>
);

export default FlexibleCharts