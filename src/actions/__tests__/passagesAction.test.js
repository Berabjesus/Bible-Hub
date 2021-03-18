import {
  passgaesLoading, passgaesFetchSuccess, passgaesFetchFail, fetchPassages,
} from '../passagesAction';

describe('Home actions - ', () => {
  it('should create an action to show the loading spinner in the content sidebar', () => {
    const expectedAction = {
      type: 'PASSAGE_FETCH_REQUEST',
    };
    expect(passgaesLoading()).toEqual(expectedAction);
  });

  it('should return a success object with on fetch success with the correct payload', () => {
    const payload = {
      bibles: [{ test: 'test 1' }, { test: 'test 2' }],
    };

    const expectedAction = {
      type: 'PASSAGE_FETCH_SUCCESS',
      payload,
    };
    expect(passgaesFetchSuccess(payload)).toEqual(expectedAction);
  });

  it('should return a failed object with on fetch success with the correct payload', () => {
    const payload = 'Sample fecth error';

    const expectedAction = {
      type: 'PASSAGE_FETCH_FAIL',
      payload,
    };
    expect(passgaesFetchFail(payload)).toEqual(expectedAction);
  });
});

describe('content api call', () => {
  it('should return a fetched data', () => {
    expect(fetchPassages()).toBeInstanceOf(Object);
  });
});
