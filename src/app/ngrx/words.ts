const defaultWords = [
    { id: '1a', en: 'one', vn: 'mot', isMemorized: true },
    { id: '2a', en: 'two', vn: 'hai', isMemorized: false },
    { id: '3a', en: 'three', vn: 'ba', isMemorized: false },
    { id: '4a', en: 'four', vn: 'bon', isMemorized: true },
];

export function wordsReducer(state = defaultWords, action) {
    return state;
}
