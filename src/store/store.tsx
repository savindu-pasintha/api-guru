import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Store } from "../types/types";
import axiosInstance from "../apis/axiosInstance";

export const initialState = {
  
  loadingProviderData:  false,
  loadingProvidersData:  false,
  loadinListOfWebAPIsData:  false,

  errorProviderData:  '',
  errorProvidersData:  '',
  errorListOfWebAPIsData:  '',

  providerData : [],
  providersData : [],
  listOfWebAPIsData : [],

  getProvider: (_type:string,_callBack:(_data:any)=>void)=>{},
  getProviders: (_callBack:()=>void)=>{},
  getListOfWebAPIs: () => {},
};

export const useStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        getProvider: async (_type,callBack) => {
          try {
            set({ loadingProviderData: true });
            const response = await axiosInstance.get(`${_type}.json`);
            const data = response?.data?.apis;
            const key = (Object.keys(data))[0];
            const filteredData = {
              key,
              ...data[key]
            }
            set({ providerData: filteredData, loadingProviderData: false });
            callBack(filteredData)
          } catch (error) {
            set({ errorProviderData: error ?? true, loadingProviderData: false });
          }
        },
        getProviders: async (callBack) => {
          try {
            set({ loadingProvidersData: true });
            const response = await axiosInstance.get("/providers.json");
            const data = response?.data?.data;
            set({ providersData: data ?? [], loadingProvidersData: false });
            callBack();
          } catch (error) {
            set({ errorProvidersData: error ?? true, loadingProvidersData: false });
          }
        },
       
      }),
      {
        name: "local-storage-api-guru-store",
      }
    )
  )
);
