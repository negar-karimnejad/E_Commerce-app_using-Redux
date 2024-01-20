import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "../redux/hooks";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

function Navbar() {
  const count = useAppSelector((store) => store.cart.length);

  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <div className="bg-white pt-4 sticky top-0 z-50 max-w-full shadow">
        <div className="container mx-auto px-[15px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl cursor-pointer">Shopping</h1>
            <div className="flex items-center gap-4 md:gap-8">
              <div className="md:flex hidden items-center gap-3">
                <div className="flex items-center rounded-full border-2 text-gray-500 text-2xl justify-center cursor-pointer hover:bg-gray-200 transition-all duration-200 border-gray-300 w-10 h-10">
                  <AiOutlineUser />
                </div>
                <div>
                  <a href="#" className="text-gray-500">
                    Sign in
                  </a>
                </div>
              </div>
              <div
                onClick={() => setOpenCart(true)}
                className="cursor-pointer text-gray-500 text-2xl relative"
              >
                <FiShoppingCart />
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pt-4"></div>
      </div>
      <ShoppingCart openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
}

export default Navbar;
