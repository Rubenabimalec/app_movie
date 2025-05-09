import { useEffect, useState } from "react";

const useFetch = <T>(fetchFuntion:()=> Promise<T>, autoFetch=true)=>{
    const[data,setData]=useState<null | T>();
    const[loading, setLoading]=useState(false);
    const[error,setError]= useState<Error |null>(null);

    const fetchData=async()=>{
        try{
            setLoading(true);
            setError(null);
            const result=await fetchFuntion();
            setData(result);
        } catch(error){
            setError(error instanceof Error ? error : new Error("an error Ocurred"));
        }finally{
            setLoading(false);
        }
    };
    const reset =()=>{
        setData(null);
        setLoading(false);
        setError(null);
    };
    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    },[]);

    return{
        data,
        loading,
        error,
        refetch:fetchData,
        reset,
    };
};

export default useFetch;