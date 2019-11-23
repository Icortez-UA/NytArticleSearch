
$(document).ready(function(){

var divTitle = $('#results');



$('form').submit(function(event){
    event.preventDefault();
    
    
    var articleInput = $('#searchTerm').val();
    console.log(articleInput);
    var numOf = $('#numberOfRecords').val();
    var startDateInput = $('#startYear').val();
    var endDateInput = $('#endYear').val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+articleInput+"&begin_date="+startDateInput+"0101&end_date="+endDateInput+"0101&api-key=XkuwlndL7Pp81qHZ9vEer4a6fLAPiN9J";
    console.log(queryURL);
    
     $.ajax({
        url: queryURL,
     method: "GET"
      }).then(function(data) {
       console.log(data);
       for(i=0; i< numOf; i++) {
           var artTitle = data.response.docs[i].headline.main;

           $(divTitle).append('<h1>'+artTitle+'</h1>');
           $(divTitle).append('<p>'+data.response.docs[i].abstract+'</p>');
           
           
    }
});
//$(divTitle).append('<h1>'+artTitle+'</h1>');
//$(divTitle).append('<p>'+data.response.docs[0].abstract+'</p>');

})
});
