import { createContext, useReducer } from 'react';
import { InitialStateType } from '../Types/InitialStateType';
import { toolReducer } from './reducers';

const initialState: InitialStateType = {
    tools: [],
    toolsFiltered: [],
    selectedTool: undefined
};

const VuttrContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});

const VuttrProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(toolReducer, initialState);

    return (
        <VuttrContext.Provider value={{ state, dispatch }}>
            {children}
        </VuttrContext.Provider>
    )
}

export default VuttrContext;
export { VuttrProvider };
