if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>i(e,r),o={module:{uri:r},exports:c,require:l};s[r]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(a(...e),c)))}}define(["./workbox-d77e59e2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"027b4c407bef723131f039a49caab2ca"},{url:"assets/css/styles.ae39b9a7.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/158.22b41f35.js",revision:null},{url:"assets/js/188.0420ac51.js",revision:null},{url:"assets/js/217.6a0741b4.js",revision:null},{url:"assets/js/611.462d6c70.js",revision:null},{url:"assets/js/692.c77ca9e8.js",revision:null},{url:"assets/js/872.9cb8c303.js",revision:null},{url:"assets/js/app.4041d89c.js",revision:null},{url:"assets/js/runtime~app.b56e5c51.js",revision:null},{url:"assets/js/v-0538835e.5bf04b43.js",revision:null},{url:"assets/js/v-2c96a45e.b0c6c4e9.js",revision:null},{url:"assets/js/v-2d0ad528.e5cfff79.js",revision:null},{url:"assets/js/v-3706649a.547e85f9.js",revision:null},{url:"assets/js/v-37781588.562a9d11.js",revision:null},{url:"assets/js/v-37e1c06f.a9a4bb0f.js",revision:null},{url:"assets/js/v-47357bdb.d083a51e.js",revision:null},{url:"assets/js/v-4f4ccb8f.5b9b4bfb.js",revision:null},{url:"assets/js/v-6703f8cd.5548da80.js",revision:null},{url:"assets/js/v-714f65dc.a2a27043.js",revision:null},{url:"assets/js/v-81f65e84.87985fb8.js",revision:null},{url:"assets/js/v-8daa1a0e.738da211.js",revision:null},{url:"assets/js/v-abece2a2.d7b3a0ec.js",revision:null},{url:"assets/js/v-b9538b80.bc2d461f.js",revision:null},{url:"assets/js/v-c46fc206.01c4d20f.js",revision:null},{url:"assets/js/v-db05fa28.2ba1fbc3.js",revision:null},{url:"assets/js/v-fb0f0066.59ab4dd5.js",revision:null},{url:"assets/js/v-fca597be.c6818967.js",revision:null},{url:"assets/js/v-fffb8e28.f10967c1.js",revision:null},{url:"guide/configuration.html",revision:"5f81cc6368407ab5b04574322c7b6ac9"},{url:"guide/faq.html",revision:"c8257d24315b669be4f6529c9d0b3882"},{url:"guide/getting-started.html",revision:"618ac0e5877a9cceb06a6ecdd638b0bd"},{url:"guide/index.html",revision:"522a939f7df97b041f981a552a2a7c93"},{url:"guide/option-engineer.html",revision:"26a1e83e553ba9250c3b87afeaaaa0bd"},{url:"guide/options-show.html",revision:"eb134b9c3e4f3cd4311c08ce48e334d9"},{url:"guide/recipes.html",revision:"ff4a45888428567bc8fdf17aa2092f46"},{url:"guide/why.html",revision:"7bb1a81b7a9d004d9c6e808abbce4709"},{url:"images/demo.gif",revision:"3061a79e88e986f3ae37fdd3476a9be1"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114-precomposed.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120-precomposed.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144-precomposed.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152-precomposed.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180-precomposed.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72-precomposed.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"index.html",revision:"a9ea3b63153bcb68a9375c19d489b1a8"},{url:"zh/guide/configuration.html",revision:"b37988a2b31d5c7b162943af3fe83547"},{url:"zh/guide/faq.html",revision:"e03d87ce11ee73b9c72de15215c4752d"},{url:"zh/guide/getting-started.html",revision:"7ea44629879c9fcca92fed792780aaa8"},{url:"zh/guide/index.html",revision:"fcbb5d73e13492ab7d4a2b31ec66bbd2"},{url:"zh/guide/option-engineer.html",revision:"ea66fa322b3e30ddac1ea21db92f4c83"},{url:"zh/guide/options-show.html",revision:"6826de7f6b261e672abcf661536446f1"},{url:"zh/guide/recipes.html",revision:"7685b9d3350c44bd5af9faf4b6f1e7ff"},{url:"zh/guide/why.html",revision:"70a4f2c8bcbc34ebf3e5c1d336fe9305"},{url:"zh/index.html",revision:"29303f5efec9e3fca7b4caa94c92dfdf"}],{})}));
