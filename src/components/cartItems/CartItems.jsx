import React from 'react'
import styles from './cartitems.module.scss'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '@/redux/actions/cartActions'
const CartItems = ({item}) => {
  const dispatch = useDispatch()
  const remove = () => {
    dispatch(removeFromCart(item._id))
  }
  return (
   <>
    <div className={styles.innerCart}>
        <Image src={item.image} width={150} height={150} alt='item-image'/>
        <div>

        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>unit price<h4> ${item.price}</h4></p>
        <button onClick={()=>remove()}>remove</button>
        </div>
    </div>
   </>
  )
}

export default CartItems