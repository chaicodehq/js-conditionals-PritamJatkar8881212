/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  if (age < 0 || Number.isNaN(age) === true) return -1;

  let ticketPrice = (isWeekend) ? 3 : 0; // Weekend Check

  if (age <= 12) { ticketPrice += 8 } // Children
  else if (age <= 17) { ticketPrice += 12 } // Teens
  else if (age <= 59) { ticketPrice += 15 } // Adults
  else { ticketPrice += 10 } // Senior Citizens

  return ticketPrice;

}
