(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent=`
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap");

#_akg_overlay {
    position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:2147483647;
    display:flex; align-items:center; justify-content:center; backdrop-filter:blur(12px);
}

#_akg_box {
    background: linear-gradient(145deg, #0f0f1e, #1a1a2e);
    border: 2px solid rgba(108, 71, 255, 0.3);
    border-radius: 24px; padding: 35px 25px; width: 340px; max-width: 90vw;
    box-shadow: 0 0 50px rgba(108, 71, 255, 0.2), inset 0 0 20px rgba(108, 71, 255, 0.1);
    text-align: center; font-family: "Rajdhani", sans-serif;
    position: relative; overflow: hidden;
    animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#_akg_box::before {
    content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
    background: conic-gradient(transparent, transparent, transparent, #6c47ff);
    animation: rotate 4s linear infinite; z-index: -1;
}

#_akg_inner { background: #0f0f1e; border-radius: 22px; padding: 25px 15px; }

#_akg_title {
    font-family: "Orbitron", sans-serif; font-size: 18px; font-weight: 900;
    background: linear-gradient(90deg, #fff, #6c47ff, #fff);
    background-size: 200% auto; -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; animation: shine 3s linear infinite;
    letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px;
}

#_akg_sub { font-size: 11px; color: #888; letter-spacing: 2px; margin-bottom: 25px; text-transform: uppercase; font-weight: 600; }

#_akg_inp {
    width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(108, 71, 255, 0.4);
    border-radius: 12px; padding: 14px; color: #fff; font-size: 15px;
    font-family: "Orbitron", sans-serif; text-align: center; outline: none;
    transition: 0.3s; box-sizing: border-box;
}

#_akg_btn {
    width: 100%; background: linear-gradient(135deg, #6c47ff, #b147ff);
    border: none; border-radius: 12px; padding: 15px; color: #fff;
    font-family: "Orbitron", sans-serif; font-size: 13px; font-weight: 700;
    letter-spacing: 1px; cursor: pointer; margin-top: 20px;
    box-shadow: 0 5px 15px rgba(108, 71, 255, 0.4);
}

#_akg_circle_wrap { display: none; flex-direction: column; align-items: center; margin-top: 20px; }

#_akg_status { font-size: 12px; color: #bbb; margin-top: 15px; letter-spacing: 1px; }

#_akg_fb {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    color: #aaa; font-size: 12px; text-decoration: none; margin-top: 25px;
}

#_akg_fb:hover { color: #1877F2; }

#_akg_close { position: absolute; top: 15px; right: 15px; color: #555; cursor: pointer; font-size: 20px; }

@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes shine { to { background-position: 200% center; } }
@keyframes slideUp { from { transform: scale(0.8) translateY(30px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
`;
document.head.appendChild(style);

var ov=document.createElement('div');
ov.id='_akg_overlay';

var fbProfile = "https://www.facebook.com/shuvo8949";

ov.innerHTML=`
    <div id="_akg_box">
        <div id="_akg_inner">
            <span id="_akg_close">✕</span>
            <div id="_akg_title">SAJIB MODS</div>
            <div id="_akg_sub">Premium Bypass System</div>
            
            <div id="_akg_main_ui">
                <input id="_akg_inp" type="password" placeholder="ENTER ACCESS KEY">
                <div id="_akg_err" style="color:#ff4747; font-size:11px; margin-top:10px; height:15px;"></div>
                <button id="_akg_btn">UNLOCK SYSTEM</button>
            </div>

            <div id="_akg_circle_wrap">
                <svg width="120" height="120" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8"/>
                    <circle id="_akg_arc" cx="70" cy="70" r="60" fill="none" stroke="#6c47ff" stroke-width="8" 
                        stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"/>
                    <text id="_akg_num" x="70" y="82" text-anchor="middle" fill="#fff" font-size="40" font-weight="900" font-family="Orbitron">40</text>
                </svg>
                <div id="_akg_status">Verifying Session...</div>
            </div>

            <a id="_akg_fb" href="${fbProfile}" target="_blank">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Contact Owner
            </a>
        </div>
    </div>
`;
document.body.appendChild(ov);

var inp=document.getElementById('_akg_inp'), btn=document.getElementById('_akg_btn'), err=document.getElementById('_akg_err'), circleWrap=document.getElementById('_akg_circle_wrap'), arc=document.getElementById('_akg_arc'), numEl=document.getElementById('_akg_num'), statusEl=document.getElementById('_akg_status'), mainUi=document.getElementById('_akg_main_ui');

document.getElementById('_akg_close').onclick=function(){ov.remove();};

function startCountdown(onDone){
    mainUi.style.display='none';
    circleWrap.style.display='flex';
    var s=40; var total=377;
    numEl.textContent=s;
    var iv=setInterval(function(){
        s--; numEl.textContent=s;
        arc.setAttribute('stroke-dashoffset',(total/40)*(40-s));
        if(s<=0){ clearInterval(iv); onDone(); }
    },1000);
}

// এই লজিকটি আপনার অরিজিনাল কোড থেকে নেওয়া হয়েছে যা কাজ করতো
function bypassSite(domain,cb){
    var proto='https';
    fetch(proto+'://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
    .then(function(r){return r.json();})
    .then(function(d){
        if(!d.sessionToken){statusEl.textContent='No session found!';return;}
        statusEl.textContent='Fetching key...';
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
    if(val!=='SAJIBX'){err.textContent='Wrong key! Access denied.'; return;}
    
    if(h.includes('tarviral.com')||h.includes('rodaemotor.com')){
        startCountdown(function(){
            bypassSite(h.includes('tarviral.com')?'tarviral.com':'rodaemotor.com',function(dest,url){
                var next=dest||url;
                if(next){
                    statusEl.textContent='Redirecting...';
                    setTimeout(function(){ov.remove();window.location.href=next;},800);
                }else{statusEl.textContent='Stage Failed! Run again.';}
            });
        });
    } else if(h.includes('aincradmods.com')||h.includes('alpharede.com')){
        window.location.href='https://alpharede.com/aincrad2';
    } else { err.textContent='Open correct site first!'; }
};
})();
