import {
  setDark, setLite,
} from '../darkModeAction';

describe('darkmode actions', () => {
  it('should create an action object with dark mode content', () => {
    const expectedAction = {
      type: 'DARK',
      payload: 'black'
    };
    expect(setDark('black')).toEqual(expectedAction);
  });

  it('should create an action object with appropriate content', () => {
    const expectedAction = {
      type: 'LITE',
    };
    expect(setLite()).toEqual(expectedAction);
  });

});
