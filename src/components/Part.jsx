import React from "react";
import { FaPauseCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function Part() {
  return (
    <div>
      <div className="w-full h-auto ">
        {/* start of the compression efficiency */}
        <div className="space-x-4 sm:flex  gap-4 m-5">
          <div className=" bg-zinc-50 mt-5 w-full shadow-2xl sm:w-[60vw] h-auto px-3 py-4 rounded-xl">
            <h2 className="text-2xl  text-zinc-900">Compression Efficiency</h2>
            <h3 className="text-zinc-400">Real-time compression ratio by algorithm</h3>
          </div>
       {/* end of the compression efficiency */}
          <div className="bg-zinc-50 mt-5 w-full shadow-lg rounded-xl sm:w-[45vw] mr-5 px-3 py-4 sm:shadow-2xl">
            {/* start of the simulation control */}
            <h3 className="text-zinc-900 text-xl">Simulated Control</h3>
            <h4 className="text-zinc-400">Adjust data generation settings</h4>
            <div className="flex justify-between items-center mt-5">
              <h4 className="">Update Interval</h4>
              <h5 className="text-zinc-400">1s</h5>
            </div>
            <input type="range" className="w-full mt-4" />
            <div className="mt-6 flex justify-between items-center">
              <FaPauseCircle size={'28'} color="#0096FF" />
             <RxCross2 size={'22'}/>
              <button className="rounded-sm bg-zinc-400 text-zinc-950 hover:bg-sky-600 px-4 py-2 active:bg-pink-600 active:text-white ">Connect C++</button>
              <button className="rounded-sm bg-blue-400 hover:bg-blue-600 px-4 py-2 text-white active:bg-red-500">Export Data</button>
            </div>
            <h3 className="text-xl mt-8 mb-3">C++ Server URL</h3>
            <input text="text" className="text-zinc-900 outline-green-400 w-full rounded-md border-2 border-zinc-400 px-3 py-1 active:outline-green-400" placeholder="https://localhost:8081" />
            <div className="mt-10 bg-zinc-100 rounded-sm px-3 py-4">
              <h3 className="text-zinc-800 font-medium text-xl">Simulation Status</h3>
              <div className=" ">
                <ul className="flex justify-between items-center">
                  <li className="text-xl ml-8 list-disc marker:text-green-400 marker:text-2xl">Running</li>
                  <li>|</li>
                  <li className="text-zinc-400">Using JS simulation from 8 devices</li>
                </ul>
              </div>
            </div>
          </div>
          {/* end of the simulation control */}
        </div>
      </div>
    </div>
  )
}

export default Part;