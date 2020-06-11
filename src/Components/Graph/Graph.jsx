import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { dailyData } from "../../api";
import styles from "./Graph.module.css";

export default function Graph({ provinsi }) {
  const [DailyData, setDaily] = useState(null);
 
  useEffect(() => {
    async function getData() {
      const { data } = await dailyData();
      setDaily(data);
    }
    getData();
  }, []);

  if (!DailyData || provinsi == null) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <div className={styles.graph}>
        {
        provinsi.perawatan ? 
        <Line
          data={{
            labels: DailyData.map((e) => new Date(e.tanggal).toDateString()),
            datasets: [
              {
                label: "Jumlah Kasus ",
                fill: false,
                lineTension: 0.2,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "#740c5f",
                borderDashOffset: 0.1,
                borderJoinStyle: "miter",
                pointBackgroundColor: "#fff",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#740c5f",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 0.1,
                pointRadius: 0,
                pointHitRadius: 10,
                data: DailyData.map((e) => e.jumlahKasusKumulatif),
              },
              {
                label: "Jumlah Pasien Meninggal ",
                fill: false,
                lineTension: 0.2,
                backgroundColor: "#ff0029",
                borderColor: "#ff0029",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.1,
                borderJoinStyle: "miter",
                pointBorderColor: "#ff0029",
                pointBackgroundColor: "#fff",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#ff0029",
                pointHoverBorderColor: "#ff0029",
                pointHoverBorderWidth: 0.1,
                pointRadius: 0,
                pointHitRadius: 10,
                data: DailyData.map((e) => e.jumlahPasienMeninggal),
              },
              {
                label: "Jumlah Pasien Sembuh",
                fill: false,
                lineTension: 0.2,
                backgroundColor: "#14a82b",
                borderColor: "#14a82b",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.1,
                borderJoinStyle: "miter",
                pointBorderColor: "#14a82b",
                pointBackgroundColor: "#fff",
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#14a82b",
                pointHoverBorderColor: "#14a82b",
                pointHoverBorderWidth: 0.1,
                pointRadius: 0,
                pointHitRadius: 10,
                data: DailyData.map((e) => e.jumlahPasienSembuh),
              },
            ],
          }}
        />
        :
        <Bar
          data={{
            labels: ["Jumlah Kasus", "Sembuh", "Meninggal"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(0, 0, 255, 0.5)",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
                data: [provinsi.jumlahKasus,provinsi.sembuh,provinsi.meninggal],
              },
            ],
          }}
          options={{
            legend: { display: false},
            title:{ display: true, text:' Data di Provinsi'}
          }}
        />
      }
      </div>
    </div>
  );
}
