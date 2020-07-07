import React from "react";
import Installment from "./Installment";

export default function Installments({ installments }) {
  return (
    <div>
      {installments.map((currtInstallment) => {
        return (
          <div key={currtInstallment.installmentNumber}>
            <Installment installment={currtInstallment} />
          </div>
        );
      })}
    </div>
  );
}
