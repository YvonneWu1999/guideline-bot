const musicgenre = [
    'Pop music', 'EDM music',
    'Hiphop music', 'Rap music',
    'R&B music', 'Latin music',
    'Rock music', 'Metal music',
    'Country music', 'Folk music',
    'pop music', 'Classical music',
    'Jazz music', 'Blues music',
    'Dream pop music', 'Indie pop music',
    'Traditional music', 'Folk music'
]
//generate random music genre  
const randommusic = () => {
    //Fisher-Yates Shuffle
    for (let i = musicgenre.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [musicgenre[i], musicgenre[j]] = [musicgenre[j], musicgenre[i]];
    }
    return musicgenre.slice(0, 1)
}
module.exports = randommusic