var NASA_API_KEY = 'EQzgRUB1sMiKLrZo4kd6KPNbIgKB95FV9jaGtVQA'

function getRoverImage(day, page) {
    return fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=${page}&sol=${day}&api_key=` + NASA_API_KEY)
        .then(function (response) {
                return response.json()
            }
        ).catch(console.error)
}

function getShakespeareQuote(quoteName, successFunction, failureFunction) {
    if (!quoteName) {
        quoteName = 'shakespeare';
    }
    WikiquoteApi.getRandomQuote(quoteName, successFunction, failureFunction)
}


$(document).ready(function () {

    getShakespeareQuote("shakespeare", function (quote) {
            $('#text').text(quote.quote);
            $('#text').append("<br/>");
            $('#text').append("<h4>" + quote.titles + "</h4>");
            console.log(quote);
        },
        function (error) {
            console.log(error)
        });
    const randomDay =Math.floor(Math.random() * 1000) + 1
    const randomPage =Math.floor(Math.random() * 10) + 1

    getRoverImage(randomDay, randomPage).then(function (response) {

        for (var i = 0; i < response.photos.length; i++) {
            console.log(i);

            var photo = response.photos[i].img_src;
            $('#bg-image').attr("src", photo);
            $('body').append(`<img class="bg-image" src="${photo}"/>`)


            console.log(response);


        }

    })
})
