import 'core-js/es6/string';

import * as $ from 'jquery';

function getWitApiUrl() {
  return this.buildApiUrl('api', 'api/');
}

function buildApiUrl(subdomain : string, suffix : string) {
  // Simple check to trim www
  let domainname : string = window.location.hostname;
  if (domainname.startsWith('www')) {
    domainname = window
      .location
      .hostname
      .slice(4);
  }
  let url = domainname;
  if (window.location.port) {
    url += ':' + window.location.port;
  }
  if (subdomain) {
    url = subdomain + '.' + url + '/';
  }
  if (suffix) {
    url += suffix;
  }
  url = window.location.protocol + '//' + url;
  return url;
}

function login() {
  let url = getWitApiUrl() + 'login/authorize';
  window.location.href = url;
}

$(document)
  .ready(function () {
    $("a#login")
      .click(function () {
        login();
      })
  });