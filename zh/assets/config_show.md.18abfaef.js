import{_ as s,o,c as e,a as t}from"./app.2547c25d.js";const m=JSON.parse('{"title":"\u663E\u793A\u76F8\u5173","description":"","frontmatter":{"title":"\u663E\u793A\u76F8\u5173","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.6}},"headers":[{"level":2,"title":"messages","slug":"messages"},{"level":2,"title":"themeColorCode","slug":"themecolorcode"},{"level":2,"title":"types","slug":"types"},{"level":2,"title":"typesAppend","slug":"typesappend"},{"level":2,"title":"useEmoji","slug":"useemoji"},{"level":2,"title":"customScopesAlign","slug":"customscopesalign"},{"level":2,"title":"customScopesAlias","slug":"customscopesalias"},{"level":2,"title":"emptyScopesAlias","slug":"emptyscopesalias"},{"level":2,"title":"customIssuePrefixsAlign","slug":"customissueprefixsalign"},{"level":2,"title":"customIssuePrefixsAlias","slug":"customissueprefixsalias"},{"level":2,"title":"emptyIssuePrefixsAlias","slug":"emptyissueprefixsalias"},{"level":2,"title":"confirmColorize","slug":"confirmcolorize"},{"level":2,"title":"defaultType","slug":"defaulttype"},{"level":2,"title":"defaultScope","slug":"defaultscope"},{"level":2,"title":"defaultSubject","slug":"defaultsubject"},{"level":2,"title":"defaultBody","slug":"defaultbody"},{"level":2,"title":"defaultIssues","slug":"defaultissues"}],"relativePath":"config/show.md","lastUpdated":1655362525000}'),l={name:"config/show.md"},a=t(`<h1 id="\u914D\u7F6E-\u663E\u793A\u76F8\u5173" tabindex="-1">\u914D\u7F6E - \u663E\u793A\u76F8\u5173 <a class="header-anchor" href="#\u914D\u7F6E-\u663E\u793A\u76F8\u5173" aria-hidden="true">#</a></h1><h2 id="messages" tabindex="-1">messages <a class="header-anchor" href="#messages" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49\u547D\u4EE4\u884C\u63D0\u95EE\u4FE1\u606F</li><li><strong>\u4F8B\u5B50</strong> : <br><code>messages: { type: &quot;type: &quot;\u9009\u62E9\u4F60\u7684\u63D0\u4EA4\u7C7B\u578B:&quot; }</code></li></ul><h2 id="themecolorcode" tabindex="-1">themeColorCode <a class="header-anchor" href="#themecolorcode" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : set prompt inquirer theme color</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;&quot;</code> (\u21D2 cyan \u9752\u8272)</li><li><strong>\u89C4\u5219</strong>: <code>38;5;\${color_code}</code><br> \u21D2 <code>color_code</code> \u53EF\u4EE5\u901A\u8FC7\u94FE\u63A5\u67E5\u770B\u83B7\u53D6 <a href="https://github.com/sindresorhus/xterm-colors" target="_blank" rel="noopener noreferrer">https://github.com/sindresorhus/xterm-colors</a></li><li><strong>\u4F8B\u5B50</strong>: <code>&quot;38;5;043&quot;</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F60\u4E0D\u60F3\u8981\u91C7\u7528\u914D\u7F6E\u8BB0\u5F55\u7684\u4E3B\u9898\u8272\uFF0C\u53EF\u4EE5\u5728<code>~/.bashrc</code> \u6216\u8005 <code>~/.zshrc</code> \u7B49profile\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u884C\uFF0C\u5176\u4F18\u5148\u7EA7\u4F1A\u66F4\u9AD8:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> ___X_CMD_THEME_COLOR_CODE=</span><span style="color:#C98A7D;">&quot;38;5;043&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> ___X_CMD_THEME_COLOR_CODE=</span><span style="color:#B56959;">&quot;38;5;043&quot;</span></span>
<span class="line"></span></code></pre></div></div><h2 id="types" tabindex="-1">types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49\u9009\u62E9<strong>\u7C7B\u578B</strong>\u63D0\u793A</li><li><strong>\u7C7B\u578B</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>\u4F8B\u5B50</strong> : <br><code>types: [{value: &#39;feat&#39;, name: &#39;feat: \u65B0\u589E\u529F\u80FD | A new feature&#39;, emoji: &#39;:sparkles:&#39;}]</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u8981\u4F7F\u7528 Emoji \u9700\u8981 <mark>\u5F00\u542F</mark> <code>userEmoji</code> \u914D\u7F6E\u9879\u3002<br><mark>\u5E76\u4E14\u9700\u6DFB\u52A0 Emoji Code</mark>\uFF0C\u53EF\u4EE5\u5728: <a href="https://gitmoji.dev/" target="_blank" rel="noopener noreferrer">https://gitmoji.dev/</a> \u67E5\u627E\u76F8\u5E94\u7684\u5B57\u7B26\u8FDB\u884C\u8865\u5145\u5230 <code>emoji</code>\u3002</p></div><h2 id="typesappend" tabindex="-1">typesAppend <a class="header-anchor" href="#typesappend" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5728\u9ED8\u8BA4 types \u7684\u57FA\u7840\u4E0A\uFF0C\u6DFB\u52A0\u989D\u5916\u7684 types</li><li><strong>\u7C7B\u578B</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>\u4F7F\u7528</strong> : <strong>\u53EA\u60F3\u989D\u5916\u6DFB\u52A0\u5C11\u91CFtypes</strong>\uFF0C\u4E0D\u60F3\u6DFB\u52A0\u81C3\u80BF\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u6216\u6539\u53D8\u9ED8\u8BA4\u914D\u7F6E\u7684\u663E\u793A\u987A\u5E8F\u65F6\u4F7F\u7528\u3002</li><li><strong>\u9ED8\u8BA4</strong> : <code>[]</code></li><li><strong>\u4F8B\u5B50</strong> : <br></li></ul><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#A1B567;">typesAppend</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">value</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;workflow&quot;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;workflow:  Workflow changes&quot;</span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">value</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;*!&quot;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;">       </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;*!:        BREAKING CHANGES&quot;</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6C7834;">typesAppend</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">value</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;workflow&quot;</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;workflow:  Workflow changes&quot;</span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">value</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;*!&quot;</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;">       </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;*!:        BREAKING CHANGES&quot;</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="useemoji" tabindex="-1">useEmoji <a class="header-anchor" href="#useemoji" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u662F\u5426\u5F00\u542F commit message \u5E26\u6709 Emoji \u5B57\u7B26\u3002</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>false</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5C1D\u8BD5\u8FD0\u884C <code>emoji=1 cz</code> <strong>\u53EF\u5728\u5F53\u524D\u4F1A\u8BDD\u76F4\u63A5\u5F00\u542F\u8F93\u51FA emoji \u6A21\u5F0F</strong></p></div><h2 id="customscopesalign" tabindex="-1">customScopesAlign <a class="header-anchor" href="#customscopesalign" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u8BBE\u7F6E <strong>\u9009\u62E9\u8303\u56F4</strong> \u4E2D \u4E3A\u7A7A\u9009\u9879(empty) \u548C \u81EA\u5B9A\u4E49\u9009\u9879(custom) \u7684 <strong>\u4F4D\u7F6E</strong></li><li><strong>\u7C7B\u578B</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;bottom&quot;</code></li></ul><h2 id="customscopesalias" tabindex="-1">customScopesAlias <a class="header-anchor" href="#customscopesalias" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49 <strong>\u9009\u62E9\u8303\u56F4</strong> \u4E2D \u81EA\u5B9A\u4E49\u9009\u9879(custom) \u5728\u547D\u4EE4\u884C\u4E2D\u663E\u793A\u7684 <strong>\u540D\u79F0</strong></li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>custom</code></li></ul><h2 id="emptyscopesalias" tabindex="-1">emptyScopesAlias <a class="header-anchor" href="#emptyscopesalias" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49 <strong>\u9009\u62E9\u8303\u56F4</strong> \u4E2D \u4E3A\u7A7A\u9009\u9879(empty) \u5728\u547D\u4EE4\u884C\u4E2D\u663E\u793A\u7684 <strong>\u540D\u79F0</strong></li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>empty</code></li></ul><h2 id="customissueprefixsalign" tabindex="-1">customIssuePrefixsAlign <a class="header-anchor" href="#customissueprefixsalign" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u8BBE\u7F6E <strong>\u9009\u62E9 issue \u524D\u7F00</strong> \u4E2D \u8DF3\u8FC7\u9009\u9879(skip) \u548C \u81EA\u5B9A\u4E49\u9009\u9879(custom) \u7684 <strong>\u4F4D\u7F6E</strong></li><li><strong>\u7C7B\u578B</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;top&quot;</code></li></ul><h2 id="customissueprefixsalias" tabindex="-1">customIssuePrefixsAlias <a class="header-anchor" href="#customissueprefixsalias" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49 <strong>\u9009\u62E9 issue \u524D\u7F00</strong> \u4E2D \u81EA\u5B9A\u4E49\u9009\u9879(custom) \u5728\u547D\u4EE4\u884C\u4E2D\u663E\u793A\u7684 <strong>\u540D\u79F0</strong></li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>custom</code></li></ul><h2 id="emptyissueprefixsalias" tabindex="-1">emptyIssuePrefixsAlias <a class="header-anchor" href="#emptyissueprefixsalias" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u81EA\u5B9A\u4E49 <strong>\u9009\u62E9 issue \u524D\u7F00</strong> \u4E2D \u8DF3\u8FC7\u9009\u9879(skip) \u5728\u547D\u4EE4\u884C\u4E2D\u663E\u793A\u7684 <strong>\u540D\u79F0</strong></li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>skip</code></li></ul><h2 id="confirmcolorize" tabindex="-1">confirmColorize <a class="header-anchor" href="#confirmcolorize" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u786E\u5B9A\u63D0\u4EA4\u4E2D\u6A21\u677F commit message \u662F\u5426\u7740\u8272</li><li><strong>\u7C7B\u578B</strong> : <code>boolean</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>true</code></li></ul><hr><br><br><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4F7F\u7528<mark>\u9ED8\u8BA4\u503C</mark>\u53EF\u4EE5\u4EA7\u751F\u5F88\u591A\u79CD\u73A9\u6CD5\u8BA9\u5DE5\u5177\u66F4\u5951\u5408\u4F60\u6216\u56E2\u961F\u7684\u4E60\u60EF\uFF0C<a href="/zh/recipes/defaultScope.html">\u21D2 \u67E5\u770B\u5C0F\u7A8D\u95E8</a></p></div><h2 id="defaulttype" tabindex="-1">defaultType <a class="header-anchor" href="#defaulttype" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5982\u679C defaultType \u4E0E\u5728\u9009\u62E9\u8303\u56F4\u5217\u8868\u9879\u4E2D\u7684 value \u76F8\u5339\u914D\u5C31\u4F1A\u8FDB\u884C\u661F\u6807\u7F6E\u9876\u64CD\u4F5C\u3002</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;&quot;</code></li></ul><h2 id="defaultscope" tabindex="-1">defaultScope <a class="header-anchor" href="#defaultscope" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5728 <strong>\u81EA\u5B9A\u4E49\u8303\u56F4</strong> \u4E2D\u662F\u5426\u4F7F\u7528\u663E\u793A\u9ED8\u8BA4\u503C</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;&quot;</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u4F60\u60F3\u8981\u547D\u4EE4\u884C\u4E2D\u51FA\u73B0\u7684\u9ED8\u8BA4\u503C\u53EA\u9700\u8981\u6309\u4E0B <kbd>\u56DE\u8F66</kbd> \u952E\u5373\u53EF\u8F93\u51FA</li></ul><p><mark>\u63D0\u793A:</mark> \u5982\u679C defaultScope \u4E0E\u5728\u9009\u62E9\u8303\u56F4\u5217\u8868\u9879\u4E2D\u7684 value \u76F8\u5339\u914D\u5C31\u4F1A\u8FDB\u884C\u661F\u6807\u7F6E\u9876\u64CD\u4F5C\u3002</p><h2 id="defaultsubject" tabindex="-1">defaultSubject <a class="header-anchor" href="#defaultsubject" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5728 <strong>\u7B80\u77ED\u63CF\u8FF0</strong> \u4E2D\u662F\u5426\u4F7F\u7528\u663E\u793A\u9ED8\u8BA4\u503C</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;&quot;</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u4F60\u60F3\u8981\u547D\u4EE4\u884C\u4E2D\u51FA\u73B0\u7684\u9ED8\u8BA4\u503C\u53EA\u9700\u8981\u6309\u4E0B <kbd>\u56DE\u8F66</kbd> \u952E\u5373\u53EF\u8F93\u51FA</li></ul><h2 id="defaultbody" tabindex="-1">defaultBody <a class="header-anchor" href="#defaultbody" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5728 <strong>\u8BE6\u7EC6\u63CF\u8FF0</strong> \u4E2D\u662F\u5426\u4F7F\u7528\u663E\u793A\u9ED8\u8BA4\u503C</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;&quot;</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u4F60\u60F3\u8981\u547D\u4EE4\u884C\u4E2D\u51FA\u73B0\u7684\u9ED8\u8BA4\u503C\u53EA\u9700\u8981\u6309\u4E0B <kbd>\u56DE\u8F66</kbd> \u952E\u5373\u53EF\u8F93\u51FA</li></ul><h2 id="defaultissues" tabindex="-1">defaultIssues <a class="header-anchor" href="#defaultissues" aria-hidden="true">#</a></h2><ul><li><strong>\u63CF\u8FF0</strong> : \u5728 <strong>\u8F93\u5165ISSUE \u548C \u81EA\u5B9A\u4E49ISSUE\u524D\u7F00</strong> \u4E2D\u662F\u5426\u4F7F\u7528\u663E\u793A\u9ED8\u8BA4\u503C</li><li><strong>\u7C7B\u578B</strong> : <code>string</code></li><li><strong>\u9ED8\u8BA4</strong> : <code>&quot;&quot;</code></li><li><strong>\u4F7F\u7528</strong> : \u5F53\u4F60\u60F3\u8981\u547D\u4EE4\u884C\u4E2D\u51FA\u73B0\u7684\u9ED8\u8BA4\u503C\u53EA\u9700\u8981\u6309\u4E0B <kbd>\u56DE\u8F66</kbd> \u952E\u5373\u53EF\u8F93\u51FA</li></ul>`,45),n=[a];function r(i,c,p,d,u,g){return o(),e("div",null,n)}var y=s(l,[["render",r]]);export{m as __pageData,y as default};
