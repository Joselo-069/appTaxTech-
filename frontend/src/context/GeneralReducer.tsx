/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from "../interfaces/data";

export interface ContextState {
    detail:Client;
    clients:Client[];
}

const GeneralReducer = (state:ContextState, action:any) => {
    switch (action.type) {
        case "LIST_CLIENT":
            return {
                ...state,
                clients: action.payload
            };
        case "DETAIL_CLIENT":
            return {
                ...state,
                detail:action.payload
            };
        case "CREATE_CLIENT":
            return {
                ...state,
                clients: [
                    ...state.clients,
                    action.payload.client
                ]
            };
        case "UPDATE_CLIENT":
            return {
                ...state,
                clients: state.clients.map((client) =>
                    client.id === action.payload.client.id ? action.payload.client : client)
            };
        case "DELETE_CLIENT":
            const clientIdToDelete = action.payload;
            const updatedClients = state.clients.filter(client => client.dni !== clientIdToDelete.id);

            return {
                ...state,
                clients: updatedClients
            };
        default:
            return state;
    }
};

export default GeneralReducer;