import { Notyf } from "notyf";
import { CgClose } from "react-icons/cg";
import { TbShoppingCartOff } from "react-icons/tb";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteFromCart } from "../redux/slice/cartSlice";
import formatCurrency from "../utilities/formatCurrency";

type ShoppingCartProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShoppingCart({ openCart, setOpenCart }: ShoppingCartProps) {
  const products = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  const removeHandler = (id: number) => {
    dispatch(deleteFromCart(id));
    const notyf = new Notyf({
      duration: 1000,

      position: {
        x: "center",
        y: "top",
      },
    });
    notyf.error("Removed From Cart!");
  };
  return (
    <>
      <div
        onClick={() => setOpenCart(false)}
        className={`${
          openCart ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-500 fixed top-0 right-0 z-50 h-screen w-full bg-black/70`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            openCart ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 fixed top-0 right-0 h-screen bg-white pb-20 md:w-80 w-72`}
        >
          <div className="flex items-center justify-between p-5">
            <h2 className="uppercase font-bold">Your Cart</h2>
            <div
              className="text-lg cursor-pointer"
              onClick={() => setOpenCart(false)}
            >
              <CgClose />
            </div>
          </div>

          <main className="mt-5 max-h-80 overflow-y-auto px-5">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="border-b py-4 border-gray-100 flex justify-between items-center"
                >
                  <div className="max-w-14 cursor-pointer">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold">{product.title}</p>
                    <p className="font-medium text-gray-500 text-sm">
                      {product.quantity} x {formatCurrency(product.price)}
                    </p>
                  </div>
                  <button onClick={() => removeHandler(product.id)}>
                    <CgClose />
                  </button>
                </div>
              ))
            ) : (
              <div className="mt-10 flex flex-col items-center justify-center gap-5">
                <p className="font-medium text-xl text-orange-500">
                  Your Cart is Empty
                </p>
                <div className="text-9xl text-gray-100">
                  <TbShoppingCartOff />
                </div>
              </div>
            )}
          </main>
          {products.length > 0 && (
            <>
              <div className="px-5 flex font-bold text-lg items-center justify-between my-8">
                <p>Total:</p>
                <p>
                  {formatCurrency(
                    products.reduce((total, item) => {
                      const product = products.find((i) => i.id === item.id);
                      return total + (product?.price || 0) * item.quantity;
                    }, 0)
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <Button>View Cart</Button>
                <Button>Checkout</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
