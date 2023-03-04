import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import Button from './Components/SCSS/Button';
import GlobalStyles from './Components/SCSS/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
    
      <div style={{padding :"12px 64px"}}>
        <Button />
        <Button primary />
        <Button warning />
        </div>

    </GlobalStyles>
  </React.StrictMode>
);