import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(DataContext);

  const [currentProduct] = products.filter((item) => item.id == productId);
  const { name, category, price, image, size, light, water, fertilizer } =
    currentProduct;
  console.log(name, category, price, image, size);

  return (
    <div>
      <div>
        <p>{category}</p>
        <p>{name}</p>
        <div>
          <p>price</p>
          <p>{price}</p>
        </div>
        <div>
          size
          {size}
        </div>
        <div>
          <p>overview</p>
          <div>
            <p>{water}</p>
            <p>{light}</p>
            <p>{fertilizer}</p>
          </div>
        </div>
        <div>
          <div>
            <button>wishlist</button>
            <button>add to cart</button>
          </div>
        </div>
      </div>
      <div>{image}</div>
    </div>
  );
};

export default ProductPage;
