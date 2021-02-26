import { ProductItemType } from '../../types';
import styles from './CartItem.module.css';
import Button from '@material-ui/core/Button';

type Props = {
  product: ProductItemType;
};

const CartItem: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.description}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>Price: ${product.price}</div>
          <div className={styles.total}>Total Price:</div>
        </div>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>

      <div className={styles.counter}>
        <div className={styles.counterValue}>1</div>
        <div className={styles.buttonWrapper}>
          <Button variant='contained' color='secondary'>
            -
          </Button>
          <Button variant='contained' color='primary'>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
