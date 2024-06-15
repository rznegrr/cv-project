import React from 'react'
import WorkSample from '../ui/workSamples'
import Button from '../button'

export default function Work() {
  return (
    <div className='py-16 px-4 lg:py-24 lg:px-20'>
        <Button>Work</Button>
        <p className="pt-4 text-lg text-gray600 text-center">Here is a quick summary of my most recent experiences:</p>
        <WorkSample/>
        <WorkSample/>
        <WorkSample/>
        <WorkSample/>
    </div>
  )
}
