if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const u=e=>i(e,r),o={module:{uri:r},exports:a,require:u};s[r]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(l(...e),a)))}}define(["./workbox-178644a4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.a0936af0.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.287689a8.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.bc169175.js",revision:null},{url:"assets/config_engineer.md.e1df2604.js",revision:null},{url:"assets/config_engineer.md.e1df2604.lean.js",revision:null},{url:"assets/config_index.md.86f60857.js",revision:null},{url:"assets/config_index.md.86f60857.lean.js",revision:null},{url:"assets/config_show.md.37939c23.js",revision:null},{url:"assets/config_show.md.37939c23.lean.js",revision:null},{url:"assets/faq_index.md.cbfbc776.js",revision:null},{url:"assets/faq_index.md.cbfbc776.lean.js",revision:null},{url:"assets/guide_index.md.204be29e.js",revision:null},{url:"assets/guide_index.md.204be29e.lean.js",revision:null},{url:"assets/guide_introduction.md.ce4454f1.js",revision:null},{url:"assets/guide_introduction.md.ce4454f1.lean.js",revision:null},{url:"assets/guide_why.md.9a6dbc76.js",revision:null},{url:"assets/guide_why.md.9a6dbc76.lean.js",revision:null},{url:"assets/index.md.f34f4936.js",revision:null},{url:"assets/index.md.f34f4936.lean.js",revision:null},{url:"assets/recipes_defaultIssues.md.55832720.js",revision:null},{url:"assets/recipes_defaultIssues.md.55832720.lean.js",revision:null},{url:"assets/recipes_defaultScope.md.86f5a976.js",revision:null},{url:"assets/recipes_defaultScope.md.86f5a976.lean.js",revision:null},{url:"assets/recipes_defaultSubject.md.1f2a3518.js",revision:null},{url:"assets/recipes_defaultSubject.md.1f2a3518.lean.js",revision:null},{url:"assets/recipes_index.md.c4a75fe9.js",revision:null},{url:"assets/recipes_index.md.c4a75fe9.lean.js",revision:null},{url:"assets/style.cef9e524.css",revision:null},{url:"assets/zh_config_engineer.md.a63623e2.js",revision:null},{url:"assets/zh_config_engineer.md.a63623e2.lean.js",revision:null},{url:"assets/zh_config_index.md.4c7df3a3.js",revision:null},{url:"assets/zh_config_index.md.4c7df3a3.lean.js",revision:null},{url:"assets/zh_config_show.md.f2806b01.js",revision:null},{url:"assets/zh_config_show.md.f2806b01.lean.js",revision:null},{url:"assets/zh_faq_index.md.6c497186.js",revision:null},{url:"assets/zh_faq_index.md.6c497186.lean.js",revision:null},{url:"assets/zh_guide_index.md.10f3bb98.js",revision:null},{url:"assets/zh_guide_index.md.10f3bb98.lean.js",revision:null},{url:"assets/zh_guide_introduction.md.df6f5cce.js",revision:null},{url:"assets/zh_guide_introduction.md.df6f5cce.lean.js",revision:null},{url:"assets/zh_guide_why.md.104578e8.js",revision:null},{url:"assets/zh_guide_why.md.104578e8.lean.js",revision:null},{url:"assets/zh_index.md.a419b331.js",revision:null},{url:"assets/zh_index.md.a419b331.lean.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.f41e2fe0.js",revision:null},{url:"assets/zh_recipes_defaultIssues.md.f41e2fe0.lean.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.fde06bac.js",revision:null},{url:"assets/zh_recipes_defaultScope.md.fde06bac.lean.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.73bc9cfa.js",revision:null},{url:"assets/zh_recipes_defaultSubject.md.73bc9cfa.lean.js",revision:null},{url:"assets/zh_recipes_index.md.1d015295.js",revision:null},{url:"assets/zh_recipes_index.md.1d015295.lean.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.ec0e2820.js",revision:null},{url:"assets/zh_recipes_issuePrefixs.md.ec0e2820.lean.js",revision:null},{url:"favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"robots.txt",revision:"783edf35434b069e017ded24fb198441"},{url:"images/favicon.ico",revision:"6c28eda9c7fbf36cadd6b87094135c97"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"images/logo.svg",revision:"0208e57e8e610551cbfca75b2ecb763b"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"manifest.webmanifest",revision:"bae1860699bd4a076b706f1b5e6b6774"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]}))}));
