import React from "react";
import styles from "./DisplayData.module.css";

function DisplayData({ title, data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{title}</h1>
      {data.length > 0
        ? data.map((item) => {
            return (
              <div
                style={{ backgroundColor: item.color }}
                className={styles.cube}>
                <h3>{item.title}</h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default DisplayData;
