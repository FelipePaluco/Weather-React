import styles from './metrichSwitch.module.css';

const MetricSwitch = ({ onChange }) => {
  return (
    <div className={styles.switchContainer}>
      <input
        id="switch-shadow"
        className={`${styles.switch} ${styles.switchShadow}`}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor="switch-shadow"></label>
    </div>
  );
};

export default MetricSwitch;
