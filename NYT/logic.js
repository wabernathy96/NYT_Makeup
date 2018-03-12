$(document).ready(function() {

    // VARIABLES
    var key = "556738124b2b4b728a49e5d79ff70142";
    var searchTerm = "";
    var articleNumber = 0;
    var yearStart = 1851;
    var yearEnd = 2018; 
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key;

    

    $("#submit").on("click", function(e){

        e.preventDefault();
        $("#results").empty();

        // Capture input from search field
        searchTerm = $("#search").val().trim();
        console.log(searchTerm);
        // Capture input from articles returned
        articleNumber = $("#numberof").val();
        console.log(articleNumber);
        // Capture input from year range (start)
        yearStart = $("#startyear").val().trim();
        console.log(yearStart);
        // Capture input from year range (end)
        yearEnd = $("#endyear").val().trim();
        console.log(yearEnd);

        for(i=0; i<articleNumber; i++){

            
            // API Query
            $.ajax({
                url: queryURL + "&q=" + searchTerm,
                method: "GET",
            }).then(function(res){
                console.log(queryURL);
                console.log(res);

                for (i=0; i<articleNumber; i++){
                    var nytData = res.response.docs[i];
                    

                    var articleDis = $("<div>");
                    var titleDis = $("<h2>" + nytData.headline.main + "</h2>");
                    var authDis = $("<p>" + nytData.byline.original + "</p>");

                    articleDis.append(titleDis, authDis);
                    $("#results").append(articleDis);


                };


            });
        };
        

    
    });

});