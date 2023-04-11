export enum ActionType {
    GET_ALERTS = "GET_ALERTS",
}

interface actionAlerte  {
    type: ActionType.GET_ALERTS;
}

export type Action = actionAlerte;