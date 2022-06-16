import{_ as t,o as r,c as i,b as n,w as l,a as e,r as o,d as s,e as a}from"./app.2547c25d.js";const F=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{"title":"\u5FEB\u901F\u5F00\u59CB","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.8}},"headers":[{"level":2,"title":"\u9879\u76EE\u4E2D\u4F7F\u7528","slug":"\u9879\u76EE\u4E2D\u4F7F\u7528"},{"level":2,"title":"\u5168\u5C40\u4F7F\u7528","slug":"\u5168\u5C40\u4F7F\u7528"}],"relativePath":"guide/index.md","lastUpdated":1655362525000}'),y={name:"guide/index.md"},d=e(`<h1 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1">\u9879\u76EE\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u9879\u76EE\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u53EA\u9700\u8981\u7B80\u5355\u7684\u4E09\u4E2A\u6B65\u9AA4:</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="#%E5%85%A8%E5%B1%80%E4%BD%BF%E7%94%A8">\u5168\u5C40\u5B89\u88C5</a> <code>commitizen</code>,\u5982\u6B64\u4E00\u6765\u53EF\u4EE5\u5FEB\u901F\u4F7F\u7528 <code>cz</code> \u6216 <code>git cz</code> \u547D\u4EE4\u8FDB\u884C\u542F\u52A8\u3002</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">npm install -g commitizen</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">npm install -g commitizen</span></span>
<span class="line"></span></code></pre></div></div><h4 id="step-1-\u4E0B\u8F7D\u4F9D\u8D56" tabindex="-1">step 1: \u4E0B\u8F7D\u4F9D\u8D56 <a class="header-anchor" href="#step-1-\u4E0B\u8F7D\u4F9D\u8D56" aria-hidden="true">#</a></h4>`,5),B=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"npm install -D cz-git")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"npm install -D cz-git")]),a(`
`),s("span",{class:"line"})])])],-1),h=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"yarn add -D cz-git")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"yarn add -D cz-git")]),a(`
`),s("span",{class:"line"})])])],-1),A=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"pnpm install -D cz-git")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"pnpm install -D cz-git")]),a(`
`),s("span",{class:"line"})])])],-1),u=e(`<h4 id="step-2-\u4FEE\u6539-package-json-\u6DFB\u52A0-config-\u6307\u5B9A\u4F7F\u7528\u7684\u9002\u914D\u5668" tabindex="-1">step 2: \u4FEE\u6539 <code>package.json</code> \u6DFB\u52A0 <code>config</code> \u6307\u5B9A\u4F7F\u7528\u7684\u9002\u914D\u5668 <a class="header-anchor" href="#step-2-\u4FEE\u6539-package-json-\u6DFB\u52A0-config-\u6307\u5B9A\u4F7F\u7528\u7684\u9002\u914D\u5668" aria-hidden="true">#</a></h4><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
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
<span class="line"></span></code></pre></div><h4 id="step-3-\u6DFB\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E-\u53EF\u9009\uFF0C\u4F7F\u7528\u9ED8\u8BA4" tabindex="-1">step 3: \u6DFB\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E(\u53EF\u9009\uFF0C\u4F7F\u7528\u9ED8\u8BA4) <a class="header-anchor" href="#step-3-\u6DFB\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E-\u53EF\u9009\uFF0C\u4F7F\u7528\u9ED8\u8BA4" aria-hidden="true">#</a></h4><blockquote><p>\u6709<mark>\u4E24\u79CD</mark>\u914D\u7F6E\u65B9\u5F0F</p></blockquote><p><strong>\u65B9\u5F0F\u4E00: (\u63A8\u8350) cz-git \u4E0E <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint</a> \u8FDB\u884C\u8054\u52A8\u7ED9\u4E88\u6821\u9A8C\u4FE1\u606F</strong>\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7F16\u5199\u4E8E <a href="https://github.com/conventional-changelog/commitlint#config" target="_blank" rel="noopener noreferrer">commitlint</a> \u914D\u7F6E\u6587\u4EF6\u4E4B\u4E2D\u3002<br>\u4F8B\u5982: (<a href="/zh/config/">\u21D2 \u914D\u7F6E\u6A21\u677F</a>)</p><div class="language-js"><span class="copy"></span><div class="highlight-lines"><br><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">// .commitlintrc.js</span></span>
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
<span class="line"></span></code></pre></div><p><strong>\u65B9\u5F0F\u4E8C:</strong> \u5728 <strong>package.json</strong> \u4E0B config.commitizen \u4E0B\u6DFB\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u4F46\u8FC7\u91CF\u7684\u914D\u7F6E\u9879\u4F1A\u5BFC\u81F4 package.json \u81C3\u80BF\uFF0C\u9002\u5408\u7B80\u5355\u81EA\u5B9A\u4E49\u3002\u4F8B\u5982:</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
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
<span class="line"></span></code></pre></div><h2 id="\u5168\u5C40\u4F7F\u7528" tabindex="-1">\u5168\u5C40\u4F7F\u7528 <a class="header-anchor" href="#\u5168\u5C40\u4F7F\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u5168\u5C40\u5B89\u88C5\u7684\u597D\u5904\u5728\u4E8E\uFF1A\u5728\u4EFB\u4F55\u9879\u76EE\u4E0B\u90FD\u53EF\u4EE5\u5229\u7528 <code>cz</code> \u6216 <code>git cz</code> \u547D\u4EE4\u542F\u52A8\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u751F\u6210\u6807\u51C6\u5316 commit message</p></blockquote><p>\u53EA\u9700\u8981\u7B80\u5355\u7684\u4E09\u4E2A\u6B65\u9AA4\uFF1A</p><h4 id="step-1-\u4E0B\u8F7D\u5168\u5C40\u4F9D\u8D56" tabindex="-1">step 1: \u4E0B\u8F7D\u5168\u5C40\u4F9D\u8D56 <a class="header-anchor" href="#step-1-\u4E0B\u8F7D\u5168\u5C40\u4F9D\u8D56" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#DBD7CA;">npm install -g cz-git commitizen</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#393A34;">npm install -g cz-git commitizen</span></span>
<span class="line"></span></code></pre></div><h4 id="step-2-\u5168\u5C40\u914D\u7F6E\u9002\u914D\u5668\u7C7B\u578B" tabindex="-1">step 2: \u5168\u5C40\u914D\u7F6E\u9002\u914D\u5668\u7C7B\u578B <a class="header-anchor" href="#step-2-\u5168\u5C40\u914D\u7F6E\u9002\u914D\u5668\u7C7B\u578B" aria-hidden="true">#</a></h4><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#E0A569;">echo</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;">/.czrc</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#B58451;">echo</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">&gt;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~</span><span style="color:#393A34;">/.czrc</span></span>
<span class="line"></span></code></pre></div><h4 id="step-3-\u6DFB\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E-\u53EF\u9009\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E" tabindex="-1">step 3: \u6DFB\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E(\u53EF\u9009\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E) <a class="header-anchor" href="#step-3-\u6DFB\u52A0\u81EA\u5B9A\u4E49\u914D\u7F6E-\u53EF\u9009\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E" aria-hidden="true">#</a></h4><blockquote><p>\u6709 <mark>\u4E24\u79CD</mark> \u914D\u7F6E\u65B9\u5F0F <br></p></blockquote><p><strong>\u65B9\u5F0F\u4E00:</strong> \u7F16\u8F91 <code>~/.czrc</code> \u6587\u4EF6\u4EE5 <mark>json</mark> \u5F62\u5F0F\u6DFB\u52A0\u914D\u7F6E, \u4F8B\u5982:</p><div class="language-json"><span class="copy"></span><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">path</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;cz-git&quot;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">&quot;</span><span style="color:#E0A569;">useEmoji</span><span style="color:#858585;">&quot;</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">true</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">path</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;cz-git&quot;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">&quot;</span><span style="color:#B58451;">useEmoji</span><span style="color:#8E8F8B;">&quot;</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">true</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u65B9\u5F0F\u4E8C: \u4E0E <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">commitlint</a> \u914D\u5408</strong>\uFF0C\u5728 <code>$HOME</code> \u8DEF\u5F84\u4E0B\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6 <br>(<a href="/zh/config/">\u2193 \u914D\u7F6E\u6A21\u677F</a>)</p>`,20);function g(D,E,b,m,q,v){const p=o("CodeGroupItem"),c=o("CodeGroup");return r(),i("div",null,[d,n(c,null,{default:l(()=>[n(p,{title:"NPM"},{default:l(()=>[B]),_:1}),n(p,{title:"YARN"},{default:l(()=>[h]),_:1}),n(p,{title:"PNPM"},{default:l(()=>[A]),_:1})]),_:1}),u])}var _=t(y,[["render",g]]);export{F as __pageData,_ as default};
