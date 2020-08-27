function perfect(num){
        
    var num,i;
    var sum = 0;
   {
    for(var i=1;i<num;i++) 
    {
        if((num%i)== 0)
        
            sum = sum + i;
    }
   }
   
    if(sum == num )
    {
        console.log(num +  "  is a perfect number.");
    }
    else
    {
        console.log(num +  "  is not perfect number.");
    }
} 
perfect(70);
