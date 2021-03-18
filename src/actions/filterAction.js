const filterBibles = filterValue => ({
  type: 'BIBLE_VERSIONS_FILTER',
  payload: filterValue,
});

export default filterBibles;
