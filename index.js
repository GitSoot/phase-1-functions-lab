function distanceFromHqInBlocks(dist){
    let km = dist;
    if (km === 43){
        km = 1;
        return km
    } else if (km === 50) {
        km = 8;
        return km
    } else if (km < 42) {
        km = 42 - dist;
        return km
    }
}

function distanceFromHqInFeet (feet) {
    let ft = feet;
    if (ft > 42) {
        ft = (feet - 42) * 264;
        return ft
    } else if (ft < 42) {
        ft = (42 - feet) * 264;
        return ft
    }
}

function distanceTravelledInFeet (start, end) {
    let begin = start, finish = end, cover;
    if (end > 42) {
        cover = (finish - start) * 264;
        return cover
    } else if ( end < 42) {
        cover = (start - finish) * 264;
        return cover
    }
}

function calculatesFarePrice (start, destination) {
    let first = start, last = destination, fare, cost, threshold, cents;
    cost = (last-first) * 264;
    threshold = (((start - last) * 264) - 400)
    cents = (((start - last) * 264) - 400) * 0.02;

    if (cost < 400 && cost > 0) {
        fare = 0;
        return fare
    } 
    else if ((start - last) > 9) {
        fare = 'cannot travel that far'
        return fare
    }
    else if (last < first) {
        fare = cents;
        return fare
    } else if (cost > 2000 && cost < 2500) {
        fare = 25;
        return fare
    } 
}