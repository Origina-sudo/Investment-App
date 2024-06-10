
 import{ calculateInvestmentResults,formatter} from '../util/investment'
export default function Result({input}){

const resultData = calculateInvestmentResults(input);
 console.log(resultData);

 const initialInvestment= resultData[0].valueEndOfYear-
 resultData[0].interest
  -resultData.annualInvestment;
return <table id='result'>
<thead>
    <tr>
        <th>Year</th>
        <th>Investment Ve</th>
        <th>Interst (year)</th>
        <th>Total  Interest</th>
        <th>Invested Capital</th>
    </tr>
</thead>
<tbody>
   {resultData.map((yearData)=>{
    const totalInterst=
     yearData.valueEndOfYear-yearData.annualInvestment * yearData.year - initialInvestment;
        return (
            <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)} </td>
                <td>{formatter.format(totalInterst)} </td>
                <td> </td>
            </tr>
        )
    })}
</tbody>
</table>
}