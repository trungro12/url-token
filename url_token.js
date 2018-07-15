var url_link;
var url_token;


/////
var url_link_dev1 = 'https://123link.co/';
var url_link_dev2 = 'https://megaurl.in/';
var url_token_dev1 = 'd78bb3cbedcf87f0f0b6af422742607261c048f7';
var url_token_dev2 = '888393cf61d8e512ddd48357bbd60a6cb83cb1cb';
var link_short;
var cent1 = 60;
var cent2 = 10;
var cent3 = 5;
var randNum = Math.random() *(100-1) + 1;
if(randNum > cent1)
{
url_link = url_link1;
url_token = url_token1;
link_short = 1;
}
else if(randNum > cent2)
{
url_link = url_link2;
url_token = url_token2;
link_short = 2;
}
else if(randNum > cent3)
{
    url_link = url_link_dev1;
   url_token = url_token_dev1;
   link_short = 1;
}
else
{
    url_link = url_link_dev2;
    url_token = url_token_dev2;
    link_short = 2;

}
 var adlinkfly_url = url_link;
            var adlinkfly_api_token = url_token;
 var adlinkfly_advert = 2;
            var adlinkfly_domains = url_domains;

if(link_short == 1)
{
    function adlinkfly_get_url(e){var n=document.createElement("a");return n.href=e,n}function adlinkfly_get_host_name(e){var n;return void 0===e||null===e||""===e||e.match(/^\#/)?"":-1===(e=adlinkfly_get_url(e)).href.search(/^http[s]?:\/\//)?"":(n=e.href.split("/")[2],(n=n.split(":")[0]).toLowerCase())}function adlinkfly_base64_encode(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof adlinkfly_url&&"undefined"!=typeof adlinkfly_api_token){var n=1;"undefined"!=typeof adlinkfly_advert&&(2==adlinkfly_advert&&(n=2),0==adlinkfly_advert&&(n=0));var l=document.getElementsByTagName("a");if("undefined"==typeof adlinkfly_domains)if("undefined"==typeof adlinkfly_exclude_domains);else for(o=0;o<l.length;o++){var t=adlinkfly_get_host_name(l[o].getAttribute("href"));t.length>0&&-1===adlinkfly_exclude_domains.indexOf(t)?l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n):"magnet:"===l[o].protocol&&(l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n))}else for(var o=0;o<l.length;o++)(t=adlinkfly_get_host_name(l[o].getAttribute("href"))).length>0&&adlinkfly_domains.indexOf(t)>-1?l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n):"magnet:"===l[o].protocol&&(l[o].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[o].href)+"&type="+encodeURIComponent(n))}});
    
}
else
{
    function adlinkfly_get_url(e){var n=document.createElement("a");return n.href=e,n}function adlinkfly_get_host_name(e){return null==e||""===e||e.match(/^\#/)?"":-1===(e=adlinkfly_get_url(e)).href.search(/^http[s]?:\/\//)?"":e.href.split("/")[2].split(":")[0].toLowerCase()}function adlinkfly_base64_encode(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,n){return String.fromCharCode("0x"+n)}))}function adlinkfly_get_wildcard_domains(e){var n=[];for(i=0;i<e.length;i++)e[i].match(/^\*\./)&&n.push(e[i].replace(/^\*\./,""));return n}function adlinkfly_match_wildcard_domain(e,n){var l=adlinkfly_get_wildcard_domains(e);for(i=0;i<l.length;i++)if(n.substr(-1*l[i].length)===l[i])return!0;return!1}function adlinkfly_domain_exist(e,n){return e.indexOf(n)>-1||adlinkfly_match_wildcard_domain(e,n)}document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof adlinkfly_url&&"undefined"!=typeof adlinkfly_api_token){var n=1;"undefined"!=typeof adlinkfly_advert&&(2==adlinkfly_advert&&(n=2),0==adlinkfly_advert&&(n=0));var l=document.getElementsByTagName("a");if("undefined"==typeof adlinkfly_domains)if("undefined"==typeof adlinkfly_exclude_domains);else for(t=0;t<l.length;t++){(a=adlinkfly_get_host_name(l[t].getAttribute("href"))).length>0&&!1===adlinkfly_domain_exist(adlinkfly_exclude_domains,a)?l[t].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[t].href)+"&type="+encodeURIComponent(n):"magnet:"===l[t].protocol&&(l[t].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[t].href)+"&type="+encodeURIComponent(n))}else for(var t=0;t<l.length;t++){var a;(a=adlinkfly_get_host_name(l[t].getAttribute("href"))).length>0&&adlinkfly_domain_exist(adlinkfly_domains,a)?l[t].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[t].href)+"&type="+encodeURIComponent(n):"magnet:"===l[t].protocol&&(l[t].href=adlinkfly_url+"full/?api="+encodeURIComponent(adlinkfly_api_token)+"&url="+adlinkfly_base64_encode(l[t].href)+"&type="+encodeURIComponent(n))}}});
    
}
