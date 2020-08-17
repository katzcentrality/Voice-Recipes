import React, { useEffect, useState } from 'react'
import NewsCards from './Components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles';

const alanKey = 'b9ea6a050a8115f07a4c2364cd25853d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
const classes = useStyles();
const [newsArticles, setNewsArticles] = useState([]);
const [activeArticle, setActiveArticle] = useState(-1);

useEffect(() => {
alanBtn({
key: alanKey,
onCommand: ({command, recipes, number}) => {
if(command === 'newHeadlines') {
setNewsArticles(recipes); 
setActiveArticle(-1);
} else if(command === 'highlight') {
setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
} else if(command === 'open') {
const parsedNumber = number.length > 2 ? wordsToNumbers(number): number;
const recipe = recipes[parsedNumber - 1];
window.open(recipes[number].url, '_blank');
}
}
})
}, []);

    return (
    <div>
        <div className={classes.logoContainer}>
        <img src="https://logodix.com/logo/2178287.png" alt="Recipes App" className={classes.alanLogo}/> 
        </div>
        <NewsCards recipes={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App;
