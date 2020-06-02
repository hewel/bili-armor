/* eslint-disable */
// ==UserScript==
// @name BiliArmor
// @description 哔哩哔哩工具
// @author hewel
// @include *://www.bilibili.com/*
// @require https://cdn.staticfile.org/require.js/2.3.6/require.js
// @version dev
// ==/UserScript==
;(function () {
  'use strict'
  requirejs([
    'http://localhost:5000/dist/bundle.js',
    'http://localhost:35729/livereload.js?snipver=1',
  ])
  // Your code here...
})()
