let timeInterval = 1 // dummy variable for time interval

document.getElementById('min1').addEventListener("click", function(){
    console.log("The interval is one minute")
    chrome.alarms.create('timeToStretch', { periodInMinutes: 1 }); 
})

document.getElementById('min45').addEventListener("click", function(){
  console.log("The interval is 45 minute")
  chrome.alarms.create('timeToStretch', { periodInMinutes: 45 });   
})

document.getElementById('min60').addEventListener("click", function(){
  console.log("The interval is 60 minute")
  chrome.alarms.create('timeToStretch', { periodInMinutes: 60 }); 
})

document.getElementById('cancelAlarm').addEventListener("click", function(){
  console.log("Alarm is cancalled!")
  chrome.alarms.clear("timeToStretch");
  window.alert("Your stretch alarm is cancelled!");
})


chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'timeToStretch') {
    chrome.windows.create({
      url: 'finalpage.html',
      type: 'popup'
    });
  }
});

