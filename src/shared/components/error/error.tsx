
import { useEffect, useState } from 'react'
import { useContext } from "react";
import { DataContext } from '../../../store/dataContext';
function Error() {


    const { error, setError } = useContext<any>(DataContext)


    useEffect(() => {
        setTimeout(() => {
            setError({
                message: "not being called",
                code: 800
            })
        }, 4000);

    }, [error])

    return <div>
        {error?.code != 800 && <div className='bg-red-500 h-12 pt-2 pl-4 absolute w-[20%] top-20 right-10 z-20'>{error?.message}</div>}
    </div>
}



export default Error;