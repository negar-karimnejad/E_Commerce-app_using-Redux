import { BsStar, BsStarFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/slice/cartSlice";
import { ProductProps } from "../types";
import formatCurrency from "../utilities/formatCurrency";
import Button from "./Button";

function Product(product: ProductProps) {
  const { title, category, price, rating, views, image } = product;
  const dispatch = useAppDispatch();

  return (
    <div className="border p-3 flex flex-col items-center gap-2 shadow-lg">
      <div className="max-w-56 h-64 transition-all cursor-pointer hover:scale-105">
        <img className="" src={image} alt={title} />
      </div>
      <div className="border-t w-full mb-2 border-gray-100"></div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex gap-10 ">
          <p className="text-gray-500">{category}</p>
          <p className="font-bold text-lg">{title}</p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <p className="flex text-yellow-400">
              {[...Array(rating)].fill(0).map((_, index) => (
                <BsStarFill key={index} />
              ))}
              {[...Array(5 - rating)].fill(0).map((_, index) => (
                <BsStar key={index} />
              ))}
            </p>
            <p className="text-gray-500 text-sm">({views} Review)</p>
          </div>
          <p className="text-sky-500 font-bold text-lg">
            {formatCurrency(price)}
          </p>
        </div>
      </div>
      <Button onClick={() => dispatch(addToCart(product))}>
        <FiShoppingCart />
        Add To Cart
      </Button>
    </div>
  );
}

export default Product;
