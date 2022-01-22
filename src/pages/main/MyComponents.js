import React from "react";

export const MyComponents = {
    Header: (props) => {
        return (
            <header className="App-header">
                <img src={props.logo} className="App-logo" alt="logo" />
                <p>
                    Hello React
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        );
    },
    Body: () => <h1>This is a body!</h1>,
    Section: (props) => {
        return (
            <section>
                <p>{props.text}</p>
                {
                    props.isDefault
                        ? (
                            <div>This is default</div>
                        ) : (
                            <div>This is not default</div>
                        )
                }
                {
                    !props.isDefault && <h3>Hi</h3>
                }
                <span>{props.count}</span>
                <div>
                    <h3>Info about user</h3>
                    <p>Name: {props.user.name}</p>
                    <p>Age: {props.user.age}</p>
                </div>
                <div>{props.data}</div>
            </section>
        )
    }
};
