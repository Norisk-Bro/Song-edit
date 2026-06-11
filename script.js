//SAJIB
(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;


var profilePhoto = "https://raw.githubusercontent.com/Norisk-Bro/Song-edit/refs/heads/main/FB_IMG_1779525249205.jpg";

var style=document.createElement('style');
style.textContent=`
@import url("https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700;800&family=Inter:wght@400;600;800&display=swap");

#_akg_overlay {
    position:fixed; inset:0; background:rgba(2, 2, 5, 0.9); z-index:2147483647;
    display:flex; align-items:center; justify-content:center; backdrop-filter:blur(20px);
}

#_akg_box {
    background: #0a0a14;
    border-radius: 28px; padding: 45px 35px 35px; width: 360px; max-width: 90vw;
    text-align: center; font-family: "Inter", sans-serif;
    position: relative; overflow: hidden;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), inset 0 0 1px rgba(255,255,255,0.1);
}

/* Professional RGB Border Animation */
#_akg_box::before {
    content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
    background: conic-gradient(from 0deg, transparent 0%, #ff00ea 25%, #00d2ff 50%, #00ff88 75%, transparent 100%);
    animation: rotate-rgb 5s linear infinite; z-index: -1;
}

#_akg_box::after {
    content: ''; position: absolute; inset: 2px; background: #0a0a14;
    border-radius: 26px; z-index: -1;
}

@keyframes rotate-rgb {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#_akg_title {
    font-family: "Oxanium", sans-serif; font-size: 16px; font-weight: 800;
    letter-spacing: 3px; text-transform: uppercase; margin-bottom: 4px;
    background: linear-gradient(135deg, #00d2ff, #00ff88);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 8px rgba(0, 210, 255, 0.4));
}

#_akg_sub { 
    font-size: 10px; color: #555; letter-spacing: 3px; 
    margin-bottom: 30px; font-weight: 700; text-transform: uppercase;
}

#_akg_inp_wrap { position: relative; margin-bottom: 22px; }

#_akg_inp {
    width: 100%; background: #05050a; border: 1px solid rgba(255,255,255,0.05);
    border-radius: 14px; padding: 18px; color: #fff; font-size: 16px;
    font-family: "Oxanium", sans-serif; letter-spacing: 6px; text-align: center;
    outline: none; box-sizing: border-box; transition: all 0.4s ease;
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
}

#_akg_inp:focus {
    border-color: #00d2ff;
    box-shadow: 0 0 20px rgba(0, 210, 255, 0.15), inset 0 2px 10px rgba(0,0,0,0.5);
}

#_akg_btn {
    width: 100%; background: linear-gradient(135deg, #00d2ff, #0088ff);
    border: none; border-radius: 14px; padding: 18px; color: #fff;
    font-family: "Inter", sans-serif; font-size: 13px; font-weight: 800;
    letter-spacing: 1px; cursor: pointer; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    margin-bottom: 22px; text-transform: uppercase;
    box-shadow: 0 10px 25px rgba(0, 136, 255, 0.3);
}

#_akg_btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 136, 255, 0.5);
    filter: brightness(1.1);
}

#_akg_btn:active { transform: translateY(0); }

#_akg_tg {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    color: #888; font-size: 11px; text-decoration: none; letter-spacing: 1px;
    transition: 0.3s; margin-top: 5px; padding: 14px; 
    background: rgba(255, 255, 255, 0.03); border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.02);
}

#_akg_tg:hover { color: #fff; background: rgba(24, 119, 242, 0.15); border-color: rgba(24, 119, 242, 0.3); }

#_akg_close { 
    position: absolute; top: 20px; right: 22px; color: #333; 
    font-size: 22px; cursor: pointer; transition: 0.3s; 
}
#_akg_close:hover { color: #ff3e3e; transform: scale(1.1); }

/* Photo Styling inside timer */
._akg_timer_img {
    object-fit: cover;
    filter: brightness(0.4) contrast(1.1);
}

/* Time Count hidden professionally */
#_akg_num { 
    display: none;
    text-shadow: 0 0 20px rgba(255,255,255,0.4); 
    animation: akg-text-pulse 1s infinite alternate ease-in-out; 
}
`;
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_akg_overlay';

var fbProfile = "https://www.facebook.com/shuvo8949";

ov.innerHTML='<div id="_akg_box" style="position:relative;"><span id="_akg_close">\u2715<\/span><div id="_akg_title">\u2694 DEVELOPER SAJIB \u2694 <\/div><div id="_akg_sub"> AINCRAD KEY GENERATOR<\/div><div id="_akg_inp_wrap"><input id="_akg_inp" type="password" placeholder="PASSWORD" maxlength="20"\/><\/div><div id="_akg_err" style="color:#ff3e3e; font-size:11px; margin-bottom:14px; min-height:16px; font-weight:700; font-family:Inter, sans-serif;"><\/div><button id="_akg_btn">UNLOCK & GENERATE<\/button><div id="_akg_circle_wrap" style="display:none; flex-direction:column; align-items:center; margin-bottom:16px;"><svg width="140" height="140" viewBox="0 0 140 140"><defs><clipPath id="circleClip"><circle cx="70" cy="70" r="54" \/><\/clipPath><\/defs><circle cx="70" cy="70" r="60" fill="transparent" stroke="#111122" stroke-width="6"\/><image class="_akg_timer_img" href="'+profilePhoto+'" x="16" y="16" width="108" height="108" clip-path="url(#circleClip)" \/><circle id="_akg_arc" cx="70" cy="70" r="60" fill="none" stroke="#00d2ff" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"\/><text id="_akg_num" x="70" y="78" text-anchor="middle" fill="#fff" font-size="42" font-weight="bold" font-family="Oxanium,sans-serif">40<\/text><\/svg><div id="_akg_status" style="font-size:11px; color:#00d2ff; letter-spacing:2px; margin-top:12px; font-weight:bold; font-family:Oxanium,sans-serif; text-transform:uppercase;">\u23f3 Waiting...<\/div><\/div><a id="_akg_tg" href="'+fbProfile+'" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"\/><\/svg> Contact on Facebook<\/a><\/div>';
document.body.appendChild(ov);

var inp=document.getElementById('_akg_inp'), btn=document.getElementById('_akg_btn'), err=document.getElementById('_akg_err'), circleWrap=document.getElementById('_akg_circle_wrap'), arc=document.getElementById('_akg_arc'), numEl=document.getElementById('_akg_num'), statusEl=document.getElementById('_akg_status');

document.getElementById('_akg_close').onclick=function(){ov.remove();};

function showCircle(status){
  circleWrap.style.display='flex'; btn.style.display='none'; inp.style.display='none'; document.getElementById('_akg_inp_wrap').style.display='none'; err.style.display='none';
  statusEl.textContent=status||'\u23f3 Processing...';
}

function startCountdown(onDone){
  showCircle('\u23f3 Please wait...');
  var s=40; var total=377;
  numEl.textContent=s;
  var iv=setInterval(function(){
    s--; numEl.textContent=s;
    arc.setAttribute('stroke-dashoffset',(total/40)*(40-s));
    if(s<=0){ clearInterval(iv); onDone(); }
  },420);
}

function bypassSite(domain,cb){
  var proto='https';
  fetch(proto+'://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
  .then(function(r){return r.json();})
  .then(function(d){
    if(!d.sessionToken){statusEl.textContent='\u274c No session found!';return;}
    statusEl.textContent='\ud83d\udd11 Fetching key...';
    var progress=d.totalStage+1;
    var inp2=encodeURIComponent(JSON.stringify({"0":{"json":{"token":d.sessionToken,"progress":progress,"stageId":d.stageId}}}));
    fetch(proto+'://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+inp2,{
      credentials:'include',
      headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
    }).then(function(r){return r.text();})
    .then(function(t){
      var dest=null,url=null;
      t.trim().split('\n').forEach(function(l){
        try{
          var j=JSON.parse(l);
          if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
            var dd=j.json[2][0][0];
            if(dd){if(dd.destinationLink)dest=dd.destinationLink;if(dd.url)url=dd.url;}
          }
        }catch(e){}
      });
      cb(dest,url);
    });
  })
  .catch(function(e){statusEl.textContent='Error: '+e.message;});
}

btn.onclick=function(){
  var val=inp.value.trim().toUpperCase();
  if(val!=='SAJIBX'){err.textContent='\u274c Wrong key!'; return;}
  if(h.includes('tarviral.com')||h.includes('rodaemotor.com')){
    startCountdown(function(){
      bypassSite(h.includes('tarviral.com')?'tarviral.com':'rodaemotor.com',function(dest,url){
        var next=dest||url;
        if(next){ window.location.href=next; }
        else { statusEl.textContent='\u274c Failed! Run again.'; }
      });
    });
  } else if(h.includes('aincradmods.com')||h.includes('alpharede.com')){
    window.location.href='https://alpharede.com/aincrad2';
  } else { err.textContent='\u26a0 Open the correct site!'; }
};
})();
