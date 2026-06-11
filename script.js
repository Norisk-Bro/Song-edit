(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent=`
@import url("https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700;800&family=Inter:wght@400;600;800&display=swap");

#_akg_overlay {
    position:fixed; inset:0; background:rgba(2, 2, 8, 0.96); z-index:2147483647;
    display:flex; align-items:center; justify-content:center; backdrop-filter:blur(30px);
}

#_akg_box {
    background: #05050a;
    border-radius: 32px; padding: 50px 35px 35px; width: 375px; max-width: 92vw;
    text-align: center; font-family: "Inter", sans-serif;
    position: relative; overflow: hidden;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 1), inset 0 0 1px rgba(255,255,255,0.1);
}

/* Elite Rotating RGB Border Animation */
#_akg_box::before {
    content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
    background: conic-gradient(from 0deg, transparent 20%, #00f2fe, #4facfe, #00f2fe, transparent 80%);
    animation: elite-rotate 4s linear infinite; z-index: -1;
}

#_akg_box::after {
    content: ''; position: absolute; inset: 2.5px; background: #05050a;
    border-radius: 30px; z-index: -1;
}

@keyframes elite-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Neon Scanning Effect */
#_akg_box::after {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px;
    background: linear-gradient(90deg, transparent, #00f2fe, transparent);
    animation: akg-scan 3s ease-in-out infinite; z-index: 1; opacity: 0.3;
}

@keyframes akg-scan {
    0% { top: 0%; }
    50% { top: 100%; }
    100% { top: 0%; }
}

#_akg_title {
    font-family: "Oxanium", sans-serif; font-size: 16px; font-weight: 800;
    letter-spacing: 3px; text-transform: uppercase; margin-bottom: 5px;
    background: linear-gradient(135deg, #00f2fe, #4facfe);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 10px rgba(0, 242, 254, 0.4));
}

#_akg_sub { 
    font-family: "Oxanium", sans-serif; font-size: 9px; color: #444; letter-spacing: 4px; 
    margin-bottom: 35px; font-weight: 800; text-transform: uppercase;
}

/* Premium Timer Styling */
#_akg_circle_wrap svg {
    filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.2));
}

#_akg_arc {
    stroke: url(#timer-gradient);
    filter: drop-shadow(0 0 8px #00f2fe);
    stroke-linecap: butt;
    transition: stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

#_akg_num {
    fill: #fff; font-size: 48px; font-weight: 900;
    font-family: "Oxanium", sans-serif;
    animation: akg-pulse-num 1s infinite alternate;
}

@keyframes akg-pulse-num {
    from { opacity: 0.8; filter: blur(0px); }
    to { opacity: 1; filter: drop-shadow(0 0 5px #fff); }
}

#_akg_status {
    font-size: 11px; color: #00f2fe; letter-spacing: 3px; font-weight: 800;
    text-transform: uppercase; font-family: "Oxanium", sans-serif;
    margin-top: 15px; opacity: 0.9;
}

#_akg_inp_wrap { position: relative; margin-bottom: 25px; }

#_akg_inp {
    width: 100%; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px; padding: 18px; color: #fff; font-size: 16px;
    font-family: "Oxanium", sans-serif; letter-spacing: 6px; text-align: center;
    outline: none; box-sizing: border-box; transition: 0.4s;
}

#_akg_btn {
    width: 100%; background: linear-gradient(135deg, #00f2fe, #4facfe);
    border: none; border-radius: 18px; padding: 18px; color: #000;
    font-family: "Inter", sans-serif; font-size: 13px; font-weight: 900;
    letter-spacing: 2px; cursor: pointer; transition: 0.5s; 
    margin-bottom: 25px; text-transform: uppercase;
    box-shadow: 0 15px 40px rgba(0, 242, 254, 0.4);
}

#_akg_btn:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0, 242, 254, 0.6); }

#_akg_tg {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    color: #666; font-size: 10px; text-decoration: none; letter-spacing: 1px;
    transition: 0.4s; margin-top: 5px; padding: 16px; 
    background: rgba(255, 255, 255, 0.03); border-radius: 16px;
    font-weight: 700; text-transform: uppercase;
}

#_akg_close { position: absolute; top: 22px; right: 28px; color: #333; font-size: 24px; cursor: pointer; z-index: 10; }
`;
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_akg_overlay';

var fbProfile = "https://www.facebook.com/shuvo8949";

ov.innerHTML='<div id="_akg_box"><span id="_akg_close">\u2715<\/span><div id="_akg_title">\u2694 DEVELOPER SAJIB \u2694 <\/div><div id="_akg_sub"> AINCRAD KEY GENERATOR<\/div><div id="_akg_inp_wrap"><input id="_akg_inp" type="password" placeholder="PASSWORD" maxlength="20"\/><\/div><div id="_akg_err" style="color:#ff3e3e; font-size:10px; margin-bottom:15px; min-height:16px; font-weight:900; text-transform:uppercase; font-family:Inter, sans-serif;"><\/div><button id="_akg_btn">UNLOCK & GENERATE<\/button><div id="_akg_circle_wrap" style="display:none; flex-direction:column; align-items:center; margin-bottom:16px;"><svg width="160" height="160" viewBox="0 0 160 160"><defs><linearGradient id="timer-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00f2fe;stop-opacity:1" \/><stop offset="100%" style="stop-color:#4facfe;stop-opacity:1" \/><\/linearGradient><\/defs><circle cx="80" cy="80" r="70" fill="transparent" stroke="rgba(255,255,255,0.03)" stroke-width="8" \/><circle id="_akg_arc" cx="80" cy="80" r="70" fill="none" stroke-width="10" stroke-dasharray="440" stroke-dashoffset="0" transform="rotate(-90 80 80)" \/><text id="_akg_num" x="80" y="95" text-anchor="middle">40<\/text><\/svg><div id="_akg_status">\u23f3 Waiting...<\/div><\/div><a id="_akg_tg" href="'+fbProfile+'" target="_blank"><svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"\/><\/svg> Contact on Facebook<\/a><\/div>';
document.body.appendChild(ov);

var inp=document.getElementById('_akg_inp'), btn=document.getElementById('_akg_btn'), err=document.getElementById('_akg_err'), circleWrap=document.getElementById('_akg_circle_wrap'), arc=document.getElementById('_akg_arc'), numEl=document.getElementById('_akg_num'), statusEl=document.getElementById('_akg_status');

document.getElementById('_akg_close').onclick=function(){ov.remove();};

function showCircle(status){
  circleWrap.style.display='flex'; btn.style.display='none'; inp.style.display='none'; document.getElementById('_akg_inp_wrap').style.display='none'; err.style.display='none';
  statusEl.textContent=status||'\u23f3 Processing...';
}

function startCountdown(onDone){
  showCircle('\u23f3 Please wait...');
  var s=40; var total=440;
  numEl.textContent=s;
  var iv=setInterval(function(){
    s--; numEl.textContent=s;
    arc.setAttribute('stroke-dashoffset',(total/40)*(40-s));
    if(s<=0){ clearInterval(iv); onDone(); }
  },333);
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
