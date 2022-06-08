import React, { Suspense } from "react";
import {Route, Routes} from "react-router-dom";
import Loading from "../screens/Loading";
import Home from "../screens/Home";

export const Router = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route element={<Home/>} path={"/"}/>
            </Routes>
        </Suspense>
    );
};
