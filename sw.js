if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const u=e=>i(e,a),o={module:{uri:a},exports:r,require:u};s[a]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(l(...e),r)))}}define(["./workbox-178644a4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.a0936af0.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.287689a8.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.bc169175.js",revision:null},{url:"assets/config_engineer.md.620dea35.js",revision:null},{url:"assets/config_engineer.md.620dea35.lean.js",revision:null},{url:"assets/config_index.md.ece102c1.js",revision:null},{url:"assets/config_index.md.ece102c1.lean.js",revision:null},{url:"assets/config_show.md.1871ff8a.js",revision:null},{url:"assets/config_show.md.1871ff8a.lean.js",revision:null},{url:"assets/faq_index.md.167a8056.js",revision:null},{url:"assets/faq_index.md.167a8056.lean.js",revision:null},{url:"assets/guide_index.md.85a85c23.js",revision:null},{url:"assets/guide_index.md.85a85c23.lean.js",revision:null},{url:"assets/guide_introduction.md.1fc69463.js",revision:null},{url:"assets/guide_introduction.md.1fc69463.lean.js",revision:null},{url:"assets/guide_why.md.012a5833.js",revision:null},{url:"assets/guide_why.md.012a5833.lean.js",revision:null},{url:"assets/index.md.5ef18aa8.js",revision:null},{url:"assets/index.md.5ef18aa8.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.b36200f1.js",revision:null},{url:"assets/recipes_defaultIssues.md.b36200f1.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.6691f42e.js",revision:null},{url:"assets/recipes_defaultScope.md.6691f42e.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.a3348896.js",revision:null},{url:"assets/recipes_defaultSubject.md.a3348896.lean.js",revision:null},{url:"assets/recipes_index.md.36f46b15.js",revision:null},{url:"assets/recipes_index.md.36f46b15.lean.js",revision:null},{url:"assets/style.cef9e524.css",revision:null},{url:"assets/zh_config_engineer.md.7426fcce.js",revision:null},{url:"assets/zh_config_engineer.md.7426fcce.lean.js",revision:null},{url:"assets/zh_config_index.md.f952fcf6.js",revision:null},{url:"assets/zh_config_index.md.f952fcf6.lean.js",revision:null},{url:"assets/zh_config_show.md.b5615c37.js",revision:null},{url:"assets/zh_config_show.md.b5615c37.lean.js",revision:null},{url:"assets/zh_faq_index.md.2da6472a.js",revision:null},{url:"assets/zh_faq_index.md.2da6472a.lean.js",revision:null},{url:"assets/zh_guide_index.md.8cc42e3b.js",revision:null},{url:"assets/zh_guide_index.md.8cc42e3b.lean.js",revision:null},{url:"assets/zh_guide_introduction.md.eaf5d1aa.js",revision:null},{url:"assets/zh_guide_introduction.md.eaf5d1aa.lean.js",revision:null},{url:"assets/zh_guide_why.md.0734976b.js",revision:null},{url:"assets/zh_guide_why.md.0734976b.lean.js",revision:null},{url:"assets/zh_index.md.66b044b6.js",revision:null},{url:"assets/zh_index.md.66b044b6.lean.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.98d9e33e.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.98d9e33e.lean.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.0081c5ed.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.0081c5ed.lean.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.c0c1cfee.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.c0c1cfee.lean.js",revision:null},{url:"assets/zh_recipes_index.md.a534e001.js",revision:null},{url:"assets/zh_recipes_index.md.a534e001.lean.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.7922684e.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.7922684e.lean.js",revision:null},{url:"favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"robots.txt",revision:"783edf35434b069e017ded24fb198441"},{url:"images/favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"images/logo.svg",revision:"0208e57e8e610551cbfca75b2ecb763b"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"manifest.webmanifest",revision:"bae1860699bd4a076b706f1b5e6b6774"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
