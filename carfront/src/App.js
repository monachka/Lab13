import React, { useEffect, useState } from "react";
//import { SERVER_URL } from "./constants.js";
import './App.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Carlist from './components/Carlist';
import OwnerList from "./components/Ownerlist.js";
import carshop from './carshop.jpeg';
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [isOwnerListVisible, setOwnerListVisible] = useState(false);

  const toggleOwnerList = () => {
    setOwnerListVisible(!isOwnerListVisible);
  };

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <img src={carshop} alt='carshop' width={100} height={100}/>
          <Typography variant='h6'><strong>CAR-SHOP</strong></Typography>
          <Toolbar></Toolbar>
          <Toolbar>
            <Button variant='contained' size='small'><HomeIcon/></Button>
          </Toolbar>
          <Toolbar></Toolbar>
          <Toolbar>
            <Button variant='contained' size='small'><AirportShuttleIcon/><strong>CARS</strong></Button>
          </Toolbar>
          <Toolbar></Toolbar>
          <Toolbar>
            <Button variant='contained' size='small' onClick={toggleOwnerList}><PersonIcon/><strong>OWNERS</strong></Button>
          </Toolbar>
          <Toolbar></Toolbar><Toolbar></Toolbar><Toolbar></Toolbar><Toolbar></Toolbar>
          <Toolbar>
            <Button variant='contained' size='small'><SearchIcon/></Button>
          </Toolbar>
        </Toolbar>    
      </AppBar>
      {isOwnerListVisible &&  <OwnerList />}
     <Carlist />
    </div>
  );
}

export default App;