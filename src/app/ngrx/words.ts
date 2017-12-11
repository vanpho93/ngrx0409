import { Word } from '../types';

const defaultWords: Word[] = [];

export function wordsReducer(state = defaultWords, action): Word[] {
    if (action.type === 'SET_WORD') return action.words;
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word.id !== action.id);
    }
    if (action.type === 'ADD_WORD') {
        return state.concat(action.word);
    }
    if (action.type === 'TOGGLE_IS_MEMORIZED') {
        return state.map(word => {
            if (word.id !== action.id) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    return state;
}
