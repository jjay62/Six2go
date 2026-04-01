'use client'
import { addToCart } from "@/app/[locale]/actions/cart";
import { ShoppingCartIcon } from "./icons";
import { useTranslations } from 'next-intl';

const AddToCartBtn = ({ menuItemId, disabled }: { menuItemId: number, disabled: boolean }) => {
  const t = useTranslations('FoodItem')
  return (
    <form action={ addToCart.bind(null, menuItemId) }>
      <button
        disabled={disabled}
        type="submit"
        className="disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-blue-600 px-3 py-2 text-sm inline-flex items-center gap-2 font-semibold text-white transition-colors hover:bg-blue-700 hover:scale-110"
      >
        {disabled ? t('outOfStock') : t('addToCart')} <ShoppingCartIcon />
      </button>

    </form>
  )
}
export default AddToCartBtn;
