import"./assets/styles-71842516.js";import{f,i}from"./assets/vendor-77e16229.js";const e={inputEl:document.getElementById("datetime-picker"),startBtn:document.getElementById("start"),dataDays:document.querySelector("[data-days]"),dataHours:document.querySelector("[data-hours]"),dataMinutes:document.querySelector("[data-minutes]"),dataSeconds:document.querySelector("[data-seconds]")};e.startBtn.disabled=!0;let c=null;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(i.warning({position:"topCenter",title:"Warning",message:'"Please choose a date in the future!"'}),e.startBtn.disabled=!0):e.startBtn.disabled=!1}},h=f("#datetime-picker",y);function n(t){return t.toString().padStart(2,"0")}function p(t){const a=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:l,seconds:m}}function D(){c=setInterval(S,1e3)}function S(){let o=h.selectedDates[0]-new Date;o<1e3&&(clearInterval(c),i.success({position:"topCenter",title:"Success",message:"Time is up!"}));const{days:r,hours:d,minutes:a,seconds:s}=p(o);e.dataDays.textContent=n(r),e.dataHours.textContent=n(d),e.dataMinutes.textContent=n(a),e.dataSeconds.textContent=n(s),e.startBtn.disabled=!0}e.startBtn.addEventListener("click",D);
//# sourceMappingURL=commonHelpers.js.map
