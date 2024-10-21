/* eslint-disable max-len */
import moment from 'moment';

export const getTimeLeftForQuiz = (startTime, endTime) => {
  if (moment(endTime).diff(moment()) < 0) {
    return { time: 'Quiz Completed', label: 'Ended' };
  }

  if (moment(startTime).diff(moment()) < 0) {
    const seconds = moment(endTime).diff(moment(startTime), 'seconds') - moment().diff(moment(startTime), 'seconds');
    const minutes = Math.floor(seconds / 60).toFixed(0);
    const hours = Math.floor(minutes / 60).toFixed(0);

    return { time: `Time left: ${hours ? `${hours}:` : ''}${minutes % 60}:${seconds % 60}`, label: 'Ongoing' };
  }

  const days = moment(startTime).diff(moment(), 'days');
  const hours = moment(startTime).diff(moment(), 'hours') % (24 * 3600);
  const minutes = moment(startTime).diff(moment(), 'minutes') % 3600;
  const seconds = moment(startTime).diff(moment(), 'seconds') % 60;

  return {
    time: `Time left to start: ${days ? `${days}:` : ''} ${hours ? `${hours}:` : ''}${minutes}:${seconds}`,
    label: 'New',
  };
};
