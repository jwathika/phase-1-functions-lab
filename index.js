function distanceFromHqInBlocks(pickupLocation) {
  return pickupLocation - 42;
}

function distanceFromHqInFeet(pickupLocation) {
  let hq = 42 * 264;
  let npickupLocation = pickupLocation * 264;
  return npickupLocation - hq;
}
function distanceTravelledInFeet(dist1, dist2) {
  let nist1 = dist1 * 264;
  let ndist2 = dist2 * 264;
  return ndist2 - ndist1;
}
