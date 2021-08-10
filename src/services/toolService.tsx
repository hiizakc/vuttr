import { randomId } from "../common/utils";
import ITool from "../interfaces/ITool";

class ToolService {

    // Fake data.
    data: ITool[] = [
        {
            id: '1',
            name: 'React Native',
            link: 'https://reactnative.dev/',
            description: 'Esta es una libería muy utilizada para el desarrollo del front end.'
        },
        {
            id: '2',
            name: 'Documentación de Node',
            link: 'https://nodejs.org/es/docs/',
            description: 'Proporciona información detallada sobre una función u objeto en Node.js.'
        },
        {
            id: '3',
            name: 'Librería no 3',
            link: 'https://reactnative.dev/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            id: '4',
            name: 'Librería no 4',
            link: 'https://reactnative.dev/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            id: '5',
            name: 'Librería no 5',
            link: 'https://reactnative.dev/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            id: '6',
            name: 'Librería no 6',
            link: 'https://reactnative.dev/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            id: '7',
            name: 'Librería no 7',
            link: 'https://reactnative.dev/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            id: '8',
            name: 'Librería no 8',
            link: 'https://reactnative.dev/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
    ];

    getAll() {
        return this.data;
    }

    add(tool: ITool) {
        // Random id
        tool.id = randomId(5);
        this.data.push(tool);
        return tool;
    }

    update(tool: ITool) {
        return tool;
    }
}

export default ToolService;
