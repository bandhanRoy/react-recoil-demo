const animeTitles = atom => atom({
    key: "animeTitleList", // this should be a unique ID among other atoms and selectors we will create in the app.
    default: [], // this is the default value of the atom.
});

export default animeTitles;