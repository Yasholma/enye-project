export const getField = (profiles, field) => {
  const genders = new Set();
  profiles.map((profile) => genders.add(profile[field]));
  return [...genders];
};

// return paginated data
const Paginate = (array, pageSize = 5, pageNumber = 1) =>
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

export default Paginate;
