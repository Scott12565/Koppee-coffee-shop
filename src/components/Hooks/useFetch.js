import { useState, useEffect } from "react";

const useFetch = (endPoint) => {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
       fetch(endPoint).then(res => {

        if(!res.status === 200){
            throw Error('could not fetch data from the server');
        }
        return res.json()
       }).then(data => {
        setData(data)
        setIsLoading(false)
       }).catch(err => {
        setIsError(err.message)
        setIsLoading(false)
       })
    }, [endPoint])

    return {data, isLoading, isError};
}
 
export default useFetch;