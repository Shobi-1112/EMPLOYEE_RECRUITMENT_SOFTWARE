export const splitHR = (data) => {
  const techHRData = data.filter((item) => item.roundType === 'Technical');
  const personalHRData = data.filter((item) => item.roundType !== 'Technical');
  return {
    techHRData,
    personalHRData,
  };
};
