"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[842],{8321:(s,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-abece2a2",path:"/zh/guide/recipes.html",title:"小窍门",lang:"zh-CN",frontmatter:{title:"小窍门",sidebarDepth:2,lastUpdated:!0,sitemap:{priority:.8}},excerpt:"",headers:[{level:2,title:"scopes",slug:"scopes",children:[{level:3,title:"针对 项目代码 的 scopes",slug:"针对-项目代码-的-scopes",children:[]},{level:3,title:"针对 项目业务 的 scopes",slug:"针对-项目业务-的-scopes",children:[]}]},{level:2,title:"issuePrefixs",slug:"issueprefixs",children:[]},{level:2,title:"default",slug:"default",children:[{level:3,title:"defaultIssues",slug:"defaultissues",children:[]}]}],git:{updatedTime:1652276052e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:10}]},filePathRelative:"zh/guide/recipes.md"}},1487:(s,n,a)=>{a.r(n),a.d(n,{default:()=>A});var t=a(1984);const p=(0,t.uE)('<h1 id="小窍门" tabindex="-1"><a class="header-anchor" href="#小窍门" aria-hidden="true">#</a> 小窍门</h1><h2 id="scopes" tabindex="-1"><a class="header-anchor" href="#scopes" aria-hidden="true">#</a> scopes</h2><blockquote><p>scopes，通常来定义本次 commit 涉及范围，一般有两种：根据<strong>项目代码层面区分</strong>比如 monorepo ，另外一种就是<strong>项目业务区分</strong></p></blockquote><h3 id="针对-项目代码-的-scopes" tabindex="-1"><a class="header-anchor" href="#针对-项目代码-的-scopes" aria-hidden="true">#</a> 针对 项目代码 的 scopes</h3>',4),e=(0,t.Uk)("如果你需要管理多软件包在commit时获得更好的体验，比如使用: "),o={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("pnpm"),l=(0,t.Uk)(" | "),r={href:"https://lerna.js.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("lerna.js"),i=(0,t.Uk)(" 管理 monorepo 可以利用 "),k=(0,t._)("code",null,"path",-1),d=(0,t.Uk)(" 和 "),g=(0,t._)("code",null,"fs",-1),m=(0,t.Uk)(" 模块动态定义 commit message 中的scopes(范围)显示"),h=(0,t.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js </span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> packages <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;packages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span> \n    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>packages<span class="token punctuation">]</span> \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',1),f=(0,t.Uk)("当然如果你使用 "),y={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("commitlint"),b=(0,t.Uk)(" 规则定义了 "),q=(0,t._)("code",null,"scope-enum",-1),x=(0,t.Uk)("，会自动引入"),_=(0,t.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js </span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> packages <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;packages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;scope-enum&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token operator">...</span>packages <span class="token punctuation">]</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p><img src="https://user-images.githubusercontent.com/40693636/156002738-af17087e-2d2b-4a80-a681-d63751282ec8.gif" alt="demo-gif"></p><h4 id="支持多选-scopes" tabindex="-1"><a class="header-anchor" href="#支持多选-scopes" aria-hidden="true">#</a> 支持多选 scopes</h4><ul><li>使用 <mark>&lt;右箭头&gt;</mark> 或 <mark>&lt;空格&gt;</mark> 选中</li><li>使用 <mark>&lt;回车&gt;</mark> 确定</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js </span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> packages <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;packages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span> \n    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>packages<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">enableMultipleScopes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">scopeEnumSeparator</span><span class="token operator">:</span> <span class="token string">&quot;,&quot;</span> \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div></div><p><img src="https://user-images.githubusercontent.com/40693636/167858696-398a19fd-932f-4453-832a-795edcb75ad7.gif" alt="demo-gif"></p><h3 id="针对-项目业务-的-scopes" tabindex="-1"><a class="header-anchor" href="#针对-项目业务-的-scopes" aria-hidden="true">#</a> 针对 项目业务 的 scopes</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js </span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> packages <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;packages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;account&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">]</span> \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>当然如果你想给模块范围自定义添加 <strong>描述信息</strong> 显示在命令行中可以使用 <code>name</code> 和 <code>value</code>属性来定义</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js </span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> packages <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;packages&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">scopes</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">,</span>     <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;app:       系统业务&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;home&quot;</span><span class="token punctuation">,</span>    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;home:      首页相关&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;account&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;account:   账户相关&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;comment:   评论相关&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><img src="https://user-images.githubusercontent.com/40693636/156924173-56508d8a-ba7a-4001-99fe-16234ee0f911.gif" alt="demo-gif"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果 <code>cz-git</code> 检测到如果 <code>allowEmptyScopes</code> 和 <code>allowCustomScopes</code> 具有非常严格规则(都设置为false)并且 <strong>scopes 选择列表仅有一项时</strong>，会自动跳过问题并输出</p></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>下面代码可以运行时获取到 <code>HOME</code> 目录，<br>你可以使用它配合 <code>fs</code>和<code>path</code> 进行<strong>默认的全局自定义配置</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">USER_HOME</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">HOME</span> <span class="token operator">||</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">USERPROFILE</span><span class="token punctuation">;</span>\n<span class="token comment">// console.log(USER_HOME) === echo &quot;$HOME&quot;</span>\n</code></pre></div></div><h2 id="issueprefixs" tabindex="-1"><a class="header-anchor" href="#issueprefixs" aria-hidden="true">#</a> issuePrefixs</h2>',14),j=(0,t.Uk)("国内用户如果使用 Gitee 作为项目管理，那么该工具可以很好 "),w=(0,t._)("mark",null,"利用 commit message改变issue状态",-1),U=(0,t.Uk)(),E=(0,t._)("br",null,null,-1),S=(0,t.Uk)(" 详情： "),I={href:"https://gitee.com/help/articles/4141#article-header2",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("Commit 关联Issue"),z=(0,t.Uk)(),C=(0,t._)("br",null,null,-1),H=(0,t.Uk)(" 通过设置任务状态指令，即起issue状态变更的别名，通过选择别名和输入issue号，可以很好的关联管理issue"),M=(0,t.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">issuePrefixs</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// @see: https://gitee.com/help/articles/4141#article-header2</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;wip&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;wip:      将任务状态更改为进行中&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;finish&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;finish:   将任务状态更改为待完成&quot;</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><img src="https://user-images.githubusercontent.com/40693636/156924322-7edaa527-cd16-4b69-9caf-7471d9984af8.gif" alt="demo-gif"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果 <code>cz-git</code> 检测到如果 <code>allowCustomIssuePrefixs</code> 和 <code>allowEmptyIssuePrefixs</code> 具有非常严格规则(都设置为false)并且 <strong>issuePrefixs 选择列表仅有一项时</strong>，会自动跳过问题并输出</p></div><h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> default</h2><h3 id="defaultissues" tabindex="-1"><a class="header-anchor" href="#defaultissues" aria-hidden="true">#</a> defaultIssues</h3>',5),O=(0,t.uE)("<li><p>自动获取 <code>Issue Number</code>，重复查询填写<code>issue number</code> 是一件很麻烦的事情，尤其在 gitee 反人类设计</p><ul><li>但是如果规范了团队的分支命令规则(e.g: fix/issue_33)</li><li>然后我们利用 <code>Node</code> 的 <code>execSync</code> 通过命令获取到分支名</li><li>再对获取的字符串进行处理</li><li>接着我们利用 <code>defaultIssues</code></li><li>使用时我们只需要按下 <mark>&lt;Enter&gt;</mark> 键就可以输出<code>Issue Number</code>,如此一来我们可以很方便截取到 <code>Issue Number</code> 减少重复性工作。</li></ul></li>",1),N=(0,t.Uk)(" 当然我们也可以结合 `customIssuePrefixsAlign` 配置项来动态改变 issue 前缀的选择项位置 "),R=(0,t.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// .commitlintrc.js </span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> execSync <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;child_process&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// @tip: git branch name = feature/issue_33   =&gt;    auto get defaultIssues = #33</span>\n <span class="token keyword">const</span> issue <span class="token operator">=</span> <span class="token function">execSync</span><span class="token punctuation">(</span><span class="token string">&#39;git rev-parse --abbrev-ref HEAD&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n\n<span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;cz-git&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UserConfig<span class="token punctuation">}</span></span> */</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">customIssuePrefixsAlign</span><span class="token operator">:</span> <span class="token operator">!</span>issue <span class="token operator">?</span> <span class="token string">&quot;top&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">defaultIssues</span><span class="token operator">:</span> <span class="token operator">!</span>issue <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>issue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div></div><p><img src="https://user-images.githubusercontent.com/40693636/162552804-132aab02-4b02-4006-9e41-aeae4f825948.gif" alt="demo-gif"></p><blockquote><p>格局打开，利用可高度可定制的 <code>cz-git</code> 让 commit 更方便，更契合习惯，欢迎分享。</p></blockquote>',3),W={},A=(0,a(3243).Z)(W,[["render",function(s,n){const a=(0,t.up)("ExternalLinkIcon"),W=(0,t.up)("Badge");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,(0,t._)("a",o,[c,(0,t.Wm)(a)]),l,(0,t._)("a",r,[u,(0,t.Wm)(a)]),i,k,d,g,m]),h,(0,t._)("p",null,[f,(0,t._)("a",y,[v,(0,t.Wm)(a)]),b,q,x]),_,(0,t._)("p",null,[j,w,U,E,S,(0,t._)("a",I,[P,(0,t.Wm)(a)]),z,C,H]),M,(0,t._)("ul",null,[O,(0,t._)("li",null,[(0,t.Wm)(W,{type:"tip",text:"提示",vertical:"middle"}),N])]),R],64)}]])}}]);