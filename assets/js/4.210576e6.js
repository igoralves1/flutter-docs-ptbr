(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{162:function(t,o,e){},183:function(t,o,e){"use strict";var n=e(162);e.n(n).a},190:function(t,o,e){"use strict";e.r(o);var n={props:{content:{type:String,default:""},contents:{type:Array,default:()=>[]},dir:{type:String,default:"C:src>"}},data:()=>({tooltip:{content:"Clique para copiar",placement:"top",boundariesElement:"body"}}),methods:{copy(){this.$clipboard(this.content||this.contents.join(" && ")),this.tooltip.content="Copiado!",setTimeout(()=>{this.tooltip.content="Clique para copiar"},800)}},computed:{codeBlocks(){return this.content?[this.content]:this.contents}}},i=(e(183),e(6)),c=Object(i.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("pre",{staticClass:"code-box"},[t._v("  "),e("code",{staticClass:"code"},t._l(t.codeBlocks,(function(o,n){return e("div",{staticClass:"code-line"},[t._v(t._s(t.dir)+" "+t._s(o))])})),0),t._v("\n  "),e("i",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"tooltip"}],staticClass:"icon-docs copy-icon",on:{click:t.copy}}),t._v("\n")])}),[],!1,null,"0c6f130a",null);o.default=c.exports}}]);