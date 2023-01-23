import React from "react";
import fs from "fs/promises";
import path from "path";

function ProductInformation(props) {
  const { product } = props;
  return (
    <>
      <div>{product.title}</div>
      <div>{product.description}</div>
    </>
  );
}

export async function getStatic(context) {
  const { params } = context;
  const {pid} = params

  const filePath = path.join(process.cwd(), "src", "data", products.json);
  const jsonData = fs.readFile(filePath);
  const products = JSON.parse(jsonData);
  const product = products.find((product)=> product.id === pid);
  return {
    props: {
      product,
    },
  };
}

export default ProductInformation;
