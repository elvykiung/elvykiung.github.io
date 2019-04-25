// creat variable user name
let userName = 'Jane';
// if statement  usename input or not (condition on userName is true)
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');
//create variable to log user questions
let userQuestion = 'Can you answer my question?';
//log user questions
console.log(`The user asked: ${userQuestion}`);
//create random round number
let randomNumber = Math.floor(Math.random() * 8);
// create variable eightball
let eightBall = '';
//switch statememt with condition on random number ture
switch(randomNumber){
    case 0 :
        eightBall ='‘It is certain';
        break;
        
    case 1 :
        eightBall ='It is decidedly so';
        break;

    case 2 :
        eightBall ='Reply hazy try again';
        break;

    case 3 :
        eightBall ='Cannot predict now';
        break;

    case 4 :
        eightBall ='Do not count on it';
        break;

    case 5 :
        eightBall ='My sources say no';
        break;

    case 6 :
        eightBall ='Outlook not so good';
        break;

    case 7 :
        eightBall ='Signs point to yes';
        break;
}
//log eightBall
console.log(eightBall);