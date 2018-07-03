import { createRoutine } from 'redux-saga-routines';
import * as actionTypes from './actionTypes';

// please note that routines helps in creating action creators of 4 types for a given actionType(string): request, success, failure and completed 

export const searchImages = createRoutine(actionTypes.SEARCH_IMAGES);


//this is a normal action creator here

export const clearData = () => { return { type: actionTypes.CLEAR_IMAGES_DATA }; };