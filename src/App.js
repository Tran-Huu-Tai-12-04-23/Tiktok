import publicRoutes from "./Routes";
import { Defaultlayout } from "./components";
// import libary
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.page;

          let Layout = route.layout || Defaultlayout;
          if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
              key={index}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
