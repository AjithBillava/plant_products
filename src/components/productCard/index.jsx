
// const SAMPLE_CARD_DATA= {
//     "id": 1,
//     "name": "Pepperomia",
//     "category": "Air Purifier",
//     "price": 400,
//     "size": "4\" h",
//     "water": "250ml",
//     "light": "30-40%",
//     "fertilizer": "250gm",
//     "bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
//     "image": "https://i.imgur.com/4ucOXpZ.png"
//   }

// eslint-disable-next-line react/prop-types
const ProductCard = ({name,category,price, image} ) => {
 

  return (
    <div >
        <div>
            <p>{category}</p>
            <p>{name}</p>
            <div>
                <p>{price}</p>
                <div>
                    <button>wishlist</button>
                    <button>add to cart</button>
                </div>
            </div>
        </div>
        <div>{image}</div>

    </div>
  )
}

export default ProductCard