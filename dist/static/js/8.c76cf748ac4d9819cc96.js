webpackJsonp([8],{"9eu3":function(t,e){},MIom:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3nlj"),n=(a("btxw"),a("9rMa")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},r={data:function(){return{switchHeader:!1,switchFooter:!1,dataList:{},mainarea:!1,slidename:"slide-go"}},components:{Headersec:i.a},computed:s({},Object(n.mapGetters)(["this.$store.state.login"])),mounted:function(){},activated:function(){this.mainarea=!0,this.getData(),this.setDetailid(this.$route.query.id)},deactivated:function(){this.mainarea=!1},methods:s({onCollect:function(){this.dataList.collect=!0},getData:function(){var t=this,e="";e="index"==this.$route.query.from?"recommend":"hot",this.$http.get(""+this.$baseURL+e+"/detail?id="+this.$route.query.id).then(function(e){console.log(e.data.data.content);var a=e.data.data.content.replace("&lt;!DOCTYPE html&gt;","");a=(a=(a=(a=(a=(a=a.replace("&lt;html&gt;","")).replace("&lt;head&gt;","")).replace("&lt;/head&gt;","")).replace("&lt;body&gt;","")).replace("&lt;/body&gt;","")).replace("&lt;/html&gt;",""),t.dataList=a}).catch(function(t){console.log(t)})}},Object(n.mapMutations)({setDetailid:"SET_DETAILID"}))},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("headersec",{attrs:{tabname:"内容详情"}}),this._v(" "),e("transition",{attrs:{name:this.slidename}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.mainarea,expression:"mainarea"}],ref:"wrapper",staticClass:"container "},[e("div",{ref:"content",staticClass:"content"},[e("div",{domProps:{innerHTML:this._s(this.dataList)}})])])])],1)},staticRenderFns:[]};var c=a("vSla")(r,o,!1,function(t){a("9eu3")},"data-v-40c04f30",null);e.default=c.exports}});