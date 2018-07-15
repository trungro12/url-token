var script=document.createElement('script');
script.type='text/javascript';

if(link_short == 1)
                   {
                   script.src='//123link.pw/js/full-page-script.js';
                   }

else if(link_short == 2)
                   {
script.src='//megaurl.in/js/full-page-script.js';

                   }
document.getElementById("link-short").innerHTML = '';
 document.getElementById("link-short").appendChild(script);
