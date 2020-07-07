import React, {useState, useEffect} from "react";

export default function Form({initalValue, taxes, period, onChangeAttributes}) {

    const [newInitalValue, setNewInitalValue] = useState(initalValue);
    const [newTaxes, setNewTaxes] = useState(taxes);
    const [newPeriod, setNewPeriod] = useState(period);

    const handleInitalValueChange = (event) =>{
        setNewInitalValue(event.target.value);
    };

    const handleTaxesChange = (event) =>{
        setNewTaxes(event.target.value);
    };

    const handlePeriodChange = (event) =>{
        setNewPeriod(event.target.value);
    };

    useEffect(() => {
        onChangeAttributes(newInitalValue, newTaxes, newPeriod)
    }, [newInitalValue, newTaxes, newPeriod, onChangeAttributes])
    


  return (
    <div style={styles.flexRow}>
      <div className="input-field">
        <input
          type="number"
          value={newInitalValue}
          onChange={handleInitalValueChange}
        />
        <label className="active">Montante Inicial:</label>
      </div>

      <div className="input-field">
        <input
          type="number"
          value={newTaxes}
          onChange={handleTaxesChange}
        />
        <label className="active">Taxa de juros mensal:</label>
      </div>

      <div className="input-field">
        <input
          type="number"
          value={newPeriod}
          onChange={handlePeriodChange}
        />
        <label className="active">Período (mensal):</label>
      </div>
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
      },
}
