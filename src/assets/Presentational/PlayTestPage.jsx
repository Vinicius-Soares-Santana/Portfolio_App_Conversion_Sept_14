import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './PlayTest.css';

function PlayTestPage(props){
  let {gameId} = useParams();

  return <div className="PlayTestDiv body">
              <h1 className="GameTitle">{gameId}</h1>
          </div>
}

export default PlayTestPage;