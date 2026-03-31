import { addToCart } from "@/app/actions/cart";
import { ShoppingCartIcon } from "./icons";

const AddToCartBtn = ({ menuItemId, disabled }: { menuItemId: number, disabled: boolean }) => {
  return (
    <form action={ addToCart.bind(null, menuItemId) }>
      <button
        disabled={disabled}
        type="submit"
        className="disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-blue-600 px-3 py-2 text-sm inline-flex items-center gap-2 font-semibold text-white transition-colors hover:bg-blue-700 hover:scale-110"
      >
        {disabled ? 'Out of Stock' : 'Add to Cart'} <ShoppingCartIcon />
      </button>

    </form>
  )
}
export default AddToCartBtn;