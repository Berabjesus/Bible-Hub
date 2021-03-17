import {
  biblesLoading, biblesFetchSuccess, biblesFetchFail, fetchBibles,
} from '../homeAction';

describe('Home actions', () => {
  it('should create an action to show the loading spinner in the index page', () => {
    const expectedAction = {
      type: 'BIBLE_VERSIONS_FETCH_REQUEST',
    };
    expect(biblesLoading()).toEqual(expectedAction);
  });

  it('should return a success object with on fetch success with the correct payload', () => {
    const payload = {
      bibles: [{test: 'test 1'},{test: 'test 2'}]
    }

    const expectedAction = {
      type: 'BIBLE_VERSIONS_FETCH_SUCCESS',
      payload,
    };
    expect(biblesFetchSuccess(payload)).toEqual(expectedAction);
  });

  it('should return a failed object with on fetch success with the correct payload', () => {
    const payload = 'Sample fecth error'

    const expectedAction = {
      type: 'BIBLE_VERSIONS_FETCH_FAIL',
      payload,
    };
    expect(biblesFetchFail(payload)).toEqual(expectedAction);
  });
});

describe('content api call', () => {
  it('should return a fetched data', () => {
    expect(fetchBibles()).toBeInstanceOf(Object);
  });
})
