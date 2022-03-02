/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Grid , Paper } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <Grid container spacing={1}sx={{margin: '0 20px',}}>
      <Grid item xs={12}>
        <h1
          css={css`margin: 10px 10px;`}>To-Do List App</h1>
      </Grid>
      <Grid item md={3}>
        <Paper elevation={3}>
          <Box sx={{padding: '20px'}}>
            <h2 css={css`
              margin: 0;
              margin-bottom: 10px;`
              }>
            Create a new task</h2>
            <Form></Form>
          </Box>
        </Paper>
      </Grid>
      <Grid item md={8}>
      </Grid>
    </Grid>
  );
}

export default App;
