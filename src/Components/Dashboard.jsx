import React from "react"

const Dashboard = () => {
    
    return(
     <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      
        <h1 className="text-cyan-900 text-4xl font-bold">Dashboard</h1>
            <div className="flex flex-col gap-4 p-4 shadow-lg rounded-2xl ">
                <input type="text" className="rounded-xl border-cyan-900 border-2 text-center p-1 w-72 "
                placeholder="Enter your Name..."

                />

                <button className="text-center bg-cyan-900 p-1 w-52 text-xl rounded-2xl text-white hover:text-cyan-900 hover:bg-white border-2 hover:border-cyan-900">
                    Save User
                </button>
            </div>
</div>
    )
}

export default Dashboard