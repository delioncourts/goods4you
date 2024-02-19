import { combineReducers } from 'redux';

import { quizReducer } from '../../../features/QuizList/api/reducers/reducer';
//ключ-значение
export const rootReducer = combineReducers({
    quiz: quizReducer,
  });