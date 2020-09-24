const cors="https://cors-anywhere.herokuapp.com/";function clear(t,a){let e=t=t.replace(/ data-name="(.*?)"/g,"");if(t=(t=(t=t.replace(/<svg><path fill="(.*?)" d="(.*?)"><\/path><\/svg>/g,'&lt;svg&gt;\n    &lt;path fill="$1" d="$2"&gt;\n    &lt;/path&gt;\n&lt;/svg&gt;')).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),"cssbg"==a){let a=e,i='background-image: url("data:image/svg+xml,'+(a=(a=a.replace(/<svg/,"<svg xmlns='http://www.w3.org/2000/svg'")).replace(/"/g,"'")).replace(/[\r\n%#()<>?\[\\\]^`{|}]/g,encodeURIComponent)+'");';t=i=(i=i.replace(/background-image/g,"<qteg>background-image</qteg>")).replace(/url\("(.*?)"\)/g,'<qteg>url(</qteg><qstr>"$1"</qstr><qteg>)</qteg>')}else if("cssurl"==a){let a=e,i='url("data:image/svg+xml,'+(a=(a=a.replace(/<svg/,"<svg xmlns='http://www.w3.org/2000/svg'")).replace(/"/g,"'")).replace(/[\r\n%#()<>?\[\\\]^`{|}]/g,encodeURIComponent)+'");';t=i=i.replace(/url\("(.*?)"\)/g,'<qteg>url(</qteg><qstr>"$1"</qstr><qteg>)</qteg>')}else if("dataimg"==a){let a=e;t=`<qstr>${"data:image/svg+xml,"+(a=(a=a.replace(/<svg/,"<svg xmlns='http://www.w3.org/2000/svg'")).replace(/"/g,"'")).replace(/[\r\n%#()<>?\[\\\]^`{|}]/g,encodeURIComponent)}</qstr>`}else if("svgimg"==a){let a=e,i='<img src="data:image/svg+xml,'+(a=(a=a.replace(/<svg/,"<svg xmlns='http://www.w3.org/2000/svg'")).replace(/"/g,"'")).replace(/[\r\n%#()<>?\[\\\]^`{|}]/g,encodeURIComponent)+'"/>';t=(t=(t=(t=(t=i=i.replace(/url\("(.*?)"\)/g,'<qteg>url(</qteg><qstr>"$1"</qstr><qteg>)</qteg>')).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/img/g,"<qteg>img</qteg>")).replace(/src="(.*?)"/g,'<qattr>src</qattr>=<qstr>"$1"</qstr>')}else if("encoded"==a){let a=e;t=`<qstr>${t=(a=(a=a.replace(/<svg/,"<svg xmlns='http://www.w3.org/2000/svg'")).replace(/"/g,"'")).replace(/[\r\n%#()<>?\[\\\]^`{|}]/g,encodeURIComponent)}</qstr>`}else t=(t=(t=(t=(t=t.replace(/svg/g,"<qteg>svg</qteg>")).replace(/path/g,"<qteg>path</qteg>")).replace(/viewBox="(.*?)"/g,'<qattr>viewBox</qattr>=<qstr>"$1"</qstr>')).replace(/fill="(.*?)"/g,'<qattr>fill</qattr>=<qclr>"$1"</qclr>')).replace(/d="(.*?)"/g,'<qattr>d</qattr>=<qstr>"$1"</qstr>');return t}function svgClick(){$("#icons div").click(function(){$("#icons div").removeClass("active"),$(this).addClass("active"),$(".current").show();let t=$(this).data("id"),a=$("#icons div[data-id='"+t+"']").attr("tooltip"),e=clear($("#icons div[data-id='"+t+"']").html()),i=clear($("#icons div[data-id='"+t+"'] svg").html());$("#contribuitor").html($("#icons div[data-id='"+t+"']").data("by")),$(".input[data-id='svg-icon']").html(e),$(".input[data-id='path-icon']").html(i),$("#icon").html($("#icons div[data-id='"+t+"']").html().replace(/fill="#fff"/g,'fill="#000"')+a),$(".input[data-id='cssbg-icon']").html(clear($("#icons div[data-id='"+t+"']").html(),"cssbg")),$(".input[data-id='cssurl-icon']").html(clear($("#icons div[data-id='"+t+"']").html(),"cssurl")),$(".input[data-id='cssencoded-icon']").html(clear($("#icons div[data-id='"+t+"']").html(),"encoded")),$(".input[data-id='dataimg-icon']").html(clear($("#icons div[data-id='"+t+"']").html(),"dataimg")),$(".input[data-id='svgimg-icon']").html(clear($("#icons div[data-id='"+t+"']").html(),"svgimg")),$(".current").is(":visible")?$(".filter").attr("style",""):$(".filter").attr("style","position: sticky;top:85px;"),window.innerWidth<600&&($(".left").show(),$(".filter").attr("style",""))})}function searchInput(t){$(".search").val($(t).val());let a=$(".search").val().toLowerCase();if($(".search").focus(),""==a)$("#icons div").show();else if($("#icons div").hide(),-1!==a.search("/")){let t=a.replace(/ /g,"").split("/"),e=a.split("/").length-1;for(let a=0;a<=e;a++)$("#icons div[data-alias*='"+t[a]+"']").show(),$("#icons div[data-alias*='"+t[a]+"']").show(),console.log("I'm shoing "+t[a])}else $("#icons div[data-alias*='"+a+"']").show()}$(".color input").on("change",function(){let t=$(this).val();$("#color").val(t),$(".color input").val(t),$("#icons-color").html(`#icons div svg path{fill: ${t}}`),$(".input qclr").html(`"${t}"`),$(".input[data-id='cssbg-icon']").html($(".input[data-id='cssbg-icon']").html().replace(/fill='(.*?)'/g,"fill='"+encodeURIComponent(t)+"'"))}),$("#tags").on("change",function(){$(".search").val($(this).val()),searchInput($(".search"))}),$(".download div").click(function(){let t=$("#download-sel").val(),a=$("#icons div.active").data("id");document.location.href="svg"==t?"https://materialdesignicons.com/api/download/icon/svg/"+a:"https://materialdesignicons.com/api/download/icon/png/"+a+"/"+t}),$(".close-small").click(function(){$(".left").hide(),$(".right").show()}),LocalLoad.load?$.getJSON("icons.json",function(t){$("#preloader").remove();let a=(t=t.icons).length;for(let e=0;e<a;e++){let a="#6F6F6F";a="#fff";let i=t[e].aliases;i=null==i||""==i?t[e].name:i+","+t[e].name,$("#icons").append(`<div tooltip="${t[e].name}" data-alias="${i}" flow="down" data-id="${t[e].id}" data-by="${t[e].user.name}"><svg><path data-name="${t[e].name}" fill="${a}" d="${t[e].data}"></path></svg></div>`)}svgClick()}).fail(function(){$("#icons").html("Error loading icons, try again...")}):$.getJSON(cors+"https://materialdesignicons.com/api/init",function(t){let a=t.packages[0].id;$.getJSON(cors+"https://materialdesignicons.com/api/package/"+a,function(t){$("#preloader").remove();let a=(t=t.icons).length;for(let e=0;e<a;e++){let a="#6F6F6F";a="#fff";let i=t[e].aliases;i=null==i||""==i?t[e].name:i+","+t[e].name,$("#icons").append(`<div tooltip="${t[e].name}" data-alias="${i}" flow="down" data-id="${t[e].id}" data-by="${t[e].user.name}"><svg><path data-name="${t[e].name}" fill="${a}" d="${t[e].data}"></path></svg></div>`)}svgClick()}).fail(function(){$("#icons").html("Error loading icons, try again...")})}).fail(function(){$("#icons").html("Error loading icons, try again...")}),$(".search").on("input",function(){searchInput($(this))}),$(document).scroll(function(){Math.floor($(document).scrollTop())>70?$(".head").addClass("active"):$(".head").removeClass("active"),$(".current").is(":visible")?$(".filter").attr("style",""):$(".filter").attr("style","position: sticky;top:85px;")}),$(".git").click(function(){window.open("https://github.com/DanRotaru/icons","_blank")});