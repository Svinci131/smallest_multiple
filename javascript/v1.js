    var array = [1,2,3,4,5,6,7,8,9,10]
//  //var numbers =[1];
    for (var i = 0; i <= array.length; i++) {
  //GO THROUGH ARRAY
      for (var j = (array[i]); j > 1; j--) {
      //GO THROUGH EACH NUMBER BEFORE I
        if (array[i] % j === 0 && array[i] !== j) {
          var sf = Math.ceil((i/j));
  
            var index1 = array.indexOf(j)
            var index2 = array.indexOf(sf)
        
            if (j <= sf) {
                //console.log("at" ,array[i], "should be",j,"and",sf)//the places where numbers should be
                if (sf % j === 0 && sf > 1){
                  console.log("at" ,array[i], "should be",j,"and", Math.ceil(sf/j),"*",j)//the places where numbers should be
                  array [i] = j
                  
                }
                
                else {
                  
                  if(index1 >= 0 && j ) {
                    
                    console.log("at" ,array[i], "should be",j,"and",sf)//the places where numbers should be
                    array [i] = 1
                  }
                    
                  else {
                    if (j % Math.ceil(sf/j) === 0) {
                    console.log("at" ,array[i], "should be",Math.ceil(sf/j),"*",Math.ceil(sf/j),"and",sf)//the places where numbers should be
                      if(index2 >= 0) {
                        console.log("at" ,array[i], "should be",Math.ceil(sf/j),"*",Math.ceil(sf/j),"and",sf)//the places where numbers should be
                        array [i] = 1
                        }
                      array [i] = 1
                    }
                    
                    else{
                    console.log("at" ,array[i], "should be",j,"and",sf)//the places where numbers should be
                    array [i] = sf
                    }
                    
                  }
                }

            }
        
        }
        
      }
      
    array.sort(function(a, b) {
    return a - b;
    });
    
    
    }
    
    function multiply (array) {
      var sum=1;
      for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
      } 
        return sum;
    }
    console.log (array)
    console.log (multiply(array))
    
  
  //1*2*2*2*3*3*5*7
  //1*2*2*2*3*3*5*7
