import filterBibles  from '../filterAction';

describe('darkmode actions', () => {
  it('should create an action object with dark mode content', () => {
    const expectedAction = {
      type: 'BIBLE_VERSIONS_FILTER',
      payload: 'king james'
    };
    expect(filterBibles('king james')).toEqual(expectedAction);
  });
});
