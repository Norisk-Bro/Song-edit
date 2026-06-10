(function() {
    'use strict';

    // ১. CSS (ভিডিওর মতো ডিজাইন)
    const style = document.createElement('style');
    style.innerHTML = `
        #zxi-container {
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 320px; background: #0a0a0a; border: 2px solid #00ffcc;
            border-radius: 15px; padding: 20px; z-index: 100000;
            color: #fff; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            box-shadow: 0 0 20px #00ffcc; text-align: center;
        }
        .zxi-title { color: #00ffcc; font-size: 22px; font-weight: bold; margin-bottom: 5px; }
        .zxi-subtitle { color: #888; font-size: 12px; margin-bottom: 20px; }
        .zxi-input {
            width: 90%; padding: 10px; background: #111; border: 1px solid #00ffcc;
            color: #fff; border-radius: 5px; margin-bottom: 15px; text-align: center;
        }
        .zxi-btn {
            width: 100%; padding: 12px; background: transparent; border: 1px solid #00ffcc;
            color: #00ffcc; cursor: pointer; border-radius: 5px; font-weight: bold;
            transition: 0.3s; margin-bottom: 10px;
        }
        .zxi-btn:hover { background: #00ffcc; color: #000; }
        .zxi-status { font-size: 12px; color: #ffcc00; margin-top: 10px; }
        .zxi-hidden { display: none; }
    `;
    document.head.appendChild(style);

    // ২. HTML কাঠামো
    const container = document.createElement('div');
    container.id = 'zxi-container';
    container.innerHTML = `
        <div id="login-screen">
            <div class="zxi-title">SAJIB SYSTEM AUTH</div>
            <div class="zxi-subtitle">ENTER LICENSE KEY</div>
            <input type="text" id="key-input" class="zxi-input" placeholder="ENTER KEY HERE">
            <button id="verify-btn" class="zxi-btn">VERIFY & RUN</button>
            <button id="tg-btn" class="zxi-btn">TELEGRAM</button>
            <div id="status" class="zxi-status">READY</div>
        </div>
        
        <div id="engine-screen" class="zxi-hidden">
            <div class="zxi-title">SELECT ENGINE</div>
            <button class="zxi-btn engine-opt">AINCRAD</button>
            <button class="zxi-btn engine-opt">POWER CHEATS</button>
            <button class="zxi-btn engine-opt">HUNTER +</button>
        </div>

        <div id="bypass-screen" class="zxi-hidden">
            <div class="zxi-title">BYPASSING...</div>
            <div id="timer" style="font-size: 40px; color: #00ffcc; margin: 20px 0;">30</div>
            <div class="zxi-status">REDIREECTING...</div>
        </div>
    `;
    document.body.appendChild(container);

    // ৩. লজিক (Logic)
    const verifyBtn = document.getElementById('verify-btn');
    const status = document.getElementById('status');
    const loginScreen = document.getElementById('login-screen');
    const engineScreen = document.getElementById('engine-screen');
    const bypassScreen = document.getElementById('bypass-screen');

    // ভেরিফাই বাটন কাজ
    verifyBtn.onclick = function() {
        const key = document.getElementById('key-input').value;
        if (key.toUpperCase() === "SAJIBX") { // আপনার গোপন পাসওয়ার্ড
            status.style.color = "#00ffcc";
            status.innerText = "KEY VALIDATED! ✔";
            setTimeout(() => {
                loginScreen.classList.add('zxi-hidden');
                engineScreen.classList.remove('zxi-hidden');
            }, 1000);
        } else {
            status.style.color = "#ff4444";
            status.innerText = "INVALID KEY! ❌";
        }
    };

    // ইঞ্জিন সিলেক্ট করলে টাইমার শুরু হবে
    document.querySelectorAll('.engine-opt').forEach(btn => {
        btn.onclick = function() {
            engineScreen.classList.add('zxi-hidden');
            bypassScreen.classList.remove('zxi-hidden');
            startBypass();
        };
    });

    // বাইপাস টাইমার লজিক
    function startBypass() {
        let timeLeft = 30;
        const timerDisplay = document.getElementById('timer');
        const interval = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(interval);
                alert("BYPASS SUCCESS! YOUR KEY: SAJIB-7788-XX");
                container.remove();
            }
        }, 100); // ১০০ মিলি-সেকেন্ড পর পর চলবে (ভিডিওর মতো ফাস্ট)
    }
})();
