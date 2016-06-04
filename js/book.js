$(document).ready(function() {

  //Check for container for book ad
  var book_ad_container = $(document).find('#home').find('#book_ad_container');

  //If container for ad exists, read populate markup from JSON and show ad
  if(book_ad_container.length != 0) {

    getRandomBook(function(book) {
      //Image
      var book_image = $(book_ad_container).find('.book-img').find('img').first();
      $(book_image).attr('src', book['imgur-sm']);
      $(book_image).attr('alt', 'Book cover for ' + book.title);

      //Links
      $(book_ad_container).find('a').each(function(index, value) {
        $(value).attr('href', book.url);
        $(value).attr('title', book.title);
      });

      //Title
      $(book_ad_container).find('.book-title').text(book.title);

      $(book_ad_container).show();
    });
  }
});


/**
 * Function to load JSON containing books
 */
function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '/books.json', true);

  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };

  xobj.send(null);  
}


/**
 * Function to pick random book from JSON
 */
function getRandomBook(callback) {
  loadJSON(function(response) {
    var data = JSON.parse(response);
    json_keys = Object.keys(data);
    var random_book = data[json_keys[ json_keys.length * Math.random() << 0]];
    callback(random_book);
  });

}
