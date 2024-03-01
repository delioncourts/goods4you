import { initialState, quizReducer } from '../api/reducers/reducer';

describe('check quiz reducer', () => {
  test('should return the initial (default) state', () => {
    expect(quizReducer(undefined, {})).toEqual(initialState);
  });
});
