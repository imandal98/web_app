import {createContext, useState} from "react";
export const Context = createContext();

const appcontxt =({children}) => {
    return <Context.Provider> {children} </Context.Provider>
};

export default appcontxt;