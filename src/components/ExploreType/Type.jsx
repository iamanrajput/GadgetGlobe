import React from 'react';
import { type_list } from '../../assets/assets';
import './Type.css';

const type = ({category,setCategory}) => {
  return (
<div className="explore-type" id="explore-type">
    <h1>Explore our type</h1>
    <p className='explore-type-text'> Choose from a diverse type featuring a delectable array of dishes. </p>
    <div className="explore-type-list">
      {type_list.map((item,index)=>{
        return(
          <div onClick={()=>setCategory(prev=>prev===item.type_name?"All":item.type_name)} key ={index} className="explore-type-list-item">
            <img  className={category===item.type_name?"active":""} src={item.type_image} alt="" />
            <p>{item.type_name}</p>
          </div>
       
          )
      })}
    </div>
    <hr></hr>
</div>
  )
}

export default Type