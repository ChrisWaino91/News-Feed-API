// Init News
const news = new News();

// Init UI
const ui = new UI();


// Change Country
document.getElementById('country_select').addEventListener('change', (e) =>  {
    const country = document.getElementById('country_select').value;
    console.log(country);

    news.changeCountry(country);
})


// Change Category
document.getElementById('category_select').addEventListener('change', (e) =>  {
    const category = document.getElementById('category_select').value;
    console.log(category);

    news.changeCategory(category);
})


function getNews(){
    news.getNews()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}


// Get News on DOM Load 
 document.addEventListener('DOMContentLoaded', getNews);

// Get News on button press
document.getElementById('getnews').addEventListener('click', getNews);