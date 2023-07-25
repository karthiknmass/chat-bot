<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Chatbot</title>
    <base href="./">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-signin-client_id" content="88120698087-km48uuq9h995bavoda2mte63h0t1mkh3.apps.googleusercontent.com">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://apis.google.com/js/platform.js" ></script>
    <link rel="stylesheet" href="assets/nurams/nurams.min.css">

    <style>
        .main {
            height: 80%;
            width: 100%;
            display: table;
            text-align: center;
        }
        .wrapper {
            display: table-cell;
            height: 100%;
            vertical-align: middle;
            text-align: center;

        }
        .loader {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin: 75px;
            display: inline-block;
            vertical-align: middle;
        }

        .loader-star {
            position: absolute;
            top: calc(50% - 12px);
        }
        /*LOADER-17*/

        .loader-17 .css-square {
            position: absolute;
            top: 50%;
            width: 25px; height: 7px;
            background: #007fb2;
            -webkit-box-shadow: 2px 2px 3px 0px black;
            box-shadow: 2px 2px 3px 0px black;
        }


        .loader-17 .square1 {
            left: 70px;
            -webkit-animation: dominos 1s 0.125s ease infinite;
            animation: dominos 1s 0.125s ease infinite;
        }

        .loader-17 .square2 {
            left: 60px;
            -webkit-animation: dominos 1s 0.3s ease infinite;
            animation: dominos 1s 0.3s ease infinite;
        }

        .loader-17 .square3 {
            left: 50px;
            -webkit-animation: dominos 1s 0.425s ease infinite;
            animation: dominos 1s 0.425s ease infinite;
        }

        .loader-17 .square4 {
            left: 40px;
            -webkit-animation: dominos 1s 0.540s ease infinite;
            animation: dominos 1s 0.540s ease infinite;
        }

        .loader-17 .square5 {
            left: 30px;
            -webkit-animation: dominos 1s 0.665s ease infinite;
            animation: dominos 1s 0.665s ease infinite;
        }

        .loader-17 .square6 {
            left: 20px;
            -webkit-animation: dominos 1s 0.79s ease infinite;
            animation: dominos 1s 0.79s ease infinite;
        }

        .loader-17 .square7 {
            left: 10px;
            -webkit-animation: dominos 1s 0.9s ease infinite;
            animation: dominos 1s 0.9s ease infinite;
        }

        .loader-17 .square8 {
            left: 0px;
            -webkit-animation: dominos 1s 1s ease infinite;
            animation: dominos 1s 1s ease infinite;
        }



        @-webkit-keyframes dominos {
            50% { opacity: 0.7; }
            75% { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
            80% { opacity: 1; }
        }


        @keyframes dominos {
            50% { opacity: 0.7; }
            75% { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
            80% { opacity: 1; }
        }

    </style>
    <script>
    </script>
</head>
<body>

<div id="nuramsload">

    <!-- <input type="hidden" id="baseUrl" value="http://www.rsoftweb.com/cavincare/public/formbuilder/" />
    <input type="hidden" id="showUrl" value="http://www.rsoftweb.com/cavincare/public/formbuilder/">
    <input type="hidden" id="rootUrl" value="http://www.rsoftweb.com/cavincare/" />
    <input type="hidden" id ="formpreview" value="http://www.rsoftweb.com/cavincare/public/formbuild/" />  -->
    <input type="hidden" id="cavincare" value="http://www.rsoftweb.com/cavincare/public/api/WebformIntegration?company_name=CAVINCARE" />
    <input type="hidden" id="rsofti" value="6,16,20" />
    <input type="hidden" id="nurams" value="0" />

    <!-- <input type="hidden" id="baseUrl" value="http://192.168.1.154/my/chatbot-admin/admin/" />
    <input type="hidden" id="showUrl" value="http://c192.168.1.154/my/chatbot-admin/api/">
    <input type="hidden" id="rootUrl" value="http://192.168.1.154/my/chatbot-admin/" />
    <input type="hidden" id="formpreview" value="http://nurams.co.in/" /> -->

    <?php
    if ($_SERVER['REQUEST_SCHEME'] == 'http') {
        $htp = "http";
        if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
            $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
            header('HTTP/1.1 301 Moved Permanently');
            header('Location: ' . $location);
            echo '<script> window.location.href = "'.$location.'" </script>';
            exit;
        }
    }else{
        $htp = "https";
    }
    ?>
   <!-- <input type="hidden" id="loginBaseUrl" value="<?php //echo $htp; ?>://rbot.live/bot-admin-backend/myapi/" />
    <input type="hidden" id="userBaseUrl" value="<?php //echo $htp; ?>://rbot.live/bot-admin-backend/users/" />
    <input type="hidden" id="baseUrl" value="<?php //echo $htp; ?>://rbot.live/bot-admin-backend/admin/" />
    <input type="hidden" id="showUrl" value="<?php //echo $htp; ?>://rbot.live/bot-admin-backend/api/">
    <input type="hidden" id="rootUrl" value="<?php //echo $htp; ?>://rbot.live/bot-admin-backend/" />
    <input type="hidden" id="formpreview" value="<?php //echo $htp; ?>://rbot.live/" />-->

        <!-- <input type="hidden" id="loginBaseUrl" value="<?php// echo $htp; ?>://rthree.live/bot-admin-backend/myapi/" />
    <input type="hidden" id="userBaseUrl" value="<?php //echo $htp; ?>://rthree.live/bot-admin-backend/users/" />
    <input type="hidden" id="baseUrl" value="<?php //echo $htp; ?>://rthree.live/bot-admin-backend/admin/" />
    <input type="hidden" id="showUrl" value="<?php// echo $htp; ?>://rthree.live/bot-admin-backend/api/">
    <input type="hidden" id="rootUrl" value="<?php// echo $htp; ?>://rthree.live/bot-admin-backend/" />
    <input type="hidden" id="formpreview" value="<?php //echo $htp; ?>://rthree.live/" /> -->



        <input type="hidden" id="loginBaseUrl" value="http://127.0.0.1/rthree.live/bot-admin-backend/myapi/" />
    <input type="hidden" id="userBaseUrl" value="http://127.0.0.1/rthree.live/bot-admin-backend/users/" />
    <input type="hidden" id="baseUrl" value="http://127.0.0.1/rthree.live/bot-admin-backend/admin/">

    <input type="hidden" id="showUrl" value="http://127.0.0.1/rthree.live/bot-admin-backend/api/">
    <input type="hidden" id="rootUrl" value="http://127.0.0.1/rthree.live/bot-admin-backend/" />
    <input type="hidden" id="formpreview" value="http://127.0.0.1:4200/" />

</div>
<app-root>

    <!-- Page Loader -->

    <div class = "main">
        <div class = "wrapper">

            <!-- <section>
                  <div class="loader loader-17">
                      <div class="css-square square1"></div>
                      <div class="css-square square2"></div>
                      <div class="css-square square3"></div>
                      <div class="css-square square4"></div>
                      <div class="css-square square5"></div>
                      <div class="css-square square6"></div>
                      <div class="css-square square7"></div>
                      <div class="css-square square8"></div>
                  </div>
              </section> -->

            <img style="margin-top: 8%;height: 40px;width: 45px;" src="assets/images/loding.gif" />
        </div>
    </div>

    <!-- #END# Page Loader -->
</app-root>

<script src="runtime.js" defer></script><script src="polyfills.js" defer></script><script src="styles.js" defer></script><script src="scripts.js" defer></script><script src="vendor.js" defer></script><script src="main.js" defer></script></body>
</html>
