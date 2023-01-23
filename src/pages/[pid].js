import React from "react";
import { useRouter } from "next/router";

function ProductInformation() {
  const { query } = useRouter();
  
  const id = query.pid;

  return <div>{id}</div>;
}

export default ProductInformation;
