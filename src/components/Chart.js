import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart = ({data, color, units}) => {
    const getAverage = () => {
        const result = data.reduce((res, val) => res+val);
        return Math.floor(result/data.length);
    }


    return(
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{getAverage()} {units}</div>
        </div>
    )
}

export default Chart;