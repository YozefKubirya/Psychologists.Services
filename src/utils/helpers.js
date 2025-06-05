export default function sortPsychologists(psychologists, sortBy) {
  const sortedArray = [...psychologists];

  if (sortBy === 'A-Z') {
    sortedArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'Z-A') {
    sortedArray.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'PRICE_LOW') {
    sortedArray.sort((a, b) => a.price_per_hour - b.price_per_hour);
  } else if (sortBy === 'PRICE_HIGH') {
    sortedArray.sort((a, b) => b.price_per_hour - a.price_per_hour);
  } else if (sortBy === 'POPULAR_HIGH') {
    sortedArray.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'POPULAR_LOW') {
    sortedArray.sort((a, b) => a.rating - b.rating);
  }

  return sortedArray;
}
