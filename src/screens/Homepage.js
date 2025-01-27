import React from 'react'
import mkpeyolMenu from '../mkpeyoldata'
import {default as Mkpeyol}  from '../components/Mkpeyol'

export default function Homepage() {
  return (
    <div>
        <div className='row'>
            {
                mkpeyolMenu.map(mkpeyol=>{
                    return <div className='col-md-4 p-3'>
                        <div>
                            <Mkpeyol mkpeyol={mkpeyol}/>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
