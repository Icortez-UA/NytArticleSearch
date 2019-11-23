
$(document).ready(function(){

var divTitle = $('');



$('form').submit(function(event){
    event.preventDefault();
    
    
    var articleInput = $('#searchTerm').val();
    console.log(articleInput)
    var numOf = $('#numberOfRecords').val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+articleInput+"&api-key=XkuwlndL7Pp81qHZ9vEer4a6fLAPiN9J";
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response)
      });

})
});
