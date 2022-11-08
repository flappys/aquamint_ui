function Layout(props:any){

    return <div className='container m-auto relative  top-10 w-[68%]'>
        {props.children}
    </div>
}

export default Layout;