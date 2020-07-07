import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App ()  {
  const [initialValue, setInitalValue] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [period, setPeriod] = useState(0);
  const [installments, setInstallments] = useState([]);

  const handleInputChange = (newInitalValue, newTaxes, newPeriod) => {
    setInitalValue(newInitalValue);
    setTaxes(newTaxes);
    setPeriod(newPeriod);
  }

  useEffect(() => {
    const calcInstallments = [];

    for(let i=1; i <= period; i++){
      
      const realTaxes = taxes / 100;
      console.log(realTaxes)
      const totalValue = (initialValue * (Math.pow((1 + realTaxes), i))).toFixed(2);
      const diff = (totalValue - initialValue).toFixed(2);
      const percentage = ((diff/initialValue) * 100).toFixed(2);

      calcInstallments.push({
        installmentNumber: i,
        totalValue,
        diff,
        percentage,
      });
    }

    setInstallments(calcInstallments);
 
  }, [initialValue, taxes, period])

    return(
      <div>
        <h1 className="center">Cálculo de Juros Compostos</h1>
        <Form onChangeAttributes={handleInputChange}
          initalValue={initialValue}
          taxes={taxes}
          period={period}
        />
        <Installments installments={installments} />
      </div>
    );
}
