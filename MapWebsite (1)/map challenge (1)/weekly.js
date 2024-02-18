// Map initialization
var map = L.map("map").setView([42.7339, 25.4858], 8);

/*==============================================
              TILE LAYER and WMS
  ================================================*/

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

/*==============================================
                      MARKER
  ================================================*/
var geojsonFeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        Name: "Самарско Знаме",
        City: "Стара Загора",
      },
      geometry: {
        coordinates: [25.657963740730224, 42.43152082454097],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Патриаршеска катедрала „Свети Александър Невски“",
        City: "София",
      },
      Name: "ALNevski",
      geometry: {
        coordinates: [23.33287449565489, 42.69578445603278],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Народен театър "Иван Вазов"',
        City: "София",
      },
      Name: "teatyr",
      geometry: {
        coordinates: [23.326168886089448, 42.694104233095146],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Националната галерия",
        City: "София",
      },
      Name: "galery",
      geometry: {
        coordinates: [23.326836622574916, 42.696481145461235],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Альоша",
        City: "Пловдив",
      },
      Name: "Alyosha",
      geometry: {
        coordinates: [24.737785307245332, 42.14374501293963],
        type: "Point",
      },
      id: 4,
    },
    {
      type: "Feature",
      properties: {
        Name: "Несебър - стар град",
        City: "Несебър",
      },
      geometry: {
        coordinates: [27.735613743037447, 42.65921116606853],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Царевец",
        City: "Велико Търново",
      },
      geometry: {
        coordinates: [25.65209395560771, 43.08354051972944],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Трапезица",
        City: "Велико Търново",
      },
      geometry: {
        coordinates: [25.646044967785514, 43.0849188191863],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Парк "Мини България"',
        City: "Велико Търново",
      },
      geometry: {
        coordinates: [25.654865621341656, 43.0793317336701],
        type: "Point",
      },
      id: 8,
    },
    {
      type: "Feature",
      properties: {
        Name: "Етъра",
        City: "Габрово",
      },
      geometry: {
        coordinates: [25.344359156596937, 42.811511144927636],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Къща на Петко Славейков",
        City: "Трявна",
      },
      geometry: {
        coordinates: [25.491904251945527, 42.86629021604563],
        type: "Point",
      },
      id: 10,
    },
    {
      type: "Feature",
      properties: {
        Name: "Крепост Баба Вида",
        City: "Видин",
      },
      geometry: {
        coordinates: [22.88625441407217, 43.9928837594685],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Белоградчишките скали",
        City: "Белоградчик",
      },
      geometry: {
        coordinates: [22.67800477561923, 43.62305148225428],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Къща на Иван Вазов",
        City: "Берковица",
      },
      geometry: {
        coordinates: [23.12652448383014, 43.23908635141896],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Мелник",
        City: "Мелник",
      },
      geometry: {
        coordinates: [23.39471170576695, 41.52334393795741],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Мелнишки пирамиди",
        City: "Мелник",
      },
      geometry: {
        coordinates: [23.407603547181537, 41.52492100868392],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Рупите",
        City: "Рупите",
      },
      geometry: {
        coordinates: [23.2629551338687, 41.45894084803476],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "връх Тумба",
        City: "Беласица",
      },
      geometry: {
        coordinates: [22.92729861780188, 41.338568002875775],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "връх Мусала",
        City: "Рила",
      },
      geometry: {
        coordinates: [23.585267231478667, 42.17918400105614],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Рилски Манастир",
        City: "Рила",
      },
      geometry: {
        coordinates: [23.340311885467088, 42.13358678029849],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Дворецът в Балчик",
        City: "Балчик",
      },
      geometry: {
        coordinates: [28.14717662198251, 43.40439170288036],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Морска градина",
        City: "Варна",
      },
      geometry: {
        coordinates: [27.93982147371011, 43.209849031056905],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Свето Успение Богородично",
        City: "Варна",
      },
      geometry: {
        coordinates: [27.909986338351388, 43.20524464235024],
        type: "Point",
      },
      id: 22,
    },
    {
      type: "Feature",
      properties: {
        Name: "нос Калиакра",
        City: "",
      },
      geometry: {
        coordinates: [28.463519900753624, 43.372417217258516],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Шуменска крепост",
        City: "Шумен",
      },
      geometry: {
        coordinates: [26.894609773925282, 43.262525158621685],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Монумент "Създатели а българската държава"',
        City: "Шумен",
      },
      geometry: {
        coordinates: [26.922270782172745, 43.26215738756227],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Парк "Велики Преслав"',
        City: "Велики Преслав",
      },
      geometry: {
        coordinates: [26.810606619355696, 43.15576508303951],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Мадарския конник",
        City: "Мадара",
      },
      geometry: {
        coordinates: [27.118840784899874, 43.27738551083098],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Вила Армира ",
        City: "Ивайловград",
      },
      geometry: {
        coordinates: [26.106249623755957, 41.49915431509257],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Статуя на Богородица",
        City: "Хасково",
      },
      geometry: {
        coordinates: [25.55405369744159, 41.928291428184195],
        type: "Point",
      },
      id: 29,
    },
    {
      type: "Feature",
      properties: {
        Name: "Асенова крепост",
        City: "Асеновград",
      },
      geometry: {
        coordinates: [24.87340084191527, 41.98662511561707],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Манастир "Св. Атанасий"',
        City: "Асеновград",
      },
      geometry: {
        coordinates: [24.87284679728944, 41.983482901070346],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Бачковски манастир",
        City: "Бачково",
      },
      geometry: {
        coordinates: [24.849566165927257, 41.9419562185827],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Храм-паметник  "Шипка"',
        City: "Шипка",
      },
      geometry: {
        coordinates: [25.321500977436898, 42.74809772596967],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Казанлъшка тракийска гробница",
        City: "Казанлък",
      },
      geometry: {
        coordinates: [25.399141782487646, 42.62561113448166],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Езеро "Загорка"',
        City: "Стара Загорка",
      },
      geometry: {
        coordinates: [25.637192106775103, 42.44479326239056],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'Античен форум "Августа Траяна"',
        City: "Стара Загорка",
      },
      geometry: {
        coordinates: [25.626412756819178, 42.427045808007506],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Неолитни жилища",
        City: "Стара Загорка",
      },
      geometry: {
        coordinates: [25.610656855809708, 42.42454151077334],
        type: "Point",
      },
      id: 40,
    },
    {
      type: "Feature",
      properties: {
        Name: "връх Българка",
        City: "Средна гора",
      },
      geometry: {
        coordinates: [26.321657019604572, 42.747079943351],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Плевенска панорама",
        City: "Плевен",
      },
      geometry: {
        coordinates: [24.606229845799078, 43.398694666068366],
        type: "Point",
      },
      id: 39,
    },
    {
      type: "Feature",
      properties: {
        Name: "връх Ботев",
        City: "Стара Загора ",
      },
      geometry: {
        coordinates: [24.917322459671368, 42.71714779564522],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Каменната сватба",
        City: "Кърджали ",
      },
      geometry: {
        coordinates: [25.399811265822933, 41.65672956562051],
        type: "Point",
      },
      id: 41,
    },
    {
      type: "Feature",
      properties: {
        Name: "Копривщица",
        City: "Копривщица",
      },
      geometry: {
        coordinates: [24.358888926948907, 42.639590295407146],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'музей "кораба Радетски"',
        City: "Козлодуй",
      },
      geometry: {
        coordinates: [23.677064535378236, 43.79792599027064],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: 'резерват "Сребърна"',
        City: "Силистра",
      },
      geometry: {
        coordinates: [27.074289712748254, 44.1126957058886],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Крепост Туида",
        City: "Сливен",
      },
      geometry: {
        coordinates: [26.334733680493486, 42.69336820230262],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Батак",
        City: "Батак",
      },
      geometry: {
        coordinates: [24.21837751648718, 41.9433010795959],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Руска църква Шипка",
        City: "Шипка",
      },
      geometry: {
        coordinates: [25.32905213246704, 42.71608378311663],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Созопол - стар град ",
        City: "Созопол",
      },
      geometry: {
        coordinates: [27.69350772345385, 42.42209660892843],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Дяволски мост",
      },
      geometry: {
        coordinates: [25.11416717860874, 41.62067437306891],
        type: "Point",
      },
      id: 49,
    },
    {
      type: "Feature",
      properties: {
        Name: "Покритият мост",
        City: "Ловеч",
      },
      geometry: {
        coordinates: [24.7166069030948, 43.13237226228145],
        type: "Point",
      },
      id: 50,
    },
    {
      type: "Feature",
      properties: {
        Name: "Римски амфитеатър",
        City: "Пловдив",
      },
      geometry: {
        coordinates: [24.75102907055205, 42.14678595111204],
        type: "Point",
      },
      id: 51,
    },
    {
      type: "Feature",
      properties: {
        Name: "Епископска базилика",
        City: "Пловдив",
      },
      geometry: {
        coordinates: [24.752728299232757, 42.144149831156795],
        type: "Point",
      },
      id: 52,
    },
    {
      type: "Feature",
      properties: {
        Name: "Римски стадион",
        City: "Пловдив",
      },
      geometry: {
        coordinates: [24.748074655771973, 42.147707245651134],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Малка Базилика",
        City: "Пловдив",
      },
      geometry: {
        coordinates: [24.75801450939494, 42.146381008779656],
        type: "Point",
      },
      id: 54,
    },
    {
      type: "Feature",
      properties: {
        Name: "Къща-музей Гео Милев",
        City: "Раднево",
      },
      geometry: {
        coordinates: [25.935110478027724, 42.28964947368377],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "вр.Околчица",
      },
      geometry: {
        coordinates: [23.584144919708905, 43.1542056538423],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Крепост Хисарлъка",
        City: "Кюстендил",
      },
      geometry: {
        coordinates: [22.691647172477673, 42.274560964089204],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Художествена Галерия „Владимир Димитров“",
        City: "Кюстендил",
      },
      geometry: {
        coordinates: [22.688880342247643, 42.2831455328282],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Римски терми",
        City: "Варна",
      },
      geometry: {
        coordinates: [27.918222939152628, 43.19993817171664],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Къща-музей Алеко Константинов",
        City: "Свищов",
      },
      geometry: {
        coordinates: [25.339987727969117, 43.62060136517226],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Планетариум",
        City: "Смолян",
      },
      geometry: {
        coordinates: [24.708535483111405, 41.575960851447746],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Побити Камъни",
        City: "обл. Варна",
      },
      geometry: {
        coordinates: [27.705797858494492, 43.22783004166749],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Къща-музей Иван Вазов",
        City: "Сопот",
      },
      geometry: {
        coordinates: [24.755948598148308, 42.6540115735491],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Национален музей „Христо Ботев“",
        City: "Калофер",
      },
      geometry: {
        coordinates: [24.977348791132044, 42.611228292220005],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "Обсерватория „Джордано Бруно“",
        City: "Димитровград",
      },
      geometry: {
        coordinates: [25.577876936840426, 42.046076640580424],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        Name: "вр.Снежанка",
        City: "Пампорово",
      },
      geometry: {
        coordinates: [24.678857735167384, 41.63717889528033],
        type: "Point",
      },
    },
  ],
};

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };

// Настояща дата

var currentDate = new Date();
var currentWeek = currentDate.getWeek();


var randomIndex = currentWeek % geojsonFeatureCollection.features.length;


var randomPin = geojsonFeatureCollection.features[randomIndex];


var coordinates = randomPin.geometry.coordinates;


var marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);


var circleRadiusMeters = 500; // Радиус

L.geoJSON(randomPin, {
  pointToLayer: function (feature, latlng) {
   
    var circleOptions = {
      color: "red", 
      fillColor: "red", 
      fillOpacity: 0.5, 
      radius: circleRadiusMeters, 
    };

    
    return L.circle(latlng, circleOptions);
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name);
  },
}).addTo(map);



/*==============================================
              CURRENT LOCATION
  ================================================*/

  // Активен бутон
function enableButton() {
  var myButton = document.getElementById('myButton');
  myButton.classList.remove('inactive');
  myButton.classList.add('active');
  myButton.setAttribute('onclick', 'sendMessage()');
}

// Неактивен бутон
function disableButton() {
  var myButton = document.getElementById('myButton');
  myButton.classList.remove('active');
  myButton.classList.add('inactive');
  myButton.removeAttribute('onclick');
}

function getUserLocation() {
  let userMarker;
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          function (position) {
              var lat = position.coords.latitude;
              var lon = position.coords.longitude;

              
              map.setView([lat, lon], 15);
              userMarker = L.marker([lat, lon]).addTo(map);
              userLat = lat; 
              userLng = lon; 

              geojsonFeatureCollection.features.forEach(function (feature) {
                  if (feature.geometry.type === "Point") {
                      var markerLatLng = L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
                      var distance = userMarker.getLatLng().distanceTo(markerLatLng);
                      if (distance < circleRadiusMeters) {
                          
                          var popupContent = "<button onclick='sendMessage()'>Ти си в  близост до забележителност!</button>";

                          
                          userMarker.bindPopup(popupContent).openPopup();
                          
                          enableButton();
                      }
                  }
              });
          },
          function (error) {
              console.error("Error getting location:", error.message);
          }
      );
  } else {
      console.error("Geolocation is not supported by this browser.");
  }
}
getUserLocation();

function sendMessage() {
  
  window.location.href = "../Camera Page/cameraIndex.html";
}



/*==============================================
                  LAYER CONTROL
  ================================================*/
var baseMaps = {
  OSM: osm,
  "Water color map": watercolor,
  Dark: dark,
  "Google Street": googleStreets,
  "Google Satellite": googleSat,
};
var overlayMaps = {
  "First Marker": singleMarker,
  "Second Marker": secondMarker,
  "Point Data": pointData,
  "Line Data": lineData,
  "Polygon Data": polygonData,
  wms: wms,
};


L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

/*==============================================
                  LEAFLET EVENTS
  ================================================*/
map.on("mouseover", function () {
  console.log("your mouse is over the map");
});

map.on("mousemove", function (e) {
  document.getElementsByClassName("coordinate")[0].innerHTML =
    "lat: " + e.latlng.lat + "lng: " + e.latlng.lng;
  console.log("lat: " + e.latlng.lat, "lng: " + e.latlng.lng);
});

/*==============================================
                  STYLE CUSTOMIZATION
  ================================================*/
function createCircle(marker, radius) {
  return L.circle(marker.getLatLng(), {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: radius,
  });
}

geojsonFeatureCollection.features.forEach(function (feature) {
  if (feature.geometry.type === "Point") {
    var marker = L.marker(feature.geometry.coordinates).addTo(map);
    var circle = createCircle(marker, 1000);
    circle.addTo(map);
  }
});

