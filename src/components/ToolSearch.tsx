import { useContext } from 'react';
import VuttrContext from '../context/VuttrContext';
import { ActionKind } from '../enums/ActionKind';

const ToolSearch = () => {

    const { state, dispatch } = useContext(VuttrContext);

    const handleSearch = (textToSearch: string) => {
        dispatch({
            type: ActionKind.FILTER,
            payload: {
                id: '',
                name: textToSearch,
                description: textToSearch
            }
        });
    }

    return (
        <div id="search-bar">
            <input type="text" className="form-control" placeholder="Buscar"
                onChange={(e) => handleSearch(e.target.value)} />
        </div>
    )
}

export default ToolSearch;
