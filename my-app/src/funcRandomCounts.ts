import random from 'random';
import roundTo from 'round-to';

const putPattern = () => {
  const base:number = Math.random();
  if(base < 0.1){
    return 'points';
  } else {
    if(base >= 0.1 && base <= 0.25){
      return 'integer1';
    } else if(base >= 0.26 && base <= 0.4){
      return 'integer2';
    } else if(base >= 0.41 && base <= 0.7){
      return 'integer3';
    } else {
      return 'integer4';
    }
  }
}

const randomCounts = () => {
  const pattern:string = putPattern();
  let val:number;

  switch(pattern){
    case 'points':
      const n = 2;
          val = roundTo(Math.floor( Math.random() * Math.pow( 10, n ) ) / Math.pow( 10, n ), 3);
      break;
    case 'integer1':
      val = random.int(0, 100);
      break;
    case 'integer2':
      val = roundTo(random.int(1000, 10000), -1);
      break;
    case 'integer3':
      val = roundTo(random.int(10000, 100000000), -6);
      break;
    case 'integer4':
      val = roundTo(random.int(100000000, 100000000000), -8);
      break;
    default:
      val = random.int(0, 100);
      break;
  }
  
  return val.toString();
}

export default randomCounts;