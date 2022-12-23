# ✅ 财新周刊

[rewrite_local]
^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/CaiXin/Script/CaiXin.js

[mitm]
hostname = gateway.caixin.com
