/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("console.log(\"Webpack is working!\");\n\n// Open AI \n\n// const apiKey = '<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>';\n// const prompt = 'Hello, how are you?';\n// const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';\n\n// fetch(apiUrl, {\n//   method: 'POST',\n//   headers: {\n//     'Content-Type': 'application/json',\n//     'Authorization': `Bearer ${apiKey}`,\n//   },\n//   body: JSON.stringify({\n//     prompt: prompt,\n//     max_tokens: 50,\n//     temperature: 0.7,\n//     n: 1,\n//     stop: '.'\n//   })\n// })\n//   .then(response => response.json())\n//   .then(data => console.log(data.choices[0].text))\n//   .catch(error => console.error(error));\n\n// server side implementation\n\n// const prompt = 'Hello, how are you?';\n// const apiUrl = 'http://localhost:3000/openai-proxy';\n\n// fetch(apiUrl, {\n//   method: 'POST',\n//   headers: {\n//     'Content-Type': 'application/json'\n//   },\n//   body: JSON.stringify({\n//     prompt: prompt,\n//     max_tokens: 50,\n//     temperature: 0.7,\n//     n: 1,\n//     stop: '.'\n//   })\n// })\n//   .then(response => response.json())\n//   .then(data => console.log(data.choices[0].text))\n//   .catch(error => console.error(error));\n\n// Spotify \n\n// const clientId = '<3feebf38ebb24152b79e89005c94aab4>';\n// const clientSecret = '<db26bfba9606429199d2f1096d7dae80>';\n\n// // Step 1: Fetch access token from Spotify API\n// fetch('https://accounts.spotify.com/api/token', {\n//   method: 'POST',\n//   headers: {\n//     'Content-Type': 'application/x-www-form-urlencoded',\n//     'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)\n//   },\n//   body: 'grant_type=client_credentials'\n// })\n//   .then(response => response.json())\n//   .then(data => {\n//     // Step 2: Extract access token from response and use it to make authenticated requests\n//     const accessToken = data.access_token;\n//     // Use the access token to make requests to the Spotify API\n//   })\n//   .catch(error => console.error(error));\n\n// Sample Spotify API Request for a track with the key word dance monkey`\n\n// const searchQuery = 'dance monkey';\n// const apiUrl = `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`;\n// const accessToken = <your access token>;\n\n// fetch(apiUrl, {\n//   method: 'GET',\n//   headers: {\n//     Authorization: `Bearer ${accessToken}`,\n//   },\n// })\n//   .then(response => response.json())\n//   .then(data => console.log(data))\n//   .catch(error => console.error(error));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlLXNvdW5kdHJhY2svLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIldlYnBhY2sgaXMgd29ya2luZyFcIilcblxuXG4vLyBPcGVuIEFJIFxuXG4vLyBjb25zdCBhcGlLZXkgPSAnPHNrLXVRYTg5Y29vYmdyR0FGRmlTNzlDVDNCbGJrRkpCM0FQY3Z2ME00Q0RrS1Q4aTF2Mj4nO1xuLy8gY29uc3QgcHJvbXB0ID0gJ0hlbGxvLCBob3cgYXJlIHlvdT8nO1xuLy8gY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvZW5naW5lcy9kYXZpbmNpLWNvZGV4L2NvbXBsZXRpb25zJztcblxuLy8gZmV0Y2goYXBpVXJsLCB7XG4vLyAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICBoZWFkZXJzOiB7XG4vLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthcGlLZXl9YCxcbi8vICAgfSxcbi8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgIHByb21wdDogcHJvbXB0LFxuLy8gICAgIG1heF90b2tlbnM6IDUwLFxuLy8gICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4vLyAgICAgbjogMSxcbi8vICAgICBzdG9wOiAnLidcbi8vICAgfSlcbi8vIH0pXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmNob2ljZXNbMF0udGV4dCkpXG4vLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cblxuLy8gc2VydmVyIHNpZGUgaW1wbGVtZW50YXRpb25cblxuLy8gY29uc3QgcHJvbXB0ID0gJ0hlbGxvLCBob3cgYXJlIHlvdT8nO1xuLy8gY29uc3QgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9vcGVuYWktcHJveHknO1xuXG5cbi8vIGZldGNoKGFwaVVybCwge1xuLy8gICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgaGVhZGVyczoge1xuLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbi8vICAgfSxcbi8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgIHByb21wdDogcHJvbXB0LFxuLy8gICAgIG1heF90b2tlbnM6IDUwLFxuLy8gICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4vLyAgICAgbjogMSxcbi8vICAgICBzdG9wOiAnLidcbi8vICAgfSlcbi8vIH0pXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmNob2ljZXNbMF0udGV4dCkpXG4vLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cblxuLy8gU3BvdGlmeSBcblxuLy8gY29uc3QgY2xpZW50SWQgPSAnPDNmZWViZjM4ZWJiMjQxNTJiNzllODkwMDVjOTRhYWI0Pic7XG4vLyBjb25zdCBjbGllbnRTZWNyZXQgPSAnPGRiMjZiZmJhOTYwNjQyOTE5OWQyZjEwOTZkN2RhZTgwPic7XG5cbi8vIC8vIFN0ZXAgMTogRmV0Y2ggYWNjZXNzIHRva2VuIGZyb20gU3BvdGlmeSBBUElcbi8vIGZldGNoKCdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbicsIHtcbi8vICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgIGhlYWRlcnM6IHtcbi8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4vLyAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgJyArIGJ0b2EoY2xpZW50SWQgKyAnOicgKyBjbGllbnRTZWNyZXQpXG4vLyAgIH0sXG4vLyAgIGJvZHk6ICdncmFudF90eXBlPWNsaWVudF9jcmVkZW50aWFscydcbi8vIH0pXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgLy8gU3RlcCAyOiBFeHRyYWN0IGFjY2VzcyB0b2tlbiBmcm9tIHJlc3BvbnNlIGFuZCB1c2UgaXQgdG8gbWFrZSBhdXRoZW50aWNhdGVkIHJlcXVlc3RzXG4vLyAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBkYXRhLmFjY2Vzc190b2tlbjtcbi8vICAgICAvLyBVc2UgdGhlIGFjY2VzcyB0b2tlbiB0byBtYWtlIHJlcXVlc3RzIHRvIHRoZSBTcG90aWZ5IEFQSVxuLy8gICB9KVxuLy8gICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG5cbi8vIFNhbXBsZSBTcG90aWZ5IEFQSSBSZXF1ZXN0IGZvciBhIHRyYWNrIHdpdGggdGhlIGtleSB3b3JkIGRhbmNlIG1vbmtleWBcblxuLy8gY29uc3Qgc2VhcmNoUXVlcnkgPSAnZGFuY2UgbW9ua2V5Jztcbi8vIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2g/cT0ke3NlYXJjaFF1ZXJ5fSZ0eXBlPXRyYWNrYDtcbi8vIGNvbnN0IGFjY2Vzc1Rva2VuID0gPHlvdXIgYWNjZXNzIHRva2VuPjtcblxuLy8gZmV0Y2goYXBpVXJsLCB7XG4vLyAgIG1ldGhvZDogJ0dFVCcsXG4vLyAgIGhlYWRlcnM6IHtcbi8vICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbi8vICAgfSxcbi8vIH0pXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbi8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDOztBQUdsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlLXNvdW5kdHJhY2svLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;