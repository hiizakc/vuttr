import { useContext } from 'react';
import VuttrContext from '../context/VuttrContext';
import { ActionKind } from '../enums/ActionKind';
import ITool from "../interfaces/ITool";

import imgBtnEdit from '../images/ico-edit.png';
import imgBtnDelete from '../images/ico-delete.png';

function Tool(tool: ITool) {

    // Hooks.
    const { dispatch } = useContext(VuttrContext);

    // Handlers.
    const handleSelect = (tool: ITool) => {
        dispatch({
            type: ActionKind.SELECT,
            payload: tool
        });
    }
    const handleDelete = (tool: ITool) => {
        dispatch({
            type: ActionKind.DELETE,
            payload: tool
        });
    }

    return (
        <div className="v-card" key={tool.id}>
            <h2>{tool.name}</h2>
            <a className="link" href={tool.link} target='_blank' rel="noreferrer">{tool.link}</a>
            <p className="description">{tool.description}</p>
            <div>
                <span className="tag">#planificar</span>
                <span className="tag">#organizar</span>
            </div>
            <button className="button" onClick={() => handleDelete(tool)}>
                <img src={imgBtnDelete} alt="Editar" title="Editar" />
            </button>
            <button className="button" onClick={() => handleSelect(tool)}>
                <img src={imgBtnEdit} alt="Eliminar" title="Eliminar" />
            </button>
        </div >
    )
}
export default Tool;
