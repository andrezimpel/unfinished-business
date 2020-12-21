import React, { useContext, useState } from 'react';

import StoreContext from '../../context';

import Button from '../button';
import LineItem from './line-item';

import styles from './cart.module.scss';

const Cart = ({ open=false, onClose }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <>
      <div className={styles.wrapper} data-open={open}>
        <div className={styles.close} onClick={onClose}>Schließen</div>
        <div className={styles.content}>
          <div className={styles.headline}>Warenkorb</div>
            <div className={styles.items}>
              {lineItems}
            </div>
            <div className={styles.infos}>
              <div className={styles.summary}>
                <div className={styles.help}>Steuern und Versand werden im nächsten Schritt berechnet.</div>
                <div className={styles.total}>Gesamt: {checkout.totalPrice * 1}€</div>
              </div>
              <Button onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Bezahlen</Button>
            </div>
        </div>
      </div>
      <div className={styles.backdrop} onClick={onClose} data-open={open}/>
    </>
  )
}

export default Cart;
