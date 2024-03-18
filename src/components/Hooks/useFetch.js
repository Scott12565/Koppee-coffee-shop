import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, key) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(null);
            setIsLoading(true);

            try {
                const response = await axios.get(url);
                setData(response.data[key]);
            } catch (error) {
                setIsError(error.message);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url, key]);

    return { data, isLoading, isError };
};

export default useFetch;
