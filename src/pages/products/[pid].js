import React from "react";
import fs from "fs/promises";
import path from "path";

function ProductInformation(props) {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  const products = JSON.parse(jsonData);

  return products;
}

export async function getStaticPaths() {
  const products = await getData();
  const productsIds = products.map((product) => product.id);
  const productIdParams = productsIds.map((id) => ({ params: { pid: id } }));

  return {
    paths: productIdParams,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { pid } = params;

  const products = await getData();

  const product = products.find((product) => product.id === pid);

  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      product,
    },
  };
}

export default ProductInformation;
