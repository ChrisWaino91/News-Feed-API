class UI {
    constructor(){
        this.newsFeed = document.getElementById('w-news');
    }

    

    paint(news){

        let output = '';

        news.articles.forEach(function(item) {
            output += 
            `
            <ul class="single-article custom-bg">
            <a href="${item.url}" target="_blank"><li class="title">${item.title}</li></a>
            <img src="${item.urlToImage}"/>
            <li class="author">${item.author}</li>
            </ul>
            `;
        });

        this.newsFeed.innerHTML = output;
        console.log(news.articles);
    }
}
