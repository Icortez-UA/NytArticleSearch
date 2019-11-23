


var divTitle = $('');



$('button').on("click", function(event){
    event.preventDefault();
    
    
    var articleInput = ;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey";
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        createRow(response);
      });

      createRow(){
          $('<h1>').append('')
      }
})

