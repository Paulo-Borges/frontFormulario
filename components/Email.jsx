import React from 'react'


const Email = () => {
  return (
    <div className=" flex flex-col">
          <label className="text-xs mb-2">Email Address *</label>
          <input type="text" id="email_address" className="border  mb-2 rounded-md text-xl cursor-pointer" />
          <span className="text-xs text-red-700 invisible"></span>
    </div>
  )
}

export default Email
