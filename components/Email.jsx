import React from 'react'

const Email = () => {
  return (
    <div className=" flex flex-col">
          <label className="text-xs mb-2">Email Address *</label>
          <input type="text" name="email_address" id="email_address" className="border  mb-2 rounded-md text-xl cursor-pointer" />
          <span className="text-xs text-red-700 invisible">Please enter a valid email address</span>
    </div>
  )
}

export default Email
