// Kilometer to Meter Conversion

function kilometerToMeter (km) {
    if(km<0){
        return "Kilometer can't be negative. Please, enter a valid number.";
    }else{
        var meter= km*1000;
        return meter;
    }
    
}


// Budget Calculation

function budgetCalculator(clock, mobile, laptop){
    if(clock<0 || mobile<0 || laptop<0){
        return "Please enter your numbers correctly";
    }else{
        var clockTotal= clock*50;
        var mobileTotal= mobile*100;
        var laptopTotal= laptop*500;
    //total money required
        var inTotal= clockTotal+mobileTotal+laptopTotal;
        return inTotal;
    }
}


// Hotel Cost Calculation

function hotelCost(day){
    if(day<0){
        return "Please don't give negative values for days."
    }else{
        var cost= 0;
        if(day<=10){
            cost= day*100;
        }else if(day<=20){
            var first10= 10*100;
            var remaining= (day-10)*80;
            cost= first10+remaining;
        }else{
            var first10= 10*100;
            var second10= 10*80;
            var remaining= (day-20)*50;
            cost = first10+second10+remaining;
        }
        return cost;
    }
}


// Returning the friend with most chars in his name

function megaFriend(friends){
 // Checking whether it's an array or not
    if(!Array.isArray(friends)){
        return "We take only arrays."
    }
 // Checking if the array is empty
    else if(friends.length==0){
        return 'Please insert your friends names in the array.';
    }
 // now everything is okey
    else{
        var largest= friends[0];
        for(i=0; i<friends.length; i++){
            if(friends[i].length>largest.length){
                largest= friends[i];
            }
        }
        return largest;
    }
}

//done


