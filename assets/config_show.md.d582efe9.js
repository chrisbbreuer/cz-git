import{_ as e,o as s,c as o,a as t}from"./app.e98151cf.js";const m=JSON.parse('{"title":"Show Related","description":"","frontmatter":{"title":"Show Related","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.6}},"headers":[{"level":2,"title":"messages","slug":"messages"},{"level":2,"title":"themeColorCode","slug":"themecolorcode"},{"level":2,"title":"types","slug":"types"},{"level":2,"title":"typesAppend","slug":"typesappend"},{"level":2,"title":"useEmoji","slug":"useemoji"},{"level":2,"title":"customScopesAlign","slug":"customscopesalign"},{"level":2,"title":"customScopesAlias","slug":"customscopesalias"},{"level":2,"title":"emptyScopesAlias","slug":"emptyscopesalias"},{"level":2,"title":"customIssuePrefixsAlign","slug":"customissueprefixsalign"},{"level":2,"title":"customIssuePrefixsAlias","slug":"customissueprefixsalias"},{"level":2,"title":"emptyIssuePrefixsAlias","slug":"emptyissueprefixsalias"},{"level":2,"title":"confirmColorize","slug":"confirmcolorize"},{"level":2,"title":"defaultType","slug":"defaulttype"},{"level":2,"title":"defaultScope","slug":"defaultscope"},{"level":2,"title":"defaultSubject","slug":"defaultsubject"},{"level":2,"title":"defaultBody","slug":"defaultbody"},{"level":2,"title":"defaultIssues","slug":"defaultissues"}],"relativePath":"config/show.md","lastUpdated":1655362525000}'),l={name:"config/show.md"},a=t(`<h1 id="options-show-related" tabindex="-1">Options - Show Related <a class="header-anchor" href="#options-show-related" aria-hidden="true">#</a></h1><h2 id="messages" tabindex="-1">messages <a class="header-anchor" href="#messages" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : custom command line question information</li><li><strong>example</strong> : <br><code>messages: { type: &quot;Select the type of change that you&#39;re committing:&quot; }</code></li></ul><h2 id="themecolorcode" tabindex="-1">themeColorCode <a class="header-anchor" href="#themecolorcode" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : set prompt inquirer theme color</li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code> (\u21D2 cyan color)</li><li><strong>rule</strong>: <code>&quot;38;5;\${color_code}&quot;</code><br> \u21D2 the <code>color_code</code> can get it by <a href="https://github.com/sindresorhus/xterm-colors" target="_blank" rel="noopener noreferrer">https://github.com/sindresorhus/xterm-colors</a></li><li><strong>example</strong>: <code>&quot;38;5;043&quot;</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you don&#39;t want to use the theme color of the configuration record, you can add a line to the profile file such as <code>~/.bashrc</code> or <code>~/.zshrc</code>, which will have a higher priority:</p><div class="language-bash"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#CB7676;">export</span><span style="color:#DBD7CA;"> ___X_CMD_THEME_COLOR_CODE=</span><span style="color:#C98A7D;">&quot;38;5;043&quot;</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#AB5959;">export</span><span style="color:#393A34;"> ___X_CMD_THEME_COLOR_CODE=</span><span style="color:#B56959;">&quot;38;5;043&quot;</span></span>
<span class="line"></span></code></pre></div></div><h2 id="types" tabindex="-1">types <a class="header-anchor" href="#types" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : custom selection <strong>type</strong> prompt</li><li><strong>type</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>example</strong> : <br><code>types: [{value: &#39;feat&#39;, name: &#39;feat: A new feature&#39;, emoji: &#39;:sparkles:&#39;}]</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want to use Emoji, you need <mark>enable</mark> <code>userEmoji</code> configuration item. <br> And need to add Emoji Code, you can find the corresponding characters in: <a href="https://gitmoji.dev/" target="_blank" rel="noopener noreferrer">https://gitmoji.dev/</a> to supplement <code>emoji</code>.</p></div><h2 id="typesappend" tabindex="-1">typesAppend <a class="header-anchor" href="#typesappend" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Add extra types to default types</li><li><strong>type</strong> : <code>Array&lt;{ name: string; value: string; emoji?: string }&gt;</code></li><li><strong>use</strong> : Use when you don&#39;t want to add bloated defaults and don&#39;t want to adjust the default order in configuration. <strong>Only want to add a small number of types</strong>.</li><li><strong>default</strong> : <code>[]</code></li><li><strong>example</strong> : <br></li></ul><div class="language-js"><span class="copy"></span><pre class="vp-code-dark"><code><span class="line"><span style="color:#A1B567;">typesAppend</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span><span style="color:#DBD7CA;"> </span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">value</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;workflow&quot;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;workflow:  Workflow changes&quot;</span><span style="color:#858585;">},</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">{</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">value</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;*!&quot;</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;">       </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&quot;*!:        BREAKING CHANGES&quot;</span><span style="color:#858585;">}</span></span>
<span class="line"><span style="color:#858585;">]</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#6C7834;">typesAppend</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span><span style="color:#393A34;"> </span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">value</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;workflow&quot;</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;workflow:  Workflow changes&quot;</span><span style="color:#8E8F8B;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">{</span><span style="color:#393A34;"> </span><span style="color:#B58451;">value</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;*!&quot;</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;">       </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&quot;*!:        BREAKING CHANGES&quot;</span><span style="color:#8E8F8B;">}</span></span>
<span class="line"><span style="color:#8E8F8B;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="useemoji" tabindex="-1">useEmoji <a class="header-anchor" href="#useemoji" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Whether to enable commit messages with emoji characters.</li><li><strong>type</strong> : <code>boolean</code></li><li><strong>default</strong> : <code>false</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Try running <code>emoji=1 cz</code> to <strong>enable output emoji mode in the current session</strong></p></div><h2 id="customscopesalign" tabindex="-1">customScopesAlign <a class="header-anchor" href="#customscopesalign" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Set the <strong>location</strong> of empty option (empty) and custom option (custom) in <strong>selection range</strong></li><li><strong>type</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>default</strong> : <code>&quot;bottom&quot;</code></li></ul><h2 id="customscopesalias" tabindex="-1">customScopesAlias <a class="header-anchor" href="#customscopesalias" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Customize the <strong>name</strong> displayed on the command line for the custom option (custom) in the <strong>selection range</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>custom</code></li></ul><h2 id="emptyscopesalias" tabindex="-1">emptyScopesAlias <a class="header-anchor" href="#emptyscopesalias" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Customize the <strong>name</strong> displayed on the command line if the empty option (empty) in the <strong>selection range</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>empty</code></li></ul><h2 id="customissueprefixsalign" tabindex="-1">customIssuePrefixsAlign <a class="header-anchor" href="#customissueprefixsalign" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Set the <strong>location</strong> of skip option (skip) and custom option (custom) in <strong>select issue prefix</strong></li><li><strong>type</strong> : <code>&quot;top&quot; | &quot;bottom&quot; | &quot;top-bottom&quot; | &quot;bottom-top&quot;</code></li><li><strong>default</strong> : <code>&quot;top&quot;</code></li></ul><h2 id="customissueprefixsalias" tabindex="-1">customIssuePrefixsAlias <a class="header-anchor" href="#customissueprefixsalias" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : custom <strong>select the issue prefix</strong> in the custom option (custom) to display the <strong>name</strong> on the command line</li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>custom</code></li></ul><h2 id="emptyissueprefixsalias" tabindex="-1">emptyIssuePrefixsAlias <a class="header-anchor" href="#emptyissueprefixsalias" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Customize the <strong>name</strong> displayed on the command line in the skip option (skip) in the <strong>select issue prefix</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>skip</code></li></ul><h2 id="confirmcolorize" tabindex="-1">confirmColorize <a class="header-anchor" href="#confirmcolorize" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Determines whether the template commit message is colored in the commit</li><li><strong>type</strong> : <code>boolean</code></li><li><strong>default</strong> : <code>true</code></li></ul><hr><br><br><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Using <mark>default value</mark> can produce many ways to make the tool more suitable for you or your team&#39;s habits, <a href="/recipes/defaultScope.html#defaultscope">\u21D2 see the recipes</a></p></div><h2 id="defaulttype" tabindex="-1">defaultType <a class="header-anchor" href="#defaulttype" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : pin type item the top of the types list (match item value)</li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li></ul><h2 id="defaultscope" tabindex="-1">defaultScope <a class="header-anchor" href="#defaultscope" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Whether to use display default value in <strong>custom scope</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key</li></ul><p><mark>Tip:</mark> pin scope item the top of the scope list (match item value)</p><h2 id="defaultsubject" tabindex="-1">defaultSubject <a class="header-anchor" href="#defaultsubject" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Whether to use the display default value in the <strong>short description</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key</li></ul><h2 id="defaultbody" tabindex="-1">defaultBody <a class="header-anchor" href="#defaultbody" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Whether to use the display default value in the <strong>detailed description</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key</li></ul><h2 id="defaultissues" tabindex="-1">defaultIssues <a class="header-anchor" href="#defaultissues" aria-hidden="true">#</a></h2><ul><li><strong>description</strong> : Whether to use the display default value in the <strong>input ISSUE and custom ISSUE prefix</strong></li><li><strong>type</strong> : <code>string</code></li><li><strong>default</strong> : <code>&quot;&quot;</code></li><li><strong>use</strong> : when you want the default value to appear on the command line just press the <kbd>Enter</kbd> key</li></ul>`,45),n=[a];function r(i,p,c,d,u,g){return s(),o("div",null,n)}var y=e(l,[["render",r]]);export{m as __pageData,y as default};
