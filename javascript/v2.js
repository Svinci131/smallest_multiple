var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 



var literal = {}; 



for (var i = 0; i < arr.length; i++){ 
  //console.log(i)
    for (var j = 10; j >= 1; j--){
        var current = arr[ i ] * j;
        if ( typeof literal[ current ] === "undefined" ) {
          literal[ current ] = 1;
        }
        else {
          literal[ current ] += 1;
        }
        if ( literal[ current ] === 3 ) {
          console.log( 'ANSWER: ' + current, literal[ current ] );
          break;
        }
    

  }
}
//