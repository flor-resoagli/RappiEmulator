import React from "react";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

export interface Items {
    itemName: string,
    itemPrice: number,
    itemQuantity: number,
}

export interface ContextState {
    cart_items: Array<Items>,
    user_id: string;
    user_name: string;
}

export interface Context {
    context: ContextState;
    setContextState: Dispatch<SetStateAction<ContextState>>;
}

export const CONTEXT_DEFAULT_STATE: ContextState = {
    cart_items: [],
    user_id: "userID",
    user_name: "User Name"
};

export const CONTEXT_DEFAULT_VALUE = {
    context: CONTEXT_DEFAULT_STATE,
    setContextState: () => {},
};

export const Context = createContext<Context>(CONTEXT_DEFAULT_VALUE);

const ContextProvider = Context.Provider;

export const ContextStateProvider = ({ children }: any) => {
    const [context, setContext] = useState<ContextState>(CONTEXT_DEFAULT_STATE);
    return (
        <ContextProvider value={{ context, setContextState: setContext }}>
            {children}
        </ContextProvider>
    );
};

export const useContextStateProvider = () => { //llamar este metodo const {context, setContextState} = useContextStateProvider
    return useContext(Context);
};
