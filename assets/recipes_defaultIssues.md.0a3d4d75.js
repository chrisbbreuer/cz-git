import{_ as s,o as a,c as n,a as l}from"./app.e98151cf.js";const d=JSON.parse('{"title":"defaultIssues","description":"","frontmatter":{},"headers":[],"relativePath":"recipes/defaultIssues.md","lastUpdated":1655362525000}'),o={name:"recipes/defaultIssues.md"},p=l(`<h1 id="defaultissues" tabindex="-1">defaultIssues <a class="header-anchor" href="#defaultissues" aria-hidden="true">#</a></h1><ul><li>Obtaining the <code>Issue Number</code> automatically, it is a very troublesome thing to repeat the query to fill in the <code>issue number</code>. <ul><li>But if the team&#39;s branch command rules are standardized (e.g: feature/issue_33)</li><li>Then we use <code>Node</code>&#39;s <code>execSync</code> to get the branch name through the command</li><li>Then process the obtained string</li><li>Then we use <code>defaultIssues</code></li><li>When using, we only need to press the <kbd>Enter</kbd> key to output the <code>Issue Number</code>, so that we can easily intercept the <code>Issue Number</code> to reduce repetitive work.</li></ul></li></ul><p><mark>Tip:</mark> We can also combine the <code>customIssuePrefixsAlign</code> configuration item to dynamically change the position of the issue prefix option.</p><div class="language-js"><span class="copy"></span><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><pre class="vp-code-dark"><code><span class="line"><span style="color:#758575;">// .commitlintrc.js </span></span>
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
<span class="line"></span></code></pre></div><p><img src="https://user-images.githubusercontent.com/40693636/162552804-132aab02-4b02-4006-9e41-aeae4f825948.gif" alt="demo-gif"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If <code>cz-git</code> detects that <code>allowCustomIssuePrefixs</code> and <code>allowEmptyIssuePrefixs</code> have very strict rules (both set to false) and the <strong>issuePrefixs selection list has only one item</strong>, it will automatically skip question and output</p></div><br><br><br><blockquote><p>Using highly customizable <code>cz-git</code> makes committing more convenient and more customary. Welcome to share.</p></blockquote>`,10),e=[p];function t(c,r,y,i,A,u){return a(),n("div",null,e)}var D=s(o,[["render",t]]);export{d as __pageData,D as default};
