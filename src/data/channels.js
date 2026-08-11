export const categories = [
  { id: "all", label: "All" },
  { id: "bangla", label: "Bangla" },
  { id: "news", label: "News" },
  { id: "sports", label: "Sports" },
  { id: "music", label: "Music & Kids" },
  { id: "movies", label: "Movies" }
];

export const channels = [
  { id:"aakaash-aath", num:"01", name:"Aakaash Aath", category:"bangla", viewers:1240, live:true, mono:"AA", description:"Bangla entertainment", urls:["https://mumt03.tangotv.in/Dsly5z3HAAKASHAATH/index.m3u8"] },
  { id:"abp-ananda", num:"02", name:"ABP Ananda", category:"bangla", viewers:3180, live:true, mono:"AB", description:"Bangla news", urls:["https://d2l4ar6y3mrs4k.cloudfront.net/live-streaming/ananda-livetv/master.m3u8"] },
  { id:"independent-tv", num:"03", name:"Independent TV", category:"bangla", viewers:2760, live:true, mono:"IT", description:"Bangladesh news", urls:["https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/1704.m3u8"] },
  { id:"maasranga-tv", num:"04", name:"Maasranga TV", category:"bangla", viewers:1940, live:true, mono:"MT", description:"Bangla pack", urls:["https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8"] },
  { id:"news21-bangla", num:"05", name:"News 21 Bangla", category:"bangla", viewers:850, live:true, mono:"21", description:"Bangla news", urls:["http://103.190.133.68:1935/news21live/live/playlist.m3u8"] },
  { id:"news24-bd", num:"06", name:"News 24 BD", category:"bangla", viewers:4320, live:true, mono:"24", description:"Bangladesh news", urls:["https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/1708.m3u8"] },
  { id:"ntv-bangladesh", num:"07", name:"NTV Bangladesh", category:"bangla", viewers:3850, live:true, mono:"NT", description:"Bangla pack", urls:["https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/index.m3u8"] },
  { id:"star-news-bd", num:"08", name:"Star News BD", category:"bangla", viewers:720, live:true, mono:"SN", description:"Bangladesh news", urls:["https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/index.m3u8"] },
  { id:"rongeen-tv", num:"09", name:"Rongeen TV", category:"bangla", viewers:610, live:true, mono:"RT", description:"Bangla entertainment", urls:["https://server.thelegitpro.in/rongeentv/rongeentv/tracks-v1a1/mono.m3u8"] },

  { id:"4tv-news", num:"10", name:"4TV News", category:"news", viewers:940, live:true, mono:"4T", description:"News", urls:["https://cdn-4.pishow.tv/live/1007/master.m3u8"] },
  { id:"6-tv-telugu", num:"11", name:"6 TV Telugu", category:"news", viewers:810, live:true, mono:"6T", description:"News", urls:["https://cdn-1.pishow.tv/live/232/master.m3u8"] },
  { id:"10-tv", num:"12", name:"10 TV", category:"news", viewers:720, live:true, mono:"10", description:"News", urls:["https://cdn-1.pishow.tv/live/391/master.m3u8"] },
  { id:"22scope", num:"13", name:"22Scope News", category:"news", viewers:650, live:true, mono:"22", description:"News", urls:["https://thelegitpro.in/HDlive/22scope/index.fmp4.m3u8"] },
  { id:"24-news-global", num:"14", name:"24 News Global", category:"news", viewers:1030, live:true, mono:"24", description:"Global news", urls:["https://mumt07.tangotv.in/zHjX9OFlTWENTYFOURNEWS/index.m3u8"] },
  { id:"99tv", num:"15", name:"99TV", category:"news", viewers:550, live:true, mono:"99", description:"News", urls:["https://cdn-1.pishow.tv/live/1211/master.m3u8"] },
  { id:"iran-intl", num:"16", name:"Iran Intl (EN)", category:"news", viewers:1420, live:true, mono:"II", description:"Global news", urls:["https://dev-live.livetvstream.co.uk/LS-63503-4/chunklist_b1196000.m3u8"] },

  { id:"t-sport", num:"17", name:"T Sport (WORLD CUP)", category:"sports", viewers:5250, live:true, mono:"TS", description:"Sports feed with supplied backup routes", urls:["http://103.165.93.31:8095/tsports/tracks-v1a1a2/mono.m3u8","http://103.165.93.31:8095/tsports/tracks-v1a1/mono.m3u8"] },
  { id:"somoy-tv-wc", num:"18", name:"SOMOY TV (WC)", category:"sports", viewers:2600, live:true, mono:"SO", description:"Sports / news feed", urls:["http://114.130.57.233:8080/Somoy-TV-3Mb/tracks-v1a1/mono.m3u8?token=SkQuhAXZxgBan1"] },
  { id:"sky-sports-cricket", num:"19", name:"Sky Sports Cricket", category:"sports", viewers:3870, live:true, mono:"SS", description:"Sports", urls:["https://atc.hopto.org/sly-sprts-cricket-hd-sport/playlist.m3u8"] },
  { id:"30a-golf", num:"20", name:"30A Golf Kingdom", category:"sports", viewers:440, live:true, mono:"30", description:"Sports", urls:["https://30a-tv.com/feeds/vidaa/golf.m3u8"] },
  { id:"as3-sport", num:"21", name:"AS3 Sport TV", category:"sports", viewers:970, live:true, mono:"AS", description:"Sports zone", urls:["https://streamtv.as3sport.online:3394/hybrid/play.m3u8"] },
  { id:"mtrspt1", num:"22", name:"MTRSPT1 Racing", category:"sports", viewers:720, live:true, mono:"M1", description:"Racing", urls:["https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg02873-kravemedia-mtrspt1-distrotv/playlist.m3u8"] },

  { id:"7s-music", num:"23", name:"7S Music", category:"music", viewers:650, live:true, mono:"7S", description:"Music", urls:["https://mumt03.tangotv.in/Dsly5z3H7SMUSIC/index.m3u8"] },
  { id:"9x-jalwa", num:"24", name:"9X Jalwa", category:"music", viewers:810, live:true, mono:"9X", description:"Music", urls:["https://mumt03.tangotv.in/Dsly5z3H9XJALWA/index.m3u8"] },
  { id:"9x-jhakaas", num:"25", name:"9X Jhakaas", category:"music", viewers:720, live:true, mono:"9X", description:"Music", urls:["https://cdn-3.pishow.tv/live/6/master.m3u8"] },
  { id:"9x-tashan", num:"26", name:"9X Tashan", category:"music", viewers:590, live:true, mono:"9X", description:"Music", urls:["https://cdn-2.pishow.tv/live/1613/master.m3u8"] },
  { id:"9xm", num:"27", name:"9XM Music", category:"music", viewers:930, live:true, mono:"9M", description:"Music pack", urls:["https://epiconvh.akamaized.net/live/9XM/master.m3u8"] },
  { id:"motu-patlu", num:"28", name:"Motu Patlu", category:"music", viewers:1100, live:true, mono:"MP", description:"Kids only", urls:["https://live20.bozztv.com/giatvplayout7/giatv-209622/tracks-v1a1/mono.ts.m3u8"] },
  { id:"gopal-bhar", num:"29", name:"GOPAL BHAR", category:"music", viewers:880, live:true, mono:"GB", description:"Kids only", urls:["https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8"] },

  { id:"b4u-movies", num:"30", name:"B4U Movies", category:"movies", viewers:1550, live:true, mono:"B4", description:"Movies", urls:["https://cdn-2.pishow.tv/live/419/master.m3u8"] },
  { id:"food-food", num:"31", name:"FOOD FOOD", category:"movies", viewers:730, live:true, mono:"FF", description:"Lifestyle", urls:["http://103.175.73.12:8080/live/143/143_0.m3u8"] },
  { id:"channel1-4k", num:"32", name:"CHANNEL1 4K", category:"movies", viewers:1260, live:true, mono:"C1", description:"4K feed", urls:["https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8"] },
  { id:"live-quran-tv", num:"33", name:"Live Quran TV", category:"movies", viewers:920, live:true, mono:"LQ", description:"Islamic", urls:["https://live.kwikmotion.com/sharjahtvquranlive/shqurantv.smil/playlist.m3u8"] }
];

export const categoryLabel = (id) =>
  categories.find((category) => category.id === id)?.label || id;
