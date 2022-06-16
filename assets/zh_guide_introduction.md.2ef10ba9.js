import{_ as a,o as s,c as n,a as t,d as e}from"./app.e98151cf.js";const _=JSON.parse('{"title":"\u7B80\u4ECB","description":"","frontmatter":{"title":"\u7B80\u4ECB","sidebarDepth":0,"lastUpdated":true,"sitemap":{"priority":0.8}},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"\u7279\u70B9","slug":"\u7279\u70B9"},{"level":2,"title":"\u4F7F\u7528 cz-git \u7684\u9879\u76EE","slug":"\u4F7F\u7528-cz-git-\u7684\u9879\u76EE"},{"level":2,"title":"\u7248\u6743","slug":"\u7248\u6743"}],"relativePath":"zh/guide/introduction.md","lastUpdated":1655362525000}'),i={name:"zh/guide/introduction.md"},r=t(`<p align="center"><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img src="https://user-images.githubusercontent.com/40693636/154064210-964aeaa0-d9dc-4cea-9e52-2ffc3789611b.png" alt="cz-git-logo" width="400" data-width="400" data-height="400"></a></p><h1 align="center">cz-git</h1><p align="center"><a target="_blank" href="https://github.com/commitizen/cz-cli#adapters"><img style="display:inline-block;margin:0.2em;" alt="Commitizen-Adapter" src="https://img.shields.io/badge/Commitizen-Adapter-red.svg?logo=git&amp;style=flat"></a><br><a target="_blank" href="http://commitizen.github.io/cz-cli/"><img style="display:inline-block;margin:0.2em;" alt="commitizen-friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?logo=github"></a><a target="_blank" href="https://github.com/Zhengqbbb/cz-git"><img style="display:inline-block;margin:0.2em;" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/zhengqbbb/cz-git?style=social"></a><a target="_blank" href="https://github.com/Zhengqbbb/cz-git/actions/workflows/nodejs.yml"><img style="display:inline-block;margin:0.2em;" alt="test-ci" src="https://github.com/Zhengqbbb/cz-git/workflows/Node.js%20CI/badge.svg"></a><br><a href="https://www.npmjs.com/package/cz-git"><img style="display:inline-block;margin:0.2em;" alt="npm" src="https://img.shields.io/npm/v/cz-git?style=flat-square&amp;logo=npm"><img style="display:inline-block;margin:0.2em;" alt="npm-download" src="https://img.shields.io/npm/dm/cz-git.svg?style=flat-square&amp;logo=npm"></a><br></p><p align="center"><a href="https://github.com/Zhengqbbb/cz-git">Github</a> \xA0 | \xA0 <a href="https://cz-git.qbenben.com/guide/">Installation</a> \xA0 | \xA0 <a href="https://cz-git.qbenben.com">Website</a> \xA0 | \xA0 <a href="https://cz-git.qbenben.com/zh/">\u7B80\u4F53\u4E2D\u6587\u6587\u6863</a></p><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u4E00\u6B3E\u5DE5\u7A0B\u6027\u66F4\u5F3A\uFF0C\u8F7B\u91CF\u7EA7\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u6807\u51C6\u8F93\u51FA\u683C\u5F0F\u7684 <a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noopener noreferrer">commitizen</a> \u9002\u914D\u5668</p><p><img src="https://user-images.githubusercontent.com/40693636/165576782-a9339182-df7e-4185-aacc-212f62850f36.gif" alt="demo-gif"></p><blockquote><p>\u4EC0\u4E48\u662Fcommitizen\uFF1A\u57FA\u4E8ENode.js\u7684 <code>git commit</code> \u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8F85\u52A9\u751F\u6210\u6807\u51C6\u5316\u89C4\u8303\u5316\u7684 commit message\u3002<br><br> \u4EC0\u4E48\u662F\u9002\u914D\u5668\uFF1A\u66F4\u6362 commitizen \u547D\u4EE4\u884C\u5DE5\u5177\u7684 <strong>\u4EA4\u4E92\u65B9\u5F0F</strong> \u63D2\u4EF6\u3002</p></blockquote><h2 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>\u53CB\u597D\u578B\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C<strong>\u201C\u61D2\u5B57\u4F18\u5148\u201D</strong> \uFF01\u652F\u6301\u5728\u547D\u4EE4\u884C\u641C\u7D22\u548C\u9009\u62E9\uFF0C\u51CF\u5C11\u62FC\u5199\u9519\u8BEF\u3002</li><li><strong>\u8F7B\u91CF\u7EA7</strong>\uFF0C<strong>\u9AD8\u5EA6\u81EA\u5B9A\u4E49</strong>, \u4F46\u8F93\u51FA\u683C\u5F0F\u9075\u5FAA\u6807\u51C6\u7684 <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits" target="_blank" rel="noopener noreferrer">Angular commit</a> \u89C4\u8303\u3002</li><li><a href="/zh/recipes/#scopes">\u66F4\u597D\u7EF4\u62A4 monorepo \u5DE5\u7A0B\u5316\u9879\u76EE</a> \u4E0E <strong>commitlint</strong> \u914D\u5408\u7ED9\u4E88\u547D\u4EE4\u884C\u7684\u76F8\u5173\u6821\u9A8C\u4FE1\u606F\u3002</li><li>\u66F4\u597D\u7684\u4E0Eissue\u94FE\u63A5\uFF0C\u5C24\u5176 <a href="/zh/recipes/issuePrefixs.html">gitee</a> | \u2705 \u652F\u6301\u5728 commit \u4E2D\u6DFB\u52A0 <strong>emoji</strong>\u3002</li></ul><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">$ npm install -D cz-git</span></span>
<span class="line"><span style="color:#DBD7CA;">+ cz-git          </span><span style="color:#858585;">(</span><span style="color:#DBD7CA;">1.7 MB</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">added 1 package </span><span style="color:#4D9375;">in</span><span style="color:#DBD7CA;"> 0.461s</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">$ npm install -D cz-git</span></span>
<span class="line"><span style="color:#393A34;">+ cz-git          </span><span style="color:#8E8F8B;">(</span><span style="color:#393A34;">1.7 MB</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">added 1 package </span><span style="color:#1C6B48;">in</span><span style="color:#393A34;"> 0.461s</span></span>
<span class="line"></span></code></pre></div><p><a href="/zh/guide/why.html">\u21D2 \u4E3A\u4EC0\u4E48\u662F cz-git</a></p><p><a href="https://www.qbenben.com/post/2022/02/27/cz-git/" target="_blank" rel="noopener noreferrer">\u21D2 \u4E3A\u4EC0\u4E48\u505A\u4E86\u8FD9\u6B3E\u63D2\u4EF6\uFF1Acz-git \u53CB\u597D\u578B commitizen \u7684\u9002\u914D\u5668\uFF0C\u6211\u7684\u5F00\u53D1\u7684\u5FC3\u8DEF\u5386\u7A0B</a></p><h2 id="\u4F7F\u7528-cz-git-\u7684\u9879\u76EE" tabindex="-1">\u4F7F\u7528 cz-git \u7684\u9879\u76EE <a class="header-anchor" href="#\u4F7F\u7528-cz-git-\u7684\u9879\u76EE" aria-hidden="true">#</a></h2>`,14),l=e("table",null,[e("tr",{"border-collapse":"inherit",style:{border:"inherit"}},[e("td",{align:"center",width:"200px"},[e("a",{target:"_blank",href:"https://github.com/element-plus/element-plus"},[e("img",{src:"https://user-images.githubusercontent.com/40693636/172459748-939e3f1b-a694-4c09-b643-e1dce602105c.png",width:"40"}),e("sub",null,"Element Plus")])]),e("td",{align:"center",width:"200px"},[e("a",{target:"_blank",href:"https://github.com/Tencent/tdesign-vue-next"},[e("img",{src:"https://user-images.githubusercontent.com/40693636/170830562-38e4c998-9af4-4303-9270-4f14e0942b08.png",width:"40"}),e("sub",null,"TDesign-Vue-Next")])]),e("td",{align:"center",width:"200px"},[e("a",{target:"_blank",href:"https://github.com/IDuxFE/idux"},[e("img",{src:"https://user-images.githubusercontent.com/40693636/171067486-56f50e23-a40b-4353-9c99-6fef702c9b4b.png",width:"40"}),e("sub",null,"iDux")])]),e("td",{align:"center",width:"200px"},[e("a",{target:"_blank",href:"https://github.com/buqiyuan/vue3-antd-admin"},[e("img",{src:"https://user-images.githubusercontent.com/40693636/170830597-31d6f0d7-2c93-491b-a984-7bf21db8f75b.png",width:"40"}),e("sub",null,"Vue3-Antd-Admin")])])]),e("tr",{"border-collapse":"inherit",style:{border:"inherit"}},[e("td",{align:"center",width:"200px"},[e("a",{target:"_blank",href:"https://github.com/HalseySpicy/Geeker-Admin"},[e("img",{src:"https://user-images.githubusercontent.com/40693636/170830842-319d83ce-df67-488d-b08f-818947a5a540.png",width:"40"}),e("sub",null,"Geeker-Admin")])]),e("td",{align:"center",width:"200px"},[e("a",{target:"_blank",href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope"},[e("img",{src:"https://user-images.githubusercontent.com/40693636/170830621-45577c1d-6e6e-4916-bb43-15af954d994b.png",width:"40"}),e("sub",null,"vuepress-theme-hope")])]),e("td",{align:"center",width:"200px"},[e("a",{target:"_blank",href:"https://github.com/Renovamen/vuepress-theme-gungnir"},[e("img",{src:"https://user-images.githubusercontent.com/40693636/170830637-0d465b52-6204-4bbd-872f-fb6f27f1ed50.png",width:"40"}),e("sub",null,"vuepress-theme-gungnir")])])])],-1),o=t('<h2 id="\u7248\u6743" tabindex="-1">\u7248\u6743 <a class="header-anchor" href="#\u7248\u6743" aria-hidden="true">#</a></h2><p>MIT Copyright (c) 2022-present Qiubin Zheng <a href="mailto:zhengqbbb@gmail.com">zhengqbbb@gmail.com</a> <a href="https://github.com/Zhengqbbb" target="_blank" rel="noopener noreferrer">https://github.com/Zhengqbbb</a></p><blockquote><p>I just do my best to make thing well, Could you give a <a href="https://github.com/Zhengqbbb/cz-git" target="_blank" rel="noopener noreferrer">star \u2B50</a> to encourage me ?</p></blockquote>',3),c=[r,l,o];function g(p,h,m,b,d,u){return s(),n("div",null,c)}var z=a(i,[["render",g]]);export{_ as __pageData,z as default};
