(function() {
    alert("✅ Sajib Tools: Javascript Loaded Successfully!");
    
    // আপনার আসল কাজ এখানে লিখুন
    document.body.style.border = "5px solid lime";
    console.log("Script is running on: " + window.location.hostname);
    
    // উদাহরণ: একটি ছোট মেনু তৈরি
    var div = document.createElement('div');
    div.style = "position:fixed;top:10px;right:10px;z-index:9999;background:black;color:white;padding:10px;border:2px solid lime;";
    div.innerHTML = "<b>SAJIB TOOLS MENU</b><br><button onclick='alert(\"Hack Active\")'>Activate</button>";
    document.body.appendChild(div);
})();
