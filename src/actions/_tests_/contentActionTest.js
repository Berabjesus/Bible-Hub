import { contentLoading, contentFetchSuccess, contentFetchFail, fetchContent } from '../contentAction';

describe('content actions', () => {
  it('should create an action to show the loading spinner in the bible content', () => {
    const expectedAction = {
      type: 'CONTENT_FETCH_REQUEST',
    };
    expect(contentLoading()).toEqual(expectedAction);
  });

  it('should return a success message on fetch success with the correct payload', () => {
    const payload =  {
      text: "<p> <span style=\'text-decoration:none;\' lang=\'en-US\'><sup>1</sup></span><span lang=\'en-US\'>Now Naaman was the commander of the army of the king of Aram. He was a great man before his master and highly regarded, for by him Yahweh had given victory to Aram. Now the man was a mighty warrior, but he was afflicted with a skin disease. </span> </p>"
    }

    const expectedAction = {
      type: 'CONTENT_FETCH_SUCCESS',
      payload: payload,
    };
    expect(contentFetchSuccess(payload)).toEqual(expectedAction);
  });
});
