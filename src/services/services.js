import React from 'react';
import axios from 'axios';

export const GetNames = (props) => {
    const { baseUrl1, setData} = props;
    axios.get(baseUrl1).then((response) => {
      setData(response.data.cars);
      console.log("responsedetail3-->", response.data.cars);
    });
}
