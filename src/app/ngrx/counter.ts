import { Action } from '@ngrx/store';
// Quan ly trang thai cua ung dung
const defaultValue = 10;

export const counterReducer = (state: number = defaultValue, action: Action) => {
    if (action.type === 'ADD') return state + 1;
    if (action.type === 'SUB') return state - 1;
    return state;
};
