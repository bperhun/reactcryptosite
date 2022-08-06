import React from "react";
import NoRiskSection from "../NoRiskSection/NoRiskSection";
import MainProject from "./MainProject/MainProject";
import MainScreen from "./MainScreen/MainScreen";
import MainTelegram from "./MainTelegram/MainTelegram";
import MainTraders from "./MainTraders/MainTraders";

const Main = () => {

    return (
        <main>
            <MainScreen />
            <MainTelegram />
            <div className="main-crypto">
            </div>
            <MainTraders />
            <MainProject />
        </main >
    );
}

export default Main;