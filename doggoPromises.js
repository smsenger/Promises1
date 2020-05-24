//example of using $.get for showing random dog breeds
function renderDog(breed, img) {
    return `<div class="col-4 mb4">
    <h5>${breed}</h5>
    <img src="${imgUrl}"/>
    </div>`
  }
  
  const dogContainer = document.getElementById('dogs');
  $.get('https//dog.ceo/breeds/list', function (data) {
      console.log(data.message);
      const breeds = data.message;
      
      
      breeds.forEach(breed => {
          $.get(`https//dog.ceo/api/breed/${breed}/images/random`)
          .then((data) => {
              const html = renderDog(breed, data.message);
              dogsContainer.innerHTML += innerHTML;
          })
        })