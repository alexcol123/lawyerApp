'use client'

import { Button } from "@/components/ui/button";

import { BsCart } from "react-icons/bs";
import { useRouter } from 'next/navigation'

const CartIcon = () => {
  const router = useRouter()



  return (
    <div className=" rounded-md  mx-4 group  transition duration-500">
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer relative  group-hover:bg-primary transition duration-500 '
        onClick={() => {
          router.push('/carrito')
        }}

      >
        <BsCart size={20} />

        <span className='absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full px-1 group-hover:bg-green-600 group-hover:transition group-hover:duration-500  '>5</span>
      </Button>
    </div>
  )
}
export default CartIcon