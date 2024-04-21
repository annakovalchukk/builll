const flatArray = [
    {
        id: 0,
        house: "2",
        floor: "4",
        rooms: "3",
        square: "82.3 м.кв.",
        price: "700$",
        priceTotal: "52500$",
        flatNumber: 1,
        status: "booking",
    },

    {
        id: 1,
        house: "2",
        floor: "4",
        rooms: "2",
        square: "60,7 м.кв.",
        price: "700$",
        priceTotal: "42000$",
        flatNumber: 2,
        status: "sold",


    },

    {
        id: 2,
        house: "2",
        floor: "4",
        rooms: "3",
        square: "60,7 м.кв.",
        price: "700$",
        priceTotal: "42000$",
        flatNumber: 3,
        status: "action",

    },

    {
        id: 3,
        house: "2",
        floor: "4",
        rooms: "3",
        square: "82 м.кв.",
        price: "700$",
        priceTotal: "52500$",
        flatNumber: 4,
        status: "booking",

    },

    {
        id: 4,
        house: "2",
        floor: "4",
        rooms: "3",
        square: "79.7 м.кв.",
        price: "700$",
        priceTotal: "55790$",
        flatNumber: 5,
        status: "booking",

    },

    {
        id: 5,
        house: "2",
        floor: "4",
        rooms: "1",
        square: "39.2 м.кв.",
        price: "700$",
        priceTotal: "27440$",
        flatNumber: 6,
        status: "free",

    },

    {
        id: 6,
        house: "2",
        floor: "4",
        rooms: "1",
        square: "40.0 м.кв.",
        price: "700$",
        priceTotal: "29400$",
        flatNumber: 7,
        status: "booking",


    },

    {
        id: 7,
        house: "2",
        floor: "4",
        rooms: "1",
        square: "39.2 м.кв.",
        price: "700$",
        priceTotal: "27440$",
        flatNumber: 8,
        status: "booking",


    },

    {
        id: 8,
        house: "2",
        floor: "4",
        rooms: "3",
        square: "79.3 м.кв.",
        price: "700$",
        priceTotal: "55510$",
        flatNumber: 9,
        status: "action",

    },

]












window.addEventListener('load', function() {
 document.querySelector('.floor-plan-page') ? installFloorPlan() : null;

 const flatGroup = document.querySelectorAll('.flat')
 const flatInfo = document.querySelector('#flat-info')

 function deletteActiveClass() {
    flatGroup.forEach(active => {
        active.classList.remove('active')
    })
}

const flatObj = [{
    id: 0,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "82.3 м.кв.",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 1,
    status: "booking",
}]

const renderInfo = (array) => {
    const flatInformation = array.map(item => {
        return (`


        <div class="flat-item flat-info__house">
        Номер дома : <b id="house-number">${item.house}</b>
    </div>
    <div class="flat-item flat-item--floor">
        Этаж: <b id="floor-number">${item.floor}</b>
    </div>
    <div class="flat-item flat-item--rooms">
        Кол-во комнат: <b id="rooms-quantity">${item.rooms}</b>
    </div>
    <div class="flat-item flat-item--square">
        Площадб квартиры: <b id="flat-square">${item.square}</b>
    </div>
    <div class="flat-item flat-item--price">
        Цена за м²: <b id="price-meter">${item.price}</b>
    </div>
    <div class="flat-item flat-item--price-total">
        Цена за квартиру: <b id="price-total">${item.priceTotal}</b>
    </div>
    <div class="flat-item flat-item--number">
        Номер квартиры: <b id="flat-number">${item.flatNumber}</b>
    </div>
    <div class="flat-item flat-item--status">
        Статус квартиры: <b id="flat-status">${item.status}</b>
    </div>
        `)
    }).join("")
    
    flatInfo.innerHTML = flatInformation
}

renderInfo(flatObj)


 flatGroup.forEach(flat=>{
    flat.addEventListener('click', ()=> {

        deletteActiveClass()
        flat.classList.add('active')

        let thisFlat = flat.getAttribute('data-number')

        let flatNumber = flatArray.filter(obj => obj.flatNumber === Number (thisFlat))
        console.table(flatNumber);

        renderInfo(flatNumber)
    })
 })


 
    function installFloorPlan () {
        
    }
})



const flats =document.querySelectorAll('.flat')

flats.forEach(flat => {
    if(flat.classList.contains('booking')) {
        flat.querySelector('.status-text').innerHTML = "Бронь"
    } else if(flat.classList.contains('action')) {
        flat.querySelector('.status-text').innerHTML = "Акция"
    } else if(flat.classList.contains('sold')) {
        flat.querySelector('.status-text').innerHTML = "Продана"
    }
      else {
        flat.querySelector('.status-text').innerHTML = "Свободна"
    }
})