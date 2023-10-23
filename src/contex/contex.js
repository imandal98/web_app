import {createContext} from "react";
export const context = createContext();

const appcontxt =({child}) => {
    return (
        <context.Provider>
            {child}
        </context.Provider>
    )
};

export default appcontxt;