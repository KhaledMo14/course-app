import React, {useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


export const Explore = () => {
    const [data,setData] = useState(null)
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://3.65.32.166/api/v2/storefront/products?filter[sub_product_type]=course&filter[product_type]=digital")
        .then(res=> {
           return res.json()
        }).then((data)=> {
            setData(data.data[0].attributes)
        })
    },[])

  return (
    <div>
        {data ?  <Card className='m-auto my-5 shadow' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.course.image_url} />
      <Card.Body>
        <Card.Title>{data.course.title}</Card.Title>
        <Card.Text>
        {data.course.description}
        </Card.Text>
        <Button onClick={() => navigate(`/details/${data.course.course_id}`)} variant="primary">Course Overview</Button>
      </Card.Body>
    </Card> :""}
   

    </div>
  )
}
