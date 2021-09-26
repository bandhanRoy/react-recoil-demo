import { animeListPageNumStore, animeTitlesStore } from "..";

// selector will return the value
const slicedAnimeTitles = selector => selector({
    key: "slicedAnimeTitles",
    get: ({ get }) => {
        const animes = get(animeTitlesStore);
        const pageNum = get(animeListPageNumStore);
        const newAnimeList = [...animes];
        const arrIndex = pageNum === 0 ? 0 : pageNum * 50 + 1;
        return newAnimeList.splice(arrIndex, 50);
    }
});

export default slicedAnimeTitles;