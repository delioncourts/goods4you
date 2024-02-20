import { combineReducers } from 'redux';

import { quizReducer } from '../../../features/QuizList/api/reducers/reducer';

export const rootReducer = combineReducers({
    quiz: quizReducer,
  });