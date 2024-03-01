import {
    GET_QUIZ_REQUEST,
    GET_QUIZ_SUCCESS,
    GET_QUIZ_ERROR
} from "../const";

import { TGetQuizActions } from "../actions/actions";

import { TQuiz } from "../actions/actions";

type TIngredientState = {
  quiz: TQuiz[];
  quizRequest: boolean;
  quizError: boolean;
}

export const initialState: TIngredientState = {
  quiz: [],
  quizRequest: false,
  quizError: false,
};

export const quizReducer = (state = initialState, action: TGetQuizActions): TIngredientState => {
  switch (action.type) {
    case GET_QUIZ_REQUEST: {
      return {
        ...state,
        quizRequest: true,
        quizError: false,
      };
    }
    case GET_QUIZ_ERROR: {
      return {
        ...state,
        //сбрасываем состояние до начального чтобы пользователь не работал с устаревшими данными
        quiz: [],
        quizRequest: false,
        quizError: true,
      };
    }
    case GET_QUIZ_SUCCESS: {
      return {
        ...state,
        quiz: action.quiz,
        quizRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};