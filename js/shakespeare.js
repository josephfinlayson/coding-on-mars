var NASA_API_KEY = 'EQzgRUB1sMiKLrZo4kd6KPNbIgKB95FV9jaGtVQA'

function getRoverImage(day) {
    return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&api_key=' + NASA_API_KEY)
        .then(function (response) {
                return response.json()
            }
        )
}

function getShakespeareQuote(quoteName, successFunction, failureFunction) {
    if (!quoteName) {
        quoteName = 'shakespeare';
    }
    WikiquoteApi.getRandomQuote(quoteName, successFunction, failureFunction)
}


$(document).ready(function () {

    getShakespeareQuote("wordsworth", function (quote) {
       $('#text').text(quote.quote);
       $('#text').append("<br/>");
       $('#text').append("<h4>"+quote.titles+"</h4>");
                 console.log(quote);
    }, 
                function (error) {
                console.log(error)
    });

    getRoverImage().then(function (response) {

        for (i = 0; i <response.photos; i++) { 

        var photo =response.photos[i].img_src;
        $('#bg-image').attr("src", photo);
        $('body').append('img src="'+ photo + '"/>')
        console.log(photo);


        console.log(response);


    }

});
