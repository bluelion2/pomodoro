<h1 style="text-decoration: line-through; text-align: center;">
  Pomodoro Timer - Chrome extensions
</h1>

<h2 style="text-align: center;">Deprecated</h2>
<p>Chrome Extension 으로 만드는 Pomodoro Timer</p>

- Chrome Extension으로 timer를 등록하면 지정된 시간이 지나면 Alert를 해주는 App 

---

## 파일 설명

- manifest.json: 웹 문서에 대한 추가정보를 나타내는 json 파일이다. PWA에서도 쓰이며, chrome Extension을 만들때에는 다른 필수 정보가 필요하다.
  ```json
  // https://developer.mozilla.org/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json
  {
    "manifest_version": 2, // manifest 버전 - 현재 항상 2여야 함
    "name": "Pomodoro Timer", // chrome extensions에 노출될 이름
    "version": "0.0.1", // 앱 개발 버전
    "description": "Pomodoro timer", // 설명
    "browser_action": {  
      "default_popup": "./index.html" // popup 기본 문서
    },
    "permissions": [ // 크롬 브라우저에 권한 요청
      "activeTab",  "http://*/*", "https://*/*"
    ],
    "icons": { // 앱 icon
      "128": "./img/pomodoro.png"
    }
  }

  ```


---
## 중단 및 이유 정리하기

- Chrome Extension을 닫을 경우 모두가 초기화 됨 -> 사용자가 지정할 Time을 저장할 방법이 없음 
  - [Chrome - persist-popups](https://developer.chrome.com/docs/extensions/mv3/faq/#faq-persist-popups)
  - localStorage에 묻더라도 time을 계산할 수가...
- Service Worker를 이용해서 setInterval을 하는 방법에 대한 고민 (Todo)
  - component unmount시에 serviceWorker로 interval을 넣고, 돌아가게 하다가 앱을 켤 때 등록된 interval이 있으면 가져와서 쓰는 식이면 어떨까..
  - [migrating_to_service_workers/#alarms](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/#alarms)
  - 
