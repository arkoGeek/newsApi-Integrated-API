const minPlatforms = (arrivals, departures , n) => {
  arrivals.sort();
  departures.sort();
  i = 1, j = 0, maxStations = 1, stations = 1;
  while(i < n){
      if(arrivals[i] > departures[j]){
          stations--;
          j++;
      }else if(arrivals[i] <= departures[i]){
          stations++;
          i++;
      }
      maxStations = Math.max(stations, maxStations);
  }
  return maxStations;
}

module.exports = minPlatforms;