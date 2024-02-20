import React from 'react'

export const Selectoption = () => {
  return (
    <div className="flex  justify-center items-center rounded ">
  <div className="justify-center items-center rounded gap-10 bg-gr-800 h-full sm:flex md:flex lg:flex px-5 py-5">
  <select className=" sm:w-auto p-2 text-white bg-gr-900 rounded">
        <option value="">Select Operator</option>
        <option value="">Select Operator</option>
        <option value="">Select Operator</option>
      </select>
      <select className=" sm:w-auto p-2 text-white bg-gr-900 rounded">
        <option value="">Select Game Type</option>
        <option value="">Select Operator</option>
        <option value="">Select Operator</option>
      </select>
      <select className="sm:w-auto p-2 text-white bg-gr-900 rounded">
        <option value="">Select Slate Name</option>
        <option value="">Select Slate Name</option>
        <option value="">Select Slate Name</option>
      </select>
  </div>
</div>
  )
}

export default Selectoption;