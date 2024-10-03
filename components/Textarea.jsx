import React from 'react'

const Textarea = () => {
  return (
    <div className='flex flex-col'>
      <label className="text-xs mb-2">Message *</label>
      <textarea rows={5} name="comments" id="comments" className="border"></textarea>
      <span className="text-xs text-red-700 invisible"></span>
    </div>
  )
}

export default Textarea
