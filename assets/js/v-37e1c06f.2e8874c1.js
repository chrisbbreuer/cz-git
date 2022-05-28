"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[600],{6559:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-37e1c06f",path:"/guide/faq.html",title:"FAQ",lang:"en-US",frontmatter:{title:"FAQ",sidebarDepth:1,lastUpdated:!0,sitemap:{priority:.6}},excerpt:"",headers:[{level:2,title:"Windows users use",slug:"windows-users-use",children:[]},{level:2,title:"Cannot find command after global install",slug:"cannot-find-command-after-global-install",children:[]},{level:2,title:"Terminal cannot display Emoji symbols",slug:"terminal-cannot-display-emoji-symbols",children:[]},{level:2,title:"Why should the output Emoji symbols be placed in subject",slug:"why-should-the-output-emoji-symbols-be-placed-in-subject",children:[]}],git:{updatedTime:165373951e4,contributors:[{name:"Zhengqbbb",email:"1074059947@qq.com",commits:1}]},filePathRelative:"guide/faq.md"}},2653:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(7208);const i=(0,n.uE)('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h2 id="windows-users-use" tabindex="-1"><a class="header-anchor" href="#windows-users-use" aria-hidden="true">#</a> Windows users use</h2><ul><li>Windows users are advised not to use powershell, cmd for command line use</li><li>because they are not based on the POSIX SHELL specification, i.e. not a standard terminal environment</li><li>It is recommended not to use gitbash, because the terminal is not an interactive terminal, and the selection up and down will be effected</li><li><strong>It is recommended to use Windows Terminal combined with WSL, you should also do the same in daily development and use</strong></li></ul><h2 id="cannot-find-command-after-global-install" tabindex="-1"><a class="header-anchor" href="#cannot-find-command-after-global-install" aria-hidden="true">#</a> Cannot find command after global install</h2><ul><li>Enter the command <code>npm prefix -g</code> to check whether the path of npm global download is in the root directory</li><li>The high probability is because the global download path prefix of npm has been changed with nvm</li><li>You can open .zshrc or .bashrc to comment out the loading nvm, and then reopen the terminal to check</li></ul><h2 id="terminal-cannot-display-emoji-symbols" tabindex="-1"><a class="header-anchor" href="#terminal-cannot-display-emoji-symbols" aria-hidden="true">#</a> Terminal cannot display Emoji symbols</h2>',6),o=(0,n.Uk)("The terminal cannot Emoji symbols, the high probability is because your terminal has poor support for emoji/unicode characters, but it does not affect the submission Because the final output is submitted by Emoji Code, you can consider changing the terminal and "),l={href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"},s=(0,n.Uk)("font"),r=(0,n._)("h2",{id:"why-should-the-output-emoji-symbols-be-placed-in-subject",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#why-should-the-output-emoji-symbols-be-placed-in-subject","aria-hidden":"true"},"#"),(0,n.Uk)(" Why should the output Emoji symbols be placed in subject")],-1),d=(0,n.Uk)("I also know it will break the aesthetics of the final output format, but the emoji are in subject because of following "),h={href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("Angular commit"),u=(0,n.Uk)(" Specifications cannot be placed in type"),m={},b=(0,a(3243).Z)(m,[["render",function(e,t){const a=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[i,(0,n._)("ul",null,[(0,n._)("li",null,[o,(0,n._)("a",l,[s,(0,n.Wm)(a)])])]),r,(0,n._)("ul",null,[(0,n._)("li",null,[d,(0,n._)("a",h,[c,(0,n.Wm)(a)]),u])])])}]])}}]);