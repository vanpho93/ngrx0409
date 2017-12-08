import { Word } from '../types';

const defaultWords: Word[] = [
    { id: '1a', en: 'one', vn: 'mot', isMemorized: true },
    { id: '2a', en: 'two', vn: 'hai', isMemorized: false },
    { id: '3a', en: 'three', vn: 'ba', isMemorized: false },
    { id: '4a', en: 'four', vn: 'bon', isMemorized: true },
];

export function wordsReducer(state = defaultWords, action): Word[] {
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
