import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
//JSX
const App = () => {
        return(
        <div className="wrapper">
            <Header/>
            <h1>Hello</h1>
        </div>
    )       
}

// Render the content

ReactDOM.render(<App/>,document.getElementById('root'));