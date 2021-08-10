import { ActionKind } from "../enums/ActionKind";
import ITool from "../interfaces/ITool";

export type Action = {
    type: ActionKind,
    payload: ITool
}
