function roman(num){
    var num, rem;

    while(num != 0)
    {

        if (num >= 1000)       // 1000 - m
        {
           console.log("m");
           num -= 1000;
        }

        else if (num >= 900)   // 900 -  cm
        {
            console.log("cm");
           num -= 900;
        }        

        else if (num >= 500)   // 500 - d
        {           
            console.log("d");
           num -= 500;
        }

        else if (num >= 400)   // 400 -  cd
        {
            console.log("cd");
           num -= 400;
        }

        else if (num >= 100)   // 100 - c
        {
            console.log("c");
           num -= 100;                       
        }

        else if (num >= 90)    // 90 - xc
        {
            console.log("xc");
           num -= 90;                                              
        }

        else if (num >= 50)    // 50 - l
        {
            console.log("l");
           num -= 50;                                                                     
        }

        else if (num >= 40)    // 40 - xl
        {
            console.log("xl");           
           num -= 40;
        }

        else if (num >= 10)    // 10 - x
        {
            console.log("x");
           num -= 10;           
        }

        else if (num >= 9)     // 9 - ix
        {
            console.log("ix");
           num -= 9;                         
        }

        else if (num >= 5)     // 5 - v
        {
            console.log("v");
           num -= 5;                                     
        }

        else if (num >= 4)     // 4 - iv
        {
            console.log("iv");
           num -= 4;                                                            
        }
        else if (num >= 3)     // 3 - iii
        {
            console.log("iii");
           num -= 1;                                                                                   
        }

        else if (num >= 2)     // 2 - ii
        {
            console.log("ii");
           num -= 1;                                                                                   
        }


        else if (num >= 1)     // 1 - i
        {
            console.log("i");
           num -= 1;                                                                                   
        }

    }


}

roman(928);