import React, { useEffect, useState } from "react";
import list from "../data/mock";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductItem from "../components/productItem"

import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch= useDispatch();
  const globalList =useSelector((state) =>state?.list)

  useEffect(() => {
    dispatch ({
      type:"SET_LIST",
      payload:list,
    })
  
  }, []);

  console.log(globalList)

  return (
    <div>
      {globalList?.map((i) => (
        <ProductItem i={i} key= {i?.id} />
      ))}
    </div>
  );
};

export default Home;
