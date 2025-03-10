---
title: "Measuring page speed with Firebase Performance for Web"
date: "Sun May 19 2019 03:00:00 GMT+0300 (Eastern European Summer Time)"
description: "Learn how to implement Firebase Performance Monitoring for web to track page speed metrics and improve user experience, with a complete implementation guide."
---

At the Google I/O 2019 Firebase released it's Firebase Performance Monitoring plugin to the web.
Firebase Performance Monitoring is a easy way to find out page speed bottlenecks that are hurting the user experience.
The web version of this plugin is now in open beta.

## What does the Firebase Performance Monitoring measure?

The plugin measures [six default traces](#default-traces) and network traffic's response time.
Users also can implement their own measurements using JavaScript described in [Firebase Performance Monitoring Documentation](https://firebase.google.com/docs/perf-mon/get-started-web#add-custom-trace).

![Firebase Performance Monitoring default metrics dashboard](/firebase-perf-screenshot.png)

## Implementation tutorial

In this tutorial we go through how to implement the SDK to a website.
There are many ways to implement this SDK. In this tutorial we are implementing the standalone SDK from the CDN.
Check out other ways from the [Firebase Performance Monitoring official documentation](https://firebase.google.com/docs/perf-mon/get-started-web).

### The HTML tracking snippet for Firebase Performance Monitoring

Implement snippet below as a first tag inside head.

```html
<head>
  <!-- Firebase Performance for Web -->
  <script>
    !(function (n, e) {
      var t,
        o,
        i,
        c = [],
        f = { passive: !0, capture: !0 },
        r = new Date(),
        a = "pointerup",
        u = "pointercancel";
      function p(n, c) {
        t || ((t = c), (o = n), (i = new Date()), w(e), s());
      }
      function s() {
        o >= 0 &&
          o < i - r &&
          (c.forEach(function (n) {
            n(o, t);
          }),
          (c = []));
      }
      function l(t) {
        if (t.cancelable) {
          var o =
            (t.timeStamp > 1e12 ? new Date() : performance.now()) - t.timeStamp;
          "pointerdown" == t.type
            ? (function (t, o) {
                function i() {
                  p(t, o), r();
                }
                function c() {
                  r();
                }
                function r() {
                  e(a, i, f), e(u, c, f);
                }
                n(a, i, f), n(u, c, f);
              })(o, t)
            : p(o, t);
        }
      }
      function w(n) {
        ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(
          function (e) {
            n(e, l, f);
          }
        );
      }
      w(n),
        (self.perfMetrics = self.perfMetrics || {}),
        (self.perfMetrics.onFirstInputDelay = function (n) {
          c.push(n), s();
        });
    })(addEventListener, removeEventListener);
  </script>
  <script>
    (function (sa, fbc) {
      function load(f, c) {
        var a = document.createElement("script");
        a.async = 1;
        a.src = f;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(a, s);
      }
      load(sa);
      window.onload = function () {
        firebase.initializeApp(fbc).performance();
      };
    })(
      "https://www.gstatic.com/firebasejs/6.0.2/firebase-performance-standalone.js",
      {
        apiKey: "{{apiKey}}",
        authDomain: "{{authDomain}}",
        databaseURL: "{{databaseURL}}",
        projectId: "{{projectId}}",
        storageBucket: "{{storageBucket}}",
        messagingSenderId: "{{messagingSenderId}}",
        appId: "{{appId}}",
      }
    );
  </script>
  <!-- End Firebase Performance for Web -->

  ...
</head>
```

Get your app's Firebase config object

```js
{
  apiKey: "{{apiKey}}",
  authDomain: "{{authDomain}}",
  databaseURL: "{{databaseURL}}",
  projectId: "{{projectId}}",
  storageBucket: "{{storageBucket}}",
  messagingSenderId: "{{messagingSenderId}}",
  appId: "{{appId}}"
}
```

from the Firebase console.
More info from the [Firebase official documentation](https://firebase.google.com/docs/web/setup#config-object).

## Ready to measure

You ready to measure your site's performance. After the implementation give Firebase 12 hours to gather data.

## Default traces

There are six default traces that the plugin measures.

##### first paint traces

measure the time between when the user navigates to a page and when any visual change happens

##### first contentful paint traces

measure the time between when a user navigates to a page and when meaningful content displays, like an image or text

##### domInteractive traces

measure the time between when the user navigates to a page and when the page is considered interactive for the user

##### domContentLoadedEventEnd traces

measure the time between when the user navigates to a page and when the initial HTML document is completely loaded and parsed

##### loadEventEnd traces

measure the time between when the user navigates to the page and when the current document's load event completes

##### first input delay traces

measure the time between when the user interacts with a page and when the browser is able to respond to that input
