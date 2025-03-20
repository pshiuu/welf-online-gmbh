// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jeTtx":[function(require,module,exports,__globalThis) {
var _core = require("@xatom/core");
var _routes = require("./routes");
var _motionHeader = require("./modules/animations/motion-header");
var _modules = require("./modules");
var _captcha = require("./modules/captcha");
(0, _core.onReady)(()=>{
    // Initialize global components
    (0, _motionHeader.initMotionHeader)();
    // Initialize all routes
    (0, _routes.initRoutes)();
    // Special case for contact page
    if (window.location.pathname.includes("/kontakt")) {
        console.log("\uD83D\uDCDD Contact Page - Initializing components");
        (0, _modules.initMultiStepForm)();
        (0, _captcha.initCaptcha)();
    }
});

},{"@xatom/core":"8w4K8","./routes":"fnEL6","./modules/animations/motion-header":"jtJ4u","./modules":"dNIfi","./modules/captcha":"cFVXu"}],"8w4K8":[function(require,module,exports,__globalThis) {
var $iEn1Z$uuid = require("116fc168c31b637d");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $90b1e0f272b5544a$exports = {};
$parcel$export($90b1e0f272b5544a$exports, "WFAuth", ()=>$90b1e0f272b5544a$export$cb2138cd710ea58a);
class $90b1e0f272b5544a$export$cb2138cd710ea58a {
    constructor(config = {}){
        this.config = config;
    }
    isLoggedIn() {
        return !!this.user;
    }
    getRole() {
        return this.role;
    }
    getUser() {
        return this.user;
    }
    getConfig() {
        return this.config;
    }
    logout() {
        this.user = null;
        this.role = null;
        this.config = null;
    }
    setUser(user) {
        this.user = user;
    }
    setRole(role) {
        this.role = role;
    }
    setConfig(config) {
        this.config = config;
    }
}
var $336c7a32b438dc35$exports = {};
$parcel$export($336c7a32b438dc35$exports, "WFAuthMiddleware", ()=>$336c7a32b438dc35$export$42f600804a30f397);
class $336c7a32b438dc35$export$42f600804a30f397 {
    constructor(auth){
        this.auth = auth;
    }
    allowTo(role) {
        return this.auth.getRole() === role;
    }
    disallowedTo(role) {
        return this.auth.getRole() !== role;
    }
    getAuth() {
        return this.auth;
    }
}
var $5ce0995b4e579efe$exports = {};
$parcel$export($5ce0995b4e579efe$exports, "WFComponent", ()=>$5ce0995b4e579efe$export$b8941e06d24ae728);
var $30d957643bf2e67a$exports = {};
var $62881ab850a57a38$exports = {};
$parcel$export($62881ab850a57a38$exports, "debug", ()=>$62881ab850a57a38$export$1c9f709888824e05);
const $62881ab850a57a38$export$1c9f709888824e05 = (...args)=>{
    if (window.WFDebug) console.log(...args);
};
var $9e73fdbf37a9aa00$exports = {};
$parcel$export($9e73fdbf37a9aa00$exports, "getElementByXPath", ()=>$9e73fdbf37a9aa00$export$7ffef3582c93037b);
function $9e73fdbf37a9aa00$export$7ffef3582c93037b(xpath, parent) {
    const result = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}
var $100caf27c28c32c0$exports = {};
$parcel$export($100caf27c28c32c0$exports, "getRouteQueryParams", ()=>$100caf27c28c32c0$export$1346b4a9ff9b6881);
const $100caf27c28c32c0$export$1346b4a9ff9b6881 = ()=>{
    const _data = {};
    new URLSearchParams(location.search).forEach((val, key)=>{
        _data[key] = val;
    });
    return _data;
};
var $e533c87ae7d96e3e$exports = {};
$parcel$export($e533c87ae7d96e3e$exports, "getXPathForChangedChild", ()=>$e533c87ae7d96e3e$export$5fe4b019801f5ef1);
function $e533c87ae7d96e3e$export$5fe4b019801f5ef1(node, parent) {
    const xpathParts = [];
    // Traverse up the DOM tree from the node and generate an XPath expression for each parent element
    while(node && node !== parent && node.nodeType === Node.ELEMENT_NODE){
        let xpath = node.nodeName.toLowerCase();
        // If the element has an ID attribute, add it to the XPath expression
        if (node.hasAttribute("id")) xpath += '[@id="' + node.getAttribute("id") + '"]';
        else if (node.hasAttribute("class")) xpath += '[@class="' + node.getAttribute("class") + '"]';
        // Add the XPath expression for this element to the list
        xpathParts.unshift(xpath);
        // Move up to the parent element
        node = node.parentNode;
    }
    // Combine the XPath parts into a single XPath expression
    return xpathParts.join("/");
}
var $4117225480b0cc44$exports = {};
$parcel$export($4117225480b0cc44$exports, "navigate", ()=>$4117225480b0cc44$export$ff7962acd6052c28);
const $4117225480b0cc44$export$ff7962acd6052c28 = (arg)=>{
    if (typeof arg === "string") window.location.assign(arg);
    else if (typeof arg === "object" && arg.type === "replace") window.location.replace(arg.to);
    else if (typeof arg === "object" && arg.type === "reload") window.location.reload();
};
var $0b3f70b8f06eedca$exports = {};
$parcel$export($0b3f70b8f06eedca$exports, "parse", ()=>$0b3f70b8f06eedca$export$98e6a39c04603d36);
$parcel$export($0b3f70b8f06eedca$exports, "compile", ()=>$0b3f70b8f06eedca$export$ef7acd7185315e22);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToFunction", ()=>$0b3f70b8f06eedca$export$5b9bad9e403cf3d9);
$parcel$export($0b3f70b8f06eedca$exports, "match", ()=>$0b3f70b8f06eedca$export$4659b591c19bdf3d);
$parcel$export($0b3f70b8f06eedca$exports, "pathToRegexp", ()=>$0b3f70b8f06eedca$export$71304158c7e35877);
$parcel$export($0b3f70b8f06eedca$exports, "regexpToFunction", ()=>$0b3f70b8f06eedca$export$968e97c88708237a);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToRegexp", ()=>$0b3f70b8f06eedca$export$9a9303716def6456);
$parcel$export($0b3f70b8f06eedca$exports, "routeMatch", ()=>$0b3f70b8f06eedca$export$6c50148cf1d992bd);
/**
 * Tokenizer results.
 */ /**
 * Tokenize input string.
 */ function $0b3f70b8f06eedca$var$lexer(str) {
    const tokens = [];
    let i = 0;
    while(i < str.length){
        const char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            let name = "";
            let j = i + 1;
            while(j < str.length){
                const code = str.charCodeAt(j);
                if (code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError(`Missing parameter name at ${i}`);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            let count = 1;
            let pattern = "";
            let j = i + 1;
            if (str[j] === "?") throw new TypeError(`Pattern cannot start with "?" at ${j}`);
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError(`Capturing groups are not allowed at ${j}`);
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
            if (!pattern) throw new TypeError(`Missing pattern at ${i}`);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function $0b3f70b8f06eedca$export$98e6a39c04603d36(str, options = {}) {
    const tokens = $0b3f70b8f06eedca$var$lexer(str);
    const { prefixes: prefixes = "./" } = options;
    const defaultPattern = `[^${$0b3f70b8f06eedca$var$escapeString(options.delimiter || "/#?")}]+?`;
    const result = [];
    let key = 0;
    let i = 0;
    let path = "";
    const tryConsume = (type)=>{
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    const mustConsume = (type)=>{
        const value = tryConsume(type);
        if (value !== undefined) return value;
        const { type: nextType, index: index } = tokens[i];
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = ()=>{
        let result = "";
        let value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        const char = tryConsume("CHAR");
        const name = tryConsume("NAME");
        const pattern = tryConsume("PATTERN");
        if (name || pattern) {
            let prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        const value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        const open = tryConsume("OPEN");
        if (open) {
            const prefix = consumeText();
            const name = tryConsume("NAME") || "";
            const pattern = tryConsume("PATTERN") || "";
            const suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name || (pattern ? key++ : ""),
                pattern: name && !pattern ? defaultPattern : pattern,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function $0b3f70b8f06eedca$export$ef7acd7185315e22(str, options) {
    return $0b3f70b8f06eedca$export$5b9bad9e403cf3d9($0b3f70b8f06eedca$export$98e6a39c04603d36(str, options), options);
}
function $0b3f70b8f06eedca$export$5b9bad9e403cf3d9(tokens, options = {}) {
    const reFlags = $0b3f70b8f06eedca$var$flags(options);
    const { encode: encode = (x)=>x, validate: validate = true } = options;
    // Compile all the tokens into regexps.
    const matches = tokens.map((token)=>{
        if (typeof token === "object") return new RegExp(`^(?:${token.pattern})$`, reFlags);
    });
    return (data)=>{
        let path = "";
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            const value = data ? data[token.name] : undefined;
            const optional = token.modifier === "?" || token.modifier === "*";
            const repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError(`Expected "${token.name}" to not be empty`);
                }
                for(let j = 0; j < value.length; j++){
                    const segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                const segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            const typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
        }
        return path;
    };
}
function $0b3f70b8f06eedca$export$4659b591c19bdf3d(str, options) {
    const keys = [];
    const re = $0b3f70b8f06eedca$export$71304158c7e35877(str, keys, options);
    return $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options);
}
function $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options = {}) {
    const { decode: decode = (x)=>x } = options;
    return function(pathname) {
        const m = re.exec(pathname);
        if (!m) return false;
        const { 0: path, index: index } = m;
        const params = Object.create(null);
        for(let i = 1; i < m.length; i++){
            if (m[i] === undefined) continue;
            const key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map((value)=>{
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function $0b3f70b8f06eedca$var$escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function $0b3f70b8f06eedca$var$flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function $0b3f70b8f06eedca$var$regexpToRegexp(path, keys) {
    if (!keys) return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function $0b3f70b8f06eedca$var$arrayToRegexp(paths, keys, options) {
    const parts = paths.map((path)=>$0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options).source);
    return new RegExp(`(?:${parts.join("|")})`, $0b3f70b8f06eedca$var$flags(options));
}
/**
 * Create a path regexp from string input.
 */ function $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options) {
    return $0b3f70b8f06eedca$export$9a9303716def6456($0b3f70b8f06eedca$export$98e6a39c04603d36(path, options), keys, options);
}
function $0b3f70b8f06eedca$export$9a9303716def6456(tokens, keys, options = {}) {
    const { strict: strict = false, start: start = true, end: end = true, encode: encode = (x)=>x, delimiter: delimiter = "/#?", endsWith: endsWith = "" } = options;
    const endsWithRe = `[${$0b3f70b8f06eedca$var$escapeString(endsWith)}]|$`;
    const delimiterRe = `[${$0b3f70b8f06eedca$var$escapeString(delimiter)}]`;
    let route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (const token of tokens)if (typeof token === "string") route += $0b3f70b8f06eedca$var$escapeString(encode(token));
    else {
        const prefix = $0b3f70b8f06eedca$var$escapeString(encode(token.prefix));
        const suffix = $0b3f70b8f06eedca$var$escapeString(encode(token.suffix));
        if (token.pattern) {
            if (keys) keys.push(token);
            if (prefix || suffix) {
                if (token.modifier === "+" || token.modifier === "*") {
                    const mod = token.modifier === "*" ? "?" : "";
                    route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
                } else route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            } else if (token.modifier === "+" || token.modifier === "*") route += `((?:${token.pattern})${token.modifier})`;
            else route += `(${token.pattern})${token.modifier}`;
        } else route += `(?:${prefix}${suffix})${token.modifier}`;
    }
    if (end) {
        if (!strict) route += `${delimiterRe}?`;
        route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
    } else {
        const endToken = tokens[tokens.length - 1];
        const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
        if (!isEndDelimited) route += `(?=${delimiterRe}|${endsWithRe})`;
    }
    return new RegExp(route, $0b3f70b8f06eedca$var$flags(options));
}
function $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options) {
    if (path instanceof RegExp) return $0b3f70b8f06eedca$var$regexpToRegexp(path, keys);
    if (Array.isArray(path)) return $0b3f70b8f06eedca$var$arrayToRegexp(path, keys, options);
    return $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options);
}
function $0b3f70b8f06eedca$var$pathMatch(options = {}) {
    return function(path) {
        var keys = [];
        var re = $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options);
        return function(pathname, params) {
            var m = re.exec(pathname);
            if (!m) return false;
            params = params || {};
            var key, param;
            for(var i = 0; i < keys.length; i++){
                key = keys[i];
                param = m[i + 1];
                if (!param) continue;
                params[key.name] = $0b3f70b8f06eedca$var$decodeParam(param);
                if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
            }
            return params;
        };
    };
}
const $0b3f70b8f06eedca$export$6c50148cf1d992bd = (routeToMatch, route, defaultParams = {}, options = {})=>{
    return $0b3f70b8f06eedca$var$pathMatch(options)(routeToMatch)(route, defaultParams);
};
function $0b3f70b8f06eedca$var$decodeParam(param) {
    try {
        return decodeURIComponent(param);
    } catch (_) {
        throw new Error('failed to decode param "' + param + '"');
    }
}
var $36bdd128d4111a37$exports = {};
$parcel$export($36bdd128d4111a37$exports, "createComponent", ()=>$36bdd128d4111a37$export$60e54eaca7e7fb38);
const $36bdd128d4111a37$export$60e54eaca7e7fb38 = (type)=>{
    return new $5ce0995b4e579efe$export$b8941e06d24ae728(document.createElement(type));
};
$parcel$exportWildcard($30d957643bf2e67a$exports, $62881ab850a57a38$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $9e73fdbf37a9aa00$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $100caf27c28c32c0$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $e533c87ae7d96e3e$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $4117225480b0cc44$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $0b3f70b8f06eedca$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $36bdd128d4111a37$exports);
class $5ce0995b4e579efe$export$b8941e06d24ae728 {
    constructor(query){
        if (typeof query === "string") {
            const el = document.querySelector(query);
            if (el) {
                this.element = el;
                this.updateClone();
            } else throw new Error(`Could not find ${query}`);
        } else if (typeof query === "object" && query instanceof HTMLElement) {
            this.element = query;
            this.updateClone();
        } else if (typeof query === "object" && query instanceof SVGSVGElement) {
            this.element = query;
            this.updateClone();
        } else if (query instanceof $5ce0995b4e579efe$export$b8941e06d24ae728) {
            this.element = query.getElement();
            this.updateClone();
        } else throw new Error(`Could not find ${query}`);
    }
    updateClone() {
        this.cloneEl = this.element.cloneNode(true);
    }
    getElement() {
        return this.element;
    }
    updateTextViaAttrVar(keyPair) {
        const fields = {};
        const addEl = (key, val)=>{
            if (!(key in fields)) fields[key] = [];
            fields[key].push(val);
        };
        if (this.hasAttribute("xa-var")) addEl(this.getAttribute("xa-var"), this.getElement());
        const _els = this.getChildAsComponents(`[xa-var]`);
        _els.forEach((el)=>{
            addEl(el.getAttribute("xa-var"), el.getElement());
        });
        Object.keys(keyPair).forEach((key)=>{
            if (key in fields) fields[key].forEach((d)=>{
                d.textContent = keyPair[key].toString();
            });
        });
    }
    updateTextVariable(keyPair) {
        if (this.cloneEl.childNodes.length === 1 && this.cloneEl.firstChild instanceof Text) Object.keys(keyPair).forEach((key)=>{
            if (this.cloneEl.textContent.includes(`{{${key}}}`)) this.element.textContent = this.cloneEl.textContent.replace(`{{${key}}}`, keyPair[key].toString());
        });
        else {
            const els = Array.from(this.cloneEl.querySelectorAll("*")).map((el)=>Array.from(el.childNodes).filter((node)=>node instanceof Text && node.textContent.trim().length > 0)).flat();
            // console.log(els, this.cloneEl);
            Object.keys(keyPair).forEach((key)=>{
                els.filter((el)=>el.textContent.includes(`{{${key}}}`)).forEach((el)=>{
                    const path = $e533c87ae7d96e3e$export$5fe4b019801f5ef1(el.parentElement, this.cloneEl);
                    const _el = $9e73fdbf37a9aa00$export$7ffef3582c93037b(path, this.element);
                    // console.log(
                    //   el,
                    //   _el,
                    //   " found",
                    //   path,
                    //   el.parentElement,
                    //   this
                    // );
                    if (_el) _el.textContent = el.textContent.replace(`{{${key}}}`, keyPair[key].toString());
                    else console.log(el, _el, "not found", path, el.parentElement, this);
                });
            });
        }
    }
    setAttribute(key, value) {
        this.element.setAttribute(key, value);
    }
    removeAttribute(key) {
        this.element.removeAttribute(key);
    }
    getAttribute(key) {
        return this.element.getAttribute(key);
    }
    hasAttribute(key) {
        return this.element.hasAttribute(key);
    }
    getChildAsComponents(selector) {
        return Array.from(this.element.querySelectorAll(selector)).map((el)=>new $5ce0995b4e579efe$export$b8941e06d24ae728(el));
    }
    getChildAsComponent(selector) {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selector));
    }
    getManyChildAsComponents(selectors) {
        let _els = {};
        Object.keys(selectors).forEach((key)=>{
            _els[key] = new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selectors[key]));
        });
        return _els;
    }
    getCssClass() {
        return Array.from(this.element.classList);
    }
    addCssClass(className) {
        this.element.classList.add(className);
        this.cloneEl.classList.add(className);
    }
    removeCssClass(className) {
        this.element.classList.remove(className);
        this.cloneEl.classList.remove(className);
    }
    replaceCssClass(className, newClassName) {
        this.element.classList.replace(className, newClassName);
        this.cloneEl.classList.replace(className, newClassName);
    }
    toggleCssClass(className) {
        this.element.classList.toggle(className);
        this.cloneEl.classList.toggle(className);
    }
    on(type, listener, options) {
        this.element.addEventListener(type, listener, options);
    }
    off(type, listener, options) {
        this.element.removeEventListener(type, listener, options);
    }
    setText(text) {
        this.getElement().innerText = text.toString();
    }
    getText() {
        return this.getElement().innerText;
    }
    setTextContent(text) {
        this.getElement().textContent = text;
    }
    getTextContent() {
        return this.getElement().textContent;
    }
    setHTML(htmlText) {
        this.getElement().innerHTML = htmlText;
    }
    getHTML() {
        return this.getElement().innerHTML;
    }
    getCloneAsComponent() {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.cloneEl.cloneNode(true));
    }
    setStyle(style = {}) {
        Object.keys(style).forEach((key)=>{
            this.element.style[key] = style[key];
        });
    }
    getStyle() {
        return window.getComputedStyle(this.element);
    }
    appendChild(child) {
        this.element.appendChild(new $5ce0995b4e579efe$export$b8941e06d24ae728(child).getElement());
    }
    remove() {
        this.element.remove();
    }
    removeAllChildren() {
        this.element.replaceChildren();
    }
}
var $0105599dd5ebe189$exports = {};
$parcel$export($0105599dd5ebe189$exports, "WFDynamicList", ()=>$0105599dd5ebe189$export$688e73055717bd51);
class $0105599dd5ebe189$export$688e73055717bd51 extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    showLoadingState = false;
    constructor(query, config){
        super(query);
        if (typeof config.rowSelector === "string") this.rowComponent = this.getChildAsComponent(config.rowSelector);
        else this.rowComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.rowSelector);
        this.rowComponent.remove();
        if (config.loaderSelector) {
            if (typeof config.loaderSelector === "string") this.loaderComponent = this.getChildAsComponent(config.loaderSelector);
            else this.loaderComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.loaderSelector);
            this.loaderComponent.remove();
        }
        if (config.emptySelector) {
            if (typeof config.emptySelector === "string") this.emptyComponent = this.getChildAsComponent(config.emptySelector);
            else this.emptyComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.emptySelector);
            this.emptyComponent.remove();
        }
    }
    rowRenderer(cb) {
        this.rowRendererCB = cb;
    }
    emptyRenderer(cb) {
        this.emptyRendererCB = cb;
    }
    loaderRenderer(cb) {
        this.loaderRendererCB = cb;
    }
    setData(data) {
        this.data = data;
        this.render();
    }
    render() {
        if (!this.rowRendererCB) throw new Error("Unable to find renderer");
        this.hideLoading();
        this.removeAllChildren();
        if (this.data.length === 0 && this.emptyComponent) this.showEmpty();
        this.data.map((rowData, index, data)=>this.rowRendererCB({
                index: index,
                rowData: rowData,
                rowElement: this.rowComponent.getCloneAsComponent(),
                data: data
            })).filter((d)=>d).forEach((d)=>{
            this.appendChild(d);
        });
        if (this.showLoadingState) this.showLoading();
    }
    changeLoadingStatus(state) {
        this.showLoadingState = state;
        if (state) this.showLoading();
        else this.hideLoading();
    }
    showLoading() {
        this.hideLoading();
        if (!this.loaderComponent) return;
        if (this.loaderRendererCB) {
            this.lastLoadingComponent = this.loaderRendererCB(this.loaderComponent.getCloneAsComponent());
            this.appendChild(this.lastLoadingComponent);
        } else {
            this.lastLoadingComponent = this.loaderComponent.getCloneAsComponent();
            this.appendChild(this.lastLoadingComponent);
        }
    }
    showEmpty() {
        this.hideEmpty();
        if (this.emptyRendererCB) {
            this.lastEmptyComponent = this.emptyRendererCB(this.emptyComponent.getCloneAsComponent());
            this.appendChild(this.lastEmptyComponent);
        } else {
            this.lastEmptyComponent = this.emptyComponent.getCloneAsComponent();
            this.appendChild(this.lastEmptyComponent);
        }
    }
    hideLoading() {
        if (this.lastLoadingComponent) this.lastLoadingComponent.remove();
    }
    hideEmpty() {
        if (this.lastEmptyComponent) this.lastEmptyComponent.remove();
    }
    forceRender() {
        this.render();
    }
}
var $ce18c18667e54846$exports = {};
$parcel$export($ce18c18667e54846$exports, "WFFormComponent", ()=>$ce18c18667e54846$export$e7173e584c7cbeff);
class $ce18c18667e54846$export$e7173e584c7cbeff extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    defaultFormDisplayStyle = "";
    constructor(query){
        super(query);
        this.formComponent = this.getChildAsComponents("form")[0];
        this.defaultFormDisplayStyle = window.getComputedStyle(this.formComponent.getElement()).display;
    }
    getFormData() {
        const _data = {};
        new FormData(this.formComponent.getElement()).forEach((val, key)=>{
            if (_data[key]) _data[key] = [
                _data[key],
                val
            ].flat();
            else _data[key] = val;
        });
        return _data;
    }
    setFromData(data) {
        Object.keys(data).forEach((key)=>{
            this.getFormComponent().getElement().querySelector(`[name="${key}"]`).value = data[key];
        });
    }
    onFormSubmit(cb) {
        this.formComponent.getElement().onsubmit = (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            cb(this.getFormData(), ev);
        };
    }
    submitWebflowForm() {
        const wfForm = Object.keys(this.formComponent.getElement()).filter((d)=>d.includes("jQuery")).map((d)=>this.formComponent.getElement()[d]).filter((d)=>typeof d === "object" && ".wForm" in d).map((d)=>d[".wForm"]).reduce((d)=>d);
        if (wfForm && wfForm.handler) wfForm.handler(wfForm);
        else if (wfForm && wfForm.action) this.formComponent.getElement().submit();
    }
    getFormComponent() {
        return this.formComponent;
    }
    getSuccessComponent() {
        return this.getChildAsComponents(".w-form-done")[0];
    }
    getErrorComponent() {
        return this.getChildAsComponents(".w-form-fail")[0];
    }
    showSuccessState() {
        this.formComponent.getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "block";
    }
    showErrorState() {
        this.getSuccessComponent().getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "block";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    showForm() {
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "none";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    disableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.setAttribute("disabled", "disabled");
        });
    }
    enableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.removeAttribute("disabled");
        });
    }
    getSubmitButton() {
        return this.formComponent.getChildAsComponents(`[type="submit"]`)[0];
    }
    resetForm() {
        this.formComponent.getElement().reset();
    }
    updateSubmitButtonText(text) {
        this.getSubmitButton().setAttribute("value", text);
    }
}
var $b73002af79232c1a$exports = {};
$parcel$export($b73002af79232c1a$exports, "WFRoute", ()=>$b73002af79232c1a$export$4e1b92c1162557be);
class $b73002af79232c1a$export$4e1b92c1162557be {
    middlewareAllowExecutionOnFail = false;
    constructor(route){
        this.route = route;
    }
    withMiddleware(middleware, role, type = "allow", options = {}) {
        this.middleware = middleware;
        this.middlewareRole = role;
        this.middlewareType = type;
        if ("allowExecutionOnFail" in options) this.middlewareAllowExecutionOnFail = options.allowExecutionOnFail === true;
        if ("onError" in options) this.middlewareErrorFn = options.onError;
        return this;
    }
    validateRole() {
        return this.middlewareType === "allow" ? this.middleware.allowTo(this.middlewareRole) : this.middleware.disallowedTo(this.middlewareRole);
    }
    execute(fn) {
        const _match = $0b3f70b8f06eedca$export$6c50148cf1d992bd(this.route, location.pathname);
        if (_match) {
            $62881ab850a57a38$export$1c9f709888824e05("matched fn start", this.route, location.pathname);
            if (this.middleware) {
                const canAccess = this.validateRole();
                $62881ab850a57a38$export$1c9f709888824e05("checking access role", this.route, this.middlewareRole, this.middlewareType, "canAccess", canAccess, this.middlewareAllowExecutionOnFail);
                if (canAccess || this.middlewareAllowExecutionOnFail) fn({
                    ..._match,
                    ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
                }, canAccess, this.middleware.getAuth());
                else this.middlewareErrorFn && this.middlewareErrorFn();
            } else fn({
                ..._match,
                ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
            }, true);
            $62881ab850a57a38$export$1c9f709888824e05("matched fn end", this.route, location.pathname);
        } else $62881ab850a57a38$export$1c9f709888824e05("did not match", this.route, location.pathname);
        return this;
    }
}
var $16d2504bbe4bb459$exports = {};
$parcel$export($16d2504bbe4bb459$exports, "onReady", ()=>$16d2504bbe4bb459$export$ef1639a4b889352d);
/**
 * @description execute code when the page is loaded
 * @param cb callback function
 */ const $16d2504bbe4bb459$export$ef1639a4b889352d = (cb)=>{
    window.Webflow ||= [];
    window.Webflow.push(()=>{
        cb();
    });
};
var $78395a99ad91c494$exports = {};
$parcel$export($78395a99ad91c494$exports, "WFInvisibleForm", ()=>$78395a99ad91c494$export$bc36999d76b95c72);
class $78395a99ad91c494$export$bc36999d76b95c72 {
    loading = false;
    loadingListener = new Map();
    successListener = new Map();
    errorListener = new Map();
    constructor(formName = ""){
        this.fromName = formName;
        this.siteId = document.querySelector("html").getAttribute("data-wf-site") || "";
    }
    setFormName(formName) {
        this.fromName = formName;
    }
    getFormName() {
        return this.fromName;
    }
    setFormData(data) {
        this.data = data;
    }
    getFormData() {
        return this.data;
    }
    isLoading() {
        return this.loading;
    }
    onLoadingChange(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.loadingListener.set(_id, fn);
        return ()=>{
            this.loadingListener.delete(_id);
        };
    }
    onSuccess(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.successListener.set(_id, fn);
        return ()=>{
            this.successListener.delete(_id);
        };
    }
    onError(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.errorListener.set(_id, fn);
        return ()=>{
            this.errorListener.delete(_id);
        };
    }
    updateLoadingState(state) {
        this.loading = state;
        this.loadingListener.forEach((fn)=>{
            fn(this.loading);
        });
    }
    formSubmitted() {
        this.successListener.forEach((fn)=>{
            fn();
        });
    }
    formFailed() {
        this.errorListener.forEach((fn)=>{
            fn();
        });
    }
    submitForm() {
        const _updateStatus = (state)=>{
            this.updateLoadingState(state);
        };
        const onFailed = ()=>{
            this.formFailed();
        };
        const onDone = ()=>{
            this.formSubmitted();
        };
        _updateStatus(true);
        window["jQuery"].ajax({
            url: `https://webflow.com/api/v1/form/${this.siteId}`,
            type: "POST",
            data: {
                name: this.fromName || "Untitled Form",
                source: location.href,
                test: false,
                fields: this.data,
                dolphin: false
            },
            dataType: "json",
            crossDomain: true
        }).done(function(response) {
            _updateStatus(false);
            if (response && response.code === 200) onDone();
            else onFailed();
        }).fail(function() {
            _updateStatus(false);
            onFailed();
        });
    }
}
$parcel$exportWildcard(module.exports, $90b1e0f272b5544a$exports);
$parcel$exportWildcard(module.exports, $336c7a32b438dc35$exports);
$parcel$exportWildcard(module.exports, $5ce0995b4e579efe$exports);
$parcel$exportWildcard(module.exports, $0105599dd5ebe189$exports);
$parcel$exportWildcard(module.exports, $ce18c18667e54846$exports);
$parcel$exportWildcard(module.exports, $b73002af79232c1a$exports);
$parcel$exportWildcard(module.exports, $30d957643bf2e67a$exports);
$parcel$exportWildcard(module.exports, $16d2504bbe4bb459$exports);
$parcel$exportWildcard(module.exports, $78395a99ad91c494$exports);

},{"116fc168c31b637d":"ggZPL"}],"ggZPL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"jG1dk","./v3.js":"ap9Ro","./v4.js":"6RfIs","./v5.js":"eBz2t","./nil.js":"8sEtz","./version.js":"4vEj5","./validate.js":"dfZI5","./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jG1dk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cHt7R":[function(require,module,exports,__globalThis) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bFRkJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dfZI5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"5bk3T","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5bk3T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ap9Ro":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)('v3', 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"asOV2","./md5.js":"ieSzG","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"asOV2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1KoND":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ieSzG":[function(require,module,exports,__globalThis) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = '0123456789abcdef';
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6RfIs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"8mdcZ","./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8mdcZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eBz2t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)('v5', 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"asOV2","./sha1.js":"lger1","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lger1":[function(require,module,exports,__globalThis) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8sEtz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '00000000-0000-0000-0000-000000000000';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4vEj5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fnEL6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRoutes", ()=>initRoutes);
parcelHelpers.export(exports, "HomeRoute", ()=>HomeRoute);
parcelHelpers.export(exports, "FotostudioRoute", ()=>FotostudioRoute);
parcelHelpers.export(exports, "TeamRoute", ()=>TeamRoute);
parcelHelpers.export(exports, "RefRoute", ()=>RefRoute);
parcelHelpers.export(exports, "VideoproduktionenRoute", ()=>VideoproduktionenRoute);
parcelHelpers.export(exports, "VideografieRoute", ()=>VideografieRoute);
parcelHelpers.export(exports, "FotoproduktionRoute", ()=>FotoproduktionRoute);
var _core = require("@xatom/core");
var _videoPlayer = require("../modules/videos/video-player");
var _marquees = require("../modules/slider/marquees");
var _homeMotion = require("../modules/animations/home-motion");
var _testimonialSlider = require("../modules/slider/testimonial-slider");
var _motionHeader = require("../modules/animations/motion-header");
var _fotostudioMotion = require("../modules/animations/fotostudio-motion");
var _videoproduktionenMotion = require("../modules/animations/videoproduktionen-motion");
var _beispielPlayer = require("../modules/videos/beispiel-player");
var _beispielSlider = require("../modules/slider/beispiel-slider");
var _bilderSlider = require("../modules/slider/bilder-slider");
var _fotoproduktionMotion = require("../modules/animations/fotoproduktion-motion");
var _videoproduktionMotion = require("../modules/animations/videoproduktion-motion");
var _btsSlider = require("../modules/slider/bts-slider");
var _refSlider = require("../modules/slider/ref-slider");
var _beispielVidSlid = require("../modules/beispiel-vid-slid");
var _fotoBeispielSlider = require("../modules/slider/foto-beispiel-slider");
const initRoutes = ()=>{
    // Home page route
    new (0, _core.WFRoute)("/").execute(()=>{
        console.log("\uD83C\uDFE0 Home Page - Initializing components");
        (0, _testimonialSlider.initTestimonialSlider)();
        (0, _refSlider.initReferenceSlider)();
        (0, _videoPlayer.initVideoPlayer)();
        (0, _marquees.initMarquee)();
        (0, _homeMotion.initHomeMotion)();
    });
    // Fotostudio page route
    new (0, _core.WFRoute)("/fotostudio").execute(()=>{
        console.log("\uD83D\uDCF8 Fotostudio Page - Initializing components");
        (0, _motionHeader.initMotionHeader)();
        (0, _fotostudioMotion.initFotostudioMotion)();
    });
    // Fotoproduktion subpages
    new (0, _core.WFRoute)("/fotoproduktion/(.*)").execute(()=>{
        console.log("\uD83D\uDCF7 Fotoproduktion Subpage - Initializing components");
        (0, _motionHeader.initMotionHeader)();
        (0, _bilderSlider.initBilderSlider)();
        (0, _fotoBeispielSlider.initFotoBeispielSlider)();
        (0, _fotoproduktionMotion.initFotoproduktionMotion)();
    });
    // Team page route
    new (0, _core.WFRoute)("/referenzen").execute(()=>{
        console.log(" Ref Page - Initializing components");
        (0, _motionHeader.initMotionHeader)();
        (0, _videoPlayer.initVideoPlayer)();
    });
    new (0, _core.WFRoute)("/erklaer-animationsvideos").execute(()=>{
        console.log(" Animation - Initializing components");
        (0, _beispielVidSlid.initBeispiel)();
    });
    // Team page route
    new (0, _core.WFRoute)("/team").execute(()=>{
        console.log("\uD83D\uDC65 Team Page - Initializing components");
        (0, _motionHeader.initMotionHeader)();
        (0, _btsSlider.initBtsSlider)();
        (0, _videoPlayer.initVideoPlayer)();
    });
    // Main Videoproduktion page
    new (0, _core.WFRoute)("/videoproduktion").execute(()=>{
        console.log("\uD83C\uDFAC Videoproduktion Main Page - Initializing components");
        (0, _videoproduktionenMotion.initVideoproduktionenMotion)();
        (0, _beispielPlayer.initBeispielPlayer)();
        (0, _beispielSlider.initBeispielSlider)();
    });
    // All videoproduktion subpages - using regex pattern instead of wildcards
    new (0, _core.WFRoute)("/videoproduktion/(.*)").execute(()=>{
        console.log("\uD83C\uDFA5 Videoproduktion Subpage - Initializing components");
        (0, _motionHeader.initMotionHeader)();
        (0, _videoproduktionMotion.initVideoproduktionSubpageMotion)();
        (0, _beispielVidSlid.initBeispiel)();
    });
};
const HomeRoute = ()=>{
    // Removed duplicate testimonial slider initialization
    // new WFRoute("/").execute(initTestimonialSlider);
    new (0, _core.WFRoute)("/").execute((0, _videoPlayer.initVideoPlayer));
    new (0, _core.WFRoute)("/").execute((0, _marquees.initMarquee));
    new (0, _core.WFRoute)("/").execute((0, _homeMotion.initHomeMotion));
};
const FotostudioRoute = ()=>{
    new (0, _core.WFRoute)("/fotostudio").execute((0, _motionHeader.initMotionHeader));
    new (0, _core.WFRoute)("/fotostudio").execute((0, _fotostudioMotion.initFotostudioMotion));
};
const TeamRoute = ()=>{
    new (0, _core.WFRoute)("/team").execute((0, _motionHeader.initMotionHeader));
    new (0, _core.WFRoute)("/team").execute((0, _btsSlider.initBtsSlider));
};
const RefRoute = ()=>{
    new (0, _core.WFRoute)("/referenzen").execute((0, _motionHeader.initMotionHeader));
    new (0, _core.WFRoute)("/referenzen").execute((0, _videoPlayer.initVideoPlayer));
};
const VideoproduktionenRoute = ()=>{
    new (0, _core.WFRoute)("/videoproduktion").execute((0, _videoproduktionenMotion.initVideoproduktionenMotion));
};
const VideografieRoute = ()=>{
    new (0, _core.WFRoute)("/videoproduktion/(.*)").execute(()=>{
        console.log("\uD83C\uDFA5 Videografie Route - Initializing components");
        (0, _beispielPlayer.initBeispielPlayer)();
        (0, _beispielSlider.initBeispielSlider)();
        (0, _videoproduktionMotion.initVideoproduktionSubpageMotion)();
    });
};
const FotoproduktionRoute = ()=>{
    new (0, _core.WFRoute)("/fotoproduktion/(.*)").execute(()=>{
        console.log("foto moin");
        (0, _motionHeader.initMotionHeader)();
        (0, _bilderSlider.initBilderSlider)();
        (0, _fotoBeispielSlider.initFotoBeispielSlider)();
        (0, _fotoproduktionMotion.initFotoproduktionMotion)();
    });
};

},{"@xatom/core":"8w4K8","../modules/videos/video-player":"e1tNK","../modules/slider/marquees":"53rcq","../modules/animations/home-motion":"beiv4","../modules/slider/testimonial-slider":"1AA4g","../modules/animations/motion-header":"jtJ4u","../modules/animations/fotostudio-motion":"cGx0z","../modules/animations/videoproduktionen-motion":"9nCkP","../modules/videos/beispiel-player":"hw7zM","../modules/slider/beispiel-slider":"63o3I","../modules/slider/bilder-slider":"5ZBzB","../modules/animations/fotoproduktion-motion":"8zJl2","../modules/animations/videoproduktion-motion":"6qU9w","../modules/slider/bts-slider":"2dpWZ","../modules/slider/ref-slider":"iJweE","../modules/beispiel-vid-slid":"bsvlh","../modules/slider/foto-beispiel-slider":"9qiDU","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"e1tNK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initVideoPlayer", ()=>initVideoPlayer);
var _plyr = require("plyr");
var _plyrDefault = parcelHelpers.interopDefault(_plyr);
const initVideoPlayer = ()=>{
    const controls = [
        "play",
        "current-time",
        "duration",
        "mute",
        "volume",
        "fullscreen"
    ];
    // Initialize all player instances
    const players = (0, _plyrDefault.default).setup(".js-player", {
        controls
    });
    // Handle video cover click events
    const handleCoverClick = ()=>{
        const coverElements = document.querySelectorAll(".plyr_cover");
        coverElements.forEach((cover)=>{
            cover.addEventListener("click", (event)=>{
                // Get the parent plyr_component
                const playerComponent = cover.closest(".plyr_component");
                if (playerComponent) {
                    // Find the Plyr instance for this component
                    const videoElement = playerComponent.querySelector(".js-player");
                    const playerIndex = Array.from(document.querySelectorAll(".js-player")).indexOf(videoElement);
                    if (playerIndex !== -1 && players[playerIndex]) {
                        // Hide the cover
                        cover.style.display = "none";
                        // Play the video
                        players[playerIndex].play();
                    }
                }
            });
        });
    };
    // Initialize the cover click handlers
    handleCoverClick();
    return players;
};

},{"plyr":"3NhIP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3NhIP":[function(require,module,exports,__globalThis) {
var global = arguments[3];
"object" == typeof navigator && function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(e, t, i) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var s = i.call(e, t || "default");
                    if ("object" != typeof s) return s;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            }(e, "string");
            return "symbol" == typeof t ? t : String(t);
        }(t)) in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e;
    }
    function t(e, t) {
        for(var i = 0; i < t.length; i++){
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
        }
    }
    function i(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e;
    }
    function s(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t && (s = s.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, s);
        }
        return i;
    }
    function n(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach(function(t) {
                i(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
        return e;
    }
    var a = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };
    var l = function(e) {
        return null != e ? e.constructor : null;
    }, r = function(e, t) {
        return !!(e && t && e instanceof t);
    }, o = function(e) {
        return null == e;
    }, c = function(e) {
        return l(e) === Object;
    }, u = function(e) {
        return l(e) === String;
    }, h = function(e) {
        return Array.isArray(e);
    }, d = function(e) {
        return r(e, NodeList);
    }, m = {
        nullOrUndefined: o,
        object: c,
        number: function(e) {
            return l(e) === Number && !Number.isNaN(e);
        },
        string: u,
        boolean: function(e) {
            return l(e) === Boolean;
        },
        function: function(e) {
            return l(e) === Function;
        },
        array: h,
        nodeList: d,
        element: function(e) {
            return r(e, Element);
        },
        event: function(e) {
            return r(e, Event);
        },
        empty: function(e) {
            return o(e) || (u(e) || h(e) || d(e)) && !e.length || c(e) && !Object.keys(e).length;
        }
    };
    function p(e, t) {
        if (1 > t) {
            var i = function(e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
            }(t);
            return parseFloat(e.toFixed(i));
        }
        return Math.round(e / t) * t;
    }
    var g = function() {
        function e(t, i) {
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e), m.element(t) ? this.element = t : m.string(t) && (this.element = document.querySelector(t)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i), this.init());
        }
        return function(e, i, s) {
            i && t(e.prototype, i), s && t(e, s);
        }(e, [
            {
                key: "init",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
                }
            },
            {
                key: "destroy",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
                }
            },
            {
                key: "listeners",
                value: function(e) {
                    var t = this, i = e ? "addEventListener" : "removeEventListener";
                    [
                        "touchstart",
                        "touchmove",
                        "touchend"
                    ].forEach(function(e) {
                        t.element[i](e, function(e) {
                            return t.set(e);
                        }, !1);
                    });
                }
            },
            {
                key: "get",
                value: function(t) {
                    if (!e.enabled || !m.event(t)) return null;
                    var i, s = t.target, n = t.changedTouches[0], a = parseFloat(s.getAttribute("min")) || 0, l = parseFloat(s.getAttribute("max")) || 100, r = parseFloat(s.getAttribute("step")) || 1, o = s.getBoundingClientRect(), c = 100 / o.width * (this.config.thumbWidth / 2) / 100;
                    return 0 > (i = 100 / o.width * (n.clientX - o.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + p(i / 100 * (l - a), r);
                }
            },
            {
                key: "set",
                value: function(t) {
                    e.enabled && m.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                        if (e && t) {
                            var i = new Event(t, {
                                bubbles: !0
                            });
                            e.dispatchEvent(i);
                        }
                    }(t.target, "touchend" === t.type ? "change" : "input"));
                }
            }
        ], [
            {
                key: "setup",
                value: function(t) {
                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, s = null;
                    if (m.empty(t) || m.string(t) ? s = Array.from(document.querySelectorAll(m.string(t) ? t : 'input[type="range"]')) : m.element(t) ? s = [
                        t
                    ] : m.nodeList(t) ? s = Array.from(t) : m.array(t) && (s = t.filter(m.element)), m.empty(s)) return null;
                    var l = n({}, a, {}, i);
                    if (m.string(t) && l.watch) {
                        var r = new MutationObserver(function(i) {
                            Array.from(i).forEach(function(i) {
                                Array.from(i.addedNodes).forEach(function(i) {
                                    m.element(i) && function(e, t) {
                                        return (function() {
                                            return Array.from(document.querySelectorAll(t)).includes(this);
                                        }).call(e, t);
                                    }(i, t) && new e(i, l);
                                });
                            });
                        });
                        r.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        });
                    }
                    return s.map(function(t) {
                        return new e(t, i);
                    });
                }
            },
            {
                key: "enabled",
                get: function() {
                    return "ontouchstart" in document.documentElement;
                }
            }
        ]), e;
    }();
    const f = (e)=>null != e ? e.constructor : null, y = (e, t)=>Boolean(e && t && e instanceof t), b = (e)=>null == e, v = (e)=>f(e) === Object, w = (e)=>f(e) === String, T = (e)=>"function" == typeof e, k = (e)=>Array.isArray(e), C = (e)=>y(e, NodeList), A = (e)=>b(e) || (w(e) || k(e) || C(e)) && !e.length || v(e) && !Object.keys(e).length;
    var S = {
        nullOrUndefined: b,
        object: v,
        number: (e)=>f(e) === Number && !Number.isNaN(e),
        string: w,
        boolean: (e)=>f(e) === Boolean,
        function: T,
        array: k,
        weakMap: (e)=>y(e, WeakMap),
        nodeList: C,
        element: (e)=>null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
        textNode: (e)=>f(e) === Text,
        event: (e)=>y(e, Event),
        keyboardEvent: (e)=>y(e, KeyboardEvent),
        cue: (e)=>y(e, window.TextTrackCue) || y(e, window.VTTCue),
        track: (e)=>y(e, TextTrack) || !b(e) && w(e.kind),
        promise: (e)=>y(e, Promise) && T(e.then),
        url: (e)=>{
            if (y(e, window.URL)) return !0;
            if (!w(e)) return !1;
            let t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
            try {
                return !A(new URL(t).hostname);
            } catch (e) {
                return !1;
            }
        },
        empty: A
    };
    const E = (()=>{
        const e = document.createElement("span"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, i = Object.keys(t).find((t)=>void 0 !== e.style[t]);
        return !!S.string(i) && t[i];
    })();
    function P(e, t) {
        setTimeout(()=>{
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1;
            } catch (e) {}
        }, t);
    }
    var M = {
        isIE: Boolean(window.document.documentMode),
        isEdge: /Edge/g.test(navigator.userAgent),
        isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
        isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
        isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
        isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1
    };
    function N(e, t) {
        return t.split(".").reduce((e, t)=>e && e[t], e);
    }
    function x(e = {}, ...t) {
        if (!t.length) return e;
        const i = t.shift();
        return S.object(i) ? (Object.keys(i).forEach((t)=>{
            S.object(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                [t]: {}
            }), x(e[t], i[t])) : Object.assign(e, {
                [t]: i[t]
            });
        }), x(e, ...t)) : e;
    }
    function L(e, t) {
        const i = e.length ? e : [
            e
        ];
        Array.from(i).reverse().forEach((e, i)=>{
            const s = i > 0 ? t.cloneNode(!0) : t, n = e.parentNode, a = e.nextSibling;
            s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
        });
    }
    function I(e, t) {
        S.element(e) && !S.empty(t) && Object.entries(t).filter(([, e])=>!S.nullOrUndefined(e)).forEach(([t, i])=>e.setAttribute(t, i));
    }
    function $(e, t, i) {
        const s = document.createElement(e);
        return S.object(t) && I(s, t), S.string(i) && (s.innerText = i), s;
    }
    function _(e, t, i, s) {
        S.element(t) && t.appendChild($(e, i, s));
    }
    function O(e) {
        S.nodeList(e) || S.array(e) ? Array.from(e).forEach(O) : S.element(e) && S.element(e.parentNode) && e.parentNode.removeChild(e);
    }
    function j(e) {
        if (!S.element(e)) return;
        let { length: t } = e.childNodes;
        for(; t > 0;)e.removeChild(e.lastChild), t -= 1;
    }
    function q(e, t) {
        return S.element(t) && S.element(t.parentNode) && S.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
    }
    function D(e, t) {
        if (!S.string(e) || S.empty(e)) return {};
        const i = {}, s = x({}, t);
        return e.split(",").forEach((e)=>{
            const t = e.trim(), n = t.replace(".", ""), a = t.replace(/[[\]]/g, "").split("="), [l] = a, r = a.length > 1 ? a[1].replace(/["']/g, "") : "";
            switch(t.charAt(0)){
                case ".":
                    S.string(s.class) ? i.class = `${s.class} ${n}` : i.class = n;
                    break;
                case "#":
                    i.id = t.replace("#", "");
                    break;
                case "[":
                    i[l] = r;
            }
        }), x(s, i);
    }
    function H(e, t) {
        if (!S.element(e)) return;
        let i = t;
        S.boolean(i) || (i = !e.hidden), e.hidden = i;
    }
    function R(e, t, i) {
        if (S.nodeList(e)) return Array.from(e).map((e)=>R(e, t, i));
        if (S.element(e)) {
            let s = "toggle";
            return void 0 !== i && (s = i ? "add" : "remove"), e.classList[s](t), e.classList.contains(t);
        }
        return !1;
    }
    function F(e, t) {
        return S.element(e) && e.classList.contains(t);
    }
    function V(e, t) {
        const { prototype: i } = Element;
        return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
            return Array.from(document.querySelectorAll(t)).includes(this);
        }).call(e, t);
    }
    function U(e) {
        return this.elements.container.querySelectorAll(e);
    }
    function B(e) {
        return this.elements.container.querySelector(e);
    }
    function W(e = null, t = !1) {
        S.element(e) && e.focus({
            preventScroll: !0,
            focusVisible: t
        });
    }
    const z = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora"
    }, K = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check (e, t) {
            const i = K[e] || "html5" !== t;
            return {
                api: i,
                ui: i && K.rangeInput
            };
        },
        pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)),
        airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime (e) {
            if (S.empty(e)) return !1;
            const [t] = e.split("/");
            let i = e;
            if (!this.isHTML5 || t !== this.type) return !1;
            Object.keys(z).includes(i) && (i += `; codecs="${z[e]}"`);
            try {
                return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
            } catch (e) {
                return !1;
            }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (()=>{
            const e = document.createElement("input");
            return e.type = "range", "range" === e.type;
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== E,
        reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
    }, Y = (()=>{
        let e = !1;
        try {
            const t = Object.defineProperty({}, "passive", {
                get: ()=>(e = !0, null)
            });
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
    })();
    function Q(e, t, i, s = !1, n = !0, a = !1) {
        if (!e || !("addEventListener" in e) || S.empty(t) || !S.function(i)) return;
        const l = t.split(" ");
        let r = a;
        Y && (r = {
            passive: n,
            capture: a
        }), l.forEach((t)=>{
            this && this.eventListeners && s && this.eventListeners.push({
                element: e,
                type: t,
                callback: i,
                options: r
            }), e[s ? "addEventListener" : "removeEventListener"](t, i, r);
        });
    }
    function X(e, t = "", i, s = !0, n = !1) {
        Q.call(this, e, t, i, !0, s, n);
    }
    function J(e, t = "", i, s = !0, n = !1) {
        Q.call(this, e, t, i, !1, s, n);
    }
    function G(e, t = "", i, s = !0, n = !1) {
        const a = (...l)=>{
            J(e, t, a, s, n), i.apply(this, l);
        };
        Q.call(this, e, t, a, !0, s, n);
    }
    function Z(e, t = "", i = !1, s = {}) {
        if (!S.element(e) || S.empty(t)) return;
        const n = new CustomEvent(t, {
            bubbles: i,
            detail: {
                ...s,
                plyr: this
            }
        });
        e.dispatchEvent(n);
    }
    function ee() {
        this && this.eventListeners && (this.eventListeners.forEach((e)=>{
            const { element: t, type: i, callback: s, options: n } = e;
            t.removeEventListener(i, s, n);
        }), this.eventListeners = []);
    }
    function te() {
        return new Promise((e)=>this.ready ? setTimeout(e, 0) : X.call(this, this.elements.container, "ready", e)).then(()=>{});
    }
    function ie(e) {
        S.promise(e) && e.then(null, ()=>{});
    }
    function se(e) {
        return S.array(e) ? e.filter((t, i)=>e.indexOf(t) === i) : e;
    }
    function ne(e, t) {
        return S.array(e) && e.length ? e.reduce((e, i)=>Math.abs(i - t) < Math.abs(e - t) ? i : e) : null;
    }
    function ae(e) {
        return !(!window || !window.CSS) && window.CSS.supports(e);
    }
    const le = [
        [
            1,
            1
        ],
        [
            4,
            3
        ],
        [
            3,
            4
        ],
        [
            5,
            4
        ],
        [
            4,
            5
        ],
        [
            3,
            2
        ],
        [
            2,
            3
        ],
        [
            16,
            10
        ],
        [
            10,
            16
        ],
        [
            16,
            9
        ],
        [
            9,
            16
        ],
        [
            21,
            9
        ],
        [
            9,
            21
        ],
        [
            32,
            9
        ],
        [
            9,
            32
        ]
    ].reduce((e, [t, i])=>({
            ...e,
            [t / i]: [
                t,
                i
            ]
        }), {});
    function re(e) {
        if (!(S.array(e) || S.string(e) && e.includes(":"))) return !1;
        return (S.array(e) ? e : e.split(":")).map(Number).every(S.number);
    }
    function oe(e) {
        if (!S.array(e) || !e.every(S.number)) return null;
        const [t, i] = e, s = (e, t)=>0 === t ? e : s(t, e % t), n = s(t, i);
        return [
            t / n,
            i / n
        ];
    }
    function ce(e) {
        const t = (e)=>re(e) ? e.split(":").map(Number) : null;
        let i = t(e);
        if (null === i && (i = t(this.config.ratio)), null === i && !S.empty(this.embed) && S.array(this.embed.ratio) && ({ ratio: i } = this.embed), null === i && this.isHTML5) {
            const { videoWidth: e, videoHeight: t } = this.media;
            i = [
                e,
                t
            ];
        }
        return oe(i);
    }
    function ue(e) {
        if (!this.isVideo) return {};
        const { wrapper: t } = this.elements, i = ce.call(this, e);
        if (!S.array(i)) return {};
        const [s, n] = oe(i), a = 100 / s * n;
        if (ae(`aspect-ratio: ${s}/${n}`) ? t.style.aspectRatio = `${s}/${n}` : t.style.paddingBottom = `${a}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i = (e - a) / (e / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`;
        } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
        return {
            padding: a,
            ratio: i
        };
    }
    function he(e, t, i = .05) {
        const s = e / t, n = ne(Object.keys(le), s);
        return Math.abs(n - s) <= i ? le[n] : [
            e,
            t
        ];
    }
    const de = {
        getSources () {
            if (!this.isHTML5) return [];
            return Array.from(this.media.querySelectorAll("source")).filter((e)=>{
                const t = e.getAttribute("type");
                return !!S.empty(t) || K.mime.call(this, t);
            });
        },
        getQualityOptions () {
            return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map((e)=>Number(e.getAttribute("size"))).filter(Boolean);
        },
        setup () {
            if (!this.isHTML5) return;
            const e = this;
            e.options.speed = e.config.speed.options, S.empty(this.config.ratio) || ue.call(e), Object.defineProperty(e.media, "quality", {
                get () {
                    const t = de.getSources.call(e).find((t)=>t.getAttribute("src") === e.source);
                    return t && Number(t.getAttribute("size"));
                },
                set (t) {
                    if (e.quality !== t) {
                        if (e.config.quality.forced && S.function(e.config.quality.onChange)) e.config.quality.onChange(t);
                        else {
                            const i = de.getSources.call(e).find((e)=>Number(e.getAttribute("size")) === t);
                            if (!i) return;
                            const { currentTime: s, paused: n, preload: a, readyState: l, playbackRate: r } = e.media;
                            e.media.src = i.getAttribute("src"), ("none" !== a || l) && (e.once("loadedmetadata", ()=>{
                                e.speed = r, e.currentTime = s, n || ie(e.play());
                            }), e.media.load());
                        }
                        Z.call(e, e.media, "qualitychange", !1, {
                            quality: t
                        });
                    }
                }
            });
        },
        cancelRequests () {
            this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
        }
    };
    function me(e, ...t) {
        return S.empty(e) ? e : e.toString().replace(/{(\d+)}/g, (e, i)=>t[i].toString());
    }
    const pe = (e = "", t = "", i = "")=>e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()), ge = (e = "")=>e.toString().replace(/\w\S*/g, (e)=>e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
    function fe(e = "") {
        let t = e.toString();
        return t = function(e = "") {
            let t = e.toString();
            return t = pe(t, "-", " "), t = pe(t, "_", " "), t = ge(t), pe(t, " ", "");
        }(t), t.charAt(0).toLowerCase() + t.slice(1);
    }
    function ye(e) {
        const t = document.createElement("div");
        return t.appendChild(e), t.innerHTML;
    }
    const be = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube"
    }, ve = {
        get (e = "", t = {}) {
            if (S.empty(e) || S.empty(t)) return "";
            let i = N(t.i18n, e);
            if (S.empty(i)) return Object.keys(be).includes(e) ? be[e] : "";
            const s = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(s).forEach(([e, t])=>{
                i = pe(i, e, t);
            }), i;
        }
    };
    class we {
        constructor(t){
            e(this, "get", (e)=>{
                if (!we.supported || !this.enabled) return null;
                const t = window.localStorage.getItem(this.key);
                if (S.empty(t)) return null;
                const i = JSON.parse(t);
                return S.string(e) && e.length ? i[e] : i;
            }), e(this, "set", (e)=>{
                if (!we.supported || !this.enabled) return;
                if (!S.object(e)) return;
                let t = this.get();
                S.empty(t) && (t = {}), x(t, e);
                try {
                    window.localStorage.setItem(this.key, JSON.stringify(t));
                } catch (e) {}
            }), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
        }
        static get supported() {
            try {
                if (!("localStorage" in window)) return !1;
                const e = "___test";
                return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
            } catch (e) {
                return !1;
            }
        }
    }
    function Te(e, t = "text") {
        return new Promise((i, s)=>{
            try {
                const s = new XMLHttpRequest;
                if (!("withCredentials" in s)) return;
                s.addEventListener("load", ()=>{
                    if ("text" === t) try {
                        i(JSON.parse(s.responseText));
                    } catch (e) {
                        i(s.responseText);
                    }
                    else i(s.response);
                }), s.addEventListener("error", ()=>{
                    throw new Error(s.status);
                }), s.open("GET", e, !0), s.responseType = t, s.send();
            } catch (e) {
                s(e);
            }
        });
    }
    function ke(e, t) {
        if (!S.string(e)) return;
        const i = "cache", s = S.string(t);
        let n = !1;
        const a = ()=>null !== document.getElementById(t), l = (e, t)=>{
            e.innerHTML = t, s && a() || document.body.insertAdjacentElement("afterbegin", e);
        };
        if (!s || !a()) {
            const a = we.supported, r = document.createElement("div");
            if (r.setAttribute("hidden", ""), s && r.setAttribute("id", t), a) {
                const e = window.localStorage.getItem(`${i}-${t}`);
                if (n = null !== e, n) {
                    const t = JSON.parse(e);
                    l(r, t.content);
                }
            }
            Te(e).then((e)=>{
                if (!S.empty(e)) {
                    if (a) try {
                        window.localStorage.setItem(`${i}-${t}`, JSON.stringify({
                            content: e
                        }));
                    } catch (e) {}
                    l(r, e);
                }
            }).catch(()=>{});
        }
    }
    const Ce = (e)=>Math.trunc(e / 60 / 60 % 60, 10), Ae = (e)=>Math.trunc(e / 60 % 60, 10), Se = (e)=>Math.trunc(e % 60, 10);
    function Ee(e = 0, t = !1, i = !1) {
        if (!S.number(e)) return Ee(void 0, t, i);
        const s = (e)=>`0${e}`.slice(-2);
        let n = Ce(e);
        const a = Ae(e), l = Se(e);
        return n = t || n > 0 ? `${n}:` : "", `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(l)}`;
    }
    const Pe = {
        getIconUrl () {
            const e = new URL(this.config.iconUrl, window.location), t = window.location.host ? window.location.host : window.top.location.host, i = e.host !== t || M.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: i
            };
        },
        findElements () {
            try {
                return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: U.call(this, this.config.selectors.buttons.play),
                    pause: B.call(this, this.config.selectors.buttons.pause),
                    restart: B.call(this, this.config.selectors.buttons.restart),
                    rewind: B.call(this, this.config.selectors.buttons.rewind),
                    fastForward: B.call(this, this.config.selectors.buttons.fastForward),
                    mute: B.call(this, this.config.selectors.buttons.mute),
                    pip: B.call(this, this.config.selectors.buttons.pip),
                    airplay: B.call(this, this.config.selectors.buttons.airplay),
                    settings: B.call(this, this.config.selectors.buttons.settings),
                    captions: B.call(this, this.config.selectors.buttons.captions),
                    fullscreen: B.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: B.call(this, this.config.selectors.inputs.seek),
                    volume: B.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: B.call(this, this.config.selectors.display.buffer),
                    currentTime: B.call(this, this.config.selectors.display.currentTime),
                    duration: B.call(this, this.config.selectors.display.duration)
                }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0;
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
            }
        },
        createIcon (e, t) {
            const i = "http://www.w3.org/2000/svg", s = Pe.getIconUrl.call(this), n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`, a = document.createElementNS(i, "svg");
            I(a, x(t, {
                "aria-hidden": "true",
                focusable: "false"
            }));
            const l = document.createElementNS(i, "use"), r = `${n}-${e}`;
            return "href" in l && l.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), a.appendChild(l), a;
        },
        createLabel (e, t = {}) {
            const i = ve.get(e, this.config);
            return $("span", {
                ...t,
                class: [
                    t.class,
                    this.config.classNames.hidden
                ].filter(Boolean).join(" ")
            }, i);
        },
        createBadge (e) {
            if (S.empty(e)) return null;
            const t = $("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild($("span", {
                class: this.config.classNames.menu.badge
            }, e)), t;
        },
        createButton (e, t) {
            const i = x({}, t);
            let s = fe(e);
            const n = {
                element: "button",
                toggle: !1,
                label: null,
                icon: null,
                labelPressed: null,
                iconPressed: null
            };
            switch([
                "element",
                "icon",
                "label"
            ].forEach((e)=>{
                Object.keys(i).includes(e) && (n[e] = i[e], delete i[e]);
            }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((e)=>e === this.config.classNames.control) || x(i, {
                class: `${i.class} ${this.config.classNames.control}`
            }) : i.class = this.config.classNames.control, e){
                case "play":
                    n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
                    break;
                case "mute":
                    n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
                    break;
                case "captions":
                    n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    i.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
                    break;
                default:
                    S.empty(n.label) && (n.label = s), S.empty(n.icon) && (n.icon = e);
            }
            const a = $(n.element);
            return n.toggle ? (a.appendChild(Pe.createIcon.call(this, n.iconPressed, {
                class: "icon--pressed"
            })), a.appendChild(Pe.createIcon.call(this, n.icon, {
                class: "icon--not-pressed"
            })), a.appendChild(Pe.createLabel.call(this, n.labelPressed, {
                class: "label--pressed"
            })), a.appendChild(Pe.createLabel.call(this, n.label, {
                class: "label--not-pressed"
            }))) : (a.appendChild(Pe.createIcon.call(this, n.icon)), a.appendChild(Pe.createLabel.call(this, n.label))), x(i, D(this.config.selectors.buttons[s], i)), I(a, i), "play" === s ? (S.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a;
        },
        createRange (e, t) {
            const i = $("input", x(D(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": ve.get(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = i, Pe.updateRangeFill.call(this, i), g.setup(i), i;
        },
        createProgress (e, t) {
            const i = $("progress", x(D(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                i.appendChild($("span", null, "0"));
                const t = {
                    played: "played",
                    buffer: "buffered"
                }[e], s = t ? ve.get(t, this.config) : "";
                i.innerText = `% ${s.toLowerCase()}`;
            }
            return this.elements.display[e] = i, i;
        },
        createTime (e, t) {
            const i = D(this.config.selectors.display[e], t), s = $("div", x(i, {
                class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                "aria-label": ve.get(e, this.config),
                role: "timer"
            }), "00:00");
            return this.elements.display[e] = s, s;
        },
        bindMenuItemShortcuts (e, t) {
            X.call(this, e, "keydown keyup", (i)=>{
                if (![
                    " ",
                    "ArrowUp",
                    "ArrowDown",
                    "ArrowRight"
                ].includes(i.key)) return;
                if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
                const s = V(e, '[role="menuitemradio"]');
                if (!s && [
                    " ",
                    "ArrowRight"
                ].includes(i.key)) Pe.showMenuPanel.call(this, t, !0);
                else {
                    let t;
                    " " !== i.key && ("ArrowDown" === i.key || s && "ArrowRight" === i.key ? (t = e.nextElementSibling, S.element(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling, S.element(t) || (t = e.parentNode.lastElementChild)), W.call(this, t, !0));
                }
            }, !1), X.call(this, e, "keyup", (e)=>{
                "Return" === e.key && Pe.focusFirstMenuItem.call(this, null, !0);
            });
        },
        createMenuItem ({ value: e, list: t, type: i, title: s, badge: n = null, checked: a = !1 }) {
            const l = D(this.config.selectors.inputs[i]), r = $("button", x(l, {
                type: "button",
                role: "menuitemradio",
                class: `${this.config.classNames.control} ${l.class ? l.class : ""}`.trim(),
                "aria-checked": a,
                value: e
            })), o = $("span");
            o.innerHTML = s, S.element(n) && o.appendChild(n), r.appendChild(o), Object.defineProperty(r, "checked", {
                enumerable: !0,
                get: ()=>"true" === r.getAttribute("aria-checked"),
                set (e) {
                    e && Array.from(r.parentNode.children).filter((e)=>V(e, '[role="menuitemradio"]')).forEach((e)=>e.setAttribute("aria-checked", "false")), r.setAttribute("aria-checked", e ? "true" : "false");
                }
            }), this.listeners.bind(r, "click keyup", (t)=>{
                if (!S.keyboardEvent(t) || " " === t.key) {
                    switch(t.preventDefault(), t.stopPropagation(), r.checked = !0, i){
                        case "language":
                            this.currentTrack = Number(e);
                            break;
                        case "quality":
                            this.quality = e;
                            break;
                        case "speed":
                            this.speed = parseFloat(e);
                    }
                    Pe.showMenuPanel.call(this, "home", S.keyboardEvent(t));
                }
            }, i, !1), Pe.bindMenuItemShortcuts.call(this, r, i), t.appendChild(r);
        },
        formatTime (e = 0, t = !1) {
            if (!S.number(e)) return e;
            return Ee(e, Ce(this.duration) > 0, t);
        },
        updateTimeDisplay (e = null, t = 0, i = !1) {
            S.element(e) && S.number(t) && (e.innerText = Pe.formatTime(t, i));
        },
        updateVolume () {
            this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
        },
        setRange (e, t = 0) {
            S.element(e) && (e.value = t, Pe.updateRangeFill.call(this, e));
        },
        updateProgress (e) {
            if (!this.supported.ui || !S.event(e)) return;
            let t = 0;
            const i = (e, t)=>{
                const i = S.number(t) ? t : 0, s = S.element(e) ? e : this.elements.display.buffer;
                if (S.element(s)) {
                    s.value = i;
                    const e = s.getElementsByTagName("span")[0];
                    S.element(e) && (e.childNodes[0].nodeValue = i);
                }
            };
            if (e) switch(e.type){
                case "timeupdate":
                case "seeking":
                case "seeked":
                    s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), "timeupdate" === e.type && Pe.setRange.call(this, this.elements.inputs.seek, t);
                    break;
                case "playing":
                case "progress":
                    i(this.elements.display.buffer, 100 * this.buffered);
            }
            var s, n;
        },
        updateRangeFill (e) {
            const t = S.event(e) ? e.target : e;
            if (S.element(t) && "range" === t.getAttribute("type")) {
                if (V(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    const e = Pe.formatTime(this.currentTime), i = Pe.formatTime(this.duration), s = ve.get("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", s.replace("{currentTime}", e).replace("{duration}", i));
                } else if (V(t, this.config.selectors.inputs.volume)) {
                    const e = 100 * t.value;
                    t.setAttribute("aria-valuenow", e), t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
                } else t.setAttribute("aria-valuenow", t.value);
                (M.isWebKit || M.isIPadOS) && t.style.setProperty("--value", t.value / t.max * 100 + "%");
            }
        },
        updateSeekTooltip (e) {
            var t, i;
            if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
            const s = this.elements.display.seekTooltip, n = `${this.config.classNames.tooltip}--visible`, a = (e)=>R(s, n, e);
            if (this.touch) return void a(!1);
            let l = 0;
            const r = this.elements.progress.getBoundingClientRect();
            if (S.event(e)) l = 100 / r.width * (e.pageX - r.left);
            else {
                if (!F(s, n)) return;
                l = parseFloat(s.style.left, 10);
            }
            l < 0 ? l = 0 : l > 100 && (l = 100);
            const o = this.duration / 100 * l;
            s.innerText = Pe.formatTime(o);
            const c = null === (t = this.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(({ time: e })=>e === Math.round(o));
            c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`), s.style.left = `${l}%`, S.event(e) && [
                "mouseenter",
                "mouseleave"
            ].includes(e.type) && a("mouseenter" === e.type);
        },
        timeUpdate (e) {
            const t = !S.element(this.elements.display.duration) && this.config.invertTime;
            Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Pe.updateProgress.call(this, e);
        },
        durationUpdate () {
            if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
            if (this.duration >= 2 ** 32) return H(this.elements.display.currentTime, !0), void H(this.elements.progress, !0);
            S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            const e = S.element(this.elements.display.duration);
            !e && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
        },
        toggleMenuButton (e, t) {
            H(this.elements.settings.buttons[e], !t);
        },
        updateSetting (e, t, i) {
            const s = this.elements.settings.panels[e];
            let n = null, a = t;
            if ("captions" === e) n = this.currentTrack;
            else {
                if (n = S.empty(i) ? this[e] : i, S.empty(n) && (n = this.config[e].default), !S.empty(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
                if (!this.config[e].options.includes(n)) return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
            }
            if (S.element(a) || (a = s && s.querySelector('[role="menu"]')), !S.element(a)) return;
            this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = Pe.getLabel.call(this, e, n);
            const l = a && a.querySelector(`[value="${n}"]`);
            S.element(l) && (l.checked = !0);
        },
        getLabel (e, t) {
            switch(e){
                case "speed":
                    return 1 === t ? ve.get("normal", this.config) : `${t}&times;`;
                case "quality":
                    if (S.number(t)) {
                        const e = ve.get(`qualityLabel.${t}`, this.config);
                        return e.length ? e : `${t}p`;
                    }
                    return ge(t);
                case "captions":
                    return xe.getLabel.call(this);
                default:
                    return null;
            }
        },
        setQualityMenu (e) {
            if (!S.element(this.elements.settings.panels.quality)) return;
            const t = "quality", i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            S.array(e) && (this.options.quality = se(e).filter((e)=>this.config.quality.options.includes(e)));
            const s = !S.empty(this.options.quality) && this.options.quality.length > 1;
            if (Pe.toggleMenuButton.call(this, t, s), j(i), Pe.checkMenu.call(this), !s) return;
            const n = (e)=>{
                const t = ve.get(`qualityBadge.${e}`, this.config);
                return t.length ? Pe.createBadge.call(this, t) : null;
            };
            this.options.quality.sort((e, t)=>{
                const i = this.config.quality.options;
                return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
            }).forEach((e)=>{
                Pe.createMenuItem.call(this, {
                    value: e,
                    list: i,
                    type: t,
                    title: Pe.getLabel.call(this, "quality", e),
                    badge: n(e)
                });
            }), Pe.updateSetting.call(this, t, i);
        },
        setCaptionsMenu () {
            if (!S.element(this.elements.settings.panels.captions)) return;
            const e = "captions", t = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i = xe.getTracks.call(this), s = Boolean(i.length);
            if (Pe.toggleMenuButton.call(this, e, s), j(t), Pe.checkMenu.call(this), !s) return;
            const n = i.map((e, i)=>({
                    value: i,
                    checked: this.captions.toggled && this.currentTrack === i,
                    title: xe.getLabel.call(this, e),
                    badge: e.language && Pe.createBadge.call(this, e.language.toUpperCase()),
                    list: t,
                    type: "language"
                }));
            n.unshift({
                value: -1,
                checked: !this.captions.toggled,
                title: ve.get("disabled", this.config),
                list: t,
                type: "language"
            }), n.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e, t);
        },
        setSpeedMenu () {
            if (!S.element(this.elements.settings.panels.speed)) return;
            const e = "speed", t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            this.options.speed = this.options.speed.filter((e)=>e >= this.minimumSpeed && e <= this.maximumSpeed);
            const i = !S.empty(this.options.speed) && this.options.speed.length > 1;
            Pe.toggleMenuButton.call(this, e, i), j(t), Pe.checkMenu.call(this), i && (this.options.speed.forEach((i)=>{
                Pe.createMenuItem.call(this, {
                    value: i,
                    list: t,
                    type: e,
                    title: Pe.getLabel.call(this, "speed", i)
                });
            }), Pe.updateSetting.call(this, e, t));
        },
        checkMenu () {
            const { buttons: e } = this.elements.settings, t = !S.empty(e) && Object.values(e).some((e)=>!e.hidden);
            H(this.elements.settings.menu, !t);
        },
        focusFirstMenuItem (e, t = !1) {
            if (this.elements.settings.popup.hidden) return;
            let i = e;
            S.element(i) || (i = Object.values(this.elements.settings.panels).find((e)=>!e.hidden));
            const s = i.querySelector('[role^="menuitem"]');
            W.call(this, s, t);
        },
        toggleMenu (e) {
            const { popup: t } = this.elements.settings, i = this.elements.buttons.settings;
            if (!S.element(t) || !S.element(i)) return;
            const { hidden: s } = t;
            let n = s;
            if (S.boolean(e)) n = e;
            else if (S.keyboardEvent(e) && "Escape" === e.key) n = !1;
            else if (S.event(e)) {
                const s = S.function(e.composedPath) ? e.composedPath()[0] : e.target, a = t.contains(s);
                if (a || !a && e.target !== i && n) return;
            }
            i.setAttribute("aria-expanded", n), H(t, !n), R(this.elements.container, this.config.classNames.menu.open, n), n && S.keyboardEvent(e) ? Pe.focusFirstMenuItem.call(this, null, !0) : n || s || W.call(this, i, S.keyboardEvent(e));
        },
        getMenuSize (e) {
            const t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            const i = t.scrollWidth, s = t.scrollHeight;
            return O(t), {
                width: i,
                height: s
            };
        },
        showMenuPanel (e = "", t = !1) {
            const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
            if (!S.element(i)) return;
            const s = i.parentNode, n = Array.from(s.children).find((e)=>!e.hidden);
            if (K.transitions && !K.reducedMotion) {
                s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
                const e = Pe.getMenuSize.call(this, i), t = (e)=>{
                    e.target === s && [
                        "width",
                        "height"
                    ].includes(e.propertyName) && (s.style.width = "", s.style.height = "", J.call(this, s, E, t));
                };
                X.call(this, s, E, t), s.style.width = `${e.width}px`, s.style.height = `${e.height}px`;
            }
            H(n, !0), H(i, !1), Pe.focusFirstMenuItem.call(this, i, t);
        },
        setDownloadUrl () {
            const e = this.elements.buttons.download;
            S.element(e) && e.setAttribute("href", this.download);
        },
        create (e) {
            const { bindMenuItemShortcuts: t, createButton: i, createProgress: s, createRange: n, createTime: a, setQualityMenu: l, setSpeedMenu: r, showMenuPanel: o } = Pe;
            this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
            const c = $("div", D(this.config.selectors.controls.wrapper));
            this.elements.controls = c;
            const u = {
                class: "plyr__controls__item"
            };
            return se(S.array(this.config.controls) ? this.config.controls : []).forEach((l)=>{
                if ("restart" === l && c.appendChild(i.call(this, "restart", u)), "rewind" === l && c.appendChild(i.call(this, "rewind", u)), "play" === l && c.appendChild(i.call(this, "play", u)), "fast-forward" === l && c.appendChild(i.call(this, "fast-forward", u)), "progress" === l) {
                    const t = $("div", {
                        class: `${u.class} plyr__progress__container`
                    }), i = $("div", D(this.config.selectors.progress));
                    if (i.appendChild(n.call(this, "seek", {
                        id: `plyr-seek-${e.id}`
                    })), i.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
                        const e = $("span", {
                            class: this.config.classNames.tooltip
                        }, "00:00");
                        i.appendChild(e), this.elements.display.seekTooltip = e;
                    }
                    this.elements.progress = i, t.appendChild(this.elements.progress), c.appendChild(t);
                }
                if ("current-time" === l && c.appendChild(a.call(this, "currentTime", u)), "duration" === l && c.appendChild(a.call(this, "duration", u)), "mute" === l || "volume" === l) {
                    let { volume: t } = this.elements;
                    if (S.element(t) && c.contains(t) || (t = $("div", x({}, u, {
                        class: `${u.class} plyr__volume`.trim()
                    })), this.elements.volume = t, c.appendChild(t)), "mute" === l && t.appendChild(i.call(this, "mute")), "volume" === l && !M.isIos && !M.isIPadOS) {
                        const i = {
                            max: 1,
                            step: .05,
                            value: this.config.volume
                        };
                        t.appendChild(n.call(this, "volume", x(i, {
                            id: `plyr-volume-${e.id}`
                        })));
                    }
                }
                if ("captions" === l && c.appendChild(i.call(this, "captions", u)), "settings" === l && !S.empty(this.config.settings)) {
                    const s = $("div", x({}, u, {
                        class: `${u.class} plyr__menu`.trim(),
                        hidden: ""
                    }));
                    s.appendChild(i.call(this, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": `plyr-settings-${e.id}`,
                        "aria-expanded": !1
                    }));
                    const n = $("div", {
                        class: "plyr__menu__container",
                        id: `plyr-settings-${e.id}`,
                        hidden: ""
                    }), a = $("div"), l = $("div", {
                        id: `plyr-settings-${e.id}-home`
                    }), r = $("div", {
                        role: "menu"
                    });
                    l.appendChild(r), a.appendChild(l), this.elements.settings.panels.home = l, this.config.settings.forEach((i)=>{
                        const s = $("button", x(D(this.config.selectors.buttons.settings), {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        t.call(this, s, i), X.call(this, s, "click", ()=>{
                            o.call(this, i, !1);
                        });
                        const n = $("span", null, ve.get(i, this.config)), l = $("span", {
                            class: this.config.classNames.menu.value
                        });
                        l.innerHTML = e[i], n.appendChild(l), s.appendChild(n), r.appendChild(s);
                        const c = $("div", {
                            id: `plyr-settings-${e.id}-${i}`,
                            hidden: ""
                        }), u = $("button", {
                            type: "button",
                            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                        });
                        u.appendChild($("span", {
                            "aria-hidden": !0
                        }, ve.get(i, this.config))), u.appendChild($("span", {
                            class: this.config.classNames.hidden
                        }, ve.get("menuBack", this.config))), X.call(this, c, "keydown", (e)=>{
                            "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), o.call(this, "home", !0));
                        }, !1), X.call(this, u, "click", ()=>{
                            o.call(this, "home", !1);
                        }), c.appendChild(u), c.appendChild($("div", {
                            role: "menu"
                        })), a.appendChild(c), this.elements.settings.buttons[i] = s, this.elements.settings.panels[i] = c;
                    }), n.appendChild(a), s.appendChild(n), c.appendChild(s), this.elements.settings.popup = n, this.elements.settings.menu = s;
                }
                if ("pip" === l && K.pip && c.appendChild(i.call(this, "pip", u)), "airplay" === l && K.airplay && c.appendChild(i.call(this, "airplay", u)), "download" === l) {
                    const e = x({}, u, {
                        element: "a",
                        href: this.download,
                        target: "_blank"
                    });
                    this.isHTML5 && (e.download = "");
                    const { download: t } = this.config.urls;
                    !S.url(t) && this.isEmbed && x(e, {
                        icon: `logo-${this.provider}`,
                        label: this.provider
                    }), c.appendChild(i.call(this, "download", e));
                }
                "fullscreen" === l && c.appendChild(i.call(this, "fullscreen", u));
            }), this.isHTML5 && l.call(this, de.getQualityOptions.call(this)), r.call(this), c;
        },
        inject () {
            if (this.config.loadSprite) {
                const e = Pe.getIconUrl.call(this);
                e.cors && ke(e.url, "sprite-plyr");
            }
            this.id = Math.floor(1e4 * Math.random());
            let e = null;
            this.elements.controls = null;
            const t = {
                id: this.id,
                seektime: this.config.seekTime,
                title: this.config.title
            };
            let i = !0;
            S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e = this.config.controls : (e = Pe.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: xe.getLabel.call(this)
            }), i = !1);
            let s;
            i && S.string(this.config.controls) && (e = ((e)=>{
                let i = e;
                return Object.entries(t).forEach(([e, t])=>{
                    i = pe(i, `{${e}}`, t);
                }), i;
            })(e)), S.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), S.element(s) || (s = this.elements.container);
            if (s[S.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
                const e = (e)=>{
                    const t = this.config.classNames.controlPressed;
                    e.setAttribute("aria-pressed", "false"), Object.defineProperty(e, "pressed", {
                        configurable: !0,
                        enumerable: !0,
                        get: ()=>F(e, t),
                        set (i = !1) {
                            R(e, t, i), e.setAttribute("aria-pressed", i ? "true" : "false");
                        }
                    });
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((t)=>{
                    S.array(t) || S.nodeList(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
                });
            }
            if (M.isEdge && P(s), this.config.tooltips.controls) {
                const { classNames: e, selectors: t } = this.config, i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`, s = U.call(this, i);
                Array.from(s).forEach((e)=>{
                    R(e, this.config.classNames.hidden, !1), R(e, this.config.classNames.tooltip, !0);
                });
            }
        },
        setMediaMetadata () {
            try {
                "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                    title: this.config.mediaMetadata.title,
                    artist: this.config.mediaMetadata.artist,
                    album: this.config.mediaMetadata.album,
                    artwork: this.config.mediaMetadata.artwork
                }));
            } catch (e) {}
        },
        setMarkers () {
            var e, t;
            if (!this.duration || this.elements.markers) return;
            const i = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter(({ time: e })=>e > 0 && e < this.duration);
            if (null == i || !i.length) return;
            const s = document.createDocumentFragment(), n = document.createDocumentFragment();
            let a = null;
            const l = `${this.config.classNames.tooltip}--visible`, r = (e)=>R(a, l, e);
            i.forEach((e)=>{
                const t = $("span", {
                    class: this.config.classNames.marker
                }, ""), i = e.time / this.duration * 100 + "%";
                a && (t.addEventListener("mouseenter", ()=>{
                    e.label || (a.style.left = i, a.innerHTML = e.label, r(!0));
                }), t.addEventListener("mouseleave", ()=>{
                    r(!1);
                })), t.addEventListener("click", ()=>{
                    this.currentTime = e.time;
                }), t.style.left = i, n.appendChild(t);
            }), s.appendChild(n), this.config.tooltips.seek || (a = $("span", {
                class: this.config.classNames.tooltip
            }, ""), s.appendChild(a)), this.elements.markers = {
                points: n,
                tip: a
            }, this.elements.progress.appendChild(s);
        }
    };
    function Me(e, t = !0) {
        let i = e;
        if (t) {
            const e = document.createElement("a");
            e.href = i, i = e.href;
        }
        try {
            return new URL(i);
        } catch (e) {
            return null;
        }
    }
    function Ne(e) {
        const t = new URLSearchParams;
        return S.object(e) && Object.entries(e).forEach(([e, i])=>{
            t.set(e, i);
        }), t;
    }
    const xe = {
        setup () {
            if (!this.supported.ui) return;
            if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
            var e, t;
            if (S.element(this.elements.captions) || (this.elements.captions = $("div", D(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e = this.elements.captions, t = this.elements.wrapper, S.element(e) && S.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), M.isIE && window.URL) {
                const e = this.media.querySelectorAll("track");
                Array.from(e).forEach((e)=>{
                    const t = e.getAttribute("src"), i = Me(t);
                    null !== i && i.hostname !== window.location.href.hostname && [
                        "http:",
                        "https:"
                    ].includes(i.protocol) && Te(t, "blob").then((t)=>{
                        e.setAttribute("src", window.URL.createObjectURL(t));
                    }).catch(()=>{
                        O(e);
                    });
                });
            }
            const i = se((navigator.languages || [
                navigator.language || navigator.userLanguage || "en"
            ]).map((e)=>e.split("-")[0]));
            let s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
            "auto" === s && ([s] = i);
            let n = this.storage.get("captions");
            if (S.boolean(n) || ({ active: n } = this.config.captions), Object.assign(this.captions, {
                toggled: !1,
                active: n,
                language: s,
                languages: i
            }), this.isHTML5) {
                const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                X.call(this, this.media.textTracks, e, xe.update.bind(this));
            }
            setTimeout(xe.update.bind(this), 0);
        },
        update () {
            const e = xe.getTracks.call(this, !0), { active: t, language: i, meta: s, currentTrackNode: n } = this.captions, a = Boolean(e.find((e)=>e.language === i));
            this.isHTML5 && this.isVideo && e.filter((e)=>!s.get(e)).forEach((e)=>{
                this.debug.log("Track added", e), s.set(e, {
                    default: "showing" === e.mode
                }), "showing" === e.mode && (e.mode = "hidden"), X.call(this, e, "cuechange", ()=>xe.updateCues.call(this));
            }), (a && this.language !== i || !e.includes(n)) && (xe.setLanguage.call(this, i), xe.toggle.call(this, t && a)), this.elements && R(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
        },
        toggle (e, t = !0) {
            if (!this.supported.ui) return;
            const { toggled: i } = this.captions, s = this.config.classNames.captions.active, n = S.nullOrUndefined(e) ? !i : e;
            if (n !== i) {
                if (t || (this.captions.active = n, this.storage.set({
                    captions: n
                })), !this.language && n && !t) {
                    const e = xe.getTracks.call(this), t = xe.findTrack.call(this, [
                        this.captions.language,
                        ...this.captions.languages
                    ], !0);
                    return this.captions.language = t.language, void xe.set.call(this, e.indexOf(t));
                }
                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), R(this.elements.container, s, n), this.captions.toggled = n, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
            }
            setTimeout(()=>{
                n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
            });
        },
        set (e, t = !0) {
            const i = xe.getTracks.call(this);
            if (-1 !== e) {
                if (S.number(e)) {
                    if (e in i) {
                        if (this.captions.currentTrack !== e) {
                            this.captions.currentTrack = e;
                            const s = i[e], { language: n } = s || {};
                            this.captions.currentTrackNode = s, Pe.updateSetting.call(this, "captions"), t || (this.captions.language = n, this.storage.set({
                                language: n
                            })), this.isVimeo && this.embed.enableTextTrack(n), Z.call(this, this.media, "languagechange");
                        }
                        xe.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
                    } else this.debug.warn("Track not found", e);
                } else this.debug.warn("Invalid caption argument", e);
            } else xe.toggle.call(this, !1, t);
        },
        setLanguage (e, t = !0) {
            if (!S.string(e)) return void this.debug.warn("Invalid language argument", e);
            const i = e.toLowerCase();
            this.captions.language = i;
            const s = xe.getTracks.call(this), n = xe.findTrack.call(this, [
                i
            ]);
            xe.set.call(this, s.indexOf(n), t);
        },
        getTracks (e = !1) {
            return Array.from((this.media || {}).textTracks || []).filter((t)=>!this.isHTML5 || e || this.captions.meta.has(t)).filter((e)=>[
                    "captions",
                    "subtitles"
                ].includes(e.kind));
        },
        findTrack (e, t = !1) {
            const i = xe.getTracks.call(this), s = (e)=>Number((this.captions.meta.get(e) || {}).default), n = Array.from(i).sort((e, t)=>s(t) - s(e));
            let a;
            return e.every((e)=>(a = n.find((t)=>t.language === e), !a)), a || (t ? n[0] : void 0);
        },
        getCurrentTrack () {
            return xe.getTracks.call(this)[this.currentTrack];
        },
        getLabel (e) {
            let t = e;
            return !S.track(t) && K.textTracks && this.captions.toggled && (t = xe.getCurrentTrack.call(this)), S.track(t) ? S.empty(t.label) ? S.empty(t.language) ? ve.get("enabled", this.config) : e.language.toUpperCase() : t.label : ve.get("disabled", this.config);
        },
        updateCues (e) {
            if (!this.supported.ui) return;
            if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
            if (!S.nullOrUndefined(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
            let t = e;
            if (!t) {
                const e = xe.getCurrentTrack.call(this);
                t = Array.from((e || {}).activeCues || []).map((e)=>e.getCueAsHTML()).map(ye);
            }
            const i = t.map((e)=>e.trim()).join("\n");
            if (i !== this.elements.captions.innerHTML) {
                j(this.elements.captions);
                const e = $("span", D(this.config.selectors.caption));
                e.innerHTML = i, this.elements.captions.appendChild(e), Z.call(this, this.media, "cuechange");
            }
        }
    }, Le = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
            default: 576,
            options: [
                4320,
                2880,
                2160,
                1440,
                1080,
                720,
                576,
                480,
                360,
                240
            ],
            forced: !1,
            onChange: null
        },
        loop: {
            active: !1
        },
        speed: {
            selected: 1,
            options: [
                .5,
                .75,
                1,
                1.25,
                1.5,
                1.75,
                2,
                4
            ]
        },
        keyboard: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        captions: {
            active: !1,
            language: "auto",
            update: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "captions",
            "settings",
            "pip",
            "airplay",
            "fullscreen"
        ],
        settings: [
            "captions",
            "quality",
            "speed"
        ],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
                2160: "4K",
                1440: "HD",
                1080: "HD",
                720: "HD",
                576: "SD",
                480: "SD"
            }
        },
        urls: {
            download: null,
            vimeo: {
                sdk: "https://player.vimeo.com/api/player.js",
                iframe: "https://player.vimeo.com/video/{0}?{1}",
                api: "https://vimeo.com/api/oembed.json?url={0}"
            },
            youtube: {
                sdk: "https://www.youtube.com/iframe_api",
                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
                sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
        },
        events: [
            "ended",
            "progress",
            "stalled",
            "playing",
            "waiting",
            "canplay",
            "canplaythrough",
            "loadstart",
            "loadeddata",
            "loadedmetadata",
            "timeupdate",
            "volumechange",
            "play",
            "pause",
            "error",
            "seeking",
            "seeked",
            "emptied",
            "ratechange",
            "cuechange",
            "download",
            "enterfullscreen",
            "exitfullscreen",
            "captionsenabled",
            "captionsdisabled",
            "languagechange",
            "controlshidden",
            "controlsshown",
            "ready",
            "statechange",
            "qualitychange",
            "adsloaded",
            "adscontentpause",
            "adscontentresume",
            "adstarted",
            "adsmidpoint",
            "adscomplete",
            "adsallcomplete",
            "adsimpression",
            "adsclick"
        ],
        selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                fastForward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                download: '[data-plyr="download"]',
                fullscreen: '[data-plyr="fullscreen"]',
                pip: '[data-plyr="pip"]',
                airplay: '[data-plyr="airplay"]',
                settings: '[data-plyr="settings"]',
                loop: '[data-plyr="loop"]'
            },
            inputs: {
                seek: '[data-plyr="seek"]',
                volume: '[data-plyr="volume"]',
                speed: '[data-plyr="speed"]',
                language: '[data-plyr="language"]',
                quality: '[data-plyr="quality"]'
            },
            display: {
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration",
                buffer: ".plyr__progress__buffer",
                loop: ".plyr__progress__loop",
                volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
        },
        classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            marker: "plyr__progress__marker",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
                time: "plyr__time"
            },
            menu: {
                value: "plyr__menu__value",
                badge: "plyr__badge",
                open: "plyr--menu-open"
            },
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                fallback: "plyr--fullscreen-fallback"
            },
            pip: {
                supported: "plyr--pip-supported",
                active: "plyr--pip-active"
            },
            airplay: {
                supported: "plyr--airplay-supported",
                active: "plyr--airplay-active"
            },
            previewThumbnails: {
                thumbContainer: "plyr__preview-thumb",
                thumbContainerShown: "plyr__preview-thumb--is-shown",
                imageContainer: "plyr__preview-thumb__image-container",
                timeContainer: "plyr__preview-thumb__time-container",
                scrubbingContainer: "plyr__preview-scrubbing",
                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
        },
        attributes: {
            embed: {
                provider: "data-plyr-provider",
                id: "data-plyr-embed-id",
                hash: "data-plyr-embed-hash"
            }
        },
        ads: {
            enabled: !1,
            publisherId: "",
            tagUrl: ""
        },
        previewThumbnails: {
            enabled: !1,
            src: ""
        },
        vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: !1,
            customControls: !0,
            referrerPolicy: null,
            premium: !1
        },
        youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            customControls: !0,
            noCookie: !1
        },
        mediaMetadata: {
            title: "",
            artist: "",
            album: "",
            artwork: []
        },
        markers: {
            enabled: !1,
            points: []
        }
    }, Ie = "picture-in-picture", $e = "inline", _e = {
        html5: "html5",
        youtube: "youtube",
        vimeo: "vimeo"
    }, Oe = "audio", je = "video";
    const qe = ()=>{};
    class De {
        constructor(e = !1){
            this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
        }
        get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : qe;
        }
        get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : qe;
        }
        get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : qe;
        }
    }
    class He {
        constructor(t){
            e(this, "onChange", ()=>{
                if (!this.supported) return;
                const e = this.player.elements.buttons.fullscreen;
                S.element(e) && (e.pressed = this.active);
                const t = this.target === this.player.media ? this.target : this.player.elements.container;
                Z.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0);
            }), e(this, "toggleFallback", (e = !1)=>{
                if (e ? this.scrollPosition = {
                    x: window.scrollX ?? 0,
                    y: window.scrollY ?? 0
                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", R(this.target, this.player.config.classNames.fullscreen.fallback, e), M.isIos) {
                    let t = document.head.querySelector('meta[name="viewport"]');
                    const i = "viewport-fit=cover";
                    t || (t = document.createElement("meta"), t.setAttribute("name", "viewport"));
                    const s = S.string(t.content) && t.content.includes(i);
                    e ? (this.cleanupViewport = !s, s || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter((e)=>e.trim() !== i).join(","));
                }
                this.onChange();
            }), e(this, "trapFocus", (e)=>{
                if (M.isIos || M.isIPadOS || !this.active || "Tab" !== e.key) return;
                const t = document.activeElement, i = U.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s] = i, n = i[i.length - 1];
                t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault());
            }), e(this, "update", ()=>{
                if (this.supported) {
                    let e;
                    e = this.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", this.player.debug.log(`${e} fullscreen enabled`);
                } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                R(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            }), e(this, "enter", ()=>{
                this.supported && (M.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !He.nativeSupported || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? S.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                    navigationUI: "hide"
                }));
            }), e(this, "exit", ()=>{
                if (this.supported) {
                    if (M.isIos && this.player.config.fullscreen.iosNative) this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), ie(this.player.play());
                    else if (!He.nativeSupported || this.forceFallback) this.toggleFallback(!1);
                    else if (this.prefix) {
                        if (!S.empty(this.prefix)) {
                            const e = "moz" === this.prefix ? "Cancel" : "Exit";
                            document[`${this.prefix}${e}${this.property}`]();
                        }
                    } else (document.cancelFullScreen || document.exitFullscreen).call(document);
                }
            }), e(this, "toggle", ()=>{
                this.active ? this.exit() : this.enter();
            }), this.player = t, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = {
                x: 0,
                y: 0
            }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                const { prototype: i } = Element;
                return (i.closest || function() {
                    let e = this;
                    do {
                        if (V.matches(e, t)) return e;
                        e = e.parentElement || e.parentNode;
                    }while (null !== e && 1 === e.nodeType);
                    return null;
                }).call(e, t);
            }(this.player.elements.container, t.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, ()=>{
                this.onChange();
            }), X.call(this.player, this.player.elements.container, "dblclick", (e)=>{
                S.element(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen");
            }), X.call(this, this.player.elements.container, "keydown", (e)=>this.trapFocus(e)), this.update();
        }
        static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
        }
        get useNative() {
            return He.nativeSupported && !this.forceFallback;
        }
        static get prefix() {
            if (S.function(document.exitFullscreen)) return "";
            let e = "";
            return [
                "webkit",
                "moz",
                "ms"
            ].some((t)=>!(!S.function(document[`${t}ExitFullscreen`]) && !S.function(document[`${t}CancelFullScreen`])) && (e = t, !0)), e;
        }
        static get property() {
            return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
        }
        get supported() {
            return [
                this.player.config.fullscreen.enabled,
                this.player.isVideo,
                He.nativeSupported || this.player.config.fullscreen.fallback,
                !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
            ].every(Boolean);
        }
        get active() {
            if (!this.supported) return !1;
            if (!He.nativeSupported || this.forceFallback) return F(this.target, this.player.config.classNames.fullscreen.fallback);
            const e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
            return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
        }
        get target() {
            return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen ?? this.player.elements.container;
        }
    }
    function Re(e, t = 1) {
        return new Promise((i, s)=>{
            const n = new Image, a = ()=>{
                delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
            };
            Object.assign(n, {
                onload: a,
                onerror: a,
                src: e
            });
        });
    }
    const Fe = {
        addStyleHook () {
            R(this.elements.container, this.config.selectors.container.replace(".", ""), !0), R(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
        },
        toggleNativeControls (e = !1) {
            e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
        },
        build () {
            if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void Fe.toggleNativeControls.call(this, !0);
            S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Fe.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Fe.checkPlaying.call(this), R(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), R(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), R(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(()=>{
                Z.call(this, this.media, "ready");
            }, 0), Fe.setTitle.call(this), this.poster && Fe.setPoster.call(this, this.poster, !1).catch(()=>{}), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
        },
        setTitle () {
            let e = ve.get("play", this.config);
            if (S.string(this.config.title) && !S.empty(this.config.title) && (e += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t)=>{
                t.setAttribute("aria-label", e);
            }), this.isEmbed) {
                const e = B.call(this, "iframe");
                if (!S.element(e)) return;
                const t = S.empty(this.config.title) ? "video" : this.config.title, i = ve.get("frameTitle", this.config);
                e.setAttribute("title", i.replace("{title}", t));
            }
        },
        togglePoster (e) {
            R(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster (e, t = !0) {
            return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), te.call(this).then(()=>Re(e)).catch((t)=>{
                throw e === this.poster && Fe.togglePoster.call(this, !1), t;
            }).then(()=>{
                if (e !== this.poster) throw new Error("setPoster cancelled by later call to setPoster");
            }).then(()=>(Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: ""
                }), Fe.togglePoster.call(this, !0), e)));
        },
        checkPlaying (e) {
            R(this.elements.container, this.config.classNames.playing, this.playing), R(this.elements.container, this.config.classNames.paused, this.paused), R(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e)=>{
                Object.assign(e, {
                    pressed: this.playing
                }), e.setAttribute("aria-label", ve.get(this.playing ? "pause" : "play", this.config));
            }), S.event(e) && "timeupdate" === e.type || Fe.toggleControls.call(this);
        },
        checkLoading (e) {
            this.loading = [
                "stalled",
                "waiting"
            ].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(()=>{
                R(this.elements.container, this.config.classNames.loading, this.loading), Fe.toggleControls.call(this);
            }, this.loading ? 250 : 0);
        },
        toggleControls (e) {
            const { controls: t } = this.elements;
            if (t && this.config.hideControls) {
                const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
            }
        },
        migrateStyles () {
            Object.values({
                ...this.media.style
            }).filter((e)=>!S.empty(e) && S.string(e) && e.startsWith("--plyr")).forEach((e)=>{
                this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e);
            }), S.empty(this.media.style) && this.media.removeAttribute("style");
        }
    };
    class Ve {
        constructor(t){
            e(this, "firstTouch", ()=>{
                const { player: e } = this, { elements: t } = e;
                e.touch = !0, R(t.container, e.config.classNames.isTouch, !0);
            }), e(this, "global", (e = !0)=>{
                const { player: t } = this;
                t.config.keyboard.global && Q.call(t, window, "keydown keyup", this.handleKey, e, !1), Q.call(t, document.body, "click", this.toggleMenu, e), G.call(t, document.body, "touchstart", this.firstTouch);
            }), e(this, "container", ()=>{
                const { player: e } = this, { config: t, elements: i, timers: s } = e;
                !t.keyboard.global && t.keyboard.focused && X.call(e, i.container, "keydown keyup", this.handleKey, !1), X.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t)=>{
                    const { controls: n } = i;
                    n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                    let a = 0;
                    [
                        "touchstart",
                        "touchmove",
                        "mousemove"
                    ].includes(t.type) && (Fe.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(()=>Fe.toggleControls.call(e, !1), a);
                });
                const n = ()=>{
                    if (!e.isVimeo || e.config.vimeo.premium) return;
                    const t = i.wrapper, { active: s } = e.fullscreen, [n, a] = ce.call(e), l = ae(`aspect-ratio: ${n} / ${a}`);
                    if (!s) return void (l ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null));
                    const [r, o] = [
                        Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                        Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                    ], c = r / o > n / a;
                    l ? (t.style.width = c ? "auto" : "100%", t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? o / a * n + "px" : null, t.style.margin = c ? "0 auto" : null);
                }, a = ()=>{
                    clearTimeout(s.resized), s.resized = setTimeout(n, 50);
                };
                X.call(e, i.container, "enterfullscreen exitfullscreen", (t)=>{
                    const { target: s } = e.fullscreen;
                    if (s !== i.container) return;
                    if (!e.isEmbed && S.empty(e.config.ratio)) return;
                    n();
                    ("enterfullscreen" === t.type ? X : J).call(e, window, "resize", a);
                });
            }), e(this, "media", ()=>{
                const { player: e } = this, { elements: t } = e;
                if (X.call(e, e.media, "timeupdate seeking seeked", (t)=>Pe.timeUpdate.call(e, t)), X.call(e, e.media, "durationchange loadeddata loadedmetadata", (t)=>Pe.durationUpdate.call(e, t)), X.call(e, e.media, "ended", ()=>{
                    e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
                }), X.call(e, e.media, "progress playing seeking seeked", (t)=>Pe.updateProgress.call(e, t)), X.call(e, e.media, "volumechange", (t)=>Pe.updateVolume.call(e, t)), X.call(e, e.media, "playing play pause ended emptied timeupdate", (t)=>Fe.checkPlaying.call(e, t)), X.call(e, e.media, "waiting canplay seeked playing", (t)=>Fe.checkLoading.call(e, t)), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                    const i = B.call(e, `.${e.config.classNames.video}`);
                    if (!S.element(i)) return;
                    X.call(e, t.container, "click", (s)=>{
                        ([
                            t.container,
                            i
                        ].includes(s.target) || i.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(s, e.restart, "restart"), this.proxy(s, ()=>{
                            ie(e.play());
                        }, "play")) : this.proxy(s, ()=>{
                            ie(e.togglePlay());
                        }, "play")));
                    });
                }
                e.supported.ui && e.config.disableContextMenu && X.call(e, t.wrapper, "contextmenu", (e)=>{
                    e.preventDefault();
                }, !1), X.call(e, e.media, "volumechange", ()=>{
                    e.storage.set({
                        volume: e.volume,
                        muted: e.muted
                    });
                }), X.call(e, e.media, "ratechange", ()=>{
                    Pe.updateSetting.call(e, "speed"), e.storage.set({
                        speed: e.speed
                    });
                }), X.call(e, e.media, "qualitychange", (t)=>{
                    Pe.updateSetting.call(e, "quality", null, t.detail.quality);
                }), X.call(e, e.media, "ready qualitychange", ()=>{
                    Pe.setDownloadUrl.call(e);
                });
                const i = e.config.events.concat([
                    "keyup",
                    "keydown"
                ]).join(" ");
                X.call(e, e.media, i, (i)=>{
                    let { detail: s = {} } = i;
                    "error" === i.type && (s = e.media.error), Z.call(e, t.container, i.type, !0, s);
                });
            }), e(this, "proxy", (e, t, i)=>{
                const { player: s } = this, n = s.config.listeners[i];
                let a = !0;
                S.function(n) && (a = n.call(s, e)), !1 !== a && S.function(t) && t.call(s, e);
            }), e(this, "bind", (e, t, i, s, n = !0)=>{
                const { player: a } = this, l = a.config.listeners[s], r = S.function(l);
                X.call(a, e, t, (e)=>this.proxy(e, i, s), n && !r);
            }), e(this, "controls", ()=>{
                const { player: e } = this, { elements: t } = e, i = M.isIE ? "change" : "input";
                if (t.buttons.play && Array.from(t.buttons.play).forEach((t)=>{
                    this.bind(t, "click", ()=>{
                        ie(e.togglePlay());
                    }, "play");
                }), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", ()=>{
                    e.lastSeekTime = Date.now(), e.rewind();
                }, "rewind"), this.bind(t.buttons.fastForward, "click", ()=>{
                    e.lastSeekTime = Date.now(), e.forward();
                }, "fastForward"), this.bind(t.buttons.mute, "click", ()=>{
                    e.muted = !e.muted;
                }, "mute"), this.bind(t.buttons.captions, "click", ()=>e.toggleCaptions()), this.bind(t.buttons.download, "click", ()=>{
                    Z.call(e, e.media, "download");
                }, "download"), this.bind(t.buttons.fullscreen, "click", ()=>{
                    e.fullscreen.toggle();
                }, "fullscreen"), this.bind(t.buttons.pip, "click", ()=>{
                    e.pip = "toggle";
                }, "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", (t)=>{
                    t.stopPropagation(), t.preventDefault(), Pe.toggleMenu.call(e, t);
                }, null, !1), this.bind(t.buttons.settings, "keyup", (t)=>{
                    [
                        " ",
                        "Enter"
                    ].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), t.stopPropagation(), Pe.toggleMenu.call(e, t)) : Pe.focusFirstMenuItem.call(e, null, !0));
                }, null, !1), this.bind(t.settings.menu, "keydown", (t)=>{
                    "Escape" === t.key && Pe.toggleMenu.call(e, t);
                }), this.bind(t.inputs.seek, "mousedown mousemove", (e)=>{
                    const i = t.progress.getBoundingClientRect(), s = 100 / i.width * (e.pageX - i.left);
                    e.currentTarget.setAttribute("seek-value", s);
                }), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t)=>{
                    const i = t.currentTarget, s = "play-on-seeked";
                    if (S.keyboardEvent(t) && ![
                        "ArrowLeft",
                        "ArrowRight"
                    ].includes(t.key)) return;
                    e.lastSeekTime = Date.now();
                    const n = i.hasAttribute(s), a = [
                        "mouseup",
                        "touchend",
                        "keyup"
                    ].includes(t.type);
                    n && a ? (i.removeAttribute(s), ie(e.play())) : !a && e.playing && (i.setAttribute(s, ""), e.pause());
                }), M.isIos) {
                    const t = U.call(e, 'input[type="range"]');
                    Array.from(t).forEach((e)=>this.bind(e, i, (e)=>P(e.target)));
                }
                this.bind(t.inputs.seek, i, (t)=>{
                    const i = t.currentTarget;
                    let s = i.getAttribute("seek-value");
                    S.empty(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration;
                }, "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", (t)=>Pe.updateSeekTooltip.call(e, t)), this.bind(t.progress, "mousemove touchmove", (t)=>{
                    const { previewThumbnails: i } = e;
                    i && i.loaded && i.startMove(t);
                }), this.bind(t.progress, "mouseleave touchend click", ()=>{
                    const { previewThumbnails: t } = e;
                    t && t.loaded && t.endMove(!1, !0);
                }), this.bind(t.progress, "mousedown touchstart", (t)=>{
                    const { previewThumbnails: i } = e;
                    i && i.loaded && i.startScrubbing(t);
                }), this.bind(t.progress, "mouseup touchend", (t)=>{
                    const { previewThumbnails: i } = e;
                    i && i.loaded && i.endScrubbing(t);
                }), M.isWebKit && Array.from(U.call(e, 'input[type="range"]')).forEach((t)=>{
                    this.bind(t, "input", (t)=>Pe.updateRangeFill.call(e, t.target));
                }), e.config.toggleInvert && !S.element(t.display.duration) && this.bind(t.display.currentTime, "click", ()=>{
                    0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, Pe.timeUpdate.call(e));
                }), this.bind(t.inputs.volume, i, (t)=>{
                    e.volume = t.target.value;
                }, "volume"), this.bind(t.controls, "mouseenter mouseleave", (i)=>{
                    t.controls.hover = !e.touch && "mouseenter" === i.type;
                }), t.fullscreen && Array.from(t.fullscreen.children).filter((e)=>!e.contains(t.container)).forEach((i)=>{
                    this.bind(i, "mouseenter mouseleave", (i)=>{
                        t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type);
                    });
                }), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (e)=>{
                    t.controls.pressed = [
                        "mousedown",
                        "touchstart"
                    ].includes(e.type);
                }), this.bind(t.controls, "focusin", ()=>{
                    const { config: i, timers: s } = e;
                    R(t.controls, i.classNames.noTransition, !0), Fe.toggleControls.call(e, !0), setTimeout(()=>{
                        R(t.controls, i.classNames.noTransition, !1);
                    }, 0);
                    const n = this.touch ? 3e3 : 4e3;
                    clearTimeout(s.controls), s.controls = setTimeout(()=>Fe.toggleControls.call(e, !1), n);
                }), this.bind(t.inputs.volume, "wheel", (t)=>{
                    const i = t.webkitDirectionInvertedFromDevice, [s, n] = [
                        t.deltaX,
                        -t.deltaY
                    ].map((e)=>i ? -e : e), a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                    e.increaseVolume(a / 50);
                    const { volume: l } = e.media;
                    (1 === a && l < 1 || -1 === a && l > 0) && t.preventDefault();
                }, "volume", !1);
            }), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
        }
        handleKey(e) {
            const { player: t } = this, { elements: i } = t, { key: s, type: n, altKey: a, ctrlKey: l, metaKey: r, shiftKey: o } = e, c = "keydown" === n, u = c && s === this.lastKey;
            if (a || l || r || o) return;
            if (!s) return;
            if (c) {
                const n = document.activeElement;
                if (S.element(n)) {
                    const { editable: s } = t.config.selectors, { seek: a } = i.inputs;
                    if (n !== a && V(n, s)) return;
                    if (" " === e.key && V(n, 'button, [role^="menuitem"]')) return;
                }
                switch([
                    " ",
                    "ArrowLeft",
                    "ArrowUp",
                    "ArrowRight",
                    "ArrowDown",
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "c",
                    "f",
                    "k",
                    "l",
                    "m"
                ].includes(s) && (e.preventDefault(), e.stopPropagation()), s){
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        u || (h = parseInt(s, 10), t.currentTime = t.duration / 10 * h);
                        break;
                    case " ":
                    case "k":
                        u || ie(t.togglePlay());
                        break;
                    case "ArrowUp":
                        t.increaseVolume(.1);
                        break;
                    case "ArrowDown":
                        t.decreaseVolume(.1);
                        break;
                    case "m":
                        u || (t.muted = !t.muted);
                        break;
                    case "ArrowRight":
                        t.forward();
                        break;
                    case "ArrowLeft":
                        t.rewind();
                        break;
                    case "f":
                        t.fullscreen.toggle();
                        break;
                    case "c":
                        u || t.toggleCaptions();
                        break;
                    case "l":
                        t.loop = !t.loop;
                }
                "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s;
            } else this.lastKey = null;
            var h;
        }
        toggleMenu(e) {
            Pe.toggleMenu.call(this.player, e);
        }
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var Ue = function(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }(function(e, t) {
        e.exports = function() {
            var e = function() {}, t = {}, i = {}, s = {};
            function n(e, t) {
                e = e.push ? e : [
                    e
                ];
                var n, a, l, r = [], o = e.length, c = o;
                for(n = function(e, i) {
                    i.length && r.push(e), --c || t(r);
                }; o--;)a = e[o], (l = i[a]) ? n(a, l) : (s[a] = s[a] || []).push(n);
            }
            function a(e, t) {
                if (e) {
                    var n = s[e];
                    if (i[e] = t, n) for(; n.length;)n[0](e, t), n.splice(0, 1);
                }
            }
            function l(t, i) {
                t.call && (t = {
                    success: t
                }), i.length ? (t.error || e)(i) : (t.success || e)(t);
            }
            function r(t, i, s, n) {
                var a, l, o = document, c = s.async, u = (s.numRetries || 0) + 1, h = s.before || e, d = t.replace(/[\?|#].*$/, ""), m = t.replace(/^(css|img)!/, "");
                n = n || 0, /(^css!|\.css$)/.test(d) ? ((l = o.createElement("link")).rel = "stylesheet", l.href = m, (a = "hideFocus" in l) && l.relList && (a = 0, l.rel = "preload", l.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (l = o.createElement("img")).src = m : ((l = o.createElement("script")).src = t, l.async = void 0 === c || c), l.onload = l.onerror = l.onbeforeload = function(e) {
                    var o = e.type[0];
                    if (a) try {
                        l.sheet.cssText.length || (o = "e");
                    } catch (e) {
                        18 != e.code && (o = "e");
                    }
                    if ("e" == o) {
                        if ((n += 1) < u) return r(t, i, s, n);
                    } else if ("preload" == l.rel && "style" == l.as) return l.rel = "stylesheet";
                    i(t, o, e.defaultPrevented);
                }, !1 !== h(t, l) && o.head.appendChild(l);
            }
            function o(e, t, i) {
                var s, n, a = (e = e.push ? e : [
                    e
                ]).length, l = a, o = [];
                for(s = function(e, i, s) {
                    if ("e" == i && o.push(e), "b" == i) {
                        if (!s) return;
                        o.push(e);
                    }
                    --a || t(o);
                }, n = 0; n < l; n++)r(e[n], s, i);
            }
            function c(e, i, s) {
                var n, r;
                if (i && i.trim && (n = i), r = (n ? s : i) || {}, n) {
                    if (n in t) throw "LoadJS";
                    t[n] = !0;
                }
                function c(t, i) {
                    o(e, function(e) {
                        l(r, e), t && l({
                            success: t,
                            error: i
                        }, e), a(n, e);
                    }, r);
                }
                if (r.returnPromise) return new Promise(c);
                c();
            }
            return c.ready = function(e, t) {
                return n(e, function(e) {
                    l(t, e);
                }), c;
            }, c.done = function(e) {
                a(e, []);
            }, c.reset = function() {
                t = {}, i = {}, s = {};
            }, c.isDefined = function(e) {
                return e in t;
            }, c;
        }();
    });
    function Be(e) {
        return new Promise((t, i)=>{
            Ue(e, {
                success: t,
                error: i
            });
        });
    }
    function We(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Z.call(this, this.media, e ? "play" : "pause"));
    }
    const ze = {
        setup () {
            const e = this;
            R(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, ue.call(e), S.object(window.Vimeo) ? ze.ready.call(e) : Be(e.config.urls.vimeo.sdk).then(()=>{
                ze.ready.call(e);
            }).catch((t)=>{
                e.debug.warn("Vimeo SDK (player.js) failed to load", t);
            });
        },
        ready () {
            const e = this, t = e.config.vimeo, { premium: i, referrerPolicy: s, ...n } = t;
            let a = e.media.getAttribute("src"), l = "";
            S.empty(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), l = e.media.getAttribute(e.config.attributes.embed.hash)) : l = function(e) {
                const t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                return t && 5 === t.length ? t[4] : null;
            }(a);
            const r = l ? {
                h: l
            } : {};
            i && Object.assign(n, {
                controls: !1,
                sidedock: !1
            });
            const o = Ne({
                loop: e.config.loop.active,
                autoplay: e.autoplay,
                muted: e.muted,
                gesture: "media",
                playsinline: e.config.playsinline,
                ...r,
                ...n
            }), c = (u = a, S.empty(u) ? null : S.number(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u);
            var u;
            const h = $("iframe"), d = me(e.config.urls.vimeo.iframe, c, o);
            if (h.setAttribute("src", d), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", [
                "autoplay",
                "fullscreen",
                "picture-in-picture",
                "encrypted-media",
                "accelerometer",
                "gyroscope"
            ].join("; ")), S.empty(s) || h.setAttribute("referrerPolicy", s), i || !t.customControls) h.setAttribute("data-poster", e.poster), e.media = q(h, e.media);
            else {
                const t = $("div", {
                    class: e.config.classNames.embedContainer,
                    "data-poster": e.poster
                });
                t.appendChild(h), e.media = q(t, e.media);
            }
            t.customControls || Te(me(e.config.urls.vimeo.api, d)).then((t)=>{
                !S.empty(t) && t.thumbnail_url && Fe.setPoster.call(e, t.thumbnail_url).catch(()=>{});
            }), e.embed = new window.Vimeo.Player(h, {
                autopause: e.config.autopause,
                muted: e.muted
            }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = ()=>(We.call(e, !0), e.embed.play()), e.media.pause = ()=>(We.call(e, !1), e.embed.pause()), e.media.stop = ()=>{
                e.pause(), e.currentTime = 0;
            };
            let { currentTime: m } = e.media;
            Object.defineProperty(e.media, "currentTime", {
                get: ()=>m,
                set (t) {
                    const { embed: i, media: s, paused: n, volume: a } = e, l = n && !i.hasPlayed;
                    s.seeking = !0, Z.call(e, s, "seeking"), Promise.resolve(l && i.setVolume(0)).then(()=>i.setCurrentTime(t)).then(()=>l && i.pause()).then(()=>l && i.setVolume(a)).catch(()=>{});
                }
            });
            let p = e.config.speed.selected;
            Object.defineProperty(e.media, "playbackRate", {
                get: ()=>p,
                set (t) {
                    e.embed.setPlaybackRate(t).then(()=>{
                        p = t, Z.call(e, e.media, "ratechange");
                    }).catch(()=>{
                        e.options.speed = [
                            1
                        ];
                    });
                }
            });
            let { volume: g } = e.config;
            Object.defineProperty(e.media, "volume", {
                get: ()=>g,
                set (t) {
                    e.embed.setVolume(t).then(()=>{
                        g = t, Z.call(e, e.media, "volumechange");
                    });
                }
            });
            let { muted: f } = e.config;
            Object.defineProperty(e.media, "muted", {
                get: ()=>f,
                set (t) {
                    const i = !!S.boolean(t) && t;
                    e.embed.setMuted(!!i || e.config.muted).then(()=>{
                        f = i, Z.call(e, e.media, "volumechange");
                    });
                }
            });
            let y, { loop: b } = e.config;
            Object.defineProperty(e.media, "loop", {
                get: ()=>b,
                set (t) {
                    const i = S.boolean(t) ? t : e.config.loop.active;
                    e.embed.setLoop(i).then(()=>{
                        b = i;
                    });
                }
            }), e.embed.getVideoUrl().then((t)=>{
                y = t, Pe.setDownloadUrl.call(e);
            }).catch((e)=>{
                this.debug.warn(e);
            }), Object.defineProperty(e.media, "currentSrc", {
                get: ()=>y
            }), Object.defineProperty(e.media, "ended", {
                get: ()=>e.currentTime === e.duration
            }), Promise.all([
                e.embed.getVideoWidth(),
                e.embed.getVideoHeight()
            ]).then((t)=>{
                const [i, s] = t;
                e.embed.ratio = he(i, s), ue.call(this);
            }), e.embed.setAutopause(e.config.autopause).then((t)=>{
                e.config.autopause = t;
            }), e.embed.getVideoTitle().then((t)=>{
                e.config.title = t, Fe.setTitle.call(this);
            }), e.embed.getCurrentTime().then((t)=>{
                m = t, Z.call(e, e.media, "timeupdate");
            }), e.embed.getDuration().then((t)=>{
                e.media.duration = t, Z.call(e, e.media, "durationchange");
            }), e.embed.getTextTracks().then((t)=>{
                e.media.textTracks = t, xe.setup.call(e);
            }), e.embed.on("cuechange", ({ cues: t = [] })=>{
                const i = t.map((e)=>(function(e) {
                        const t = document.createDocumentFragment(), i = document.createElement("div");
                        return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
                    })(e.text));
                xe.updateCues.call(e, i);
            }), e.embed.on("loaded", ()=>{
                if (e.embed.getPaused().then((t)=>{
                    We.call(e, !t), t || Z.call(e, e.media, "playing");
                }), S.element(e.embed.element) && e.supported.ui) e.embed.element.setAttribute("tabindex", -1);
            }), e.embed.on("bufferstart", ()=>{
                Z.call(e, e.media, "waiting");
            }), e.embed.on("bufferend", ()=>{
                Z.call(e, e.media, "playing");
            }), e.embed.on("play", ()=>{
                We.call(e, !0), Z.call(e, e.media, "playing");
            }), e.embed.on("pause", ()=>{
                We.call(e, !1);
            }), e.embed.on("timeupdate", (t)=>{
                e.media.seeking = !1, m = t.seconds, Z.call(e, e.media, "timeupdate");
            }), e.embed.on("progress", (t)=>{
                e.media.buffered = t.percent, Z.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && Z.call(e, e.media, "canplaythrough"), e.embed.getDuration().then((t)=>{
                    t !== e.media.duration && (e.media.duration = t, Z.call(e, e.media, "durationchange"));
                });
            }), e.embed.on("seeked", ()=>{
                e.media.seeking = !1, Z.call(e, e.media, "seeked");
            }), e.embed.on("ended", ()=>{
                e.media.paused = !0, Z.call(e, e.media, "ended");
            }), e.embed.on("error", (t)=>{
                e.media.error = t, Z.call(e, e.media, "error");
            }), t.customControls && setTimeout(()=>Fe.build.call(e), 0);
        }
    };
    function Ke(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Z.call(this, this.media, e ? "play" : "pause"));
    }
    function Ye(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
    }
    const Qe = {
        setup () {
            if (R(this.elements.wrapper, this.config.classNames.embed, !0), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this);
            else {
                const e = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = ()=>{
                    S.function(e) && e(), Qe.ready.call(this);
                }, Be(this.config.urls.youtube.sdk).catch((e)=>{
                    this.debug.warn("YouTube API failed to load", e);
                });
            }
        },
        getTitle (e) {
            Te(me(this.config.urls.youtube.api, e)).then((e)=>{
                if (S.object(e)) {
                    const { title: t, height: i, width: s } = e;
                    this.config.title = t, Fe.setTitle.call(this), this.embed.ratio = he(s, i);
                }
                ue.call(this);
            }).catch(()=>{
                ue.call(this);
            });
        },
        ready () {
            const e = this, t = e.config.youtube, i = e.media && e.media.getAttribute("id");
            if (!S.empty(i) && i.startsWith("youtube-")) return;
            let s = e.media.getAttribute("src");
            S.empty(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
            const n = (a = s, S.empty(a) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a);
            var a;
            const l = $("div", {
                id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                "data-poster": t.customControls ? e.poster : void 0
            });
            if (e.media = q(l, e.media), t.customControls) {
                const t = (e)=>`https://i.ytimg.com/vi/${n}/${e}default.jpg`;
                Re(t("maxres"), 121).catch(()=>Re(t("sd"), 121)).catch(()=>Re(t("hq"))).then((t)=>Fe.setPoster.call(e, t.src)).then((t)=>{
                    t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
                }).catch(()=>{});
            }
            e.embed = new window.YT.Player(e.media, {
                videoId: n,
                host: Ye(t),
                playerVars: x({}, {
                    autoplay: e.config.autoplay ? 1 : 0,
                    hl: e.config.hl,
                    controls: e.supported.ui && t.customControls ? 0 : 1,
                    disablekb: 1,
                    playsinline: e.config.playsinline && !e.config.fullscreen.iosNative ? 1 : 0,
                    cc_load_policy: e.captions.active ? 1 : 0,
                    cc_lang_pref: e.config.captions.language,
                    widget_referrer: window ? window.location.href : null
                }, t),
                events: {
                    onError (t) {
                        if (!e.media.error) {
                            const i = t.data, s = {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players."
                            }[i] || "An unknown error occurred";
                            e.media.error = {
                                code: i,
                                message: s
                            }, Z.call(e, e.media, "error");
                        }
                    },
                    onPlaybackRateChange (t) {
                        const i = t.target;
                        e.media.playbackRate = i.getPlaybackRate(), Z.call(e, e.media, "ratechange");
                    },
                    onReady (i) {
                        if (S.function(e.media.play)) return;
                        const s = i.target;
                        Qe.getTitle.call(e, n), e.media.play = ()=>{
                            Ke.call(e, !0), s.playVideo();
                        }, e.media.pause = ()=>{
                            Ke.call(e, !1), s.pauseVideo();
                        }, e.media.stop = ()=>{
                            s.stopVideo();
                        }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                            get: ()=>Number(s.getCurrentTime()),
                            set (t) {
                                e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Z.call(e, e.media, "seeking"), s.seekTo(t);
                            }
                        }), Object.defineProperty(e.media, "playbackRate", {
                            get: ()=>s.getPlaybackRate(),
                            set (e) {
                                s.setPlaybackRate(e);
                            }
                        });
                        let { volume: a } = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: ()=>a,
                            set (t) {
                                a = t, s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                            }
                        });
                        let { muted: l } = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: ()=>l,
                            set (t) {
                                const i = S.boolean(t) ? t : l;
                                l = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                            }
                        }), Object.defineProperty(e.media, "currentSrc", {
                            get: ()=>s.getVideoUrl()
                        }), Object.defineProperty(e.media, "ended", {
                            get: ()=>e.currentTime === e.duration
                        });
                        const r = s.getAvailablePlaybackRates();
                        e.options.speed = r.filter((t)=>e.config.speed.options.includes(t)), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), Z.call(e, e.media, "timeupdate"), Z.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(()=>{
                            e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Z.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Z.call(e, e.media, "canplaythrough"));
                        }, 200), t.customControls && setTimeout(()=>Fe.build.call(e), 50);
                    },
                    onStateChange (i) {
                        const s = i.target;
                        clearInterval(e.timers.playing);
                        switch(e.media.seeking && [
                            1,
                            2
                        ].includes(i.data) && (e.media.seeking = !1, Z.call(e, e.media, "seeked")), i.data){
                            case -1:
                                Z.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), Z.call(e, e.media, "progress");
                                break;
                            case 0:
                                Ke.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : Z.call(e, e.media, "ended");
                                break;
                            case 1:
                                t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Ke.call(e, !0), Z.call(e, e.media, "playing"), e.timers.playing = setInterval(()=>{
                                    Z.call(e, e.media, "timeupdate");
                                }, 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), Z.call(e, e.media, "durationchange")));
                                break;
                            case 2:
                                e.muted || e.embed.unMute(), Ke.call(e, !1);
                                break;
                            case 3:
                                Z.call(e, e.media, "waiting");
                        }
                        Z.call(e, e.elements.container, "statechange", !1, {
                            code: i.data
                        });
                    }
                }
            });
        }
    }, Xe = {
        setup () {
            this.media ? (R(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), R(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && R(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = $("div", {
                class: this.config.classNames.video
            }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", {
                class: this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
        }
    };
    class Je {
        constructor(t){
            e(this, "load", ()=>{
                this.enabled && (S.object(window.google) && S.object(window.google.ima) ? this.ready() : Be(this.player.config.urls.googleIMA.sdk).then(()=>{
                    this.ready();
                }).catch(()=>{
                    this.trigger("error", new Error("Google IMA SDK failed to load"));
                }));
            }), e(this, "ready", ()=>{
                var e;
                this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(()=>{
                    this.clearSafetyTimer("onAdsManagerLoaded()");
                }), this.listeners(), this.setupIMA();
            }), e(this, "setupIMA", ()=>{
                this.elements.container = $("div", {
                    class: this.player.config.classNames.ads
                }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e)=>this.onAdsManagerLoaded(e), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e)=>this.onAdError(e), !1), this.requestAds();
            }), e(this, "requestAds", ()=>{
                const { container: e } = this.player.elements;
                try {
                    const t = new google.ima.AdsRequest;
                    t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t);
                } catch (e) {
                    this.onAdError(e);
                }
            }), e(this, "pollCountdown", (e = !1)=>{
                if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                this.countdownTimer = setInterval(()=>{
                    const e = Ee(Math.max(this.manager.getRemainingTime(), 0)), t = `${ve.get("advertisement", this.player.config)} - ${e}`;
                    this.elements.container.setAttribute("data-badge-text", t);
                }, 100);
            }), e(this, "onAdsManagerLoaded", (e)=>{
                if (!this.enabled) return;
                const t = new google.ima.AdsRenderingSettings;
                t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e)=>this.onAdError(e)), Object.keys(google.ima.AdEvent.Type).forEach((e)=>{
                    this.manager.addEventListener(google.ima.AdEvent.Type[e], (e)=>this.onAdEvent(e));
                }), this.trigger("loaded");
            }), e(this, "addCuePoints", ()=>{
                S.empty(this.cuePoints) || this.cuePoints.forEach((e)=>{
                    if (0 !== e && -1 !== e && e < this.player.duration) {
                        const t = this.player.elements.progress;
                        if (S.element(t)) {
                            const i = 100 / this.player.duration * e, s = $("span", {
                                class: this.player.config.classNames.cues
                            });
                            s.style.left = `${i.toString()}%`, t.appendChild(s);
                        }
                    }
                });
            }), e(this, "onAdEvent", (e)=>{
                const { container: t } = this.player.elements, i = e.getAd(), s = e.getAdData();
                switch(((e)=>{
                    Z.call(this.player, this.player.media, `ads${e.replace(/_/g, "").toLowerCase()}`);
                })(e.type), e.type){
                    case google.ima.AdEvent.Type.LOADED:
                        this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                        break;
                    case google.ima.AdEvent.Type.STARTED:
                        this.manager.setVolume(this.player.volume);
                        break;
                    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                        this.player.ended ? this.loadAds() : this.loader.contentComplete();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                        this.pauseContent();
                        break;
                    case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                        this.pollCountdown(), this.resumeContent();
                        break;
                    case google.ima.AdEvent.Type.LOG:
                        s.adError && this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`);
                }
            }), e(this, "onAdError", (e)=>{
                this.cancel(), this.player.debug.warn("Ads error", e);
            }), e(this, "listeners", ()=>{
                const { container: e } = this.player.elements;
                let t;
                this.player.on("canplay", ()=>{
                    this.addCuePoints();
                }), this.player.on("ended", ()=>{
                    this.loader.contentComplete();
                }), this.player.on("timeupdate", ()=>{
                    t = this.player.currentTime;
                }), this.player.on("seeked", ()=>{
                    const e = this.player.currentTime;
                    S.empty(this.cuePoints) || this.cuePoints.forEach((i, s)=>{
                        t < i && i < e && (this.manager.discardAdBreak(), this.cuePoints.splice(s, 1));
                    });
                }), window.addEventListener("resize", ()=>{
                    this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL);
                });
            }), e(this, "play", ()=>{
                const { container: e } = this.player.elements;
                this.managerPromise || this.resumeContent(), this.managerPromise.then(()=>{
                    this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                    try {
                        this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0;
                    } catch (e) {
                        this.onAdError(e);
                    }
                }).catch(()=>{});
            }), e(this, "resumeContent", ()=>{
                this.elements.container.style.zIndex = "", this.playing = !1, ie(this.player.media.play());
            }), e(this, "pauseContent", ()=>{
                this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
            }), e(this, "cancel", ()=>{
                this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }), e(this, "loadAds", ()=>{
                this.managerPromise.then(()=>{
                    this.manager && this.manager.destroy(), this.managerPromise = new Promise((e)=>{
                        this.on("loaded", e), this.player.debug.log(this.manager);
                    }), this.initialized = !1, this.requestAds();
                }).catch(()=>{});
            }), e(this, "trigger", (e, ...t)=>{
                const i = this.events[e];
                S.array(i) && i.forEach((e)=>{
                    S.function(e) && e.apply(this, t);
                });
            }), e(this, "on", (e, t)=>(S.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this)), e(this, "startSafetyTimer", (e, t)=>{
                this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout(()=>{
                    this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
                }, e);
            }), e(this, "clearSafetyTimer", (e)=>{
                S.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                container: null,
                displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e, t)=>{
                this.on("loaded", e), this.on("error", t);
            }), this.load();
        }
        get enabled() {
            const { config: e } = this;
            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!S.empty(e.publisherId) || S.url(e.tagUrl));
        }
        get tagUrl() {
            const { config: e } = this;
            if (S.url(e.tagUrl)) return e.tagUrl;
            return `https://go.aniview.com/api/adserver6/vast/?${Ne({
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e.publisherId
            })}`;
        }
    }
    function Ge(e = 0, t = 0, i = 255) {
        return Math.min(Math.max(e, t), i);
    }
    const Ze = (e)=>{
        const t = [];
        return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e)=>{
            const i = {};
            e.split(/\r\n|\n|\r/).forEach((e)=>{
                if (S.number(i.startTime)) {
                    if (!S.empty(e.trim()) && S.empty(i.text)) {
                        const t = e.trim().split("#xywh=");
                        [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                    }
                } else {
                    const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                    t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number(`0.${t[4]}`), i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number(`0.${t[9]}`));
                }
            }), i.text && t.push(i);
        }), t;
    }, et = (e, t)=>{
        const i = {};
        return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
    };
    class tt {
        constructor(t){
            e(this, "load", ()=>{
                this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(()=>{
                    this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = !0);
                });
            }), e(this, "getThumbnails", ()=>new Promise((e)=>{
                    const { src: t } = this.player.config.previewThumbnails;
                    if (S.empty(t)) throw new Error("Missing previewThumbnails.src config attribute");
                    const i = ()=>{
                        this.thumbnails.sort((e, t)=>e.height - t.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e();
                    };
                    if (S.function(t)) t((e)=>{
                        this.thumbnails = e, i();
                    });
                    else {
                        const e = (S.string(t) ? [
                            t
                        ] : t).map((e)=>this.getThumbnail(e));
                        Promise.all(e).then(i);
                    }
                })), e(this, "getThumbnail", (e)=>new Promise((t)=>{
                    Te(e).then((i)=>{
                        const s = {
                            frames: Ze(i),
                            height: null,
                            urlPrefix: ""
                        };
                        s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                        const n = new Image;
                        n.onload = ()=>{
                            s.height = n.naturalHeight, s.width = n.naturalWidth, this.thumbnails.push(s), t();
                        }, n.src = s.urlPrefix + s.frames[0].text;
                    });
                })), e(this, "startMove", (e)=>{
                if (this.loaded && S.event(e) && [
                    "touchmove",
                    "mousemove"
                ].includes(e.type) && this.player.media.duration) {
                    if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                    else {
                        var t, i;
                        const s = this.player.elements.progress.getBoundingClientRect(), n = 100 / s.width * (e.pageX - s.left);
                        this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Ee(this.seekTime);
                        const a = null === (t = this.player.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(({ time: e })=>e === Math.round(this.seekTime));
                        a && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${a.label}<br>`);
                    }
                    this.showImageAtCurrentTime();
                }
            }), e(this, "endMove", ()=>{
                this.toggleThumbContainer(!1, !0);
            }), e(this, "startScrubbing", (e)=>{
                (S.nullOrUndefined(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
            }), e(this, "endScrubbing", ()=>{
                this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : G.call(this.player, this.player.media, "timeupdate", ()=>{
                    this.mouseDown || this.toggleScrubbingContainer(!1);
                });
            }), e(this, "listeners", ()=>{
                this.player.on("play", ()=>{
                    this.toggleThumbContainer(!1, !0);
                }), this.player.on("seeked", ()=>{
                    this.toggleThumbContainer(!1);
                }), this.player.on("timeupdate", ()=>{
                    this.lastTime = this.player.media.currentTime;
                });
            }), e(this, "render", ()=>{
                this.elements.thumb.container = $("div", {
                    class: this.player.config.classNames.previewThumbnails.thumbContainer
                }), this.elements.thumb.imageContainer = $("div", {
                    class: this.player.config.classNames.previewThumbnails.imageContainer
                }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                const e = $("div", {
                    class: this.player.config.classNames.previewThumbnails.timeContainer
                });
                this.elements.thumb.time = $("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(e), S.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = $("div", {
                    class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }), e(this, "destroy", ()=>{
                this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }), e(this, "showImageAtCurrentTime", ()=>{
                this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                const e = this.thumbnails[0].frames.findIndex((e)=>this.seekTime >= e.startTime && this.seekTime <= e.endTime), t = e >= 0;
                let i = 0;
                this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach((t, s)=>{
                    this.loadedImages.includes(t.frames[e].text) && (i = s);
                }), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)));
            }), e(this, "loadImage", (e = 0)=>{
                const t = this.showingThumb, i = this.thumbnails[e], { urlPrefix: s } = i, n = i.frames[t], a = i.frames[t].text, l = s + a;
                if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, n, e, t, a, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement);
                else {
                    this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                    const i = new Image;
                    i.src = l, i.dataset.index = t, i.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log(`Loading image: ${l}`), i.onload = ()=>this.showImage(i, n, e, t, a, !0), this.loadingImage = i, this.removeOldImages(i);
                }
            }), e(this, "showImage", (e, t, i, s, n, a = !0)=>{
                this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`), this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(n) || this.loadedImages.push(n)), this.preloadNearby(s, !0).then(this.preloadNearby(s, !1)).then(this.getHigherQuality(i, e, t, n));
            }), e(this, "removeOldImages", (e)=>{
                Array.from(this.currentImageContainer.children).forEach((t)=>{
                    if ("img" !== t.tagName.toLowerCase()) return;
                    const i = this.usingSprites ? 500 : 1e3;
                    if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                        t.dataset.deleting = !0;
                        const { currentImageContainer: e } = this;
                        setTimeout(()=>{
                            e.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`);
                        }, i);
                    }
                });
            }), e(this, "preloadNearby", (e, t = !0)=>new Promise((i)=>{
                    setTimeout(()=>{
                        const s = this.thumbnails[0].frames[e].text;
                        if (this.showingThumbFilename === s) {
                            let n;
                            n = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                            let a = !1;
                            n.forEach((e)=>{
                                const t = e.text;
                                if (t !== s && !this.loadedImages.includes(t)) {
                                    a = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                    const { urlPrefix: e } = this.thumbnails[0], s = e + t, n = new Image;
                                    n.src = s, n.onload = ()=>{
                                        this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), i();
                                    };
                                }
                            }), a || i();
                        }
                    }, 300);
                })), e(this, "getHigherQuality", (e, t, i, s)=>{
                if (e < this.thumbnails.length - 1) {
                    let n = t.naturalHeight;
                    this.usingSprites && (n = i.h), n < this.thumbContainerHeight && setTimeout(()=>{
                        this.showingThumbFilename === s && (this.player.debug.log(`Showing higher quality thumb for: ${s}`), this.loadImage(e + 1));
                    }, 300);
                }
            }), e(this, "toggleThumbContainer", (e = !1, t = !1)=>{
                const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "toggleScrubbingContainer", (e = !1)=>{
                const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null);
            }), e(this, "determineContainerAutoSizing", ()=>{
                (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
            }), e(this, "setThumbContainerSizeAndPos", ()=>{
                const { imageContainer: e } = this.elements.thumb;
                if (this.sizeSpecifiedInCSS) {
                    if (e.clientHeight > 20 && e.clientWidth < 20) {
                        const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                        e.style.width = `${t}px`;
                    } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                        const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                        e.style.height = `${t}px`;
                    }
                } else {
                    const t = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                    e.style.height = `${this.thumbContainerHeight}px`, e.style.width = `${t}px`;
                }
                this.setThumbContainerPos();
            }), e(this, "setThumbContainerPos", ()=>{
                const e = this.player.elements.progress.getBoundingClientRect(), t = this.player.elements.container.getBoundingClientRect(), { container: i } = this.elements.thumb, s = t.left - e.left + 10, n = t.right - e.left - i.clientWidth - 10, a = this.mousePosX - e.left - i.clientWidth / 2, l = Ge(a, s, n);
                i.style.left = `${l}px`, i.style.setProperty("--preview-arrow-offset", a - l + "px");
            }), e(this, "setScrubbingContainerSize", ()=>{
                const { width: e, height: t } = et(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`;
            }), e(this, "setImageSizeAndOffset", (e, t)=>{
                if (!this.usingSprites) return;
                const i = this.thumbContainerHeight / t.h;
                e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x * i}px`, e.style.top = `-${t.y * i}px`;
            }), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                thumb: {},
                scrubbing: {}
            }, this.load();
        }
        get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
        }
        get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
        }
        get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
        }
        get thumbAspectRatio() {
            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
        }
        get thumbContainerHeight() {
            if (this.mouseDown) {
                const { height: e } = et(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight
                });
                return e;
            }
            return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
        }
        get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
        }
        set currentImageElement(e) {
            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
        }
    }
    const it = {
        insertElements (e, t) {
            S.string(t) ? _(e, this.media, {
                src: t
            }) : S.array(t) && t.forEach((t)=>{
                _(e, this.media, t);
            });
        },
        change (e) {
            N(e, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, ()=>{
                this.options.quality = [], O(this.media), this.media = null, S.element(this.elements.container) && this.elements.container.removeAttribute("class");
                const { sources: t, type: i } = e, [{ provider: s = _e.html5, src: n }] = t, a = "html5" === s ? i : "div", l = "html5" === s ? {} : {
                    src: n
                };
                Object.assign(this, {
                    provider: s,
                    type: i,
                    supported: K.check(i, s, this.config.playsinline),
                    media: $(a, l)
                }), this.elements.container.appendChild(this.media), S.boolean(e.autoplay) && (this.config.autoplay = e.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), S.empty(e.poster) || (this.poster = e.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), Fe.addStyleHook.call(this), this.isHTML5 && it.insertElements.call(this, "source", t), this.config.title = e.title, Xe.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && it.insertElements.call(this, "track", e.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.isHTML5 && this.media.load(), S.empty(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))), this.fullscreen.update();
            }, !0)) : this.debug.warn("Invalid source format");
        }
    };
    class st {
        constructor(t, i){
            if (e(this, "play", ()=>S.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(()=>this.ads.play()).catch(()=>ie(this.media.play())), this.media.play()) : null), e(this, "pause", ()=>this.playing && S.function(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", (e)=>(S.boolean(e) ? e : !this.playing) ? this.play() : this.pause()), e(this, "stop", ()=>{
                this.isHTML5 ? (this.pause(), this.restart()) : S.function(this.media.stop) && this.media.stop();
            }), e(this, "restart", ()=>{
                this.currentTime = 0;
            }), e(this, "rewind", (e)=>{
                this.currentTime -= S.number(e) ? e : this.config.seekTime;
            }), e(this, "forward", (e)=>{
                this.currentTime += S.number(e) ? e : this.config.seekTime;
            }), e(this, "increaseVolume", (e)=>{
                const t = this.media.muted ? 0 : this.volume;
                this.volume = t + (S.number(e) ? e : 0);
            }), e(this, "decreaseVolume", (e)=>{
                this.increaseVolume(-e);
            }), e(this, "airplay", ()=>{
                K.airplay && this.media.webkitShowPlaybackTargetPicker();
            }), e(this, "toggleControls", (e)=>{
                if (this.supported.ui && !this.isAudio) {
                    const t = F(this.elements.container, this.config.classNames.hideControls), i = void 0 === e ? void 0 : !e, s = R(this.elements.container, this.config.classNames.hideControls, i);
                    if (s && S.array(this.config.controls) && this.config.controls.includes("settings") && !S.empty(this.config.settings) && Pe.toggleMenu.call(this, !1), s !== t) {
                        const e = s ? "controlshidden" : "controlsshown";
                        Z.call(this, this.media, e);
                    }
                    return !s;
                }
                return !1;
            }), e(this, "on", (e, t)=>{
                X.call(this, this.elements.container, e, t);
            }), e(this, "once", (e, t)=>{
                G.call(this, this.elements.container, e, t);
            }), e(this, "off", (e, t)=>{
                J(this.elements.container, e, t);
            }), e(this, "destroy", (e, t = !1)=>{
                if (!this.ready) return;
                const i = ()=>{
                    document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (O(this.elements.buttons.play), O(this.elements.captions), O(this.elements.controls), O(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), S.function(e) && e()) : (ee.call(this), de.cancelRequests.call(this), q(this.elements.original, this.elements.container), Z.call(this, this.elements.original, "destroyed", !0), S.function(e) && e.call(this.elements.original), this.ready = !1, setTimeout(()=>{
                        this.elements = null, this.media = null;
                    }, 200));
                };
                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (Fe.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && S.function(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200));
            }), e(this, "supports", (e)=>K.mime.call(this, e)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = K.touch, this.media = t, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i || {}, (()=>{
                try {
                    return JSON.parse(this.media.getAttribute("data-plyr-config"));
                } catch (e) {
                    return {};
                }
            })()), this.elements = {
                container: null,
                fullscreen: null,
                captions: null,
                buttons: {},
                display: {},
                progress: {},
                inputs: {},
                settings: {
                    popup: null,
                    menu: null,
                    panels: {},
                    buttons: {}
                }
            }, this.captions = {
                active: null,
                currentTrack: -1,
                meta: new WeakMap
            }, this.fullscreen = {
                active: !1
            }, this.options = {
                speed: [],
                quality: []
            }, this.debug = new De(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
            if (this.media.plyr) return void this.debug.warn("Target already setup");
            if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
            if (!K.check().api) return void this.debug.error("Setup failed: no support");
            const s = this.media.cloneNode(!0);
            s.autoplay = !1, this.elements.original = s;
            const n = this.media.tagName.toLowerCase();
            let a = null, l = null;
            switch(n){
                case "div":
                    if (a = this.media.querySelector("iframe"), S.element(a)) {
                        if (l = Me(a.getAttribute("src")), this.provider = function(e) {
                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? _e.vimeo : null;
                        }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                            const e = [
                                "1",
                                "true"
                            ];
                            e.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), e.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = e.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                        }
                    } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                    if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                    this.type = je;
                    break;
                case "video":
                case "audio":
                    this.type = n, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                    break;
                default:
                    return void this.debug.error("Setup failed: unsupported type");
            }
            this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $("div"), L(this.media, this.elements.container)), Fe.migrateStyles.call(this), Fe.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), (e)=>{
                this.debug.log(`event: ${e.type}`);
            }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Fe.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", ()=>ie(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
        }
        get isHTML5() {
            return this.provider === _e.html5;
        }
        get isEmbed() {
            return this.isYouTube || this.isVimeo;
        }
        get isYouTube() {
            return this.provider === _e.youtube;
        }
        get isVimeo() {
            return this.provider === _e.vimeo;
        }
        get isVideo() {
            return this.type === je;
        }
        get isAudio() {
            return this.type === Oe;
        }
        get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
        }
        get paused() {
            return Boolean(this.media.paused);
        }
        get stopped() {
            return Boolean(this.paused && 0 === this.currentTime);
        }
        get ended() {
            return Boolean(this.media.ended);
        }
        set currentTime(e) {
            if (!this.duration) return;
            const t = S.number(e) && e > 0;
            this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
        }
        get currentTime() {
            return Number(this.media.currentTime);
        }
        get buffered() {
            const { buffered: e } = this.media;
            return S.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
        }
        get seeking() {
            return Boolean(this.media.seeking);
        }
        get duration() {
            const e = parseFloat(this.config.duration), t = (this.media || {}).duration, i = S.number(t) && t !== 1 / 0 ? t : 0;
            return e || i;
        }
        set volume(e) {
            let t = e;
            S.string(t) && (t = Number(t)), S.number(t) || (t = this.storage.get("volume")), S.number(t) || ({ volume: t } = this.config), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !S.empty(e) && this.muted && t > 0 && (this.muted = !1);
        }
        get volume() {
            return Number(this.media.volume);
        }
        set muted(e) {
            let t = e;
            S.boolean(t) || (t = this.storage.get("muted")), S.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
        }
        get muted() {
            return Boolean(this.media.muted);
        }
        get hasAudio() {
            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
        }
        set speed(e) {
            let t = null;
            S.number(e) && (t = e), S.number(t) || (t = this.storage.get("speed")), S.number(t) || (t = this.config.speed.selected);
            const { minimumSpeed: i, maximumSpeed: s } = this;
            t = Ge(t, i, s), this.config.speed.selected = t, setTimeout(()=>{
                this.media && (this.media.playbackRate = t);
            }, 0);
        }
        get speed() {
            return Number(this.media.playbackRate);
        }
        get minimumSpeed() {
            return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625;
        }
        get maximumSpeed() {
            return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
        }
        set quality(e) {
            const t = this.config.quality, i = this.options.quality;
            if (!i.length) return;
            let s = [
                !S.empty(e) && Number(e),
                this.storage.get("quality"),
                t.selected,
                t.default
            ].find(S.number), n = !0;
            if (!i.includes(s)) {
                const e = ne(i, s);
                this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`), s = e, n = !1;
            }
            t.selected = s, this.media.quality = s, n && this.storage.set({
                quality: s
            });
        }
        get quality() {
            return this.media.quality;
        }
        set loop(e) {
            const t = S.boolean(e) ? e : this.config.loop.active;
            this.config.loop.active = t, this.media.loop = t;
        }
        get loop() {
            return Boolean(this.media.loop);
        }
        set source(e) {
            it.change.call(this, e);
        }
        get source() {
            return this.media.currentSrc;
        }
        get download() {
            const { download: e } = this.config.urls;
            return S.url(e) ? e : this.source;
        }
        set download(e) {
            S.url(e) && (this.config.urls.download = e, Pe.setDownloadUrl.call(this));
        }
        set poster(e) {
            this.isVideo ? Fe.setPoster.call(this, e, !1).catch(()=>{}) : this.debug.warn("Poster can only be set for video");
        }
        get poster() {
            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
        }
        get ratio() {
            if (!this.isVideo) return null;
            const e = oe(ce.call(this));
            return S.array(e) ? e.join(":") : e;
        }
        set ratio(e) {
            this.isVideo ? S.string(e) && re(e) ? (this.config.ratio = oe(e), ue.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video");
        }
        set autoplay(e) {
            this.config.autoplay = S.boolean(e) ? e : this.config.autoplay;
        }
        get autoplay() {
            return Boolean(this.config.autoplay);
        }
        toggleCaptions(e) {
            xe.toggle.call(this, e, !1);
        }
        set currentTrack(e) {
            xe.set.call(this, e, !1), xe.setup.call(this);
        }
        get currentTrack() {
            const { toggled: e, currentTrack: t } = this.captions;
            return e ? t : -1;
        }
        set language(e) {
            xe.setLanguage.call(this, e, !1);
        }
        get language() {
            return (xe.getCurrentTrack.call(this) || {}).language;
        }
        set pip(e) {
            if (!K.pip) return;
            const t = S.boolean(e) ? e : !this.pip;
            S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
        }
        get pip() {
            return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
        }
        setPreviewThumbnails(e) {
            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
        }
        static supported(e, t) {
            return K.check(e, t);
        }
        static loadSprite(e, t) {
            return ke(e, t);
        }
        static setup(e, t = {}) {
            let i = null;
            return S.string(e) ? i = Array.from(document.querySelectorAll(e)) : S.nodeList(e) ? i = Array.from(e) : S.array(e) && (i = e.filter(S.element)), S.empty(i) ? null : i.map((e)=>new st(e, t));
        }
    }
    var nt;
    return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
});

},{}],"53rcq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMarquee", ()=>initMarquee);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initMarquee = ()=>{
    const animation = {
        duration: 75000,
        easing: (t)=>t
    };
    var marqueeSlider = new (0, _keenSliderDefault.default)("#marquee", {
        loop: true,
        renderMode: "performance",
        drag: false,
        mode: "free",
        slides: {
            perView: 5,
            spacing: 16
        },
        created (s) {
            s.moveToIdx(5, true, animation);
        },
        updated (s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded (s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 2.5,
                    spacing: 16
                }
            },
            "(max-width: 500px)": {
                slides: {
                    perView: 1.5,
                    spacing: 16
                }
            }
        }
    });
};

},{"keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4pozR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>y);
var n = function() {
    return n = Object.assign || function(n) {
        for(var t, i = 1, e = arguments.length; i < e; i++)for(var r in t = arguments[i])Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
    }, n.apply(this, arguments);
};
function t(n, t, i) {
    if (i || 2 === arguments.length) for(var e, r = 0, a = t.length; r < a; r++)!e && r in t || (e || (e = Array.prototype.slice.call(t, 0, r)), e[r] = t[r]);
    return n.concat(e || Array.prototype.slice.call(t));
}
function i(n) {
    return Array.prototype.slice.call(n);
}
function e(n, t) {
    var i = Math.floor(n);
    return i === t || i + 1 === t ? n : t;
}
function r() {
    return Date.now();
}
function a(n, t, i) {
    if (t = "data-keen-slider-" + t, null === i) return n.removeAttribute(t);
    n.setAttribute(t, i || "");
}
function o(n, t) {
    return t = t || document, "function" == typeof n && (n = n(t)), Array.isArray(n) ? n : "string" == typeof n ? i(t.querySelectorAll(n)) : n instanceof HTMLElement ? [
        n
    ] : n instanceof NodeList ? i(n) : [];
}
function u(n) {
    n.raw && (n = n.raw), n.cancelable && !n.defaultPrevented && n.preventDefault();
}
function s(n) {
    n.raw && (n = n.raw), n.stopPropagation && n.stopPropagation();
}
function c() {
    var n = [];
    return {
        add: function(t, i, e, r) {
            t.addListener ? t.addListener(e) : t.addEventListener(i, e, r), n.push([
                t,
                i,
                e,
                r
            ]);
        },
        input: function(n, t, i, e) {
            this.add(n, t, function(n) {
                return function(t) {
                    t.nativeEvent && (t = t.nativeEvent);
                    var i = t.changedTouches || [], e = t.targetTouches || [], r = t.detail && t.detail.x ? t.detail : null;
                    return n({
                        id: r ? r.identifier ? r.identifier : "i" : e[0] ? e[0] ? e[0].identifier : "e" : "d",
                        idChanged: r ? r.identifier ? r.identifier : "i" : i[0] ? i[0] ? i[0].identifier : "e" : "d",
                        raw: t,
                        x: r && r.x ? r.x : e[0] ? e[0].screenX : r ? r.x : t.pageX,
                        y: r && r.y ? r.y : e[0] ? e[0].screenY : r ? r.y : t.pageY
                    });
                };
            }(i), e);
        },
        purge: function() {
            n.forEach(function(n) {
                n[0].removeListener ? n[0].removeListener(n[2]) : n[0].removeEventListener(n[1], n[2], n[3]);
            }), n = [];
        }
    };
}
function d(n, t, i) {
    return Math.min(Math.max(n, t), i);
}
function l(n) {
    return (n > 0 ? 1 : 0) - (n < 0 ? 1 : 0) || +n;
}
function f(n) {
    var t = n.getBoundingClientRect();
    return {
        height: e(t.height, n.offsetHeight),
        width: e(t.width, n.offsetWidth)
    };
}
function p(n, t, i, e) {
    var r = n && n[t];
    return null == r ? i : e && "function" == typeof r ? r() : r;
}
function v(n) {
    return Math.round(1e6 * n) / 1e6;
}
function h(n) {
    var t, i, e, r, a, o;
    function u(t) {
        o || (o = t), s(!0);
        var a = t - o;
        a > e && (a = e);
        var l = r[i];
        if (l[3] < a) return i++, u(t);
        var f = l[2], p = l[4], v = l[0], h = l[1] * (0, l[5])(0 === p ? 1 : (a - f) / p);
        if (h && n.track.to(v + h), a < e) return d();
        o = null, s(!1), c(null), n.emit("animationEnded");
    }
    function s(n) {
        t.active = n;
    }
    function c(n) {
        t.targetIdx = n;
    }
    function d() {
        var n;
        n = u, a = window.requestAnimationFrame(n);
    }
    function l() {
        var t;
        t = a, window.cancelAnimationFrame(t), s(!1), c(null), o && n.emit("animationStopped"), o = null;
    }
    return t = {
        active: !1,
        start: function(t) {
            if (l(), n.track.details) {
                var a = 0, o = n.track.details.position;
                i = 0, e = 0, r = t.map(function(n) {
                    var t, i = Number(o), r = null !== (t = n.earlyExit) && void 0 !== t ? t : n.duration, u = n.easing, s = n.distance * u(r / n.duration) || 0;
                    o += s;
                    var c = e;
                    return e += r, a += s, [
                        i,
                        n.distance,
                        c,
                        e,
                        n.duration,
                        u
                    ];
                }), c(n.track.distToIdx(a)), d(), n.emit("animationStarted");
            }
        },
        stop: l,
        targetIdx: null
    };
}
function m(n) {
    var i, e, a, o, u, s, c, f, h, m, g, b, x, k, y = 1 / 0, w = [], M = null, T = 0;
    function C(n) {
        _(T + n);
    }
    function E(n) {
        var t = z(T + n).abs;
        return D(t) ? t : null;
    }
    function z(n) {
        var i = Math.floor(Math.abs(v(n / e))), r = v((n % e + e) % e);
        r === e && (r = 0);
        var a = l(n), o = c.indexOf(t([], c, !0).reduce(function(n, t) {
            return Math.abs(t - r) < Math.abs(n - r) ? t : n;
        })), u = o;
        return a < 0 && i++, o === s && (u = 0, i += a > 0 ? 1 : -1), {
            abs: u + i * s * a,
            origin: o,
            rel: u
        };
    }
    function I(n, t, i) {
        var e;
        if (t || !S()) return A(n, i);
        if (!D(n)) return null;
        var r = z(null != i ? i : T), a = r.abs, o = n - r.rel, u = a + o;
        e = A(u);
        var c = A(u - s * l(o));
        return (null !== c && Math.abs(c) < Math.abs(e) || null === e) && (e = c), v(e);
    }
    function A(n, t) {
        if (null == t && (t = v(T)), !D(n) || null === n) return null;
        n = Math.round(n);
        var i = z(t), r = i.abs, a = i.rel, o = i.origin, u = O(n), d = (t % e + e) % e, l = c[o], f = Math.floor((n - (r - a)) / s) * e;
        return v(l - d - l + c[u] + f + (o === s ? e : 0));
    }
    function D(n) {
        return L(n) === n;
    }
    function L(n) {
        return d(n, h, m);
    }
    function S() {
        return o.loop;
    }
    function O(n) {
        return (n % s + s) % s;
    }
    function _(t) {
        var i;
        i = t - T, w.push({
            distance: i,
            timestamp: r()
        }), w.length > 6 && (w = w.slice(-6)), T = v(t);
        var e = H().abs;
        if (e !== M) {
            var a = null !== M;
            M = e, a && n.emit("slideChanged");
        }
    }
    function H(t) {
        var r = t ? null : function() {
            if (s) {
                var n = S(), t = n ? (T % e + e) % e : T, i = (n ? T % e : T) - u[0][2], r = 0 - (i < 0 && n ? e - Math.abs(i) : i), c = 0, d = z(T), f = d.abs, p = d.rel, v = u[p][2], y = u.map(function(t, i) {
                    var a = r + c;
                    (a < 0 - t[0] || a > 1) && (a += (Math.abs(a) > e - 1 && n ? e : 0) * l(-a));
                    var u = i - p, d = l(u), h = u + f;
                    n && (-1 === d && a > v && (h += s), 1 === d && a < v && (h -= s), null !== g && h < g && (a += e), null !== b && h > b && (a -= e));
                    var m = a + t[0] + t[1], x = Math.max(a >= 0 && m <= 1 ? 1 : m < 0 || a > 1 ? 0 : a < 0 ? Math.min(1, (t[0] + a) / t[0]) : (1 - a) / t[0], 0);
                    return c += t[0] + t[1], {
                        abs: h,
                        distance: o.rtl ? -1 * a + 1 - t[0] : a,
                        portion: x,
                        size: t[0]
                    };
                });
                return f = L(f), p = O(f), {
                    abs: L(f),
                    length: a,
                    max: k,
                    maxIdx: m,
                    min: x,
                    minIdx: h,
                    position: T,
                    progress: n ? t / e : T / a,
                    rel: p,
                    slides: y,
                    slidesLength: e
                };
            }
        }();
        return i.details = r, n.emit("detailsChanged"), r;
    }
    return i = {
        absToRel: O,
        add: C,
        details: null,
        distToIdx: E,
        idxToDist: I,
        init: function(t) {
            if (function() {
                if (o = n.options, u = (o.trackConfig || []).map(function(n) {
                    return [
                        p(n, "size", 1),
                        p(n, "spacing", 0),
                        p(n, "origin", 0)
                    ];
                }), s = u.length) {
                    e = v(u.reduce(function(n, t) {
                        return n + t[0] + t[1];
                    }, 0));
                    var t, i = s - 1;
                    a = v(e + u[0][2] - u[i][0] - u[i][2] - u[i][1]), c = u.reduce(function(n, i) {
                        if (!n) return [
                            0
                        ];
                        var e = u[n.length - 1], r = n[n.length - 1] + (e[0] + e[2]) + e[1];
                        return r -= i[2], n[n.length - 1] > r && (r = n[n.length - 1]), r = v(r), n.push(r), (!t || t < r) && (f = n.length - 1), t = r, n;
                    }, null), 0 === a && (f = 0), c.push(v(e));
                }
            }(), !s) return H(!0);
            var i;
            !function() {
                var t = n.options.range, i = n.options.loop;
                g = h = i ? p(i, "min", -1 / 0) : 0, b = m = i ? p(i, "max", y) : f;
                var e = p(t, "min", null), r = p(t, "max", null);
                null !== e && (h = e), null !== r && (m = r), x = h === -1 / 0 ? h : n.track.idxToDist(h || 0, !0, 0), k = m === y ? m : I(m, !0, 0), null === r && (b = m), p(t, "align", !1) && m !== y && 0 === u[O(m)][2] && (k -= 1 - u[O(m)][0], m = E(k - T)), x = v(x), k = v(k);
            }(), i = t, Number(i) === i ? C(A(L(t))) : H();
        },
        to: _,
        velocity: function() {
            var n = r(), t = w.reduce(function(t, i) {
                var e = i.distance, r = i.timestamp;
                return n - r > 200 || (l(e) !== l(t.distance) && t.distance && (t = {
                    distance: 0,
                    lastTimestamp: 0,
                    time: 0
                }), t.time && (t.distance += e), t.lastTimestamp && (t.time += r - t.lastTimestamp), t.lastTimestamp = r), t;
            }, {
                distance: 0,
                lastTimestamp: 0,
                time: 0
            });
            return t.distance / t.time || 0;
        }
    };
}
function g(n) {
    var t, i, e, r, a, o, u, s;
    function c(n) {
        return 2 * n;
    }
    function f(n) {
        return d(n, u, s);
    }
    function p(n) {
        return 1 - Math.pow(1 - n, 3);
    }
    function v() {
        return e ? n.track.velocity() : 0;
    }
    function h() {
        b();
        var t = "free-snap" === n.options.mode, i = n.track, e = v();
        r = l(e);
        var u = n.track.details, s = [];
        if (e || !t) {
            var d = m(e), h = d.dist, g = d.dur;
            if (g = c(g), h *= r, t) {
                var x = i.idxToDist(i.distToIdx(h), !0);
                x && (h = x);
            }
            s.push({
                distance: h,
                duration: g,
                easing: p
            });
            var k = u.position, y = k + h;
            if (y < a || y > o) {
                var w = y < a ? a - k : o - k, M = 0, T = e;
                if (l(w) === r) {
                    var C = Math.min(Math.abs(w) / Math.abs(h), 1), E = function(n) {
                        return 1 - Math.pow(1 - n, 1 / 3);
                    }(C) * g;
                    s[0].earlyExit = E, T = e * (1 - C);
                } else s[0].earlyExit = 0, M += w;
                var z = m(T, 100), I = z.dist * r;
                n.options.rubberband && (s.push({
                    distance: I,
                    duration: c(z.dur),
                    easing: p
                }), s.push({
                    distance: -I + M,
                    duration: 500,
                    easing: p
                }));
            }
            n.animator.start(s);
        } else n.moveToIdx(f(u.abs), !0, {
            duration: 500,
            easing: function(n) {
                return 1 + --n * n * n * n * n;
            }
        });
    }
    function m(n, t) {
        void 0 === t && (t = 1e3);
        var i = 147e-9 + (n = Math.abs(n)) / t;
        return {
            dist: Math.pow(n, 2) / i,
            dur: n / i
        };
    }
    function g() {
        var t = n.track.details;
        t && (a = t.min, o = t.max, u = t.minIdx, s = t.maxIdx);
    }
    function b() {
        n.animator.stop();
    }
    n.on("updated", g), n.on("optionsChanged", g), n.on("created", g), n.on("dragStarted", function() {
        e = !1, b(), t = i = n.track.details.abs;
    }), n.on("dragChecked", function() {
        e = !0;
    }), n.on("dragEnded", function() {
        var e = n.options.mode;
        "snap" === e && function() {
            var e = n.track, r = n.track.details, u = r.position, s = l(v());
            (u > o || u < a) && (s = 0);
            var c = t + s;
            0 === r.slides[e.absToRel(c)].portion && (c -= s), t !== i && (c = i), l(e.idxToDist(c, !0)) !== s && (c += s), c = f(c);
            var d = e.idxToDist(c, !0);
            n.animator.start([
                {
                    distance: d,
                    duration: 500,
                    easing: function(n) {
                        return 1 + --n * n * n * n * n;
                    }
                }
            ]);
        }(), "free" !== e && "free-snap" !== e || h();
    }), n.on("dragged", function() {
        i = n.track.details.abs;
    });
}
function b(n) {
    var t, i, e, r, a, f, p, v, h, m, g, b, x, k, y, w, M, T, C = c();
    function E(t) {
        if (f && v === t.id) {
            var o = D(t);
            if (h) {
                if (!A(t)) return I(t);
                m = o, h = !1, n.emit("dragChecked");
            }
            if (w) return m = o;
            u(t);
            var c = function(t) {
                if (M === -1 / 0 && T === 1 / 0) return t;
                var e = n.track.details, o = e.length, u = e.position, s = d(t, M - u, T - u);
                if (0 === o) return 0;
                if (!n.options.rubberband) return s;
                if (u <= T && u >= M) return t;
                if (u < M && i > 0 || u > T && i < 0) return t;
                var c = (u < M ? u - M : u - T) / o, l = r * o, f = Math.abs(c * l), p = Math.max(0, 1 - f / a * 2);
                return p * p * t;
            }(p(m - o) / r * e);
            i = l(c);
            var x = n.track.details.position;
            (x > M && x < T || x === M && i > 0 || x === T && i < 0) && s(t), g += c, !b && Math.abs(g * r) > 5 && (b = !0), n.track.add(c), m = o, n.emit("dragged");
        }
    }
    function z(t) {
        !f && n.track.details && n.track.details.length && (g = 0, f = !0, b = !1, h = !0, v = t.id, A(t), m = D(t), n.emit("dragStarted"));
    }
    function I(t) {
        f && v === t.idChanged && (f = !1, n.emit("dragEnded"));
    }
    function A(n) {
        var t = L(), i = t ? n.y : n.x, e = t ? n.x : n.y, r = void 0 !== x && void 0 !== k && Math.abs(k - e) <= Math.abs(x - i);
        return x = i, k = e, r;
    }
    function D(n) {
        return L() ? n.y : n.x;
    }
    function L() {
        return n.options.vertical;
    }
    function S() {
        r = n.size, a = L() ? window.innerHeight : window.innerWidth;
        var t = n.track.details;
        t && (M = t.min, T = t.max);
    }
    function O(n) {
        b && (s(n), u(n));
    }
    function _() {
        if (C.purge(), n.options.drag && !n.options.disabled) {
            var i;
            i = n.options.dragSpeed || 1, p = "function" == typeof i ? i : function(n) {
                return n * i;
            }, e = n.options.rtl ? -1 : 1, S(), t = n.container, function() {
                var n = "data-keen-slider-clickable";
                o("[".concat(n, "]:not([").concat(n, "=false])"), t).map(function(n) {
                    C.add(n, "dragstart", s), C.add(n, "mousedown", s), C.add(n, "touchstart", s);
                });
            }(), C.add(t, "dragstart", function(n) {
                u(n);
            }), C.add(t, "click", O, {
                capture: !0
            }), C.input(t, "ksDragStart", z), C.input(t, "ksDrag", E), C.input(t, "ksDragEnd", I), C.input(t, "mousedown", z), C.input(t, "mousemove", E), C.input(t, "mouseleave", I), C.input(t, "mouseup", I), C.input(t, "touchstart", z, {
                passive: !0
            }), C.input(t, "touchmove", E, {
                passive: !1
            }), C.input(t, "touchend", I), C.input(t, "touchcancel", I), C.add(window, "wheel", function(n) {
                f && u(n);
            });
            var r = "data-keen-slider-scrollable";
            o("[".concat(r, "]:not([").concat(r, "=false])"), n.container).map(function(n) {
                return function(n) {
                    var t;
                    C.input(n, "touchstart", function(n) {
                        t = D(n), w = !0, y = !0;
                    }, {
                        passive: !0
                    }), C.input(n, "touchmove", function(i) {
                        var e = L(), r = e ? n.scrollHeight - n.clientHeight : n.scrollWidth - n.clientWidth, a = t - D(i), o = e ? n.scrollTop : n.scrollLeft, s = e && "scroll" === n.style.overflowY || !e && "scroll" === n.style.overflowX;
                        if (t = D(i), (a < 0 && o > 0 || a > 0 && o < r) && y && s) return w = !0;
                        y = !1, u(i), w = !1;
                    }), C.input(n, "touchend", function() {
                        w = !1;
                    });
                }(n);
            });
        }
    }
    n.on("updated", S), n.on("optionsChanged", _), n.on("created", _), n.on("destroyed", C.purge);
}
function x(n) {
    var t, i, e = null;
    function r(t, i, e) {
        n.animator.active ? o(t, i, e) : requestAnimationFrame(function() {
            return o(t, i, e);
        });
    }
    function a() {
        r(!1, !1, i);
    }
    function o(i, r, a) {
        var o = 0, u = n.size, d = n.track.details;
        if (d && t) {
            var l = d.slides;
            t.forEach(function(n, t) {
                if (i) !e && r && s(n, null, a), c(n, null, a);
                else {
                    if (!l[t]) return;
                    var d = l[t].size * u;
                    !e && r && s(n, d, a), c(n, l[t].distance * u - o, a), o += d;
                }
            });
        }
    }
    function u(t) {
        return "performance" === n.options.renderMode ? Math.round(t) : t;
    }
    function s(n, t, i) {
        var e = i ? "height" : "width";
        null !== t && (t = u(t) + "px"), n.style["min-" + e] = t, n.style["max-" + e] = t;
    }
    function c(n, t, i) {
        if (null !== t) {
            t = u(t);
            var e = i ? t : 0;
            t = "translate3d(".concat(i ? 0 : t, "px, ").concat(e, "px, 0)");
        }
        n.style.transform = t, n.style["-webkit-transform"] = t;
    }
    function d() {
        t && (o(!0, !0, i), t = null), n.on("detailsChanged", a, !0);
    }
    function l() {
        r(!1, !0, i);
    }
    function f() {
        d(), i = n.options.vertical, n.options.disabled || "custom" === n.options.renderMode || (e = "auto" === p(n.options.slides, "perView", null), n.on("detailsChanged", a), (t = n.slides).length && l());
    }
    n.on("created", f), n.on("optionsChanged", f), n.on("beforeOptionsChanged", function() {
        d();
    }), n.on("updated", l), n.on("destroyed", d);
}
function k(t, i) {
    return function(e) {
        var r, u, s, d, l, v, h = c();
        function m(n) {
            var t;
            a(e.container, "reverse", "rtl" !== (t = e.container, window.getComputedStyle(t, null).getPropertyValue("direction")) || n ? null : ""), a(e.container, "v", e.options.vertical && !n ? "" : null), a(e.container, "disabled", e.options.disabled && !n ? "" : null);
        }
        function g() {
            b() && M();
        }
        function b() {
            var t = null;
            if (d.forEach(function(n) {
                n.matches && (t = n.__media);
            }), t === r) return !1;
            r || e.emit("beforeOptionsChanged"), r = t;
            var i = t ? s.breakpoints[t] : s;
            return e.options = n(n({}, s), i), m(), I(), A(), C(), !0;
        }
        function x(n) {
            var t = f(n);
            return (e.options.vertical ? t.height : t.width) / e.size || 1;
        }
        function k() {
            return e.options.trackConfig.length;
        }
        function y(t) {
            for(var a in r = !1, s = n(n({}, i), t), h.purge(), u = e.size, d = [], s.breakpoints || []){
                var o = window.matchMedia(a);
                o.__media = a, d.push(o), h.add(o, "change", g);
            }
            h.add(window, "orientationchange", z), h.add(window, "resize", E), b();
        }
        function w(n) {
            e.animator.stop();
            var t = e.track.details;
            e.track.init(null != n ? n : t ? t.abs : 0);
        }
        function M(n) {
            w(n), e.emit("optionsChanged");
        }
        function T(n, t) {
            if (n) return y(n), void M(t);
            I(), A();
            var i = k();
            C(), k() !== i ? M(t) : w(t), e.emit("updated");
        }
        function C() {
            var n = e.options.slides;
            if ("function" == typeof n) return e.options.trackConfig = n(e.size, e.slides);
            for(var t = e.slides, i = t.length, r = "number" == typeof n ? n : p(n, "number", i, !0), a = [], o = p(n, "perView", 1, !0), u = p(n, "spacing", 0, !0) / e.size || 0, s = "auto" === o ? u : u / o, c = p(n, "origin", "auto"), d = 0, l = 0; l < r; l++){
                var f = "auto" === o ? x(t[l]) : 1 / o - u + s, v = "center" === c ? .5 - f / 2 : "auto" === c ? 0 : c;
                a.push({
                    origin: v,
                    size: f,
                    spacing: u
                }), d += f;
            }
            if (d += u * (r - 1), "auto" === c && !e.options.loop && 1 !== o) {
                var h = 0;
                a.map(function(n) {
                    var t = d - h;
                    return h += n.size + u, t >= 1 || (n.origin = 1 - t - (d > 1 ? 0 : 1 - d)), n;
                });
            }
            e.options.trackConfig = a;
        }
        function E() {
            I();
            var n = e.size;
            e.options.disabled || n === u || (u = n, T());
        }
        function z() {
            E(), setTimeout(E, 500), setTimeout(E, 2e3);
        }
        function I() {
            var n = f(e.container);
            e.size = (e.options.vertical ? n.height : n.width) || 1;
        }
        function A() {
            e.slides = o(e.options.selector, e.container);
        }
        e.container = (v = o(t, l || document)).length ? v[0] : null, e.destroy = function() {
            h.purge(), e.emit("destroyed"), m(!0);
        }, e.prev = function() {
            e.moveToIdx(e.track.details.abs - 1, !0);
        }, e.next = function() {
            e.moveToIdx(e.track.details.abs + 1, !0);
        }, e.update = T, y(e.options);
    };
}
var y = function(n, i, e) {
    try {
        return function(n, t) {
            var i, e = {};
            return i = {
                emit: function(n) {
                    e[n] && e[n].forEach(function(n) {
                        n(i);
                    });
                    var t = i.options && i.options[n];
                    t && t(i);
                },
                moveToIdx: function(n, t, e) {
                    var r = i.track.idxToDist(n, t);
                    if (r) {
                        var a = i.options.defaultAnimation;
                        i.animator.start([
                            {
                                distance: r,
                                duration: p(e || a, "duration", 500),
                                easing: p(e || a, "easing", function(n) {
                                    return 1 + --n * n * n * n * n;
                                })
                            }
                        ]);
                    }
                },
                on: function(n, t, i) {
                    void 0 === i && (i = !1), e[n] || (e[n] = []);
                    var r = e[n].indexOf(t);
                    r > -1 ? i && delete e[n][r] : i || e[n].push(t);
                },
                options: n
            }, function() {
                if (i.track = m(i), i.animator = h(i), t) for(var n = 0, e = t; n < e.length; n++)(0, e[n])(i);
                i.track.init(i.options.initial || 0), i.emit("created");
            }(), i;
        }(i, t([
            k(n, {
                drag: !0,
                mode: "snap",
                renderMode: "precision",
                rubberband: !0,
                selector: ".keen-slider__slide"
            }),
            x,
            b,
            g
        ], e || [], !0));
    } catch (n) {
        console.error(n);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"beiv4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHomeMotion", ()=>initHomeMotion);
var _motion = require("motion");
const initHomeMotion = ()=>{
    // Select all cards
    const smallCards = document.querySelectorAll(".zuhause_features-liste-sektion_card-small");
    const mediumCards = document.querySelectorAll(".zuhause_features-liste-sektion_card-medium");
    const largeCards = document.querySelectorAll(".zuhause_features-liste-sektion_card-large");
    // Helper function for card animations
    const setupCardAnimation = (card, initialY = 50, initialX = 0)=>{
        // Initial state
        (0, _motion.animate)(card, {
            opacity: 0,
            y: initialY,
            x: initialX,
            scale: 0.9
        }, {
            duration: 0
        });
        // Scroll animation
        (0, _motion.scroll)((0, _motion.animate)(card, {
            opacity: [
                0,
                1
            ],
            y: [
                initialY,
                0
            ],
            x: [
                initialX,
                0
            ],
            scale: [
                0.9,
                1
            ]
        }), {
            target: card,
            offset: [
                "start 80%",
                "start 40%"
            ] // Starts when card top hits 80% of viewport, ends when it hits 40%
        });
    };
    // Apply animations with different initial positions
    smallCards.forEach((card, i)=>{
        setupCardAnimation(card, 50, 0);
        // Hover animations remain the same
        card.addEventListener("mouseenter", ()=>{
            (0, _motion.animate)(card, {
                scale: 1.03,
                y: -5
            }, {
                duration: 0.3,
                easing: "ease-out"
            });
        });
        card.addEventListener("mouseleave", ()=>{
            (0, _motion.animate)(card, {
                scale: 1,
                y: 0
            }, {
                duration: 0.3,
                easing: "ease-out"
            });
        });
    });
    mediumCards.forEach((card, i)=>{
        setupCardAnimation(card, 0, -50);
        // Hover animations remain the same
        card.addEventListener("mouseenter", ()=>{
            (0, _motion.animate)(card, {
                scale: 1.05,
                rotate: 1
            }, {
                duration: 0.3,
                easing: "ease-out"
            });
        });
        card.addEventListener("mouseleave", ()=>{
            (0, _motion.animate)(card, {
                scale: 1,
                rotate: 0
            }, {
                duration: 0.3,
                easing: "ease-out"
            });
        });
    });
    largeCards.forEach((card, i)=>{
        setupCardAnimation(card, 30, 0);
        // Hover animations remain the same
        card.addEventListener("mouseenter", ()=>{
            (0, _motion.animate)(card, {
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }, {
                duration: 0.4,
                easing: "ease-out"
            });
        });
        card.addEventListener("mouseleave", ()=>{
            (0, _motion.animate)(card, {
                scale: 1,
                boxShadow: "0 0 0 rgba(0,0,0,0)"
            }, {
                duration: 0.4,
                easing: "ease-out"
            });
        });
    });
    // Benefits items animation
    const benefitsItems = document.querySelectorAll(".zuhause_benefits_item");
    benefitsItems.forEach((item, i)=>{
        // Initial state
        (0, _motion.animate)(item, {
            opacity: 0,
            x: -100,
            scale: 0.95
        }, {
            duration: 0
        });
        // Scroll animation with improved visibility trigger
        (0, _motion.scroll)((0, _motion.animate)(item, {
            opacity: [
                0,
                1
            ],
            x: [
                -100,
                0
            ],
            scale: [
                0.95,
                1
            ]
        }), {
            target: item,
            offset: [
                "start 85%",
                "start 65%"
            ] // Starts earlier, finishes when clearly visible
        });
    });
};

},{"motion":"7nUvx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7nUvx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>(0, _hoverMjs.hover));
parcelHelpers.export(exports, "isDragActive", ()=>(0, _isActiveMjs.isDragActive));
parcelHelpers.export(exports, "press", ()=>(0, _indexMjs.press));
parcelHelpers.export(exports, "invariant", ()=>(0, _errorsMjs.invariant));
parcelHelpers.export(exports, "noop", ()=>(0, _noopMjs.noop));
parcelHelpers.export(exports, "progress", ()=>(0, _progressMjs.progress));
parcelHelpers.export(exports, "animate", ()=>(0, _indexMjs1.animate));
parcelHelpers.export(exports, "createScopedAnimate", ()=>(0, _indexMjs1.createScopedAnimate));
parcelHelpers.export(exports, "animateMini", ()=>(0, _animateStyleMjs.animateMini));
parcelHelpers.export(exports, "scroll", ()=>(0, _indexMjs2.scroll));
parcelHelpers.export(exports, "scrollInfo", ()=>(0, _trackMjs.scrollInfo));
parcelHelpers.export(exports, "inView", ()=>(0, _indexMjs3.inView));
parcelHelpers.export(exports, "MotionValue", ()=>(0, _indexMjs4.MotionValue));
parcelHelpers.export(exports, "motionValue", ()=>(0, _indexMjs4.motionValue));
parcelHelpers.export(exports, "anticipate", ()=>(0, _anticipateMjs.anticipate));
parcelHelpers.export(exports, "backIn", ()=>(0, _backMjs.backIn));
parcelHelpers.export(exports, "backInOut", ()=>(0, _backMjs.backInOut));
parcelHelpers.export(exports, "backOut", ()=>(0, _backMjs.backOut));
parcelHelpers.export(exports, "circIn", ()=>(0, _circMjs.circIn));
parcelHelpers.export(exports, "circInOut", ()=>(0, _circMjs.circInOut));
parcelHelpers.export(exports, "circOut", ()=>(0, _circMjs.circOut));
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierMjs.cubicBezier));
parcelHelpers.export(exports, "easeIn", ()=>(0, _easeMjs.easeIn));
parcelHelpers.export(exports, "easeInOut", ()=>(0, _easeMjs.easeInOut));
parcelHelpers.export(exports, "easeOut", ()=>(0, _easeMjs.easeOut));
parcelHelpers.export(exports, "mirrorEasing", ()=>(0, _mirrorMjs.mirrorEasing));
parcelHelpers.export(exports, "reverseEasing", ()=>(0, _reverseMjs.reverseEasing));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsMjs.steps));
parcelHelpers.export(exports, "inertia", ()=>(0, _inertiaMjs.inertia));
parcelHelpers.export(exports, "keyframes", ()=>(0, _keyframesMjs.keyframes));
parcelHelpers.export(exports, "spring", ()=>(0, _indexMjs5.spring));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerMjs.stagger));
parcelHelpers.export(exports, "time", ()=>(0, _syncTimeMjs.time));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampMjs.clamp));
parcelHelpers.export(exports, "delay", ()=>(0, _delayMjs.delayInSeconds));
parcelHelpers.export(exports, "distance", ()=>(0, _distanceMjs.distance));
parcelHelpers.export(exports, "distance2D", ()=>(0, _distanceMjs.distance2D));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateMjs.interpolate));
parcelHelpers.export(exports, "mix", ()=>(0, _indexMjs6.mix));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeMjs.pipe));
parcelHelpers.export(exports, "transform", ()=>(0, _transformMjs.transform));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapMjs.wrap));
parcelHelpers.export(exports, "cancelSync", ()=>(0, _indexLegacyMjs.cancelSync));
parcelHelpers.export(exports, "sync", ()=>(0, _indexLegacyMjs.sync));
parcelHelpers.export(exports, "cancelFrame", ()=>(0, _frameMjs.cancelFrame));
parcelHelpers.export(exports, "frame", ()=>(0, _frameMjs.frame));
parcelHelpers.export(exports, "frameData", ()=>(0, _frameMjs.frameData));
parcelHelpers.export(exports, "frameSteps", ()=>(0, _frameMjs.frameSteps));
var _hoverMjs = require("../../motion-dom/dist/es/gestures/hover.mjs");
var _isActiveMjs = require("../../motion-dom/dist/es/gestures/drag/state/is-active.mjs");
var _indexMjs = require("../../motion-dom/dist/es/gestures/press/index.mjs");
var _errorsMjs = require("../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../motion-utils/dist/es/noop.mjs");
var _progressMjs = require("../../motion-utils/dist/es/progress.mjs");
var _indexMjs1 = require("../../framer-motion/dist/es/animation/animate/index.mjs");
var _animateStyleMjs = require("../../framer-motion/dist/es/animation/animators/waapi/animate-style.mjs");
var _indexMjs2 = require("../../framer-motion/dist/es/render/dom/scroll/index.mjs");
var _trackMjs = require("../../framer-motion/dist/es/render/dom/scroll/track.mjs");
var _indexMjs3 = require("../../framer-motion/dist/es/render/dom/viewport/index.mjs");
var _indexMjs4 = require("../../framer-motion/dist/es/value/index.mjs");
var _anticipateMjs = require("../../framer-motion/dist/es/easing/anticipate.mjs");
var _backMjs = require("../../framer-motion/dist/es/easing/back.mjs");
var _circMjs = require("../../framer-motion/dist/es/easing/circ.mjs");
var _cubicBezierMjs = require("../../framer-motion/dist/es/easing/cubic-bezier.mjs");
var _easeMjs = require("../../framer-motion/dist/es/easing/ease.mjs");
var _mirrorMjs = require("../../framer-motion/dist/es/easing/modifiers/mirror.mjs");
var _reverseMjs = require("../../framer-motion/dist/es/easing/modifiers/reverse.mjs");
var _stepsMjs = require("../../framer-motion/dist/es/easing/steps.mjs");
var _inertiaMjs = require("../../framer-motion/dist/es/animation/generators/inertia.mjs");
var _keyframesMjs = require("../../framer-motion/dist/es/animation/generators/keyframes.mjs");
var _indexMjs5 = require("../../framer-motion/dist/es/animation/generators/spring/index.mjs");
var _staggerMjs = require("../../framer-motion/dist/es/animation/utils/stagger.mjs");
var _syncTimeMjs = require("../../framer-motion/dist/es/frameloop/sync-time.mjs");
var _clampMjs = require("../../framer-motion/dist/es/utils/clamp.mjs");
var _delayMjs = require("../../framer-motion/dist/es/utils/delay.mjs");
var _distanceMjs = require("../../framer-motion/dist/es/utils/distance.mjs");
var _interpolateMjs = require("../../framer-motion/dist/es/utils/interpolate.mjs");
var _indexMjs6 = require("../../framer-motion/dist/es/utils/mix/index.mjs");
var _pipeMjs = require("../../framer-motion/dist/es/utils/pipe.mjs");
var _transformMjs = require("../../framer-motion/dist/es/utils/transform.mjs");
var _wrapMjs = require("../../framer-motion/dist/es/utils/wrap.mjs");
var _indexLegacyMjs = require("../../framer-motion/dist/es/frameloop/index-legacy.mjs");
var _frameMjs = require("../../framer-motion/dist/es/frameloop/frame.mjs");

},{"../../motion-dom/dist/es/gestures/hover.mjs":false,"../../motion-dom/dist/es/gestures/drag/state/is-active.mjs":false,"../../motion-dom/dist/es/gestures/press/index.mjs":false,"../../motion-utils/dist/es/errors.mjs":false,"../../motion-utils/dist/es/noop.mjs":false,"../../motion-utils/dist/es/progress.mjs":false,"../../framer-motion/dist/es/animation/animate/index.mjs":"HtBQd","../../framer-motion/dist/es/animation/animators/waapi/animate-style.mjs":false,"../../framer-motion/dist/es/render/dom/scroll/index.mjs":"2Dpyg","../../framer-motion/dist/es/render/dom/scroll/track.mjs":false,"../../framer-motion/dist/es/render/dom/viewport/index.mjs":"cPHq2","../../framer-motion/dist/es/value/index.mjs":false,"../../framer-motion/dist/es/easing/anticipate.mjs":false,"../../framer-motion/dist/es/easing/back.mjs":false,"../../framer-motion/dist/es/easing/circ.mjs":false,"../../framer-motion/dist/es/easing/cubic-bezier.mjs":false,"../../framer-motion/dist/es/easing/ease.mjs":false,"../../framer-motion/dist/es/easing/modifiers/mirror.mjs":false,"../../framer-motion/dist/es/easing/modifiers/reverse.mjs":false,"../../framer-motion/dist/es/easing/steps.mjs":false,"../../framer-motion/dist/es/animation/generators/inertia.mjs":false,"../../framer-motion/dist/es/animation/generators/keyframes.mjs":false,"../../framer-motion/dist/es/animation/generators/spring/index.mjs":false,"../../framer-motion/dist/es/animation/utils/stagger.mjs":"iy9s5","../../framer-motion/dist/es/frameloop/sync-time.mjs":false,"../../framer-motion/dist/es/utils/clamp.mjs":false,"../../framer-motion/dist/es/utils/delay.mjs":false,"../../framer-motion/dist/es/utils/distance.mjs":false,"../../framer-motion/dist/es/utils/interpolate.mjs":false,"../../framer-motion/dist/es/utils/mix/index.mjs":false,"../../framer-motion/dist/es/utils/pipe.mjs":false,"../../framer-motion/dist/es/utils/transform.mjs":false,"../../framer-motion/dist/es/utils/wrap.mjs":false,"../../framer-motion/dist/es/frameloop/index-legacy.mjs":false,"../../framer-motion/dist/es/frameloop/frame.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dv3VS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var _noopMjs = require("./noop.mjs");
let warning = (0, _noopMjs.noop);
let invariant = (0, _noopMjs.noop);
warning = (check, message)=>{
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = (check, message)=>{
    if (!check) throw new Error(message);
};

},{"./noop.mjs":"4GKxA","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4GKxA":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
const noop = (any)=>any;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7g0rh":[function(require,module,exports,__globalThis) {
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"HtBQd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "createScopedAnimate", ()=>createScopedAnimate);
var _groupMjs = require("../../../../../motion-dom/dist/es/animation/controls/Group.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _sequenceMjs = require("./sequence.mjs");
var _subjectMjs = require("./subject.mjs");
function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */ function createScopedAnimate(scope) {
    /**
     * Implementation
     */ function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        if (isSequence(subjectOrSequence)) animations = (0, _sequenceMjs.animateSequence)(subjectOrSequence, optionsOrKeyframes, scope);
        else animations = (0, _subjectMjs.animateSubject)(subjectOrSequence, optionsOrKeyframes, options, scope);
        const animation = new (0, _groupMjs.GroupPlaybackControls)(animations);
        if (scope) scope.animations.push(animation);
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();

},{"../../../../../motion-dom/dist/es/animation/controls/Group.mjs":"gfXFe","../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","./sequence.mjs":"a0s3H","./subject.mjs":"hLdQT","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gfXFe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupPlaybackControls", ()=>GroupPlaybackControls);
var _baseGroupMjs = require("./BaseGroup.mjs");
/**
 * TODO: This is a temporary class to support the legacy
 * thennable API
 */ class GroupPlaybackControls extends (0, _baseGroupMjs.BaseGroupPlaybackControls) {
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
}

},{"./BaseGroup.mjs":"cqzQ0","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cqzQ0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseGroupPlaybackControls", ()=>BaseGroupPlaybackControls);
var _scrollTimelineMjs = require("../../utils/supports/scroll-timeline.mjs");
class BaseGroupPlaybackControls {
    constructor(animations){
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        // Support for new finished Promise and legacy thennable API
        return Promise.all(this.animations.map((animation)=>"finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++)this.animations[i][propName] = newValue;
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation)=>{
            if ((0, _scrollTimelineMjs.supportsScrollTimeline)() && animation.attachTimeline) return animation.attachTimeline(timeline);
            else if (typeof fallback === "function") return fallback(animation);
        });
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++)max = Math.max(max, this.animations[i].duration);
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}

},{"../../utils/supports/scroll-timeline.mjs":"5ZQAw","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5ZQAw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsScrollTimeline", ()=>supportsScrollTimeline);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _memoMjs = require("../../../../../motion-utils/dist/es/memo.mjs");
const supportsScrollTimeline = (0, _memoMjs.memo)(()=>window.ScrollTimeline !== undefined);

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/memo.mjs":"8gElA","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8gElA":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memo", ()=>memo);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"a0s3H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSequence", ()=>animateSequence);
var _indexMjs = require("../generators/spring/index.mjs");
var _createMjs = require("../sequence/create.mjs");
var _subjectMjs = require("./subject.mjs");
function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = (0, _createMjs.createAnimationsFromSequence)(sequence, options, scope, {
        spring: (0, _indexMjs.spring)
    });
    animationDefinitions.forEach(({ keyframes, transition }, subject)=>{
        animations.push(...(0, _subjectMjs.animateSubject)(subject, keyframes, transition));
    });
    return animations;
}

},{"../generators/spring/index.mjs":"bkQPw","../sequence/create.mjs":"1ETOv","./subject.mjs":"hLdQT","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bkQPw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _calcDurationMjs = require("../../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs");
var _linearMjs = require("../../../../../../motion-dom/dist/es/animation/waapi/utils/linear.mjs");
var _clampMjs = require("../../../utils/clamp.mjs");
var _velocityMjs = require("../utils/velocity.mjs");
var _defaultsMjs = require("./defaults.mjs");
var _findMjs = require("./find.mjs");
const durationKeys = [
    "duration",
    "bounce"
];
const physicsKeys = [
    "stiffness",
    "damping",
    "mass"
];
function isSpringType(options, keys) {
    return keys.some((key)=>options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: (0, _defaultsMjs.springDefaults).velocity,
        stiffness: (0, _defaultsMjs.springDefaults).stiffness,
        damping: (0, _defaultsMjs.springDefaults).damping,
        mass: (0, _defaultsMjs.springDefaults).mass,
        isResolvedFromDuration: false,
        ...options
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = 2 * Math.PI / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 * (0, _clampMjs.clamp)(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: (0, _defaultsMjs.springDefaults).mass,
                stiffness,
                damping
            };
        } else {
            const derived = (0, _findMjs.findSpring)(options);
            springOptions = {
                ...springOptions,
                ...derived,
                mass: (0, _defaultsMjs.springDefaults).mass
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = (0, _defaultsMjs.springDefaults).visualDuration, bounce = (0, _defaultsMjs.springDefaults).bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
        visualDuration: optionsOrVisualDuration,
        keyframes: [
            0,
            1
        ],
        bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: origin
    };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
        ...options,
        velocity: -(0, _timeConversionMjs.millisecondsToSeconds)(options.velocity || 0)
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0, _timeConversionMjs.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */ const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? (0, _defaultsMjs.springDefaults).restSpeed.granular : (0, _defaultsMjs.springDefaults).restSpeed.default);
    restDelta || (restDelta = isGranularScale ? (0, _defaultsMjs.springDefaults).restDelta.granular : (0, _defaultsMjs.springDefaults).restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = (0, _findMjs.calcAngularFreq)(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
        };
    } else if (dampingRatio === 1) // Critically damped spring
    resolveSpring = (t)=>target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t)=>{
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */ if (dampingRatio < 1) currentVelocity = t === 0 ? (0, _timeConversionMjs.secondsToMilliseconds)(initialVelocity) : (0, _velocityMjs.calcGeneratorVelocity)(resolveSpring, t, current);
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else state.done = t >= duration;
            state.value = state.done ? target : current;
            return state;
        },
        toString: ()=>{
            const calculatedDuration = Math.min((0, _calcDurationMjs.calcGeneratorDuration)(generator), (0, _calcDurationMjs.maxGeneratorDuration));
            const easing = (0, _linearMjs.generateLinearEasing)((progress)=>generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        }
    };
    return generator;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-utils/dist/es/time-conversion.mjs":"4izc7","../../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs":"iVZcy","../../../../../../motion-dom/dist/es/animation/waapi/utils/linear.mjs":"dNGx8","../../../utils/clamp.mjs":"j7ovl","../utils/velocity.mjs":"8m0Gi","./defaults.mjs":"e5KsM","./find.mjs":"52ftH","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4izc7":[function(require,module,exports,__globalThis) {
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>millisecondsToSeconds);
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>secondsToMilliseconds);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iVZcy":[function(require,module,exports,__globalThis) {
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorDuration", ()=>calcGeneratorDuration);
parcelHelpers.export(exports, "maxGeneratorDuration", ()=>maxGeneratorDuration);
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dNGx8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateLinearEasing", ()=>generateLinearEasing);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _progressMjs = require("../../../../../../motion-utils/dist/es/progress.mjs");
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++)points += easing((0, _progressMjs.progress)(0, numPoints - 1, i)) + ", ";
    return `linear(${points.substring(0, points.length - 2)})`;
};

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-utils/dist/es/progress.mjs":"7g0rh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"j7ovl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8m0Gi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorVelocity", ()=>calcGeneratorVelocity);
var _velocityPerSecondMjs = require("../../../utils/velocity-per-second.mjs");
const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0, _velocityPerSecondMjs.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}

},{"../../../utils/velocity-per-second.mjs":"fs0QM","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fs0QM":[function(require,module,exports,__globalThis) {
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "velocityPerSecond", ()=>velocityPerSecond);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"e5KsM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "springDefaults", ()=>springDefaults);
const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2
    },
    restDelta: {
        granular: 0.005,
        default: 0.5
    },
    // Limits
    minDuration: 0.01,
    maxDuration: 10.0,
    minDamping: 0.05,
    maxDamping: 1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"52ftH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcAngularFreq", ()=>calcAngularFreq);
parcelHelpers.export(exports, "findSpring", ()=>findSpring);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _clampMjs = require("../../../utils/clamp.mjs");
var _defaultsMjs = require("./defaults.mjs");
const safeMin = 0.001;
function findSpring({ duration = (0, _defaultsMjs.springDefaults).duration, bounce = (0, _defaultsMjs.springDefaults).bounce, velocity = (0, _defaultsMjs.springDefaults).velocity, mass = (0, _defaultsMjs.springDefaults).mass }) {
    let envelope;
    let derivative;
    (0, _errorsMjs.warning)(duration <= (0, _timeConversionMjs.secondsToMilliseconds)((0, _defaultsMjs.springDefaults).maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */ dampingRatio = (0, _clampMjs.clamp)((0, _defaultsMjs.springDefaults).minDamping, (0, _defaultsMjs.springDefaults).maxDamping, dampingRatio);
    duration = (0, _clampMjs.clamp)((0, _defaultsMjs.springDefaults).minDuration, (0, _defaultsMjs.springDefaults).maxDuration, (0, _timeConversionMjs.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */ envelope = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        /**
         * Critically-damped spring
         */ envelope = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0, _timeConversionMjs.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) return {
        stiffness: (0, _defaultsMjs.springDefaults).stiffness,
        damping: (0, _defaultsMjs.springDefaults).damping,
        duration
    };
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for(let i = 1; i < rootIterations; i++)result = result - envelope(result) / derivative(result);
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-utils/dist/es/time-conversion.mjs":"4izc7","../../../utils/clamp.mjs":"j7ovl","./defaults.mjs":"e5KsM","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1ETOv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimationsFromSequence", ()=>createAnimationsFromSequence);
parcelHelpers.export(exports, "getValueTransition", ()=>getValueTransition);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _progressMjs = require("../../../../../motion-utils/dist/es/progress.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _createGeneratorEasingMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs");
var _isGeneratorMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _getEasingForSegmentMjs = require("../../easing/utils/get-easing-for-segment.mjs");
var _defaultMjs = require("../../utils/offsets/default.mjs");
var _fillMjs = require("../../utils/offsets/fill.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _resolveSubjectsMjs = require("../animate/resolve-subjects.mjs");
var _calcRepeatDurationMjs = require("./utils/calc-repeat-duration.mjs");
var _calcTimeMjs = require("./utils/calc-time.mjs");
var _editMjs = require("./utils/edit.mjs");
var _normalizeTimesMjs = require("./utils/normalize-times.mjs");
var _sortMjs = require("./utils/sort.mjs");
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, _calcTimeMjs.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) currentTime = (0, _calcTimeMjs.calcNextTime)(currentTime, transition.at, prevTime, timeLabels);
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0)=>{
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0, _defaultMjs.defaultOffset)(valueKeyframesAsList), type = "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0, _isGeneratorMjs.isGenerator)(type) ? type : generators === null || generators === void 0 ? void 0 : generators[type];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...remainingTransition
                };
                if (duration !== undefined) springTransition.duration = (0, _timeConversionMjs.secondsToMilliseconds)(duration);
                const springEasing = (0, _createGeneratorEasingMjs.createGeneratorEasing)(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) times[1] = 1;
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0, _fillMjs.fillOffset)(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Handle repeat options
             */ if (repeat) {
                (0, _errorsMjs.invariant)(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20");
                duration = (0, _calcRepeatDurationMjs.calculateRepeatDuration)(duration, repeat);
                const originalKeyframes = [
                    ...valueKeyframesAsList
                ];
                const originalTimes = [
                    ...times
                ];
                ease = Array.isArray(ease) ? [
                    ...ease
                ] : [
                    ease
                ];
                const originalEase = [
                    ...ease
                ];
                for(let repeatIndex = 0; repeatIndex < repeat; repeatIndex++){
                    valueKeyframesAsList.push(...originalKeyframes);
                    for(let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++){
                        times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
                        ease.push(keyframeIndex === 0 ? "linear" : (0, _getEasingForSegmentMjs.getEasingForSegment)(originalEase, keyframeIndex - 1));
                    }
                }
                (0, _normalizeTimesMjs.normalizeTimes)(times, repeat);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ (0, _editMjs.addKeyframes)(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0, _isMotionValueMjs.isMotionValue)(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            const subjects = (0, _resolveSubjectsMjs.resolveSubjects)(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes;
                transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for(const key in keyframes)resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort((0, _sortMjs.compareByTime));
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, _progressMjs.progress)(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) animationDefinitions.set(element, {
                keyframes: {},
                transition: {}
            });
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            definition.transition[key] = {
                ...defaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition && transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/progress.mjs":"7g0rh","../../../../../motion-utils/dist/es/time-conversion.mjs":"4izc7","../../../../../motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs":"d52O0","../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"ctwxN","../../easing/utils/get-easing-for-segment.mjs":"3k2ij","../../utils/offsets/default.mjs":"j3MCf","../../utils/offsets/fill.mjs":"8VDL5","../../value/utils/is-motion-value.mjs":"dPNuO","../animate/resolve-subjects.mjs":"7hEVL","./utils/calc-repeat-duration.mjs":"7NEZv","./utils/calc-time.mjs":"eDHQA","./utils/edit.mjs":"6MYma","./utils/normalize-times.mjs":"14BJT","./utils/sort.mjs":"avjdJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d52O0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createGeneratorEasing", ()=>createGeneratorEasing);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _calcDurationMjs = require("./calc-duration.mjs");
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({
        ...options,
        keyframes: [
            0,
            scale
        ]
    });
    const duration = Math.min((0, _calcDurationMjs.calcGeneratorDuration)(generator), (0, _calcDurationMjs.maxGeneratorDuration));
    return {
        type: "keyframes",
        ease: (progress)=>{
            return generator.next(duration * progress).value / scale;
        },
        duration: (0, _timeConversionMjs.millisecondsToSeconds)(duration)
    };
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-utils/dist/es/time-conversion.mjs":"4izc7","./calc-duration.mjs":"iVZcy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ctwxN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isGenerator", ()=>isGenerator);
function isGenerator(type) {
    return typeof type === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3k2ij":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingForSegment", ()=>getEasingForSegment);
var _wrapMjs = require("../../utils/wrap.mjs");
var _isEasingArrayMjs = require("./is-easing-array.mjs");
function getEasingForSegment(easing, i) {
    return (0, _isEasingArrayMjs.isEasingArray)(easing) ? easing[(0, _wrapMjs.wrap)(0, easing.length, i)] : easing;
}

},{"../../utils/wrap.mjs":"l1wxp","./is-easing-array.mjs":"1tU55","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"l1wxp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1tU55":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingArray", ()=>isEasingArray);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"j3MCf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
var _fillMjs = require("./fill.mjs");
function defaultOffset(arr) {
    const offset = [
        0
    ];
    (0, _fillMjs.fillOffset)(offset, arr.length - 1);
    return offset;
}

},{"./fill.mjs":"8VDL5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8VDL5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _progressMjs = require("../../../../../motion-utils/dist/es/progress.mjs");
var _numberMjs = require("../mix/number.mjs");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _progressMjs.progress)(0, remaining, i);
        offset.push((0, _numberMjs.mixNumber)(min, 1, offsetProgress));
    }
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/progress.mjs":"7g0rh","../mix/number.mjs":"8PU4D","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8PU4D":[function(require,module,exports,__globalThis) {
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixNumber", ()=>mixNumber);
const mixNumber = (from, to, progress)=>{
    return from + (to - from) * progress;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dPNuO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMotionValue", ()=>isMotionValue);
const isMotionValue = (value)=>Boolean(value && value.getVelocity);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7hEVL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveSubjects", ()=>resolveSubjects);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _resolveElementsMjs = require("../../../../../motion-dom/dist/es/utils/resolve-elements.mjs");
var _isDomKeyframesMjs = require("../utils/is-dom-keyframes.mjs");
function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (typeof subject === "string" && (0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes)) return (0, _resolveElementsMjs.resolveElements)(subject, scope, selectorCache);
    else if (subject instanceof NodeList) return Array.from(subject);
    else if (Array.isArray(subject)) return subject;
    else return [
        subject
    ];
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-dom/dist/es/utils/resolve-elements.mjs":"Q8RZg","../utils/is-dom-keyframes.mjs":"dds7X","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"Q8RZg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof EventTarget) return [
        elementOrSelector
    ];
    else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) // TODO: Refactor to utils package
        // invariant(
        //     Boolean(scope.current),
        //     "Scope provided, but no element detected."
        // )
        root = scope.current;
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dds7X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDOMKeyframes", ()=>isDOMKeyframes);
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7NEZv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateRepeatDuration", ()=>calculateRepeatDuration);
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
    return duration * (repeat + 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eDHQA":[function(require,module,exports,__globalThis) {
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcNextTime", ()=>calcNextTime);
function calcNextTime(current, next, prev, labels) {
    var _a;
    if (typeof next === "number") return next;
    else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
    else if (next === "<") return prev;
    else return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6MYma":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addKeyframes", ()=>addKeyframes);
parcelHelpers.export(exports, "eraseKeyframes", ()=>eraseKeyframes);
var _getEasingForSegmentMjs = require("../../../easing/utils/get-easing-for-segment.mjs");
var _arrayMjs = require("../../../utils/array.mjs");
var _numberMjs = require("../../../utils/mix/number.mjs");
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, _arrayMjs.removeItem)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++)sequence.push({
        value: keyframes[i],
        at: (0, _numberMjs.mixNumber)(startTime, endTime, offset[i]),
        easing: (0, _getEasingForSegmentMjs.getEasingForSegment)(easing, i)
    });
}

},{"../../../easing/utils/get-easing-for-segment.mjs":"3k2ij","../../../utils/array.mjs":"grj6l","../../../utils/mix/number.mjs":"8PU4D","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"grj6l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "moveItem", ()=>moveItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"14BJT":[function(require,module,exports,__globalThis) {
/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeTimes", ()=>normalizeTimes);
function normalizeTimes(times, repeat) {
    for(let i = 0; i < times.length; i++)times[i] = times[i] / (repeat + 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"avjdJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareByTime", ()=>compareByTime);
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else return a.at - b.at;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hLdQT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSubject", ()=>animateSubject);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _storeMjs = require("../../render/store.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _visualElementTargetMjs = require("../interfaces/visual-element-target.mjs");
var _createVisualElementMjs = require("../utils/create-visual-element.mjs");
var _isDomKeyframesMjs = require("../utils/is-dom-keyframes.mjs");
var _resolveSubjectsMjs = require("./resolve-subjects.mjs");
var _singleValueMjs = require("./single-value.mjs");
function isSingleValue(subject, keyframes) {
    return (0, _isMotionValueMjs.isMotionValue)(subject) || typeof subject === "number" || typeof subject === "string" && !(0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes);
}
/**
 * Implementation
 */ function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) animations.push((0, _singleValueMjs.animateSingleValue)(subject, (0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
    else {
        const subjects = (0, _resolveSubjectsMjs.resolveSubjects)(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0, _errorsMjs.invariant)(Boolean(numSubjects), "No valid elements provided.");
        for(let i = 0; i < numSubjects; i++){
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element ? (0, _createVisualElementMjs.createDOMVisualElement) : (0, _createVisualElementMjs.createObjectVisualElement);
            if (!(0, _storeMjs.visualElementStore).has(thisSubject)) createVisualElement(thisSubject);
            const visualElement = (0, _storeMjs.visualElementStore).get(thisSubject);
            const transition = {
                ...options
            };
            /**
             * Resolve stagger function if provided.
             */ if ("delay" in transition && typeof transition.delay === "function") transition.delay = transition.delay(i, numSubjects);
            animations.push(...(0, _visualElementTargetMjs.animateTarget)(visualElement, {
                ...keyframes,
                transition
            }, {}));
        }
    }
    return animations;
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../render/store.mjs":"fF2L9","../../value/utils/is-motion-value.mjs":"dPNuO","../interfaces/visual-element-target.mjs":"20szA","../utils/create-visual-element.mjs":"9Ardt","../utils/is-dom-keyframes.mjs":"dds7X","./resolve-subjects.mjs":"7hEVL","./single-value.mjs":"jLW3n","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fF2L9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "visualElementStore", ()=>visualElementStore);
const visualElementStore = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"20szA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateTarget", ()=>animateTarget);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _getValueTransitionMjs = require("../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs");
var _keysPositionMjs = require("../../render/html/utils/keys-position.mjs");
var _settersMjs = require("../../render/utils/setters.mjs");
var _addWillChangeMjs = require("../../value/use-will-change/add-will-change.mjs");
var _getAppearIdMjs = require("../optimized-appear/get-appear-id.mjs");
var _motionValueMjs = require("./motion-value.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */ function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride) transition = transitionOverride;
    const animations = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for(const key in target){
        const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
        const valueTarget = target[key];
        if (valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
        const valueTransition = {
            delay,
            ...(0, _getValueTransitionMjs.getValueTransition)(transition || {}, key)
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */ let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = (0, _getAppearIdMjs.getOptimisedAppearId)(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, (0, _frameMjs.frame));
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0, _addWillChangeMjs.addValueToWillChange)(visualElement, key);
        value.start((0, _motionValueMjs.animateMotionValue)(key, value, valueTarget, visualElement.shouldReduceMotion && (0, _keysPositionMjs.positionalKeys).has(key) ? {
            type: false
        } : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) animations.push(animation);
    }
    if (transitionEnd) Promise.all(animations).then(()=>{
        (0, _frameMjs.frame).update(()=>{
            transitionEnd && (0, _settersMjs.setTarget)(visualElement, transitionEnd);
        });
    });
    return animations;
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs":"fkJTK","../../render/html/utils/keys-position.mjs":"kZvan","../../render/utils/setters.mjs":"kI6K3","../../value/use-will-change/add-will-change.mjs":"aAWSF","../optimized-appear/get-appear-id.mjs":"bJP8W","./motion-value.mjs":"qcad3","../../frameloop/frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fkJTK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueTransition", ()=>getValueTransition);
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kZvan":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "positionalKeys", ()=>positionalKeys);
var _keysTransformMjs = require("./keys-transform.mjs");
const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...(0, _keysTransformMjs.transformPropOrder)
]);

},{"./keys-transform.mjs":"5keUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5keUy":[function(require,module,exports,__globalThis) {
/**
 * Generate a list of every possible transform key.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformPropOrder", ()=>transformPropOrder);
parcelHelpers.export(exports, "transformProps", ()=>transformProps);
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
];
/**
 * A quick lookup for transform props.
 */ const transformProps = new Set(transformPropOrder);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kI6K3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTarget", ()=>setTarget);
var _resolveValueMjs = require("../../utils/resolve-value.mjs");
var _indexMjs = require("../../value/index.mjs");
var _resolveDynamicVariantsMjs = require("./resolve-dynamic-variants.mjs");
/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */ function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
    else visualElement.addValue(key, (0, _indexMjs.motionValue)(value));
}
function setTarget(visualElement, definition) {
    const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = {
        ...target,
        ...transitionEnd
    };
    for(const key in target){
        const value = (0, _resolveValueMjs.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}

},{"../../utils/resolve-value.mjs":"ilk2l","../../value/index.mjs":"cQKqk","./resolve-dynamic-variants.mjs":"i4Yku","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ilk2l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCustomValue", ()=>isCustomValue);
parcelHelpers.export(exports, "resolveFinalValueInKeyframes", ()=>resolveFinalValueInKeyframes);
var _isKeyframesTargetMjs = require("../animation/utils/is-keyframes-target.mjs");
const isCustomValue = (v)=>{
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v)=>{
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0, _isKeyframesTargetMjs.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};

},{"../animation/utils/is-keyframes-target.mjs":"93tS1","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"93tS1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isKeyframesTarget", ()=>isKeyframesTarget);
const isKeyframesTarget = (v)=>{
    return Array.isArray(v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cQKqk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
parcelHelpers.export(exports, "collectMotionValues", ()=>collectMotionValues);
parcelHelpers.export(exports, "motionValue", ()=>motionValue);
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _subscriptionManagerMjs = require("../utils/subscription-manager.mjs");
var _velocityPerSecondMjs = require("../utils/velocity-per-second.mjs");
var _warnOnceMjs = require("../utils/warn-once.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */ const MAX_VELOCITY_DELTA = 30;
const isFloat = (value)=>{
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */ class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */ constructor(init, options = {}){
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */ this.version = "12.4.7";
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */ this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        this.updateAndNotify = (v, render = true)=>{
            const currentTime = (0, _syncTimeMjs.time).now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */ if (this.updatedAt !== currentTime) this.setPrevFrameValue();
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev && this.events.change) this.events.change.notify(this.current);
            // Update render subscribers
            if (render && this.events.renderRequest) this.events.renderRequest.notify(this.current);
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = (0, _syncTimeMjs.time).now();
        if (this.canTrackVelocity === null && current !== undefined) this.canTrackVelocity = isFloat(this.current);
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */ onChange(subscription) {
        (0, _warnOnceMjs.warnOnce)(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _subscriptionManagerMjs.SubscriptionManager)();
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") return ()=>{
            unsubscribe();
            /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */ (0, _frameMjs.frame).read(()=>{
                if (!this.events.change.getSize()) this.stop();
            });
        };
        return unsubscribe;
    }
    clearListeners() {
        for(const eventManagers in this.events)this.events[eventManagers].clear();
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */ attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */ set(v, render = true) {
        if (!render || !this.passiveEffect) this.updateAndNotify(v, render);
        else this.passiveEffect(v, this.updateAndNotify);
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */ jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */ get() {
        if (collectMotionValues.current) collectMotionValues.current.push(this);
        return this.current;
    }
    /**
     * @public
     */ getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */ getVelocity() {
        const currentTime = (0, _syncTimeMjs.time).now();
        if (!this.canTrackVelocity || this.prevFrameValue === undefined || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0, _velocityPerSecondMjs.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */ start(startAnimation) {
        this.stop();
        return new Promise((resolve)=>{
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) this.events.animationStart.notify();
        }).then(()=>{
            if (this.events.animationComplete) this.events.animationComplete.notify();
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */ stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) this.events.animationCancel.notify();
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */ isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */ destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}

},{"../frameloop/sync-time.mjs":"2yOLr","../utils/subscription-manager.mjs":"hvgyI","../utils/velocity-per-second.mjs":"fs0QM","../utils/warn-once.mjs":"5i3lg","../frameloop/frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2yOLr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
var _globalConfigMjs = require("../utils/GlobalConfig.mjs");
var _frameMjs = require("./frame.mjs");
let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */ const time = {
    now: ()=>{
        if (now === undefined) time.set((0, _frameMjs.frameData).isProcessing || (0, _globalConfigMjs.MotionGlobalConfig).useManualTiming ? (0, _frameMjs.frameData).timestamp : performance.now());
        return now;
    },
    set: (newTime)=>{
        now = newTime;
        queueMicrotask(clearTime);
    }
};

},{"../utils/GlobalConfig.mjs":"gC664","./frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gC664":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionGlobalConfig", ()=>MotionGlobalConfig);
const MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3Ih1V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelFrame", ()=>cancelFrame);
parcelHelpers.export(exports, "frame", ()=>frame);
parcelHelpers.export(exports, "frameData", ()=>frameData);
parcelHelpers.export(exports, "frameSteps", ()=>frameSteps);
var _errorsMjs = require("../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../motion-utils/dist/es/noop.mjs");
var _batcherMjs = require("./batcher.mjs");
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = (0, _batcherMjs.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : (0, _noopMjs.noop), true);

},{"../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../motion-utils/dist/es/noop.mjs":"4GKxA","./batcher.mjs":"gVj45","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gVj45":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderBatcher", ()=>createRenderBatcher);
var _globalConfigMjs = require("../utils/GlobalConfig.mjs");
var _orderMjs = require("./order.mjs");
var _renderStepMjs = require("./render-step.mjs");
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    const flagRunNextFrame = ()=>runNextFrame = true;
    const steps = (0, _orderMjs.stepsOrder).reduce((acc, key)=>{
        acc[key] = (0, _renderStepMjs.createRenderStep)(flagRunNextFrame, allowKeepAlive ? key : undefined);
        return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = ()=>{
        const timestamp = (0, _globalConfigMjs.MotionGlobalConfig).useManualTiming ? state.timestamp : performance.now();
        runNextFrame = false;
        if (!(0, _globalConfigMjs.MotionGlobalConfig).useManualTiming) state.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        read.process(state);
        resolveKeyframes.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = ()=>{
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) scheduleNextBatch(processBatch);
    };
    const schedule = (0, _orderMjs.stepsOrder).reduce((acc, key)=>{
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false)=>{
            if (!runNextFrame) wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process)=>{
        for(let i = 0; i < (0, _orderMjs.stepsOrder).length; i++)steps[(0, _orderMjs.stepsOrder)[i]].cancel(process);
    };
    return {
        schedule,
        cancel,
        state,
        steps
    };
}

},{"../utils/GlobalConfig.mjs":"gC664","./order.mjs":"8Gep8","./render-step.mjs":"hJaF6","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8Gep8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stepsOrder", ()=>stepsOrder);
const stepsOrder = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hJaF6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderStep", ()=>createRenderStep);
var _bufferMjs = require("../stats/buffer.mjs");
function createRenderStep(runNextFrame, stepName) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */ let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */ let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */ const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    let numCalls = 0;
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        numCalls++;
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */ schedule: (callback, keepAlive = false, immediate = false)=>{
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive) toKeepAlive.add(callback);
            if (!queue.has(callback)) queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */ cancel: (callback)=>{
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */ process: (frameData)=>{
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */ if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [
                nextFrame,
                thisFrame
            ];
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            /**
             * If we're recording stats then
             */ if (stepName && (0, _bufferMjs.statsBuffer).value) (0, _bufferMjs.statsBuffer).value.frameloop[stepName].push(numCalls);
            numCalls = 0;
            // Clear the frame so no callbacks remain. This is to avoid
            // memory leaks should this render step not run for a while.
            thisFrame.clear();
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        }
    };
    return step;
}

},{"../stats/buffer.mjs":"011jH","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"011jH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "statsBuffer", ()=>statsBuffer);
const statsBuffer = {
    value: null,
    addProjectionMetrics: null
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hvgyI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscriptionManager", ()=>SubscriptionManager);
var _arrayMjs = require("./array.mjs");
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, _arrayMjs.addUniqueItem)(this.subscriptions, handler);
        return ()=>(0, _arrayMjs.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        else for(let i = 0; i < numSubscriptions; i++){
            /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
            handler && handler(a, b, c);
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}

},{"./array.mjs":"grj6l","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5i3lg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warnOnce", ()=>warnOnce);
const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message)) return;
    console.warn(message);
    if (element) console.warn(element);
    warned.add(message);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"i4Yku":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariant", ()=>resolveVariant);
var _resolveVariantsMjs = require("./resolve-variants.mjs");
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0, _resolveVariantsMjs.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}

},{"./resolve-variants.mjs":"dGBSZ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dGBSZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariantFromProps", ()=>resolveVariantFromProps);
function getValueState(visualElement) {
    const state = [
        {},
        {}
    ];
    visualElement === null || visualElement === void 0 || visualElement.values.forEach((value, key)=>{
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */ if (typeof definition === "string") definition = props.variants && props.variants[definition];
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aAWSF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addValueToWillChange", ()=>addValueToWillChange);
var _isMjs = require("./is.mjs");
function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */ if ((0, _isMjs.isWillChangeMotionValue)(willChange)) return willChange.add(key);
}

},{"./is.mjs":"ekety","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ekety":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWillChangeMotionValue", ()=>isWillChangeMotionValue);
var _isMotionValueMjs = require("../utils/is-motion-value.mjs");
function isWillChangeMotionValue(value) {
    return Boolean((0, _isMotionValueMjs.isMotionValue)(value) && value.add);
}

},{"../utils/is-motion-value.mjs":"dPNuO","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bJP8W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptimisedAppearId", ()=>getOptimisedAppearId);
var _dataIdMjs = require("./data-id.mjs");
function getOptimisedAppearId(visualElement) {
    return visualElement.props[0, _dataIdMjs.optimizedAppearDataAttribute];
}

},{"./data-id.mjs":"4KnfK","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4KnfK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "optimizedAppearDataAttribute", ()=>optimizedAppearDataAttribute);
parcelHelpers.export(exports, "optimizedAppearDataId", ()=>optimizedAppearDataId);
var _camelToDashMjs = require("../../render/dom/utils/camel-to-dash.mjs");
const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0, _camelToDashMjs.camelToDash)(optimizedAppearDataId);

},{"../../render/dom/utils/camel-to-dash.mjs":"5ROnn","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5ROnn":[function(require,module,exports,__globalThis) {
/**
 * Convert camelCase to dash-case properties.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelToDash", ()=>camelToDash);
const camelToDash = (str)=>str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"qcad3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateMotionValue", ()=>animateMotionValue);
var _groupMjs = require("../../../../../motion-dom/dist/es/animation/controls/Group.mjs");
var _getValueTransitionMjs = require("../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
var _globalConfigMjs = require("../../utils/GlobalConfig.mjs");
var _useInstantTransitionStateMjs = require("../../utils/use-instant-transition-state.mjs");
var _acceleratedAnimationMjs = require("../animators/AcceleratedAnimation.mjs");
var _mainThreadAnimationMjs = require("../animators/MainThreadAnimation.mjs");
var _getFinalKeyframeMjs = require("../animators/waapi/utils/get-final-keyframe.mjs");
var _defaultTransitionsMjs = require("../utils/default-transitions.mjs");
var _isTransitionDefinedMjs = require("../utils/is-transition-defined.mjs");
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff)=>(onComplete)=>{
        const valueTransition = (0, _getValueTransitionMjs.getValueTransition)(transition, name) || {};
        /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */ const delay = valueTransition.delay || transition.delay || 0;
        /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */ let { elapsed = 0 } = transition;
        elapsed = elapsed - (0, _timeConversionMjs.secondsToMilliseconds)(delay);
        let options = {
            keyframes: Array.isArray(target) ? target : [
                null,
                target
            ],
            ease: "easeOut",
            velocity: value.getVelocity(),
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v)=>{
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: ()=>{
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
            name,
            motionValue: value,
            element: isHandoff ? undefined : element
        };
        /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */ if (!(0, _isTransitionDefinedMjs.isTransitionDefined)(valueTransition)) options = {
            ...options,
            ...(0, _defaultTransitionsMjs.getDefaultTransition)(name, options)
        };
        /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */ if (options.duration) options.duration = (0, _timeConversionMjs.secondsToMilliseconds)(options.duration);
        if (options.repeatDelay) options.repeatDelay = (0, _timeConversionMjs.secondsToMilliseconds)(options.repeatDelay);
        if (options.from !== undefined) options.keyframes[0] = options.from;
        let shouldSkip = false;
        if (options.type === false || options.duration === 0 && !options.repeatDelay) {
            options.duration = 0;
            if (options.delay === 0) shouldSkip = true;
        }
        if ((0, _useInstantTransitionStateMjs.instantAnimationState).current || (0, _globalConfigMjs.MotionGlobalConfig).skipAnimations) {
            shouldSkip = true;
            options.duration = 0;
            options.delay = 0;
        }
        /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */ if (shouldSkip && !isHandoff && value.get() !== undefined) {
            const finalKeyframe = (0, _getFinalKeyframeMjs.getFinalKeyframe)(options.keyframes, valueTransition);
            if (finalKeyframe !== undefined) {
                (0, _frameMjs.frame).update(()=>{
                    options.onUpdate(finalKeyframe);
                    options.onComplete();
                });
                // We still want to return some animation controls here rather
                // than returning undefined
                return new (0, _groupMjs.GroupPlaybackControls)([]);
            }
        }
        /**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */ if (!isHandoff && (0, _acceleratedAnimationMjs.AcceleratedAnimation).supports(options)) return new (0, _acceleratedAnimationMjs.AcceleratedAnimation)(options);
        else return new (0, _mainThreadAnimationMjs.MainThreadAnimation)(options);
    };

},{"../../../../../motion-dom/dist/es/animation/controls/Group.mjs":"gfXFe","../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs":"fkJTK","../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/time-conversion.mjs":"4izc7","../../frameloop/frame.mjs":"3Ih1V","../../utils/GlobalConfig.mjs":"gC664","../../utils/use-instant-transition-state.mjs":"hWWLB","../animators/AcceleratedAnimation.mjs":"gSUur","../animators/MainThreadAnimation.mjs":"e3KF4","../animators/waapi/utils/get-final-keyframe.mjs":"7h33j","../utils/default-transitions.mjs":"9tEfq","../utils/is-transition-defined.mjs":"iLfZc","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hWWLB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instantAnimationState", ()=>instantAnimationState);
const instantAnimationState = {
    current: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gSUur":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AcceleratedAnimation", ()=>AcceleratedAnimation);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../../motion-utils/dist/es/noop.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _isGeneratorMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _attachTimelineMjs = require("../../../../../motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs");
var _easingMjs = require("../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs");
var _linearEasingMjs = require("../../../../../motion-dom/dist/es/utils/supports/linear-easing.mjs");
var _anticipateMjs = require("../../easing/anticipate.mjs");
var _backMjs = require("../../easing/back.mjs");
var _circMjs = require("../../easing/circ.mjs");
var _domkeyframesResolverMjs = require("../../render/dom/DOMKeyframesResolver.mjs");
var _baseAnimationMjs = require("./BaseAnimation.mjs");
var _mainThreadAnimationMjs = require("./MainThreadAnimation.mjs");
var _acceleratedValuesMjs = require("./utils/accelerated-values.mjs");
var _indexMjs = require("./waapi/index.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
var _supportsWaapiMjs = require("./waapi/utils/supports-waapi.mjs");
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */ const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ const maxDuration = 20000;
/**
 * Check if an animation can run natively via WAAPI or requires pregenerated keyframes.
 * WAAPI doesn't support spring or function easings so we run these as JS animation before
 * handing off.
 */ function requiresPregeneratedKeyframes(options) {
    return (0, _isGeneratorMjs.isGenerator)(options.type) || options.type === "spring" || !(0, _easingMjs.isWaapiSupportedEasing)(options.ease);
}
function pregenerateKeyframes(keyframes, options) {
    /**
     * Create a main-thread animation to pregenerate keyframes.
     * We sample this at regular intervals to generate keyframes that we then
     * linearly interpolate between.
     */ const sampleAnimation = new (0, _mainThreadAnimationMjs.MainThreadAnimation)({
        ...options,
        keyframes,
        repeat: 0,
        delay: 0,
        isGenerator: true
    });
    let state = {
        done: false,
        value: keyframes[0]
    };
    const pregeneratedKeyframes = [];
    /**
     * Bail after 20 seconds of pre-generated keyframes as it's likely
     * we're heading for an infinite loop.
     */ let t = 0;
    while(!state.done && t < maxDuration){
        state = sampleAnimation.sample(t);
        pregeneratedKeyframes.push(state.value);
        t += sampleDelta;
    }
    return {
        times: undefined,
        keyframes: pregeneratedKeyframes,
        duration: t - sampleDelta,
        ease: "linear"
    };
}
const unsupportedEasingFunctions = {
    anticipate: (0, _anticipateMjs.anticipate),
    backInOut: (0, _backMjs.backInOut),
    circInOut: (0, _circMjs.circInOut)
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
class AcceleratedAnimation extends (0, _baseAnimationMjs.BaseAnimation) {
    constructor(options){
        super(options);
        const { name, motionValue, element, keyframes } = this.options;
        this.resolver = new (0, _domkeyframesResolverMjs.DOMKeyframesResolver)(keyframes, (resolvedKeyframes, finalKeyframe)=>this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    initPlayback(keyframes, finalKeyframe) {
        let { duration = 300, times, ease, type, motionValue, name, startTime } = this.options;
        /**
         * If element has since been unmounted, return false to indicate
         * the animation failed to initialised.
         */ if (!motionValue.owner || !motionValue.owner.current) return false;
        /**
         * If the user has provided an easing function name that isn't supported
         * by WAAPI (like "anticipate"), we need to provide the corressponding
         * function. This will later get converted to a linear() easing function.
         */ if (typeof ease === "string" && (0, _linearEasingMjs.supportsLinearEasing)() && isUnsupportedEase(ease)) ease = unsupportedEasingFunctions[ease];
        /**
         * If this animation needs pre-generated keyframes then generate.
         */ if (requiresPregeneratedKeyframes(this.options)) {
            const { onComplete, onUpdate, motionValue, element, ...options } = this.options;
            const pregeneratedAnimation = pregenerateKeyframes(keyframes, options);
            keyframes = pregeneratedAnimation.keyframes;
            // If this is a very short animation, ensure we have
            // at least two keyframes to animate between as older browsers
            // can't animate between a single keyframe.
            if (keyframes.length === 1) keyframes[1] = keyframes[0];
            duration = pregeneratedAnimation.duration;
            times = pregeneratedAnimation.times;
            ease = pregeneratedAnimation.ease;
            type = "keyframes";
        }
        const animation = (0, _indexMjs.startWaapiAnimation)(motionValue.owner.current, name, keyframes, {
            ...this.options,
            duration,
            times,
            ease
        });
        // Override the browser calculated startTime with one synchronised to other JS
        // and WAAPI animations starting this event loop.
        animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        if (this.pendingTimeline) {
            (0, _attachTimelineMjs.attachTimeline)(animation, this.pendingTimeline);
            this.pendingTimeline = undefined;
        } else /**
             * Prefer the `onfinish` prop as it's more widely supported than
             * the `finished` promise.
             *
             * Here, we synchronously set the provided MotionValue to the end
             * keyframe. If we didn't, when the WAAPI animation is finished it would
             * be removed from the element which would then revert to its old styles.
             */ animation.onfinish = ()=>{
            const { onComplete } = this.options;
            motionValue.set((0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
            onComplete && onComplete();
            this.cancel();
            this.resolveFinishedPromise();
        };
        return {
            animation,
            duration,
            times,
            type,
            ease,
            keyframes: keyframes
        };
    }
    get duration() {
        const { resolved } = this;
        if (!resolved) return 0;
        const { duration } = resolved;
        return (0, _timeConversionMjs.millisecondsToSeconds)(duration);
    }
    get time() {
        const { resolved } = this;
        if (!resolved) return 0;
        const { animation } = resolved;
        return (0, _timeConversionMjs.millisecondsToSeconds)(animation.currentTime || 0);
    }
    set time(newTime) {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.currentTime = (0, _timeConversionMjs.secondsToMilliseconds)(newTime);
    }
    get speed() {
        const { resolved } = this;
        if (!resolved) return 1;
        const { animation } = resolved;
        return animation.playbackRate;
    }
    set speed(newSpeed) {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.playbackRate = newSpeed;
    }
    get state() {
        const { resolved } = this;
        if (!resolved) return "idle";
        const { animation } = resolved;
        return animation.playState;
    }
    get startTime() {
        const { resolved } = this;
        if (!resolved) return null;
        const { animation } = resolved;
        // Coerce to number as TypeScript incorrectly types this
        // as CSSNumberish
        return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */ attachTimeline(timeline) {
        if (!this._resolved) this.pendingTimeline = timeline;
        else {
            const { resolved } = this;
            if (!resolved) return 0, _noopMjs.noop;
            const { animation } = resolved;
            (0, _attachTimelineMjs.attachTimeline)(animation, timeline);
        }
        return 0, _noopMjs.noop;
    }
    play() {
        if (this.isStopped) return;
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        if (animation.playState === "finished") this.updateFinishedPromise();
        animation.play();
    }
    pause() {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.pause();
    }
    stop() {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle") return;
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        const { resolved } = this;
        if (!resolved) return;
        const { animation, keyframes, duration, type, ease, times } = resolved;
        if (animation.playState === "idle" || animation.playState === "finished") return;
        /**
         * WAAPI doesn't natively have any interruption capabilities.
         *
         * Rather than read commited styles back out of the DOM, we can
         * create a renderless JS animation and sample it twice to calculate
         * its current value, "previous" value, and therefore allow
         * Motion to calculate velocity for any subsequent animation.
         */ if (this.time) {
            const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
            const sampleAnimation = new (0, _mainThreadAnimationMjs.MainThreadAnimation)({
                ...options,
                keyframes,
                duration,
                type,
                ease,
                times,
                isGenerator: true
            });
            const sampleTime = (0, _timeConversionMjs.secondsToMilliseconds)(this.time);
            motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
        }
        const { onStop } = this.options;
        onStop && onStop();
        this.cancel();
    }
    complete() {
        const { resolved } = this;
        if (!resolved) return;
        resolved.animation.finish();
    }
    cancel() {
        const { resolved } = this;
        if (!resolved) return;
        resolved.animation.cancel();
    }
    static supports(options) {
        const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
        if (!motionValue || !motionValue.owner || !(motionValue.owner.current instanceof HTMLElement)) return false;
        const { onUpdate, transformTemplate } = motionValue.owner.getProps();
        return (0, _supportsWaapiMjs.supportsWaapi)() && name && (0, _acceleratedValuesMjs.acceleratedValues).has(name) && /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */ !onUpdate && !transformTemplate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
    }
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/noop.mjs":"4GKxA","../../../../../motion-utils/dist/es/time-conversion.mjs":"4izc7","../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"ctwxN","../../../../../motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs":"lcAqC","../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs":"4ZWi3","../../../../../motion-dom/dist/es/utils/supports/linear-easing.mjs":"kXXN2","../../easing/anticipate.mjs":"ducx7","../../easing/back.mjs":"3xk7G","../../easing/circ.mjs":"hoFG0","../../render/dom/DOMKeyframesResolver.mjs":"1LE5H","./BaseAnimation.mjs":"4B4wA","./MainThreadAnimation.mjs":"e3KF4","./utils/accelerated-values.mjs":"bfLj6","./waapi/index.mjs":"i0Lvh","./waapi/utils/get-final-keyframe.mjs":"7h33j","./waapi/utils/supports-waapi.mjs":"7WkHe","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lcAqC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachTimeline", ()=>attachTimeline);
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4ZWi3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
parcelHelpers.export(exports, "isWaapiSupportedEasing", ()=>isWaapiSupportedEasing);
parcelHelpers.export(exports, "mapEasingToNativeEasing", ()=>mapEasingToNativeEasing);
parcelHelpers.export(exports, "supportedWaapiEasing", ()=>supportedWaapiEasing);
var _isBezierDefinitionMjs = require("../../../utils/is-bezier-definition.mjs");
var _linearEasingMjs = require("../../../utils/supports/linear-easing.mjs");
var _linearMjs = require("./linear.mjs");
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, _linearEasingMjs.supportsLinearEasing)() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || (0, _linearEasingMjs.supportsLinearEasing)()) || (0, _isBezierDefinitionMjs.isBezierDefinition)(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) return undefined;
    else if (typeof easing === "function" && (0, _linearEasingMjs.supportsLinearEasing)()) return (0, _linearMjs.generateLinearEasing)(easing, duration);
    else if ((0, _isBezierDefinitionMjs.isBezierDefinition)(easing)) return cubicBezierAsString(easing);
    else if (Array.isArray(easing)) return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    else return supportedWaapiEasing[easing];
}

},{"../../../utils/is-bezier-definition.mjs":"6bBft","../../../utils/supports/linear-easing.mjs":"kXXN2","./linear.mjs":"dNGx8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6bBft":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBezierDefinition", ()=>isBezierDefinition);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kXXN2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsLinearEasing", ()=>supportsLinearEasing);
var _memoMjs = require("./memo.mjs");
const supportsLinearEasing = /*@__PURE__*/ (0, _memoMjs.memoSupports)(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");

},{"./memo.mjs":"fGDMr","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fGDMr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memoSupports", ()=>memoSupports);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _memoMjs = require("../../../../../motion-utils/dist/es/memo.mjs");
var _flagsMjs = require("./flags.mjs");
function memoSupports(callback, supportsFlag) {
    const memoized = (0, _memoMjs.memo)(callback);
    return ()=>{
        var _a;
        return (_a = (0, _flagsMjs.supportsFlags)[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/memo.mjs":"8gElA","./flags.mjs":"ejmjf","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ejmjf":[function(require,module,exports,__globalThis) {
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsFlags", ()=>supportsFlags);
const supportsFlags = {
    linearEasing: undefined
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ducx7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anticipate", ()=>anticipate);
var _backMjs = require("./back.mjs");
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, _backMjs.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

},{"./back.mjs":"3xk7G","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3xk7G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backIn", ()=>backIn);
parcelHelpers.export(exports, "backInOut", ()=>backInOut);
parcelHelpers.export(exports, "backOut", ()=>backOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const backOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, _reverseMjs.reverseEasing)(backOut);
const backInOut = /*@__PURE__*/ (0, _mirrorMjs.mirrorEasing)(backIn);

},{"./cubic-bezier.mjs":"hw3UN","./modifiers/mirror.mjs":"3hwMS","./modifiers/reverse.mjs":"4mjpv","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hw3UN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _errorsMjs = require("../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../motion-utils/dist/es/noop.mjs");
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _noopMjs.noop;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../motion-utils/dist/es/noop.mjs":"4GKxA","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3hwMS":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mirrorEasing", ()=>mirrorEasing);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4mjpv":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseEasing", ()=>reverseEasing);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hoFG0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "circIn", ()=>circIn);
parcelHelpers.export(exports, "circInOut", ()=>circInOut);
parcelHelpers.export(exports, "circOut", ()=>circOut);
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, _reverseMjs.reverseEasing)(circIn);
const circInOut = (0, _mirrorMjs.mirrorEasing)(circIn);

},{"./modifiers/mirror.mjs":"3hwMS","./modifiers/reverse.mjs":"4mjpv","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1LE5H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMKeyframesResolver", ()=>DOMKeyframesResolver);
var _isNoneMjs = require("../../animation/utils/is-none.mjs");
var _keysPositionMjs = require("../html/utils/keys-position.mjs");
var _makeNoneAnimatableMjs = require("../html/utils/make-none-animatable.mjs");
var _keyframesResolverMjs = require("../utils/KeyframesResolver.mjs");
var _cssVariablesConversionMjs = require("./utils/css-variables-conversion.mjs");
var _isCssVariableMjs = require("./utils/is-css-variable.mjs");
var _unitConversionMjs = require("./utils/unit-conversion.mjs");
var _dimensionsMjs = require("./value-types/dimensions.mjs");
class DOMKeyframesResolver extends (0, _keyframesResolverMjs.KeyframeResolver) {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element){
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current) return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */ for(let i = 0; i < unresolvedKeyframes.length; i++){
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0, _isCssVariableMjs.isCSSVariableToken)(keyframe)) {
                    const resolved = (0, _cssVariablesConversionMjs.getVariableValue)(keyframe, element.current);
                    if (resolved !== undefined) unresolvedKeyframes[i] = resolved;
                    if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */ this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */ if (!(0, _keysPositionMjs.positionalKeys).has(name) || unresolvedKeyframes.length !== 2) return;
        const [origin, target] = unresolvedKeyframes;
        const originType = (0, _dimensionsMjs.findDimensionValueType)(origin);
        const targetType = (0, _dimensionsMjs.findDimensionValueType)(target);
        /**
         * Either we don't recognise these value types or we can animate between them.
         */ if (originType === targetType) return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */ if ((0, _unitConversionMjs.isNumOrPxType)(originType) && (0, _unitConversionMjs.isNumOrPxType)(targetType)) for(let i = 0; i < unresolvedKeyframes.length; i++){
            const value = unresolvedKeyframes[i];
            if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
        }
        else /**
             * Else, the only way to resolve this is by measuring the element.
             */ this.needsMeasurement = true;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for(let i = 0; i < unresolvedKeyframes.length; i++)if ((0, _isNoneMjs.isNone)(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
        if (noneKeyframeIndexes.length) (0, _makeNoneAnimatableMjs.makeNoneKeyframesAnimatable)(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current) return;
        if (name === "height") this.suspendedScrollY = window.pageYOffset;
        this.measuredOrigin = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
    measureEndState() {
        var _a;
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current) return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) this.finalKeyframe = finalKeyframe;
        // If we removed transform values, reapply them before the next render
        if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue])=>{
            element.getValue(unsetTransformName).set(unsetTransformValue);
        });
        this.resolveNoneKeyframes();
    }
}

},{"../../animation/utils/is-none.mjs":"aCjyA","../html/utils/keys-position.mjs":"kZvan","../html/utils/make-none-animatable.mjs":"3DMZ8","../utils/KeyframesResolver.mjs":"jbmQK","./utils/css-variables-conversion.mjs":"jcE0M","./utils/is-css-variable.mjs":"gS4w8","./utils/unit-conversion.mjs":"7WvxC","./value-types/dimensions.mjs":"lEzfo","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aCjyA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNone", ()=>isNone);
var _isZeroValueStringMjs = require("../../utils/is-zero-value-string.mjs");
function isNone(value) {
    if (typeof value === "number") return value === 0;
    else if (value !== null) return value === "none" || value === "0" || (0, _isZeroValueStringMjs.isZeroValueString)(value);
    else return true;
}

},{"../../utils/is-zero-value-string.mjs":"f5rPx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"f5rPx":[function(require,module,exports,__globalThis) {
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isZeroValueString", ()=>isZeroValueString);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3DMZ8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeNoneKeyframesAnimatable", ()=>makeNoneKeyframesAnimatable);
var _indexMjs = require("../../../value/types/complex/index.mjs");
var _animatableNoneMjs = require("../../dom/value-types/animatable-none.mjs");
/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */ const invalidTemplates = new Set([
    "auto",
    "none",
    "0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while(i < unresolvedKeyframes.length && !animatableTemplate){
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && (0, _indexMjs.analyseComplexValue)(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
        i++;
    }
    if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes)unresolvedKeyframes[noneIndex] = (0, _animatableNoneMjs.getAnimatableNone)(name, animatableTemplate);
}

},{"../../../value/types/complex/index.mjs":"iw6Ag","../../dom/value-types/animatable-none.mjs":"5t2T5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iw6Ag":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyseComplexValue", ()=>analyseComplexValue);
parcelHelpers.export(exports, "complex", ()=>complex);
var _indexMjs = require("../color/index.mjs");
var _colorRegexMjs = require("../utils/color-regex.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
function test(v) {
    var _a, _b;
    return isNaN(v) && typeof v === "string" && (((_a = v.match((0, _floatRegexMjs.floatRegex))) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match((0, _colorRegexMjs.colorRegex))) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: []
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue)=>{
        if ((0, _indexMjs.color).test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push((0, _indexMjs.color).parse(parsedValue));
        } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        } else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return {
        values,
        split,
        indexes,
        types
    };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v)=>{
        let output = "";
        for(let i = 0; i < numSections; i++){
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) output += (0, _sanitizeMjs.sanitize)(v[i]);
                else if (type === COLOR_TOKEN) output += (0, _indexMjs.color).transform(v[i]);
                else output += v[i];
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v)=>typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
};

},{"../color/index.mjs":"33wzR","../utils/color-regex.mjs":"14uuz","../utils/float-regex.mjs":"j8RT4","../utils/sanitize.mjs":"63Aax","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"33wzR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
var _hexMjs = require("./hex.mjs");
var _hslaMjs = require("./hsla.mjs");
var _rgbaMjs = require("./rgba.mjs");
const color = {
    test: (v)=>(0, _rgbaMjs.rgba).test(v) || (0, _hexMjs.hex).test(v) || (0, _hslaMjs.hsla).test(v),
    parse: (v)=>{
        if ((0, _rgbaMjs.rgba).test(v)) return (0, _rgbaMjs.rgba).parse(v);
        else if ((0, _hslaMjs.hsla).test(v)) return (0, _hslaMjs.hsla).parse(v);
        else return (0, _hexMjs.hex).parse(v);
    },
    transform: (v)=>{
        return typeof v === "string" ? v : v.hasOwnProperty("red") ? (0, _rgbaMjs.rgba).transform(v) : (0, _hslaMjs.hsla).transform(v);
    }
};

},{"./hex.mjs":"cTfhu","./hsla.mjs":"fh8Ud","./rgba.mjs":"aVLOV","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cTfhu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hex", ()=>hex);
var _rgbaMjs = require("./rgba.mjs");
var _utilsMjs = require("./utils.mjs");
function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
    // Or we have 3 characters, ie #F00
    } else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    };
}
const hex = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("#"),
    parse: parseHex,
    transform: (0, _rgbaMjs.rgba).transform
};

},{"./rgba.mjs":"aVLOV","./utils.mjs":"gfizl","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aVLOV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbUnit", ()=>rgbUnit);
parcelHelpers.export(exports, "rgba", ()=>rgba);
var _clampMjs = require("../../../utils/clamp.mjs");
var _indexMjs = require("../numbers/index.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const clampRgbUnit = (v)=>(0, _clampMjs.clamp)(0, 255, v);
const rgbUnit = {
    ...(0, _indexMjs.number),
    transform: (v)=>Math.round(clampRgbUnit(v))
};
const rgba = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("rgb", "red"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 })=>"rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")"
};

},{"../../../utils/clamp.mjs":"j7ovl","../numbers/index.mjs":"3eFuU","../utils/sanitize.mjs":"63Aax","./utils.mjs":"gfizl","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3eFuU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alpha", ()=>alpha);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "scale", ()=>scale);
var _clampMjs = require("../../../utils/clamp.mjs");
const number = {
    test: (v)=>typeof v === "number",
    parse: parseFloat,
    transform: (v)=>v
};
const alpha = {
    ...number,
    transform: (v)=>(0, _clampMjs.clamp)(0, 1, v)
};
const scale = {
    ...number,
    default: 1
};

},{"../../../utils/clamp.mjs":"j7ovl","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"63Aax":[function(require,module,exports,__globalThis) {
// If this number is a decimal, make it just five decimal places
// to avoid exponents
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitize", ()=>sanitize);
const sanitize = (v)=>Math.round(v * 100000) / 100000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gfizl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isColorString", ()=>isColorString);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _isNullishMjs = require("../utils/is-nullish.mjs");
var _singleColorRegexMjs = require("../utils/single-color-regex.mjs");
/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */ const isColorString = (type, testProp)=>(v)=>{
        return Boolean(typeof v === "string" && (0, _singleColorRegexMjs.singleColorRegex).test(v) && v.startsWith(type) || testProp && !(0, _isNullishMjs.isNullish)(v) && Object.prototype.hasOwnProperty.call(v, testProp));
    };
const splitColor = (aName, bName, cName)=>(v)=>{
        if (typeof v !== "string") return v;
        const [a, b, c, alpha] = v.match((0, _floatRegexMjs.floatRegex));
        return {
            [aName]: parseFloat(a),
            [bName]: parseFloat(b),
            [cName]: parseFloat(c),
            alpha: alpha !== undefined ? parseFloat(alpha) : 1
        };
    };

},{"../utils/float-regex.mjs":"j8RT4","../utils/is-nullish.mjs":"2Banu","../utils/single-color-regex.mjs":"ioIoP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"j8RT4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "floatRegex", ()=>floatRegex);
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2Banu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNullish", ()=>isNullish);
function isNullish(v) {
    return v == null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ioIoP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "singleColorRegex", ()=>singleColorRegex);
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fh8Ud":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsla", ()=>hsla);
var _indexMjs = require("../numbers/index.mjs");
var _unitsMjs = require("../numbers/units.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const hsla = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("hsl", "hue"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 })=>{
        return "hsla(" + Math.round(hue) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(saturation)) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(lightness)) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")";
    }
};

},{"../numbers/index.mjs":"3eFuU","../numbers/units.mjs":"d38dj","../utils/sanitize.mjs":"63Aax","./utils.mjs":"gfizl","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"d38dj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "percent", ()=>percent);
parcelHelpers.export(exports, "progressPercentage", ()=>progressPercentage);
parcelHelpers.export(exports, "px", ()=>px);
parcelHelpers.export(exports, "vh", ()=>vh);
parcelHelpers.export(exports, "vw", ()=>vw);
const createUnitType = (unit)=>({
        test: (v)=>typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
        parse: parseFloat,
        transform: (v)=>`${v}${unit}`
    });
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v)=>percent.parse(v) / 100,
    transform: (v)=>percent.transform(v * 100)
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"14uuz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorRegex", ()=>colorRegex);
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5t2T5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimatableNone", ()=>getAnimatableNone);
var _indexMjs = require("../../../value/types/complex/index.mjs");
var _filterMjs = require("../../../value/types/complex/filter.mjs");
var _defaultsMjs = require("./defaults.mjs");
function getAnimatableNone(key, value) {
    let defaultValueType = (0, _defaultsMjs.getDefaultValueType)(key);
    if (defaultValueType !== (0, _filterMjs.filter)) defaultValueType = (0, _indexMjs.complex);
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}

},{"../../../value/types/complex/index.mjs":"iw6Ag","../../../value/types/complex/filter.mjs":"7TDSX","./defaults.mjs":"kPOqn","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7TDSX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter);
var _indexMjs = require("./index.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
/**
 * Properties that should default to 1 or 100%
 */ const maxDefaults = new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow") return v;
    const [number] = value.match((0, _floatRegexMjs.floatRegex)) || [];
    if (!number) return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value) defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ...(0, _indexMjs.complex),
    getAnimatableNone: (v)=>{
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
};

},{"./index.mjs":"iw6Ag","../utils/float-regex.mjs":"j8RT4","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kPOqn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultValueTypes", ()=>defaultValueTypes);
parcelHelpers.export(exports, "getDefaultValueType", ()=>getDefaultValueType);
var _indexMjs = require("../../../value/types/color/index.mjs");
var _filterMjs = require("../../../value/types/complex/filter.mjs");
var _numberMjs = require("./number.mjs");
/**
 * A map of default value types for common values
 */ const defaultValueTypes = {
    ...(0, _numberMjs.numberValueTypes),
    color: // Color props
    (0, _indexMjs.color),
    backgroundColor: (0, _indexMjs.color),
    outlineColor: (0, _indexMjs.color),
    fill: (0, _indexMjs.color),
    stroke: (0, _indexMjs.color),
    // Border props
    borderColor: (0, _indexMjs.color),
    borderTopColor: (0, _indexMjs.color),
    borderRightColor: (0, _indexMjs.color),
    borderBottomColor: (0, _indexMjs.color),
    borderLeftColor: (0, _indexMjs.color),
    filter: (0, _filterMjs.filter),
    WebkitFilter: (0, _filterMjs.filter)
};
/**
 * Gets the default ValueType for the provided value key
 */ const getDefaultValueType = (key)=>defaultValueTypes[key];

},{"../../../value/types/color/index.mjs":"33wzR","../../../value/types/complex/filter.mjs":"7TDSX","./number.mjs":"dKosw","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dKosw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numberValueTypes", ()=>numberValueTypes);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _numberBrowserMjs = require("./number-browser.mjs");
var _transformMjs = require("./transform.mjs");
var _typeIntMjs = require("./type-int.mjs");
const numberValueTypes = {
    ...(0, _numberBrowserMjs.browserNumberValueTypes),
    ...(0, _transformMjs.transformValueTypes),
    zIndex: (0, _typeIntMjs.int),
    size: (0, _unitsMjs.px),
    // SVG
    fillOpacity: (0, _indexMjs.alpha),
    strokeOpacity: (0, _indexMjs.alpha),
    numOctaves: (0, _typeIntMjs.int)
};

},{"../../../value/types/numbers/index.mjs":"3eFuU","../../../value/types/numbers/units.mjs":"d38dj","./number-browser.mjs":"3Lh0r","./transform.mjs":"dKh57","./type-int.mjs":"3vUBK","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3Lh0r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "browserNumberValueTypes", ()=>browserNumberValueTypes);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const browserNumberValueTypes = {
    // Border props
    borderWidth: (0, _unitsMjs.px),
    borderTopWidth: (0, _unitsMjs.px),
    borderRightWidth: (0, _unitsMjs.px),
    borderBottomWidth: (0, _unitsMjs.px),
    borderLeftWidth: (0, _unitsMjs.px),
    borderRadius: (0, _unitsMjs.px),
    radius: (0, _unitsMjs.px),
    borderTopLeftRadius: (0, _unitsMjs.px),
    borderTopRightRadius: (0, _unitsMjs.px),
    borderBottomRightRadius: (0, _unitsMjs.px),
    borderBottomLeftRadius: (0, _unitsMjs.px),
    // Positioning props
    width: (0, _unitsMjs.px),
    maxWidth: (0, _unitsMjs.px),
    height: (0, _unitsMjs.px),
    maxHeight: (0, _unitsMjs.px),
    top: (0, _unitsMjs.px),
    right: (0, _unitsMjs.px),
    bottom: (0, _unitsMjs.px),
    left: (0, _unitsMjs.px),
    // Spacing props
    padding: (0, _unitsMjs.px),
    paddingTop: (0, _unitsMjs.px),
    paddingRight: (0, _unitsMjs.px),
    paddingBottom: (0, _unitsMjs.px),
    paddingLeft: (0, _unitsMjs.px),
    margin: (0, _unitsMjs.px),
    marginTop: (0, _unitsMjs.px),
    marginRight: (0, _unitsMjs.px),
    marginBottom: (0, _unitsMjs.px),
    marginLeft: (0, _unitsMjs.px),
    // Misc
    backgroundPositionX: (0, _unitsMjs.px),
    backgroundPositionY: (0, _unitsMjs.px)
};

},{"../../../value/types/numbers/units.mjs":"d38dj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dKh57":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformValueTypes", ()=>transformValueTypes);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const transformValueTypes = {
    rotate: (0, _unitsMjs.degrees),
    rotateX: (0, _unitsMjs.degrees),
    rotateY: (0, _unitsMjs.degrees),
    rotateZ: (0, _unitsMjs.degrees),
    scale: (0, _indexMjs.scale),
    scaleX: (0, _indexMjs.scale),
    scaleY: (0, _indexMjs.scale),
    scaleZ: (0, _indexMjs.scale),
    skew: (0, _unitsMjs.degrees),
    skewX: (0, _unitsMjs.degrees),
    skewY: (0, _unitsMjs.degrees),
    distance: (0, _unitsMjs.px),
    translateX: (0, _unitsMjs.px),
    translateY: (0, _unitsMjs.px),
    translateZ: (0, _unitsMjs.px),
    x: (0, _unitsMjs.px),
    y: (0, _unitsMjs.px),
    z: (0, _unitsMjs.px),
    perspective: (0, _unitsMjs.px),
    transformPerspective: (0, _unitsMjs.px),
    opacity: (0, _indexMjs.alpha),
    originX: (0, _unitsMjs.progressPercentage),
    originY: (0, _unitsMjs.progressPercentage),
    originZ: (0, _unitsMjs.px)
};

},{"../../../value/types/numbers/index.mjs":"3eFuU","../../../value/types/numbers/units.mjs":"d38dj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3vUBK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "int", ()=>int);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
const int = {
    ...(0, _indexMjs.number),
    transform: Math.round
};

},{"../../../value/types/numbers/index.mjs":"3eFuU","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jbmQK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyframeResolver", ()=>KeyframeResolver);
parcelHelpers.export(exports, "flushKeyframeResolvers", ()=>flushKeyframeResolvers);
var _unitConversionMjs = require("../dom/utils/unit-conversion.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver)=>resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver)=>resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */ elementsToMeasure.forEach((element)=>{
            const removedTransforms = (0, _unitConversionMjs.removeNonTranslationalTransform)(element);
            if (!removedTransforms.length) return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element)=>{
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) restore.forEach(([key, value])=>{
                var _a;
                (_a = element.getValue(key)) === null || _a === void 0 || _a.set(value);
            });
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver)=>{
            if (resolver.suspendedScrollY !== undefined) window.scrollTo(0, resolver.suspendedScrollY);
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver)=>resolver.complete());
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver)=>{
        resolver.readKeyframes();
        if (resolver.needsMeasurement) anyNeedsMeasurement = true;
    });
}
function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false){
        /**
         * Track whether this resolver has completed. Once complete, it never
         * needs to attempt keyframe resolution again.
         */ this.isComplete = false;
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */ this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */ this.needsMeasurement = false;
        /**
         * Track whether this resolver is currently scheduled to resolve
         * to allow it to be cancelled and resumed externally.
         */ this.isScheduled = false;
        this.unresolvedKeyframes = [
            ...unresolvedKeyframes
        ];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.isScheduled = true;
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                (0, _frameMjs.frame).read(readAllKeyframes);
                (0, _frameMjs.frame).resolveKeyframes(measureAllKeyframes);
            }
        } else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        /**
         * If a keyframe is null, we hydrate it either by reading it from
         * the instance, or propagating from previous keyframes.
         */ for(let i = 0; i < unresolvedKeyframes.length; i++)if (unresolvedKeyframes[i] === null) {
            /**
                 * If the first keyframe is null, we need to find its value by sampling the element
                 */ if (i === 0) {
                const currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
                const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                if (currentValue !== undefined) unresolvedKeyframes[0] = currentValue;
                else if (element && name) {
                    const valueAsRead = element.readValue(name, finalKeyframe);
                    if (valueAsRead !== undefined && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
                }
                if (unresolvedKeyframes[0] === undefined) unresolvedKeyframes[0] = finalKeyframe;
                if (motionValue && currentValue === undefined) motionValue.set(unresolvedKeyframes[0]);
            } else unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = true;
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
        toResolve.delete(this);
    }
    cancel() {
        if (!this.isComplete) {
            this.isScheduled = false;
            toResolve.delete(this);
        }
    }
    resume() {
        if (!this.isComplete) this.scheduleResolve();
    }
}

},{"../dom/utils/unit-conversion.mjs":"7WvxC","../../frameloop/frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7WvxC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumOrPxType", ()=>isNumOrPxType);
parcelHelpers.export(exports, "positionalValues", ()=>positionalValues);
parcelHelpers.export(exports, "removeNonTranslationalTransform", ()=>removeNonTranslationalTransform);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _keysTransformMjs = require("../../html/utils/keys-transform.mjs");
const isNumOrPxType = (v)=>v === (0, _indexMjs.number) || v === (0, _unitsMjs.px);
const getPosFromMatrix = (matrix, pos)=>parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3)=>(_bbox, { transform })=>{
        if (transform === "none" || !transform) return 0;
        const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
        if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
        else {
            const matrix = transform.match(/^matrix\((.+)\)$/u);
            if (matrix) return getPosFromMatrix(matrix[1], pos2);
            else return 0;
        }
    };
const transformKeys = new Set([
    "x",
    "y",
    "z"
]);
const nonTranslationalTransformKeys = (0, _keysTransformMjs.transformPropOrder).filter((key)=>!transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key)=>{
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([
                key,
                value.get()
            ]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" })=>x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" })=>y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top })=>parseFloat(top),
    left: (_bbox, { left })=>parseFloat(left),
    bottom: ({ y }, { top })=>parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left })=>parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

},{"../../../value/types/numbers/index.mjs":"3eFuU","../../../value/types/numbers/units.mjs":"d38dj","../../html/utils/keys-transform.mjs":"5keUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jcE0M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVariableValue", ()=>getVariableValue);
parcelHelpers.export(exports, "parseCSSVariable", ()=>parseCSSVariable);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _isNumericalStringMjs = require("../../../utils/is-numerical-string.mjs");
var _isCssVariableMjs = require("./is-css-variable.mjs");
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */ const splitCSSVariableRegex = // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match) return [
        , 
    ];
    const [, token1, token2, fallback] = match;
    return [
        `--${token1 !== null && token1 !== void 0 ? token1 : token2}`,
        fallback
    ];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0, _errorsMjs.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token) return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0, _isNumericalStringMjs.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0, _isCssVariableMjs.isCSSVariableToken)(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../utils/is-numerical-string.mjs":"5WRkD","./is-css-variable.mjs":"gS4w8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5WRkD":[function(require,module,exports,__globalThis) {
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumericalString", ()=>isNumericalString);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gS4w8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCSSVariableName", ()=>isCSSVariableName);
parcelHelpers.export(exports, "isCSSVariableToken", ()=>isCSSVariableToken);
const checkStringStartsWith = (token)=>(key)=>typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value)=>{
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken) return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lEzfo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dimensionValueTypes", ()=>dimensionValueTypes);
parcelHelpers.export(exports, "findDimensionValueType", ()=>findDimensionValueType);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _testMjs = require("./test.mjs");
var _typeAutoMjs = require("./type-auto.mjs");
/**
 * A list of value types commonly used for dimensions
 */ const dimensionValueTypes = [
    (0, _indexMjs.number),
    (0, _unitsMjs.px),
    (0, _unitsMjs.percent),
    (0, _unitsMjs.degrees),
    (0, _unitsMjs.vw),
    (0, _unitsMjs.vh),
    (0, _typeAutoMjs.auto)
];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */ const findDimensionValueType = (v)=>dimensionValueTypes.find((0, _testMjs.testValueType)(v));

},{"../../../value/types/numbers/index.mjs":"3eFuU","../../../value/types/numbers/units.mjs":"d38dj","./test.mjs":"dA258","./type-auto.mjs":"7tcM6","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dA258":[function(require,module,exports,__globalThis) {
/**
 * Tests a provided value against a ValueType
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testValueType", ()=>testValueType);
const testValueType = (v)=>(type)=>type.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7tcM6":[function(require,module,exports,__globalThis) {
/**
 * ValueType for "auto"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auto", ()=>auto);
const auto = {
    test: (v)=>v === "auto",
    parse: (v)=>v
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4B4wA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseAnimation", ()=>BaseAnimation);
var _syncTimeMjs = require("../../frameloop/sync-time.mjs");
var _keyframesResolverMjs = require("../../render/utils/KeyframesResolver.mjs");
var _useInstantTransitionStateMjs = require("../../utils/use-instant-transition-state.mjs");
var _canAnimateMjs = require("./utils/can-animate.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */ const MAX_RESOLVE_DELAY = 40;
class BaseAnimation {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }){
        // Track whether the animation has been stopped. Stopped animations won't restart.
        this.isStopped = false;
        this.hasAttemptedResolve = false;
        this.createdAt = (0, _syncTimeMjs.time).now();
        this.options = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            ...options
        };
        this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */ calcStartTime() {
        if (!this.resolvedAt) return this.createdAt;
        return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */ get resolved() {
        if (!this._resolved && !this.hasAttemptedResolve) (0, _keyframesResolverMjs.flushKeyframeResolvers)();
        return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */ onKeyframesResolved(keyframes, finalKeyframe) {
        this.resolvedAt = (0, _syncTimeMjs.time).now();
        this.hasAttemptedResolve = true;
        const { name, type, velocity, delay, onComplete, onUpdate, isGenerator } = this.options;
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */ if (!isGenerator && !(0, _canAnimateMjs.canAnimate)(keyframes, name, type, velocity)) {
            // Finish immediately
            if ((0, _useInstantTransitionStateMjs.instantAnimationState).current || !delay) {
                onUpdate && onUpdate((0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete && onComplete();
                this.resolveFinishedPromise();
                return;
            } else this.options.duration = 0;
        }
        const resolvedAnimation = this.initPlayback(keyframes, finalKeyframe);
        if (resolvedAnimation === false) return;
        this._resolved = {
            keyframes,
            finalKeyframe,
            ...resolvedAnimation
        };
        this.onPostResolved();
    }
    onPostResolved() {}
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */ then(resolve, reject) {
        return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
        this.options.type = "keyframes";
        this.options.ease = "linear";
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((resolve)=>{
            this.resolveFinishedPromise = resolve;
        });
    }
}

},{"../../frameloop/sync-time.mjs":"2yOLr","../../render/utils/KeyframesResolver.mjs":"jbmQK","../../utils/use-instant-transition-state.mjs":"hWWLB","./utils/can-animate.mjs":"i14v1","./waapi/utils/get-final-keyframe.mjs":"7h33j","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"i14v1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canAnimate", ()=>canAnimate);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _isGeneratorMjs = require("../../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _isAnimatableMjs = require("../../utils/is-animatable.mjs");
function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1) return true;
    for(let i = 0; i < keyframes.length; i++){
        if (keyframes[i] !== current) return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */ const originKeyframe = keyframes[0];
    if (originKeyframe === null) return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */ if (name === "display" || name === "visibility") return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = (0, _isAnimatableMjs.isAnimatable)(originKeyframe, name);
    const isTargetAnimatable = (0, _isAnimatableMjs.isAnimatable)(targetKeyframe, name);
    (0, _errorsMjs.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) return false;
    return hasKeyframesChanged(keyframes) || (type === "spring" || (0, _isGeneratorMjs.isGenerator)(type)) && velocity;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"ctwxN","../../utils/is-animatable.mjs":"lP47R","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lP47R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimatable", ()=>isAnimatable);
var _indexMjs = require("../../value/types/complex/index.mjs");
/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */ const isAnimatable = (value, name)=>{
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (name === "zIndex") return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value)) return true;
    if (typeof value === "string" && // It's animatable if we have a string
    ((0, _indexMjs.complex).test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(") // Unless it starts with "url("
    ) return true;
    return false;
};

},{"../../value/types/complex/index.mjs":"iw6Ag","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7h33j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFinalKeyframe", ()=>getFinalKeyframe);
const isNotNull = (value)=>value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"e3KF4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainThreadAnimation", ()=>MainThreadAnimation);
parcelHelpers.export(exports, "animateValue", ()=>animateValue);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _calcDurationMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs");
var _isGeneratorMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _keyframesResolverMjs = require("../../render/utils/KeyframesResolver.mjs");
var _animationCountMjs = require("../../stats/animation-count.mjs");
var _clampMjs = require("../../utils/clamp.mjs");
var _indexMjs = require("../../utils/mix/index.mjs");
var _pipeMjs = require("../../utils/pipe.mjs");
var _inertiaMjs = require("../generators/inertia.mjs");
var _keyframesMjs = require("../generators/keyframes.mjs");
var _indexMjs1 = require("../generators/spring/index.mjs");
var _baseAnimationMjs = require("./BaseAnimation.mjs");
var _driverFrameloopMjs = require("./drivers/driver-frameloop.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
const generators = {
    decay: (0, _inertiaMjs.inertia),
    inertia: (0, _inertiaMjs.inertia),
    tween: (0, _keyframesMjs.keyframes),
    keyframes: (0, _keyframesMjs.keyframes),
    spring: (0, _indexMjs1.spring)
};
const percentToProgress = (percent)=>percent / 100;
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */ class MainThreadAnimation extends (0, _baseAnimationMjs.BaseAnimation) {
    constructor(options){
        super(options);
        /**
         * The time at which the animation was paused.
         */ this.holdTime = null;
        /**
         * The time at which the animation was cancelled.
         */ this.cancelTime = null;
        /**
         * The current time of the animation.
         */ this.currentTime = 0;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */ this.playbackSpeed = 1;
        /**
         * The state of the animation to apply when the animation is resolved. This
         * allows calls to the public API to control the animation before it is resolved,
         * without us having to resolve it first.
         */ this.pendingPlayState = "running";
        /**
         * The time at which the animation was started.
         */ this.startTime = null;
        this.state = "idle";
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */ this.stop = ()=>{
            this.resolver.cancel();
            this.isStopped = true;
            if (this.state === "idle") return;
            this.teardown();
            const { onStop } = this.options;
            onStop && onStop();
        };
        const { name, motionValue, element, keyframes } = this.options;
        const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || (0, _keyframesResolverMjs.KeyframeResolver);
        const onResolved = (resolvedKeyframes, finalKeyframe)=>this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        this.resolver = new KeyframeResolver$1(keyframes, onResolved, name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten();
        // If we've already resolved the animation, re-initialise it
        if (this._resolved) Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
    initPlayback(keyframes$1) {
        const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
        const generatorFactory = (0, _isGeneratorMjs.isGenerator)(type) ? type : generators[type] || (0, _keyframesMjs.keyframes);
        /**
         * If our generator doesn't support mixing numbers, we need to replace keyframes with
         * [0, 100] and then make a function that maps that to the actual keyframes.
         *
         * 100 is chosen instead of 1 as it works nicer with spring animations.
         */ let mapPercentToKeyframes;
        let mirroredGenerator;
        if (generatorFactory !== (0, _keyframesMjs.keyframes)) (0, _errorsMjs.invariant)(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
        if (generatorFactory !== (0, _keyframesMjs.keyframes) && typeof keyframes$1[0] !== "number") {
            mapPercentToKeyframes = (0, _pipeMjs.pipe)(percentToProgress, (0, _indexMjs.mix)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [
                0,
                100
            ];
        }
        const generator = generatorFactory({
            ...this.options,
            keyframes: keyframes$1
        });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */ if (repeatType === "mirror") mirroredGenerator = generatorFactory({
            ...this.options,
            keyframes: [
                ...keyframes$1
            ].reverse(),
            velocity: -velocity
        });
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */ if (generator.calculatedDuration === null) generator.calculatedDuration = (0, _calcDurationMjs.calcGeneratorDuration)(generator);
        const { calculatedDuration } = generator;
        const resolvedDuration = calculatedDuration + repeatDelay;
        const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
        return {
            generator,
            mirroredGenerator,
            mapPercentToKeyframes,
            calculatedDuration,
            resolvedDuration,
            totalDuration
        };
    }
    onPostResolved() {
        const { autoplay = true } = this.options;
        (0, _animationCountMjs.activeAnimations).mainThread++;
        this.play();
        if (this.pendingPlayState === "paused" || !autoplay) this.pause();
        else this.state = this.pendingPlayState;
    }
    tick(timestamp, sample = false) {
        const { resolved } = this;
        // If the animations has failed to resolve, return the final keyframe.
        if (!resolved) {
            const { keyframes } = this.options;
            return {
                done: true,
                value: keyframes[keyframes.length - 1]
            };
        }
        const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes, calculatedDuration, totalDuration, resolvedDuration } = resolved;
        if (this.startTime === null) return generator.next(0);
        const { delay, repeat, repeatType, repeatDelay, onUpdate } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */ if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
        else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        // Update currentTime
        if (sample) this.currentTime = timestamp;
        else if (this.holdTime !== null) this.currentTime = this.holdTime;
        else // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
        // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
        // example.
        this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.speed >= 0 ? 1 : -1);
        const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ if (!iterationProgress && progress >= 1) iterationProgress = 1;
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
                } else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
            }
            elapsed = (0, _clampMjs.clamp)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */ const state = isInDelayPhase ? {
            done: false,
            value: keyframes[0]
        } : frameGenerator.next(elapsed);
        if (mapPercentToKeyframes) state.value = mapPercentToKeyframes(state.value);
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
        const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
        if (isAnimationFinished && finalKeyframe !== undefined) state.value = (0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe);
        if (onUpdate) onUpdate(state.value);
        if (isAnimationFinished) this.finish();
        return state;
    }
    get duration() {
        const { resolved } = this;
        return resolved ? (0, _timeConversionMjs.millisecondsToSeconds)(resolved.calculatedDuration) : 0;
    }
    get time() {
        return (0, _timeConversionMjs.millisecondsToSeconds)(this.currentTime);
    }
    set time(newTime) {
        newTime = (0, _timeConversionMjs.secondsToMilliseconds)(newTime);
        this.currentTime = newTime;
        if (this.holdTime !== null || this.speed === 0) this.holdTime = newTime;
        else if (this.driver) this.startTime = this.driver.now() - newTime / this.speed;
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        const hasChanged = this.playbackSpeed !== newSpeed;
        this.playbackSpeed = newSpeed;
        if (hasChanged) this.time = (0, _timeConversionMjs.millisecondsToSeconds)(this.currentTime);
    }
    play() {
        if (!this.resolver.isScheduled) this.resolver.resume();
        if (!this._resolved) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped) return;
        const { driver = (0, _driverFrameloopMjs.frameloopDriver), onPlay, startTime } = this.options;
        if (!this.driver) this.driver = driver((timestamp)=>this.tick(timestamp));
        onPlay && onPlay();
        const now = this.driver.now();
        if (this.holdTime !== null) this.startTime = now - this.holdTime;
        else if (!this.startTime) this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        else if (this.state === "finished") this.startTime = now;
        if (this.state === "finished") this.updateFinishedPromise();
        this.cancelTime = this.startTime;
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */ this.state = "running";
        this.driver.start();
    }
    pause() {
        var _a;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        this.state = "paused";
        this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
    complete() {
        if (this.state !== "running") this.play();
        this.pendingPlayState = this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.teardown();
        this.state = "finished";
        const { onComplete } = this.options;
        onComplete && onComplete();
    }
    cancel() {
        if (this.cancelTime !== null) this.tick(this.cancelTime);
        this.teardown();
        this.updateFinishedPromise();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        this.startTime = this.cancelTime = null;
        this.resolver.cancel();
        (0, _animationCountMjs.activeAnimations).mainThread--;
    }
    stopDriver() {
        if (!this.driver) return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(time) {
        this.startTime = 0;
        return this.tick(time, true);
    }
}
// Legacy interface
function animateValue(options) {
    return new MainThreadAnimation(options);
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/time-conversion.mjs":"4izc7","../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs":"iVZcy","../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"ctwxN","../../render/utils/KeyframesResolver.mjs":"jbmQK","../../stats/animation-count.mjs":"5tsXB","../../utils/clamp.mjs":"j7ovl","../../utils/mix/index.mjs":"kmAQe","../../utils/pipe.mjs":"eYHch","../generators/inertia.mjs":"hh19m","../generators/keyframes.mjs":"kEftj","../generators/spring/index.mjs":"bkQPw","./BaseAnimation.mjs":"4B4wA","./drivers/driver-frameloop.mjs":"8Z9Ce","./waapi/utils/get-final-keyframe.mjs":"7h33j","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5tsXB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "activeAnimations", ()=>activeAnimations);
const activeAnimations = {
    layout: 0,
    mainThread: 0,
    waapi: 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kmAQe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
var _complexMjs = require("./complex.mjs");
var _numberMjs = require("./number.mjs");
function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") return (0, _numberMjs.mixNumber)(from, to, p);
    const mixer = (0, _complexMjs.getMixer)(from);
    return mixer(from, to);
}

},{"./complex.mjs":"CWNJB","./number.mjs":"8PU4D","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"CWNJB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMixer", ()=>getMixer);
parcelHelpers.export(exports, "mixArray", ()=>mixArray);
parcelHelpers.export(exports, "mixComplex", ()=>mixComplex);
parcelHelpers.export(exports, "mixObject", ()=>mixObject);
var _numberMjs = require("./number.mjs");
var _colorMjs = require("./color.mjs");
var _pipeMjs = require("../pipe.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _indexMjs = require("../../value/types/color/index.mjs");
var _indexMjs1 = require("../../value/types/complex/index.mjs");
var _isCssVariableMjs = require("../../render/dom/utils/is-css-variable.mjs");
var _visibilityMjs = require("./visibility.mjs");
var _immediateMjs = require("./immediate.mjs");
function mixNumber(a, b) {
    return (p)=>(0, _numberMjs.mixNumber)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") return mixNumber;
    else if (typeof a === "string") return (0, _isCssVariableMjs.isCSSVariableToken)(a) ? (0, _immediateMjs.mixImmediate) : (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixComplex;
    else if (Array.isArray(a)) return mixArray;
    else if (typeof a === "object") return (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixObject;
    return 0, _immediateMjs.mixImmediate;
}
function mixArray(a, b) {
    const output = [
        ...a
    ];
    const numValues = output.length;
    const blendValue = a.map((v, i)=>getMixer(v)(v, b[i]));
    return (p)=>{
        for(let i = 0; i < numValues; i++)output[i] = blendValue[i](p);
        return output;
    };
}
function mixObject(a, b) {
    const output = {
        ...a,
        ...b
    };
    const blendValue = {};
    for(const key in output)if (a[key] !== undefined && b[key] !== undefined) blendValue[key] = getMixer(a[key])(a[key], b[key]);
    return (v)=>{
        for(const key in blendValue)output[key] = blendValue[key](v);
        return output;
    };
}
function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = {
        color: 0,
        var: 0,
        number: 0
    };
    for(let i = 0; i < target.values.length; i++){
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target)=>{
    const template = (0, _indexMjs1.complex).createTransformer(target);
    const originStats = (0, _indexMjs1.analyseComplexValue)(origin);
    const targetStats = (0, _indexMjs1.analyseComplexValue)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((0, _visibilityMjs.invisibleValues).has(origin) && !targetStats.values.length || (0, _visibilityMjs.invisibleValues).has(target) && !originStats.values.length) return (0, _visibilityMjs.mixVisibility)(origin, target);
        return (0, _pipeMjs.pipe)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
        (0, _errorsMjs.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (0, _immediateMjs.mixImmediate)(origin, target);
    }
};

},{"./number.mjs":"8PU4D","./color.mjs":"jgxVS","../pipe.mjs":"eYHch","../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../value/types/color/index.mjs":"33wzR","../../value/types/complex/index.mjs":"iw6Ag","../../render/dom/utils/is-css-variable.mjs":"gS4w8","./visibility.mjs":"jULnL","./immediate.mjs":"6Y9dC","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jgxVS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixColor", ()=>mixColor);
parcelHelpers.export(exports, "mixLinearColor", ()=>mixLinearColor);
var _numberMjs = require("./number.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _hslaToRgbaMjs = require("../hsla-to-rgba.mjs");
var _hexMjs = require("../../value/types/color/hex.mjs");
var _rgbaMjs = require("../../value/types/color/rgba.mjs");
var _hslaMjs = require("../../value/types/color/hsla.mjs");
var _immediateMjs = require("./immediate.mjs");
// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v)=>{
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [
    (0, _hexMjs.hex),
    (0, _rgbaMjs.rgba),
    (0, _hslaMjs.hsla)
];
const getColorType = (v)=>colorTypes.find((type)=>type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0, _errorsMjs.warning)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type)) return false;
    let model = type.parse(color);
    if (type === (0, _hslaMjs.hsla)) // TODO Remove this cast - needed since Motion's stricter typing
    model = (0, _hslaToRgbaMjs.hslaToRgba)(model);
    return model;
}
const mixColor = (from, to)=>{
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) return (0, _immediateMjs.mixImmediate)(from, to);
    const blended = {
        ...fromRGBA
    };
    return (v)=>{
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0, _numberMjs.mixNumber)(fromRGBA.alpha, toRGBA.alpha, v);
        return (0, _rgbaMjs.rgba).transform(blended);
    };
};

},{"./number.mjs":"8PU4D","../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../hsla-to-rgba.mjs":"9bhoM","../../value/types/color/hex.mjs":"cTfhu","../../value/types/color/rgba.mjs":"aVLOV","../../value/types/color/hsla.mjs":"fh8Ud","./immediate.mjs":"6Y9dC","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9bhoM":[function(require,module,exports,__globalThis) {
// Adapted from https://gist.github.com/mjackson/5311256
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslaToRgba", ()=>hslaToRgba);
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) red = green = blue = lightness;
    else {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6Y9dC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixImmediate", ()=>mixImmediate);
function mixImmediate(a, b) {
    return (p)=>p > 0 ? b : a;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eYHch":[function(require,module,exports,__globalThis) {
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jULnL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invisibleValues", ()=>invisibleValues);
parcelHelpers.export(exports, "mixVisibility", ()=>mixVisibility);
const invisibleValues = new Set([
    "none",
    "hidden"
]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */ function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) return (p)=>p <= 0 ? origin : target;
    else return (p)=>p >= 1 ? target : origin;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hh19m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inertia", ()=>inertia);
var _indexMjs = require("./spring/index.mjs");
var _velocityMjs = require("./utils/velocity.mjs");
function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin
    };
    const isOutOfBounds = (v)=>min !== undefined && v < min || max !== undefined && v > max;
    const nearestBoundary = (v)=>{
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */ if (target !== ideal) amplitude = target - origin;
    const calcDelta = (t)=>-amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t)=>target + calcDelta(t);
    const applyFriction = (t)=>{
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */ let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t)=>{
        if (!isOutOfBounds(state.value)) return;
        timeReachedBoundary = t;
        spring$1 = (0, _indexMjs.spring)({
            keyframes: [
                state.value,
                nearestBoundary(state.value)
            ],
            velocity: (0, _velocityMjs.calcGeneratorVelocity)(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t)=>{
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */ let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */ if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        }
    };
}

},{"./spring/index.mjs":"bkQPw","./utils/velocity.mjs":"8m0Gi","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kEftj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultEasing", ()=>defaultEasing);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
var _easeMjs = require("../../easing/ease.mjs");
var _isEasingArrayMjs = require("../../easing/utils/is-easing-array.mjs");
var _mapMjs = require("../../easing/utils/map.mjs");
var _interpolateMjs = require("../../utils/interpolate.mjs");
var _defaultMjs = require("../../utils/offsets/default.mjs");
var _timeMjs = require("../../utils/offsets/time.mjs");
function defaultEasing(values, easing) {
    return values.map(()=>easing || (0, _easeMjs.easeInOut)).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */ const easingFunctions = (0, _isEasingArrayMjs.isEasingArray)(ease) ? ease.map((0, _mapMjs.easingDefinitionToFunction)) : (0, _mapMjs.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: keyframeValues[0]
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */ const absoluteTimes = (0, _timeMjs.convertOffsetToTimes)(// Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : (0, _defaultMjs.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0, _interpolateMjs.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
        calculatedDuration: duration,
        next: (t)=>{
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        }
    };
}

},{"../../easing/ease.mjs":"jMrpS","../../easing/utils/is-easing-array.mjs":"1tU55","../../easing/utils/map.mjs":"69Lmh","../../utils/interpolate.mjs":"8y3uv","../../utils/offsets/default.mjs":"j3MCf","../../utils/offsets/time.mjs":"1gU1N","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jMrpS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeIn", ()=>easeIn);
parcelHelpers.export(exports, "easeInOut", ()=>easeInOut);
parcelHelpers.export(exports, "easeOut", ()=>easeOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
const easeIn = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 0.58, 1);

},{"./cubic-bezier.mjs":"hw3UN","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"69Lmh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easingDefinitionToFunction", ()=>easingDefinitionToFunction);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../../motion-utils/dist/es/noop.mjs");
var _isBezierDefinitionMjs = require("../../../../../motion-dom/dist/es/utils/is-bezier-definition.mjs");
var _anticipateMjs = require("../anticipate.mjs");
var _backMjs = require("../back.mjs");
var _circMjs = require("../circ.mjs");
var _cubicBezierMjs = require("../cubic-bezier.mjs");
var _easeMjs = require("../ease.mjs");
const easingLookup = {
    linear: (0, _noopMjs.noop),
    easeIn: (0, _easeMjs.easeIn),
    easeInOut: (0, _easeMjs.easeInOut),
    easeOut: (0, _easeMjs.easeOut),
    circIn: (0, _circMjs.circIn),
    circInOut: (0, _circMjs.circInOut),
    circOut: (0, _circMjs.circOut),
    backIn: (0, _backMjs.backIn),
    backInOut: (0, _backMjs.backInOut),
    backOut: (0, _backMjs.backOut),
    anticipate: (0, _anticipateMjs.anticipate)
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, _isBezierDefinitionMjs.isBezierDefinition)(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, _errorsMjs.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return (0, _cubicBezierMjs.cubicBezier)(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
        // Else lookup from table
        (0, _errorsMjs.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};

},{"../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../motion-utils/dist/es/noop.mjs":"4GKxA","../../../../../motion-dom/dist/es/utils/is-bezier-definition.mjs":"6bBft","../anticipate.mjs":"ducx7","../back.mjs":"3xk7G","../circ.mjs":"hoFG0","../cubic-bezier.mjs":"hw3UN","../ease.mjs":"jMrpS","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8y3uv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _errorsMjs = require("../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../motion-utils/dist/es/noop.mjs");
var _progressMjs = require("../../../../motion-utils/dist/es/progress.mjs");
var _clampMjs = require("./clamp.mjs");
var _indexMjs = require("./mix/index.mjs");
var _pipeMjs = require("./pipe.mjs");
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || (0, _indexMjs.mix);
    const numMixers = output.length - 1;
    for(let i = 0; i < numMixers; i++){
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || (0, _noopMjs.noop) : ease;
            mixer = (0, _pipeMjs.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */ function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0, _errorsMjs.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */ if (inputLength === 1) return ()=>output[0];
    if (inputLength === 2 && output[0] === output[1]) return ()=>output[1];
    const isZeroDeltaRange = input[0] === input[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [
            ...input
        ].reverse();
        output = [
            ...output
        ].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v)=>{
        if (isZeroDeltaRange && v < input[0]) return output[0];
        let i = 0;
        if (numMixers > 1) for(; i < input.length - 2; i++){
            if (v < input[i + 1]) break;
        }
        const progressInRange = (0, _progressMjs.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp ? (v)=>interpolator((0, _clampMjs.clamp)(input[0], input[inputLength - 1], v)) : interpolator;
}

},{"../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../motion-utils/dist/es/noop.mjs":"4GKxA","../../../../motion-utils/dist/es/progress.mjs":"7g0rh","./clamp.mjs":"j7ovl","./mix/index.mjs":"kmAQe","./pipe.mjs":"eYHch","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1gU1N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertOffsetToTimes", ()=>convertOffsetToTimes);
function convertOffsetToTimes(offset, duration) {
    return offset.map((o)=>o * duration);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8Z9Ce":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "frameloopDriver", ()=>frameloopDriver);
var _syncTimeMjs = require("../../../frameloop/sync-time.mjs");
var _frameMjs = require("../../../frameloop/frame.mjs");
const frameloopDriver = (update)=>{
    const passTimestamp = ({ timestamp })=>update(timestamp);
    return {
        start: ()=>(0, _frameMjs.frame).update(passTimestamp, true),
        stop: ()=>(0, _frameMjs.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */ now: ()=>(0, _frameMjs.frameData).isProcessing ? (0, _frameMjs.frameData).timestamp : (0, _syncTimeMjs.time).now()
    };
};

},{"../../../frameloop/sync-time.mjs":"2yOLr","../../../frameloop/frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bfLj6":[function(require,module,exports,__globalThis) {
/**
 * A list of values that can be hardware-accelerated.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "acceleratedValues", ()=>acceleratedValues);
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"i0Lvh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startWaapiAnimation", ()=>startWaapiAnimation);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _easingMjs = require("../../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs");
var _animationCountMjs = require("../../../stats/animation-count.mjs");
var _bufferMjs = require("../../../stats/buffer.mjs");
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeInOut", times } = {}) {
    const keyframeOptions = {
        [valueName]: keyframes
    };
    if (times) keyframeOptions.offset = times;
    const easing = (0, _easingMjs.mapEasingToNativeEasing)(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) keyframeOptions.easing = easing;
    if ((0, _bufferMjs.statsBuffer).value) (0, _animationCountMjs.activeAnimations).waapi++;
    const animation = element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal"
    });
    if ((0, _bufferMjs.statsBuffer).value) animation.finished.finally(()=>{
        (0, _animationCountMjs.activeAnimations).waapi--;
    });
    return animation;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs":"4ZWi3","../../../stats/animation-count.mjs":"5tsXB","../../../stats/buffer.mjs":"011jH","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7WkHe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsWaapi", ()=>supportsWaapi);
var _errorsMjs = require("../../../../../../../motion-utils/dist/es/errors.mjs");
var _memoMjs = require("../../../../../../../motion-utils/dist/es/memo.mjs");
const supportsWaapi = /*@__PURE__*/ (0, _memoMjs.memo)(()=>Object.hasOwnProperty.call(Element.prototype, "animate"));

},{"../../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../../motion-utils/dist/es/memo.mjs":"8gElA","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9tEfq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultTransition", ()=>getDefaultTransition);
var _keysTransformMjs = require("../../render/html/utils/keys-transform.mjs");
const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
};
const criticallyDampedSpring = (target)=>({
        type: "spring",
        stiffness: 550,
        damping: target === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    });
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */ const ease = {
    type: "keyframes",
    ease: [
        0.25,
        0.1,
        0.35,
        1
    ],
    duration: 0.3
};
const getDefaultTransition = (valueKey, { keyframes })=>{
    if (keyframes.length > 2) return keyframesTransition;
    else if ((0, _keysTransformMjs.transformProps).has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
    return ease;
};

},{"../../render/html/utils/keys-transform.mjs":"5keUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iLfZc":[function(require,module,exports,__globalThis) {
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTransitionDefined", ()=>isTransitionDefined);
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9Ardt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDOMVisualElement", ()=>createDOMVisualElement);
parcelHelpers.export(exports, "createObjectVisualElement", ()=>createObjectVisualElement);
var _isSvgElementMjs = require("../../render/dom/utils/is-svg-element.mjs");
var _svgvisualElementMjs = require("../../render/svg/SVGVisualElement.mjs");
var _htmlvisualElementMjs = require("../../render/html/HTMLVisualElement.mjs");
var _storeMjs = require("../../render/store.mjs");
var _objectVisualElementMjs = require("../../render/object/ObjectVisualElement.mjs");
function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0, _isSvgElementMjs.isSVGElement)(element) ? new (0, _svgvisualElementMjs.SVGVisualElement)(options) : new (0, _htmlvisualElementMjs.HTMLVisualElement)(options);
    node.mount(element);
    (0, _storeMjs.visualElementStore).set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    };
    const node = new (0, _objectVisualElementMjs.ObjectVisualElement)(options);
    node.mount(subject);
    (0, _storeMjs.visualElementStore).set(subject, node);
}

},{"../../render/dom/utils/is-svg-element.mjs":"zW0ai","../../render/svg/SVGVisualElement.mjs":"3L6wM","../../render/html/HTMLVisualElement.mjs":"5moKY","../../render/store.mjs":"fF2L9","../../render/object/ObjectVisualElement.mjs":"fiW1c","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"zW0ai":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGElement", ()=>isSVGElement);
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3L6wM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SVGVisualElement", ()=>SVGVisualElement);
var _frameMjs = require("../../frameloop/frame.mjs");
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
var _camelToDashMjs = require("../dom/utils/camel-to-dash.mjs");
var _defaultsMjs = require("../dom/value-types/defaults.mjs");
var _keysTransformMjs = require("../html/utils/keys-transform.mjs");
var _buildAttrsMjs = require("./utils/build-attrs.mjs");
var _camelCaseAttrsMjs = require("./utils/camel-case-attrs.mjs");
var _isSvgTagMjs = require("./utils/is-svg-tag.mjs");
var _measureMjs = require("./utils/measure.mjs");
var _renderMjs = require("./utils/render.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
class SVGVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = (0, _modelsMjs.createBox);
        this.updateDimensions = ()=>{
            if (this.current && !this.renderState.dimensions) (0, _measureMjs.updateSVGDimensions)(this.current, this.renderState);
        };
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            const defaultType = (0, _defaultsMjs.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    onBindTransform() {
        if (this.current && !this.renderState.dimensions) (0, _frameMjs.frame).postRender(this.updateDimensions);
    }
    build(renderState, latestValues, props) {
        (0, _buildAttrsMjs.buildSVGAttrs)(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0, _renderMjs.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0, _isSvgTagMjs.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}

},{"../../frameloop/frame.mjs":"3Ih1V","../../projection/geometry/models.mjs":"8dp1Z","../dom/DOMVisualElement.mjs":"fw8W1","../dom/utils/camel-to-dash.mjs":"5ROnn","../dom/value-types/defaults.mjs":"kPOqn","../html/utils/keys-transform.mjs":"5keUy","./utils/build-attrs.mjs":"lrZgc","./utils/camel-case-attrs.mjs":"kCNSa","./utils/is-svg-tag.mjs":"7vkQS","./utils/measure.mjs":"amYEg","./utils/render.mjs":"9Twey","./utils/scrape-motion-values.mjs":"ezsSC","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8dp1Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAxis", ()=>createAxis);
parcelHelpers.export(exports, "createAxisDelta", ()=>createAxisDelta);
parcelHelpers.export(exports, "createBox", ()=>createBox);
parcelHelpers.export(exports, "createDelta", ()=>createDelta);
const createAxisDelta = ()=>({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    });
const createDelta = ()=>({
        x: createAxisDelta(),
        y: createAxisDelta()
    });
const createAxis = ()=>({
        min: 0,
        max: 0
    });
const createBox = ()=>({
        x: createAxis(),
        y: createAxis()
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fw8W1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMVisualElement", ()=>DOMVisualElement);
var _visualElementMjs = require("../VisualElement.mjs");
var _domkeyframesResolverMjs = require("./DOMKeyframesResolver.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
class DOMVisualElement extends (0, _visualElementMjs.VisualElement) {
    constructor(){
        super(...arguments);
        this.KeyframeResolver = (0, _domkeyframesResolverMjs.DOMKeyframesResolver);
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */ return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style ? props.style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0, _isMotionValueMjs.isMotionValue)(children)) this.childSubscription = children.on("change", (latest)=>{
            if (this.current) this.current.textContent = `${latest}`;
        });
    }
}

},{"../VisualElement.mjs":"EntdR","./DOMKeyframesResolver.mjs":"1LE5H","../../value/utils/is-motion-value.mjs":"dPNuO","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"EntdR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VisualElement", ()=>VisualElement);
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _definitionsMjs = require("../motion/features/definitions.mjs");
var _modelsMjs = require("../projection/geometry/models.mjs");
var _isNumericalStringMjs = require("../utils/is-numerical-string.mjs");
var _isZeroValueStringMjs = require("../utils/is-zero-value-string.mjs");
var _indexMjs = require("../utils/reduced-motion/index.mjs");
var _stateMjs = require("../utils/reduced-motion/state.mjs");
var _subscriptionManagerMjs = require("../utils/subscription-manager.mjs");
var _warnOnceMjs = require("../utils/warn-once.mjs");
var _indexMjs1 = require("../value/index.mjs");
var _indexMjs2 = require("../value/types/complex/index.mjs");
var _isMotionValueMjs = require("../value/utils/is-motion-value.mjs");
var _animatableNoneMjs = require("./dom/value-types/animatable-none.mjs");
var _findMjs = require("./dom/value-types/find.mjs");
var _keysTransformMjs = require("./html/utils/keys-transform.mjs");
var _storeMjs = require("./store.mjs");
var _isControllingVariantsMjs = require("./utils/is-controlling-variants.mjs");
var _keyframesResolverMjs = require("./utils/KeyframesResolver.mjs");
var _motionValuesMjs = require("./utils/motion-values.mjs");
var _resolveVariantsMjs = require("./utils/resolve-variants.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */ class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */ scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}){
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */ this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */ this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */ this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */ this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */ this.values = new Map();
        this.KeyframeResolver = (0, _keyframesResolverMjs.KeyframeResolver);
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */ this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */ this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */ this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */ this.propEventSubscriptions = {};
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues);
        this.render = ()=>{
            if (!this.current) return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = ()=>{
            const now = (0, _syncTimeMjs.time).now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                (0, _frameMjs.frame).render(this.render, false, true);
            }
        };
        const { latestValues, renderState, onUpdate } = visualState;
        this.onUpdate = onUpdate;
        this.latestValues = latestValues;
        this.baseTarget = {
            ...latestValues
        };
        this.initialValues = props.initial ? {
            ...latestValues
        } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0, _isControllingVariantsMjs.isControllingVariants)(props);
        this.isVariantNode = (0, _isControllingVariantsMjs.isVariantNode)(props);
        if (this.isVariantNode) this.variantChildren = new Set();
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */ const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for(const key in initialMotionValues){
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0, _isMotionValueMjs.isMotionValue)(value)) value.set(latestValues[key], false);
        }
    }
    mount(instance) {
        this.current = instance;
        (0, _storeMjs.visualElementStore).set(instance, this);
        if (this.projection && !this.projection.instance) this.projection.mount(instance);
        if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
        this.values.forEach((value, key)=>this.bindToMotionValue(key, value));
        if (!(0, _stateMjs.hasReducedMotionListener).current) (0, _indexMjs.initPrefersReducedMotion)();
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : (0, _stateMjs.prefersReducedMotion).current;
        (0, _warnOnceMjs.warnOnce)(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        if (this.parent) this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        this.projection && this.projection.unmount();
        (0, _frameMjs.cancelFrame)(this.notifyUpdate);
        (0, _frameMjs.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove)=>remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for(const key in this.events)this.events[key].clear();
        for(const key in this.features){
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
        const valueIsTransform = (0, _keysTransformMjs.transformProps).has(key);
        if (valueIsTransform && this.onBindTransform) this.onBindTransform();
        const removeOnChange = value.on("change", (latestValue)=>{
            this.latestValues[key] = latestValue;
            this.props.onUpdate && (0, _frameMjs.frame).preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        let removeSyncCheck;
        if (window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        this.valueSubscriptions.set(key, ()=>{
            removeOnChange();
            removeOnRenderRequest();
            if (removeSyncCheck) removeSyncCheck();
            if (value.owner) value.stop();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */ if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for(key in 0, _definitionsMjs.featureDefinitions){
            const featureDefinition = (0, _definitionsMjs.featureDefinitions)[key];
            if (!featureDefinition) continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */ if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
            /**
             * If we have a feature, mount or update it.
             */ if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) feature.update();
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */ measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, _modelsMjs.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */ update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */ for(let i = 0; i < propEventHandlers.length; i++){
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = "on" + key;
            const listener = props[listenerName];
            if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
        }
        this.prevMotionValues = (0, _motionValuesMjs.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) this.handleChildMotionValue();
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */ getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */ getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */ addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
            return ()=>closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */ addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue) this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */ removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */ hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) return this.props.values[key];
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0, _indexMjs1.motionValue)(defaultValue === null ? undefined : defaultValue, {
                owner: this
            });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */ readValue(key, target) {
        var _a;
        let value = this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" && ((0, _isNumericalStringMjs.isNumericalString)(value) || (0, _isZeroValueStringMjs.isZeroValueString)(value))) // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
            else if (!(0, _findMjs.findValueType)(value) && (0, _indexMjs2.complex).test(target)) value = (0, _animatableNoneMjs.getAnimatableNone)(key, target);
            this.setBaseTarget(key, (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value);
        }
        return (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */ setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */ getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = (0, _resolveVariantsMjs.resolveVariantFromProps)(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
            if (variant) valueFromInitial = variant[key];
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */ if (initial && valueFromInitial !== undefined) return valueFromInitial;
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */ const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0, _isMotionValueMjs.isMotionValue)(target)) return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */ return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _subscriptionManagerMjs.SubscriptionManager)();
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) this.events[eventName].notify(...args);
    }
}

},{"../frameloop/sync-time.mjs":"2yOLr","../motion/features/definitions.mjs":"bpxfB","../projection/geometry/models.mjs":"8dp1Z","../utils/is-numerical-string.mjs":"5WRkD","../utils/is-zero-value-string.mjs":"f5rPx","../utils/reduced-motion/index.mjs":"9QwPX","../utils/reduced-motion/state.mjs":"M1TrO","../utils/subscription-manager.mjs":"hvgyI","../utils/warn-once.mjs":"5i3lg","../value/index.mjs":"cQKqk","../value/types/complex/index.mjs":"iw6Ag","../value/utils/is-motion-value.mjs":"dPNuO","./dom/value-types/animatable-none.mjs":"5t2T5","./dom/value-types/find.mjs":"dtPk6","./html/utils/keys-transform.mjs":"5keUy","./store.mjs":"fF2L9","./utils/is-controlling-variants.mjs":"iAwCB","./utils/KeyframesResolver.mjs":"jbmQK","./utils/motion-values.mjs":"sKHQ1","./utils/resolve-variants.mjs":"dGBSZ","../frameloop/frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bpxfB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "featureDefinitions", ()=>featureDefinitions);
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag"
    ],
    exit: [
        "exit"
    ],
    drag: [
        "drag",
        "dragControls"
    ],
    focus: [
        "whileFocus"
    ],
    hover: [
        "whileHover",
        "onHoverStart",
        "onHoverEnd"
    ],
    tap: [
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel"
    ],
    pan: [
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd"
    ],
    inView: [
        "whileInView",
        "onViewportEnter",
        "onViewportLeave"
    ],
    layout: [
        "layout",
        "layoutId"
    ]
};
const featureDefinitions = {};
for(const key in featureProps)featureDefinitions[key] = {
    isEnabled: (props)=>featureProps[key].some((name)=>!!props[name])
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9QwPX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPrefersReducedMotion", ()=>initPrefersReducedMotion);
var _isBrowserMjs = require("../is-browser.mjs");
var _stateMjs = require("./state.mjs");
function initPrefersReducedMotion() {
    (0, _stateMjs.hasReducedMotionListener).current = true;
    if (!(0, _isBrowserMjs.isBrowser)) return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = ()=>(0, _stateMjs.prefersReducedMotion).current = motionMediaQuery.matches;
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else (0, _stateMjs.prefersReducedMotion).current = false;
}

},{"../is-browser.mjs":"6zSiU","./state.mjs":"M1TrO","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6zSiU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
const isBrowser = typeof window !== "undefined";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"M1TrO":[function(require,module,exports,__globalThis) {
// Does this device prefer reduced motion? Returns `null` server-side.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasReducedMotionListener", ()=>hasReducedMotionListener);
parcelHelpers.export(exports, "prefersReducedMotion", ()=>prefersReducedMotion);
const prefersReducedMotion = {
    current: null
};
const hasReducedMotionListener = {
    current: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dtPk6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findValueType", ()=>findValueType);
var _indexMjs = require("../../../value/types/color/index.mjs");
var _indexMjs1 = require("../../../value/types/complex/index.mjs");
var _dimensionsMjs = require("./dimensions.mjs");
var _testMjs = require("./test.mjs");
/**
 * A list of all ValueTypes
 */ const valueTypes = [
    ...(0, _dimensionsMjs.dimensionValueTypes),
    (0, _indexMjs.color),
    (0, _indexMjs1.complex)
];
/**
 * Tests a value against the list of ValueTypes
 */ const findValueType = (v)=>valueTypes.find((0, _testMjs.testValueType)(v));

},{"../../../value/types/color/index.mjs":"33wzR","../../../value/types/complex/index.mjs":"iw6Ag","./dimensions.mjs":"lEzfo","./test.mjs":"dA258","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iAwCB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isControllingVariants", ()=>isControllingVariants);
parcelHelpers.export(exports, "isVariantNode", ()=>isVariantNode);
var _isAnimationControlsMjs = require("../../animation/utils/is-animation-controls.mjs");
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
function isControllingVariants(props) {
    return (0, _isAnimationControlsMjs.isAnimationControls)(props.animate) || (0, _variantPropsMjs.variantProps).some((name)=>(0, _isVariantLabelMjs.isVariantLabel)(props[name]));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}

},{"../../animation/utils/is-animation-controls.mjs":"gPFHl","./is-variant-label.mjs":"0xoCf","./variant-props.mjs":"dV2G3","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gPFHl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimationControls", ()=>isAnimationControls);
function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"0xoCf":[function(require,module,exports,__globalThis) {
/**
 * Decides if the supplied variable is variant label
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVariantLabel", ()=>isVariantLabel);
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dV2G3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "variantPriorityOrder", ()=>variantPriorityOrder);
parcelHelpers.export(exports, "variantProps", ()=>variantProps);
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
];
const variantProps = [
    "initial",
    ...variantPriorityOrder
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"sKHQ1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateMotionValuesFromProps", ()=>updateMotionValuesFromProps);
var _warnOnceMjs = require("../../utils/warn-once.mjs");
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
function updateMotionValuesFromProps(element, next, prev) {
    for(const key in next){
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0, _isMotionValueMjs.isMotionValue)(nextValue)) /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */ element.addValue(key, nextValue);
        else if ((0, _isMotionValueMjs.isMotionValue)(prevValue)) /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */ element.addValue(key, (0, _indexMjs.motionValue)(nextValue, {
            owner: element
        }));
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */ if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) existingValue.jump(nextValue);
                else if (!existingValue.hasAnimated) existingValue.set(nextValue);
            } else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0, _indexMjs.motionValue)(latestValue !== undefined ? latestValue : nextValue, {
                    owner: element
                }));
            }
        }
    }
    // Handle removed values
    for(const key in prev)if (next[key] === undefined) element.removeValue(key);
    return next;
}

},{"../../utils/warn-once.mjs":"5i3lg","../../value/index.mjs":"cQKqk","../../value/utils/is-motion-value.mjs":"dPNuO","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lrZgc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGAttrs", ()=>buildSVGAttrs);
var _buildStylesMjs = require("../../html/utils/build-styles.mjs");
var _pathMjs = require("./path.mjs");
var _transformOriginMjs = require("./transform-origin.mjs");
/**
 * Build SVG visual attrbutes, like cx and style.transform
 */ function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, // This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate) {
    (0, _buildStylesMjs.buildHTMLStyles)(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */ if (isSVGTag) {
        if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */ if (attrs.transform) {
        if (dimensions) style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions && (originX !== undefined || originY !== undefined || style.transform)) style.transformOrigin = (0, _transformOriginMjs.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (attrScale !== undefined) attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) (0, _pathMjs.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
}

},{"../../html/utils/build-styles.mjs":"emZN4","./path.mjs":"hiDAd","./transform-origin.mjs":"l278x","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"emZN4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHTMLStyles", ()=>buildHTMLStyles);
var _isCssVariableMjs = require("../../dom/utils/is-css-variable.mjs");
var _getAsTypeMjs = require("../../dom/value-types/get-as-type.mjs");
var _numberMjs = require("../../dom/value-types/number.mjs");
var _buildTransformMjs = require("./build-transform.mjs");
var _keysTransformMjs = require("./keys-transform.mjs");
function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */ for(const key in latestValues){
        const value = latestValues[key];
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        } else if ((0, _isCssVariableMjs.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        } else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] = valueAsType;
            } else style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) style.transform = (0, _buildTransformMjs.buildTransform)(latestValues, state.transform, transformTemplate);
        else if (style.transform) /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */ style.transform = "none";
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */ if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}

},{"../../dom/utils/is-css-variable.mjs":"gS4w8","../../dom/value-types/get-as-type.mjs":"aByht","../../dom/value-types/number.mjs":"dKosw","./build-transform.mjs":"hbR0w","./keys-transform.mjs":"5keUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aByht":[function(require,module,exports,__globalThis) {
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueAsType", ()=>getValueAsType);
const getValueAsType = (value, type)=>{
    return type && typeof value === "number" ? type.transform(value) : value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hbR0w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTransform", ()=>buildTransform);
var _getAsTypeMjs = require("../../dom/value-types/get-as-type.mjs");
var _numberMjs = require("../../dom/value-types/number.mjs");
var _keysTransformMjs = require("./keys-transform.mjs");
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
const numTransforms = (0, _keysTransformMjs.transformPropOrder).length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */ function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(let i = 0; i < numTransforms; i++){
        const key = (0, _keysTransformMjs.transformPropOrder)[i];
        const value = latestValues[key];
        if (value === undefined) continue;
        let valueIsDefault = true;
        if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        else valueIsDefault = parseFloat(value) === 0;
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) transform[key] = valueAsType;
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    else if (transformIsDefault) transformString = "none";
    return transformString;
}

},{"../../dom/value-types/get-as-type.mjs":"aByht","../../dom/value-types/number.mjs":"dKosw","./keys-transform.mjs":"5keUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hiDAd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGPath", ()=>buildSVGPath);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */ function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = (0, _unitsMjs.px).transform(-offset);
    // Build the dash array
    const pathLength = (0, _unitsMjs.px).transform(length);
    const pathSpacing = (0, _unitsMjs.px).transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

},{"../../../value/types/numbers/units.mjs":"d38dj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"l278x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcSVGTransformOrigin", ()=>calcSVGTransformOrigin);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
function calcOrigin(origin, offset, size) {
    return typeof origin === "string" ? origin : (0, _unitsMjs.px).transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */ function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}

},{"../../../value/types/numbers/units.mjs":"d38dj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kCNSa":[function(require,module,exports,__globalThis) {
/**
 * A set of attribute names that are always read/written as camel case.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelCaseAttributes", ()=>camelCaseAttributes);
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"7vkQS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
const isSVGTag = (tag)=>typeof tag === "string" && tag.toLowerCase() === "svg";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"amYEg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateSVGDimensions", ()=>updateSVGDimensions);
function updateSVGDimensions(instance, renderState) {
    try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
    } catch (e) {
        // Most likely trying to measure an unrendered element under Firefox
        renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9Twey":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSVG", ()=>renderSVG);
var _camelToDashMjs = require("../../dom/utils/camel-to-dash.mjs");
var _renderMjs = require("../../html/utils/render.mjs");
var _camelCaseAttrsMjs = require("./camel-case-attrs.mjs");
function renderSVG(element, renderState, _styleProp, projection) {
    (0, _renderMjs.renderHTML)(element, renderState, undefined, projection);
    for(const key in renderState.attrs)element.setAttribute(!(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key, renderState.attrs[key]);
}

},{"../../dom/utils/camel-to-dash.mjs":"5ROnn","../../html/utils/render.mjs":"hxO8p","./camel-case-attrs.mjs":"kCNSa","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hxO8p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHTML", ()=>renderHTML);
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for(const key in vars)element.style.setProperty(key, vars[key]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ezsSC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
var _keysTransformMjs = require("../../html/utils/keys-transform.mjs");
var _scrapeMotionValuesMjs = require("../../html/utils/scrape-motion-values.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    for(const key in props)if ((0, _isMotionValueMjs.isMotionValue)(props[key]) || (0, _isMotionValueMjs.isMotionValue)(prevProps[key])) {
        const targetKey = (0, _keysTransformMjs.transformPropOrder).indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
    }
    return newValues;
}

},{"../../../value/utils/is-motion-value.mjs":"dPNuO","../../html/utils/keys-transform.mjs":"5keUy","../../html/utils/scrape-motion-values.mjs":"dlqxR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dlqxR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isForcedMotionValueMjs = require("../../../motion/utils/is-forced-motion-value.mjs");
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for(const key in style)if ((0, _isMotionValueMjs.isMotionValue)(style[key]) || prevProps.style && (0, _isMotionValueMjs.isMotionValue)(prevProps.style[key]) || (0, _isForcedMotionValueMjs.isForcedMotionValue)(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== undefined) newValues[key] = style[key];
    return newValues;
}

},{"../../../motion/utils/is-forced-motion-value.mjs":"2YoCa","../../../value/utils/is-motion-value.mjs":"dPNuO","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2YoCa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isForcedMotionValue", ()=>isForcedMotionValue);
var _scaleCorrectionMjs = require("../../projection/styles/scale-correction.mjs");
var _keysTransformMjs = require("../../render/html/utils/keys-transform.mjs");
function isForcedMotionValue(key, { layout, layoutId }) {
    return (0, _keysTransformMjs.transformProps).has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!(0, _scaleCorrectionMjs.scaleCorrectors)[key] || key === "opacity");
}

},{"../../projection/styles/scale-correction.mjs":"9oAxa","../../render/html/utils/keys-transform.mjs":"5keUy","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9oAxa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addScaleCorrector", ()=>addScaleCorrector);
parcelHelpers.export(exports, "scaleCorrectors", ()=>scaleCorrectors);
var _isCssVariableMjs = require("../../render/dom/utils/is-css-variable.mjs");
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    for(const key in correctors){
        scaleCorrectors[key] = correctors[key];
        if ((0, _isCssVariableMjs.isCSSVariableName)(key)) scaleCorrectors[key].isCSSVariable = true;
    }
}

},{"../../render/dom/utils/is-css-variable.mjs":"gS4w8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5moKY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLVisualElement", ()=>HTMLVisualElement);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
var _measureMjs = require("../../projection/utils/measure.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
var _isCssVariableMjs = require("../dom/utils/is-css-variable.mjs");
var _defaultsMjs = require("../dom/value-types/defaults.mjs");
var _buildStylesMjs = require("./utils/build-styles.mjs");
var _keysTransformMjs = require("./utils/keys-transform.mjs");
var _renderMjs = require("./utils/render.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "html";
        this.renderInstance = (0, _renderMjs.renderHTML);
    }
    readValueFromInstance(instance, key) {
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            const defaultType = (0, _defaultsMjs.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        } else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0, _isCssVariableMjs.isCSSVariableName)(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0, _measureMjs.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        (0, _buildStylesMjs.buildHTMLStyles)(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
}

},{"../../projection/utils/measure.mjs":"bRQed","../dom/DOMVisualElement.mjs":"fw8W1","../dom/utils/is-css-variable.mjs":"gS4w8","../dom/value-types/defaults.mjs":"kPOqn","./utils/build-styles.mjs":"emZN4","./utils/keys-transform.mjs":"5keUy","./utils/render.mjs":"hxO8p","./utils/scrape-motion-values.mjs":"dlqxR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bRQed":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "measurePageBox", ()=>measurePageBox);
parcelHelpers.export(exports, "measureViewportBox", ()=>measureViewportBox);
var _conversionMjs = require("../geometry/conversion.mjs");
var _deltaApplyMjs = require("../geometry/delta-apply.mjs");
function measureViewportBox(instance, transformPoint) {
    return (0, _conversionMjs.convertBoundingBoxToBox)((0, _conversionMjs.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0, _deltaApplyMjs.translateAxis)(viewportBox.x, scroll.offset.x);
        (0, _deltaApplyMjs.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}

},{"../geometry/conversion.mjs":"2pl72","../geometry/delta-apply.mjs":"8b6Dq","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2pl72":[function(require,module,exports,__globalThis) {
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertBoundingBoxToBox", ()=>convertBoundingBoxToBox);
parcelHelpers.export(exports, "convertBoxToBoundingBox", ()=>convertBoxToBoundingBox);
parcelHelpers.export(exports, "transformBoxPoints", ()=>transformBoxPoints);
function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
        x: {
            min: left,
            max: right
        },
        y: {
            min: top,
            max: bottom
        }
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return {
        top: y.min,
        right: x.max,
        bottom: y.max,
        left: x.min
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */ function transformBoxPoints(point, transformPoint) {
    if (!transformPoint) return point;
    const topLeft = transformPoint({
        x: point.left,
        y: point.top
    });
    const bottomRight = transformPoint({
        x: point.right,
        y: point.bottom
    });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8b6Dq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyAxisDelta", ()=>applyAxisDelta);
parcelHelpers.export(exports, "applyBoxDelta", ()=>applyBoxDelta);
parcelHelpers.export(exports, "applyPointDelta", ()=>applyPointDelta);
parcelHelpers.export(exports, "applyTreeDeltas", ()=>applyTreeDeltas);
parcelHelpers.export(exports, "scalePoint", ()=>scalePoint);
parcelHelpers.export(exports, "transformAxis", ()=>transformAxis);
parcelHelpers.export(exports, "transformBox", ()=>transformBox);
parcelHelpers.export(exports, "translateAxis", ()=>translateAxis);
var _numberMjs = require("../../utils/mix/number.mjs");
var _hasTransformMjs = require("../utils/has-transform.mjs");
/**
 * Scales a point based on a factor and an originPoint
 */ function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */ function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) point = scalePoint(point, boxScale, originPoint);
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */ function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */ function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */ function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength) return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for(let i = 0; i < treeLength; i++){
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */ const { visualElement } = node.options;
        if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
        if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) transformBox(box, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
        });
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0, _hasTransformMjs.hasTransform)(node.latestValues)) transformBox(box, node.latestValues);
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */ if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1.0;
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1.0;
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */ function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0, _numberMjs.mixNumber)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */ function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}

},{"../../utils/mix/number.mjs":"8PU4D","../utils/has-transform.mjs":"2jUzl","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2jUzl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "has2DTranslate", ()=>has2DTranslate);
parcelHelpers.export(exports, "hasScale", ()=>hasScale);
parcelHelpers.export(exports, "hasTransform", ()=>hasTransform);
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fiW1c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectVisualElement", ()=>ObjectVisualElement);
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _visualElementMjs = require("../VisualElement.mjs");
function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends (0, _visualElementMjs.VisualElement) {
    constructor(){
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") return value;
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0, _modelsMjs.createBox)();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}

},{"../../projection/geometry/models.mjs":"8dp1Z","../VisualElement.mjs":"EntdR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jLW3n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSingleValue", ()=>animateSingleValue);
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _motionValueMjs = require("../interfaces/motion-value.mjs");
function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0, _isMotionValueMjs.isMotionValue)(value) ? value : (0, _indexMjs.motionValue)(value);
    motionValue$1.start((0, _motionValueMjs.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}

},{"../../value/index.mjs":"cQKqk","../../value/utils/is-motion-value.mjs":"dPNuO","../interfaces/motion-value.mjs":"qcad3","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2Dpyg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scroll", ()=>scroll);
var _scrollTimelineMjs = require("../../../../../../motion-dom/dist/es/utils/supports/scroll-timeline.mjs");
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../../../motion-utils/dist/es/noop.mjs");
var _observeMjs = require("./observe.mjs");
var _trackMjs = require("./track.mjs");
function scrollTimelineFallback({ source, container, axis = "y" }) {
    // Support legacy source argument. Deprecate later.
    if (source) container = source;
    // ScrollTimeline records progress as a percentage CSSUnitValue
    const currentTime = {
        value: 0
    };
    const cancel = (0, _trackMjs.scrollInfo)((info)=>{
        currentTime.value = info[axis].progress * 100;
    }, {
        container,
        axis
    });
    return {
        currentTime,
        cancel
    };
}
const timelineCache = new Map();
function getTimeline({ source, container = document.documentElement, axis = "y" } = {}) {
    // Support legacy source argument. Deprecate later.
    if (source) container = source;
    if (!timelineCache.has(container)) timelineCache.set(container, {});
    const elementCache = timelineCache.get(container);
    if (!elementCache[axis]) elementCache[axis] = (0, _scrollTimelineMjs.supportsScrollTimeline)() ? new ScrollTimeline({
        source: container,
        axis
    }) : scrollTimelineFallback({
        source: container,
        axis
    });
    return elementCache[axis];
}
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */ function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
/**
 * Currently, we only support element tracking with `scrollInfo`, though in
 * the future we can also offer ViewTimeline support.
 */ function needsElementTracking(options) {
    return options && (options.target || options.offset);
}
function scrollFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll) || needsElementTracking(options)) return (0, _trackMjs.scrollInfo)((info)=>{
        onScroll(info[options.axis].progress, info);
    }, options);
    else return (0, _observeMjs.observeTimeline)(onScroll, getTimeline(options));
}
function scrollAnimation(animation, options) {
    animation.flatten();
    if (needsElementTracking(options)) {
        animation.pause();
        return (0, _trackMjs.scrollInfo)((info)=>{
            animation.time = animation.duration * info[options.axis].progress;
        }, options);
    } else {
        const timeline = getTimeline(options);
        if (animation.attachTimeline) return animation.attachTimeline(timeline, (valueAnimation)=>{
            valueAnimation.pause();
            return (0, _observeMjs.observeTimeline)((progress)=>{
                valueAnimation.time = valueAnimation.duration * progress;
            }, timeline);
        });
        else return 0, _noopMjs.noop;
    }
}
function scroll(onScroll, { axis = "y", ...options } = {}) {
    const optionsWithDefaults = {
        axis,
        ...options
    };
    return typeof onScroll === "function" ? scrollFunction(onScroll, optionsWithDefaults) : scrollAnimation(onScroll, optionsWithDefaults);
}

},{"../../../../../../motion-dom/dist/es/utils/supports/scroll-timeline.mjs":"5ZQAw","../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-utils/dist/es/noop.mjs":"4GKxA","./observe.mjs":"c3Ldj","./track.mjs":"desFv","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"c3Ldj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeTimeline", ()=>observeTimeline);
var _frameMjs = require("../../../frameloop/frame.mjs");
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) update(progress);
        prevProgress = progress;
    };
    (0, _frameMjs.frame).update(onFrame, true);
    return ()=>(0, _frameMjs.cancelFrame)(onFrame);
}

},{"../../../frameloop/frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"desFv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrollInfo", ()=>scrollInfo);
var _indexMjs = require("../resize/index.mjs");
var _infoMjs = require("./info.mjs");
var _onScrollHandlerMjs = require("./on-scroll-handler.mjs");
var _frameMjs = require("../../../frameloop/frame.mjs");
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element)=>element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, _infoMjs.createScrollInfo)();
    const containerHandler = (0, _onScrollHandlerMjs.createOnScrollHandler)(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const measureAll = ()=>{
            for (const handler of containerHandlers)handler.measure();
        };
        const updateAll = ()=>{
            for (const handler of containerHandlers)handler.update((0, _frameMjs.frameData).timestamp);
        };
        const notifyAll = ()=>{
            for (const handler of containerHandlers)handler.notify();
        };
        const listener = ()=>{
            (0, _frameMjs.frame).read(measureAll, false, true);
            (0, _frameMjs.frame).read(updateAll, false, true);
            (0, _frameMjs.frame).update(notifyAll, false, true);
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, {
            passive: true
        });
        if (container !== document.documentElement) resizeListeners.set(container, (0, _indexMjs.resize)(container, listener));
        target.addEventListener("scroll", listener, {
            passive: true
        });
    }
    const listener = scrollListeners.get(container);
    (0, _frameMjs.frame).read(listener, false, true);
    return ()=>{
        var _a;
        (0, _frameMjs.cancelFrame)(listener);
        /**
         * Check if we even have any handlers for this container.
         */ const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers) return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 || _a();
            window.removeEventListener("resize", scrollListener);
        }
    };
}

},{"../resize/index.mjs":"dyuuF","./info.mjs":"6XoiB","./on-scroll-handler.mjs":"lPX6c","../../../frameloop/frame.mjs":"3Ih1V","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dyuuF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resize", ()=>resize);
var _handleElementMjs = require("./handle-element.mjs");
var _handleWindowMjs = require("./handle-window.mjs");
function resize(a, b) {
    return typeof a === "function" ? (0, _handleWindowMjs.resizeWindow)(a) : (0, _handleElementMjs.resizeElement)(a, b);
}

},{"./handle-element.mjs":"ewea0","./handle-window.mjs":"2GW9w","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ewea0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeElement", ()=>resizeElement);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _resolveElementsMjs = require("../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs");
const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return {
            width: inlineSize,
            height: blockSize
        };
    } else if (target instanceof SVGElement && "getBBox" in target) return target.getBBox();
    else return {
        width: target.offsetWidth,
        height: target.offsetHeight
    };
}
function notifyTarget({ target, contentRect, borderBoxSize }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 || _a.forEach((handler)=>{
        handler({
            target,
            contentSize: contentRect,
            get size () {
                return getElementSize(target, borderBoxSize);
            }
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined") return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer) createResizeObserver();
    const elements = (0, _resolveElementsMjs.resolveElements)(target);
    elements.forEach((element)=>{
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 || observer.observe(element);
    });
    return ()=>{
        elements.forEach((element)=>{
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 || elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) observer === null || observer === void 0 || observer.unobserve(element);
        });
    };
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs":"Q8RZg","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2GW9w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resizeWindow", ()=>resizeWindow);
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = ()=>{
        const size = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const info = {
            target: window,
            size,
            contentSize: size
        };
        windowCallbacks.forEach((callback)=>callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler) createWindowResizeHandler();
    return ()=>{
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) windowResizeHandler = undefined;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6XoiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createScrollInfo", ()=>createScrollInfo);
parcelHelpers.export(exports, "updateScrollInfo", ()=>updateScrollInfo);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _progressMjs = require("../../../../../../motion-utils/dist/es/progress.mjs");
var _velocityPerSecondMjs = require("../../../utils/velocity-per-second.mjs");
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element[`scroll${position}`];
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, _progressMjs.progress)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, _velocityPerSecondMjs.velocityPerSecond)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-utils/dist/es/progress.mjs":"7g0rh","../../../utils/velocity-per-second.mjs":"fs0QM","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lPX6c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createOnScrollHandler", ()=>createOnScrollHandler);
var _warnOnceMjs = require("../../../utils/warn-once.mjs");
var _infoMjs = require("./info.mjs");
var _indexMjs = require("./offsets/index.mjs");
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node !== container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    if (container && target && target !== container) (0, _warnOnceMjs.warnOnce)(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: ()=>measure(element, options.target, info),
        update: (time)=>{
            (0, _infoMjs.updateScrollInfo)(element, info, time);
            if (options.offset || options.target) (0, _indexMjs.resolveOffsets)(element, info, options);
        },
        notify: ()=>onScroll(info)
    };
}

},{"../../../utils/warn-once.mjs":"5i3lg","./info.mjs":"6XoiB","./offsets/index.mjs":"5casH","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5casH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveOffsets", ()=>resolveOffsets);
var _clampMjs = require("../../../../utils/clamp.mjs");
var _interpolateMjs = require("../../../../utils/interpolate.mjs");
var _defaultMjs = require("../../../../utils/offsets/default.mjs");
var _insetMjs = require("./inset.mjs");
var _offsetMjs = require("./offset.mjs");
var _presetsMjs = require("./presets.mjs");
const point = {
    x: 0,
    y: 0
};
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
        width: target.clientWidth,
        height: target.clientHeight
    };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = (0, _presetsMjs.ScrollOffset).All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, _insetMjs.calcInset)(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, _offsetMjs.resolveOffset)(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) hasChanged = true;
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, _interpolateMjs.interpolate)(info[axis].offset, (0, _defaultMjs.defaultOffset)(offsetDefinition), {
            clamp: false
        });
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = (0, _clampMjs.clamp)(0, 1, info[axis].interpolate(info[axis].current));
}

},{"../../../../utils/clamp.mjs":"j7ovl","../../../../utils/interpolate.mjs":"8y3uv","../../../../utils/offsets/default.mjs":"j3MCf","./inset.mjs":"e7DnI","./offset.mjs":"1JDyr","./presets.mjs":"2FH3z","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"e7DnI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcInset", ()=>calcInset);
function calcInset(element, container) {
    const inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */ const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        } else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while(!svg){
                if (parent.tagName === "svg") svg = parent;
                parent = current.parentNode;
            }
            current = svg;
        } else break;
    }
    return inset;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1JDyr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveOffset", ()=>resolveOffset);
var _edgeMjs = require("./edge.mjs");
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
        offset,
        offset
    ];
    else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) offsetDefinition = offset.split(" ");
        else /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
            offset,
            (0, _edgeMjs.namedEdges)[offset] ? offset : `0`
        ];
    }
    targetPoint = (0, _edgeMjs.resolveEdge)(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, _edgeMjs.resolveEdge)(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}

},{"./edge.mjs":"eoeUE","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eoeUE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "namedEdges", ()=>namedEdges);
parcelHelpers.export(exports, "resolveEdge", ()=>resolveEdge);
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (edge in namedEdges) edge = namedEdges[edge];
    /**
     * Handle unit values
     */ if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) delta = asNumber;
        else if (edge.endsWith("%")) edge = asNumber / 100;
        else if (edge.endsWith("vw")) delta = asNumber / 100 * document.documentElement.clientWidth;
        else if (edge.endsWith("vh")) delta = asNumber / 100 * document.documentElement.clientHeight;
        else edge = asNumber;
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if (typeof edge === "number") delta = length * edge;
    return inset + delta;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2FH3z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollOffset", ()=>ScrollOffset);
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ]
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ]
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ]
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cPHq2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inView", ()=>inView);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _resolveElementsMjs = require("../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs");
const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0, _resolveElementsMjs.resolveElements)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry.target, entry);
                if (typeof newOnEnd === "function") activeIntersections.set(entry.target, newOnEnd);
                else observer.unobserve(entry.target);
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dv3VS","../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs":"Q8RZg","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iy9s5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOriginIndex", ()=>getOriginIndex);
parcelHelpers.export(exports, "stagger", ()=>stagger);
var _mapMjs = require("../../easing/utils/map.mjs");
function getOriginIndex(from, total) {
    if (from === "first") return 0;
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function stagger(duration = 0.1, { startDelay = 0, from = 0, ease } = {}) {
    return (i, total)=>{
        const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (ease) {
            const maxDelay = total * duration;
            const easingFunction = (0, _mapMjs.easingDefinitionToFunction)(ease);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return startDelay + delay;
    };
}

},{"../../easing/utils/map.mjs":"69Lmh","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1AA4g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTestimonialSlider", ()=>initTestimonialSlider);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initTestimonialSlider = ()=>{
    const animation = {
        duration: 75000,
        easing: (t)=>t
    };
    let isHovering = false;
    var marqueeSlider = new (0, _keenSliderDefault.default)("#testimonial", {
        loop: true,
        renderMode: "performance",
        drag: true,
        mode: "snap",
        slides: {
            perView: 3,
            spacing: 16
        },
        created (s) {
            s.moveToIdx(5, true, animation);
        },
        updated (s) {
            if (!isHovering) s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded (s) {
            if (!isHovering) s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 2,
                    spacing: 16
                }
            },
            "(max-width: 500px)": {
                slides: {
                    perView: 1
                }
            }
        }
    });
    // Add hover listeners directly to the slider element
    const sliderElement = document.querySelector("#testimonial");
    if (sliderElement) {
        sliderElement.addEventListener("mouseenter", ()=>{
            isHovering = true;
            // Stop current animation
            marqueeSlider.animator.stop();
        });
        sliderElement.addEventListener("mouseleave", ()=>{
            isHovering = false;
            marqueeSlider.moveToIdx(marqueeSlider.track.details.abs + 5, true, animation);
        });
    }
};

},{"keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jtJ4u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMotionHeader", ()=>initMotionHeader);
var _motion = require("motion");
const initMotionHeader = ()=>{
    const header = document.querySelector(".nav_fixed");
    const menuButton = document.querySelector(".navbar8_menu-button");
    const menu = document.querySelector(".navbar8_menu");
    const dropdownLists = document.querySelectorAll(".navbar8_dropdown-list");
    const dropdownToggles = document.querySelectorAll(".navbar8_dropdown-toggle");
    if (!header) return;
    // Ensure header has a non-static position for proper scroll calculations
    if (header instanceof HTMLElement) {
        const computedStyle = window.getComputedStyle(header);
        if (computedStyle.position === "static") {
            header.style.position = "relative";
            console.log("Applied position:relative to header for proper scroll animations");
        }
    }
    // Set initial state
    (0, _motion.animate)(header, {
        backgroundColor: "rgba(41, 41, 41, 0.25)"
    }, {
        duration: 0
    });
    // Track navbar open state
    let isNavOpen = false;
    // Track dropdown hover state
    let isAnyDropdownHovered = false;
    // Function to update header background based on current state
    const updateHeaderBackground = ()=>{
        // If nav is open or any dropdown is open/hovered, set full opacity
        if (isNavOpen || checkDropdownState() || isAnyDropdownHovered) (0, _motion.animate)(header, {
            backgroundColor: "rgba(41, 41, 41, 1)"
        }, {
            duration: 0.3,
            easing: "ease-out"
        });
        else {
            // Otherwise, set opacity based on scroll position
            const scrollY = window.scrollY;
            const opacity = scrollY > 0 ? 1 : 0.5;
            (0, _motion.animate)(header, {
                backgroundColor: `rgba(41, 41, 41, ${opacity})`
            }, {
                duration: 0.3,
                easing: "ease-out"
            });
        }
    };
    // Function to check if any dropdown is open
    const checkDropdownState = ()=>{
        let isAnyDropdownOpen = false;
        dropdownLists.forEach((dropdown)=>{
            if (dropdown instanceof HTMLElement && (dropdown.style.display === "block" || dropdown.classList.contains("w--open"))) isAnyDropdownOpen = true;
        });
        return isAnyDropdownOpen;
    };
    // Toggle function for the navbar
    const toggleNav = ()=>{
        isNavOpen = !isNavOpen;
        if (isNavOpen) {
            // When nav is open
            document.body.style.overflowY = "hidden";
            // Make the menu scrollable
            if (menu) menu.setAttribute("style", "overflow-y: auto; max-height: calc(100vh - 80px);");
        } else {
            // When nav is closed
            document.body.style.overflowY = "";
            // Remove scrolling from menu
            if (menu) menu.setAttribute("style", "");
        }
        // Update header background based on new state
        updateHeaderBackground();
    };
    // Add click listener to menu button
    if (menuButton) menuButton.addEventListener("click", toggleNav);
    // Add hover listeners for dropdown toggles
    dropdownToggles.forEach((toggle)=>{
        toggle.addEventListener("mouseenter", ()=>{
            isAnyDropdownHovered = true;
            updateHeaderBackground();
        });
        toggle.addEventListener("mouseleave", ()=>{
            isAnyDropdownHovered = false;
            updateHeaderBackground();
        });
    });
    // Also add click listeners for dropdown toggles to handle open/close state
    dropdownToggles.forEach((toggle)=>{
        toggle.addEventListener("click", ()=>{
            // Wait a moment for the dropdown to open/close
            setTimeout(()=>{
                updateHeaderBackground();
            }, 50);
        });
    });
    // Handle scrolling
    (0, _motion.scroll)((progress, info)=>{
        // Skip animation if nav is open, any dropdown is open, or any dropdown is hovered
        if (isNavOpen || checkDropdownState() || isAnyDropdownHovered) return;
        // Get vertical scroll position in pixels
        const scrollY = info.y.current;
        const opacity = scrollY > 0 ? 1 : 0.5;
        (0, _motion.animate)(header, {
            backgroundColor: `rgba(41, 41, 41, ${opacity})`
        }, {
            duration: 0.3,
            easing: "ease-out"
        });
    });
    // Initial update based on page load state
    updateHeaderBackground();
};

},{"motion":"7nUvx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cGx0z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFotostudioMotion", ()=>initFotostudioMotion);
var _motion = require("motion");
const initFotostudioMotion = ()=>{
    // Animate the hero section
    const animateHero = ()=>{
        const heroHeading = document.querySelector('.heading-style-h1-3');
        const heroParagraph = document.querySelector('.section_header30 .text-size-medium');
        const heroButtons = document.querySelectorAll('.section_header30 .button');
        // Set initial states
        if (heroHeading) (0, _motion.animate)(heroHeading, {
            opacity: 0,
            y: 30
        }, {
            duration: 0
        });
        if (heroParagraph) (0, _motion.animate)(heroParagraph, {
            opacity: 0,
            y: 20
        }, {
            duration: 0
        });
        heroButtons.forEach((button)=>{
            (0, _motion.animate)(button, {
                opacity: 0,
                y: 15,
                scale: 0.95
            }, {
                duration: 0
            });
        });
        // Animate in sequence
        setTimeout(()=>{
            if (heroHeading) (0, _motion.animate)(heroHeading, {
                opacity: 1,
                y: 0
            }, {
                duration: 0.8,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            });
            setTimeout(()=>{
                if (heroParagraph) (0, _motion.animate)(heroParagraph, {
                    opacity: 1,
                    y: 0
                }, {
                    duration: 0.7,
                    easing: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ]
                });
                setTimeout(()=>{
                    heroButtons.forEach((button, i)=>{
                        (0, _motion.animate)(button, {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }, {
                            duration: 0.5,
                            delay: i * 0.1,
                            easing: [
                                0.25,
                                0.1,
                                0.25,
                                1
                            ]
                        });
                    });
                }, 200);
            }, 200);
        }, 300);
    };
    // Animate studio section
    const animateStudioSection = ()=>{
        const studioSection = document.querySelector('.section_layout25');
        const studioHeading = studioSection?.querySelector('.heading-style-h2');
        const studioTagline = studioSection?.querySelector('.text-style-tagline');
        const studioParagraph = studioSection?.querySelector('.text-size-medium');
        const studioItems = studioSection?.querySelectorAll('.layout25_text-wrapper');
        const studioButtons = studioSection?.querySelectorAll('.button');
        const studioImage = studioSection?.querySelector('.layout25_image');
        // Set initial states
        if (studioTagline) (0, _motion.animate)(studioTagline, {
            opacity: 0,
            x: -20
        }, {
            duration: 0
        });
        if (studioHeading) (0, _motion.animate)(studioHeading, {
            opacity: 0,
            x: -30
        }, {
            duration: 0
        });
        if (studioParagraph) (0, _motion.animate)(studioParagraph, {
            opacity: 0,
            x: -20
        }, {
            duration: 0
        });
        studioItems?.forEach((item)=>{
            (0, _motion.animate)(item, {
                opacity: 0,
                y: 30
            }, {
                duration: 0
            });
        });
        studioButtons?.forEach((button)=>{
            (0, _motion.animate)(button, {
                opacity: 0,
                y: 15
            }, {
                duration: 0
            });
        });
        if (studioImage) (0, _motion.animate)(studioImage, {
            opacity: 0,
            scale: 0.9,
            x: 30
        }, {
            duration: 0
        });
        // Scroll animations with reversible effects
        if (studioSection) {
            (0, _motion.scroll)((0, _motion.animate)(studioTagline, {
                opacity: [
                    0,
                    1
                ],
                x: [
                    -20,
                    0
                ]
            }), {
                target: studioSection,
                offset: [
                    "start 80%",
                    "start 40%"
                ]
            });
            (0, _motion.scroll)((0, _motion.animate)(studioHeading, {
                opacity: [
                    0,
                    1
                ],
                x: [
                    -30,
                    0
                ]
            }), {
                target: studioSection,
                offset: [
                    "start 75%",
                    "start 35%"
                ]
            });
            (0, _motion.scroll)((0, _motion.animate)(studioParagraph, {
                opacity: [
                    0,
                    1
                ],
                x: [
                    -20,
                    0
                ]
            }), {
                target: studioSection,
                offset: [
                    "start 70%",
                    "start 30%"
                ]
            });
            studioItems?.forEach((item, i)=>{
                (0, _motion.scroll)((0, _motion.animate)(item, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: studioSection,
                    offset: [
                        `start ${65 - i * 5}%`,
                        `start ${25 - i * 5}%`
                    ]
                });
            });
            studioButtons?.forEach((button, i)=>{
                (0, _motion.scroll)((0, _motion.animate)(button, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ]
                }), {
                    target: studioSection,
                    offset: [
                        `start ${60 - i * 5}%`,
                        `start ${20 - i * 5}%`
                    ]
                });
            });
            (0, _motion.scroll)((0, _motion.animate)(studioImage, {
                opacity: [
                    0,
                    1
                ],
                scale: [
                    0.9,
                    1
                ],
                x: [
                    30,
                    0
                ]
            }), {
                target: studioSection,
                offset: [
                    "start 70%",
                    "start 30%"
                ]
            });
        }
    };
    // Animate gallery section
    const animateGallerySection = ()=>{
        const gallerySection = document.querySelector('.section_gallery8');
        const galleryHeading = gallerySection?.querySelector('.heading-style-h2');
        const galleryParagraph = gallerySection?.querySelector('.text-size-medium');
        const galleryImages = gallerySection?.querySelectorAll('.gallery8_lightbox-link');
        // Set initial states
        if (galleryHeading) (0, _motion.animate)(galleryHeading, {
            opacity: 0,
            y: 30
        }, {
            duration: 0
        });
        if (galleryParagraph) (0, _motion.animate)(galleryParagraph, {
            opacity: 0,
            y: 20
        }, {
            duration: 0
        });
        galleryImages?.forEach((image)=>{
            (0, _motion.animate)(image, {
                opacity: 0,
                y: 50,
                scale: 0.95
            }, {
                duration: 0
            });
        });
        // Scroll animations with reversible effects
        if (gallerySection) {
            (0, _motion.scroll)((0, _motion.animate)(galleryHeading, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    30,
                    0
                ]
            }), {
                target: gallerySection,
                offset: [
                    "start 80%",
                    "start 40%"
                ]
            });
            (0, _motion.scroll)((0, _motion.animate)(galleryParagraph, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    20,
                    0
                ]
            }), {
                target: gallerySection,
                offset: [
                    "start 75%",
                    "start 35%"
                ]
            });
            galleryImages?.forEach((image, i)=>{
                (0, _motion.scroll)((0, _motion.animate)(image, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        50,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }), {
                    target: gallerySection,
                    offset: [
                        `start ${70 - i * 3}%`,
                        `start ${30 - i * 3}%`
                    ]
                });
                // Add hover animations
                image.addEventListener('mouseenter', ()=>{
                    (0, _motion.animate)(image, {
                        scale: 1.03,
                        y: -5
                    }, {
                        duration: 0.3,
                        easing: "ease-out"
                    });
                });
                image.addEventListener('mouseleave', ()=>{
                    (0, _motion.animate)(image, {
                        scale: 1,
                        y: 0
                    }, {
                        duration: 0.3,
                        easing: "ease-out"
                    });
                });
            });
        }
    };
    // Animate benefits section
    const animateBenefitsSection = ()=>{
        const benefitsSection = document.querySelector('.section_fotografie_vorteile-sektion');
        const benefitsTagline = benefitsSection?.querySelector('.text-style-tagline');
        const benefitsHeading = benefitsSection?.querySelector('.heading-style-h2');
        const benefitsParagraph = benefitsSection?.querySelector('.text-size-medium');
        const benefitsItems = benefitsSection?.querySelectorAll('.fotografie_vorteile-sektion_item');
        const benefitsButtons = benefitsSection?.querySelectorAll('.button');
        const benefitsImage = benefitsSection?.querySelector('.fotografie_vorteile-sektion_image');
        // Set initial states
        if (benefitsTagline) (0, _motion.animate)(benefitsTagline, {
            opacity: 0,
            x: -20
        }, {
            duration: 0
        });
        if (benefitsHeading) (0, _motion.animate)(benefitsHeading, {
            opacity: 0,
            x: -30
        }, {
            duration: 0
        });
        if (benefitsParagraph) (0, _motion.animate)(benefitsParagraph, {
            opacity: 0,
            x: -20
        }, {
            duration: 0
        });
        benefitsItems?.forEach((item)=>{
            (0, _motion.animate)(item, {
                opacity: 0,
                x: -40,
                scale: 0.95
            }, {
                duration: 0
            });
        });
        benefitsButtons?.forEach((button)=>{
            (0, _motion.animate)(button, {
                opacity: 0,
                y: 15
            }, {
                duration: 0
            });
        });
        if (benefitsImage) (0, _motion.animate)(benefitsImage, {
            opacity: 0,
            scale: 0.9,
            x: 40
        }, {
            duration: 0
        });
        // Scroll animations with reversible effects
        if (benefitsSection) {
            (0, _motion.scroll)((0, _motion.animate)(benefitsTagline, {
                opacity: [
                    0,
                    1
                ],
                x: [
                    -20,
                    0
                ]
            }), {
                target: benefitsSection,
                offset: [
                    "start 80%",
                    "start 40%"
                ]
            });
            (0, _motion.scroll)((0, _motion.animate)(benefitsHeading, {
                opacity: [
                    0,
                    1
                ],
                x: [
                    -30,
                    0
                ]
            }), {
                target: benefitsSection,
                offset: [
                    "start 75%",
                    "start 35%"
                ]
            });
            (0, _motion.scroll)((0, _motion.animate)(benefitsParagraph, {
                opacity: [
                    0,
                    1
                ],
                x: [
                    -20,
                    0
                ]
            }), {
                target: benefitsSection,
                offset: [
                    "start 70%",
                    "start 30%"
                ]
            });
            benefitsItems?.forEach((item, i)=>{
                (0, _motion.scroll)((0, _motion.animate)(item, {
                    opacity: [
                        0,
                        1
                    ],
                    x: [
                        -40,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }), {
                    target: benefitsSection,
                    offset: [
                        `start ${65 - i * 5}%`,
                        `start ${25 - i * 5}%`
                    ]
                });
            });
            benefitsButtons?.forEach((button, i)=>{
                (0, _motion.scroll)((0, _motion.animate)(button, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ]
                }), {
                    target: benefitsSection,
                    offset: [
                        `start ${60 - i * 5}%`,
                        `start ${20 - i * 5}%`
                    ]
                });
            });
            (0, _motion.scroll)((0, _motion.animate)(benefitsImage, {
                opacity: [
                    0,
                    1
                ],
                scale: [
                    0.9,
                    1
                ],
                x: [
                    40,
                    0
                ]
            }), {
                target: benefitsSection,
                offset: [
                    "start 70%",
                    "start 30%"
                ]
            });
        }
    };
    // Animate CTA section
    const animateCtaSection = ()=>{
        const ctaSection = document.querySelector('.section_cta3');
        const ctaHeading = ctaSection?.querySelector('.heading-style-h2');
        const ctaParagraph = ctaSection?.querySelector('.text-size-medium');
        const ctaButtons = ctaSection?.querySelectorAll('.button');
        // Set initial states
        if (ctaHeading) (0, _motion.animate)(ctaHeading, {
            opacity: 0,
            y: 30
        }, {
            duration: 0
        });
        if (ctaParagraph) (0, _motion.animate)(ctaParagraph, {
            opacity: 0,
            y: 20
        }, {
            duration: 0
        });
        ctaButtons?.forEach((button)=>{
            (0, _motion.animate)(button, {
                opacity: 0,
                y: 15,
                scale: 0.95
            }, {
                duration: 0
            });
        });
        // Scroll animations with reversible effects
        if (ctaSection) {
            (0, _motion.scroll)((0, _motion.animate)(ctaHeading, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    30,
                    0
                ]
            }), {
                target: ctaSection,
                offset: [
                    "start 80%",
                    "start 40%"
                ]
            });
            (0, _motion.scroll)((0, _motion.animate)(ctaParagraph, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    20,
                    0
                ]
            }), {
                target: ctaSection,
                offset: [
                    "start 75%",
                    "start 35%"
                ]
            });
            ctaButtons?.forEach((button, i)=>{
                (0, _motion.scroll)((0, _motion.animate)(button, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }), {
                    target: ctaSection,
                    offset: [
                        `start ${70 - i * 5}%`,
                        `start ${30 - i * 5}%`
                    ]
                });
            });
        }
    };
    // Animate split text
    const animateSplitText = ()=>{
        // Get all split text containers
        const splitTextElements = document.querySelectorAll('.splt');
        splitTextElements.forEach((element)=>{
            // Get all characters in this element
            const chars = element.querySelectorAll('.char');
            // Set initial state for all characters
            chars.forEach((char)=>{
                (0, _motion.animate)(char, {
                    opacity: 0,
                    y: 20,
                    rotateX: 90
                }, {
                    duration: 0
                });
            });
            // Animate characters when container comes into view
            (0, _motion.inView)(element, ()=>{
                (0, _motion.animate)(chars, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ],
                    rotateX: [
                        90,
                        0
                    ]
                }, {
                    delay: (0, _motion.stagger)(0.02, {
                        start: 0.1
                    }),
                    duration: 0.6,
                    easing: [
                        .25,
                        .25,
                        .25,
                        1
                    ]
                });
            }, {
                amount: 0.8 // Trigger when 80% of element is visible
            });
        });
    };
    // Run all animations
    animateHero();
    animateStudioSection();
    animateGallerySection();
    animateBenefitsSection();
    animateCtaSection();
    animateSplitText();
};

},{"motion":"7nUvx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9nCkP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initVideoproduktionenMotion", ()=>initVideoproduktionenMotion);
var _motion = require("motion");
const initVideoproduktionenMotion = ()=>{
    console.log('Initializing videoproduktionen motion animations');
    // Animate header content on page load
    animateHeader();
    // Set up scroll-triggered animations for sections
    setupScrollAnimations();
    // Add hover effects to cards
    setupCardHoverEffects();
    // Monitor and ensure videos keep playing
    ensureVideosKeepPlaying();
};
// Add this new function to monitor and restart videos
const ensureVideosKeepPlaying = ()=>{
    console.log('Setting up enhanced video playback monitoring');
    // Get all video elements
    const videoElements = document.querySelectorAll('.video-plyr');
    if (videoElements.length === 0) {
        console.warn('No video elements found to monitor');
        return;
    }
    console.log(`Monitoring ${videoElements.length} video elements`);
    // Apply additional attributes to each video to help with playback
    videoElements.forEach((video, index)=>{
        if (video instanceof HTMLVideoElement) {
            // Set important attributes to ensure continuous playback
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.autoplay = true;
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.setAttribute('data-monitored', 'true');
            // Set a short loop duration by limiting the playback time
            // This will make the video effectively loop every 2 seconds
            const setShortLoop = ()=>{
                // Get the actual duration of the video
                const actualDuration = video.duration;
                // If the video is longer than 2 seconds, we'll create a virtual loop
                if (actualDuration > 2) // Set up a timeupdate listener to reset the video position
                video.addEventListener('timeupdate', ()=>{
                    // If the current time exceeds 2 seconds, reset to beginning
                    if (video.currentTime > 2) video.currentTime = 0;
                });
                console.log(`Set short loop for video ${index} (actual duration: ${actualDuration}s)`);
            };
            // Wait for metadata to be loaded to get the duration
            if (video.readyState >= 1) setShortLoop();
            else video.addEventListener('loadedmetadata', setShortLoop);
            // Force play on load
            video.load();
            // Add event listeners with more aggressive restart
            video.addEventListener('pause', ()=>{
                console.log(`Video ${index} paused - forcing restart`);
                // Use a more aggressive approach to restart
                setTimeout(()=>{
                    video.currentTime = 0;
                    const playPromise = video.play();
                    if (playPromise) playPromise.catch(()=>{
                        console.log(`Retry play for video ${index}`);
                        // Try again with a delay
                        setTimeout(()=>video.play(), 100);
                    });
                }, 50);
            });
            video.addEventListener('ended', ()=>{
                console.log(`Video ${index} ended - restarting`);
                video.currentTime = 0;
                video.play();
            });
            // Try to play immediately
            try {
                video.play();
            } catch (e) {
                console.error(`Initial play failed for video ${index}:`, e);
            }
        }
    });
    // More aggressive monitoring interval (check every second)
    setInterval(()=>{
        videoElements.forEach((video, index)=>{
            if (video instanceof HTMLVideoElement) // Check if video is paused, ended, or has error
            {
                if (video.paused || video.ended) {
                    console.log(`Video ${index} not playing - forcing restart`);
                    // Reset and force play
                    video.currentTime = 0;
                    video.muted = true; // Ensure muted to bypass autoplay restrictions
                    try {
                        const playPromise = video.play();
                        if (playPromise) playPromise.catch((error)=>{
                            console.error(`Error restarting video ${index}:`, error);
                            // Try one more time with a delay
                            setTimeout(()=>video.play(), 200);
                        });
                    } catch (e) {
                        console.error(`Exception trying to restart video ${index}:`, e);
                    }
                }
            }
        });
    }, 1000);
    // Add a document visibility change listener to restart videos when tab becomes visible
    document.addEventListener('visibilitychange', ()=>{
        if (document.visibilityState === 'visible') {
            console.log('Page became visible - checking all videos');
            videoElements.forEach((video, index)=>{
                if (video instanceof HTMLVideoElement && (video.paused || video.ended)) {
                    console.log(`Restarting video ${index} after visibility change`);
                    video.play().catch((e)=>console.error(`Visibility restart failed for video ${index}:`, e));
                }
            });
        }
    });
    // Handle Plyr error events directly
    const plyrContainers = document.querySelectorAll('.plyr');
    plyrContainers.forEach((container, index)=>{
        container.addEventListener('error', (event)=>{
            console.log(`Plyr container ${index} error event - attempting recovery`);
            // Find the video element inside this container
            const video = container.querySelector('video');
            if (video instanceof HTMLVideoElement) {
                // Reset video state completely
                video.pause();
                video.currentTime = 0;
                video.load();
                // Force muted state to help with autoplay
                video.muted = true;
                video.setAttribute('muted', '');
                // Try to play after a short delay
                setTimeout(()=>{
                    const playPromise = video.play();
                    if (playPromise) playPromise.catch(()=>{
                        console.log(`Recovery attempt for Plyr ${index} failed - trying one more time`);
                        setTimeout(()=>video.play(), 500);
                    });
                }, 100);
            }
        });
    });
    // Add a more robust recovery mechanism for network issues
    window.addEventListener('online', ()=>{
        console.log('Network connection restored - recovering videos');
        videoElements.forEach((video, index)=>{
            if (video instanceof HTMLVideoElement) {
                // Reload and restart video when network comes back
                video.load();
                video.play().catch((e)=>console.error(`Network recovery failed for video ${index}:`, e));
            }
        });
    });
};
// Function to animate header elements without SplitJS
const animateHeader = ()=>{
    const headerTitle = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_hero-sektion_heading');
    const headerText = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_hero-sektion_paragraph');
    const headerButton = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_hero-sektion_button');
    // Animate title as a whole element
    if (headerTitle) (0, _motion.animate)(headerTitle, {
        opacity: [
            0,
            1
        ],
        y: [
            20,
            0
        ]
    }, {
        duration: 0.8,
        easing: [
            0.25,
            0.1,
            0.25,
            1
        ]
    });
    // Animate text as a whole element
    if (headerText) (0, _motion.animate)(headerText, {
        opacity: [
            0,
            1
        ],
        y: [
            20,
            0
        ]
    }, {
        duration: 0.8,
        delay: 0.2,
        easing: [
            0.25,
            0.1,
            0.25,
            1
        ]
    });
    // Animate button
    if (headerButton) (0, _motion.animate)(headerButton, {
        opacity: [
            0,
            1
        ],
        y: [
            20,
            0
        ]
    }, {
        duration: 0.8,
        delay: 0.4,
        easing: [
            0.25,
            0.1,
            0.25,
            1
        ]
    });
};
const setupScrollAnimations = ()=>{
    // Fix the scroll animation for the vorteile section image
    const vorteileSection = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion');
    const vorteileImage = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_image');
    if (vorteileSection && vorteileImage) (0, _motion.scroll)(({ y })=>{
        if (y && typeof y.progress === 'number') vorteileImage.style.transform = `translateY(${y.progress * 50}px)`;
    }, {
        target: vorteileSection
    });
    // Safely set up inView animations with proper null checks
    (0, _motion.inView)('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_component .text-align-center', (entry)=>{
        const target = entry.target;
        if (!target) return false;
        const elements = target.querySelectorAll('.text-style-tagline, h2, p');
        if (elements.length > 0) (0, _motion.animate)(elements, {
            opacity: [
                0,
                1
            ],
            y: [
                30,
                0
            ]
        }, {
            delay: (0, _motion.stagger)(0.15),
            duration: 0.7,
            easing: [
                0.25,
                0.1,
                0.25,
                1
            ]
        });
        return false; // Run animation only once
    });
    // Animate the video cards when they come into view
    (0, _motion.inView)('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_grid-list', (entry)=>{
        const target = entry.target;
        if (!target) return false;
        const cards = target.querySelectorAll('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-large, .professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-small');
        if (cards.length > 0) (0, _motion.animate)(cards, {
            opacity: [
                0,
                1
            ],
            scale: [
                0.9,
                1
            ],
            y: [
                30,
                0
            ]
        }, {
            delay: (0, _motion.stagger)(0.1),
            duration: 0.7,
            easing: [
                0.25,
                0.1,
                0.25,
                1
            ]
        });
        return false; // Run animation only once
    });
    // Animate the vorteile section
    (0, _motion.inView)('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_component', (entry)=>{
        const target = entry.target;
        if (!target) return false;
        const textElements = target.querySelectorAll('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_content-left > *');
        if (textElements.length > 0) (0, _motion.animate)(textElements, {
            opacity: [
                0,
                1
            ],
            x: [
                -30,
                0
            ]
        }, {
            delay: (0, _motion.stagger)(0.15),
            duration: 0.7,
            easing: [
                0.25,
                0.1,
                0.25,
                1
            ]
        });
        const image = target.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_image');
        if (image) (0, _motion.animate)(image, {
            opacity: [
                0,
                1
            ],
            scale: [
                0.9,
                1
            ]
        }, {
            duration: 1,
            easing: [
                0.25,
                0.1,
                0.25,
                1
            ]
        });
        return false; // Run animation only once
    });
    // Animate the CTA section
    (0, _motion.inView)('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_cta-sektion_component', (entry)=>{
        const target = entry.target;
        if (!target) return false;
        (0, _motion.animate)(target, {
            opacity: [
                0,
                1
            ],
            y: [
                50,
                0
            ]
        }, {
            duration: 0.8,
            easing: [
                0.25,
                0.1,
                0.25,
                1
            ]
        });
        return false; // Run animation only once
    });
};
const setupCardHoverEffects = ()=>{
    // Add hover effects to all video cards
    const cards = document.querySelectorAll('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-large, .professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-small');
    cards.forEach((card)=>{
        card.addEventListener('mouseenter', ()=>{
            (0, _motion.animate)(card, {
                y: -10,
                scale: 1.02
            }, {
                duration: 0.3,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            });
        });
        card.addEventListener('mouseleave', ()=>{
            (0, _motion.animate)(card, {
                y: 0,
                scale: 1
            }, {
                duration: 0.3,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            });
        });
    });
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.button-main, .button');
    buttons.forEach((button)=>{
        button.addEventListener('mouseenter', ()=>{
            (0, _motion.animate)(button, {
                scale: 1.05
            }, {
                duration: 0.2,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            });
        });
        button.addEventListener('mouseleave', ()=>{
            (0, _motion.animate)(button, {
                scale: 1
            }, {
                duration: 0.2,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            });
        });
    });
};

},{"motion":"7nUvx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hw7zM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBeispielPlayer", ()=>initBeispielPlayer);
var _plyr = require("plyr");
var _plyrDefault = parcelHelpers.interopDefault(_plyr);
const initBeispielPlayer = ()=>{
    // Find all containers with the correct class
    const containers = document.querySelectorAll(".slider-beispiel-wrap");
    if (containers.length === 0) {
        console.log("No video containers found with class 'slider-beispiel-wrap'");
        return [];
    }
    // Add CSS to ensure proper sizing of video containers
    const style = document.createElement("style");
    style.textContent = `
    .plyr--video {
      height: 100%;
      border-radius: .5rem;
      width: 100%;
    }
    .plyr__video-wrapper {
      height: 100%;
      width: 100%;
    }

  `;
    document.head.appendChild(style);
    console.log(`Found ${containers.length} video containers`);
    // Initialize Plyr on each container
    const players = Array.from(containers).map((container)=>{
        // Get aspect ratio from data attribute, default to "9:16" if not specified
        const aspectRatio = container.dataset.aspectRatio || "9:16";
        // Create the player with the aspect ratio from data attribute
        const player = new (0, _plyrDefault.default)(container, {
            ratio: aspectRatio,
            clickToPlay: true,
            autopause: true,
            vimeo: {
                byline: false,
                portrait: false,
                title: false,
                speed: true,
                transparent: false,
                controls: false,
                dnt: true
            },
            controls: [
                "play",
                "mute",
                "volume"
            ]
        });
        return player;
    });
    return players;
};

},{"plyr":"3NhIP","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"63o3I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBeispielSlider", ()=>initBeispielSlider);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initBeispielSlider = ()=>{
    console.log("Initializing Beispiel Slider");
    // Find the slider container
    const sliderContainer = document.getElementById("is-beispiele");
    if (!sliderContainer) {
        console.warn("Beispiel Slider container not found (ID: is-beispiele)");
        return;
    }
    // Initialize Keen Slider
    const slider = new (0, _keenSliderDefault.default)("#is-beispiele", {
        loop: true,
        renderMode: "performance",
        drag: true,
        slides: {
            perView: 3,
            spacing: 24
        },
        created (s) {
            console.log("Beispiel Slider created");
            // Optional: Add custom navigation buttons if they exist
            setupNavigation(s);
        },
        breakpoints: {
            "(max-width: 991px)": {
                slides: {
                    perView: 2,
                    spacing: 16
                }
            },
            "(max-width: 479px)": {
                slides: {
                    perView: 1,
                    spacing: 16
                }
            }
        }
    });
    // For auto-sliding functionality (optional)
    let autoplayInterval = null;
    // Function to start autoplay
    const startAutoplay = ()=>{
        stopAutoplay(); // Clear any existing interval first
        autoplayInterval = window.setInterval(()=>{
            if (slider) slider.next();
        }, 5000); // Change slide every 5 seconds
    };
    // Function to stop autoplay
    const stopAutoplay = ()=>{
        if (autoplayInterval !== null) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    };
    // Start autoplay on creation
    startAutoplay();
    // Pause autoplay when user interacts with the slider
    sliderContainer.addEventListener("mouseover", stopAutoplay);
    sliderContainer.addEventListener("touchstart", stopAutoplay, {
        passive: true
    });
    // Resume autoplay when user stops interacting
    sliderContainer.addEventListener("mouseout", startAutoplay);
    sliderContainer.addEventListener("touchend", startAutoplay);
    // Clean up on page leave/component unmount
    return ()=>{
        stopAutoplay();
        if (slider) slider.destroy();
    };
};
// Helper function to set up custom navigation if needed
function setupNavigation(slider) {
    // Look for previous and next buttons
    const prevButton = document.querySelector('[data-beispiel-slider="prev"]');
    const nextButton = document.querySelector('[data-beispiel-slider="next"]');
    // Add click handlers if buttons exist
    if (prevButton) prevButton.addEventListener("click", ()=>{
        slider.prev();
    });
    if (nextButton) nextButton.addEventListener("click", ()=>{
        slider.next();
    });
    // Optional: Add dots/pagination
    const dotsContainer = document.querySelector('[data-beispiel-slider="dots"]');
    if (dotsContainer) {
        // Create dots based on number of slides
        const slideCount = slider.track.details.slides.length;
        // Empty the container first
        dotsContainer.innerHTML = "";
        // Add a dot for each slide
        for(let i = 0; i < slideCount; i++){
            const dot = document.createElement("button");
            dot.classList.add("beispiel-slider-dot");
            // Mark the first dot as active
            if (i === 0) dot.classList.add("active");
            // Add click handler
            dot.addEventListener("click", ()=>{
                slider.moveToIdx(i);
            });
            dotsContainer.appendChild(dot);
        }
        // Update active dot when slide changes
        slider.on("slideChanged", (s)=>{
            const dots = dotsContainer.querySelectorAll(".beispiel-slider-dot");
            const currentIndex = s.track.details.rel;
            // Remove active class from all dots
            dots.forEach((dot)=>{
                dot.classList.remove("active");
            });
            // Add active class to current dot
            const currentDot = dots[currentIndex];
            if (currentDot) currentDot.classList.add("active");
        });
    }
}

},{"keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5ZBzB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBilderSlider", ()=>initBilderSlider);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initBilderSlider = ()=>{
    console.log("Initializing Bilder Slider");
    // Find the slider container
    const sliderContainer = document.getElementById("is-bilder");
    if (!sliderContainer) {
        console.warn("Bilder Slider container not found (ID: is-bilder)");
        return;
    }
    // Initialize Keen Slider
    const slider = new (0, _keenSliderDefault.default)("#is-bilder", {
        loop: true,
        renderMode: "performance",
        drag: true,
        slides: {
            perView: 3,
            spacing: 24
        },
        created (s) {
            console.log("Bilder Slider created");
            // Set up navigation arrows and dots
            setupNavigation(s);
        },
        breakpoints: {
            "(max-width: 991px)": {
                slides: {
                    perView: 2,
                    spacing: 16
                }
            },
            "(max-width: 479px)": {
                slides: {
                    perView: 1,
                    spacing: 16
                }
            }
        }
    });
    // For auto-sliding functionality
    let autoplayInterval = null;
    // Function to start autoplay
    const startAutoplay = ()=>{
        stopAutoplay(); // Clear any existing interval first
        autoplayInterval = window.setInterval(()=>{
            if (slider) slider.next();
        }, 4000); // Change slide every 4 seconds
    };
    // Function to stop autoplay
    const stopAutoplay = ()=>{
        if (autoplayInterval !== null) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    };
    // Start autoplay on creation
    startAutoplay();
    // Pause autoplay when user interacts with the slider
    sliderContainer.addEventListener("mouseover", stopAutoplay);
    sliderContainer.addEventListener("touchstart", stopAutoplay, {
        passive: true
    });
    // Resume autoplay when user stops interacting
    sliderContainer.addEventListener("mouseout", startAutoplay);
    sliderContainer.addEventListener("touchend", startAutoplay);
    // Clean up on page leave/component unmount
    return ()=>{
        stopAutoplay();
        if (slider) slider.destroy();
    };
};
// Helper function to set up custom navigation
function setupNavigation(slider) {
    // Look for previous and next buttons
    const prevButton = document.querySelector('[data-bilder-slider="prev"]');
    const nextButton = document.querySelector('[data-bilder-slider="next"]');
    // Add click handlers if buttons exist
    if (prevButton) prevButton.addEventListener("click", ()=>{
        slider.prev();
    });
    if (nextButton) nextButton.addEventListener("click", ()=>{
        slider.next();
    });
    // Add dots/pagination
    const dotsContainer = document.querySelector('[data-bilder-slider="dots"]');
    if (dotsContainer) {
        // Create dots based on number of slides
        const slideCount = slider.track.details.slides.length;
        // Empty the container first
        dotsContainer.innerHTML = "";
        // Add a dot for each slide
        for(let i = 0; i < slideCount; i++){
            const dot = document.createElement("button");
            dot.classList.add("bilder-slider-dot");
            // Mark the first dot as active
            if (i === 0) dot.classList.add("active");
            // Add click handler
            dot.addEventListener("click", ()=>{
                slider.moveToIdx(i);
            });
            dotsContainer.appendChild(dot);
        }
        // Update active dot when slide changes
        slider.on("slideChanged", (s)=>{
            const dots = dotsContainer.querySelectorAll(".bilder-slider-dot");
            const currentIndex = s.track.details.rel;
            // Remove active class from all dots
            dots.forEach((dot)=>{
                dot.classList.remove("active");
            });
            // Add active class to current dot
            const currentDot = dots[currentIndex];
            if (currentDot) currentDot.classList.add("active");
        });
    }
}

},{"keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8zJl2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFotoproduktionMotion", ()=>initFotoproduktionMotion);
var _motion = require("motion");
const initFotoproduktionMotion = ()=>{
    console.log("\uD83D\uDCF7 Initializing Fotoproduktion subpage animations");
    // Animate the hero section elements
    const animateHero = ()=>{
        // Target hero section elements
        const heroHeading = document.querySelector(".section_fullscreenland .heading-style-h1");
        const heroParagraph = document.querySelector(".section_fullscreenland .text-size-medium");
        const heroButtons = document.querySelectorAll(".section_fullscreenland .button");
        // Set initial state and animate heading
        if (heroHeading) {
            heroHeading.style.opacity = "0";
            heroHeading.style.transform = "translateY(30px)";
            (0, _motion.animate)(heroHeading, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    30,
                    0
                ]
            }, {
                duration: 0.8,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ],
                delay: 0.3
            });
        }
        // Set initial state and animate paragraph
        if (heroParagraph) {
            heroParagraph.style.opacity = "0";
            heroParagraph.style.transform = "translateY(20px)";
            (0, _motion.animate)(heroParagraph, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    20,
                    0
                ]
            }, {
                duration: 0.7,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ],
                delay: 0.5
            });
        }
        // Staggered animation for buttons
        heroButtons.forEach((button, i)=>{
            if (button) {
                const buttonElement = button;
                buttonElement.style.opacity = "0";
                buttonElement.style.transform = "translateY(15px) scale(0.95)";
                (0, _motion.animate)(buttonElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }, {
                    duration: 0.5,
                    delay: 0.7 + i * 0.1,
                    easing: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ]
                });
            }
        });
    };
    // Animate the gallery/slider section
    const animateGallerySection = ()=>{
        // Target gallery section elements
        const gallerySection = document.querySelector(".section_is-bilder-wrapper");
        const galleryHeading = gallerySection?.querySelector(".heading-style-h2");
        const galleryTagline = gallerySection?.querySelector(".text-style-tagline");
        const galleryParagraph = gallerySection?.querySelector(".text-size-medium");
        const galleryButtons = gallerySection?.querySelectorAll(".button");
        // Add scroll-triggered animations for the gallery section
        if (gallerySection) {
            if (galleryTagline) {
                galleryTagline.style.opacity = "0";
                galleryTagline.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(galleryTagline, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: gallerySection,
                    offset: [
                        "start 80%",
                        "start 60%"
                    ]
                });
            }
            if (galleryHeading) {
                galleryHeading.style.opacity = "0";
                galleryHeading.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(galleryHeading, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: gallerySection,
                    offset: [
                        "start 75%",
                        "start 55%"
                    ]
                });
            }
            if (galleryParagraph) {
                galleryParagraph.style.opacity = "0";
                galleryParagraph.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(galleryParagraph, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: gallerySection,
                    offset: [
                        "start 70%",
                        "start 50%"
                    ]
                });
            }
            // Animate the slider as a whole
            const sliderWrapper = document.getElementById("is-bilder");
            if (sliderWrapper) {
                sliderWrapper.style.opacity = "0";
                sliderWrapper.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(sliderWrapper, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: gallerySection,
                    offset: [
                        "start 65%",
                        "start 45%"
                    ]
                });
            }
            // Animation for buttons
            if (galleryButtons) galleryButtons.forEach((button, i)=>{
                const buttonElement = button;
                buttonElement.style.opacity = "0";
                buttonElement.style.transform = "translateY(15px)";
                (0, _motion.scroll)((0, _motion.animate)(buttonElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ]
                }), {
                    target: gallerySection,
                    offset: [
                        `start ${60 - i * 5}%`,
                        `start ${40 - i * 5}%`
                    ]
                });
            });
        }
    };
    // Animate services/features section (usually layout241 or layout249)
    const animateFeaturesSection = ()=>{
        // Try to find either layout type
        const featuresSection = document.querySelector(".section_layout241") || document.querySelector(".section_layout249");
        const featuresHeading = featuresSection?.querySelector(".heading-style-h2");
        const featuresTagline = featuresSection?.querySelector(".text-style-tagline");
        const featuresParagraph = featuresSection?.querySelector(".text-size-medium");
        const featuresItems = featuresSection?.querySelectorAll(".layout241_item, .layout249_item");
        const featuresButtons = featuresSection?.querySelectorAll(".button");
        // Add scroll-triggered animations
        if (featuresSection) {
            if (featuresTagline) {
                featuresTagline.style.opacity = "0";
                featuresTagline.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(featuresTagline, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        "start 80%",
                        "start 60%"
                    ]
                });
            }
            if (featuresHeading) {
                featuresHeading.style.opacity = "0";
                featuresHeading.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(featuresHeading, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        "start 75%",
                        "start 55%"
                    ]
                });
            }
            if (featuresParagraph) {
                featuresParagraph.style.opacity = "0";
                featuresParagraph.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(featuresParagraph, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        "start 70%",
                        "start 50%"
                    ]
                });
            }
            // Staggered animation for feature items
            if (featuresItems) featuresItems.forEach((item, i)=>{
                const itemElement = item;
                const itemImg = itemElement.querySelector("img");
                const itemHeading = itemElement.querySelector(".heading-style-h4");
                const itemText = itemElement.querySelector("p");
                // For the item container
                itemElement.style.opacity = "0";
                itemElement.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(itemElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        `start ${70 - i * 5}%`,
                        `start ${50 - i * 5}%`
                    ]
                });
                // For elements inside each item
                if (itemImg) {
                    itemImg.style.opacity = "0";
                    itemImg.style.transform = "scale(0.9)";
                    (0, _motion.scroll)((0, _motion.animate)(itemImg, {
                        opacity: [
                            0,
                            1
                        ],
                        scale: [
                            0.9,
                            1
                        ]
                    }), {
                        target: featuresSection,
                        offset: [
                            `start ${65 - i * 5}%`,
                            `start ${45 - i * 5}%`
                        ]
                    });
                }
            });
            // Animation for buttons
            if (featuresButtons) featuresButtons.forEach((button, i)=>{
                const buttonElement = button;
                buttonElement.style.opacity = "0";
                buttonElement.style.transform = "translateY(15px)";
                (0, _motion.scroll)((0, _motion.animate)(buttonElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        `start ${60 - i * 5}%`,
                        `start ${40 - i * 5}%`
                    ]
                });
            });
        }
    };
    // Animate CTA section
    const animateCtaSection = ()=>{
        const ctaSection = document.querySelector(".section_cta3");
        const ctaHeading = ctaSection?.querySelector(".heading-style-h2");
        const ctaParagraph = ctaSection?.querySelector(".text-size-medium");
        const ctaButton = ctaSection?.querySelector(".button");
        // Add scroll-triggered animations
        if (ctaSection) {
            if (ctaHeading) {
                ctaHeading.style.opacity = "0";
                ctaHeading.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(ctaHeading, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: ctaSection,
                    offset: [
                        "start 80%",
                        "start 60%"
                    ]
                });
            }
            if (ctaParagraph) {
                ctaParagraph.style.opacity = "0";
                ctaParagraph.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(ctaParagraph, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: ctaSection,
                    offset: [
                        "start 75%",
                        "start 55%"
                    ]
                });
            }
            if (ctaButton) {
                ctaButton.style.opacity = "0";
                ctaButton.style.transform = "translateY(15px) scale(0.95)";
                (0, _motion.scroll)((0, _motion.animate)(ctaButton, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }), {
                    target: ctaSection,
                    offset: [
                        "start 70%",
                        "start 50%"
                    ]
                });
            }
        }
    };
    // Execute all animations
    animateHero();
    animateGallerySection();
    animateFeaturesSection();
    animateCtaSection();
};

},{"motion":"7nUvx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6qU9w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initVideoproduktionSubpageMotion", ()=>initVideoproduktionSubpageMotion);
var _motion = require("motion");
const initVideoproduktionSubpageMotion = ()=>{
    console.log("\uD83C\uDFAC Initializing Videoproduktion subpage animations");
    // Animate the hero section
    const animateHero = ()=>{
        const heroHeading = document.querySelector(".section_fullscreenland .heading-style-h1");
        const heroParagraph = document.querySelector(".section_fullscreenland .text-size-medium");
        const heroButtons = document.querySelectorAll(".section_fullscreenland .button");
        // Set initial states
        if (heroHeading) {
            heroHeading.style.opacity = "0";
            heroHeading.style.transform = "translateY(30px)";
            (0, _motion.animate)(heroHeading, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    30,
                    0
                ]
            }, {
                duration: 0.8,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ],
                delay: 0.3
            });
        }
        if (heroParagraph) {
            heroParagraph.style.opacity = "0";
            heroParagraph.style.transform = "translateY(20px)";
            (0, _motion.animate)(heroParagraph, {
                opacity: [
                    0,
                    1
                ],
                y: [
                    20,
                    0
                ]
            }, {
                duration: 0.7,
                easing: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ],
                delay: 0.5
            });
        }
        heroButtons.forEach((button, i)=>{
            if (button) {
                const buttonElement = button;
                buttonElement.style.opacity = "0";
                buttonElement.style.transform = "translateY(15px) scale(0.95)";
                (0, _motion.animate)(buttonElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }, {
                    duration: 0.5,
                    delay: 0.7 + i * 0.1,
                    easing: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ]
                });
            }
        });
    };
    // Animate layout section (Layout241)
    const animateLayoutSection = ()=>{
        const layoutSection = document.querySelector(".section_layout241");
        const layoutHeading = layoutSection?.querySelector(".heading-style-h2");
        const layoutTagline = layoutSection?.querySelector(".text-style-tagline");
        const layoutParagraph = layoutSection?.querySelector(".text-size-medium");
        const layoutItems = layoutSection?.querySelectorAll(".layout241_item");
        const layoutButtons = layoutSection?.querySelectorAll(".button");
        // Add scroll-triggered animations
        if (layoutSection) {
            if (layoutTagline) {
                layoutTagline.style.opacity = "0";
                layoutTagline.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(layoutTagline, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: layoutSection,
                    offset: [
                        "start 80%",
                        "start 60%"
                    ]
                });
            }
            if (layoutHeading) {
                layoutHeading.style.opacity = "0";
                layoutHeading.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(layoutHeading, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: layoutSection,
                    offset: [
                        "start 75%",
                        "start 55%"
                    ]
                });
            }
            if (layoutParagraph) {
                layoutParagraph.style.opacity = "0";
                layoutParagraph.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(layoutParagraph, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: layoutSection,
                    offset: [
                        "start 70%",
                        "start 50%"
                    ]
                });
            }
            // Staggered animation for items
            layoutItems?.forEach((item, i)=>{
                const itemElement = item;
                itemElement.style.opacity = "0";
                itemElement.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(itemElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: layoutSection,
                    offset: [
                        `start ${65 - i * 5}%`,
                        `start ${45 - i * 5}%`
                    ]
                });
            });
            // Staggered animation for buttons
            layoutButtons?.forEach((button, i)=>{
                const buttonElement = button;
                buttonElement.style.opacity = "0";
                buttonElement.style.transform = "translateY(15px)";
                (0, _motion.scroll)((0, _motion.animate)(buttonElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ]
                }), {
                    target: layoutSection,
                    offset: [
                        `start ${60 - i * 5}%`,
                        `start ${40 - i * 5}%`
                    ]
                });
            });
        }
    };
    // Animate video player section
    const animateVideoPlayerSection = ()=>{
        const videoSection = document.querySelector(".section_professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion");
        const videoHeading = videoSection?.querySelector(".heading-style-h2");
        const videoTagline = videoSection?.querySelector(".text-style-tagline");
        const videoParagraph = videoSection?.querySelector(".text-size-medium");
        const videoImage = videoSection?.querySelector(".professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_image");
        const videoItems = videoSection?.querySelectorAll(".professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_text-wrapper");
        const videoButtons = videoSection?.querySelectorAll(".button");
        // Add scroll-triggered animations
        if (videoSection) {
            if (videoTagline) {
                videoTagline.style.opacity = "0";
                videoTagline.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(videoTagline, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: videoSection,
                    offset: [
                        "start 80%",
                        "start 60%"
                    ]
                });
            }
            if (videoHeading) {
                videoHeading.style.opacity = "0";
                videoHeading.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(videoHeading, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: videoSection,
                    offset: [
                        "start 75%",
                        "start 55%"
                    ]
                });
            }
            if (videoParagraph) {
                videoParagraph.style.opacity = "0";
                videoParagraph.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(videoParagraph, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: videoSection,
                    offset: [
                        "start 70%",
                        "start 50%"
                    ]
                });
            }
            // Animate image if exists
            if (videoImage) {
                videoImage.style.opacity = "0";
                videoImage.style.transform = "translateX(30px) scale(0.95)";
                (0, _motion.scroll)((0, _motion.animate)(videoImage, {
                    opacity: [
                        0,
                        1
                    ],
                    x: [
                        30,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }), {
                    target: videoSection,
                    offset: [
                        "start 70%",
                        "start 40%"
                    ]
                });
            }
            // Staggered animation for items
            videoItems?.forEach((item, i)=>{
                const itemElement = item;
                itemElement.style.opacity = "0";
                itemElement.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(itemElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: videoSection,
                    offset: [
                        `start ${65 - i * 5}%`,
                        `start ${45 - i * 5}%`
                    ]
                });
            });
            // Animation for buttons
            videoButtons?.forEach((button, i)=>{
                const buttonElement = button;
                buttonElement.style.opacity = "0";
                buttonElement.style.transform = "translateY(15px)";
                (0, _motion.scroll)((0, _motion.animate)(buttonElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ]
                }), {
                    target: videoSection,
                    offset: [
                        `start ${60 - i * 5}%`,
                        `start ${40 - i * 5}%`
                    ]
                });
            });
        }
    };
    // Animate features section (section_layout249)
    const animateFeaturesSection = ()=>{
        const featuresSection = document.querySelector(".section_layout249");
        const featuresHeading = featuresSection?.querySelector(".heading-style-h2");
        const featuresTagline = featuresSection?.querySelector(".text-style-tagline");
        const featuresParagraph = featuresSection?.querySelector(".text-size-medium");
        const featuresItems = featuresSection?.querySelectorAll(".layout249_item");
        const featuresButtons = featuresSection?.querySelectorAll(".button");
        // Add scroll-triggered animations
        if (featuresSection) {
            if (featuresTagline) {
                featuresTagline.style.opacity = "0";
                featuresTagline.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(featuresTagline, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        "start 80%",
                        "start 60%"
                    ]
                });
            }
            if (featuresHeading) {
                featuresHeading.style.opacity = "0";
                featuresHeading.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(featuresHeading, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        "start 75%",
                        "start 55%"
                    ]
                });
            }
            if (featuresParagraph) {
                featuresParagraph.style.opacity = "0";
                featuresParagraph.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(featuresParagraph, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        "start 70%",
                        "start 50%"
                    ]
                });
            }
            // Staggered animation for feature items
            featuresItems?.forEach((item, i)=>{
                const itemElement = item;
                const itemImg = itemElement.querySelector(".layout249_image");
                const itemHeading = itemElement.querySelector(".heading-style-h4");
                const itemText = itemElement.querySelector("p");
                if (itemImg) {
                    itemImg.style.opacity = "0";
                    itemImg.style.transform = "scale(0.9)";
                    (0, _motion.scroll)((0, _motion.animate)(itemImg, {
                        opacity: [
                            0,
                            1
                        ],
                        scale: [
                            0.9,
                            1
                        ]
                    }), {
                        target: featuresSection,
                        offset: [
                            `start ${70 - i * 5}%`,
                            `start ${50 - i * 5}%`
                        ]
                    });
                }
                if (itemHeading) {
                    itemHeading.style.opacity = "0";
                    itemHeading.style.transform = "translateY(20px)";
                    (0, _motion.scroll)((0, _motion.animate)(itemHeading, {
                        opacity: [
                            0,
                            1
                        ],
                        y: [
                            20,
                            0
                        ]
                    }), {
                        target: featuresSection,
                        offset: [
                            `start ${65 - i * 5}%`,
                            `start ${45 - i * 5}%`
                        ]
                    });
                }
                if (itemText) {
                    itemText.style.opacity = "0";
                    itemText.style.transform = "translateY(15px)";
                    (0, _motion.scroll)((0, _motion.animate)(itemText, {
                        opacity: [
                            0,
                            1
                        ],
                        y: [
                            15,
                            0
                        ]
                    }), {
                        target: featuresSection,
                        offset: [
                            `start ${60 - i * 5}%`,
                            `start ${40 - i * 5}%`
                        ]
                    });
                }
            });
            // Animation for buttons
            featuresButtons?.forEach((button, i)=>{
                const buttonElement = button;
                buttonElement.style.opacity = "0";
                buttonElement.style.transform = "translateY(15px)";
                (0, _motion.scroll)((0, _motion.animate)(buttonElement, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ]
                }), {
                    target: featuresSection,
                    offset: [
                        `start ${55 - i * 5}%`,
                        `start ${35 - i * 5}%`
                    ]
                });
            });
        }
    };
    // Animate CTA section
    const animateCtaSection = ()=>{
        const ctaSection = document.querySelector(".section_cta3");
        const ctaHeading = ctaSection?.querySelector(".heading-style-h2");
        const ctaParagraph = ctaSection?.querySelector(".text-size-medium");
        const ctaButton = ctaSection?.querySelector(".button");
        // Add scroll-triggered animations
        if (ctaSection) {
            if (ctaHeading) {
                ctaHeading.style.opacity = "0";
                ctaHeading.style.transform = "translateY(30px)";
                (0, _motion.scroll)((0, _motion.animate)(ctaHeading, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        30,
                        0
                    ]
                }), {
                    target: ctaSection,
                    offset: [
                        "start 80%",
                        "start 60%"
                    ]
                });
            }
            if (ctaParagraph) {
                ctaParagraph.style.opacity = "0";
                ctaParagraph.style.transform = "translateY(20px)";
                (0, _motion.scroll)((0, _motion.animate)(ctaParagraph, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        20,
                        0
                    ]
                }), {
                    target: ctaSection,
                    offset: [
                        "start 75%",
                        "start 55%"
                    ]
                });
            }
            if (ctaButton) {
                ctaButton.style.opacity = "0";
                ctaButton.style.transform = "translateY(15px) scale(0.95)";
                (0, _motion.scroll)((0, _motion.animate)(ctaButton, {
                    opacity: [
                        0,
                        1
                    ],
                    y: [
                        15,
                        0
                    ],
                    scale: [
                        0.95,
                        1
                    ]
                }), {
                    target: ctaSection,
                    offset: [
                        "start 70%",
                        "start 50%"
                    ]
                });
            }
        }
    };
    // Execute all animations
    animateHero();
    animateLayoutSection();
    animateVideoPlayerSection();
    animateFeaturesSection();
    animateCtaSection();
};

},{"motion":"7nUvx","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2dpWZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBtsSlider", ()=>initBtsSlider);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initBtsSlider = ()=>{
    console.log("Initializing BTS Slider");
    // Find the slider container
    const sliderContainer = document.getElementById("bts-slider");
    if (!sliderContainer) {
        console.warn("BTS Slider container not found (ID: bts-slider)");
        return;
    }
    // Initialize Keen Slider
    const slider = new (0, _keenSliderDefault.default)("#bts-slider", {
        loop: true,
        renderMode: "performance",
        drag: true,
        slides: {
            perView: 4,
            spacing: 24
        },
        created (s) {
            console.log("BTS Slider created");
            setupNavigation(s);
        },
        breakpoints: {
            "(max-width: 991px)": {
                slides: {
                    perView: 2,
                    spacing: 16
                }
            },
            "(max-width: 479px)": {
                slides: {
                    perView: 1,
                    spacing: 16
                }
            }
        }
    });
    // For auto-sliding functionality
    let autoplayInterval = null;
    // Function to start autoplay
    const startAutoplay = ()=>{
        stopAutoplay(); // Clear any existing interval first
        autoplayInterval = window.setInterval(()=>{
            if (slider) slider.next();
        }, 4000); // Change slide every 4 seconds
    };
    // Function to stop autoplay
    const stopAutoplay = ()=>{
        if (autoplayInterval !== null) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    };
    // Start autoplay on creation
    startAutoplay();
    // Pause autoplay when user interacts with the slider
    sliderContainer.addEventListener("mouseover", stopAutoplay);
    sliderContainer.addEventListener("touchstart", stopAutoplay, {
        passive: true
    });
    // Resume autoplay when user stops interacting
    sliderContainer.addEventListener("mouseout", startAutoplay);
    sliderContainer.addEventListener("touchend", startAutoplay);
    // Clean up on page leave/component unmount
    return ()=>{
        stopAutoplay();
        if (slider) slider.destroy();
    };
};
// Helper function to set up custom navigation
function setupNavigation(slider) {
    // Look for previous and next buttons
    const prevButton = document.querySelector('[data-bts-slider="prev"]');
    const nextButton = document.querySelector('[data-bts-slider="next"]');
    // Add click handlers if buttons exist
    if (prevButton) prevButton.addEventListener("click", ()=>{
        slider.prev();
    });
    if (nextButton) nextButton.addEventListener("click", ()=>{
        slider.next();
    });
    // Add dots/pagination
    const dotsContainer = document.querySelector('[data-bts-slider="dots"]');
    if (dotsContainer) {
        // Create dots based on number of slides
        const slideCount = slider.track.details.slides.length;
        // Empty the container first
        dotsContainer.innerHTML = "";
        // Add a dot for each slide
        for(let i = 0; i < slideCount; i++){
            const dot = document.createElement("button");
            dot.classList.add("bts-slider-dot");
            // Mark the first dot as active
            if (i === 0) dot.classList.add("active");
            // Add click handler
            dot.addEventListener("click", ()=>{
                slider.moveToIdx(i);
            });
            dotsContainer.appendChild(dot);
        }
    }
}

},{"keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"iJweE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initReferenceSlider", ()=>initReferenceSlider);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initReferenceSlider = ()=>{
    const animation = {
        duration: 75000,
        easing: (t)=>t
    };
    let isHovering = false;
    var refSlider = new (0, _keenSliderDefault.default)("#ref-slider", {
        loop: true,
        renderMode: "performance",
        drag: true,
        mode: "snap",
        slides: {
            perView: 3,
            spacing: 16
        },
        created (s) {
            s.moveToIdx(5, true, animation);
        },
        updated (s) {
            if (!isHovering) s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded (s) {
            if (!isHovering) s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        breakpoints: {
            "(max-width: 768px)": {
                slides: {
                    perView: 2,
                    spacing: 16
                }
            },
            "(max-width: 500px)": {
                slides: {
                    perView: 1
                }
            }
        }
    });
    // Add hover listeners directly to the slider element
    const sliderElement = document.querySelector("#ref-slider");
    if (sliderElement) {
        sliderElement.addEventListener("mouseenter", ()=>{
            isHovering = true;
            // Stop current animation
            refSlider.animator.stop();
        });
        sliderElement.addEventListener("mouseleave", ()=>{
            isHovering = false;
            refSlider.moveToIdx(refSlider.track.details.abs + 5, true, animation);
        });
    }
};

},{"keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"bsvlh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initBeispiel", ()=>initBeispiel);
var _plyr = require("plyr");
var _plyrDefault = parcelHelpers.interopDefault(_plyr);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initBeispiel = ()=>{
    console.log("savati MOIIIN!");
    const controls = [
        "play",
        "current-time",
        "duration",
        "mute",
        "volume",
        "fullscreen"
    ];
    // Initialize Plyr with options to ensure poster generation from video
    const player = (0, _plyrDefault.default).setup(".js-player", {
        controls,
        loadSprite: true,
        blankVideo: "",
        previewThumbnails: {
            enabled: true,
            src: ""
        },
        autoplay: false,
        autopause: true,
        resetOnEnd: true,
        // When a poster isn't explicitly defined, Plyr will use the first frame as poster
        invertTime: false
    });
    // Select all elements with class .keen-slider.beispiel
    document.querySelectorAll(".keen-slider.beispiel").forEach((sliderElement, index)=>{
        // Initialize Keen Slider with proper configuration
        const beispielSlider = new (0, _keenSliderDefault.default)(sliderElement, {
            loop: true,
            renderMode: "performance",
            drag: true,
            slides: {
                perView: 3,
                spacing: 16
            },
            breakpoints: {
                "(max-width: 850px)": {
                    slides: {
                        perView: 2,
                        spacing: 16
                    }
                },
                "(max-width: 500px)": {
                    slides: {
                        perView: 1
                    }
                }
            }
        });
        // Create navigation buttons container
        const navigationContainer = document.createElement("div");
        navigationContainer.className = "beispiel-navigation";
        // Create prev button
        const prevButton = document.createElement("button");
        prevButton.className = "beispiel-prev";
        prevButton.innerHTML = "<";
        prevButton.addEventListener("click", ()=>beispielSlider.prev());
        // Create next button
        const nextButton = document.createElement("button");
        nextButton.className = "beispiel-next";
        nextButton.innerHTML = ">";
        nextButton.addEventListener("click", ()=>beispielSlider.next());
        // Add buttons to container
        navigationContainer.appendChild(prevButton);
        navigationContainer.appendChild(nextButton);
        // Add navigation container after the slider
        sliderElement.parentNode?.insertBefore(navigationContainer, sliderElement.nextSibling);
        // Add basic styles for buttons
        const style = document.createElement("style");
        style.textContent = `
      .beispiel-navigation {
        display: flex;
        justify-content: start;
        gap: 1rem;
        margin-top: 1rem;
      }
      .beispiel-prev, .beispiel-next {
        background: #cd6663;
        border: none;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        color: #e4e4e4;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .beispiel-prev:hover, .beispiel-next:hover {
        background: #e5e5e5;
        color: #cd6663;
        transform: scale(1.05);
      }
    `;
        document.head.appendChild(style);
    });
};

},{"plyr":"3NhIP","keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9qiDU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFotoBeispielSlider", ()=>initFotoBeispielSlider);
var _keenSlider = require("keen-slider");
var _keenSliderDefault = parcelHelpers.interopDefault(_keenSlider);
const initFotoBeispielSlider = (animationSpeed = 10000)=>{
    // Select all elements with either class .keen-slider.foto-beispiel or .keen-slider.beispiel
    document.querySelectorAll(".keen-slider.beispiel").forEach((sliderElement, index)=>{
        // Initialize Keen Slider with proper configuration and autoplay
        const fotoBeispielSlider = new (0, _keenSliderDefault.default)(sliderElement, {
            loop: true,
            renderMode: "performance",
            drag: true,
            mode: "free",
            slides: {
                perView: 3,
                spacing: 16
            },
            breakpoints: {
                "(max-width: 850px)": {
                    slides: {
                        perView: 2,
                        spacing: 16
                    }
                },
                "(max-width: 500px)": {
                    slides: {
                        perView: 1
                    }
                }
            },
            // Add autoplay animation
            created (s) {
                s.moveToIdx(s.track.details.abs + 1, true, {
                    duration: animationSpeed
                });
            },
            updated (s) {
                s.moveToIdx(s.track.details.abs + 1, true, {
                    duration: animationSpeed
                });
            },
            animationEnded (s) {
                s.moveToIdx(s.track.details.abs + 1, true, {
                    duration: animationSpeed
                });
            }
        });
    });
};

},{"keen-slider":"4pozR","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dNIfi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Export the multi-step form module
parcelHelpers.export(exports, "initMultiStepForm", ()=>(0, _multiStepForm.initMultiStepForm));
parcelHelpers.export(exports, "helloWorldFn", ()=>helloWorldFn);
var _multiStepForm = require("./multiStepForm");
const helloWorldFn = ()=>{
    console.log("Hello world! \u2728");
    console.log("Edit the ./src/app.ts file to get started");
};

},{"./multiStepForm":"kk3th","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kk3th":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMultiStepForm", ()=>initMultiStepForm);
const initMultiStepForm = ()=>{
    console.log("Initializing multi-step form");
    // Get all steps
    const steps = document.querySelectorAll('[data-form="step"]');
    let currentStepIndex = 0;
    // Function to validate the current step
    const validateStep = (stepIndex)=>{
        const step = steps[stepIndex];
        const requiredFields = step.querySelectorAll('input[required], select[required]');
        let isValid = true;
        // Reset error states
        requiredFields.forEach((field)=>{
            const inputElement = field;
            inputElement.classList.remove('error-field');
            // Find and remove any existing error message
            const existingErrorMsg = inputElement.parentElement?.nextElementSibling;
            if (existingErrorMsg && existingErrorMsg.classList.contains('field-error-message')) existingErrorMsg.remove();
        });
        // Check each required field
        requiredFields.forEach((field)=>{
            const inputElement = field;
            if (!inputElement.value.trim()) {
                isValid = false;
                inputElement.classList.add('error-field');
                // Create error message element
                const errorMsg = document.createElement('div');
                errorMsg.className = 'field-error-message';
                errorMsg.textContent = 'Pflichtfeld';
                // Insert error message after the input's parent element
                const fieldWrapper = inputElement.closest('.multi-form13_field-wrapper');
                if (fieldWrapper) {
                    // Insert after the input field or its container
                    const inputContainer = inputElement.parentElement;
                    if (inputContainer && inputContainer !== fieldWrapper) inputContainer.after(errorMsg);
                    else inputElement.after(errorMsg);
                } else // Fallback if field wrapper not found
                inputElement.after(errorMsg);
            }
        });
        return isValid;
    };
    // Function to show a specific step
    const showStep = (stepIndex)=>{
        steps.forEach((step, index)=>{
            if (index === stepIndex) step.style.display = 'block';
            else step.style.display = 'none';
        });
        // Update progress indicators
        updateProgressIndicators(stepIndex);
    };
    // Function to update progress indicators
    const updateProgressIndicators = (currentStep)=>{
        const progressIndicators = document.querySelectorAll('[data-form="custom-progress-indicator"]');
        progressIndicators.forEach((indicator, index)=>{
            // Remove all classes first
            indicator.classList.remove('progress-current', 'completed');
            if (index < currentStep) // Previous steps get completed class
            indicator.classList.add('completed');
            else if (index === currentStep) // Current step gets progress-current class
            indicator.classList.add('progress-current');
        // Future steps have no special class
        });
    };
    // Handle radio button styling
    const setupRadioButtons = ()=>{
        // Get all radio buttons
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        // Add click event listeners to each radio button
        radioButtons.forEach((radio)=>{
            const radioInput = radio;
            // Initial setup - check if radio is already selected
            if (radioInput.checked) {
                const label = radioInput.closest('.multi-form13_radio');
                if (label) {
                    label.classList.add('is-active-inputactive');
                    // Style the letter element if it exists
                    const letterElement = label.querySelector('.multi-form13_radio-letter');
                    if (letterElement) letterElement.classList.add('active');
                    // Style the label text
                    const labelText = label.querySelector('.multi-form13_radio-label');
                    if (labelText) labelText.classList.add('active');
                }
            }
            // Add click event listener
            radioInput.addEventListener('click', ()=>{
                // Get all radio buttons in the same group
                const name = radioInput.getAttribute('name');
                const groupRadios = document.querySelectorAll(`input[name="${name}"]`);
                // Reset all radio buttons in the group
                groupRadios.forEach((groupRadio)=>{
                    const groupLabel = groupRadio.closest('.multi-form13_radio');
                    if (groupLabel) {
                        groupLabel.classList.remove('is-active-inputactive');
                        // Reset letter styling
                        const letterElement = groupLabel.querySelector('.multi-form13_radio-letter');
                        if (letterElement) letterElement.classList.remove('active');
                        // Reset label text styling
                        const labelText = groupLabel.querySelector('.multi-form13_radio-label');
                        if (labelText) labelText.classList.remove('active');
                    }
                });
                // Style the selected radio button
                const label = radioInput.closest('.multi-form13_radio');
                if (label) {
                    label.classList.add('is-active-inputactive');
                    // Style the letter element
                    const letterElement = label.querySelector('.multi-form13_radio-letter');
                    if (letterElement) letterElement.classList.add('active');
                    // Style the label text
                    const labelText = label.querySelector('.multi-form13_radio-label');
                    if (labelText) labelText.classList.add('active');
                }
            });
        });
    };
    // Handle next button clicks
    const nextButtons = document.querySelectorAll('[data-form="next-btn"]');
    nextButtons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            e.preventDefault();
            if (validateStep(currentStepIndex)) {
                currentStepIndex++;
                if (currentStepIndex < steps.length) showStep(currentStepIndex);
            }
        });
    });
    // Handle back button clicks
    const backButtons = document.querySelectorAll('[data-form="back-btn"]');
    backButtons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            e.preventDefault();
            if (currentStepIndex > 0) {
                currentStepIndex--;
                showStep(currentStepIndex);
            }
        });
    });
    // Handle form submission
    const form = document.querySelector('#wf-form-Multi-form-13');
    if (form) form.addEventListener('submit', (event)=>{
        // Validate the final step before submission
        if (!validateStep(currentStepIndex)) {
            event.preventDefault();
            return;
        }
        // If all validations pass, allow the form to submit
        console.log('Form submitted');
    });
    else console.error("Form element not found");
    // Initialize the form by showing the first step
    if (steps.length > 0) {
        showStep(0);
        // Setup radio buttons after showing the first step
        setupRadioButtons();
    } else console.error("No form steps found");
    // Add CSS for error styling and radio button styling
    const style = document.createElement('style');
    style.textContent = `
    .error-field {
      border-color: #ff3b30 !important;
    }
    .field-error-message {
      color: #ff3b30;
      font-size: 12px;
      margin-top: 4px;
      margin-bottom: 8px;
      display: block;
    }
    
    /* Radio button styling */
    .multi-form13_radio.is-active-inputactive {
      border-color: #000 !important;
      background-color: #fff !important;
    }
    
    .multi-form13_radio.is-active-inputactive .multi-form13_radio-label {
      color: #000 !important;
      font-weight: 500;
    }
    
    .multi-form13_radio-letter.active {
      background-color: #fff !important;
      color: #000 !important;
    }
    
    .multi-form13_radio-icon.w-radio-input.w--redirected-checked {
      background-color: #fff !important;
      border-color: #000 !important;
    }
  `;
    document.head.appendChild(style);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cFVXu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCaptcha", ()=>initCaptcha);
const initCaptcha = ()=>{
    $(function() {
        $('#email-form').ebcaptcha(); //Add this ID to your Form, or replace this ID with your Form ID
    });
    (function($1) {
        jQuery.fn.ebcaptcha = function(options) {
            var element = this;
            var input = this.find('#captchainput'); // Add this ID to your input field which user will use to answer the question
            var label = this.find('#captchatext'); // Add this ID to the field label -- this will have the maths question
            $1(element).find('input[type=submit]').attr('disabled', 'disabled');
            var randomNr1 = 0;
            var randomNr2 = 0;
            var totalNr = 0;
            randomNr1 = Math.floor(Math.random() * 10);
            randomNr2 = Math.floor(Math.random() * 10);
            totalNr = randomNr1 + randomNr2;
            var texti = "Was ist " + randomNr1 + " + " + randomNr2;
            $1(label).text(texti);
            $1(input).keyup(function() {
                var nr = $1(this).val();
                if (nr == totalNr) $1(element).find('input[type=submit]').removeAttr('disabled');
                else $1(element).find('input[type=submit]').attr('disabled', 'disabled');
            });
            $1(document).keypress(function(e) {
                if (e.which == 13) {
                    if (element.find('input[type=submit]').is(':disabled') == true) {
                        e.preventDefault();
                        return false;
                    }
                }
            });
        };
    })(jQuery);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},["jeTtx"], "jeTtx", "parcelRequire94c2")

//# sourceMappingURL=app.js.map
