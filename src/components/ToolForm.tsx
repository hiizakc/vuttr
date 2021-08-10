import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import VuttrContext from '../context/VuttrContext';
import { ActionKind } from '../enums/ActionKind';
import ITool from '../interfaces/ITool';
import ToolService from '../services/toolService';

const ToolForm = ({ setTools }: { setTools: Dispatch<SetStateAction<ITool[]>> }) => {

    // Services.
    const toolService = new ToolService();

    const [name, setName] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const { state, dispatch } = useContext(VuttrContext);
    useEffect(() => {
        if (state.selectedTool !== undefined) {
            setName(state.selectedTool.name);
            setLink(state.selectedTool.link);
            setDescription(state.selectedTool.description);
        }
    }, [state.selectedTool]);

    // Handlers.
    const handleClose = () => {
        dispatch({
            type: ActionKind.DESELECT
        });
    };
    const handleShow = () => {
        dispatch({
            type: ActionKind.SELECT,
            payload: {
                id: '',
                name: '',
                link: '',
                description: ''
            }
        });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (state.selectedTool !== undefined) {

            let tool = {
                id: state.selectedTool.id,
                name: name,
                link: link,
                description: description
            }

            // New.
            if (tool.id === '') {
                tool = toolService.add(tool);
            }
            // Update.
            else {
                // Persist on API.
                tool = toolService.update(tool);
            }

            setTools((tools) => {
                let nTools = tools.filter(x => x.id !== state.selectedTool?.id);
                return [...nTools, tool];
            });

            dispatch({
                type: ActionKind.UPDATE,
                payload: tool
            });

            // Reset data.
            setName('');
            setLink('');
            setDescription('');

            dispatch({
                type: ActionKind.DESELECT
            });
        }
    }

    return (
        <div>
            <div id="add-button" className="v-shadow" onClick={handleShow}>
                <span>+</span>
            </div>
            <Modal show={state.selectedTool === undefined ? false : true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar una nueva herramienta</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input id="name" type="text" value={name} required
                                onChange={(e) => setName(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Link</label>
                            <input id="link" type="text" value={link} required
                                onChange={(e) => setLink(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Descripción</label>
                            <textarea id="description" required value={description}
                                onChange={(e) => setDescription(e.target.value)} className="form-control">{description}</textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button type="submit" variant="primary">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default ToolForm
