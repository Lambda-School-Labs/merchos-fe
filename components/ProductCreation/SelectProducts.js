import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductData from "./ProductData";
import { Carousel } from "merch_components";
import Axios from "axios";
import {
  Bag,
  Cap,
  Mug,
  OuterWear,
  Shirt,
  Poster,
  Pants,
  Kids,
} from "./Icons/icons";

const Icons = styled.div`
  margin: 35px 0 0 38px;
  display: flex;
  flex-direction: row;
`;

const ProductHeading = styled.h2`
  font-size: 25px;
  position: relative;
  left: 30%;
  width: 35%;
  border-bottom: 1px solid black;
  font-weight: bold;
  margin-top: 10px;
`;

const ProductTitle = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  margin-left: 50px;
`;

const Button = styled.button`
  margin-right: 30px;
  border: 1px solid black;
  width: 50px;
  // height: 60px;
  outline: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1;
`;

const ImageName = styled.h1`
  font-size: 20px;
  position: absolute;
  width: 100%;
  top: 17%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const SelectProducts = ({ select }) => {
  const [selected, setSelected] = useState(false);
  const [productName, setProductName] = useState("short-sleeve-shirts");
  const [products, setProducts] = useState([]);
  const [iterator, setIterator] = useState(2);
  const [productId, setProductId] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    Axios.get(
      `https://api.scalablepress.com/v2/categories/${productName}`
    ).then((data) => {
      console.log(data);
      setProducts(
        data.data.products.filter((p, i) => {
          if (!p.image) {
            p[i++];
          } else if (i + 1 < iterator * 5 + 1) {
            console.log("reach this");
            // console.log(imageName);
            // console.log(p.name);
            setProductId([p.id]);
            return p.name;
          } else {
            return null;
          }
        })
      );
    });
  }, [productName]);

  // console.log(imageName);
  const images = [];
  const pnames = [];
  // console.log("productId", productId);

  const getImages = () => {
    products.map((ps, i) => {
      console.log(i);

      images.push(ps.image.url);
      pnames.push(ps.name);
      // console.log(images);
      console.log(pnames);
      // console.log(ps.image.url);
    });
  };
  getImages();

  const names = products.values();

  const imageName = [];
  for (let name of names) {
    imageName.push(name.name);
    console.log("names", name.name);
    console.log("imageName", imageName);
    // return imageName;
  }
  console.log("product.name", products.values());

  // let count = 0;
  let imageTitle = "";
  const callback = (e) => {
    for (let i = 0; i < images.length; i++) {
      if (count === i) {
        console.log("pnames", pnames[i]);
        imageTitle += pnames[i];
      }
    }
  };
  // console.log(imageName);

  const handleClick = (e) => {
    setProductName(e.target.value);
    console.log(e.target.value);
  };

  const increment = () => {
    // console.log("count", count);
    if (count >= images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }

    console.log("count", count);
  };
  console.log("count", count);
  const decrement = () => {
    if (count <= 0) {
      setCount(images.length - 1);
    } else {
      setCount(count - 1);
    }
  };
  // console.log(selected);
  console.log("temparry", products);
  return (
    <div>
      <ProductHeading>Pick a Product to Sell:</ProductHeading>
      <Icons>
        <Button
          select={selected}
          onClick={handleClick}
          value="short-sleeve-shirts"
        >
          <Shirt />
        </Button>
        <Button select={selected} onClick={handleClick} value="hats">
          <Cap />
        </Button>
        <Button select={selected} onClick={handleClick} value="outerwear">
          <OuterWear />
        </Button>
        <Button select={selected} onClick={handleClick} value="shorts">
          <Pants />
        </Button>
        <Button select={selected} onClick={handleClick} value="mugs">
          <Mug />
        </Button>
        <Button select={selected} onClick={handleClick} value="small-bags">
          <Bag />
        </Button>
        <Button select={selected} onClick={handleClick} value="youth-t-shirts">
          <Kids />
        </Button>
        <Button select={selected} onClick={handleClick} value="posters">
          <Poster />
        </Button>
      </Icons>
      <ProductTitle>
        <h2 style={{ marginLeft: "-6px" }}>Shirt</h2>
        <h2 style={{ marginLeft: "52px" }}>Hat</h2>
        <h2 style={{ marginLeft: "30px" }}>OuterWear</h2>
        <h2 style={{ marginLeft: "17px" }}>Shorts</h2>
        <h2 style={{ marginLeft: "37px" }}>Mug</h2>
        <h2 style={{ marginLeft: "47px" }}>Bag</h2>
        <h2 style={{ marginLeft: "53px" }}>Kid</h2>
        <h2 style={{ marginLeft: "42px" }}>Posters</h2>
      </ProductTitle>
      <div style={{ marginTop: "-90px", zIndex: -100 }}>
        {callback()}

        <div>
          <ImageName>{imageTitle}</ImageName>
        </div>

        <Carousel
          images={images}
          count={count}
          incrementCB={increment}
          decrementCB={decrement}
        />
      </div>
      <ProductData />
    </div>
  );
};

export default SelectProducts;
