import React from 'react';
import ApexChart from "react-apexcharts";
import './index.module.css'
import PropTypes from 'prop-types';

const Chart = props => {
    return (
        <ApexChart
            options={props.options}
            series={props.series}
            type={props.type}
            width={props.width}
        />
    );
};

Chart.defaultProps = {
    options:[],
    series:[],
    type:'bar',
    width:'100%'
}

Chart.propTypes = {
    options:PropTypes.array,
    series:PropTypes.array,
    type:PropTypes.string,
    width:PropTypes.string
};

export default Chart;
