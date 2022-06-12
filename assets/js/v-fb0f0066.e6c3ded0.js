"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[170],{7105:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-fb0f0066","path":"/guide/getting-started.html","title":"Getting Started","lang":"en-US","frontmatter":{"title":"Getting Started","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.8}},"excerpt":"","headers":[{"level":2,"title":"As a dev dependency use","slug":"as-a-dev-dependency-use","children":[]},{"level":2,"title":"As global use","slug":"as-global-use","children":[]}],"git":{"updatedTime":1655021733000,"contributors":[{"name":"Zhengqbbb","email":"1074059947@qq.com","commits":1}]},"filePathRelative":"guide/getting-started.md"}')},2462:(n,a,s)=>{s.r(a),s.d(a,{default:()=>T});var t=s(7293);const e=(0,t.uE)('<h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h1><h2 id="as-a-dev-dependency-use" tabindex="-1"><a class="header-anchor" href="#as-a-dev-dependency-use" aria-hidden="true">#</a> As a dev dependency use</h2><blockquote><p>Just three simple steps:</p></blockquote><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><a href="#as-global-use">global installation</a> <code>commitizen</code>, that you can quickly use the <code>cz</code> or <code>git cz</code> command to start.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g commitizen\n</code></pre></div></div><h4 id="step-1-install-dependencies" tabindex="-1"><a class="header-anchor" href="#step-1-install-dependencies" aria-hidden="true">#</a> step 1: Install dependencies</h4>',5),o=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"npm"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)(" -D cz-git\n")])])],-1),p=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"yarn"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"add"),(0,t.Uk)(" -D cz-git\n")])])],-1),i=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"pnpm"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"install"),(0,t.Uk)(" -D cz-git\n")])])],-1),c=(0,t.uE)('<h4 id="step-2-modify-package-json-to-add-config-specify-the-adapter-used" tabindex="-1"><a class="header-anchor" href="#step-2-modify-package-json-to-add-config-specify-the-adapter-used" aria-hidden="true">#</a> step 2: Modify <code>package.json</code> to add <code>config</code> Specify the adapter used</h4><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-git&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div></div><h4 id="step-3-add-custom-configuration-optional-use-default" tabindex="-1"><a class="header-anchor" href="#step-3-add-custom-configuration-optional-use-default" aria-hidden="true">#</a> step 3: Add custom configuration (optional, use default)</h4><blockquote><p>There are <mark>two</mark> configuration methods</p></blockquote>',4),l=(0,t.Uk)("Method 1: (recommended) cz-git is linked with "),r={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("commitlint"),d=(0,t.Uk)(" to provide verification information"),g=(0,t.Uk)(", so it can be written in "),h={href:"https://github.com/conventional-changelog/commitlint#config",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("commitlint"),m=(0,t.Uk)(" configuration file. "),f=(0,t._)("br",null,null,-1),b=(0,t.Uk)(" E.g: ("),v=(0,t.Uk)("⇒ Configuration Template"),q=(0,t.Uk)(")"),y=(0,t.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js</span>\n<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;cz-git&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">rule</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token comment">//option...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div></div><p><strong>Method 2:</strong> Add custom configuration under config.commitizen under <strong>package.json</strong>, <strong>but</strong> excessive configuration items will lead to bloated package.json, which is suitable for simple customization. E.g:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git cz&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/cz-git&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;useEmoji&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br></div></div><h2 id="as-global-use" tabindex="-1"><a class="header-anchor" href="#as-global-use" aria-hidden="true">#</a> As global use</h2><blockquote><p>The advantage of global installation is that you can use <code>cz</code> or <code>git cz</code> command to start command line tools under any project to generate standardized commit messages</p></blockquote><p>Just three simple steps:</p><h4 id="step-1-install-global-dependencies" tabindex="-1"><a class="header-anchor" href="#step-1-install-global-dependencies" aria-hidden="true">#</a> step 1: Install global dependencies</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g cz-git commitizen\n</code></pre></div><h4 id="step-2-global-configuration-adapter-type" tabindex="-1"><a class="header-anchor" href="#step-2-global-configuration-adapter-type" aria-hidden="true">#</a> step 2: Global configuration adapter type</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span> <span class="token operator">&gt;</span> ~/.czrc\n</code></pre></div><h4 id="step-3-add-custom-configuration-optional-use-default-configuration" tabindex="-1"><a class="header-anchor" href="#step-3-add-custom-configuration-optional-use-default-configuration" aria-hidden="true">#</a> step 3: Add custom configuration (optional, use default configuration)</h4><blockquote><p>There are <mark>two</mark> configuration methods <br></p></blockquote><p><strong>Method 1:</strong> Edit the <code>~/.czrc</code> file to add configuration in the form of <strong>json</strong>, for example:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cz-git&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;useEmoji&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div></div>',14),_=(0,t.Uk)("Method 2: Cooperate with "),U={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},z=(0,t.Uk)("commitlint"),x=(0,t.Uk)(" to create a configuration file under the path of "),j=(0,t._)("code",null,"$HOME",-1),w=(0,t.Uk)(),E=(0,t._)("br",null,null,-1),W=(0,t.Uk)("("),A=(0,t.Uk)("↓ Configuration Template"),C=(0,t.Uk)(")"),M={},T=(0,s(8868).Z)(M,[["render",function(n,a){const s=(0,t.up)("CodeGroupItem"),M=(0,t.up)("CodeGroup"),T=(0,t.up)("ExternalLinkIcon"),D=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{title:"NPM"},{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(s,{title:"YARN"},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(s,{title:"PNPM"},{default:(0,t.w5)((()=>[i])),_:1})])),_:1}),c,(0,t._)("p",null,[(0,t._)("strong",null,[l,(0,t._)("a",r,[u,(0,t.Wm)(T)]),d]),g,(0,t._)("a",h,[k,(0,t.Wm)(T)]),m,f,b,(0,t.Wm)(D,{to:"/guide/configuration.html"},{default:(0,t.w5)((()=>[v])),_:1}),q]),y,(0,t._)("p",null,[(0,t._)("strong",null,[_,(0,t._)("a",U,[z,(0,t.Wm)(T)])]),x,j,w,E,W,(0,t.Wm)(D,{to:"/guide/configuration.html"},{default:(0,t.w5)((()=>[A])),_:1}),C])])}]])}}]);