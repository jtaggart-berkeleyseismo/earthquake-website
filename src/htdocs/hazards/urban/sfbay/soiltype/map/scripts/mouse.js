/*
HTML Imagemapper 10 AJAX
alta4 Geoinformatik 2006
15.12.2006 - 10.0.24
http://www.alta4.com
*/
D6jKq=new Array(0,0);function U8O0d(){document.onmouseup=M73f9;document.onmousemove=v55;document.onkeydown=g833;document.ondragstart=e9rT0;if(document.all&&navigator.appName!="Opera")element(g_areaLay).onmousewheel=t31;else if(navigator.appName!="Opera")window.addEventListener("DOMMouseScroll",t31,false);else document.addEventListener("mousewheel",t31,false);if(element(g_areaLay)){element(g_areaLay).onmousedown=J2u;element(g_areaLay).ondblclick=H6T4}}c9l7=0;wYO8=false;function t31(st5A0){if(!st5A0)st5A0=window.event;if(document.all&&navigator.appName!="Opera"){if(st5A0.wheelDelta>0)c9l7++;else c9l7--}else{if(st5A0.detail>0)c9l7--;else c9l7++}if(!wYO8){setTimeout("$RXp6()",400);wYO8=true}return true}function $RXp6(){wYO8=false;if(-c9l7>r8s6())c9l7=-r8s6();if(c9l7>(j02()-r8s6()))c9l7=j02()-r8s6();var G7X97=nnc0();zoom(c9l7,-G7X97[0],-G7X97[1],false);c9l7=0;return true}function v55(st5A0){if(!st5A0)st5A0=window.event;if(st5A0.pageX||st5A0.pageY){D6jKq[0]=st5A0.pageX;D6jKq[1]=st5A0.pageY}else if(st5A0.clientX||st5A0.clientY){D6jKq[0]=st5A0.clientX+h14G2.scrollLeft;D6jKq[1]=st5A0.clientY+h14G2.scrollTop}return true}function f06(){return D6jKq}function HX65V(D3JB){var t8sJ5=g_viewOff;var xf3o=g_viewExt;if(D3JB[0]<t8sJ5[0]||D3JB[1]<t8sJ5[1]||D3JB[0]>(t8sJ5[0]+xf3o[0])||D3JB[1]>(t8sJ5[1]+xf3o[1]))return false;return true}h8_=null;m0w2=250;function J2u(st5A0){if(st5A0&&st5A0.preventDefault())st5A0.preventDefault();h14G2.style.cursor="move";var VfR=f06();h8_=setTimeout("P4Q13("+VfR[0]+","+VfR[1]+")",m0w2);return true}function M73f9(){h14G2.style.cursor="auto";N$6b();t8s();clearTimeout(h8_);h8_=null;P6b2H=false;OYV()}function H6T4(){SKQ5();return true}function g833(b25){if(!b25)b25=window.event;var ibW43=0;if(b25.which)ibW43=b25.which;else if(b25.keyCode)ibW43=b25.keyCode;if(parseInt(ibW43)==13)O2r();return true}function O2r(){if(g_hasSearch){if(m$4C7=="simple")search("simple");else start_advancedSearch()}return true}function d9o(){window.setTimeout("location.reload()",1)}