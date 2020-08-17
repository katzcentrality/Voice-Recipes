import React from 'react'
import {Grid, Grow, Typography} from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js';

const url = ['https://img.taste.com.au/K1S-jtpM/taste/2016/11/top-50-desserts-117787-1.jpeg', 
'https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg',
'https://cf.ltkcdn.net/cooking/images/orig/214593-1732x1732-Cuisine-of-different-countries.jpg']

const infoCards = [
    {backgroundImage: `url(${url[0]})`, title: 'Recipes by Meal Type', text: 'Say breakfast, lunch, dinner, snack or teatime' },
    {backgroundImage: `url(${url[1]})`, title: 'Recipes by Dish Type', text: 'Say something like pancake, dessert, soup, salad'},
    {backgroundImage: `url(${url[2]})`, title: 'Recipes by Cuisine Type', text: 'Say something like French, Japanese, Chinese'}
]

const NewsCards = ({recipes}) => {
const classes = useStyles();

if(!recipes.length) {
return (
<Grow in>
<Grid className={classes.container} container alignItems="stretch" spacing={3}>
{infoCards.map((infoCard => (
<Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
<div className={classes.card} style={{backgroundImage: infoCard.backgroundImage, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
<Typography variant="h5">{infoCard.title}</Typography>
{infoCard.info ? <Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}:</strong>
<br />
{infoCard.info}
</Typography> : null}
<Typography variant="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
</div>
</Grid>
)))} 
</Grid>
</Grow>
)
    
}
    


    return (
        <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {recipes.map((recipe, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}> 
        <NewsCard recipe={recipe} i={i}/>
        </Grid>
        ))}
        </Grid>
        </Grow>
    )
}

export default NewsCards;
