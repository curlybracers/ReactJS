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
    }
    render(){
        return(
            <header>
                <p className="righttext">Type Something in the text box</p>
                <input type = "text" onChange = {this.ChangeEvent.bind(this)}/>
                <div>{this.state.title}</div>
            </header>
        )
    }
}

export default Header;