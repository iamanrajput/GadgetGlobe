import React, { useState } from 'react';
import AppDownload from '../../components/AppDownload/AppDownload';
import Type from '../../components/ExploreType/Type';
import { ProductDisplay } from '../../components/ProductDisplay/ProductDisplay';
import Header from '../../components/Header/Header';
import './Home.css';


const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
    <Header/>
    <Type category={category} setCategory={setCategory}/>
    <ProductDisplay category={category} />
    <AppDownload/>
    </div>
  )
}

export default Home