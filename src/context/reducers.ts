import ITool from "../interfaces/ITool";
import { Action } from "../Types/Action";

export const toolReducer = (state: { tools: ITool[], toolsFiltered: ITool[], selectedTool?: ITool }, action: Action) => {
    switch (action.type) {
        case 'CREATE':
            return {
                ...state,
                tools: [...state.tools, {
                    id: action.payload.id,
                    name: action.payload.name,
                    link: action.payload.link,
                    description: action.payload.description
                }],
                toolsFiltered: [...state.tools, {
                    id: action.payload.id,
                    name: action.payload.name,
                    link: action.payload.link,
                    description: action.payload.description
                }],
            }
        case 'DELETE':
            return {
                ...state,
                tools: state.tools.filter((tool: any) => tool.id !== action.payload.id),
                toolsFiltered: state.toolsFiltered.filter((tool: any) => tool.id !== action.payload.id)
            }
        case 'UPDATE':
            let tools = state.tools.filter((tool: any) => tool.id !== action.payload.id);
            return {
                ...state,
                tools: [...tools, {
                    id: action.payload.id,
                    name: action.payload.name,
                    link: action.payload.link,
                    description: action.payload.description
                }],
                toolsFiltered: [...tools, {
                    id: action.payload.id,
                    name: action.payload.name,
                    link: action.payload.link,
                    description: action.payload.description
                }]
            }
        case 'SELECT':
            return {
                ...state,
                selectedTool: {
                    id: action.payload.id,
                    name: action.payload.name,
                    link: action.payload.link,
                    description: action.payload.description
                }
            }
        case 'DESELECT':
            return {
                ...state,
                selectedTool: undefined
            }
        case 'FILTER':
            let toolsFilter = state.tools.filter((tool: any) =>
                tool.name.toLowerCase().includes(action.payload.name) ||
                tool.description.toLowerCase().includes(action.payload.description));
            return {
                ...state,
                toolsFiltered: [...toolsFilter]
            }
        default:
            return state;
    }
}
