import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Ad from './components/Ad';

function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <div className="AdsOnly">
        <Ad flavor={'Chocolate'} isLight={false} fontSize={30} />
        <Ad flavor={'Vanilla'} isLight={true} fontSize={30} />
        <Ad flavor={'Strawberry'} isLight={false} fontSize={30} />
        </div>
        <div className='votingOptions'>
        <AdDesigner/>
        <Votes />
        </div>
        
      </div>
    </>

  );
}

export default App;
