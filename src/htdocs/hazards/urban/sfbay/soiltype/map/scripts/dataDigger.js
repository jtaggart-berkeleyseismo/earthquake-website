/*
HTML Imagemapper 10 AJAX
alta4 Geoinformatik 2006
15.12.2006 - 10.0.24
http://www.alta4.com
*/
PmRM="dD";f9m=200;G0J=35;g_dDWidth=300;x45=new Array(l_equals,l_higher,l_lower);_62=new Array();s43e=true;y202=100;function em9l7(id,sj28){var dW_1=T85b5(id);var s8r=ir9(id);var r70="";var $$6q=true;var O2s57="key";var L49=dW_1.length;if(sj28&&(L49>3))L49=3;for(var item=0;item<L49;item++){var O2s57="key";var kff85="key";var _54g6="value";if(dW_1[item]=="a4IM_pic")r70+="<tr><td colspan=\"2\" class=\""+O2s57+"\" style=\"text-align:center; \" >"+createPhotoPic(s8r["content"][dW_1[item]],"thumb")+"</td></tr>";else r70+="<tr><td class=\""+kff85+"\">"+dW_1[item]+"</td><td class=\""+_54g6+"\">"+s8r["content"][dW_1[item]]+"</td></tr>";$$6q=false}if($$6q){j0w(id);r70+="<tr><td>"+s8r["name"]+"<br />"+l_dataLoading+"</td></tr>"}return "<table class=\"popUp\">"+r70+"</table>"}function start_advancedSearch(){m$4C7="advanced";var q2m=_Ja9();if(q2m[2]!=null)_2693();create_usedSearchAtoms();search(m$4C7)}function setSimple(){m$4C7="simple"}function m13e(){if(!element(PmRM+"_attlayer")){var D3JB=new Array(g_viewOff[0]+50,g_viewOff[1]+g_viewExt[1]-450);if(D3JB[1]<0)D3JB[1]=0;if(D3JB[1]+f9m>g_viewExt[1]-50)f9m=g_viewExt[1]-50;U67("dDPos",D3JB);var RdaW0=p4LY9("dDPos");var RM$=D8430(PmRM,"","",RdaW0[1],RdaW0[0],"none",true,true,true,false,true,'print_item(\'dD\');',"drag('"+PmRM+"');","","setSimple();hider('"+PmRM+"');","","",l_dataDigger,"minimize_popup('"+PmRM+"',"+f9m+","+G0J+",false,null);");h14G2.innerHTML+=RM$;hider(PmRM);Y19VB(PmRM,g_dDWidth);cVdT(PmRM,f9m);_y4n(PmRM,S1v);if(g_showSearchAtStart){m$4C7="simple";switch_searchType()}}}function create_dD(){if(g_hasSearch){x45=new Array(l_equals,l_higher,l_lower);m13e();R0S(PmRM);var RM$=element(PmRM+"_anchor");clear(RM$);if(m$4C7=="advanced"){j1s2l();if(lKm.length>0)create_usedSearchAtoms()}else{var head=M0R("p");head.className="searchCriteria";head.innerHTML=l_search+": "+element("frameSearchInput").value;qiM(RM$,head)}cK0(null,null,PmRM+"_resultCon",null,null,RM$)}}function j1s2l(){var RM$=element(PmRM+"_anchor");if(element(PmRM+"_searchLine"))element(PmRM+"_searchLine").innerHTML="";else{var p=M0R("p");p.className="searchCriteriaSelector";p.id=PmRM+"_searchLine";qiM(RM$,p)}var lyP4q=element(PmRM+"_searchLine");qiM(lyP4q,_7nL9(g_searchFields));qiM(lyP4q,M0R("br"));qiM(lyP4q,X115("searchVal",20,""));var d33=$9$(g_designDir+"search.gif",null,"advSearch","javascript:start_advancedSearch();","");qiM(lyP4q,d33)}function cu5(){m13e();var RM$=element(PmRM+"_anchor");clear(RM$);var head=M0R("p");head.className="searchCriteria";head.innerHTML=l_search+": "+element("frameSearchInput").value+" ...";qiM(RM$,head)}function H$3h9(){var RdaW0=p4LY9("dDPos");svSsR(element(PmRM+"_attlayer"),RdaW0,null,null);minimize_popup(PmRM,f9m,G0J,false,null)}function switch_searchType(){s43e=false;d8946=new Array();(m$4C7=="simple")?m$4C7="advanced":m$4C7="simple";create_dD();if(m$4C7=="advanced"&&p4LY9(PmRM+"_minimized")==true)minimize_popup(PmRM,f9m,G0J,false,null)}function MN7$(rRh_){var Op7=new Array();for(var item in rRh_){var t69T=rRh_[item].split("||")[0];if(t69T.length>0)Op7.push(t69T)}return Op7}J8d3K=0;WbXE=0;function _7nL9(O0900){O0900.sort();var qTrb=MN7$(O0900);var span=M0R("span");var hb0y=Vks4("fieldSel",qTrb,O0900,J8d3K);hb0y.onchange=l7_Yp;if(O0900[J8d3K].indexOf("STRING")!=-1){var H13u=M0R("span");H13u.innerHTML=l_contains}else{var H13u=Vks4("opSel",x45,x45,WbXE);H13u.onchange=l7_Yp}qiM(span,hb0y);nS97(span," ");qiM(span,H13u);nS97(span," ");return span}function l7_Yp(){J8d3K=GMAc6("fieldSel")[0];if(element("opSel"))WbXE=GMAc6("opSel")[0];j1s2l()}function create_usedSearchAtoms(){if(!element(PmRM+"_atomsLine")){var $470L=M0R("p");$470L.className="searchCriteria";$470L.id=PmRM+"_atomsLine";qiM(element(PmRM+"_anchor"),$470L)}else clear(element(PmRM+"_atomsLine"));var QS52=M0R("p");for(var i=0;i<lKm.length;i++ ){var _696d=lKm[i];QS52.innerHTML+=_696d[0]+" "+_696d[2]+" "+_696d[3]+" ";var link=M0R("a");link.href="javascript:rem_advSearchAtom('"+_696d[0]+"||"+_696d[1]+"||"+_696d[2]+"||"+_696d[3]+"');create_usedSearchAtoms();search('advanced');";link.innerHTML+="("+l_delete+")";qiM(QS52,link);if(i<(lKm.length-2))QS52.innerHTML+=", ";if(i==(lKm.length-2))QS52.innerHTML+=" "+l_and+" "}if(element(PmRM+"_atomsLine"))qiM(element(PmRM+"_atomsLine"),QS52)}function _Ja9(){var S4_="";var aPl$=l_contains;var d6449="";if(m$4C7=="simple")S4_=element("frameSearchInput").value;else{if(element("searchVal"))S4_=element("searchVal").value;if(element("opSel"))aPl$=GMAc6("opSel")[1];if(element("fieldSel"))d6449=GMAc6("fieldSel")[1]}return new Array(d6449,aPl$,S4_)}GxeK_=new Array();Y2bP=new Array();A27=null;function JUtC(P$Y0){if(P$Y0.length==1){if(P$Y0[0]==null){create_dD();dMd4u()}else{var id=parseInt(P$Y0[0]);if(!isNaN(id)&&id>=0&&id<=g_dCLength){j0w(id);VF28(id);setSimple();hider(PmRM)}}}else{create_dD();if(P$Y0.length>0)P$Y0=CV51(P$Y0);GxeK_=new Array();uBVo(P$Y0,GxeK_);clear(element(PmRM+"_resultCon"));_62=new Array();if(s43e){if(GxeK_.length>y202){var s71=confirm(l_showMoreThanXResults);if(!s71)GxeK_.length=y202}VgxT0(0)}if(p4LY9(PmRM+"_minimized")==true)minimize_popup(PmRM,f9m,G0J,false,null)}}function VF28(id){if(typeof(C1v$[id])!="object")setTimeout("VF28("+id+")",250);else showinmap(id,C1v$[id]["bestView"]["zL"],C1v$[id]["bestView"]["coords"])}function dMd4u(){if(element(PmRM+"_resultCon")){var r70="<p id='0_result' class='key'>"+l_noresults+"</p>";var nBU1N=element(PmRM+"_resultCon");nBU1N.innerHTML=r70}}function VgxT0(id){if(id<GxeK_.length&&s43e){var O2s57="";(A0B8X(id))?O2s57="key":O2s57="value";var content=$OhB(GxeK_[id],O2s57);var r70="<p id='"+GxeK_[id]+"_result' class='"+O2s57+"'>"+content[0]+"</p>";if(element(PmRM+"_resultCon")){var nBU1N=element(PmRM+"_resultCon");nBU1N.innerHTML+=r70;if(content[1]!=null)_62.push(content[1])}setTimeout("VgxT0("+(id+1)+")",2)}else if(_62.length>0&&s43e)U2n(0)}function U2n(id){if(id<_62.length&&s43e){j0w(_62[id]);setTimeout("U2n("+(id+1)+")",5)}else A67(0)}function A67(){if(typeof(C1v$[_62[0]])=="object"&&s43e&&element(_62[0]+"_result")){var mtwk_=element(_62[0]+"_result");mtwk_.innerHTML=$OhB(_62[0],Y2bP);_62.shift()}if(_62.length>0&&s43e)setTimeout("A67()",5)}function $OhB(id,O2s57){var content="";var pE7YL=null;if(id==null)content=l_noresults;else{if(typeof(C1v$[id])=="object"){var mtwk_=ir9(id);content="<span class='cssClass'>"+tr5(mtwk_["name"],id,mtwk_)+"</span>"}else{content=id+" "+l_loading;pE7YL=id}}return new Array(content,pE7YL)}function tr5(c167,id,mtwk_){if(typeof(mtwk_["bestView"])=="object"){if(c167=="")c167="Feature "+id;return "<a href=\"javascript:showinmap("+id+","+mtwk_['bestView']['zL']+",'"+mtwk_['bestView']['coords']+"');\">"+c167+"</a>"}return c167}function BU5e(parent,id,O2s57){var table=M0R("table");table.setAttribute("id",id);table.className=O2s57;qiM(parent,table)}function dY$(table,content,O2s57,id,_Q2Um,rEG,index){if(index==null)index=table.rows.length;var Dx6U=table.insertRow(table.rows.length);Dx6U.setAttribute("id",id);for(var item=0;item<content.length;item++){var K_u=null;if(_Q2Um==item)K_u=rEG;f607_(Dx6U,O2s57,K_u,content[item])}}function f607_(parent,O2s57,span,content){var $f83=M0R("td");$f83.className=O2s57;if(span!=null){if(document.all)$f83.setAttribute("colSpan",span);else $f83.setAttribute("colspan",span)}if(typeof(content)!="object")$f83.innerHTML=content;else qiM($f83,content);qiM(parent,$f83)}function GMAc6(id){if(element(id)){var K5N=element(id);for(var N$x=0;N$x<K5N.length;N$x++){if(K5N.options[N$x].selected)return new Array(N$x,K5N.options[N$x].value)}}return false}function Vks4(id,PO7,iykG,RcB16){var K5N=M0R("select");K5N.setAttribute("id",id);for(var t69T=0;t69T<PO7.length;t69T++){K5N.options[K5N.length]=new Option(PO7[t69T],iykG[t69T],false,false);var EE89=M0R("p");EE89.innerHTML=PO7[t69T];K5N.options[K5N.length-1].text=EE89.firstChild.nodeValue}K5N.selectedIndex=RcB16;return K5N}function X115(id,length,value){var YJ0b=M0R("input");YJ0b.type="text";YJ0b.setAttribute("id",id);YJ0b.setAttribute("name",id);YJ0b.size=length;YJ0b.value=value;return YJ0b}function CV51(r$8){var a7O=new Array();for(var item in r$8){if(r$8[item]!=null)a7O.push(r$8[item])}return a7O}