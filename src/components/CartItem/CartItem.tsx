import { ProductItemType } from '../../types';
import styles from './CartItem.module.css';
import Button from '@material-ui/core/Button';

type Props = {
  product: ProductItemType;
  addToCart: (item: ProductItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ product, addToCart, removeFromCart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.description}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>Price: ${product.price}</div>
          <div className={styles.total}>
            Total Price: ${(product.price * product.amount).toFixed(2)}
          </div>
        </div>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>

      <div className={styles.counter}>
        <div className={styles.counterValue}>{product.amount}</div>

        <div className={styles.buttonWrapper}>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => removeFromCart(product.id)}>
            -
          </Button>
          <Button variant='contained' color='primary' onClick={() => addToCart(product)}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
