import { getActiveResourcesInfo } from "node:process"

/*
Maak een applicatie dat alle getallen 
tussen 1 en 100 afprint. 
Maar voor getallen deelbaar door 3 
print je "Fizz" af, 
voor getallen deelbaar 
door 5 print je "Buzz" af 
en voor getallen deelbaar 
door 3 en 5 print je "FizzBuzz" af.
*/
for (let i = 1; i < 101; i++){
    let getal = i % 15 == 0 ? "FizzBuzz" : (i % 3 == 0 ? "Fizz" : (i% 5 == 0 ? "Buzz" : i))  
    console.log(getal)
}

