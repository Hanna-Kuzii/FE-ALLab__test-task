import "./App.css";
import {List} from "./components/Jobs_list/Jobs_list";
import { useEffect, useState } from "react";
import getData from "./getData";
import { Detected } from "./components/Job_detected/Job_detected";


export const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData().then((result) => {
      console.log(result);
      setData({ data: result });
    });
  }, []);
  
  return (
    <div className="page">
      <Detected />
      {/* {data?.data ? (
        <div className="page__list">
          <List jobs={data?.data}/>
          <p>{data?.data[9]?.address}</p>
        </div>
      ) : (
        <h1>Please wait...</h1>
      )} */}
    </div>
  );
}
