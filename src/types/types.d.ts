export type Store = {
    loadingProviderData:  boolean,
    loadingProvidersData:  boolean,
    loadinListOfWebAPIsData:  boolean,

    errorProviderData:  any,
    errorProvidersData:  any,
    errorListOfWebAPIsData:  any,
  
    providerData : Array,
    providersData : Array,
    listOfWebAPIsData : Array,
  
    getProvider: (_type:string,_callBack:(_data:any)=>void)=> void,
    getProviders: (_callBack:()=>void)=> void,
    getListOfWebAPIs: () => void,
}