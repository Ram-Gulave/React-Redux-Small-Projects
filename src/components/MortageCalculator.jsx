import { useState } from "react";

const MortgageCalculator = () => {
  const [data, setData] = useState({
    amount: 100000,
    period: 30,
    rate: 4.5,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "amount" || name === "period"
        ? Number(value) || 0
        : parseFloat(value) || 0,
    }));
  };

  const calculateMortgage = () => {
    const p = data.amount;
    const r = data.rate / 100 / 12;
    const n = data.period * 12;

    if (r === 0) {
      const monthly = p / n;
      setResult({
        monthlyPayment: monthly.toFixed(2),
        totalPayment: p.toFixed(2),
        totalInterest: "0.00",
      });
      return;
    }

    const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - p;

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Mortgage Calculator
        </h1>

        <div className="space-y-6">
          {/* Loan Amount */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Loan Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={data.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              min="10000"
              step="1000"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              id="rate"
              name="rate"
              value={data.rate}
              onChange={handleChange}
              step="0.01"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
          </div>

          {/* Loan Period */}
          <div>
            <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term (years)
            </label>
            <input
              type="number"
              id="period"
              name="period"
              value={data.period}
              onChange={handleChange}
              min="1"
              max="50"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
          </div>
        </div>

        <button
          onClick={calculateMortgage}
          className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium
                     hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     transition duration-200"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Results</h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex justify-between">
                <span>Monthly Payment:</span>
                <span className="font-bold text-indigo-700">
                  ${result.monthlyPayment}
                </span>
              </p>
              <p className="flex justify-between">
                <span>Total to Pay:</span>
                <span className="font-medium">${result.totalPayment}</span>
              </p>
              <p className="flex justify-between">
                <span>Total Interest:</span>
                <span className="font-medium text-red-600">${result.totalInterest}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;

// import { useState } from 'react';

// const MortgageCalculator = () => {
//   const [amount, setAmount] = useState(300000);
//   const [rate, setRate] = useState(4.75);
//   const [years, setYears] = useState(30);
//   const [isMonthly, setIsMonthly] = useState(true);

//   const calculatePayment = () => {
//     const principal = Number(amount);
//     const annualRate = Number(rate) / 100;
//     const months = Number(years) * 12;
//     const monthlyRate = annualRate / 12;

//     if (monthlyRate === 0) {
//       return principal / months;
//     }

//     const power = Math.pow(1 + monthlyRate, months);
//     const monthlyPayment = (principal * monthlyRate * power) / (power - 1);

//     return monthlyPayment;
//   };

//   const monthly = calculatePayment();
//   const totalPayment = monthly * (years * 12);
//   const totalInterest = totalPayment - amount;

//   const formatCurrency = (value) =>
//     new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(value);

//   return (
//     <div style={{
//       maxWidth: 460,
//       margin: '3rem auto',
//       padding: '2rem',
//       background: '#fff',
//       borderRadius: 12,
//       boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
//     }}>
//       <h1 style={{ margin: '0 0 1.8rem', fontSize: '1.9rem', textAlign: 'center' }}>
//         Mortgage Calculator
//       </h1>

//       <div style={{ display: 'grid', gap: '1.4rem' }}>
//         <div>
//           <label>Loan Amount</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={e => setAmount(e.target.value)}
//             min="10000"
//             step="1000"
//             style={{ width: '100%' }}
//           />
//         </div>

//         <div>
//           <label>Interest Rate (% per year)</label>
//           <input
//             type="number"
//             value={rate}
//             onChange={e => setRate(e.target.value)}
//             step="0.01"
//             min="0"
//             style={{ width: '100%' }}
//           />
//         </div>

//         <div>
//           <label>Loan Term</label>
//           <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
//             <input
//               type="number"
//               value={years}
//               onChange={e => setYears(e.target.value)}
//               min="1"
//               max="50"
//               style={{ flex: 1 }}
//             />
//             <span>years</span>
//           </div>
//         </div>
//       </div>

//       <div style={{
//         margin: '2rem 0',
//         padding: '1.5rem',
//         background: '#f8fafc',
//         borderRadius: 10,
//         textAlign: 'center'
//       }}>
//         <div style={{ fontSize: '2.4rem', fontWeight: 'bold', color: '#1e40af' }}>
//           {formatCurrency(monthly)}
//         </div>
//         <div style={{ color: '#64748b', marginTop: '0.3rem' }}>
//           per {isMonthly ? 'month' : 'year'}
//         </div>

//         <div style={{ margin: '1.5rem 0', fontSize: '0.95rem', color: '#475569' }}>
//           <div>
//             Total to repay: <strong>{formatCurrency(totalPayment)}</strong>
//           </div>
//           <div>
//             Total interest: <strong style={{ color: '#dc2626' }}>
//               {formatCurrency(totalInterest)}
//             </strong>
//           </div>
//         </div>
//       </div>

//       <div style={{ textAlign: 'center', marginTop: '1rem' }}>
//         <button
//           onClick={() => setIsMonthly(!isMonthly)}
//           style={{
//             padding: '0.6rem 1.3rem',
//             fontSize: '0.95rem',
//             background: '#e2e8f0',
//             border: 'none',
//             borderRadius: 20,
//             cursor: 'pointer'
//           }}
//         >
//           Show {isMonthly ? 'yearly' : 'monthly'} payment
//         </button>
//       </div>

//       <p style={{
//         marginTop: '2rem',
//         fontSize: '0.85rem',
//         color: '#6b7280',
//         textAlign: 'center'
//       }}>
//         This is an estimate using the standard fixed-rate mortgage formula.
//       </p>
//     </div>
//   );
// };

// export default MortgageCalculator;