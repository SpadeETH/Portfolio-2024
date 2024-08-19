import React from "react";
import styles from "../css/CustomAlert.module.css"; // Create a CSS file for styling

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  return (
    <div className={styles.alertContainer}>
      <div className={styles.alert}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeButton}>
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
