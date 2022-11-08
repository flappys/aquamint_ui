import { useEffect, useState } from 'react'
import { SET_PARAMS } from '../../constants/api_endpoints';
import useHelper from '../../helper/helper';
function ShowAllComponent(props: Modal) {



    const { makeRequests } = useHelper()
    const [tabIndex, setIndex] = useState(1)
    
    useEffect(() => {
        showAll()
    }, [tabIndex])


    const showAll = async () => {
        let replace =props.tabs[tabIndex].api_url;
        let url=replace.replace("id?",`${props.id}?`)
        let data = {
            url: url
        }
        const response = await makeRequests(SET_PARAMS(data));


       
    }


    return <>
        <div className="text-center text-3xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            {props.title}
        </div>
        <ul className="flex flex-wrap justify-center -mb-px">
            {props.tabs.map((tab: any, index: any) =>

                <li className="mt-2">
                    {tabIndex == index ?
                        <a onClick={() => setIndex(index)} href="#" className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">{tab.name}</a>
                        :
                        <a onClick={() => setIndex(index)} href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">{tab.name}</a>}
                </li>

            )}
        </ul>
        <div className='mt-10'>
            <div className='grid grid-cols-3 gap-3'>

            </div>
        </div>


    </>
}


interface Modal {
    id: any;
    tabs: any;
    title: string,
    skeleton: any,

}

export default ShowAllComponent;