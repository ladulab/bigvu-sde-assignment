import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";

import { theme } from "./theme";
import { Home, Course } from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          m: 0,
          overflow: "auto",
          pb: "45px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<Course />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
