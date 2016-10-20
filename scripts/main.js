window.addEventListener('load', function(){
  var timeCount = 0;
  var intervalID;
  var state = 0;
  var startBtn = document.getElementById('start-btn');
  var stopBtn = document.getElementById('stop-btn');
  var timerZone = document.getElementById('timer');

  function countUp(){
    timeCount++;
    timerZone.innerHTML = ('00' + Math.floor(timeCount/60)).slice(-2) + ' : ' + ('00' + timeCount%60).slice(-2);
  }

  function startFunc(){
    if(state === 0){
      state = 1;
      startBtn.style.backgroundColor = '#daa520';
      startBtn.style.color = '#daa520';
      stopBtn.style.backgroundColor = '#8b4513';
      stopBtn.style.color = 'white';

      intervalID = setInterval(countUp, 1000);
    }
  }
  function stopFunc(){
    if(state === 1){
      state = 0;
      startBtn.innerHTML = 'RESTART'
      startBtn.style.backgroundColor = '#8b4513';
      startBtn.style.color = 'white';
      stopBtn.style.backgroundColor = '#daa520';
      stopBtn.style.color = '#daa520';

      clearInterval(intervalID);
    }
  }

  startBtn.addEventListener('click', startFunc);
  stopBtn.addEventListener('click', stopFunc);
});
