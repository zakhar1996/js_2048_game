!function(){function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=Array(e);n<e;n++)t[n]=r[n];return t}function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=e([,,,,]).map(function(){return[,,,,].fill(0)}),t=0,o=!1,i=document.querySelectorAll(".field-cell"),a=document.getElementById("start-button"),c=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],u={Start:document.getElementById("message-start"),Lose:document.getElementById("message-lose"),Winner:document.getElementById("message-win")};a.addEventListener("click",function(){f(),d(),l(n),l(n),s(n,i)});var f=function(){t=0,o=!1,document.querySelector(".game-score").innerText=t,n=e([,,,,]).map(function(){return[,,,,].fill(0)}),u.Winner.classList.add("hidden"),u.Lose.classList.add("hidden")};function l(r){var e=[];if(r.forEach(function(r,n){r.forEach(function(r,t){0===r&&e.push({roWinnerdex:n,colIndex:t})})}),e.length>0){var n=Math.floor(Math.random()*e.length),t=e[n];r[t.roWinnerdex][t.colIndex]=.9>Math.random()?2:4}}var s=function(r,e){r.forEach(function(n,t){n.forEach(function(n,o){var i=e[t*r.length+o];n>0?(i.textContent=n,i.classList="field-cell"+" field-cell--".concat(n)):(i.textContent=null,i.classList="field-cell")})})},d=function(){a.classList+=" restart",a.innerText="Restart",a.style="border: 2px solid red; color: #776e65; outline: none;",u.Start.classList.add("hidden")};document.addEventListener("keyup",function(r){if(c.includes(r.key)&&!o){var e,a,u=JSON.parse(JSON.stringify(n));switch(r.key){case"ArrowLeft":h(),A(n),L(n);break;case"ArrowRight":v(),A(n),L(n);break;case"ArrowUp":e=g(n),A(n=g(e.map(function(r){return p(r)}))),L(n);break;case"ArrowDown":a=g(n),A(n=g(a=a.map(function(r){return p(r.reverse()).reverse()}))),L(n)}document.querySelector(".game-score").innerText=t,m(u)&&(l(n),s(n,i))}});var m=function(r){for(var e=0;e<4;e++)for(var t=0;t<4;t++)if(r[e][t]!==n[e][t])return!0;return!1},h=function(){n=n.map(function(r){return p(r)})},v=function(){n=n.map(function(r){return p(r.reverse()).reverse()})},y=function(r){return r.filter(Boolean)},p=function(r){for(var e=y(r),n=0;n<e.length-1;n++)e[n]===e[n+1]&&(e[n]*=2,e[n+1]=0,t+=e[n]);for(e=y(e);e.length<4;)e.push(0);return e};function g(r){return r.map(function(r,e,n){return r.map(function(r,t){return n[t][e]})})}var A=function(r){r.forEach(function(r){r.forEach(function(r){r>=2048&&(o=!0,u.Start.classList.remove("hidden"))})})};function L(){n.every(function(r){return r.every(function(r){return 0!==r})})&&!function(){for(var r=0;r<4;r++)for(var e=0;e<4;e++){var t=n[r][e];if(0!==t&&(r<3&&t===n[r+1][e]||e<3&&t===n[r][e+1]))return!0}return!1}()&&u.Lose.classList.remove("hidden")}}();
//# sourceMappingURL=index.9f7db52b.js.map
