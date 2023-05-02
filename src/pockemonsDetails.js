import "./App.css";
import { Typography, CircularProgress } from "@mui/material";
import useSWR from "swr";
import React from "react";

function PockemonsDataDetail(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(props.pUrl, fetcher);
  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <CircularProgress sx={{position: 'fixed'}} />;

  return (
    <div className="App">
      <Typography>Вес: {data.height} ед</Typography>
      <Typography>Вес: {data.weight} ед</Typography>
    </div>
  );
}

export default PockemonsDataDetail;
