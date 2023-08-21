import React from "react";
import axios from "axios";
import { LineWave } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in new york is ${response.data.main.temp}`);
  }
  let apiKey = "6cbe98b15c1974d096f69842696bcf5b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <LineWave
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
}
