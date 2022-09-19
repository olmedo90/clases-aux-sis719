import React from "react";
import { DrawComponent } from "./components/DrawComponent";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import './index.css';
export const HangManComponent = () => {
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent/>
            <KeyBoardComponent/>
        </div>
    );
};