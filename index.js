function scuberGreetingForFeet(distance){
  let result
  if ( distance <= 400) {
    result = 'This one is on me!';
  }
  if (distance > 400 && distance <= 2000){
    result = 'That will be twenty bucks.';
  }
 if (distance > 2000 && distance <= 2500) {
    result = 'I will gladly take your thirty bucks.'

  }
  else if (distance > 2500){
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
return city === 'NYC' ?  "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
   switch(tip){
    case 'generous':
      return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
        case 'thanks for everything':
          return 'Bye.'
   }
}