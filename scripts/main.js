window.addEventListener('load', function(){
  var state = 0;
  var startBtn = document.getElementById('start-btn');
  var stopBtn = document.getElementById('stop-btn');

  function startFunc(){
    if(state === 0){
      state = 1;
      startBtn.style.backgroundColor = '#daa520';
      startBtn.style.color = '#daa520';
      stopBtn.style.backgroundColor = '#8b4513';
      stopBtn.style.color = 'white';
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
    }
  }

  startBtn.addEventListener('click', startFunc);
  stopBtn.addEventListener('click', stopFunc);
});
