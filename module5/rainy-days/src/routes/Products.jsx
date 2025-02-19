import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const url = "https://v2.api.noroff.dev/rainy-days";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProducts(data.data);
    }
    getProducts();
  }, []);
  return (
    <>
      <div className="">Products Page</div>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* //return the data from the api response */}
        {products.map((products) => {
          return (
            <Link to={"/product/" + products.id} key={products.id} className="max-w-64 border">
              <h2 className="font-bold text-2xl">{products.title}</h2>
              <img
                src={products.image.url}
                alt={products.title}
                className="w-50 h-64"
              />
              <p className="w-50">{products.description}</p>
              {products.onSale ? (
                <>
                  <p className="line-through">{products.price}</p>
                  <p className="text-red-500">{products.discountedPrice}</p>
                </>
              ) : (
                <p>{products.price}</p>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
