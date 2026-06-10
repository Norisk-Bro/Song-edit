(function() {
    'use strict';
    alert("🔥 SAJIB TOOLS: ULTRA BYPASS ACTIVATED! 🔥");

    // ১. টাইমারকে ফাস্ট করার ফাংশন (৩০ সেকেন্ডকে ০ করে দিবে)
    const speedUpTime = () => {
        const originalSetTimeout = window.setTimeout;
        window.setTimeout = function(fn, delay) {
            return originalSetTimeout(fn, 0); // সব টাইমারকে ০ সেকেন্ড করে দেয়
        };

        const originalSetInterval = window.setInterval;
        window.setInterval = function(fn, delay) {
            return originalSetInterval(fn, 0); // সব ইন্টারভালকে ০ করে দেয়
        };
    };

    // ২. অটো ক্লিক লজিক (৫টি ধাপ পার করার জন্য)
    const bypassSteps = () => {
        // পেজে যত বাটন আছে সব চেক করবে
        const allElements = document.querySelectorAll('button, a, span, div');
        
        allElements.forEach(el => {
            const text = el.innerText.toUpperCase();
            // নিচের নামগুলোর সাথে মিললে অটো ক্লিক করবে
            if (text.includes('CONTINUE') || 
                text.includes('NEXT') || 
                text.includes('GET LINK') || 
                text.includes('STEP') || 
                text.includes('VERIFY') ||
                text.includes('CLICK HERE')) {
                
                el.style.border = "5px solid red"; // ক্লিক করার সময় লাল বর্ডার দেখাবে
                el.click();
                console.log("Bypassing Step: " + text);
            }
        });
    };

    // ৩. পপ-আপ এবং অ্যাড রিমুভ করা যাতে পেজ ফাস্ট লোড হয়
    const cleanPage = () => {
        const ads = document.querySelectorAll('iframe, .ads, [id*="ad"]');
        ads.forEach(ad => ad.remove());
    };

    // ৪. মেইন লুপ (প্রতি ০.৫ সেকেন্ড পর পর চলবে)
    speedUpTime();
    setInterval(() => {
        bypassSteps();
        cleanPage();
    }, 500);

    // ৫. অটো কনফার্মেশন (যদি কনফার্ম বক্স আসে)
    window.confirm = function() { return true; };
    window.alert = function() { return true; };

    document.title = "✅ SAJIB BYPASSING... ✅";
})();
