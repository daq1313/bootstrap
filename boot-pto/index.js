var lubniki = 10;
$("#button-addon1").click(getData);
$("#inputState").bind("change", function () {
    var zm = $(this).val();
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + zm + ",pl&units=metric&APPID=7e228bd33a9a1da4fa0e7bcd0c2a6b5a",
        function (data) {
            $("#dod").text(zm)
            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = Math.floor(data.main.temp);
            var decr = data.weather[0].main;

            $(".img").attr('src', icon);
            $(".temp").empty().append(temp + " stopni");
            $(".opis").empty().append(decr);
        })
})

function getData() {
    var city = $(".form-control1").val();
    console.log(city);

    // var city = "Olsztyn";

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + ",pl&units=metric&APPID=7e228bd33a9a1da4fa0e7bcd0c2a6b5a",
        function (data) {
            $("#dod").text(city)
            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = Math.floor(data.main.temp);
            var decr = data.weather[0].main;

            $(".img").attr('src', icon);
            $(".temp").empty().append(temp + " stopni");
            $(".opis").empty().append(decr);
        })


    //console.log(city);



}


$("#wyszukaj").click(function () {
    $.get("https://pokeapi.co/api/v2/type/15/").done(function (poke) {
        var name = $("<b></b>");
        name.text(poke.name)
        $("#pokus").append(name)
    })
});

//$("#wyszukaj").click(function(){
//    alert("wybrana wartość: " + $("#test").val())
// }) 

$("wyszukaj").click(function () {
    $.get("https://pokeapi.co/api/v2/type/15/").done(function (poke) {
        var name = $("<p></p>");
        name.text(poke.name)
        $("#pokus").append($(name))
    })
}) 