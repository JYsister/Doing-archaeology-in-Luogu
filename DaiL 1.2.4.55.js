// ==UserScript==
// @name            Doing archaeology in Luogu
// @namespace       http://tampermonkey.net/
// @version         1.2.4.55
// @description     A Tool for Doing Archaeology in Luogu!
// @description:zh  一个用于在洛谷考古的工具！
// @author          JYqwq
// @match           https://www.luogu.com.cn/discuss/*
// @grant           none
// ==/UserScript==

(function() {// Gu Gu Gu...
    'use strict';
    var line1_phase1=["NONE","9","5","11","111","191981","100000","191919","114516","114517","114518","114519","114520","114512","1314","520","131420","123456","112233","2333","233","5418","200000","300000","250250","54188","NONE"];//25
    var line1_phase1_next=["NONE","5","11","111","191981","100000","191919","114516","114517","114518","114519","114520","114512","1314","520","131420","123456","112233","2333","233","5418","200000","300000","250250","54188","999","NONE"];
    var line1_phase1_last=["NONE","NONE","9","5","11","111","191981","100000","191919","114516","114517","114518","114519","114520","114512","1314","520","131420","123456","112233","2333","233","5418","200000","300000","250250","NONE"];
    var line1_phase2=["NONE","999","666","100","1024","2048","32678","65536","512","64","32","16","262144","NONE"];//12
    var line1_phase2_next=["NONE","666","100","1024","2048","32678","65536","512","64","32","16","262144","149","NONE"];
    var line1_phase2_last=["NONE","250250","999","666","100","1024","2048","32678","65536","512","64","32","16","NONE"];
    var line1_phase3=["NONE","149","406456","406158","400958","67690","394039","394016","377712","NONE"];//8
    var line1_phase3_next=["NONE","406456","406158","400958","67690","394039","394016","377712","NONE","NONE"];
    var line1_phase3_last=["NONE","262144","149","406456","406158","400958","67690","394039","394016","NONE"];
    var line2_phase4=["NONE","321691","394419","324463","335676","339055","341018","341985","341096","115551","430187","NONE"];//10
    var line2_phase4_next=["NONE","394419","324463","335676","339055","341018","341985","341096","115551","430187","NONE","NONE"];
    var line2_phase4_last=["NONE","NONE","321691","394419","324463","335676","339055","341018","341985","341096","115551","NONE"];
    var line2_phase5=["NONE","525529"];
    //ways for doing archaeology
    var now_url=window.location.href,postid;
    if(now_url.indexOf("?page=")!=-1) postid=now_url.substring(33,now_url.indexOf("?page="));
    else postid=now_url.substring(33);
    var i,is_station=0;
    for(i in line1_phase1)
    {
        if(line1_phase1[i]==postid&&i>0)
        {
            add("下一站：https://www.luogu.com.cn/discuss/"+line1_phase1_next[i]);
            if(i>1){add("上一站：https://www.luogu.com.cn/discuss/"+line1_phase1_last[i]);}
            add("现在是考古壹号线(总一期)第"+i+"站");
        }
    }
    for(i in line1_phase2)
    {
        if(line1_phase2[i]==postid&&i>0)
        {
            add("下一站：https://www.luogu.com.cn/discuss/"+line1_phase2_next[i]);
            add("上一站：https://www.luogu.com.cn/discuss/"+line1_phase2_last[i]);
            add("现在是考古壹号线(总二期)第"+i+"站");
        }
    }
    for(i in line1_phase3)
    {
        if(line1_phase3[i]==postid&&i>0)
        {
            if(line1_phase3_next[i]!="NONE") add("下一站：https://www.luogu.com.cn/discuss/"+line1_phase3_next[i]);
            add("上一站：https://www.luogu.com.cn/discuss/"+line1_phase3_last[i]);
            add("现在是考古壹号线(总三期)第"+i+"站");
        }
    }
    for(i in line2_phase4)
    {
        if(line2_phase4[i]==postid&&i>0)
        {
            if(line2_phase4_next[i]!="NONE") add("下一站：https://www.luogu.com.cn/discuss/"+line2_phase4_next[i]);
            if(i>1){add("上一站：https://www.luogu.com.cn/discuss/"+line2_phase4_last[i]);}
            add("现在是考古贰号线(总四期)第"+i+"站");
        }
    }
    //search stations
    function add(txt)
    {
        var p=document.getElementsByTagName("ul")[0];
        var q=document.getElementsByTagName("li")[0];
        var ins=document.createElement("li");
        p.insertBefore(ins,q);
        //insert tips
        p=document.getElementsByTagName("li")[0];
        ins=document.createElement("strong");
        p.appendChild(ins);
        //insert bold
        q=document.getElementsByTagName("strong")[0];
        q.innerText=txt;
        //insert text
    }
})();