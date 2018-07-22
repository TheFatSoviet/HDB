Discord = require('discord.js');
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === '!aide') {
    	message.channel.send('// ping');
	    message.channel.send('// !NTM');
	    message.channel.send('// bing');
	    message.channel.send('// test');
	    message.channel.send('// t2');
	    message.channel.send('// !Hporn');
	    message.channel.send('// !URSS');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === '!NTM') {
    	message.channel.send('NIKTAMEEEEEEEEEEEEEEEEEEEEEEEEEEEEER');
	    message.channel.send('https://78.media.tumblr.com/4b9d57b13b2b23f847ee3c26abfc0eb4/tumblr_inline_o96g1lSneD1s9x8us_500.gif');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('NTM!');
  	}
});

client.on('message', message => {
    if (message.content === 't2') {
    	message.reply('t3 mdr');
  	}
});

client.on('message', message => {
    if (message.content === '!Hporn') {
     var nombre_de_phrases = 51; // le nombre de phrases que tu vas mettre (PS : on compte à partir de 1)
     switch (getRandomInt(nombre_de_phrases)) {
       // Toutes les phrases en fonction des cas (PS : on compte à partir de 0)
      case 0:
       message.reply('http://www.comptoir-hardware.com/images/stories/_modding/parvumsystems-projectmagnus/modding-parvum-systems-project-magnus-08_t.jpg');
       break;
      case 1:
       message.reply('https://www.cowcotland.com/images/news/2016/05/mod-apex-pc-sobre-mais-diablement-realise.jpg');
       break;
      case 2:
       message.reply('http://www.overclockingmadeinfrance.com/wp-content/uploads/2016/01/Kryptek-PC-Project-Pyrrus-2.jpg');
       break;
      case 3:
       message.reply('https://www.materiel.net/live/403467.jpg');
       break;
      case 4:
       message.reply('http://www.overclockingmadeinfrance.com/wp-content/uploads/2016/01/Kryptek-PC-Project-Pyrrus-2.jpg');
       break;
      case 5:
       message.reply('https://i.pinimg.com/originals/da/e2/52/dae25254a28a6afc1d7d0bdc7d437a5a.jpg');
       break;
      case 6:
       message.reply('https://pbs.twimg.com/media/CuaVgZ_WIAALTk7.jpg');
       break;
      case 7:
       message.reply('https://www.geeky-gadgets.com/wp-content/uploads/2011/05/Computer-Desk.jpg');
       break;
      case 8:
       message.reply('http://www.modding.fr/wp-content/uploads/2011/11/photo-02.jpg');
       break;
      case 9:
       message.reply('https://i.pinimg.com/originals/a7/f6/b6/a7f6b6d175ff788200bf658f8e10fbb3.jpg');
       break;
      case 10:
       message.reply('https://www.overclockingmadeinfrance.com/wp-content/uploads/2016/01/Kryptek-PC-Project-Pyrrus-4.jpg');
       break;
      case 11:
       message.reply('https://www.hardwarecooking.fr/wp-content/uploads/2017/09/Cosmos-C700P-2-computex-2017.jpg');
       break; 
      case 12:
       message.reply('https://media.ldlc.com/bo/images/fiches/bo%C3%AEtier_pc/nzxt/s340_elite/noir/texte2.jpg');
       break;   
      case 13:
       message.reply('http://www.ozeros.com/wp-content/uploads/2013/09/MOD-1.jpg');
       break; 
      case 14:
       message.reply('https://pic.clubic.com/v1/images/1582030/raw?width=1000&height=0&fit=max&hash=09843190de4d28a59f300a7c77efd30e44645bb5');
       break; 
      case 15:
       message.reply('http://www.guru3d.com/index.php?ct=articles&action=file&id=17753');
       break; 
      case 16:
       message.reply('https://www.cowcotland.com/images/news/2017/06/mod.jpg');
       break; 
      case 17:
       message.reply('https://i.dailymail.co.uk/i/pix/2013/02/12/article-2277340-17865F32000005DC-534_634x418.jpg');
       break; 
      case 18:
       message.reply('https://i.pinimg.com/474x/e3/2b/8a/e32b8ae49df86792f1674ea92310fd6d.jpg');
       break;   
      case 19:
       message.reply('https://www.magicpc.fr/76242-large_default/s340.jpg');
       break;   
      case 20:
       message.reply('https://www.hd-tecnologia.com/imagenes/articulos/2016/06/Los-mejores-MODs-de-Computex-2016-7.jpg');
       break; 
      case 21:
       message.reply('https://www.hd-tecnologia.com/imagenes/articulos/2016/06/Los-mejores-MODs-de-Computex-2016-3.jpg');
       break; 
      case 22:
       message.reply('http://www.redusers.com/noticias/wp-content/uploads/2015/07/win2013.jpg');
       break; 
      case 23:
       message.reply('https://img.generation-nt.com/thermaltake-chaser-mk-i-lcs-edition_0901F901B000964151.jpg');
       break; 
      case 24:
       message.reply('https://www.hd-tecnologia.com/imagenes/articulos/2016/06/Los-mejores-MODs-de-Computex-2016-2.jpg');
       break; 
      case 25:
       message.reply('https://www.hd-tecnologia.com/imagenes/articulos/2016/06/Los-mejores-MODs-de-Computex-2016-8.jpg');
       break;  
      case 26:
       message.reply('https://http2.mlstatic.com/programacion-bios-pc-laptop-mod-tarjetas-de-video-router-y--D_NQ_NP_764170-MLV26478747252_122017-F.jpg');
       break;   
      case 27:
       message.reply('https://www.hardwarecooking.fr/wp-content/uploads/2017/09/Cosmos-C700P-computex-2017.jpg');
       break; 
      case 28:
       message.reply('https://www.hardwarecooking.fr/wp-content/uploads/2017/11/test-msi-gtx-1080-ti-gaming-x-trio-hardwarecooking-19.jpg');
       break; 
      case 29:
       message.reply('https://images-na.ssl-images-amazon.com/images/I/51agJDR1mRL.jpg');
       break; 
      case 30:
       message.reply('http://casingmods.fr/wp-content/uploads/2018/03/22496016_1087078904762045_8125084368697313006_o.jpg');
       break; 
      case 31:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/modding-hour-29-phanteks-alienware-purple-1.jpg');
       break; 
       case 32:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/mod-luna01.jpg');
       break; 
      case 33:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/MB-Crystal-14.jpg');
       break; 
       case 34:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/Project-Flow-6.jpg');
       break; 
      case 35:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/Project-Flow-9.jpg');
       break; 
       case 36:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/Project-Silver-Mist-27.jpg');
       break; 
      case 37:
       message.reply('http://www.modding.fr/wp-content/uploads/2016/05/102.jpg');
       break; 
       case 38:
       message.reply('http://www.modding.fr/wp-content/uploads/2016/05/141.jpg');
       break; 
      case 39:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/Project-Silver-Mist-27.jpg');
       break; 
       case 40:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/Project-Silver-Mist-2.jpg');
       break; 
      case 41:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/Project-Silver-Mist-28.jpg');
       break; 
       case 42:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/Project-Silver-Mist-34.jpg');
       break; 
      case 43:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/Project-Silver-Mist-12.jpg');
       break; 
       case 44:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/03/Project-Silver-Mist-8.jpg');
       break; 
      case 45:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/Project-Flow-6.jpg');
       break; 
        case 46:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/Project-Flow-2.jpg');
       break; 
      case 47:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/Project-Flow-11.jpg');
       break; 
        case 48:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/Project-Flow-6.jpg');
       break; 
       case 49:
       message.reply('https://www.watermod.com/wp-content/uploads/2017/07/18813648_1004622863007650_4271719754737933324_n.jpg');
       break; 
      case 50:
       message.reply('https://www.watermod.com/wp-content/uploads/2017/07/381726.jpg');
       break; 
        case 51:
       message.reply('http://www.modding.fr/wp-content/uploads/2018/02/Project-Flow-5.jpg');
       break; 
       case 52:
       message.reply('');
       break; 
      case 53:
       message.reply('');
       break; 
          
      // Au cas  où rien (on sait jamais)
      default:
       message.reply('lol');
       break;
     }
	 
    
  	}
});
client.on('message', message => {
    if (message.content === '!URSS') {
     var nombre_de_phrases = 32; // le nombre de phrases que tu vas mettre (PS : on compte à partir de 1)
     switch (getRandomInt(nombre_de_phrases)) {
       // Toutes les phrases en fonction des cas (PS : on compte à partir de 0)
      case 0:
       message.reply('http://s1.1zoom.me/big0/603/269084-alexfas01.jpg');
       break;
      case 1:
	  message.reply('https://cdn.allwallpaper.in/wallpapers/1200x750/5120/ussr-artwork-1200x750-wallpaper.jpg');
       break;
	   case 2:
       message.reply('http://st.gde-fon.com/wallpapers_original/146933_sssr_kommunizm_soyuz_1680x1050_www.Gde-Fon.com.jpg');
       break;
      case 3:
       message.reply('http://st.gde-fon.com/wallpapers_original/246003_ussr_-sssr_-soldaty_-avtomat_-krasnyj_-serp__1900x1200_www.Gde-Fon.com.jpg');
       break;
      case 4:
       message.reply('https://png.pngtree.com/element_origin_min_pic/16/10/05/1557f4b191982e9.jpg');
       break;
      case 5:
       message.reply('https://marxismoleninismo.files.wordpress.com/2014/01/za-cccp-narod-ru_soyz_ssr.jpg');
       break;
      case 6:
       message.reply('http://i.playground.ru/i/25/83/61/00/blog/content/wkvnalrr.jpg');
       break;
      case 7:
       message.reply('https://archive-media-0.nyafuu.org/wg/image/1444/73/1444737146574.jpg');
       break;
      case 8:
       message.reply('https://images.alphacoders.com/245/245473.jpg');
       break;
      case 9:
       message.reply('https://cdn.allwallpaper.in/wallpapers/1920x1080/4080/lada-2101-russia-russians-ussr-cars-1920x1080-wallpaper.jpg');
       break;
      case 10:
       message.reply('http://tapety.joe.pl/tapeta/zrobione-przez-czlowieka/komunizm/ikony-historii.jpg');
       break;
      case 11:
       message.reply('https://bouteillealamer.files.wordpress.com/2010/12/cccp.png');
       break; 
      case 12:
       message.reply('https://i.ytimg.com/vi/THU-uhoFY2g/maxresdefault.jpg');
       break;   
      case 13:
       message.reply('https://images4.alphacoders.com/906/thumb-1920-90658.jpg');
       break; 
      case 14:
       message.reply('http://cdn.skstream.biz/images/sKuOrJoa7.th.jpg');
       break; 
	    case 25:
       message.reply('https://i.pinimg.com/originals/70/21/77/7021774f691f391d27d716e1cab2c29b.jpg');
       break;  
      case 26:
       message.reply('http://daler.ru/pictures/1/1920x1200/Simvolika-KGB-SSSR-11305.jpg');
       break;   
      case 27:
       message.reply('https://www.walldevil.com/wallpapers/w01/chernobyl-s.t.a.l.k.e.r.-ukraine-apocalypse-gas-masks-wallpaper.jpg');
       break; 
      case 28:
       message.reply('https://wallpapertag.com/wallpaper/full/5/5/6/676047-download-free-ak47-wallpaper-1920x1080-for-iphone-7.jpg');
       break; 
      case 29:
       message.reply('https://i.pinimg.com/originals/85/5a/d1/855ad134c7033a4416c7833cc973da8e.jpg');
       break; 
      case 30:
       message.reply('https://cdna.artstation.com/p/assets/images/images/001/286/180/large/andre-cantarel-mi-24-mdl-v337-view01.jpg?1443931914');
       break; 
      case 31:
       message.reply('http://wallsfield.com/wp-content/uploads/2016/06/t-90-700x329.jpg');
       break; 
       case 32:
       message.reply('http://infos-75.com/infos75/wp-content/uploads/2013/05/t34_1943_tank.jpg');
       break; 
	 
	  
	        
      // Au cas  où rien (on sait jamais)
      default:
       message.reply('lol');
       break;
     }
	 
    
  	}
	
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
