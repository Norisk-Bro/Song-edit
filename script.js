(function() {
    'use strict';

    // ১. ভিডিওর মতো স্টাইলিশ UI (CSS)
    const style = document.createElement('style');
    style.innerHTML = `
        #sajib-auth-ui {
            position: fixed; top: 20%; left: 50%; transform: translateX(-50%);
            width: 320px; background: #000; border: 2px solid #00fff2;
            border-radius: 10px; padding: 15px; z-index: 9999999;
            color: #00fff2; font-family: monospace; text-align: center;
            box-shadow: 0 0 15px #00fff2;
        }
        .step-box { font-size: 18px; margin-bottom: 10px; font-weight: bold; }
        .progress-bar { width: 100%; background: #222; height: 10px; border-radius: 5px; overflow: hidden; }
        .progress-inner { width: 0%; height: 100%; background: #00fff2; transition: 0.5s; }
        .status-text { font-size: 12px; margin-top: 10px; color: #fff; }
        .hidden { display: none; }
    `;
    document.head.appendChild(style);

    // ২. UI স্ট্রাকচার
    const container = document.createElement('div');
    container.id = 'sajib-auth-ui';
    container.innerHTML = `
        <div class="step-box">SAJIB TOOLS BYPASS</div>
        <div id="step-count">Checking Page...</div>
        <div class="progress-bar"><div id="p-bar" class="progress-inner"></div></div>
        <div id="status" class="status-text">INITIALIZING ENGINE...</div>
    `;
    document.body.appendChild(container);

    const stepText = document.getElementById('step-count');
    const pBar = document.getElementById('p-bar');
    const status = document.getElementById('status');

    // ৩. অটোমেশন ইঞ্জিন (ইন্টারনাল লজিক)
    const startAutomation = () => {
        setInterval(() => {
            // পেজে '1/5', '2/5' এই লেখাগুলো খোঁজা
            let pageInfo = document.body.innerText.match(/(\d)\/5/);
            if (pageInfo) {
                let currentStep = pageInfo[1];
                stepText.innerText = "STEP: " .. currentStep .. " / 5";
                pBar.style.width = (currentStep * 20) + "%";
                status.innerText = "WAITING FOR BUTTON...";
            }

            // 'CONTINUAR' বাটন খুঁজে ক্লিক করা
            const buttons = document.querySelectorAll('button, a, div, span');
            buttons.forEach(btn => {
                let btnText = btn.innerText.toUpperCase();
                if (btnText === 'CONTINUAR' || btnText.includes('CONTINUE') || btnText.includes('GET LINK')) {
                    status.innerText = "BUTTON FOUND! CLICKING...";
                    btn.click();
                }
            });

            // টাইমার ফাস্ট করার চেষ্টা (ব্রাউজার লেভেলে)
            if (typeof counter !== 'undefined') counter = 0;
            if (typeof timer !== 'undefined') timer = 0;

        }, 1000); // প্রতি সেকেন্ডে চেক করবে
    };

    // ৪. কি (Key) ডিটেকশন লজিক
    const findKey = () => {
        setInterval(() => {
            // যদি পেজে এমন কোনো টেক্সট থাকে যা দেখতে 'Key' এর মতো
            let allText = document.body.innerText;
            let keyMatch = allText.match(/[A-Z0-9]{5,}-[A-Z0-9]{5,}-[A-Z0-9]{5,}/);
            if (keyMatch) {
                status.innerText = "KEY FOUND!";
                status.style.color = "lime";
                gg.copyText(keyMatch[0]); // যদি গেমগার্ডিয়ান হয়, তবে কপি করবে
                alert("YOUR KEY: " + keyMatch[0]);
            }
        }, 2000);
    };

    startAutomation();
    findKey();

})();
