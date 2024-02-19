// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import { loadquiz } from "../../../../app/api/const";
import { AppThunk, AppDispatch } from "../../../..";

import {
    GET_QUIZ_REQUEST,
    GET_QUIZ_SUCCESS,
    GET_QUIZ_ERROR
} from "../const";

export type TQuiz = {
    name?: string,

}

export interface IGetQuizRequestAction {
    readonly type: typeof GET_QUIZ_REQUEST;
}

export interface IGetQuizErrorAction {
    readonly type: typeof GET_QUIZ_ERROR;
}

export interface IGetQuizSuccessAction {
    readonly type: typeof GET_QUIZ_SUCCESS;
    readonly quiz: TQuiz[];
}

export const getQuiz = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({
        type: GET_QUIZ_REQUEST,
    });
    loadquiz()
        .then((res:any) => {
            if (res.success) {
                dispatch({
                    type: GET_QUIZ_SUCCESS,
                    quiz: res.data,
                });
            } else {
                Promise.reject(`error occurred: ${res.status}`);
            }
        })
        .catch((err) => {
            dispatch({
                type: GET_QUIZ_ERROR,
            });
        });
}

export type TGetQuizActions = IGetQuizRequestAction | IGetQuizErrorAction | IGetQuizSuccessAction;