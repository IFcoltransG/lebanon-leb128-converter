let J=32,O=0,Q=`string`,P=1,S=`Object`,M=`utf-8`,L=null,W=4,R=`function`,I=Array,T=Error,U=Int32Array,X=Object,V=Uint32Array,N=Uint8Array,K=undefined;var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==L){return `${a}`};if(b==Q){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==L){return `Symbol`}else{return `Symbol(${b})`}};if(b==R){const b=a.name;if(typeof b==Q&&b.length>O){return `Function(${b})`}else{return `Function`}};if(I.isArray(a)){const b=a.length;let c=`[`;if(b>O){c+=l(a[O])};for(let d=P;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>P){d=c[P]}else{return toString.call(a)};if(d==S){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return S}};if(a instanceof T){return `${a.name}: ${a.message}\n${a.stack}`};return d});var w=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf2e69218a641e580(b,c,k(d))});var A=((a,b)=>{const c=z();const d=c.subarray(a/W,a/W+ b);const e=[];for(let a=O;a<d.length;a++){e.push(f(d[a]))};return e});var v=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_mut_ref__heab167147748e652(c,d,u(e))}finally{b[t++]=K}});var k=(a=>{if(d===b.length)b.push(b.length+ P);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var H=(async(a)=>{if(typeof a===`undefined`){a=new URL(`lebanon-bbe80fe1f61c58e5dfa724d15200eb3d22cedafec76a3145cdd43133b9ee206b442f3e4c736f974a753f850294a25b2f_bg.wasm`,import.meta.url)};const b=D();if(typeof a===Q||typeof Request===R&&a instanceof Request||typeof URL===R&&a instanceof URL){a=fetch(a)};E(b);const {instance:c,module:d}=await C(await a,b);return F(c,d)});var C=(async(a,b)=>{if(typeof Response===R&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===R){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var r=(()=>{if(q.byteLength===O){q=new U(a.memory.buffer)};return q});var x=(a=>a===K||a===L);var c=(a=>b[a]);var G=(a=>{const b=D();E(b);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const c=new WebAssembly.Instance(a,b);return F(c,a)});var F=((b,c)=>{a=b.exports;H.__wbindgen_wasm_module=c;q=new U();y=new V();h=new N();a.__wbindgen_start();return a});var D=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbg_cachekey_b61393159c57fd7b=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/W+ P]=x(d)?O:d;r()[a/W+ O]=!x(d)});b.wbg.__wbg_subtreeid_e348577f7ef777e3=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/W+ P]=x(d)?O:d;r()[a/W+ O]=!x(d)});b.wbg.__wbg_setsubtreeid_d32e6327eef1f7fc=((a,b)=>{c(a).__yew_subtree_id=b>>>O});b.wbg.__wbg_setcachekey_80183b7cfc421143=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>O});b.wbg.__wbg_setlistenerid_3183aae8fa5840fb=((a,b)=>{c(a).__yew_listener_id=b>>>O});b.wbg.__wbg_listenerid_12315eee21527820=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/W+ P]=x(d)?O:d;r()[a/W+ O]=!x(d)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==P){b.a=O;return !0};const c=!1;return c});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new T();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ P]=g;r()[b/W+ O]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{try{console.error(j(b,c))}finally{a.__wbindgen_free(b,c)}});b.wbg.__wbg_error_71d6845bf00a930f=((b,c)=>{var d=A(b,c).slice();a.__wbindgen_free(b,c*W);console.error(...d)});b.wbg.__wbg_instanceof_Window_acc97ff9f5d2c7b4=(a=>{let b;try{b=c(a) instanceof Window}catch{b=!1}const d=b;return d});b.wbg.__wbg_document_3ead31dbcad65886=(a=>{const b=c(a).document;return x(b)?O:k(b)});b.wbg.__wbg_body_3cb4b4042b9a632b=(a=>{const b=c(a).body;return x(b)?O:k(b)});b.wbg.__wbg_createElement_976dbb84fe1661b5=function(){return B(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_createElementNS_1561aca8ee3693c0=function(){return B(((a,b,d,e,f)=>{const g=c(a).createElementNS(b===O?K:j(b,d),j(e,f));return k(g)}),arguments)};b.wbg.__wbg_createTextNode_300f845fab76642f=((a,b,d)=>{const e=c(a).createTextNode(j(b,d));return k(e)});b.wbg.__wbg_instanceof_Element_33bd126d58f2021b=(a=>{let b;try{b=c(a) instanceof Element}catch{b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_e19c7be2c60e5b5c=((b,d)=>{const e=c(d).namespaceURI;var f=x(e)?O:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/W+ P]=g;r()[b/W+ O]=f});b.wbg.__wbg_setinnerHTML_32081d8a164e6dc4=((a,b,d)=>{c(a).innerHTML=j(b,d)});b.wbg.__wbg_outerHTML_bf662bdff92e5910=((b,d)=>{const e=c(d).outerHTML;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ P]=g;r()[b/W+ O]=f});b.wbg.__wbg_children_67776b4810f38b6a=(a=>{const b=c(a).children;return k(b)});b.wbg.__wbg_removeAttribute_beaed7727852af78=function(){return B(((a,b,d)=>{c(a).removeAttribute(j(b,d))}),arguments)};b.wbg.__wbg_setAttribute_d8436c14a59ab1af=function(){return B(((a,b,d,e,f)=>{c(a).setAttribute(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_parentNode_e397bbbe28be7b28=(a=>{const b=c(a).parentNode;return x(b)?O:k(b)});b.wbg.__wbg_parentElement_0cffb3ceb0f107bd=(a=>{const b=c(a).parentElement;return x(b)?O:k(b)});b.wbg.__wbg_lastChild_a2f5ed739809bb31=(a=>{const b=c(a).lastChild;return x(b)?O:k(b)});b.wbg.__wbg_nextSibling_62338ec2a05607b4=(a=>{const b=c(a).nextSibling;return x(b)?O:k(b)});b.wbg.__wbg_setnodeValue_4077cafeefd0725e=((a,b,d)=>{c(a).nodeValue=b===O?K:j(b,d)});b.wbg.__wbg_textContent_77bd294928962f93=((b,d)=>{const e=c(d).textContent;var f=x(e)?O:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/W+ P]=g;r()[b/W+ O]=f});b.wbg.__wbg_appendChild_e513ef0e5098dfdd=function(){return B(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_insertBefore_9f2d2defb9471006=function(){return B(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return k(e)}),arguments)};b.wbg.__wbg_removeChild_6751e9ca5d9aaf00=function(){return B(((a,b)=>{const d=c(a).removeChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_target_bf704b7db7ad1387=(a=>{const b=c(a).target;return x(b)?O:k(b)});b.wbg.__wbg_bubbles_03eed164b4feeaf1=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_8c0bdf21c08f1717=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_160ed014dc4d787f=(a=>{const b=c(a).composedPath();return k(b)});b.wbg.__wbg_instanceof_ShadowRoot_76b32ccdae10a710=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch{b=!1}const d=b;return d});b.wbg.__wbg_host_57eec05a2624bc1b=(a=>{const b=c(a).host;return k(b)});b.wbg.__wbg_instanceof_HtmlInputElement_970e4026de0fccff=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch{b=!1}const d=b;return d});b.wbg.__wbg_checked_f0b666100ef39e44=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_setchecked_f1e1f3e62cdca8e7=((a,b)=>{c(a).checked=b!==O});b.wbg.__wbg_value_b2a620d34c663701=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ P]=g;r()[b/W+ O]=f});b.wbg.__wbg_setvalue_e5b519cca37d82a7=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_debug_64711eb2fc6980ef=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_error_ef9a0be47931175f=(a=>{console.error(c(a))});b.wbg.__wbg_error_00c5d571f754f629=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_info_d60a960a4e955dc2=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_log_de258f66ad9eb784=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_warn_be542501a57387a5=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbg_addEventListener_1fc744729ac6dc27=function(){return B(((a,b,d,e,f)=>{c(a).addEventListener(j(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_value_ccb32485ee1b3928=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ P]=g;r()[b/W+ O]=f});b.wbg.__wbg_setvalue_df64bc6794c098f2=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_get_57245cc7d7c7619d=((a,b)=>{const d=c(a)[b>>>O];return k(d)});b.wbg.__wbg_length_6e3bbe7c8bd4dbd8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_b5b063fc6c2f0376=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_97ae9d8645dc388b=function(){return B(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_0b9bfdd97583284e=(()=>{const a=new X();return k(a)});b.wbg.__wbg_self_6d479506f72c6a71=function(){return B((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_f2557cc78490aceb=function(){return B((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_7f206bda628d5286=function(){return B((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_ba75c50d1cf384f4=function(){return B((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===K;return b});b.wbg.__wbg_from_7ce3cb27cb258569=(a=>{const b=I.from(c(a));return k(b)});b.wbg.__wbg_is_40a66842732708e7=((a,b)=>{const d=X.is(c(a),c(b));return d});b.wbg.__wbg_resolve_99fe17964f31ffc0=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_11f7a54d67b4bfad=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_set_bf3f89b92d5a34bf=function(){return B(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ P]=g;r()[b/W+ O]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new T(j(a,b))});b.wbg.__wbindgen_closure_wrapper562=((a,b,c)=>{const d=s(a,b,272,v);return k(d)});b.wbg.__wbindgen_closure_wrapper725=((a,b,c)=>{const d=s(a,b,342,w);return k(d)});return b});var E=((a,b)=>{});var z=(()=>{if(y.byteLength===O){y=new V(a.memory.buffer)};return y});var e=(a=>{if(a<36)return;b[a]=d;d=a});var s=((b,c,d,e)=>{const f={a:b,b:c,cnt:P,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=O;try{return e(c,f.b,...b)}finally{if(--f.cnt===O){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var p=((a,b,c)=>{if(c===K){const c=n.encode(a);const d=b(c.length);i().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d);const f=i();let g=O;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==O){a=a.slice(g)};e=c(e,d,d=g+ a.length*3);const b=i().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var i=(()=>{if(h.byteLength===O){h=new N(a.memory.buffer)};return h});var j=((a,b)=>g.decode(i().subarray(a,a+ b)));var u=(a=>{if(t==P)throw new T(`out of js stack`);b[--t]=a;return t});let a;const b=new I(J).fill(K);b.push(K,L,!0,!1);let d=b.length;const g=new TextDecoder(M,{ignoreBOM:!0,fatal:!0});g.decode();let h=new N();let m=O;const n=new TextEncoder(M);const o=typeof n.encodeInto===R?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=new U();let t=J;let y=new V();export default H;export{G as initSync}