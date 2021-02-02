var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color/
var addChocolates = (chocolates,color,count) =>
{
    if(count<=0)
    {
        return "Number cannot be zero/negative"
    }
    else
    {
        while(count)
        {
            chocolates.splice(0,0,color)  //splice is use for add/remove from array // splice(index,howmany,item1, ....., itemX)
            count--;
        }
    }
    return chocolates
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number)
{   
    if(number <=0)
    {
        return "Number cannot be zero/negative"
    }
    else if(number >chocolates.length)
    {
        return "Insufficient chocolates in the dispenser"
    }
    else
    {
       return chocolates.splice(0,number);
    }
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{
    if(number <=0)
    {
        return "Number cannot be zero/negative"
    }
    else if(number > chocolates.length)
    {
        return "Insufficient chocolates in the dispenser"
    }
    else
    {
       return chocolates.splice((chocolates.length - number),number).reverse();
    }
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,count,color)
{   
    if(count<=0)
    {
        return "Number cannot be zero/negative"
    }
    else
    {
        if(chocolates.length  < count)
        {
            return "Insufficient chocolates in the dispenser"
        }
        else
        {
            var new_array = chocolates.splice((chocolates.length - count),count); // always store modified data in new array as splice does not modied original array
        }
    }
    return new_array;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(candies)
{
  var arrayCount = [];
  var arrayBlank = [];
  for(let i = 0; i < candies.length; i++)
  {
    var count = 0;
    for(let j = 0; j < candies.length; j++)
    {
        if(arrayBlank.includes(candies[i]))
        {
            continue;
        }
        if(candies[i] == candies[j])  
        {
            count++;
        }
    }
    if(count > 0)
    {
        arrayCount.push(count);
    }
    arrayBlank.push(candies[i]);
  }
  return arrayCount;
}

//Progression 6: 
function sortChocolateBasedOnCount(candies)
{
    var color_count = candies.map() //

}

//Progression 7: Change "2" chocolates of "green" color to "yellow" color
function changeChocolateColor(chocolates,number, color, finalColor)
{
    if(chocolates.length == 0)
    {
      return [];
    }
    else if(color === finalColor)
    {
       return "Can't replace the same chocolates";
    }
    else
    {
        if(number > 0)
        {
            for(let i = 0;i< chocolates.length;i++)
            {
                if(number !=0)
                {
                   if(chocolates[i] === color)
                   {
                       chocolates[i] = finalColor;
                       number-- ;
                   }
                }
            }
         return chocolates;
        }
        return "Number cannot be zero/negative";
    }
    return chocolates;

}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color,new_color)
{
    var count = 0;
    if(chocolates.length == 0)
    {
        return [0,[]];
    }
    else if(color === new_color)
    {
        return "Can't replace the same chocolates";
    }
    else
    {
        var final_Array =chocolates.map(data=>{
            if(data == color)
            {
                data = new_color;
            }
            return data;
        });
        
        final_Array.forEach(element => {
            if(element == new_color)
            count ++;
        });
        return [count,final_Array];
    }
  
}

//Challenge 1: Remove one chocolate of "blue" color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
