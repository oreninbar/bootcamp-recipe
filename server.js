const express = require('express')
const path = require('path')
const app = express()
const request = require(`request`)

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('/recipes/:Name', (req, res) => {
    const ingredientName = req.params.Name
    console.log('OK')
    console.log(ingredientName)
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredientName}`, function (error, response) {
        let recipes = JSON.parse(response.body).results
        console.log(recipes)
        newRecipes=recipes.map(r=> {
            return{
                ingredients:r.ingredients,
                title:r.title,
                thumbnail:r.thumbnail,
                href:r.href,
            }
        })
        res.send(newRecipes)
    })
})


// An array of ingredients
// A title
// A thumbnail - a URL of a small image
// An href - a link to the recipe video. Note that sometimes this link is invalid.
// let teamPlayers = players.filter(p => p.teamId == teamId && p.isActive == true)
// let newPlayers = teamPlayers.map(p => {
//   return {
//     firstName: p.firstName,
//     lastName: p.lastName,
//     jersey: p.jersey,
//     position: p.pos,
//     img: `https://nba-players.herokuapp.com/players/${p.lastName}/${p.firstName}`
//   }


const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});