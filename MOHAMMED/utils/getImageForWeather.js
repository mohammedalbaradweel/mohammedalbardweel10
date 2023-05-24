/* eslint-disable global-require */

const images = {
  clear: require('../assets/clear.png'),
  hail: require('../assets/hail.png'),
  'heavy-cloud': require('../assets/heavy-cloud.png'),
  'light-cloud': require('../assets/light-cloud.png'),
  'heavy-rain': require('../assets/heavy-rain.png'),
  'light-rain': require('../assets/light-rain.png'),
  showers: require('../assets/showers.png'),
  sleet: require('../assets/sleet.png'),
  snow: require('../assets/snow.png'),
  thunder: require('../assets/thunder.png'),
    'icon': require('../assets/clear.png'),

};

export default weather => images[weather];
