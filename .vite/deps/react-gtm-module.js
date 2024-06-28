import {
  __commonJS
} from "./chunk-UV5CTPV7.js";

// node_modules/react-gtm-module/dist/utils/warn.js
var require_warn = __commonJS({
  "node_modules/react-gtm-module/dist/utils/warn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var warn = function warn2(s) {
      console.warn("[react-gtm]", s);
    };
    exports.default = warn;
  }
});

// node_modules/react-gtm-module/dist/Snippets.js
var require_Snippets = __commonJS({
  "node_modules/react-gtm-module/dist/Snippets.js"(exports, module) {
    "use strict";
    var _warn = require_warn();
    var _warn2 = _interopRequireDefault(_warn);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Snippets = {
      tags: function tags(_ref) {
        var id = _ref.id, events = _ref.events, dataLayer = _ref.dataLayer, dataLayerName = _ref.dataLayerName, preview = _ref.preview, auth = _ref.auth;
        var gtm_auth = "&gtm_auth=" + auth;
        var gtm_preview = "&gtm_preview=" + preview;
        if (!id)
          (0, _warn2.default)("GTM Id is required");
        var iframe = '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + id + gtm_auth + gtm_preview + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>';
        var script = "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(events).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + gtm_auth + gtm_preview + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + dataLayerName + "','" + id + "');";
        var dataLayerVar = this.dataLayer(dataLayer, dataLayerName);
        return {
          iframe,
          script,
          dataLayerVar
        };
      },
      dataLayer: function dataLayer(_dataLayer, dataLayerName) {
        return "\n      window." + dataLayerName + " = window." + dataLayerName + " || [];\n      window." + dataLayerName + ".push(" + JSON.stringify(_dataLayer) + ")";
      }
    };
    module.exports = Snippets;
  }
});

// node_modules/react-gtm-module/dist/TagManager.js
var require_TagManager = __commonJS({
  "node_modules/react-gtm-module/dist/TagManager.js"(exports, module) {
    "use strict";
    var _Snippets = require_Snippets();
    var _Snippets2 = _interopRequireDefault(_Snippets);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var TagManager = {
      dataScript: function dataScript(dataLayer) {
        var script = document.createElement("script");
        script.innerHTML = dataLayer;
        return script;
      },
      gtm: function gtm(args) {
        var snippets = _Snippets2.default.tags(args);
        var noScript = function noScript2() {
          var noscript = document.createElement("noscript");
          noscript.innerHTML = snippets.iframe;
          return noscript;
        };
        var script = function script2() {
          var script3 = document.createElement("script");
          script3.innerHTML = snippets.script;
          return script3;
        };
        var dataScript = this.dataScript(snippets.dataLayerVar);
        return {
          noScript,
          script,
          dataScript
        };
      },
      initialize: function initialize(_ref) {
        var gtmId = _ref.gtmId, _ref$events = _ref.events, events = _ref$events === void 0 ? {} : _ref$events, dataLayer = _ref.dataLayer, _ref$dataLayerName = _ref.dataLayerName, dataLayerName = _ref$dataLayerName === void 0 ? "dataLayer" : _ref$dataLayerName, _ref$auth = _ref.auth, auth = _ref$auth === void 0 ? "" : _ref$auth, _ref$preview = _ref.preview, preview = _ref$preview === void 0 ? "" : _ref$preview;
        var gtm = this.gtm({
          id: gtmId,
          events,
          dataLayer: dataLayer || void 0,
          dataLayerName,
          auth,
          preview
        });
        if (dataLayer)
          document.head.appendChild(gtm.dataScript);
        document.head.insertBefore(gtm.script(), document.head.childNodes[0]);
        document.body.insertBefore(gtm.noScript(), document.body.childNodes[0]);
      },
      dataLayer: function dataLayer(_ref2) {
        var _dataLayer = _ref2.dataLayer, _ref2$dataLayerName = _ref2.dataLayerName, dataLayerName = _ref2$dataLayerName === void 0 ? "dataLayer" : _ref2$dataLayerName;
        if (window[dataLayerName])
          return window[dataLayerName].push(_dataLayer);
        var snippets = _Snippets2.default.dataLayer(_dataLayer, dataLayerName);
        var dataScript = this.dataScript(snippets);
        document.head.insertBefore(dataScript, document.head.childNodes[0]);
      }
    };
    module.exports = TagManager;
  }
});

// node_modules/react-gtm-module/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-gtm-module/dist/index.js"(exports, module) {
    var _TagManager = require_TagManager();
    var _TagManager2 = _interopRequireDefault(_TagManager);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = _TagManager2.default;
  }
});
export default require_dist();
//# sourceMappingURL=react-gtm-module.js.map
