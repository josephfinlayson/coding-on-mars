function getGuardianArticle() {
    return fetch('https://content.guardianapis.com/search?api-key=66c812c1-bb8a-452e-8376-f4018592efe9&show-fields=all')
        .then(function (response) {
                return response.json()
            }
        ).then(function (response) {
            return response.response.results;
        })
}

function addArticleToPage(article) {

            $('.main').append('<div>' + article.fields.body + '</div>')
            $('.main').append('<h1>'+article.webTitle +'</h1>')
            $('.main').append('<img src="' + article.fields.thumbnail +'" alt="image from the guardian">')

}

$(document).ready(function () {
    // getGuardianArticle()
    //     .then(function (response) {
    //         console.log('the response from the guardian is', response);
    //         addArticleToPage(response[9]);
    //         addArticleToPage(response[1]);
    //         addArticleToPage(response[2]);
    //         addArticleToPage(response[3]);
    //
    //     });
})
