import { createContext, useReducer, ReactNode } from "react";
import GeneralReducer from "./GeneralReducer";
import { getData, postData } from "../utils/response";

import { Client } from "../interfaces/data";

interface ContainerProps {
  children: ReactNode;
}

interface ContextState {
  detail:Client;
  clients: Client[];
  listClients: () => void;
  getdetailClient: (id: number) => void;
  createClient: (category: object) => void;
  editClient: (id: string, category: object) => void;
  deleteClient: (id: string) => void;
}

const initialState: ContextState = {
  clients: [],
  detail:{
    id:"",
    dni:"",
    name:"",
    lastname:"",
    age:"",
    birthdate:"",
    status:"1"
  },
  listClients: () => {},
  getdetailClient: () => {},
  createClient: () => {},
  editClient: () => {},
  deleteClient: () => {}
};

export const GeneralContext = createContext<ContextState>(initialState);

export const GeneralProvider: React.FC<ContainerProps> = ({ children }) => {
  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const listClients = () => {
    getData("listclients", dispatch, "LIST_CLIENT","get");
  };

  const getdetailClient = (id:number) => {
    getData(`detailclient/${id}`, dispatch, "DETAIL_CLIENT","get");
  }

  const createClient = async (client: object) => {
   const res = await postData(
      "createclient",
      dispatch,
      "CREATE_CLIENT",
      "post",
      client
    );
    return res;
  };

  const editClient = async (dni: string, client: object) => {
    postData(
      `updateclient/${dni}`,
      dispatch,
      "UPDATE_CLIENT",
      "update",
      client
    );
  };

  const deleteClient = async (dni: string) => {
    getData(
      `deleteclient/${dni}`,
      dispatch,
      "DELETE_CLIENT",
      "delete"
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        listClients,
        getdetailClient,
        createClient,
        editClient,
        deleteClient,
        clients: state.clients,
        detail: state.detail
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};