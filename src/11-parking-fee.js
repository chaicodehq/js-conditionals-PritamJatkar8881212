/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here
  const maxRate = {
    car: 30,
    motorcycle: 18,
    bus: 60 
  }

  if(hours <= 0 || !Object.hasOwn(maxRate, vehicleType)) return -1;
  hours = Math.ceil(hours);

  const rate = {
    car: {
      fixed: 5,
      variable: 3
    },
    motorcycle: {
      fixed: 3,
      variable: 2
    },
    bus: {
      fixed: 10,
      variable: 7
    }
  }

  const maxFee = maxRate[vehicleType];
  const hourlyFee = rate[vehicleType].fixed + (rate[vehicleType].variable * (hours - 1));

  const parkingFee = maxFee < hourlyFee ? maxFee : hourlyFee;
  
  return parkingFee;

}
