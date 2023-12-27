import styles from "./index.module.scss";

interface Props {
  /**
   * descrition for each property
   */
  label: string;
}

/**
 * Description for Component
 * @returns JSX.Element
 */
const Sample = ({ label }: Props): JSX.Element => {
  return <div className={styles.test}>{label}</div>;
};

export default Sample;
