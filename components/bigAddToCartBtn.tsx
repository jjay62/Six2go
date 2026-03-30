import { addToCart } from "@/app/actions/cart";
import { ShoppingCartIcon } from "./icons";
const BigAddToCartBtn = ({ menuItemId, disabled }: { menuItemId: number, disabled: boolean }) => {
  return (
    <form action={ addToCart.bind(null, menuItemId) }>
      <button
        disabled={disabled}
        type="submit"
        className="disabled:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50  inline-flex items-center gap-2 rounded-md bg-blue-600 px-20 py-4 text-md font-semibold text-white transition-colors hover:bg-blue-700 hover:scale-102"
      >
        {disabled ? 'Out of Stock' : 'Add to Cart'} <ShoppingCartIcon />
        
      </button>
    </form>
  )
}
export default BigAddToCartBtn;