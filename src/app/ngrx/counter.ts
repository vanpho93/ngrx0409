import { Action } from '@ngrx/store';
// Quan ly trang thai cua ung dung
const defaultValue = 10;

export const CHANGE = 'CHANGE';
export const RESET = 'RESET';

export const counterReducer = (state: number = defaultValue, action) => {
    // if (action.type === 'ADD') return state + 1;
    // if (action.type === 'SUB') return state - 1;
    if (action.type === CHANGE) return state + action.changeValue;
    if (action.type === RESET) return defaultValue;
    return state;
};
