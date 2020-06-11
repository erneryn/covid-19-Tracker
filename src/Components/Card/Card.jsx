import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
import CountUp from "react-countup";
import styles from "./Card.module.css";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    borderRadius: spacing(2),
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  infected: {
    color:"#54093a",
    fontWeight:'bold'
    // background:
    //   "linear-gradient(180deg, rgba(121,9,54,1) 15%, rgba(2,0,36,1) 100%);",
  },
  recovered: {
    color:"#3fe075",
    fontWeight:'bold'
    // background:
    //   "linear-gradient(180deg, rgba(119,184,76,1) 15%, rgba(10,66,32,1) 100%);",
  },
  death: {
    color:'#d45648',
    fontWeight:'bold'
    // background:
    //   "linear-gradient(180deg, rgba(255,0,41,1) 15%, rgba(116,12,29,1) 100%);",
  },
}));

export default function CardData({ data }) {
  const Styles = useStyles();

  if (!data) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" style={{ width: "100%" }}>
        <Grid item xs={12} md={3} className={cx(styles.card)}>
          <Card className={Styles.root} raised={true}>
            <CardContent>
              <Typography className={styles.text}>Jumlah Kasus</Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  className={Styles.infected}
                  start={0}
                  end={data.jumlahKasus}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography className={styles.subText}>
                Jumlah Kasus Positif terinfeksi COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} className={cx(styles.card)}>
          <Card className={cx(Styles.root)} raised={true}>
            <CardContent>
              <Typography className={styles.text}>Sembuh</Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  className={Styles.recovered}
                  start={0}
                  end={data.sembuh}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography className={styles.subText}>
                Jumlah Kasus Sembuh Dari COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} className={cx(styles.card)}>
          <Card className={cx(Styles.root)} raised={true}>
            <CardContent className={styles.content}>
              <Typography className={styles.text}>Meninggal</Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  className={Styles.death}
                  start={0}
                  end={data.meninggal}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography className={styles.subText}>
                Jumlah Kasus Meninggal Oleh COVID-19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
