import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <h4 onClick={() => dispatch(filterCategory(category))}className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'}>{category}</h4>
  )
}

export default Filter;