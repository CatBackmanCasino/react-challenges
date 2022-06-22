import React from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonText: "Log In",
            message: "Hello guest!"
        }
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            
            return {
                buttonText: this.state.buttonText === "Log In" ? "Log out" : "Log In",
                message: this.state.message === "Hello guest!" ? "Goodbye" : "Hello guest!"
            }
        }, () => {
           console.log(this.state.message)
           console.log(this.state.buttonText) 
        })
        
    }
    
    render(){
        return <div className={css.NavBar}>
            <h1>My Gallery</h1>
            <span>{this.state.message}</span>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        </div>
    }
}

export default NavBarSimple