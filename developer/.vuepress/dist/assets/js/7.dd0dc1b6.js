(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{173:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("根据你的操作系统，点击详细，按照Docker官方说明进行安装。")]),t._v(" "),s("p",[t._v("ubuntu:")]),t._v(" "),s("p",[t._v("https://docs.docker.com/install/linux/docker-ce/ubuntu/")]),t._v(" "),s("p",[t._v("centos:")]),t._v(" "),s("p",[t._v("https://docs.docker.com/install/linux/docker-ce/centos/")]),t._v(" "),s("p",[t._v("fedora:\nhttps://docs.docker.com/install/linux/docker-ce/fedora/")]),t._v(" "),s("p",[t._v("Mac:")]),t._v(" "),s("p",[t._v("https://docs.docker.com/docker-for-mac/install/")]),t._v(" "),s("p",[t._v("windows:")]),t._v(" "),s("p",[t._v("https://docs.docker.com/docker-for-windows/install/")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),s("p",[t._v("这时，你可以访问 "),s("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),s("OutboundLink")],1),t._v(" 来查看SDAG的运行状况。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/explorer.png"),alt:"explorer"}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"_2分钟起链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2分钟起链","aria-hidden":"true"}},[this._v("#")]),this._v(" 2分钟起链")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("使用Docker，你可以在２分钟内启动你自己的SDAG区块链。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 Docker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"把当前用户添加至-docker-用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#把当前用户添加至-docker-用户组","aria-hidden":"true"}},[this._v("#")]),this._v(" 把当前用户添加至 Docker 用户组")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gpasswd -a "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" docker\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"拉取-sdag-的-docker-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取-sdag-的-docker-镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 拉取 SDAG 的 Docker 镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker pull sdag/sdag_testnet_dev\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"启动docker镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动docker镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动docker镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker run --rm -d --name sdag -p 6615:6615 -p 8080:8080 sdag/sdag_testnet_dev\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);e.default=r.exports}}]);