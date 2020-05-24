//given an array of urls

var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

  console.log("starting promise chain")
  


  //using data before it's available: at this point this const will return 
  //undefined bc it isn't given value until after $.get
  const url = undefined;
  
$.get(urls[0]).then((data) => {
    url = data.message;
    console.log(url);
})
console.log(url);
console.log("finished promise chain")
  





  //use $.get() and a chain of .then() calls to fetch urls one by one
                //a nested version of this would use callbacks, creates scoping issues because "data" gets redefined 
                //every time it's used, so would need to relabel -- "data1", "data2", etc.
                //THIS version not nested because each function is returned before next piece: do this, then do this.
                //if you need something from first url to next one, use .then
  //after data fetched, console.log('data fetched'). need 5 log stmts.
  $.get(urls[0])
  .then(function(response) {
      console.log(response);
      return $.get(urls[1])
    }) .then(function (response) {
        console.log(response)
      return $.get(urls[2])
  }) .then(function(response) {
      console.log(response)
      return $.get(urls[3])
  }) .then(function(response) {
      console.log(response)
      return $.get(urls[4])
  }) console.log("Data fetched"); 
  


//same exercise as above but uses arrow functions instead.
$.get(urls[0])
    .then((data) => {
    console.log("chain 1:", data);
    return $.get(urls[1]);
    });
    .then((data) => {
    console.log("chain 1:", data);
    return $.get(urls[2]);
    });
    .then((data) => {
    console.log("chain 1:", data);
    return $.get(urls[3]);
    });
    .then((data) => {
    console.log("chain 1:", data);
    return $.get(urls[4]);
    });



//use if you need data from all before doing something else
//faster than chained, but will get all data at once, not sequential
//Promise.all expects an ARRAY of PROMISES -- a kind of LOOP 
//to fill out larger array, can use .map()
//Promise.all is a type of object, can take an object
  Promise.all([
      $.get(urls[0]),
      $.get(urls[1]),
      $.get(urls[2]),
      $.get(urls[3]),
      $.get(urls[4]),
  ]
 
  
//use .map() to populate array in Promise.all
//won't need to update if more items added to array

Promise.all(urls.map((url) => {return $.get(url)}));

function addNumbers(x, y) {
    .then(function (answer) {
        answer = x + y;
        console.log(answer)
})
    .catch(function(error) {
        console.log(error);
    })

};
