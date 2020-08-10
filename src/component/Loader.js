import React from 'react'

const Loader = () => {
    return(
        <div className="text-center">
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            </div>
        </div>
    )
   
}
export default Loader;