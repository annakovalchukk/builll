  const houses = document.querySelectorAll('.house');
  const buildValue = document.querySelector('#build-value');
  const stagesValue = document.querySelector('#stages-value');
  const flatsValue = document.querySelector('#flats-value');
  const houseDescriptions = document.querySelector('.house-info__descriptions');
  const buildLinks = document.querySelectorAll('.build-link');

  console.log(houses);

  houses.forEach(house => {
    house.addEventListener('mouseover', function() {
        const dataBuildNumber = house.getAttribute('data-build-number');
        const dataStagesNumber = house.getAttribute('data-stages-number');
        const dataFlatsNumber = house.getAttribute('data-flats-number');
        const dataDescriptions = house.getAttribute('data-descriptions');

        buildValue.innerHTML = dataBuildNumber;
        stagesValue.innerHTML = dataStagesNumber; 
        flatsValue.innerHTML = dataFlatsNumber;
        houseDescriptions.innerHTML = dataDescriptions;
    })
  })

  buildLinks.forEach(link => {

    link.addEventListener('mouseover', function() {
      if (link.classList.contains('sold')){
       const path = link.querySelector(".house")

         path.style.fill = "rgba(247, 13, 13, 0.672)";
         path.style.stroke = "rgba(247, 13, 13, 0.369)";

       }
    })

    link.addEventListener('mouseout', function() {
      if (link.classList.contains('sold')){
       const path = link.querySelector(".house")
       
         path.style.fill = "rgba(242, 31, 8, 0)";
         path.style.stroke = "rgba(255, 0, 0, 0)";

       }
    })

    link.addEventListener('click', function(event) {

      if (link.classList.contains('sold')){
       event.preventDefault();
      } else {
        null
      }
    })
  })

  //    if (link.classList.contains('sold')){
   // link.style.backgroundColorn= "red";
 // }


  const floors = document.querySelectorAll('.floor');
  const floorItem = document.querySelector('#floor-item');
  const flatsAll = document.querySelector('#flats-all');
  const flatsFree = document.querySelector('#flats-free');
  const flatsAction = document.querySelector('#flats-action');
  const flatsBooking = document.querySelector('#flats-booking');
  const flatsSold = document.querySelector('#flats-sold');


  floors.forEach(floor => {
floor.addEventListener('mouseover', ()=> {
    const dataFoorItem = floor.getAttribute('data-floor-item');
    const dataFlatsAll = floor.getAttribute('data-flats-all');
    const dataFlatsFree = floor.getAttribute('data-flats-free');
    const dataFlatsAction = floor.getAttribute('data-flats-action');
    const dataFlatsBooking = floor.getAttribute('data-flats-booking');
    const dataFlatsSold = floor.getAttribute('data-flats-sold');

    floorItem.innerHTML = dataFoorItem;
    flatsAll.innerHTML = dataFlatsAll;
    flatsFree.innerHTML = dataFlatsFree;
    flatsAction.innerHTML = dataFlatsAction;
    flatsBooking.innerHTML = dataFlatsBooking;
    flatsSold.innerHTML = dataFlatsSold;

})
  })

  