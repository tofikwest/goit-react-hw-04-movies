(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{57:function(e,t,n){"use strict";var r=n(59),a=n.n(r),c={fetchPopularMovies:function(){return a.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("a82fadf78ee82b5f692528aa8db30ffe")).then((function(e){return e.data.results}))},fetchMoviesByQuery:function(e){return a.a.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US&page=1&include_adult=false")).then((function(e){return e.data.results}))},fetchMoviesById:function(e){return a.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US")).then((function(e){return e.data}))},fetchMoviesCastById:function(e){return a.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US")).then((function(e){return e.data.cast}))},fetchMoviesReviewById:function(e){return a.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=1a7532c831c19ca759402dbd11644ca2&language=en-US&page=1")).then((function(e){return e.data.results}))}};t.a=c},58:function(e,t,n){"use strict";var r=n(9),a=n(3),c=n(1);t.a=Object(a.f)((function(e){var t=e.movies,n=e.location;return t.map((function(e){var t=e.id,a=e.title;return Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:{pathname:"/movies/".concat(t),state:{from:n}},children:a})},t)}))}))},86:function(e,t,n){"use strict";var r=n(87),a=n(15);function c(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function o(e){return Array.isArray(e)?e.sort():"object"===typeof e?o(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!==typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),n(decodeURIComponent(a),c,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?e[t]=o(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[c(t,e),"[",r,"]"].join(""):[c(t,e),"[",c(r,e),"]=",c(n,e)].join("")};case"bracket":return function(t,n){return null===n?c(t,e):[c(t,e),"[]=",c(n,e)].join("")};default:return function(t,n){return null===n?c(t,e):[c(t,e),"=",c(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return c(r,t);if(Array.isArray(a)){var o=[];return a.slice().forEach((function(e){void 0!==e&&o.push(n(r,e,o.length))})),o.join("&")}return c(r,t)+"="+c(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},87:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},92:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(11),c=n(13),o=n(12),i=n(0),u=n(58),s=n(1),f=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={searchQuery:"",movies:[]},e.onInputChange=function(t){e.setState({searchQuery:t.target.value})},e.onFormSubmit=function(t){t.preventDefault();var n=e.state.searchQuery;e.props.onSubmit(n)},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(s.jsxs)("form",{action:"submit",onSubmit:this.onFormSubmit,children:[Object(s.jsx)("input",{type:"input",value:e,onChange:this.onInputChange,placeholder:"\u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435"}),Object(s.jsx)("button",{type:"submit",children:"Search"})]})}}]),n}(i.Component),h=n(86),p=n.n(h),l=n(57),v=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={searchQuery:"",movies:[]},e.getQueryFromProps=function(e){return p.a.parse(e.location.search)},e.onQueryChange=function(t){e.setState({searchQuery:t})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.getQueryFromProps(this.props).query;e&&this.setState({searchQuery:e})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.searchQuery;n!==t.searchQuery&&(this.fetchMovies(),this.props.history.push({search:"query=".concat(n)}))}},{key:"fetchMovies",value:function(){var e=this,t=this.state.searchQuery;l.a.fetchMoviesByQuery(t).then((function(t){return e.setState({movies:t})}))}},{key:"render",value:function(){var e=this.state.movies;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(f,{onSubmit:this.onQueryChange}),Object(s.jsx)(u.a,{movies:e})]})}}]),n}(i.Component);t.default=v}}]);
//# sourceMappingURL=4.accaa4c3.chunk.js.map