const toCelsius = (f) => {
    return parseInt((5/9) * (f-32));
}

const getImageUrl = (IconNumber = '') => {
    if(!IconNumber)
        return;
    let newIconNumber = IconNumber.toString();
    if (newIconNumber.length === 1) {
        newIconNumber = "0" + newIconNumber;
    }
    return `https://developer.accuweather.com/sites/default/files/${newIconNumber}-s.png`;
};

export {
    toCelsius,
    getImageUrl
};