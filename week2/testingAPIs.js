let starWarsPlanetList = " ";

var planets = {
    "name": "Yavin IV", 
    "rotation_period" : "24", 
    "orbital_period" : "4818",
    "diameter" : "10200",
    "climate" : "temperate, tropical",
    "gravity" : "1 standard",
    "terrain" : "jungle, rainforests",
    "surface_water" : "8",
    "population" : "1000",
    "residents" : [],
    "films": [
        "https://swapi.dev/api/films/1/"
    ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "https://swapi.dev/api/planets/3/",

};

var planet = document.getElementById("planet");
planet.innerHTML = JSON.stringify(planets);

        function gfg_Run() {
            planet.innerHTML = JSON.stringify(planets, undefined);
        }