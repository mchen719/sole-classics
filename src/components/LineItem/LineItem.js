import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineItem}>
    <div className="flex-ctr-ctr"><img className={styles.image} src={lineItem.item.emoji} style={{marginLeft: "40px"}}/></div>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr" style={{marginLeft: "50px"}}>{lineItem.item.name}</span>
      {/* <span>{lineItem.item.price.toFixed(2)}</span> */}
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          style={{marginLeft: "20px", color: "black"}}
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
        >−</button>
      }
      <span>{lineItem.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          style={{marginRight: "20px", color: "black"}}
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineItem.extPrice.toLocaleString() + ".00"}</div>
  </div>
);
}