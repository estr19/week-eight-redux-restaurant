import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return(
    <div className='centered'>
      <h2>{dish.name}</h2>
      <img src={`./${dish.img}.jpg`} alt={dish.name} />
      <h3>${dish.price}</h3>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <button onClick={() => dispatch(addItemToCart({dish, quantity}))}>add to cart</button>
    </div>
  )
}

export default Dish;