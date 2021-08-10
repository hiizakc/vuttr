import ITool from "../interfaces/ITool";

export type InitialStateType = {
    tools: ITool[],
    toolsFiltered: ITool[],
    selectedTool?: ITool
}
