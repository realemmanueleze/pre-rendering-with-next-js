import React from "react";
import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;
  console.log(products);
  if (!products) {
    return null;
  }
  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: { products: data.products },
  };
}
// export async function getStaticProps() {
//   return {
//     props: {
//       products: [{ id: "prod1", title: "Product 1" }],
//     },
//   };
// }

export default HomePage;
