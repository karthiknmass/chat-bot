var template = '<div style=""><div id="chatbotopenid" class="chatshow-viewdivshow myanimation"><div class="chatshow-btn" id="chatshowbtn"><svg id="iconsvg" xmlns="http://www.w3.org/2000/svg" style="padding-top:2px" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg> <label style="margin:0 5px 0 5px;cursor:pointer">Chat</label></div></div><div class="chatshow-imgs" id="imgg"></div><div id="chatbotid" class="chatshow-viewdiv myanimation"><div class="chatshow-chathead" id="chathead"><div class="chatshow-title"><label id="bottitle">RBot</label></div><div class="chatshow-title-btndiv"><button class="chatshow-title-btn myanimation" id="refreshClick"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#989da0" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></button> <button class="chatshow-title-btn myanimation" id="closeClick"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#989da0" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></button></div></div><iframe id="iframeId" allow="camera;microphone" class="chatshow-iframe" src="#" data-flg="0"></iframe><div id="bot-brand" style="cursor:pointer" class="bot-brand" onclick="openSite()"><div class="chatshow-branding"><label>R Bot</label> <img id="branding_img" src="assets/images/logo1.png" style="width:50px;padding:0 0 3px 0"> <label>by salezrobot.com</label></div></div></div></div>',
    bodytag = document.getElementsByTagName("body")[0];
var rbot;
var nura = window.nura;
bodytag.insertAdjacentHTML('beforeend', template);
setTimeout(() => { 
    var t = window.prv + "showbot?formid=" + window.nurams_bot+ "&nura="+nura,
        bot_brand = document.getElementById("bot-brand"),
        e = document.getElementById("chatbotid"),
        branding_img = document.getElementById("branding_img"),
        i = document.getElementById("chathead"),
        s = document.getElementById("iframeId"),
        d = document.getElementById("refreshClick"),
        n = document.getElementById("closeClick"),
        a = document.getElementById("chatshowbtn"),
        imgg = document.getElementById("imgg"),
        cc = document.getElementById("iconsvg"),
        gg = document.getElementById("imgg"),
        h = document.getElementById("chatbotopenid");
    bo = document.getElementById("bottitle");
    branding_img.src = window.prv + "assets/images/logo1.png";
    function l() {
        var t = window.innerHeight,
            d = window.innerWidth;
        if (t < 700) {
            var n = t / 100 * 90;
            e.style.height = n + "px", i.style.height = "40px", s.style.height = n - 90 + "px"
        } else {
            e.style.height = "700px", i.style.height = "40px", s.style.height = "625px";
        }

        d < 600 ? (n = d / 100 * 95, e.style.width = n + "px") : e.style.width = d < 800 ? "50%" : "40%"
    }
    var o = function(t) {
        var e = new XMLHttpRequest;
        return e.open("GET", t + "getbotdesign?formid=" + window.nurams_bot+"&nura="+nura, !1), e.send(null), e.responseText
    }(window.shownurams);
    if ("" != o) {
        var c = JSON.parse(o);
        var is_form_update = window.localStorage.getItem('is_form_update');
        if (is_form_update != null) {
            if (is_form_update != c.is_form_update) {
                window.localStorage.removeItem('autoopen-flg');
                window.localStorage.removeItem('secopen-flg');
                window.localStorage.removeItem('beh-fflg');
                s.src = t + "&clear=1";
                window.localStorage.setItem('is_form_update', c.is_form_update);
            }
        } else {
            window.localStorage.setItem('is_form_update', c.is_form_update);
        }
        1 == c.position_id ? (gg.className += " chatshow-imgsleft", e.className += " chatshow-title-btndiv-left", h.className += " chatshow-title-btndiv-left") : 2 == c.position_id && (h.className += " chatshow-title-btndiv-center", gg.className += " chatshow-title-btndiv-center")
        bo.innerHTML = c.message_text;
        if (c.bot_branding == 1){
            bot_brand.style.display = 'flex'; 
        }else{
            bot_brand.style.display = 'none'; 
        }
        if (c.behaviour.widget_btn == 0) {
            if (c.launcher_style_id == 1) {
                if (location.protocol != "https:") {
                    c.avatar.avatar_image_path = c.avatar.avatar_image_path.replace('https', 'http');
                } else {
                    if (!c.avatar.avatar_image_path.includes('https')) {
                        c.avatar.avatar_image_path = c.avatar.avatar_image_path.replace('http', 'https');
                    }
                }
                a.className += " chatshow-btnn";
                gg.style = "display:block;background-image:url(" + c.avatar.avatar_image_path + ")";
                cc.style = "display:none";
                h.style = "display:block;right: 90px;";
            } else {
                h.style = "display:block;right: 30px;";
                a.style = "background-color :" + c.theme.color_code + " !important;";
            }
            if (c.enable_bot_lbl == 0){
                h.style.display = "none";
            }
        }
        if (c.behaviour.user_reache == 1) {
            if (window.localStorage.getItem('autoopen-flg') == null) {
                window.addEventListener('scroll', function(event) {
                    var docHeight = document.documentElement.scrollHeight - document.documentElement.offsetHeight;
                    var needHeight = c.behaviour.user_reache_val;
                    var presentHeight = (docHeight / 100) * needHeight;
                    var curPosition = document.documentElement.scrollTop;
                    if (presentHeight < curPosition && window.localStorage.getItem('autoopen-flg') == null) {
                        e.style.height = "0", setTimeout(() => {
                            e.style.visibility = "visible", l(), "0" == s.getAttribute("data-flg") && (s.src = t, s.setAttribute("data-flg", "1"))
                        }, 200);
                        window.localStorage.setItem('autoopen-flg', 1);
                    }
                });
            }
        }
        if (c.behaviour.load_after == 1 && window.localStorage.getItem('secopen-flg') == null && c.behaviour.load_after_sec > 0) {
            window.localStorage.setItem('secopen-flg', 1);
            setTimeout(function() {
                e.style.height = "0", setTimeout(() => {
                    e.style.visibility = "visible", l(), "0" == s.getAttribute("data-flg") && (s.src = t, s.setAttribute("data-flg", "1"))
                }, 200);
            }, (c.behaviour.load_after_sec * 1000));
        }

        if (c.behaviour.user_leave == 1) {
            if (window.localStorage.getItem('beh-fflg') != null) {
                if (window.localStorage.getItem('beh-fflg') == 2) {
                    rbot.open();
                    window.localStorage.setItem('beh-fflg', 3);
                } else {
                    if (window.localStorage.getItem('beh-fflg') == 1) {
                        window.localStorage.setItem('beh-fflg', 2);
                    }
                }
            } else {
                window.localStorage.setItem('beh-fflg', 1);
            }
        }
    }
    d.addEventListener("click", function() {
        s.src = t + "&clear=1"
    }), n.addEventListener("click", function() {
        e.style.visibility = "hidden", e.style.height = "0"
    }), a.addEventListener("click", function() {
        e.style.height = "0", setTimeout(() => {
            e.style.visibility = "visible", l(), "0" == s.getAttribute("data-flg") && (s.src = t, s.setAttribute("data-flg", "1"))
        }, 200)
    }), imgg.addEventListener("click", function() {
        e.style.height = "0", setTimeout(() => {
            e.style.visibility = "visible", l(), "0" == s.getAttribute("data-flg") && (s.src = t, s.setAttribute("data-flg", "1"))
        }, 200)
    }), window.onresize = function(t) {
        l()
    }

    class Chatbot {
        Chatbot(e, s, t) {}
        open() {
            e.style.height = "0", setTimeout(() => {
                e.style.visibility = "visible", l(), "0" == s.getAttribute("data-flg") && (s.src = t, s.setAttribute("data-flg", "1"))
            }, 200);
        }
        close() {
            e.style.visibility = "hidden", e.style.height = "0";
        }
        toggle() {
            if (e.style.height == "" || e.style.height == "0px") {
                e.style.height = "0", setTimeout(() => {
                    e.style.visibility = "visible", l(), "0" == s.getAttribute("data-flg") && (s.src = t, s.setAttribute("data-flg", "1"))
                }, 200);
            } else {
                e.style.visibility = "hidden", e.style.height = "0";
            }
        }
    }
    rbot = new Chatbot(e, s, t);

}, 500);
function openSite(){
    window.open('https://salezrobot.com/ ');
}