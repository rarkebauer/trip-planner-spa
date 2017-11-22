window.onload = function(){
    const hotels, restaurants, activites;
    hotels = document.getElementById('hotels-choices');
    restaurants = document.getElementById('restaurants-choices');
    activities = document.getElementById('activities-choices');

    fetch('/api/attractions')
    .then(result=>{
        console.log('HIIIIIIII')
        console.log(result)
    })
    .catch(console.error)

}

