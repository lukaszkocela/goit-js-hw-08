import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const video = new Player(iframe);

const saveTime = data =>
  localStorage.setItem('videoplayer-current-time', data.seconds);
const delayTime = throttle(saveTime, 1000);
const currentTime = localStorage.getItem('videoplayer-current-time');

video.setCurrentTime(currentTime).then();
video.on('timeupdate', delayTime);
