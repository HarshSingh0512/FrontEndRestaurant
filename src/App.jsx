import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, ButtonGroup, Col, Container, Nav, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Home from './Components/Home';
import Insert from './Components/Insert';
import Update from './Components/Update';
import Delete from './Components/Delete';
import DishCard from './Components/DishCard';



function App() {

  const [selectedComponent, setSelectedComponent] = useState('home');

  const handleNavItemSelection = (eventKey) => {
    setSelectedComponent(eventKey);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'home':
        return <Home />;
      case 'insert':
        return <Insert />;
      case 'update':
        return <Update />;
      case 'delete':
        return <Delete />;
      default:
        return <Home />;
    }
  };
 
 
  return (
    <Router>
      <Container>
        <h1 style={{ textAlign: 'center' }}>Harsh Restaurant</h1>
        <div>
          
          <div>
            <ButtonGroup style={{ marginLeft: '42.5%' }}>
              <Button variant="light" onClick={() => handleNavItemSelection('home')}>Home</Button>
              <Button variant="light" onClick={() => handleNavItemSelection('insert')}>Insert</Button>
              <Button variant="light" onClick={() => handleNavItemSelection('update')}>Update</Button>
              <Button variant="light" onClick={() => handleNavItemSelection('delete')}>Delete</Button>
            </ButtonGroup>
          </div>
          <div>
            {renderSelectedComponent()}
          </div>

          
        </div>
      </Container>

    </Router>
  );
}

export default App;
