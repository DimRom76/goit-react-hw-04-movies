const getYear = data => {
  if (!data) return '';
  return data.slice(0, 4);
};

const getGenres = arrayGenres => {
  return arrayGenres
    .reduce((acc, genre) => (acc += genre.name + '  '), '')
    .trim();
};

const apiData = { getYear, getGenres };

export default apiData;
