import React from 'react'
import image1 from "../../../Assets/no-document-or-data-found-ui-illustration-design-free-vector.jpg"
const Shortlishted = ({data}) => {
  return (
    <div>
          {
             data? (
                 <div>
                       {
                         data?.map((data,index)=>(
                             <div>
                                  <p>data</p>
                                  <p>Paragraph</p>
                             </div>
                         ))
                       }
                 </div>
             ) : (
                <div  className=' flex justify-center'>
                       <img src={image1} width="300px"/>
                </div>
             )
          }
    </div>
  )
}

export default Shortlishted