import { useContext, useEffect } from 'react';
import Tool from '../components/Tool';
import VuttrContext from '../context/VuttrContext';
import { ActionKind } from '../enums/ActionKind';
import ToolService from '../services/toolService';

function ToolGrid() {

    // Services.
    const toolService = new ToolService();

    // Hooks.
    const { state, dispatch } = useContext(VuttrContext);
    useEffect(() => {
        const toolsData = toolService.getAll();
        toolsData.forEach(tool => {
            dispatch({
                type: ActionKind.CREATE,
                payload: tool
            });
        });
    }, []);

    return (
        <div id="grid-container">
            <h1>Importantes: </h1>
            {
                state.toolsFiltered.map(tool => (
                    <Tool
                        key={tool.id}
                        {...tool} />
                ))
            }
        </div>
    )
}
export default ToolGrid;
