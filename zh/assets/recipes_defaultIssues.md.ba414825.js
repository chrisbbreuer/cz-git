import{_ as s,o as a,c as n,a as l}from"./app.2547c25d.js";const d=JSON.parse('{"title":"defaultIssues","description":"","frontmatter":{},"headers":[],"relativePath":"recipes/defaultIssues.md","lastUpdated":1655362525000}'),p={name:"recipes/defaultIssues.md"},o=l(`<h1 id="defaultissues" tabindex="-1">defaultIssues <a class="header-anchor" href="#defaultissues" aria-hidden="true">#</a></h1><ul><li>\u81EA\u52A8\u83B7\u53D6 <code>Issue Number</code>\uFF0C\u91CD\u590D\u67E5\u8BE2\u586B\u5199<code>issue number</code> \u662F\u4E00\u4EF6\u5F88\u9EBB\u70E6\u7684\u4E8B\u60C5\uFF0C\u5C24\u5176\u5728 gitee \u53CD\u4EBA\u7C7B\u8BBE\u8BA1 <ul><li>\u4F46\u662F\u5982\u679C\u89C4\u8303\u4E86\u56E2\u961F\u7684\u5206\u652F\u547D\u4EE4\u89C4\u5219(e.g: fix/issue_33)</li><li>\u7136\u540E\u6211\u4EEC\u5229\u7528 <code>Node</code> \u7684 <code>execSync</code> \u901A\u8FC7\u547D\u4EE4\u83B7\u53D6\u5230\u5206\u652F\u540D</li><li>\u518D\u5BF9\u83B7\u53D6\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u5904\u7406</li><li>\u63A5\u7740\u6211\u4EEC\u5229\u7528 <code>defaultIssues</code></li><li>\u4F7F\u7528\u65F6\u6211\u4EEC\u53EA\u9700\u8981\u6309\u4E0B <kbd>\u56DE\u8F66</kbd> \u952E\u5C31\u53EF\u4EE5\u8F93\u51FA<code>Issue Number</code>,\u5982\u6B64\u4E00\u6765\u6211\u4EEC\u53EF\u4EE5\u5F88\u65B9\u4FBF\u622A\u53D6\u5230 <code>Issue Number</code> \u51CF\u5C11\u91CD\u590D\u6027\u5DE5\u4F5C\u3002</li></ul></li></ul><p><mark>\u63D0\u793A:</mark> \u6211\u4EEC\u4E5F\u53EF\u4EE5\u7ED3\u5408 <code>customIssuePrefixsAlign</code> \u914D\u7F6E\u9879\u6765\u52A8\u6001\u6539\u53D8 issue \u524D\u7F00\u7684\u9009\u62E9\u9879\u4F4D\u7F6E</p><div class="language-js"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">// .commitlintrc.js </span></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">execSync</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">}</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">require</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;child_process&#39;</span><span style="color:#858585;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// @tip: git branch name = feature/issue_33   =&gt;    auto get defaultIssues = #33</span></span>
<span class="line"><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">issue</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">execSync</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;git rev-parse --abbrev-ref HEAD&#39;</span><span style="color:#858585;">)</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">.</span><span style="color:#A1B567;">toString</span><span style="color:#858585;">()</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">.</span><span style="color:#A1B567;">trim</span><span style="color:#858585;">()</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">.</span><span style="color:#A1B567;">split</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&quot;_&quot;</span><span style="color:#858585;">)[</span><span style="color:#6394BF;">1</span><span style="color:#858585;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">/** </span><span style="color:#858585;">@</span><span style="color:#CB7676;">type</span><span style="color:#758575;"> </span><span style="color:#858585;">{</span><span style="color:#A1B567;">import(&#39;cz-git&#39;).UserConfig</span><span style="color:#858585;">}</span><span style="color:#758575;"> */</span></span>
<span class="line"><span style="color:#E0A569;">module</span><span style="color:#858585;">.</span><span style="color:#E0A569;">exports</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">prompt</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">customIssuePrefixsAlign</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!</span><span style="color:#B8A965;">issue</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;top&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;bottom&quot;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">defaultIssues</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!</span><span style="color:#B8A965;">issue</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">?</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;&quot;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">\`#</span><span style="color:#858585;">\${</span><span style="color:#C98A7D;">issue</span><span style="color:#858585;">}</span><span style="color:#C98A7D;">\`</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">};</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// .commitlintrc.js </span></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">execSync</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">}</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B58451;">require</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;child_process&#39;</span><span style="color:#8E8F8B;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// @tip: git branch name = feature/issue_33   =&gt;    auto get defaultIssues = #33</span></span>
<span class="line"><span style="color:#393A34;"> </span><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">issue</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">execSync</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;git rev-parse --abbrev-ref HEAD&#39;</span><span style="color:#8E8F8B;">)</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">toString</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">trim</span><span style="color:#8E8F8B;">()</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">split</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&quot;_&quot;</span><span style="color:#8E8F8B;">)[</span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">/** </span><span style="color:#8E8F8B;">@</span><span style="color:#AB5959;">type</span><span style="color:#A0ADA0;"> </span><span style="color:#8E8F8B;">{</span><span style="color:#6C7834;">import(&#39;cz-git&#39;).UserConfig</span><span style="color:#8E8F8B;">}</span><span style="color:#A0ADA0;"> */</span></span>
<span class="line"><span style="color:#B58451;">module</span><span style="color:#8E8F8B;">.</span><span style="color:#B58451;">exports</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">prompt</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">customIssuePrefixsAlign</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!</span><span style="color:#8C862B;">issue</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;top&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;bottom&quot;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">defaultIssues</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!</span><span style="color:#8C862B;">issue</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">?</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;&quot;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">\`#</span><span style="color:#8E8F8B;">\${</span><span style="color:#B56959;">issue</span><span style="color:#8E8F8B;">}</span><span style="color:#B56959;">\`</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">};</span></span>
<span class="line"></span></code></pre></div><p><img src="https://user-images.githubusercontent.com/40693636/162552804-132aab02-4b02-4006-9e41-aeae4f825948.gif" alt="demo-gif"></p><br><br><br><blockquote><p>\u5229\u7528\u53EF\u9AD8\u5EA6\u53EF\u5B9A\u5236\u7684 <code>cz-git</code> \u8BA9 commit \u66F4\u65B9\u4FBF\uFF0C\u66F4\u5951\u5408\u4E60\u60EF\uFF0C\u6B22\u8FCE\u5206\u4EAB\u3002</p></blockquote>`,9),e=[o];function t(c,r,y,i,A,B){return a(),n("div",null,e)}var D=s(p,[["render",t]]);export{d as __pageData,D as default};
