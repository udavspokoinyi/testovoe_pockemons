import "./App.css";
import { Grid, Card, CircularProgress, Container } from "@mui/material";
import useSWR from "swr";
import CardHeader from "@mui/material/CardHeader";
import React from "react";
import { useState } from "react";
import PockemonsDataDetail from "./pockemonsDetails";

function PockemonsData(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${
      (props.pageNumber - 1) * 12
    }`,
    fetcher
  );
  console.log();
  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <CircularProgress sx={{position: 'fixed'}} />;

  const PockemonCards = data.results.map((p, index) => (
    <Grid key={index} item md={2}>
      <Card  sx={{ minWidth: 175 }}>
        <CardHeader title={p.name}></CardHeader>
        <PockemonsDataDetail pUrl={p.url} />
      </Card>
    </Grid>
  ));
  return (
    <div className="App">
      <Container>
        <Grid container spacing={2} sx={{ marginTop: '30px' }}>
          {PockemonCards}
        </Grid>
      </Container>
    </div>
  );
}

export default PockemonsData;
