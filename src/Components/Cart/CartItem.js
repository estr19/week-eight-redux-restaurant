import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
  const dishes = dataDishes.find(item => item.id === cartItem.dishId);
  const dispatch = useDispatch();

  return (
    <div className='centered'>
      <p style={{display: 'flex'}}>{cartItem.quantity} serving(s) of {dishes.name} - <i><strong>${dishes.price * cartItem.quantity}</strong></i>&nbsp;
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
          <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='remove_icon'/>
        </span>
      </p>
    </div>
  )
}

export default CartItem;