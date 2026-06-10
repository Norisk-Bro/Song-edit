(function() {
    'use strict';
    alert("🚀 SAJIB TOOLS: Bypass Engine Started!");

    // ১. টাইমার স্কিপ করার ফাংশন
    const skipTimer = () => {
        window.setTimeout = function(fn, delay) {
            return fn(); // টাইমারকে ০ করে দেয়
        };
    };

    // ২. অটো ক্লিক করার ফাংশন
    const autoClicker = () => {
        // যেসব বাটনে "Continue", "Next", বা "Get Link" লেখা আছে তাদের খুঁজে বের করে
        const buttons = document.querySelectorAll('button, a, div');
        buttons.forEach(btn => {
            const text = btn.innerText.toLowerCase();
            if (text.includes('continue') || text.includes('next') || text.includes('get link') || text.includes('verify')) {
                btn.click();
                console.log("Clicked: " + text);
            }
        });
    };

    // ৩. বিজ্ঞাপন বা পপ-আপ রিমুভ করা
    const removeAds = () => {
        const ads = document.querySelectorAll('iframe, .ads, #ad-container');
        ads.forEach(ad => ad.remove());
    };

    // ৪. প্রতি ১ সেকেন্ড পরপর চেক করবে নতুন বাটন এসেছে কি না
    setInterval(() => {
        skipTimer();
        autoClicker();
        removeAds();
    }, 1000);

    // ৫. পেজের টাইটেল চেঞ্জ করে দিবে যাতে বুঝা যায় এটি কাজ করছে
    document.title = "🔥 BYPASSING... 🔥";
})();
