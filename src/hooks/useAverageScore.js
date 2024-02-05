// import { useState, useEffect } from 'react';

// export const useAverageScore = (rankingAverage) => {
//     console.log("dentro del hook", rankingAverage)
//   const [averageScore, setAverageScore] = useState(null);

//   useEffect(() => {
//     if (rankingAverage && rankingAverage.length > 0) {
//       const totalScore = rankingAverage.reduce((total, item) => total + item.score, 0);
//       const avgScore = totalScore / rankingAverage.length;
//       setAverageScore(avgScore);
//     }
//   }, [rankingAverage]);

//   return averageScore;
// };

// import { useState, useEffect } from 'react';

// export const useAverageScore = (rankingAverage) => {
//   const [averageScore, setAverageScore] = useState(null);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     if (rankingAverage) {
//       const additionalInfoScores = Array.isArray(rankingAverage.additionalInfo) ? rankingAverage.additionalInfo.map(item => item.score) : [];
//       const scores = [...additionalInfoScores, rankingAverage.data?.score].filter(Boolean);
//       if (scores.length > 0) {
//         const totalScore = scores.reduce((total, score) => total + score, 0);
//         const avgScore = totalScore / scores.length;
//         setAverageScore(avgScore);

//         if (avgScore >= 1 && avgScore <= 4) {
//           setMessage("I do not recommend it.");
//         } else if (avgScore >= 5 && avgScore <= 7) {
//           setMessage("You may have fun.");
//         } else if (avgScore > 8) {
//           setMessage("Great, this is one of the best anime.");
//         }
//       }
//     }
//   }, [rankingAverage]);

//   return { averageScore, message };
// };

import { useState, useEffect } from 'react';

export const useAverageScore = (rankingAverage) => {
  const [averageScore, setAverageScore] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setAverageScore(0);
    setMessage('');
  
    if (rankingAverage) {
      const additionalInfoScores = Array.isArray(rankingAverage.additionalInfo) ? rankingAverage.additionalInfo.map(item => item.score) : [];
      const scores = [...additionalInfoScores, rankingAverage.data?.score].filter(Boolean);
      if (scores.length > 0) {
        const totalScore = scores.reduce((total, score) => total + score, 0);
        const avgScore = Math.round(totalScore / scores.length); // Redondear el promedio
        setAverageScore(avgScore);
  
        if (avgScore >= 1 && avgScore <= 4) {
          setMessage("I do not recommend it.");
        } else if (avgScore >= 5 && avgScore <= 7) {
          setMessage("You may have fun.");
        } else if (avgScore >= 8) { 
          setMessage("Great, this is one of the best anime.");
        }
      } else {
        setMessage("I do not recommend it.");
      }
    } else {
      setMessage("I do not recommend it.");
    }
  }, [rankingAverage]);
  
  return { averageScore, message };

};