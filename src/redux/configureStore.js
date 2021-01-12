import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms, formReducer } from 'react-redux-form';

import { InitialAnswer } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {Question} from './questions';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
          question:  Question,
          ...createForms({
            answer: InitialAnswer
        })
            }),
        applyMiddleware(thunk, logger)
    );

    return store;
}