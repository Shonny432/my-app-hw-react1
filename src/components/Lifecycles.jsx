import React from "react";

export class Lifecycles extends React.Component {
    // state = { count: 0 };

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.inputRef.focus();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    handleClick = () => {
        this.setState({ count: ++this.state.count });
    };
    
    setInputRef = (node) => {
        this.inputRef = node;
    };

    render() {
        const { count } = this.state;
        
        console.log("this.inputRef", this.inputRef);

        return (
            <div>
                <h3>Lifecycles {count}</h3>
                <button onClick={this.handleClick}>Click</button>
                <input type="text" ref={this.setInputRef}/>
            </div>
        );
    }
}
