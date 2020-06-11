import React, { useEffect, useState } from "react";

import "./App.css";
import Cards from "./Components/Card/Card";
import Graph from "./Components/Graph/Graph";
import CityPicker from "./Components/CityPicker/CityPicker";
import Header from "./Components/Header/Header"
import SideCard from "./Components/SideCard/SideCard"

import { fetchData, province } from "./api/";
import { Grid } from "@material-ui/core";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const { data } = await fetchData();
      setData(data);
    }
    getData();
  }, []);

  const handleCity = async (city) => {
    if (city == "Semua") {
      try {
        const { data } = await fetchData();
        setData(data);
      } catch (error) {
        return error;
      }
    } else {
      try {
        const { data } = await province();
        const proiviceData = data.find((e) => e.provinsi == city);
        const newObjData = {
          jumlahKasus: proiviceData.kasusPosi,
          sembuh: proiviceData.kasusSemb,
          meninggal: proiviceData.kasusMeni,
        };
        setData(newObjData);
      } catch (error) {
        return error;
      }
    }
  };

  console.log(data);
  return (
    <div className="App">
      <Header/>
      <Grid container style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
      <Cards data={data} />
      <CityPicker handleCity={handleCity} />
      <Graph provinsi={data} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SideCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
