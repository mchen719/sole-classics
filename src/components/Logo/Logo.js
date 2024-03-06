import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <img className={styles.image} src={'/images/logo/logo.jpeg'}/>
  </div>
);
}