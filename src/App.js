import "./App.css";
import { Grid, Card, Pagination, Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import PockemonsData from "./pockemons";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Container>
        <PockemonsData pageNumber={page} />
        <Grid
          item
          md={12}
          justifyContent="center"
          alignItems="center"
        >
          <Pagination
            sx={{ marginTop: "30px" }}
            count={10}
            page={page}
            onChange={(_, num) => setPage(num)}
          />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
