import React from 'react'

function DownloadCvBtn(props) {
  return (
    <div>
        <button className={`bg-gray900 p-1 rounded-xl text-sm text-default w-full ${props.className}`}>Download CV</button>
    </div>
  )
}

export default DownloadCvBtn