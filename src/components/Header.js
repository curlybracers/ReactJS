import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            title:"" 
        }
    }
    ChangeEvent = (event) => {
        this.setState({
            title: event.target.value
        }) 
        this.props.serachKeyword(event.target.value);
    }
    render(){
        return(
            <header>
                <p className="righttext">Search Something in the text box</p>
                <input type = "text" onChange = {this.ChangeEvent.bind(this)}/>
                <div>{this.state.title}</div>
            </header>
        )
    }
}

export default Header;