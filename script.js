(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent='@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600&display=swap");#_akg_overlay{position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:2147483647;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);}#_akg_box{background:linear-gradient(135deg,#0d0d1a,#111128);border:1px solid #6c47ff44;border-radius:20px;padding:28px 24px 20px;width:320px;max-width:94vw;box-shadow:0 0 60px #6c47ff22,0 0 0 1px #6c47ff22;text-align:center;font-family:"Rajdhani",sans-serif;}#_akg_title{font-family:"Orbitron",sans-serif;font-size:13px;font-weight:900;letter-spacing:3px;color:#6c47ff;text-transform:uppercase;margin-bottom:2px;}#_akg_sub{font-size:12px;color:#555;letter-spacing:1px;margin-bottom:20px;}#_akg_inp_wrap{position:relative;margin-bottom:14px;}#_akg_inp{width:100%;background:#0a0a18;border:1.5px solid #6c47ff55;border-radius:10px;padding:12px 16px;color:#fff;font-size:16px;font-family:"Orbitron",sans-serif;letter-spacing:4px;text-align:center;outline:none;box-sizing:border-box;transition:border .3s;}#_akg_inp:focus{border-color:#6c47ff;}#_akg_inp::placeholder{color:#333;letter-spacing:2px;font-size:13px;}#_akg_btn{width:100%;background:linear-gradient(135deg,#6c47ff,#a855f7);border:none;border-radius:10px;padding:13px;color:#fff;font-family:"Orbitron",sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;cursor:pointer;transition:opacity .2s;margin-bottom:16px;}#_akg_btn:hover{opacity:.85;}#_akg_btn:disabled{opacity:.4;cursor:not-allowed;}#_akg_err{color:#f87171;font-size:12px;margin-bottom:10px;min-height:16px;letter-spacing:1px;}#_akg_circle_wrap{display:none;flex-direction:column;align-items:center;margin-bottom:16px;}#_akg_status{font-size:12px;color:#888;letter-spacing:1px;margin-top:12px;}#_akg_tg{display:flex;align-items:center;justify-content:center;gap:6px;color:#555;font-size:11px;text-decoration:none;letter-spacing:1px;transition:color .2s;margin-top:4px;}#_akg_tg:hover{color:#6c47ff;}#_akg_close{position:absolute;top:14px;right:16px;color:#333;font-size:18px;cursor:pointer;line-height:1;}#_akg_close:hover{color:#888;}';
document.head.appendChild(style);
var ov=document.createElement('div');
ov.id='_akg_overlay';
ov.innerHTML='<div id="_akg_box" style="position:relative;"><span id="_akg_close">\u2715<\/span><div id="_akg_title">SAJIB MODS<\/div><div id="_akg_sub">POWERED BY SAJIB MODS<\/div><div id="_akg_inp_wrap"><input id="_akg_inp" type="password" placeholder="ENTER ACCESS KEY" maxlength="20"\/><\/div><div id="_akg_err"><\/div><button id="_akg_btn">START BYPASS<\/button><div id="_akg_circle_wrap"><svg width="140" height="140" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="#0d0d1a" stroke="#1a1a3a" stroke-width="8"\/><circle id="_akg_arc" cx="70" cy="70" r="60" fill="none" stroke="#6c47ff" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"\/><text id="_akg_num" x="70" y="78" text-anchor="middle" fill="#fff" font-size="42" font-weight="bold" font-family="Orbitron,sans-serif">20<\/text><\/svg><div id="_akg_status">Waiting...<\/div><\/div><a id="_akg_tg" href="https:\/\/t.me\/SAJIBMODER" target="_blank">t.me\/SAJIBMODER<\/a><\/div>';
document.body.appendChild(ov);

var inp=document.getElementById('_akg_inp'), btn=document.getElementById('_akg_btn'), err=document.getElementById('_akg_err'), circleWrap=document.getElementById('_akg_circle_wrap'), arc=document.getElementById('_akg_arc'), numEl=document.getElementById('_akg_num'), statusEl=document.getElementById('_akg_status');

document.getElementById('_akg_close').onclick=function(){ov.remove();};

function startCountdown(onDone){
  circleWrap.style.display='flex'; btn.style.display='none'; inp.style.display='none'; document.getElementById('_akg_inp_wrap').style.display='none';
  var s=20; // টাইমার ২০ সেকেন্ড করা হয়েছে
  var total=377;
  numEl.textContent=s;
  var iv=setInterval(function(){
    s--; numEl.textContent=s;
    arc.setAttribute('stroke-dashoffset',(total/20)*(20-s)); // এনিমেশন ২০ সেকেন্ড অনুযায়ী
    if(s<=0){ clearInterval(iv); onDone(); }
  },1000);
}

function bypassSite(domain, cb){
  statusEl.textContent = 'Bypassing...';
  fetch('http://'+domain+'/api/session-info',{credentials:'include'})
  .then(r=>r.json()).then(d=>{
    if(!d.sessionToken){ statusEl.textContent='Session not found!'; return; }
    let progress = d.totalStage + 1;
    let input = encodeURIComponent(JSON.stringify({"0":{"json":{"token":d.sessionToken,"progress":progress,"stageId":d.stageId}}}));
    fetch('http://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+input,{credentials:'include'})
    .then(r=>r.text()).then(t=>{
      let dest=null;
      t.trim().split('\n').forEach(l=>{
        try { 
          let j=JSON.parse(l); 
          if(j.json[2][0][0].destinationLink) dest=j.json[2][0][0].destinationLink;
          else if(j.json[2][0][0].url) dest=j.json[2][0][0].url;
        } catch(e){}
      });
      cb(dest);
    });
  }).catch(e=> { statusEl.textContent='Error! Try again.'; });
}

btn.onclick=function(){
  if(inp.value.trim().toUpperCase()!=='@SAJIBMODER'){ err.textContent='Wrong Key!'; return; }
  startCountdown(function(){
    if(h.includes('tarviral.com') || h.includes('rodaemotor.com')){
      let domain = h.includes('tarviral.com') ? 'tarviral.com' : 'rodaemotor.com';
      bypassSite(domain, function(next){
        if(next){ 
          statusEl.textContent='Success! Redirecting...';
          window.location.href=next; 
        } else { statusEl.textContent='Run Again For Next Stage.'; }
      });
    } else if(h.includes('aincradmods.com') || h.includes('alpharede.com')){
        window.location.href='https://alpharede.com/aincrad2';
    } else { err.textContent='Open the link first!'; }
  });
};
})();
