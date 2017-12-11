export interface Word {
    _id: string;
    en: string;
    vn: string;
    isMemorized: boolean;
}

export interface AppState {
    counter: number;
    words: Word[];
}
