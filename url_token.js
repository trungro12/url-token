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
