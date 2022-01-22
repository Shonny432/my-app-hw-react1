import React from 'react';
import { connect } from "react-redux";

import { Button } from "../components/Button";
import { actionMakeGreen, actionMakeRed, actionMakeBlue } from "../actions/background";

class ButtonsBackgroundChange extends React.Component {

    render() {
        const {
            actionMakeGreen,
            actionMakeRed,
            actionMakeBlue,
            buttonColor
        } = this.props;
        console.log(`color: ${this.props.buttonColor}`)
        return (
            <div>
                <Button text="Green" style={{background: buttonColor ?? "green"}} handleClick={actionMakeGreen}/>
                <Button text="Red" style={{background: buttonColor ?? "red"}} handleClick={actionMakeRed}/>
                <Button text="Blue" style={{background: buttonColor ?? "blue"}} handleClick={actionMakeBlue}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ buttonColor: state.buttonColor });

const mapDispatchToProps = {
    actionMakeGreen: actionMakeGreen,
    actionMakeRed: actionMakeRed,
    actionMakeBlue: actionMakeBlue
};

export const ButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonsBackgroundChange);
