class News {
    constructor(country, category){
        this.apiKey = '6676daad59c540ab8521df9f826e7d88';
        this.country = 'gb';
        this.category = 'general';
    }



    // Fetch News from API
    async getNews(country, category){
        const newsResponse = await fetch (`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.apiKey}`)
        const responseData = await newsResponse.json();
        return responseData;
    }


     // Change Country
     changeCountry(country){
        this.country = country;
    }

     // Change Category
     changeCategory(category){
        this.category = category;
    }


}
