import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let result = '';
    
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date != 'object' || Object.keys(date).length > 0) throw new Error('Invalid date!');

 if ( date.getMonth() >= 0 && date.getMonth() < 2 || date.getMonth() === 11) {
     result = 'winter';
   } else if ( date.getMonth() >= 2 && date.getMonth() < 5) {
    result = 'spring';
  } else if ( date.getMonth() >= 5 && date.getMonth() < 8) {
    result = 'summer';
  } else if ( date.getMonth() >= 8 && date.getMonth() < 11) {
    result = 'autumn';
  } else {
    result = 'Unable to determine the time of year!';
  }
    return result;
   

} 
  
