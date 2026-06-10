(function() {
    'use strict';

    // ১. ভিডিওর মতো নিয়ন ডিজাইন (CSS)
    const style = document.createElement('style');
    style.innerHTML = `
        #sajib-ui {
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 330px; background: #050505; border: 2px solid #00f2ff;
            border-radius: 12px; padding: 25px; z-index: 1000000;
            color: #fff; font-family: sans-serif; box-shadow: 0 0 25px #00f2ff; text-align: center;
        }
        .title { color: #00f2ff; font-size: 20px; font-weight: bold; margin-bottom: 10px; text-shadow: 0 0 10px #00f2ff; }
        .key-box {
            background: #111; border: 1px dashed #00f2ff; padding: 15px;
            margin: 15px 0; color: #00f2ff; font-weight: bold; font-size: 16px; word-break: break-all;
        }
        .s-btn {
            width: 100%; padding: 12px; background: #00f2ff; color: #000;
            border: none; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 14px;
        }
        .status { font-size: 12px; color: #ffcc00; margin-top: 10px; }
        .hidden { display: none; }
    `;
    document.head.appendChild(style);

    // ২. UI কাঠামো তৈরি
    const container = document.createElement('div');
    container.id = 'sajib-ui';
    container.innerHTML = `
        <div class="title">SAJIB SYSTEM AUTH</div>
        <div id="wait-screen">
            <p style="color:#888">SIT BACK AND RELAX</p>
            <div id="timer" style="font-size: 40px; margin: 20px 0; color: #00f2ff;">--</div>
            <div class="status" id="st-msg">INITIALIZING BYPASS...</div>
        </div>
        <div id="result-screen" class="hidden">
            <p>YOUR ACCESS KEY GENERATED:</p>
            <div class="key-box" id="final-key">WAITING...</div>
            <button class="s-btn" id="copy-btn">COPY KEY & CLOSE</button>
        </div>
    `;
    document.body.appendChild(container);

    // ৩. বাইপাস এবং কি (Key) বের করার লজিক
    const timerText = document.getElementById('timer');
    const stMsg = document.getElementById('st-msg');
    const waitScreen = document.getElementById('wait-screen');
    const resultScreen = document.getElementById('result-screen');
    const finalKeyBox = document.getElementById('final-key');

    // টাইমার ফাস্ট করার চেষ্টা (Speedup Logic)
    const speedup = () => {
        window.setTimeout = (fn, delay) => originalSetTimeout(fn, 0);
        window.setInterval = (fn, delay) => originalSetInterval(fn, 100);
    };
    const originalSetTimeout = window.setTimeout;
    const originalSetInterval = window.setInterval;

    let searchInterval = setInterval(() => {
        // সাইটের ভেতরের টাইমার খোঁজা (যদি থাকে)
        let siteTimer = document.querySelector('.timer, #countdown, #timer-display');
        if (siteTimer) {
            timerText.innerText = siteTimer.innerText;
            stMsg.innerText = "BYPASSING TIME LOCK...";
        }

        // সাইটের ভেতরের আসল "Key" টি খোঁজা
        // সাধারণত এটি একটি নির্দিষ্ট ID বা Class এর ভেতরে থাকে (ভিডিও অনুযায়ী)
        let keyElement = document.querySelector('[id*="key"], [class*="key"], .access-key, #final-key-display');
        
        // যদি নির্দিষ্ট এলিমেন্ট না পায়, তবে টেক্সট প্যাটার্ন দিয়ে খুঁজবে
        if (!keyElement) {
            let allText = document.body.innerText;
            let match = allText.match(/[A-Z0-9]{5,}-[A-Z0-9]{5,}-[A-Z0-9]{5,}/); // কাস্টম কি প্যাটার্ন
            if (match) {
                showResult(match[0]);
            }
        } else if (keyElement.innerText.length > 5) {
            showResult(keyElement.innerText);
        }

        // অটোমেটিক "Continue" বাটনে ক্লিক করা (যদি আসে)
        document.querySelectorAll('button, a').forEach(btn => {
            if (btn.innerText.includes('Continue') || btn.innerText.includes('Next') || btn.innerText.includes('Get Link')) {
                btn.click();
            }
        });

    }, 500);

    function showResult(key) {
        clearInterval(searchInterval);
        waitScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        finalKeyBox.innerText = key;
        stMsg.innerText = "KEY FOUND! ✔";
    }

    // কপি বাটন
    document.getElementById('copy-btn').onclick = () => {
        navigator.clipboard.writeText(finalKeyBox.innerText);
        alert("Key Copied to Clipboard!");
        container.remove();
    };

})();
