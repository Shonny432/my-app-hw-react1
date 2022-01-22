import React from "react";

import { MyComponents } from "./MyComponents";
import logo from "../../logo.svg";

export const MainPage = () => {
    const getData = () => {
        return "Some data";
    };

    return (
        <>
            <MyComponents.Header logo={logo}/>
            <MyComponents.Body />
            <MyComponents.Section
                text="Some text"
                isDefault
                count={2 * 5}
                user={{ name: "John", age: 34 }}
                data={getData()}
            />
        </>
    );
}
