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

//Progression 1: Add ___ chocolates of ____ color
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
            chocolates.splice(0,0,color)
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
    else if(number >chocolates.length)
    {
        return "Insufficient chocolates in the dispenser"
    }
    else
    {
       return chocolates.splice((chocolates.length - number),number);
    }
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color)
{   
    if(count<=0)
    {
        return "Number cannot be zero/negative"
    }
    else
    {
        count_color=0
        for(let i = 0; i<chocolates.length ;i++)
        {
            if(chocolates[i].color ==color)
            {
                count_color ++;
            }
        }
        if(count_color < count)
        {
            return "Insufficient chocolates in the dispenser"
        }
        else
        {
            while(count)
            chocolates.splice(chocolates.lastIndexOf(color),1)
            count--;
        }
    }
    return chocolates
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]



//Progression 7: Change "2" chocolates of "green" color to "yellow" color

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of "blue" color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
