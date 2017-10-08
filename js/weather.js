
var apiLongLat;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        apiLongLat = config.API_URL + position.coords.latitude + ',' + position.coords.longitude;

        $.getJSON(apiLongLat, function(object_weather) {
            console.log(object_weather);
            // @todo Weather Icons
            // Use the new icon sheet that is in downloads
            // use object_weather.currently.icon to get the necessary icon info.
            // name the css similarly to the categories below
            // addClass to #weatherIcon
            // @todo Create object methods to call the above
            // @todo Append temperature to the heading
            // @todo Create a button that will switch temperature from F to C
            // @todo Make it look good
            // @todo find a way to get it online create a subpage on pacificfrost.ca if necessary

            // clear_day
            // clear_night
            // partly_cloudy_day
            // partly_cloudy_night
            // cloudy
            // rain
            // sleet
            // snow
            // wind
            // fog
        });
    });
}



