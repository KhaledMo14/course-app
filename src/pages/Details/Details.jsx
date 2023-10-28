
import React, {useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./Details.scss";

export const Details = () => {  
  const [detailsData,setDetailsData] = useState(null) 
  const param = useParams();

  useEffect(()=>{
      fetch(`http://3.65.32.166/api/v2/storefront/products/${param.id}`)
      .then(res=> {
         return res.json()
      }).then((data)=> {
        setDetailsData(data.data)
      })
  },[param.id])

    return (
<div>
  {detailsData&&
  <div className=" col-md-8 mx-auto container-animation ">
  <div className="details row my-5 p-2 mx-auto shadow rounded">
    <div className="details-img col-md-6 d-flex justify-content-center align-items-center">
      <img
        className=" rounded-start w-50 h-md-50"
        src={detailsData.attributes.course.image_url}
        alt='course-img'
        
      />
    </div>
  <div className="product-data col-md-6 p-5 d-flex flex-column justify-content-between">
    <div>
      <h2>{detailsData.attributes.course.title}</h2>
      <p className="text-muted"></p>
      <p>{detailsData.attributes.course.description}</p> 
      <p>{detailsData.attributes.price}</p>
    </div>
  </div>
  </div>
</div>}

</div>
    )
  }
  