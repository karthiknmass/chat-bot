const userAction = async () => {
    var id = window.bot_id; 
    var nura = window.bot_nura;
    var site = window.bot_site;
    const response = await fetch(site+"whatsapp-details?nura="+nura, {
        method: 'POST',
        body: JSON.stringify({ id : id }), // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    if (myJson.error == "false"){
        var box = document.createElement("div");
        box.innerHTML = myJson.dataset.chat_box_preview;
        document.body.appendChild(box);
//        document.body.innerHTML += myJson.dataset.chat_box_preview;
        restFunction();
        loadData(myJson.dataset);
    }
}
userAction();

 restFunction = async () => {
    var send_it = document.getElementById('send-it');
    var get_number = document.getElementById('get-number');
    var chat_input = document.getElementById('chat-input');
    var whatsapp_chat = document.getElementById('whatsapp-chat');
    var whatsapp_mobile = document.getElementById('whatsapp_mobile');
    var whatsapp_link = "https://web.whatsapp.com/send";
    send_it.addEventListener('click', function(e){
        if (chat_input.value != ""){
            var textvalue = "&text=" + chat_input.value;
            var walink = whatsapp_link + "?phone="+ whatsapp_mobile.innerText  + textvalue;
            window.open(walink, "_blank");
        }
    });

    var informasi_list = document.getElementsByClassName('informasi');
    console.log(informasi_list);
    if (informasi_list.length > 0){
        var informasi = informasi_list[0];
        informasi.addEventListener('click',function(e){
            document.getElementById("get-number").innerHTML = document.getElementsByClassName('.my-number')[0].value;
            var start_chat = document.getElementsByClassName('.start-chat,.get-new')[0];
            start_chat.classList.add("show");
            start_chat.classList.remove("hide");
            var home_chat = document.getElementsByClassName('.home-chat,.head-home')[0];
            home_chat.classList.add("show");
            home_chat.classList.remove("hide");
            document.getElementById("get-nama").innerHTML = document.getElementsByClassName('chat-nama')[0].value;
            document.getElementById("get-label").innerHTML = document.getElementsByClassName('chat-label')[0].value;
        });
    }

    var close_chat = document.getElementsByClassName('close-chat')[0];
    close_chat.addEventListener("click",function(e){
        whatsapp_chat.classList.add("hide");
        whatsapp_chat.classList.remove("show");
    });

    var blantershow_chat = document.getElementsByClassName('blantershow-chat')[0];
    blantershow_chat.addEventListener('click',function(e){
        whatsapp_chat.classList.add("show");
        whatsapp_chat.classList.remove("hide");
    });
}

loadData = (data) => {
    let myInterval = setInterval(() => {
        var button = document.getElementsByClassName('blantershow-chat chaweg-blantershow-chat');
        if (button === null){

        }else{
            var whatsapp_chat = document.getElementById("whatsapp-chat");
            button[0].style.background = data.button_color;
            button[0].style.borderRadius = data.rounded_corner+"px";
            button[0].style.marginBottom = data.margin_bottom+"px";
            button[0].style.marginLeft = data.margin_left+"px";
            button[0].style.marginRight = data.margin_right+"px";
            if (data.position == "left"){
                button[0].style.right = "unset";
                button[0].style.left = "30px";
                whatsapp_chat.style.marginBottom = data.margin_bottom+"px";
                whatsapp_chat.style.marginLeft = data.margin_right+"px";
                whatsapp_chat.style.left = "30px";
                whatsapp_chat.style.right = "unset";
            }else{
                whatsapp_chat.style.marginBottom = data.margin_bottom+"px";
                whatsapp_chat.style.marginLeft = data.margin_left+"px";
                whatsapp_chat.style.marginRight = data.margin_right+"px";    
                whatsapp_chat.style.right = "30px";
                whatsapp_chat.style.left = "unset";
            }
            document.getElementById('admin_user').innerText = data.brand_name;
            document.getElementById('admin_user_1').innerText = data.brand_name;
            document.getElementById('admin_replies_time').innerText = data.brand_sub_title;
            var w_text = document.getElementById('welcome_text_show');
            if (w_text.length > 0){
                w_text.innerText = data.welcome_text;
            }
            if (data.chat_enable_cta == 1){
                var send_mox1 = document.getElementById('whatsappChatWidgetButtonTextPreview');
                send_mox1.innerText = data.cta_text;
                var whatsappChatWidgetStartChat = document.getElementById('whatsappChatWidgetStartChat');
                whatsappChatWidgetStartChat.style.borderRadius =  data.border_radius+"px";
                whatsappChatWidgetStartChat.style.backgroundColor = data.bg_color;
            }
            button[0].classList.remove("hide");
            if (data.open_widget == "True"){
                whatsapp_chat.classList.add("show");
                whatsapp_chat.classList.remove("hide");
            }else{
                whatsapp_chat.classList.add("hide");
                whatsapp_chat.classList.remove("show");
            }
            document.getElementById('brand_img_url').src = data.brand_img_url;
            console.log("=================");
            console.log(data);
            clearInterval(myInterval);
            myInterval = 0;
        }
    },1000);
}