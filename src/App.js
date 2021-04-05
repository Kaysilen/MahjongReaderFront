import './App.css';

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { routeInfoMap } from "./routing";


const useStyles = makeStyles({
  allPageSize:{
      width : '350px',
      height : '630px',
      padding : '5px'
  }
});


const generateRoutes = (routingMap, style) => {
  let routeList = [];

  routingMap.forEach((info, route) => {
    routeList.push(
      <Route
        path={route}
        exact={info.isExact}
        render={() => <info.pageComp className ={style.allPageSize}/>} 
        key={route}
      />
    );
  });
  return routeList;
}

function App() {
  const style = useStyles();

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
          {generateRoutes(routeInfoMap, style)}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
