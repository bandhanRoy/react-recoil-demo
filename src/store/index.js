import { atom } from "recoil";
import animeTitles from './AnimeTitle.store';
import animeListPageNum from './AnimePageNum.store';

export const animeTitlesStore = animeTitles(atom);
export const animeListPageNumStore = animeListPageNum(atom);