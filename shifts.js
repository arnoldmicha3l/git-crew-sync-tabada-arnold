function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);
  const totalPay =
    regularHours * rate +
    overtimeHours * rate * 1.5;

  return Math.max(0, Math.round(totalPay));
}

module.exports = { isValidShift, calculatePay };