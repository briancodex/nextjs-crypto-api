import styles from './Coins.module.css';
import Link from 'next/link';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id
}) => {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price}</p>
              <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

              {priceChange < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}

              <p className={styles.coin_marketcap}>
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
