import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";


export default function Home(props) {
  const { products } = props;
  if (!products) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {" "}
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data,
    },
    revalidate: 10
  };
}
