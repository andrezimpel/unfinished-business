import React, { useContext } from 'react'

import StoreContext from '../../context';

import Button from '../button';

import styles from './line-item.module.scss';

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <img
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
      height="150px"
      className={styles.image}
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <div className={styles.item}>
      <div to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </div>
      <div className={styles.variant}>
        <div className={styles.title}>{item.title}</div>
        {`  `}
        {item.variant.title === !'Default Title' ? item.variant.title : ''}
        {selectedOptions}
      </div>
      <div className={styles.money}>
        <div className={styles.price}>
          {item.variant.price * 1}€
        </div>
        <div className={styles.quantity}>
          x{item.quantity}
        </div>
        <div className={styles.subtotal}>
          {item.variant.price * item.quantity}€
        </div>
      </div>
      <Button variant="secondary" onClick={handleRemove}>Entfernen</Button>
    </div>
  )
}

export default LineItem
