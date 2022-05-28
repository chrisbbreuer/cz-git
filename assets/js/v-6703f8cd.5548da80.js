"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[945],{4088:(e,t,o)=>{o.r(t),o.d(t,{data:()=>s});const s={key:"v-6703f8cd",path:"/zh/guide/option-engineer.html",title:"工程化相关",lang:"zh-CN",frontmatter:{title:"工程化相关",sidebarDepth:1,lastUpdated:!0,sitemap:{priority:.6}},excerpt:"",headers:[{level:2,title:"scopes",slug:"scopes",children:[]},{level:2,title:"scopeOverrides",slug:"scopeoverrides",children:[]},{level:2,title:"scopeFilters",slug:"scopefilters",children:[]},{level:2,title:"enableMultipleScopes",slug:"enablemultiplescopes",children:[]},{level:2,title:"scopeEnumSeparator",slug:"scopeenumseparator",children:[]},{level:2,title:"allowCustomScopes",slug:"allowcustomscopes",children:[]},{level:2,title:"allowEmptyScopes",slug:"allowemptyscopes",children:[]},{level:2,title:"allowBreakingChanges",slug:"allowbreakingchanges",children:[]},{level:2,title:"upperCaseSubject",slug:"uppercasesubject",children:[]},{level:2,title:"breaklineNumber",slug:"breaklinenumber",children:[]},{level:2,title:"breaklineChar",slug:"breaklinechar",children:[]},{level:2,title:"skipQuestions",slug:"skipquestions",children:[]},{level:2,title:"issuePrefixs",slug:"issueprefixs",children:[]},{level:2,title:"allowCustomIssuePrefixs",slug:"allowcustomissueprefixs",children:[]},{level:2,title:"allowEmptyIssuePrefixs",slug:"allowemptyissueprefixs",children:[]},{level:2,title:"maxHeaderLength",slug:"maxheaderlength",children:[]},{level:2,title:"maxSubjectLength",slug:"maxsubjectlength",children:[]},{level:2,title:"minSubjectLength",slug:"minsubjectlength",children:[]}],git:{updatedTime:1653719471e3,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:1}]},filePathRelative:"zh/guide/option-engineer.md"}},6758:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ee});var s=o(7208);const l=(0,s.uE)('<h1 id="工程化规范化相关" tabindex="-1"><a class="header-anchor" href="#工程化规范化相关" aria-hidden="true">#</a> 工程化规范化相关</h1><h2 id="scopes" tabindex="-1"><a class="header-anchor" href="#scopes" aria-hidden="true">#</a> scopes</h2><ul><li><strong>描述</strong> : 自定义选择 <strong>模块范围</strong> 命令行显示信息</li><li><strong>类型</strong> : <code>string[] | Array&lt;{ name: string, value?: string }&gt;</code></li><li><strong>默认</strong> : <code>[]</code></li></ul>',3),i={class:"custom-container tip"},r=(0,s._)("p",{class:"custom-container-title"},"提示",-1),n=(0,s.Uk)("如果你使用 "),a={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("commitlint"),d=(0,s.Uk)(" 规则定义了 "),u=(0,s._)("code",null,"scope-enum",-1),g=(0,s.Uk)("，会自动引入。"),h=(0,s._)("br",null,null,-1),p=(0,s.Uk)("⇒ 更多小窍门"),m=(0,s.uE)('<h2 id="scopeoverrides" tabindex="-1"><a class="header-anchor" href="#scopeoverrides" aria-hidden="true">#</a> scopeOverrides</h2><ul><li><strong>描述</strong> : 自定义选择了特定<strong>类型</strong>后 <strong>覆盖模块范围</strong> 命令行显示信息</li><li><strong>类型</strong> : <br><code>{ [type: string]: string[] | Array&lt;{ name: string, value?: string }&gt; } | undefined</code></li><li><strong>默认</strong> : <code>undefined</code></li><li><strong>例子</strong> : <code>scopeOverrides: { &quot;test&quot;: [&quot;e2eTest&quot;, &quot;unitTest&quot;] }</code></li><li><strong>使用</strong> : 针对选择 <mark>特定</mark> 的 commit <strong>类型</strong> <code>type</code> 后选择模块范围时显示 自定义的模块范围选择</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果定义<code>scopeOverrides</code> 就要定义通用的 <code>scopes</code></p></div><h2 id="scopefilters" tabindex="-1"><a class="header-anchor" href="#scopefilters" aria-hidden="true">#</a> scopeFilters</h2><ul><li><strong>描述</strong> : Filter select of prompt to select module scopes by the scope.value</li><li><strong>描述</strong> : 根据 scope.value 过滤模块范围中的选项</li><li><strong>类型</strong> : string[]</li><li><strong>默认</strong> : <code>[&quot;.DS_Store&quot;]</code></li></ul><h2 id="enablemultiplescopes" tabindex="-1"><a class="header-anchor" href="#enablemultiplescopes" aria-hidden="true">#</a> enableMultipleScopes</h2><ul><li><strong>描述</strong> : 是否开启在选择 <strong>模块范围</strong> 时使用多选模式</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>false</code></li></ul>',7),b={class:"custom-container tip"},f=(0,s._)("p",{class:"custom-container-title"},"提示",-1),k=(0,s.Uk)("尝试运行 "),v=(0,s._)("code",null,"checkbox=1 cz",-1),x=(0,s.Uk)(),_=(0,s._)("strong",null,"可在当前会话直接开启多选模式",-1),w=(0,s._)("br",null,null,-1),q=(0,s.Uk)(" 示例与使用方式 "),y=(0,s.Uk)("⇒ 查看小窍门"),E=(0,s.uE)('<h2 id="scopeenumseparator" tabindex="-1"><a class="header-anchor" href="#scopeenumseparator" aria-hidden="true">#</a> scopeEnumSeparator</h2><ul><li><strong>描述</strong> : 在多选模式下 <strong>模块范围</strong> 之间的分隔符</li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>,</code></li></ul><h2 id="allowcustomscopes" tabindex="-1"><a class="header-anchor" href="#allowcustomscopes" aria-hidden="true">#</a> allowCustomScopes</h2><ul><li><strong>描述</strong> : 是否在选择 <strong>模块范围</strong> 显示自定义选项(custom)</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>true</code></li><li><strong>使用</strong> : 没有使用 <code>commitlint</code>并且想在选择中关闭自定义选项</li></ul>',4),S={class:"custom-container tip"},U=(0,s._)("p",{class:"custom-container-title"},"提示",-1),j=(0,s.Uk)("会自动检测 "),C={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},A=(0,s.Uk)("commitlint"),I=(0,s.Uk)(" 规则 "),N=(0,s._)("code",null,"scope-enum",-1),L=(0,s.Uk)("的定义是否严格，自动不显示。"),P=(0,s.uE)('<h2 id="allowemptyscopes" tabindex="-1"><a class="header-anchor" href="#allowemptyscopes" aria-hidden="true">#</a> allowEmptyScopes</h2><ul><li><strong>描述</strong> : 是否在选择 <strong>模块范围</strong> 显示为空选项(empty)</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>true</code></li></ul>',2),z={class:"custom-container tip"},G=(0,s._)("p",{class:"custom-container-title"},"提示",-1),W=(0,s.Uk)("会自动检测 "),B={href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},H=(0,s.Uk)("commitlint"),R=(0,s.Uk)(" 规则 "),F=(0,s._)("code",null,"scope-empty",-1),O=(0,s.Uk)("的定义是否严格，自动不显示。"),D=(0,s.uE)('<h2 id="allowbreakingchanges" tabindex="-1"><a class="header-anchor" href="#allowbreakingchanges" aria-hidden="true">#</a> allowBreakingChanges</h2><ul><li><strong>描述</strong> : 允许出现 重大变更(BREAKING CHANGES)的特定 <strong>type</strong></li><li><strong>类型</strong> : <code>string[]</code></li><li><strong>默认</strong> : <code>[&#39;feat&#39;, &#39;fix&#39;]</code></li></ul><h2 id="uppercasesubject" tabindex="-1"><a class="header-anchor" href="#uppercasesubject" aria-hidden="true">#</a> upperCaseSubject</h2><ul><li><strong>描述</strong> : 是否自动将简短描述(subject)第一个字符进行大写处理</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>false</code></li></ul><h2 id="breaklinenumber" tabindex="-1"><a class="header-anchor" href="#breaklinenumber" aria-hidden="true">#</a> breaklineNumber</h2><ul><li><strong>描述</strong> : 详细描述(body)和重大变更(BREAKING CHANGES)中根据字符超过该数值自动换行</li><li><strong>类型</strong> : <code>number</code></li><li><strong>默认</strong> : <code>100</code></li><li><strong>使用</strong> : 当没有使用 commitlint 并要使用规范化时</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>主要根据<strong>单词完整性</strong>进行换行 <br> 如果使用 commitlint 会自动读取 <code>body-max-line-length</code> 进行设置</p></div><h2 id="breaklinechar" tabindex="-1"><a class="header-anchor" href="#breaklinechar" aria-hidden="true">#</a> breaklineChar</h2><ul><li><strong>描述</strong> : 详细描述(body)和重大变更(BREAKING CHANGES)中换行字符</li><li><strong>类型</strong> : <code>string</code></li><li><strong>默认</strong> : <code>&quot;|&quot;</code></li></ul><h2 id="skipquestions" tabindex="-1"><a class="header-anchor" href="#skipquestions" aria-hidden="true">#</a> skipQuestions</h2><ul><li><strong>描述</strong> : 自定义选择指定的问题不显示</li><li><strong>类型</strong> : <code>Array&lt;&quot;scope&quot; | &quot;body&quot; | &quot;breaking&quot; | &quot;footerPrefix&quot; | &quot;footer&quot;&gt;</code></li><li><strong>默认</strong> : <code>[]</code></li></ul><h2 id="issueprefixs" tabindex="-1"><a class="header-anchor" href="#issueprefixs" aria-hidden="true">#</a> issuePrefixs</h2><ul><li><strong>描述</strong> : 自定义选择issue前缀</li><li><strong>类型</strong> : <code>Array&lt;{ value: string, name: string }&gt;</code></li><li><strong>默认</strong> : <code>[{ value: &quot;closed&quot;, name: &quot;closed: ISSUES has been processed&quot; }]</code></li></ul>',13),K={class:"custom-container tip"},T=(0,s._)("p",{class:"custom-container-title"},"提示",-1),M=(0,s.Uk)("国内用户如果使用 Gitee 作为项目管理，那么该工具可以很好"),Q=(0,s._)("br",null,null,-1),Z=(0,s.Uk)(),J=(0,s._)("mark",null,"利用 commit message改变issue状态",-1),V=(0,s.Uk)(),X=(0,s.Uk)("⇒ 查看小窍门"),Y=(0,s.uE)('<h2 id="allowcustomissueprefixs" tabindex="-1"><a class="header-anchor" href="#allowcustomissueprefixs" aria-hidden="true">#</a> allowCustomIssuePrefixs</h2><ul><li><strong>描述</strong> : 是否在选择 <strong>ISSUE 前缀</strong> 显示自定义选项(custom)</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>true</code></li></ul><h2 id="allowemptyissueprefixs" tabindex="-1"><a class="header-anchor" href="#allowemptyissueprefixs" aria-hidden="true">#</a> allowEmptyIssuePrefixs</h2><ul><li><strong>描述</strong> : 是否在选择 <strong>ISSUE 前缀</strong> 显示为跳过选项(skip)</li><li><strong>类型</strong> : <code>boolean</code></li><li><strong>默认</strong> : <code>true</code></li></ul><h2 id="maxheaderlength" tabindex="-1"><a class="header-anchor" href="#maxheaderlength" aria-hidden="true">#</a> maxHeaderLength</h2><ul><li><strong>描述</strong> : 定义commit message中的 header 长度, 给予在命令行中的校验信息</li><li><strong>类型</strong> : <code>number</code></li><li><strong>默认</strong> : <code>Infinity</code></li><li><strong>使用</strong> : 当没有使用 commitlint 并要使用规范化时</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果使用 commitlint 会自动读取 <code>header-max-length</code> 进行设置给予在命令行中的提示</p></div><h2 id="maxsubjectlength" tabindex="-1"><a class="header-anchor" href="#maxsubjectlength" aria-hidden="true">#</a> maxSubjectLength</h2><ul><li><strong>描述</strong> : 定义commit message中的 subject 长度, 给予在命令行中的校验信息</li><li><strong>类型</strong> : <code>number</code></li><li><strong>默认</strong> : <code>Infinity</code></li><li><strong>使用</strong> : 当没有使用 commitlint，并要使用规范化时</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果使用 commitlint 会自动读取 <code>subject-max-length</code> 进行设置给予在命令行中的提示</p></div><h2 id="minsubjectlength" tabindex="-1"><a class="header-anchor" href="#minsubjectlength" aria-hidden="true">#</a> minSubjectLength</h2><ul><li><strong>描述</strong> : 定义commit message中的 subject 长度, 给予在命令行中的校验信息</li><li><strong>类型</strong> : <code>number</code></li><li><strong>默认</strong> : <code>0</code></li><li><strong>使用</strong> : 当没有使用 commitlint，并要使用规范化时</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果使用 commitlint 会自动读取 <code>subject-min-length</code> 进行设置给予在命令行中的提示</p></div>',13),$={},ee=(0,o(3243).Z)($,[["render",function(e,t){const o=(0,s.up)("ExternalLinkIcon"),$=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[l,(0,s._)("div",i,[r,(0,s._)("p",null,[n,(0,s._)("a",a,[c,(0,s.Wm)(o)]),d,u,g,h,(0,s.Wm)($,{to:"/zh/guide/recipes.html#scopes"},{default:(0,s.w5)((()=>[p])),_:1})])]),m,(0,s._)("div",b,[f,(0,s._)("p",null,[k,v,x,_,w,q,(0,s.Wm)($,{to:"/zh/guide/recipes.html#%E6%94%AF%E6%8C%81%E5%A4%9A%E9%80%89-scopes"},{default:(0,s.w5)((()=>[y])),_:1})])]),E,(0,s._)("div",S,[U,(0,s._)("p",null,[j,(0,s._)("a",C,[A,(0,s.Wm)(o)]),I,N,L])]),P,(0,s._)("div",z,[G,(0,s._)("p",null,[W,(0,s._)("a",B,[H,(0,s.Wm)(o)]),R,F,O])]),D,(0,s._)("div",K,[T,(0,s._)("p",null,[M,Q,Z,J,V,(0,s.Wm)($,{to:"/zh/guide/recipes.html#issueprefixs"},{default:(0,s.w5)((()=>[X])),_:1})])]),Y])}]])}}]);