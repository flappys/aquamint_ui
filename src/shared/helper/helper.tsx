import { makeRequest } from "./api_requests";
import { useContext } from "react";
import { DataContext } from "../../store/dataContext";
function useHelper() {

    const { setError } = useContext<any>(DataContext)
    const makeRequests: any = async (config: any) => {
        try {
            setError({
                message: "not being called",
                code: 800
            })
            return await makeRequest(config);
        }
        catch (error: any) {
            setError(error)
            return Promise.reject(error);
        }

    }

    return { makeRequests }

}




export default useHelper;