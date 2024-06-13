
import { calculateInvestmentResults, formatter } from '../util/investment.js'
export default function Result({ input }) {

    const resultData = calculateInvestmentResults(input);
     
   

    const initialInvestment = resultData[0].valueEndOfYear -
        resultData[0].interest - resultData[0].annualInvestment;
        
        


     

    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interst (year)</th>
                <th>Total  Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData => {
                const totalInterst =
                    yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterst
                    
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)} </td>
                        <td>{formatter.format( totalInterst)} </td>
                        <td> {formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
}