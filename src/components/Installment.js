import React from "react";

export default function Installment(props) {
    const {installmentNumber, totalValue, diff, percentage} = props.installment;

    
    console.log(installmentNumber);
  return (
    <div style={styles.flexRow}>
        <span>{installmentNumber}</span>
        <span>{totalValue}</span>
        <span>{diff}</span>
        <span>{percentage}</span>
    </div>
  );

}

const styles = {
    flexRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "10px",
        border: "1px solid lightgray"
      },
}