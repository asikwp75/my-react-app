
import React, { Component } from "react";

const componentName = () => {
    return "Class"
}

class Message extends Component {
    render() {
        return(
            <h1>This is a {componentName()} Component</h1>
        )
    }
}

export default Message;