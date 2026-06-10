(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent=`
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600&display=swap");

#_akg_overlay {
    position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:2147483647;
    display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px);
}

#_akg_box {
    background: #0d0d1a;
    border-radius: 20px; padding: 28px 24px 20px; width: 320px; max-width: 94vw;
    text-align: center; font-family: "Rajdhani", sans-serif;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border: 2px solid transparent;
    background-image: linear-gradient(#0d0d1a, #0d0d1a), radial-gradient(circle at top left, #ff0000, #00ff00, #0000ff, #ff0000);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    animation: rgb-border 4s linear infinite;
}

@keyframes rgb-border {
    0% { background-image: linear-gradient(#0d0d1a, #0d0d1a), radial-gradient(circle at top left, #ff0000, #00ff00, #0000ff); }
    33% { background-image: linear-gradient(#0d0d1a, #0d0d1a), radial-gradient(circle at top left, #00ff00, #0000ff, #ff0000); }
    66% { background-image: linear-gradient(#0d0d1a, #0d0d1a), radial-gradient(circle at top left, #0000ff, #ff0000, #00ff00); }
    100% { background-image: linear-gradient(#0d0d1a, #0d0d1a), radial-gradient(circle at top left, #ff0000, #00ff00, #0000ff); }
}

#_akg_title {
    font-family: "Orbitron", sans-serif; font-size: 15px; font-weight: 900;
    letter-spacing: 3px; text-transform: uppercase; margin-bottom: 2px;
    animation: rgb-text 4s linear infinite;
}

@keyframes rgb-text {
    0% { color: #ff0000; text-shadow: 0 0 10px #ff0000; }
    33% { color: #00ff00; text-shadow: 0 0 10px #00ff00; }
    66% { color: #0000ff; text-shadow: 0 0 10px #0000ff; }
    100% { color: #ff0000; text-shadow: 0 0 10px #ff0000; }
}

#_akg_sub { font-size: 12px; color: #888; letter-spacing: 1px; margin-bottom: 20px; font-weight: bold; }
#_akg_inp_wrap { position: relative; margin-bottom: 14px; }

#_akg_inp {
    width: 100%; background: #050510; border: 1.5px solid #6c47ff55;
    border-radius: 10px; padding: 12px 16px; color: #fff; font-size: 16px;
    font-family: "Orbitron", sans-serif; letter-spacing: 4px; text-align: center;
    outline: none; box-sizing: border-box; transition: border .3s;
}

#_akg_btn {
    width: 100%; background: linear-gradient(135deg, #6c47ff, #a855f7);
    border: none; border-radius: 10px; padding: 13px; color: #fff;
    font-family: "Orbitron", sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 2px; cursor: pointer; transition: 0.3s; margin-bottom: 16px;
    box-shadow: 0 0 15px rgba(108, 71, 255, 0.4);
}

#_akg_tg {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    color: #fff; font-size: 11px; text-decoration: none; letter-spacing: 1px;
    transition: color .2s; margin-top: 4px; padding: 5px; background: rgba(24, 119, 242, 0.1); border-radius: 8px;
}

#_akg_close { position: absolute; top: 14px; right: 16px; color: #555; font-size: 18px; cursor: pointer; }
`;
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_akg_overlay';

var fbProfile = "https://www.facebook.com/shuvo8949";

ov.innerHTML='<div id="_akg_box" style="position:relative;"><span id="_akg_close">\u2715<\/span><div id="_akg_title">\u2694 DEVELOPER SAJIB \u2694 <\/div><div id="_akg_sub"> AINCRAD KEY GENERATOR<\/div><div id="_akg_inp_wrap"><input id="_akg_inp" type="password" placeholder="PASSWORD" maxlength="20"\/><\/div><div id="_akg_err" style="color:#f87171; font-size:12px; margin-bottom:10px; min-height:16px;"><\/div><button id="_akg_btn">UNLOCK & GENERATE<\/button><div id="_akg_circle_wrap" style="display:none; flex-direction:column; align-items:center; margin-bottom:16px;"><svg width="140" height="140" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="#0d0d1a" stroke="#1a1a3a" stroke-width="8"\/><circle id="_akg_arc" cx="70" cy="70" r="60" fill="none" stroke="#6c47ff" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"\/><text id="_akg_num" x="70" y="78" text-anchor="middle" fill="#fff" font-size="42" font-weight="bold" font-family="Orbitron,sans-serif">40<\/text><\/svg><div id="_akg_status" style="font-size:12px; color:#00f2fe; letter-spacing:1px; margin-top:12px; font-weight:bold;">\u23f3 Waiting...<\/div><\/div><a id="_akg_tg" href="'+fbProfile+'" target="_blank"><svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"\/><\/svg> Contact on Facebook<\/a><\/div>';
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
  },1000);
}

function bypassSite(domain,cb){
  // Chrome এর জন্য প্রোটোকল বাধ্যতামূলকভাবে 'https' করা হয়েছে
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
