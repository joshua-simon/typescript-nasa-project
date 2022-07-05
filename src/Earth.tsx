import React, { useState, useEffect, FC } from "react";
import axios, { AxiosResponse } from "axios";

const Earth = (): JSX.Element => {

  interface IEarth {
    date: string;
    id: string;
    resource: {
      dataset: string;
      planet: string;
    };
    service_version: string;
    url: string;
  }

  interface ICoordinates {
    latitude: string,
    longitude:string
  }

  const [data, setData] = useState<IEarth>();
  const [{ latitude, longitude }, setCoordinates] = useState<ICoordinates>({
    latitude: "",
    longitude: "",
  });

  const url = `https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=2018-01-01&&dim=0.10&api_key=9Gu6cwgUJreObBRGtdgrrcFBNRpQzuo4NJjiuPKc`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    setCoordinates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getData = (): void => {
    axios.get(url).then((res: AxiosResponse) => {
      setData(res.data);
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="earth">
      <h1>Earth landsat imagery</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Enter latitude
          <input type="text" name="latitude" onChange={handleChange} />
        </label>
        <label>
          {" "}
          Enter longitude
          <input type="text" name="longitude" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Image date: {data?.date}</h2>
      <img src={data?.url} />
    </div>
  );
};

export default Earth;
