import{_ as t,o as c,c as r,b as n,w as l,a as p,r as i,d as s,e as a,f as y}from"./app.e98151cf.js";const F=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"title":"Getting Started","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.8}},"headers":[{"level":2,"title":"As a dev dependency use","slug":"as-a-dev-dependency-use"},{"level":2,"title":"As global use","slug":"as-global-use"}],"relativePath":"guide/index.md","lastUpdated":1655362525000}'),d={name:"guide/index.md"},u=p(`<h1 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h1><h2 id="as-a-dev-dependency-use" tabindex="-1">As a dev dependency use <a class="header-anchor" href="#as-a-dev-dependency-use" aria-hidden="true">#</a></h2><blockquote><p>Just three simple steps:</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="#as-global-use">global installation</a> <code>commitizen</code>, that you can quickly use the <code>cz</code> or <code>git cz</code> command to start.</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">npm install -g commitizen</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">npm install -g commitizen</span></span>
<span class="line"></span></code></pre></div></div><h4 id="step-1-install-dependencies" tabindex="-1">step 1: Install dependencies <a class="header-anchor" href="#step-1-install-dependencies" aria-hidden="true">#</a></h4>`,5),g=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"npm install -D cz-git")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm install -D cz-git")]),a(`
`),s("span",{class:"line"})])])],-1),h=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"yarn add -D cz-git")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"yarn add -D cz-git")]),a(`
`),s("span",{class:"line"})])])],-1),A=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"pnpm install -D cz-git")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"pnpm install -D cz-git")]),a(`
`),s("span",{class:"line"})])])],-1),B=p(`<h4 id="step-2-modify-package-json-to-add-config-specify-the-adapter-used" tabindex="-1">step 2: Modify <code>package.json</code> to add <code>config</code> Specify the adapter used <a class="header-anchor" href="#step-2-modify-package-json-to-add-config-specify-the-adapter-used" aria-hidden="true">#</a></h4><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">scripts</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">config</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">commitizen</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">path</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;node_modules/cz-git&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">scripts</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">config</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">commitizen</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">path</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;node_modules/cz-git&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="step-3-add-custom-configuration-optional-use-default" tabindex="-1">step 3: Add custom configuration (optional, use default) <a class="header-anchor" href="#step-3-add-custom-configuration-optional-use-default" aria-hidden="true">#</a></h4><blockquote><p>There are <mark>two</mark> configuration methods</p></blockquote><p><strong>Method 1: (recommended) cz-git is linked with <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint</a> to provide verification information</strong>, so it can be written in <a href="https://github.com/conventional-changelog/commitlint#config" target="_blank" rel="noopener noreferrer">commitlint</a> configuration file. <br> E.g: (<a href="/config/#configure-template">\u21D2 Configuration Template</a>)</p><div class="language-js"><span class="copy"></span><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">// .commitlintrc.js</span></span>
<span class="line"><span style="color:#758575;">/** </span><span style="color:#858585;">@</span><span style="color:#CB7676;">type</span><span style="color:#758575;"> </span><span style="color:#858585;">{</span><span style="color:#A1B567;">import(&#39;cz-git&#39;).UserConfig</span><span style="color:#858585;">}</span><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#E0A569;">module</span><span style="color:#858585;">.</span><span style="color:#E0A569;">exports</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">rule</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#CB7676;">...</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">prompt</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">useEmoji</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span></span>
<span class="line"><span style="color:#858585;">    </span><span style="color:#758575;">//option...</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// .commitlintrc.js</span></span>
<span class="line"><span style="color:#A0ADA0;">/** </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">type</span><span style="color:#A0ADA0;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#6C7834;">import(&#39;cz-git&#39;).UserConfig</span><span style="color:#8E8F8B;">}</span><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#B58451;">module</span><span style="color:#8E8F8B;">.</span><span style="color:#B58451;">exports</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">rule</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#AB5959;">...</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">prompt</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">useEmoji</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span></span>
<span class="line"><span style="color:#8E8F8B;">    </span><span style="color:#A0ADA0;">//option...</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>Method 2:</strong> Add custom configuration under config.commitizen under <strong>package.json</strong>, <strong>but</strong> excessive configuration items will lead to bloated package.json, which is suitable for simple customization. E.g:</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">scripts</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">commit</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;git cz&quot;</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">config</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">commitizen</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">path</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;node_modules/cz-git&quot;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">useEmoji</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">true</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">scripts</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">commit</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;git cz&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">config</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">commitizen</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">path</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;node_modules/cz-git&quot;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">useEmoji</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">true</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="as-global-use" tabindex="-1">As global use <a class="header-anchor" href="#as-global-use" aria-hidden="true">#</a></h2><blockquote><p>The advantage of global installation is that you can use <code>cz</code> or <code>git cz</code> command to start command line tools under any project to generate standardized commit messages</p></blockquote><p>Just three simple steps:</p><h4 id="step-1-install-global-dependencies" tabindex="-1">step 1: Install global dependencies <a class="header-anchor" href="#step-1-install-global-dependencies" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">npm install -g cz-git commitizen</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">npm install -g cz-git commitizen</span></span>
<span class="line"></span></code></pre></div><h4 id="step-2-global-configuration-adapter-type" tabindex="-1">step 2: Global configuration adapter type <a class="header-anchor" href="#step-2-global-configuration-adapter-type" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">/.czrc</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/.czrc</span></span>
<span class="line"></span></code></pre></div><h4 id="step-3-add-custom-configuration-optional-use-default-configuration" tabindex="-1">step 3: Add custom configuration (optional, use default configuration) <a class="header-anchor" href="#step-3-add-custom-configuration-optional-use-default-configuration" aria-hidden="true">#</a></h4><blockquote><p>There are <mark>two</mark> configuration methods <br></p></blockquote><p><strong>Method 1:</strong> Edit the <code>~/.czrc</code> file to add configuration in the form of <strong>json</strong>, for example:</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">path</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;cz-git&quot;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">useEmoji</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">true</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">path</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;cz-git&quot;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">useEmoji</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">true</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>Method 2: Cooperate with <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint</a></strong> to create a configuration file under the path of <code>$HOME</code> <br>(<a href="/config/#configure-template">\u2193 Configuration Template</a>)</p>`,20);function D(m,b,E,f,v,q){const o=y,e=i("CodeGroup");return c(),r("div",null,[u,n(e,null,{default:l(()=>[n(o,{title:"NPM"},{default:l(()=>[g]),_:1}),n(o,{title:"YARN"},{default:l(()=>[h]),_:1}),n(o,{title:"PNPM"},{default:l(()=>[A]),_:1})]),_:1}),B])}var _=t(d,[["render",D]]);export{F as __pageData,_ as default};
