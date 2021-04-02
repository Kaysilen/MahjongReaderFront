import './App.css';

import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { routeInfoMap } from "./routing";

function generateRoutes(routingMap) {
  let routeList = [];

  routingMap.forEach((info, route) => {
    routeList.push(
      <Route
        path={route}
        exact={info.isExact}
        component={info.pageComp}
        key={route}
      />
    );
  });
  return routeList;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/camera">camera</Link>
          </li>
          <li>
            <Link to="/score_result">scoreRes</Link>
          </li>
          <li>
            <Link to="/camera_result">cameraRes</Link>
          </li>
        </ul>
        <Switch>
          {generateRoutes(routeInfoMap)}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
