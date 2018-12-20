import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'
import jsonData from './db.json'
import Newslist from './components/Newslist';
//JSX

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            news:jsonData,
            filtered:jsonData
        }
    }
    filterData(data){
        let result = this.state.news.filter((item) => {
            return item.firstName.toLowerCase().indexOf(data.toLowerCase()) > -1;
        })
        this.setState({filtered:result})
    }
    render(){
        return(
            <div className="wrapper">
                <Header serachKeyword={(data) => {this.filterData(data)}}/>
                <Newslist sendNews={this.state.filtered}/>
            </div>
         )    
    }
        
}

// Render the content

ReactDOM.render(<App/>,document.getElementById('root'));

// EXAMPLE OF FUNCTIONAL COMPONENTS
// const App = () => {
//     return(
//     <div className="wrapper">
//         <Header/>
//         <h1>Hello</h1>
//     </div>
// )       
// }
