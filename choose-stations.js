// Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const goodStations = []
  for (const station of stations) {    
    const capacity = station[1]
    if (capacity >= 20) {
      const type = station[2]
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }

  return goodStations
}

console.log(chooseStations(stations))