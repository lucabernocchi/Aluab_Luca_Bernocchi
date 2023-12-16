import { useEffect, useState } from "react"


function useFetch(url, isDetail) {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 
    
    useEffect(() => {

      setLoading(true);
      setError(''); 
      setData([]); 
      async function getData(){
      try {
        const response = await fetch(url); 
        if (response.ok) {
          const json = await response.json();
          if (isDetail){
            setData(json); 
          }else{
            setData(json.results); 
          }
        } else {
          setError(`End point error`); 
        }
      } catch (error) {
        setError(`Request error - ${error.message}`); 
      }
      setLoading(false); 
    }
    getData(); 
    },[url])

    return {
      data, 
      error, 
      loading
    }  
  }

  export default useFetch;

  
