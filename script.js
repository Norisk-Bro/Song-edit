(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent=`
@import url("https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Montserrat:wght@300;500;700;900&display=swap");

#_akg_overlay {
    position:fixed; inset:0; background:rgba(2, 3, 10, 0.92); z-index:2147483647;
    display:flex; align-items:center; justify-content:center; backdrop-filter:blur(25px);
}

#_akg_box {
    background: #050508;
    border-radius: 30px; padding: 45px 35px 30px; width: 370px; max-width: 92vw;
    text-align: center; font-family: "Montserrat", sans-serif;
    position: relative; overflow: hidden;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 1);
}

/* Premium Elite RGB Border */
#_akg_box::before {
    content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
    background: conic-gradient(from 0deg, transparent 20%, #00f2fe, #4facfe, #00f2fe, transparent 80%);
    animation: elite-rotate 4s linear infinite; z-index: -1;
}

#_akg_box::after {
    content: ''; position: absolute; inset: 2px; background: #050508;
    border-radius: 28px; z-index: -1;
}

@keyframes elite-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#_akg_title {
    font-family: "Syncopate", sans-serif; font-size: 15px; font-weight: 700;
    letter-spacing: 4px; text-transform: uppercase; margin-bottom: 5px;
    color: #00f2fe; text-shadow: 0 0 15px rgba(0, 242, 254, 0.5);
}

#_akg_sub { 
    font-size: 9px; color: #555; letter-spacing: 4px; 
    margin-bottom: 35px; font-weight: 700; text-transform: uppercase;
}

#_akg_inp_wrap { position: relative; margin-bottom: 22px; }

#_akg_inp {
    width: 100%; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px; padding: 18px; color: #fff; font-size: 16px;
    font-family: "Syncopate", sans-serif; letter-spacing: 6px; text-align: center;
    outline: none; box-sizing: border-box; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

#_akg_inp:focus {
    background: rgba(255, 255, 255, 0.05);
    border-color: #00f2fe;
    box-shadow: 0 0 25px rgba(0, 242, 254, 0.15);
}

#_akg_btn {
    width: 100%; background: linear-gradient(135deg, #00f2fe, #4facfe);
    border: none; border-radius: 16px; padding: 18px; color: #000;
    font-family: "Montserrat", sans-serif; font-size: 13px; font-weight: 900;
    letter-spacing: 2px; cursor: pointer; transition: 0.5s; 
    margin-bottom: 25px; text-transform: uppercase;
    box-shadow: 0 15px 35px rgba(0, 242, 254, 0.3);
}

#_akg_btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 45px rgba(0, 242, 254, 0.5);
    filter: brightness(1.1);
}

#_akg_tg {
    display: flex; align-items: center; justify-content: center; gap: 12px;
    color: #777; font-size: 11px; text-decoration: none; letter-spacing: 1px;
    transition: 0.4s; margin-top: 5px; padding: 15px; 
    background: rgba(255, 255, 255, 0.03); border-radius: 16px;
    font-weight: 600;
}

#_akg_tg:hover { color: #fff; background: rgba(24, 119, 242, 0.2); }

#_akg_close { 
    position: absolute; top: 22px; right: 25px; color: #333; 
    font-size: 22px; cursor: pointer; transition: 0.3s; 
}
#_akg_close:hover { color: #ff4757; transform: rotate(90deg); }
`;
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_akg_overlay';

var fbProfile = "https://www.facebook.com/shuvo8949";

// এখানে টাইটেল ফিক্স করা হয়েছে: DEVELOPER SAJIB
ov.innerHTML='<div id="_akg_box" style="position:relative;"><span id="_akg_close">\u2715<\/span><div id="_akg_title">\u2694 DEVELOPER SAJIB \u2694 <\/div><div id="_akg_sub"> AINCRAD KEY GENERATOR<\/div><div id="_akg_inp_wrap"><input id="_akg_inp" type="password" placeholder="PASSWORD" maxlength="20"\/><\/div><div id="_akg_err" style="color:#ff4757; font-size:11px; margin-bottom:15px; min-height:16px; font-weight:800; text-transform:uppercase;"><\/div><button id="_akg_btn">UNLOCK & GENERATE<\/button><div id="_akg_circle_wrap" style="display:none; flex-direction:column; align-items:center; margin-bottom:16px;"><svg width="140" height="140" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="transparent" stroke="#111" stroke-width="6"\/><circle id="_akg_arc" cx="70" cy="70" r="60" fill="none" stroke="#00f2fe" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"\/><text id="_akg_num" x="70" y="78" text-anchor="middle" fill="#fff" font-size="42" font-weight="900" font-family="Syncopate,sans-serif">40<\/text><\/svg><div id="_akg_status" style="font-size:11px; color:#00f2fe; letter-spacing:2px; margin-top:15px; font-weight:bold; font-family:Syncopate,sans-serif; text-transform:uppercase;">\u23f3 Waiting...<\/div><\/div><a id="_akg_tg" href="'+fbProfile+'" target="_blank"><svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"\/><\/svg> Contact on Facebook<\/a><\/div>';
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
