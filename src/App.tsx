import React from 'react';
import {Card} from './components/Card';
import { Layout } from './components/Layout';
import './App.css';

function App() {
  return (
    <React.Fragment>
      
      <Layout>
        <Card 
          id={1} 
          paragraph='Typescript' 
          details='TS para frontend e backend'
        />
        <Card 
          id={2} 
          paragraph='HTML' 
          details='HTML para frontend'
        />
        <Card 
          id={3} 
          paragraph='teste' 
          details='Teste Detalhes'
        />
      </Layout>
      
      
    </React.Fragment>
  );
}

export default App;
