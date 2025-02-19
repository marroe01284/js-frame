import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../store";
export function SpecificProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const {cart, addToCart} = useCart();
  const url = "https://v2.api.noroff.dev/rainy-days/";
  useEffect(() => {
    async function getProduct() {
      const response = await fetch(url + id);
      const data = await response.json();
      setProduct(data.data);
    }
    getProduct();
  }, []);
  return(
      <>
      <h1>Specific</h1>
      {product ? <div>
        <h2>{product.title}</h2>
        <img src={product.image.url} alt={product.title} className="w-50"/>
        <p>{product.description}</p>
        {product.onSale ? (
          <>
          <p className="line-through">{product.price}</p>
          <p className="text-red-500">{product.discountedPrice}</p>
          </>
        ) : (
          <p>{product.price}</p>
        )}
        <button className="border border-red-500 p-2 rounded-md bg-green-500" onClick={()=>{
          addToCart(product.id);
          console.log(cart);
        }}>Purchase</button>
      </div>
      : <p>Loading...</p>}

      </>
      )
}
