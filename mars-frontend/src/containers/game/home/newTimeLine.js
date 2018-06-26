import React from 'react';

import {
    VerticalBarSeries,
    FlexibleWidthXYPlot,
    HorizontalGridLines,
    XAxis,
    YAxis
} from 'react-vis';

class FlexibleCharts extends React.Component{
    render() {
        return(
            <div>
                <div className="flexible-width" style={{width: '100%', height: '100%', border: '1px solid #ccc'}}>
                    <FlexibleWidthXYPlot {...defaultProps} height={460}>
                        <HorizontalGridLines />
                        <VerticalBarSeries data={this.props.data} color="tomato"/>
                        <XAxis title="round" />
                        <YAxis title="value"/>
                    </FlexibleWidthXYPlot>
                </div>
            </div>
        )
    }
}

const defaultProps = {
    margin: {top: 10, left: 10, right: 10, bottom: 10}
};




export default FlexibleCharts