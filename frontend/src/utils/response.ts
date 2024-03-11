/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosResponse } from "axios";
import { clientAxios } from "../config/clientAxios";

type ActionType = {
  type: string;
  payload: any;
};
export const getData = async (url:string, dispatch:React.Dispatch<ActionType>, actionType:string, method:string) => {
    try {
      let res: AxiosResponse<any>;

      if (method === 'get') {
        res = await clientAxios.get(url);
      } else if (method === 'delete') {
        res = await clientAxios.delete(url);
      } else {
        throw new Error('Método HTTP no válido');
      }

      dispatch({
        type: actionType,
        payload: res.data
      });
    } catch (error:any) {
      return handleApiError(error);
    }
};

export const postData = async (url: string, dispatch: React.Dispatch<ActionType>, actionType: string, method:string, requestData?: object) => {
    try {
      const res = method == 'post' ? await clientAxios.post(url,requestData) : await clientAxios.put(url,requestData);
      dispatch({
        type: actionType,
        payload: res.data
      });
      return res;
    } catch (error:any) {
      return handleApiError(error);
    }
};

export const handleApiError = (error:Error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 500) {
        window.location.href = '/error';
      }
      if (error.response?.data) {
        return error.response?.data
      }
    }
};