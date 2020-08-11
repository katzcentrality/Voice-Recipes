import React, { useEffect, useState } from 'react'
import NewsCards from './Components/NewsCards/NewsCards';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'b9ea6a050a8115f07a4c2364cd25853d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

const [newsArticles, setNewsArticles] = useState([]);

useEffect(() => {
alanBtn({
key: alanKey,
onCommand: ({command, articles}) => {
if(command === 'newHeadlines') {
setNewsArticles(articles);
}
}
})
}, []);


    return (
        <div>
        <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App;
