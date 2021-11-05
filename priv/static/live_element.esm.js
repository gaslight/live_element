var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// node_modules/phoenix/priv/static/phoenix.js
var require_phoenix = __commonJS({
  "node_modules/phoenix/priv/static/phoenix.js"(exports, module) {
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.Phoenix = t() : e.Phoenix = t();
    }(exports, function() {
      return function(e) {
        var t = {};
        function n(i) {
          if (t[i])
            return t[i].exports;
          var o = t[i] = { i, l: false, exports: {} };
          return e[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = e, n.c = t, n.d = function(e2, t2, i) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: i });
        }, n.r = function(e2) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2)
            return e2;
          if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
            return e2;
          var i = Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
            for (var o in e2)
              n.d(i, o, function(t3) {
                return e2[t3];
              }.bind(null, o));
          return i;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "", n(n.s = 0);
      }([function(e, t, n) {
        (function(t2) {
          e.exports = t2.Phoenix = n(2);
        }).call(this, n(1));
      }, function(e, t) {
        var n;
        n = function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (e2) {
          typeof window == "object" && (n = window);
        }
        e.exports = n;
      }, function(e, t, n) {
        "use strict";
        function i(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return a(e3);
          }(e2) || function(e3) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
              return Array.from(e3);
          }(e2) || s(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function o(e2) {
          return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          })(e2);
        }
        function r(e2, t2) {
          return function(e3) {
            if (Array.isArray(e3))
              return e3;
          }(e2) || function(e3, t3) {
            if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e3)))
              return;
            var n2 = [], i2 = true, o2 = false, r2 = void 0;
            try {
              for (var s2, a2 = e3[Symbol.iterator](); !(i2 = (s2 = a2.next()).done) && (n2.push(s2.value), !t3 || n2.length !== t3); i2 = true)
                ;
            } catch (e4) {
              o2 = true, r2 = e4;
            } finally {
              try {
                i2 || a2.return == null || a2.return();
              } finally {
                if (o2)
                  throw r2;
              }
            }
            return n2;
          }(e2, t2) || s(e2, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function s(e2, t2) {
          if (e2) {
            if (typeof e2 == "string")
              return a(e2, t2);
            var n2 = Object.prototype.toString.call(e2).slice(8, -1);
            return n2 === "Object" && e2.constructor && (n2 = e2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(n2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? a(e2, t2) : void 0;
          }
        }
        function a(e2, t2) {
          (t2 == null || t2 > e2.length) && (t2 = e2.length);
          for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++)
            i2[n2] = e2[n2];
          return i2;
        }
        function c(e2, t2) {
          if (!(e2 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(e2, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e2, i2.key, i2);
          }
        }
        function h(e2, t2, n2) {
          return t2 && u(e2.prototype, t2), n2 && u(e2, n2), e2;
        }
        n.r(t), n.d(t, "Channel", function() {
          return _;
        }), n.d(t, "Serializer", function() {
          return H;
        }), n.d(t, "Socket", function() {
          return U;
        }), n.d(t, "LongPoll", function() {
          return D;
        }), n.d(t, "Ajax", function() {
          return M;
        }), n.d(t, "Presence", function() {
          return N;
        });
        var l = typeof self != "undefined" ? self : null, f = typeof window != "undefined" ? window : null, d = l || f || void 0, p = 0, v = 1, y = 2, m = 3, g = "closed", k = "errored", b = "joined", j = "joining", C = "leaving", E = "phx_close", R = "phx_error", T = "phx_join", S = "phx_reply", w = "phx_leave", A = [E, R, T, S, w], L = "longpoll", x = "websocket", O = function(e2) {
          if (typeof e2 == "function")
            return e2;
          return function() {
            return e2;
          };
        }, P = function() {
          function e2(t2, n2, i2, o2) {
            c(this, e2), this.channel = t2, this.event = n2, this.payload = i2 || function() {
              return {};
            }, this.receivedResp = null, this.timeout = o2, this.timeoutTimer = null, this.recHooks = [], this.sent = false;
          }
          return h(e2, [{ key: "resend", value: function(e3) {
            this.timeout = e3, this.reset(), this.send();
          } }, { key: "send", value: function() {
            this.hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload(), ref: this.ref, join_ref: this.channel.joinRef() }));
          } }, { key: "receive", value: function(e3, t2) {
            return this.hasReceived(e3) && t2(this.receivedResp.response), this.recHooks.push({ status: e3, callback: t2 }), this;
          } }, { key: "reset", value: function() {
            this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = false;
          } }, { key: "matchReceive", value: function(e3) {
            var t2 = e3.status, n2 = e3.response;
            e3.ref;
            this.recHooks.filter(function(e4) {
              return e4.status === t2;
            }).forEach(function(e4) {
              return e4.callback(n2);
            });
          } }, { key: "cancelRefEvent", value: function() {
            this.refEvent && this.channel.off(this.refEvent);
          } }, { key: "cancelTimeout", value: function() {
            clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
          } }, { key: "startTimeout", value: function() {
            var e3 = this;
            this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function(t2) {
              e3.cancelRefEvent(), e3.cancelTimeout(), e3.receivedResp = t2, e3.matchReceive(t2);
            }), this.timeoutTimer = setTimeout(function() {
              e3.trigger("timeout", {});
            }, this.timeout);
          } }, { key: "hasReceived", value: function(e3) {
            return this.receivedResp && this.receivedResp.status === e3;
          } }, { key: "trigger", value: function(e3, t2) {
            this.channel.trigger(this.refEvent, { status: e3, response: t2 });
          } }]), e2;
        }(), _ = function() {
          function e2(t2, n2, i2) {
            var o2 = this;
            c(this, e2), this.state = g, this.topic = t2, this.params = O(n2 || {}), this.socket = i2, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = false, this.joinPush = new P(this, T, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new J(function() {
              o2.socket.isConnected() && o2.rejoin();
            }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function() {
              return o2.rejoinTimer.reset();
            })), this.stateChangeRefs.push(this.socket.onOpen(function() {
              o2.rejoinTimer.reset(), o2.isErrored() && o2.rejoin();
            })), this.joinPush.receive("ok", function() {
              o2.state = b, o2.rejoinTimer.reset(), o2.pushBuffer.forEach(function(e3) {
                return e3.send();
              }), o2.pushBuffer = [];
            }), this.joinPush.receive("error", function() {
              o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
            }), this.onClose(function() {
              o2.rejoinTimer.reset(), o2.socket.hasLogger() && o2.socket.log("channel", "close ".concat(o2.topic, " ").concat(o2.joinRef())), o2.state = g, o2.socket.remove(o2);
            }), this.onError(function(e3) {
              o2.socket.hasLogger() && o2.socket.log("channel", "error ".concat(o2.topic), e3), o2.isJoining() && o2.joinPush.reset(), o2.state = k, o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
            }), this.joinPush.receive("timeout", function() {
              o2.socket.hasLogger() && o2.socket.log("channel", "timeout ".concat(o2.topic, " (").concat(o2.joinRef(), ")"), o2.joinPush.timeout), new P(o2, w, O({}), o2.timeout).send(), o2.state = k, o2.joinPush.reset(), o2.socket.isConnected() && o2.rejoinTimer.scheduleTimeout();
            }), this.on(S, function(e3, t3) {
              o2.trigger(o2.replyEventName(t3), e3);
            });
          }
          return h(e2, [{ key: "join", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
            if (this.joinedOnce)
              throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
            return this.timeout = e3, this.joinedOnce = true, this.rejoin(), this.joinPush;
          } }, { key: "onClose", value: function(e3) {
            this.on(E, e3);
          } }, { key: "onError", value: function(e3) {
            return this.on(R, function(t2) {
              return e3(t2);
            });
          } }, { key: "on", value: function(e3, t2) {
            var n2 = this.bindingRef++;
            return this.bindings.push({ event: e3, ref: n2, callback: t2 }), n2;
          } }, { key: "off", value: function(e3, t2) {
            this.bindings = this.bindings.filter(function(n2) {
              return !(n2.event === e3 && (t2 === void 0 || t2 === n2.ref));
            });
          } }, { key: "canPush", value: function() {
            return this.socket.isConnected() && this.isJoined();
          } }, { key: "push", value: function(e3, t2) {
            var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.timeout;
            if (t2 = t2 || {}, !this.joinedOnce)
              throw new Error("tried to push '".concat(e3, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
            var i2 = new P(this, e3, function() {
              return t2;
            }, n2);
            return this.canPush() ? i2.send() : (i2.startTimeout(), this.pushBuffer.push(i2)), i2;
          } }, { key: "leave", value: function() {
            var e3 = this, t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
            this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = C;
            var n2 = function() {
              e3.socket.hasLogger() && e3.socket.log("channel", "leave ".concat(e3.topic)), e3.trigger(E, "leave");
            }, i2 = new P(this, w, O({}), t2);
            return i2.receive("ok", function() {
              return n2();
            }).receive("timeout", function() {
              return n2();
            }), i2.send(), this.canPush() || i2.trigger("ok", {}), i2;
          } }, { key: "onMessage", value: function(e3, t2, n2) {
            return t2;
          } }, { key: "isLifecycleEvent", value: function(e3) {
            return A.indexOf(e3) >= 0;
          } }, { key: "isMember", value: function(e3, t2, n2, i2) {
            return this.topic === e3 && (!i2 || i2 === this.joinRef() || !this.isLifecycleEvent(t2) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: e3, event: t2, payload: n2, joinRef: i2 }), false));
          } }, { key: "joinRef", value: function() {
            return this.joinPush.ref;
          } }, { key: "rejoin", value: function() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e3));
          } }, { key: "trigger", value: function(e3, t2, n2, i2) {
            var o2 = this.onMessage(e3, t2, n2, i2);
            if (t2 && !o2)
              throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
            for (var r2 = this.bindings.filter(function(t3) {
              return t3.event === e3;
            }), s2 = 0; s2 < r2.length; s2++) {
              r2[s2].callback(o2, n2, i2 || this.joinRef());
            }
          } }, { key: "replyEventName", value: function(e3) {
            return "chan_reply_".concat(e3);
          } }, { key: "isClosed", value: function() {
            return this.state === g;
          } }, { key: "isErrored", value: function() {
            return this.state === k;
          } }, { key: "isJoined", value: function() {
            return this.state === b;
          } }, { key: "isJoining", value: function() {
            return this.state === j;
          } }, { key: "isLeaving", value: function() {
            return this.state === C;
          } }]), e2;
        }(), H = { HEADER_LENGTH: 1, META_LENGTH: 4, KINDS: { push: 0, reply: 1, broadcast: 2 }, encode: function(e2, t2) {
          if (e2.payload.constructor === ArrayBuffer)
            return t2(this.binaryEncode(e2));
          var n2 = [e2.join_ref, e2.ref, e2.topic, e2.event, e2.payload];
          return t2(JSON.stringify(n2));
        }, decode: function(e2, t2) {
          if (e2.constructor === ArrayBuffer)
            return t2(this.binaryDecode(e2));
          var n2 = r(JSON.parse(e2), 5);
          return t2({ join_ref: n2[0], ref: n2[1], topic: n2[2], event: n2[3], payload: n2[4] });
        }, binaryEncode: function(e2) {
          var t2 = e2.join_ref, n2 = e2.ref, i2 = e2.event, o2 = e2.topic, r2 = e2.payload, s2 = this.META_LENGTH + t2.length + n2.length + o2.length + i2.length, a2 = new ArrayBuffer(this.HEADER_LENGTH + s2), c2 = new DataView(a2), u2 = 0;
          c2.setUint8(u2++, this.KINDS.push), c2.setUint8(u2++, t2.length), c2.setUint8(u2++, n2.length), c2.setUint8(u2++, o2.length), c2.setUint8(u2++, i2.length), Array.from(t2, function(e3) {
            return c2.setUint8(u2++, e3.charCodeAt(0));
          }), Array.from(n2, function(e3) {
            return c2.setUint8(u2++, e3.charCodeAt(0));
          }), Array.from(o2, function(e3) {
            return c2.setUint8(u2++, e3.charCodeAt(0));
          }), Array.from(i2, function(e3) {
            return c2.setUint8(u2++, e3.charCodeAt(0));
          });
          var h2 = new Uint8Array(a2.byteLength + r2.byteLength);
          return h2.set(new Uint8Array(a2), 0), h2.set(new Uint8Array(r2), a2.byteLength), h2.buffer;
        }, binaryDecode: function(e2) {
          var t2 = new DataView(e2), n2 = t2.getUint8(0), i2 = new TextDecoder();
          switch (n2) {
            case this.KINDS.push:
              return this.decodePush(e2, t2, i2);
            case this.KINDS.reply:
              return this.decodeReply(e2, t2, i2);
            case this.KINDS.broadcast:
              return this.decodeBroadcast(e2, t2, i2);
          }
        }, decodePush: function(e2, t2, n2) {
          var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = t2.getUint8(3), s2 = this.HEADER_LENGTH + this.META_LENGTH - 1, a2 = n2.decode(e2.slice(s2, s2 + i2));
          s2 += i2;
          var c2 = n2.decode(e2.slice(s2, s2 + o2));
          s2 += o2;
          var u2 = n2.decode(e2.slice(s2, s2 + r2));
          return s2 += r2, { join_ref: a2, ref: null, topic: c2, event: u2, payload: e2.slice(s2, e2.byteLength) };
        }, decodeReply: function(e2, t2, n2) {
          var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = t2.getUint8(3), s2 = t2.getUint8(4), a2 = this.HEADER_LENGTH + this.META_LENGTH, c2 = n2.decode(e2.slice(a2, a2 + i2));
          a2 += i2;
          var u2 = n2.decode(e2.slice(a2, a2 + o2));
          a2 += o2;
          var h2 = n2.decode(e2.slice(a2, a2 + r2));
          a2 += r2;
          var l2 = n2.decode(e2.slice(a2, a2 + s2));
          a2 += s2;
          var f2 = e2.slice(a2, e2.byteLength);
          return { join_ref: c2, ref: u2, topic: h2, event: S, payload: { status: l2, response: f2 } };
        }, decodeBroadcast: function(e2, t2, n2) {
          var i2 = t2.getUint8(1), o2 = t2.getUint8(2), r2 = this.HEADER_LENGTH + 2, s2 = n2.decode(e2.slice(r2, r2 + i2));
          r2 += i2;
          var a2 = n2.decode(e2.slice(r2, r2 + o2));
          return r2 += o2, { join_ref: null, ref: null, topic: s2, event: a2, payload: e2.slice(r2, e2.byteLength) };
        } }, U = function() {
          function e2(t2) {
            var n2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            c(this, e2), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i2.timeout || 1e4, this.transport = i2.transport || d.WebSocket || D, this.defaultEncoder = H.encode.bind(H), this.defaultDecoder = H.decode.bind(H), this.closeWasClean = false, this.unloaded = false, this.binaryType = i2.binaryType || "arraybuffer", this.transport !== D ? (this.encode = i2.encode || this.defaultEncoder, this.decode = i2.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("beforeunload", function(e3) {
              n2.conn && (n2.unloaded = true, n2.abnormalClose("unloaded"));
            }), this.heartbeatIntervalMs = i2.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function(e3) {
              return i2.rejoinAfterMs ? i2.rejoinAfterMs(e3) : [1e3, 2e3, 5e3][e3 - 1] || 1e4;
            }, this.reconnectAfterMs = function(e3) {
              return n2.unloaded ? 100 : i2.reconnectAfterMs ? i2.reconnectAfterMs(e3) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e3 - 1] || 5e3;
            }, this.logger = i2.logger || null, this.longpollerTimeout = i2.longpollerTimeout || 2e4, this.params = O(i2.params || {}), this.endPoint = "".concat(t2, "/").concat(x), this.vsn = i2.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new J(function() {
              n2.teardown(function() {
                return n2.connect();
              });
            }, this.reconnectAfterMs);
          }
          return h(e2, [{ key: "protocol", value: function() {
            return location.protocol.match(/^https/) ? "wss" : "ws";
          } }, { key: "endPointURL", value: function() {
            var e3 = M.appendParams(M.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
            return e3.charAt(0) !== "/" ? e3 : e3.charAt(1) === "/" ? "".concat(this.protocol(), ":").concat(e3) : "".concat(this.protocol(), "://").concat(location.host).concat(e3);
          } }, { key: "disconnect", value: function(e3, t2, n2) {
            this.closeWasClean = true, this.reconnectTimer.reset(), this.teardown(e3, t2, n2);
          } }, { key: "connect", value: function(e3) {
            var t2 = this;
            e3 && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = O(e3)), this.conn || (this.closeWasClean = false, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() {
              return t2.onConnOpen();
            }, this.conn.onerror = function(e4) {
              return t2.onConnError(e4);
            }, this.conn.onmessage = function(e4) {
              return t2.onConnMessage(e4);
            }, this.conn.onclose = function(e4) {
              return t2.onConnClose(e4);
            });
          } }, { key: "log", value: function(e3, t2, n2) {
            this.logger(e3, t2, n2);
          } }, { key: "hasLogger", value: function() {
            return this.logger !== null;
          } }, { key: "onOpen", value: function(e3) {
            var t2 = this.makeRef();
            return this.stateChangeCallbacks.open.push([t2, e3]), t2;
          } }, { key: "onClose", value: function(e3) {
            var t2 = this.makeRef();
            return this.stateChangeCallbacks.close.push([t2, e3]), t2;
          } }, { key: "onError", value: function(e3) {
            var t2 = this.makeRef();
            return this.stateChangeCallbacks.error.push([t2, e3]), t2;
          } }, { key: "onMessage", value: function(e3) {
            var t2 = this.makeRef();
            return this.stateChangeCallbacks.message.push([t2, e3]), t2;
          } }, { key: "onConnOpen", value: function() {
            this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = false, this.closeWasClean = false, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function(e3) {
              return (0, r(e3, 2)[1])();
            });
          } }, { key: "resetHeartbeat", value: function() {
            var e3 = this;
            this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function() {
              return e3.sendHeartbeat();
            }, this.heartbeatIntervalMs));
          } }, { key: "teardown", value: function(e3, t2, n2) {
            var i2 = this;
            if (!this.conn)
              return e3 && e3();
            this.waitForBufferDone(function() {
              i2.conn && (t2 ? i2.conn.close(t2, n2 || "") : i2.conn.close()), i2.waitForSocketClosed(function() {
                i2.conn && (i2.conn.onclose = function() {
                }, i2.conn = null), e3 && e3();
              });
            });
          } }, { key: "waitForBufferDone", value: function(e3) {
            var t2 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            n2 !== 5 && this.conn && this.conn.bufferedAmount ? setTimeout(function() {
              t2.waitForBufferDone(e3, n2 + 1);
            }, 150 * n2) : e3();
          } }, { key: "waitForSocketClosed", value: function(e3) {
            var t2 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            n2 !== 5 && this.conn && this.conn.readyState !== m ? setTimeout(function() {
              t2.waitForSocketClosed(e3, n2 + 1);
            }, 150 * n2) : e3();
          } }, { key: "onConnClose", value: function(e3) {
            this.hasLogger() && this.log("transport", "close", e3), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function(t2) {
              return (0, r(t2, 2)[1])(e3);
            });
          } }, { key: "onConnError", value: function(e3) {
            this.hasLogger() && this.log("transport", e3), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function(t2) {
              return (0, r(t2, 2)[1])(e3);
            });
          } }, { key: "triggerChanError", value: function() {
            this.channels.forEach(function(e3) {
              e3.isErrored() || e3.isLeaving() || e3.isClosed() || e3.trigger(R);
            });
          } }, { key: "connectionState", value: function() {
            switch (this.conn && this.conn.readyState) {
              case p:
                return "connecting";
              case v:
                return "open";
              case y:
                return "closing";
              default:
                return "closed";
            }
          } }, { key: "isConnected", value: function() {
            return this.connectionState() === "open";
          } }, { key: "remove", value: function(e3) {
            this.off(e3.stateChangeRefs), this.channels = this.channels.filter(function(t2) {
              return t2.joinRef() !== e3.joinRef();
            });
          } }, { key: "off", value: function(e3) {
            for (var t2 in this.stateChangeCallbacks)
              this.stateChangeCallbacks[t2] = this.stateChangeCallbacks[t2].filter(function(t3) {
                var n2 = r(t3, 1)[0];
                return e3.indexOf(n2) === -1;
              });
          } }, { key: "channel", value: function(e3) {
            var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = new _(e3, t2, this);
            return this.channels.push(n2), n2;
          } }, { key: "push", value: function(e3) {
            var t2 = this;
            if (this.hasLogger()) {
              var n2 = e3.topic, i2 = e3.event, o2 = e3.payload, r2 = e3.ref, s2 = e3.join_ref;
              this.log("push", "".concat(n2, " ").concat(i2, " (").concat(s2, ", ").concat(r2, ")"), o2);
            }
            this.isConnected() ? this.encode(e3, function(e4) {
              return t2.conn.send(e4);
            }) : this.sendBuffer.push(function() {
              return t2.encode(e3, function(e4) {
                return t2.conn.send(e4);
              });
            });
          } }, { key: "makeRef", value: function() {
            var e3 = this.ref + 1;
            return e3 === this.ref ? this.ref = 0 : this.ref = e3, this.ref.toString();
          } }, { key: "sendHeartbeat", value: function() {
            if (this.isConnected()) {
              if (this.pendingHeartbeatRef)
                return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
              this.pendingHeartbeatRef = this.makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
            }
          } }, { key: "abnormalClose", value: function(e3) {
            this.closeWasClean = false, this.conn.readyState === v && this.conn.close(1e3, e3);
          } }, { key: "flushSendBuffer", value: function() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function(e3) {
              return e3();
            }), this.sendBuffer = []);
          } }, { key: "onConnMessage", value: function(e3) {
            var t2 = this;
            this.decode(e3.data, function(e4) {
              var n2 = e4.topic, i2 = e4.event, o2 = e4.payload, s2 = e4.ref, a2 = e4.join_ref;
              s2 && s2 === t2.pendingHeartbeatRef && (t2.pendingHeartbeatRef = null), t2.hasLogger() && t2.log("receive", "".concat(o2.status || "", " ").concat(n2, " ").concat(i2, " ").concat(s2 && "(" + s2 + ")" || ""), o2);
              for (var c2 = 0; c2 < t2.channels.length; c2++) {
                var u2 = t2.channels[c2];
                u2.isMember(n2, i2, o2, a2) && u2.trigger(i2, o2, s2, a2);
              }
              for (var h2 = 0; h2 < t2.stateChangeCallbacks.message.length; h2++) {
                (0, r(t2.stateChangeCallbacks.message[h2], 2)[1])(e4);
              }
            });
          } }, { key: "leaveOpenTopic", value: function(e3) {
            var t2 = this.channels.find(function(t3) {
              return t3.topic === e3 && (t3.isJoined() || t3.isJoining());
            });
            t2 && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e3, '"')), t2.leave());
          } }]), e2;
        }(), D = function() {
          function e2(t2) {
            c(this, e2), this.endPoint = null, this.token = null, this.skipHeartbeat = true, this.onopen = function() {
            }, this.onerror = function() {
            }, this.onmessage = function() {
            }, this.onclose = function() {
            }, this.pollEndpoint = this.normalizeEndpoint(t2), this.readyState = p, this.poll();
          }
          return h(e2, [{ key: "normalizeEndpoint", value: function(e3) {
            return e3.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + x), "$1/" + L);
          } }, { key: "endpointURL", value: function() {
            return M.appendParams(this.pollEndpoint, { token: this.token });
          } }, { key: "closeAndRetry", value: function() {
            this.close(), this.readyState = p;
          } }, { key: "ontimeout", value: function() {
            this.onerror("timeout"), this.closeAndRetry();
          } }, { key: "poll", value: function() {
            var e3 = this;
            this.readyState !== v && this.readyState !== p || M.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function(t2) {
              if (t2) {
                var n2 = t2.status, i2 = t2.token, o2 = t2.messages;
                e3.token = i2;
              } else
                n2 = 0;
              switch (n2) {
                case 200:
                  o2.forEach(function(t3) {
                    return e3.onmessage({ data: t3 });
                  }), e3.poll();
                  break;
                case 204:
                  e3.poll();
                  break;
                case 410:
                  e3.readyState = v, e3.onopen(), e3.poll();
                  break;
                case 403:
                  e3.onerror(), e3.close();
                  break;
                case 0:
                case 500:
                  e3.onerror(), e3.closeAndRetry();
                  break;
                default:
                  throw new Error("unhandled poll status ".concat(n2));
              }
            });
          } }, { key: "send", value: function(e3) {
            var t2 = this;
            M.request("POST", this.endpointURL(), "application/json", e3, this.timeout, this.onerror.bind(this, "timeout"), function(e4) {
              e4 && e4.status === 200 || (t2.onerror(e4 && e4.status), t2.closeAndRetry());
            });
          } }, { key: "close", value: function(e3, t2) {
            this.readyState = m, this.onclose();
          } }]), e2;
        }(), M = function() {
          function e2() {
            c(this, e2);
          }
          return h(e2, null, [{ key: "request", value: function(e3, t2, n2, i2, o2, r2, s2) {
            if (d.XDomainRequest) {
              var a2 = new XDomainRequest();
              this.xdomainRequest(a2, e3, t2, i2, o2, r2, s2);
            } else {
              var c2 = new d.XMLHttpRequest();
              this.xhrRequest(c2, e3, t2, n2, i2, o2, r2, s2);
            }
          } }, { key: "xdomainRequest", value: function(e3, t2, n2, i2, o2, r2, s2) {
            var a2 = this;
            e3.timeout = o2, e3.open(t2, n2), e3.onload = function() {
              var t3 = a2.parseJSON(e3.responseText);
              s2 && s2(t3);
            }, r2 && (e3.ontimeout = r2), e3.onprogress = function() {
            }, e3.send(i2);
          } }, { key: "xhrRequest", value: function(e3, t2, n2, i2, o2, r2, s2, a2) {
            var c2 = this;
            e3.open(t2, n2, true), e3.timeout = r2, e3.setRequestHeader("Content-Type", i2), e3.onerror = function() {
              a2 && a2(null);
            }, e3.onreadystatechange = function() {
              if (e3.readyState === c2.states.complete && a2) {
                var t3 = c2.parseJSON(e3.responseText);
                a2(t3);
              }
            }, s2 && (e3.ontimeout = s2), e3.send(o2);
          } }, { key: "parseJSON", value: function(e3) {
            if (!e3 || e3 === "")
              return null;
            try {
              return JSON.parse(e3);
            } catch (t2) {
              return console && console.log("failed to parse JSON response", e3), null;
            }
          } }, { key: "serialize", value: function(e3, t2) {
            var n2 = [];
            for (var i2 in e3)
              if (e3.hasOwnProperty(i2)) {
                var r2 = t2 ? "".concat(t2, "[").concat(i2, "]") : i2, s2 = e3[i2];
                o(s2) === "object" ? n2.push(this.serialize(s2, r2)) : n2.push(encodeURIComponent(r2) + "=" + encodeURIComponent(s2));
              }
            return n2.join("&");
          } }, { key: "appendParams", value: function(e3, t2) {
            if (Object.keys(t2).length === 0)
              return e3;
            var n2 = e3.match(/\?/) ? "&" : "?";
            return "".concat(e3).concat(n2).concat(this.serialize(t2));
          } }]), e2;
        }();
        M.states = { complete: 4 };
        var N = function() {
          function e2(t2) {
            var n2 = this, i2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            c(this, e2);
            var o2 = i2.events || { state: "presence_state", diff: "presence_diff" };
            this.state = {}, this.pendingDiffs = [], this.channel = t2, this.joinRef = null, this.caller = { onJoin: function() {
            }, onLeave: function() {
            }, onSync: function() {
            } }, this.channel.on(o2.state, function(t3) {
              var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
              n2.joinRef = n2.channel.joinRef(), n2.state = e2.syncState(n2.state, t3, o3, r2), n2.pendingDiffs.forEach(function(t4) {
                n2.state = e2.syncDiff(n2.state, t4, o3, r2);
              }), n2.pendingDiffs = [], s2();
            }), this.channel.on(o2.diff, function(t3) {
              var i3 = n2.caller, o3 = i3.onJoin, r2 = i3.onLeave, s2 = i3.onSync;
              n2.inPendingSyncState() ? n2.pendingDiffs.push(t3) : (n2.state = e2.syncDiff(n2.state, t3, o3, r2), s2());
            });
          }
          return h(e2, [{ key: "onJoin", value: function(e3) {
            this.caller.onJoin = e3;
          } }, { key: "onLeave", value: function(e3) {
            this.caller.onLeave = e3;
          } }, { key: "onSync", value: function(e3) {
            this.caller.onSync = e3;
          } }, { key: "list", value: function(t2) {
            return e2.list(this.state, t2);
          } }, { key: "inPendingSyncState", value: function() {
            return !this.joinRef || this.joinRef !== this.channel.joinRef();
          } }], [{ key: "syncState", value: function(e3, t2, n2, i2) {
            var o2 = this, r2 = this.clone(e3), s2 = {}, a2 = {};
            return this.map(r2, function(e4, n3) {
              t2[e4] || (a2[e4] = n3);
            }), this.map(t2, function(e4, t3) {
              var n3 = r2[e4];
              if (n3) {
                var i3 = t3.metas.map(function(e5) {
                  return e5.phx_ref;
                }), c2 = n3.metas.map(function(e5) {
                  return e5.phx_ref;
                }), u2 = t3.metas.filter(function(e5) {
                  return c2.indexOf(e5.phx_ref) < 0;
                }), h2 = n3.metas.filter(function(e5) {
                  return i3.indexOf(e5.phx_ref) < 0;
                });
                u2.length > 0 && (s2[e4] = t3, s2[e4].metas = u2), h2.length > 0 && (a2[e4] = o2.clone(n3), a2[e4].metas = h2);
              } else
                s2[e4] = t3;
            }), this.syncDiff(r2, { joins: s2, leaves: a2 }, n2, i2);
          } }, { key: "syncDiff", value: function(e3, t2, n2, o2) {
            var r2 = t2.joins, s2 = t2.leaves, a2 = this.clone(e3);
            return n2 || (n2 = function() {
            }), o2 || (o2 = function() {
            }), this.map(r2, function(e4, t3) {
              var o3 = a2[e4];
              if (a2[e4] = t3, o3) {
                var r3, s3 = a2[e4].metas.map(function(e5) {
                  return e5.phx_ref;
                }), c2 = o3.metas.filter(function(e5) {
                  return s3.indexOf(e5.phx_ref) < 0;
                });
                (r3 = a2[e4].metas).unshift.apply(r3, i(c2));
              }
              n2(e4, o3, t3);
            }), this.map(s2, function(e4, t3) {
              var n3 = a2[e4];
              if (n3) {
                var i2 = t3.metas.map(function(e5) {
                  return e5.phx_ref;
                });
                n3.metas = n3.metas.filter(function(e5) {
                  return i2.indexOf(e5.phx_ref) < 0;
                }), o2(e4, n3, t3), n3.metas.length === 0 && delete a2[e4];
              }
            }), a2;
          } }, { key: "list", value: function(e3, t2) {
            return t2 || (t2 = function(e4, t3) {
              return t3;
            }), this.map(e3, function(e4, n2) {
              return t2(e4, n2);
            });
          } }, { key: "map", value: function(e3, t2) {
            return Object.getOwnPropertyNames(e3).map(function(n2) {
              return t2(n2, e3[n2]);
            });
          } }, { key: "clone", value: function(e3) {
            return JSON.parse(JSON.stringify(e3));
          } }]), e2;
        }(), J = function() {
          function e2(t2, n2) {
            c(this, e2), this.callback = t2, this.timerCalc = n2, this.timer = null, this.tries = 0;
          }
          return h(e2, [{ key: "reset", value: function() {
            this.tries = 0, clearTimeout(this.timer);
          } }, { key: "scheduleTimeout", value: function() {
            var e3 = this;
            clearTimeout(this.timer), this.timer = setTimeout(function() {
              e3.tries = e3.tries + 1, e3.callback();
            }, this.timerCalc(this.tries + 1));
          } }]), e2;
        }();
      }]);
    });
  }
});

// js/live_element/constants.js
var CONSECUTIVE_RELOADS = "consecutive-reloads";
var MAX_RELOADS = 10;
var RELOAD_JITTER = [1e3, 3e3];
var FAILSAFE_JITTER = 3e4;
var PHX_EVENT_CLASSES = [
  "phx-click-loading",
  "phx-change-loading",
  "phx-submit-loading",
  "phx-keydown-loading",
  "phx-keyup-loading",
  "phx-blur-loading",
  "phx-focus-loading"
];
var PHX_COMPONENT = "data-phx-component";
var PHX_LIVE_LINK = "data-phx-link";
var PHX_TRACK_STATIC = "track-static";
var PHX_LINK_STATE = "data-phx-link-state";
var PHX_REF = "data-phx-ref";
var PHX_TRACK_UPLOADS = "track-uploads";
var PHX_UPLOAD_REF = "data-phx-upload-ref";
var PHX_PREFLIGHTED_REFS = "data-phx-preflighted-refs";
var PHX_DONE_REFS = "data-phx-done-refs";
var PHX_DROP_TARGET = "drop-target";
var PHX_ACTIVE_ENTRY_REFS = "data-phx-active-refs";
var PHX_LIVE_FILE_UPDATED = "phx:live-file:updated";
var PHX_SKIP = "data-phx-skip";
var PHX_PRUNE = "data-phx-prune";
var PHX_PAGE_LOADING = "page-loading";
var PHX_CONNECTED_CLASS = "phx-connected";
var PHX_DISCONNECTED_CLASS = "phx-loading";
var PHX_NO_FEEDBACK_CLASS = "phx-no-feedback";
var PHX_ERROR_CLASS = "phx-error";
var PHX_PARENT_ID = "data-phx-parent-id";
var PHX_MAIN = "data-phx-main";
var PHX_ROOT_ID = "data-phx-root-id";
var PHX_TRIGGER_ACTION = "trigger-action";
var PHX_FEEDBACK_FOR = "feedback-for";
var PHX_HAS_FOCUSED = "phx-has-focused";
var FOCUSABLE_INPUTS = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"];
var CHECKABLE_INPUTS = ["checkbox", "radio"];
var PHX_HAS_SUBMITTED = "phx-has-submitted";
var PHX_SESSION = "data-phx-session";
var PHX_VIEW_SELECTOR = `[${PHX_SESSION}]`;
var PHX_STATIC = "data-phx-static";
var PHX_READONLY = "data-phx-readonly";
var PHX_DISABLED = "data-phx-disabled";
var PHX_DISABLE_WITH = "disable-with";
var PHX_DISABLE_WITH_RESTORE = "data-phx-disable-with-restore";
var PHX_HOOK = "hook";
var PHX_DEBOUNCE = "debounce";
var PHX_THROTTLE = "throttle";
var PHX_UPDATE = "update";
var PHX_KEY = "key";
var PHX_PRIVATE = "phxPrivate";
var PHX_AUTO_RECOVER = "auto-recover";
var PHX_LV_DEBUG = "phx:live-socket:debug";
var PHX_LV_PROFILE = "phx:live-socket:profiling";
var PHX_LV_LATENCY_SIM = "phx:live-socket:latency-sim";
var PHX_PROGRESS = "progress";
var LOADER_TIMEOUT = 1;
var BEFORE_UNLOAD_LOADER_TIMEOUT = 200;
var BINDING_PREFIX = "phx-";
var PUSH_TIMEOUT = 3e4;
var DEBOUNCE_TRIGGER = "debounce-trigger";
var THROTTLED = "throttled";
var DEBOUNCE_PREV_KEY = "debounce-prev-key";
var DEFAULTS = {
  debounce: 300,
  throttle: 300
};
var DYNAMICS = "d";
var STATIC = "s";
var COMPONENTS = "c";
var EVENTS = "e";
var REPLY = "r";
var TITLE = "t";
var TEMPLATES = "p";

// js/live_element/entry_uploader.js
var EntryUploader = class {
  constructor(entry, chunkSize, liveSocket) {
    this.liveSocket = liveSocket;
    this.entry = entry;
    this.offset = 0;
    this.chunkSize = chunkSize;
    this.chunkTimer = null;
    this.uploadChannel = liveSocket.channel(`lvu:${entry.ref}`, { token: entry.metadata() });
  }
  error(reason) {
    clearTimeout(this.chunkTimer);
    this.uploadChannel.leave();
    this.entry.error(reason);
  }
  upload() {
    this.uploadChannel.onError((reason) => this.error(reason));
    this.uploadChannel.join().receive("ok", (_data) => this.readNextChunk()).receive("error", (reason) => this.error(reason));
  }
  isDone() {
    return this.offset >= this.entry.file.size;
  }
  readNextChunk() {
    let reader = new window.FileReader();
    let blob = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
    reader.onload = (e) => {
      if (e.target.error === null) {
        this.offset += e.target.result.byteLength;
        this.pushChunk(e.target.result);
      } else {
        return logError("Read error: " + e.target.error);
      }
    };
    reader.readAsArrayBuffer(blob);
  }
  pushChunk(chunk) {
    if (!this.uploadChannel.isJoined()) {
      return;
    }
    this.uploadChannel.push("chunk", chunk).receive("ok", () => {
      this.entry.progress(this.offset / this.entry.file.size * 100);
      if (!this.isDone()) {
        this.chunkTimer = setTimeout(() => this.readNextChunk(), this.liveSocket.getLatencySim() || 0);
      }
    });
  }
};

// js/live_element/utils.js
var logError = (msg, obj) => console.error && console.error(msg, obj);
var isCid = (cid) => typeof cid === "number";
function detectDuplicateIds() {
  let ids = new Set();
  let elems = document.querySelectorAll("*[id]");
  for (let i = 0, len = elems.length; i < len; i++) {
    if (ids.has(elems[i].id)) {
      console.error(`Multiple IDs detected: ${elems[i].id}. Ensure unique element ids.`);
    } else {
      ids.add(elems[i].id);
    }
  }
}
var debug = (view, kind, msg, obj) => {
  if (view.liveSocket.isDebugEnabled()) {
    console.log(`${view.id} ${kind}: ${msg} - `, obj);
  }
};
var closure = (val) => typeof val === "function" ? val : function() {
  return val;
};
var clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
var closestPhxBinding = (el, binding, borderEl) => {
  do {
    if (el.matches(`[${binding}]`)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1 && !(borderEl && borderEl.isSameNode(el) || el.matches(PHX_VIEW_SELECTOR)));
  return null;
};
var isObject = (obj) => {
  return obj !== null && typeof obj === "object" && !(obj instanceof Array);
};
var isEqualObj = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
var isEmpty = (obj) => {
  for (let x in obj) {
    return false;
  }
  return true;
};
var maybe = (el, callback) => el && callback(el);
var channelUploader = function(entries, onError, resp, liveSocket) {
  entries.forEach((entry) => {
    let entryUploader = new EntryUploader(entry, resp.config.chunk_size, liveSocket);
    entryUploader.upload();
  });
};

// js/live_element/browser.js
var Browser = {
  canPushState() {
    return typeof history.pushState !== "undefined";
  },
  dropLocal(localStorage, namespace, subkey) {
    return localStorage.removeItem(this.localKey(namespace, subkey));
  },
  updateLocal(localStorage, namespace, subkey, initial, func) {
    let current = this.getLocal(localStorage, namespace, subkey);
    let key = this.localKey(namespace, subkey);
    let newVal = current === null ? initial : func(current);
    localStorage.setItem(key, JSON.stringify(newVal));
    return newVal;
  },
  getLocal(localStorage, namespace, subkey) {
    return JSON.parse(localStorage.getItem(this.localKey(namespace, subkey)));
  },
  updateCurrentState(callback) {
    if (!this.canPushState()) {
      return;
    }
    history.replaceState(callback(history.state || {}), "", window.location.href);
  },
  pushState(kind, meta, to) {
    if (this.canPushState()) {
      if (to !== window.location.href) {
        if (meta.type == "redirect" && meta.scroll) {
          let currentState = history.state || {};
          currentState.scroll = meta.scroll;
          history.replaceState(currentState, "", window.location.href);
        }
        delete meta.scroll;
        history[kind + "State"](meta, "", to || null);
        let hashEl = this.getHashTargetEl(window.location.hash);
        if (hashEl) {
          hashEl.scrollIntoView();
        } else if (meta.type === "redirect") {
          window.scroll(0, 0);
        }
      }
    } else {
      this.redirect(to);
    }
  },
  setCookie(name, value) {
    document.cookie = `${name}=${value}`;
  },
  getCookie(name) {
    return document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${name}s*=s*([^;]*).*$)|^.*$`), "$1");
  },
  redirect(toURL, flash) {
    if (flash) {
      Browser.setCookie("__phoenix_flash__", flash + "; max-age=60000; path=/");
    }
    window.location = toURL;
  },
  localKey(namespace, subkey) {
    return `${namespace}-${subkey}`;
  },
  getHashTargetEl(maybeHash) {
    let hash = maybeHash.toString().substring(1);
    if (hash === "") {
      return;
    }
    return document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
  }
};
var browser_default = Browser;

// js/live_element/dom.js
var DOM = {
  byId(id) {
    return document.getElementById(id) || logError(`no id found for ${id}`);
  },
  removeClass(el, className) {
    el.classList.remove(className);
    if (el.classList.length === 0) {
      el.removeAttribute("class");
    }
  },
  all(node, query, callback) {
    if (!node) {
      return [];
    }
    let array = Array.from(node.querySelectorAll(query));
    return callback ? array.forEach(callback) : array;
  },
  childNodeLength(html) {
    let template = document.createElement("template");
    template.innerHTML = html;
    return template.content.childElementCount;
  },
  isUploadInput(el) {
    return el.type === "file" && el.getAttribute(PHX_UPLOAD_REF) !== null;
  },
  findUploadInputs(node) {
    return this.all(node, `input[type="file"][${PHX_UPLOAD_REF}]`);
  },
  findComponentNodeList(node, cid) {
    return this.filterWithinSameLiveView(this.all(node, `[${PHX_COMPONENT}="${cid}"]`), node);
  },
  isPhxDestroyed(node) {
    return node.id && DOM.private(node, "destroyed") ? true : false;
  },
  markPhxChildDestroyed(el) {
    if (this.isPhxChild(el)) {
      el.setAttribute(PHX_SESSION, "");
    }
    this.putPrivate(el, "destroyed", true);
  },
  findPhxChildrenInFragment(html, parentId) {
    let template = document.createElement("template");
    template.innerHTML = html;
    return this.findPhxChildren(template.content, parentId);
  },
  isIgnored(el, phxUpdate) {
    return (el.getAttribute(phxUpdate) || el.getAttribute("data-phx-update")) === "ignore";
  },
  isPhxUpdate(el, phxUpdate, updateTypes) {
    return el.getAttribute && updateTypes.indexOf(el.getAttribute(phxUpdate)) >= 0;
  },
  findPhxChildren(el, parentId) {
    return this.all(el, `${PHX_VIEW_SELECTOR}[${PHX_PARENT_ID}="${parentId}"]`);
  },
  findParentCIDs(node, cids) {
    let initial = new Set(cids);
    return cids.reduce((acc, cid) => {
      let selector = `[${PHX_COMPONENT}="${cid}"] [${PHX_COMPONENT}]`;
      this.filterWithinSameLiveView(this.all(node, selector), node).map((el) => parseInt(el.getAttribute(PHX_COMPONENT))).forEach((childCID) => acc.delete(childCID));
      return acc;
    }, initial);
  },
  filterWithinSameLiveView(nodes, parent) {
    if (parent.querySelector(PHX_VIEW_SELECTOR)) {
      return nodes.filter((el) => this.withinSameLiveView(el, parent));
    } else {
      return nodes;
    }
  },
  withinSameLiveView(node, parent) {
    while (node = node.parentNode) {
      if (node.isSameNode(parent)) {
        return true;
      }
      if (node.getAttribute(PHX_SESSION) !== null) {
        return false;
      }
    }
  },
  private(el, key) {
    return el[PHX_PRIVATE] && el[PHX_PRIVATE][key];
  },
  deletePrivate(el, key) {
    el[PHX_PRIVATE] && delete el[PHX_PRIVATE][key];
  },
  putPrivate(el, key, value) {
    if (!el[PHX_PRIVATE]) {
      el[PHX_PRIVATE] = {};
    }
    el[PHX_PRIVATE][key] = value;
  },
  updatePrivate(el, key, defaultVal, updateFunc) {
    let existing = this.private(el, key);
    if (existing === void 0) {
      this.putPrivate(el, key, updateFunc(defaultVal));
    } else {
      this.putPrivate(el, key, updateFunc(existing));
    }
  },
  copyPrivates(target, source) {
    if (source[PHX_PRIVATE]) {
      target[PHX_PRIVATE] = source[PHX_PRIVATE];
    }
  },
  putTitle(str) {
    let titleEl = document.querySelector("title");
    let { prefix, suffix } = titleEl.dataset;
    document.title = `${prefix || ""}${str}${suffix || ""}`;
  },
  debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, callback) {
    let debounce = el.getAttribute(phxDebounce);
    let throttle = el.getAttribute(phxThrottle);
    if (debounce === "") {
      debounce = defaultDebounce;
    }
    if (throttle === "") {
      throttle = defaultThrottle;
    }
    let value = debounce || throttle;
    switch (value) {
      case null:
        return callback();
      case "blur":
        if (this.once(el, "debounce-blur")) {
          el.addEventListener("blur", () => callback());
        }
        return;
      default:
        let timeout = parseInt(value);
        let trigger = () => throttle ? this.deletePrivate(el, THROTTLED) : callback();
        let currentCycle = this.incCycle(el, DEBOUNCE_TRIGGER, trigger);
        if (isNaN(timeout)) {
          return logError(`invalid throttle/debounce value: ${value}`);
        }
        if (throttle) {
          let newKeyDown = false;
          if (event.type === "keydown") {
            let prevKey = this.private(el, DEBOUNCE_PREV_KEY);
            this.putPrivate(el, DEBOUNCE_PREV_KEY, event.key);
            newKeyDown = prevKey !== event.key;
          }
          if (!newKeyDown && this.private(el, THROTTLED)) {
            return false;
          } else {
            callback();
            this.putPrivate(el, THROTTLED, true);
            setTimeout(() => this.triggerCycle(el, DEBOUNCE_TRIGGER), timeout);
          }
        } else {
          setTimeout(() => this.triggerCycle(el, DEBOUNCE_TRIGGER, currentCycle), timeout);
        }
        let form = el.form;
        if (form && this.once(form, "bind-debounce")) {
          form.addEventListener("submit", () => {
            Array.from(new FormData(form).entries(), ([name]) => {
              let input = form.querySelector(`[name="${name}"]`);
              this.incCycle(input, DEBOUNCE_TRIGGER);
              this.deletePrivate(input, THROTTLED);
            });
          });
        }
        if (this.once(el, "bind-debounce")) {
          el.addEventListener("blur", () => this.triggerCycle(el, DEBOUNCE_TRIGGER));
        }
    }
  },
  triggerCycle(el, key, currentCycle) {
    let [cycle, trigger] = this.private(el, key);
    if (!currentCycle) {
      currentCycle = cycle;
    }
    if (currentCycle === cycle) {
      this.incCycle(el, key);
      trigger();
    }
  },
  once(el, key) {
    if (this.private(el, key) === true) {
      return false;
    }
    this.putPrivate(el, key, true);
    return true;
  },
  incCycle(el, key, trigger = function() {
  }) {
    let [currentCycle] = this.private(el, key) || [0, trigger];
    currentCycle++;
    this.putPrivate(el, key, [currentCycle, trigger]);
    return currentCycle;
  },
  discardError(container, el, phxFeedbackFor) {
    let field = el.getAttribute && el.getAttribute(phxFeedbackFor);
    let input = field && container.querySelector(`[id="${field}"], [name="${field}"]`);
    if (!input) {
      return;
    }
    if (!(this.private(input, PHX_HAS_FOCUSED) || this.private(input.form, PHX_HAS_SUBMITTED))) {
      el.classList.add(PHX_NO_FEEDBACK_CLASS);
    }
  },
  showError(inputEl, phxFeedbackFor) {
    if (inputEl.id || inputEl.name) {
      this.all(inputEl.form, `[${phxFeedbackFor}="${inputEl.id}"], [${phxFeedbackFor}="${inputEl.name}"]`, (el) => {
        this.removeClass(el, PHX_NO_FEEDBACK_CLASS);
      });
    }
  },
  isPhxChild(node) {
    return node.getAttribute && node.getAttribute(PHX_PARENT_ID);
  },
  dispatchEvent(target, eventString, detail = {}) {
    let event = new CustomEvent(eventString, { bubbles: true, cancelable: true, detail });
    target.dispatchEvent(event);
  },
  cloneNode(node, html) {
    if (typeof html === "undefined") {
      return node.cloneNode(true);
    } else {
      let cloned = node.cloneNode(false);
      cloned.innerHTML = html;
      return cloned;
    }
  },
  mergeAttrs(target, source, opts = {}) {
    let exclude = opts.exclude || [];
    let isIgnored = opts.isIgnored;
    let sourceAttrs = source.attributes;
    for (let i = sourceAttrs.length - 1; i >= 0; i--) {
      let name = sourceAttrs[i].name;
      if (exclude.indexOf(name) < 0) {
        target.setAttribute(name, source.getAttribute(name));
      }
    }
    let targetAttrs = target.attributes;
    for (let i = targetAttrs.length - 1; i >= 0; i--) {
      let name = targetAttrs[i].name;
      if (isIgnored) {
        if (name.startsWith("data-") && !source.hasAttribute(name)) {
          target.removeAttribute(name);
        }
      } else {
        if (!source.hasAttribute(name)) {
          target.removeAttribute(name);
        }
      }
    }
  },
  mergeFocusedInput(target, source) {
    if (!(target instanceof HTMLSelectElement)) {
      DOM.mergeAttrs(target, source, { except: ["value"] });
    }
    if (source.readOnly) {
      target.setAttribute("readonly", true);
    } else {
      target.removeAttribute("readonly");
    }
  },
  hasSelectionRange(el) {
    return el.setSelectionRange && (el.type === "text" || el.type === "textarea");
  },
  restoreFocus(focused, selectionStart, selectionEnd) {
    if (!DOM.isTextualInput(focused)) {
      return;
    }
    let wasFocused = focused.matches(":focus");
    if (focused.readOnly) {
      focused.blur();
    }
    if (!wasFocused) {
      focused.focus();
    }
    if (this.hasSelectionRange(focused)) {
      focused.setSelectionRange(selectionStart, selectionEnd);
    }
  },
  isFormInput(el) {
    return /^(?:input|select|textarea)$/i.test(el.tagName) && el.type !== "button";
  },
  syncAttrsToProps(el) {
    if (el instanceof HTMLInputElement && CHECKABLE_INPUTS.indexOf(el.type.toLocaleLowerCase()) >= 0) {
      el.checked = el.getAttribute("checked") !== null;
    }
  },
  isTextualInput(el) {
    return FOCUSABLE_INPUTS.indexOf(el.type) >= 0;
  },
  isNowTriggerFormExternal(el, phxTriggerExternal) {
    return el.getAttribute && el.getAttribute(phxTriggerExternal) !== null;
  },
  syncPendingRef(fromEl, toEl, disableWith) {
    let ref = fromEl.getAttribute(PHX_REF);
    if (ref === null) {
      return true;
    }
    if (DOM.isFormInput(fromEl) || fromEl.getAttribute(disableWith) !== null) {
      if (DOM.isUploadInput(fromEl)) {
        DOM.mergeAttrs(fromEl, toEl, { isIgnored: true });
      }
      DOM.putPrivate(fromEl, PHX_REF, toEl);
      return false;
    } else {
      PHX_EVENT_CLASSES.forEach((className) => {
        fromEl.classList.contains(className) && toEl.classList.add(className);
      });
      toEl.setAttribute(PHX_REF, ref);
      return true;
    }
  },
  cleanChildNodes(container, phxUpdate) {
    if (DOM.isPhxUpdate(container, phxUpdate, ["append", "prepend"])) {
      let toRemove = [];
      container.childNodes.forEach((childNode) => {
        if (!childNode.id) {
          let isEmptyTextNode = childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue.trim() === "";
          if (!isEmptyTextNode) {
            logError(`only HTML element tags with an id are allowed inside containers with phx-update.

removing illegal node: "${(childNode.outerHTML || childNode.nodeValue).trim()}"

`);
          }
          toRemove.push(childNode);
        }
      });
      toRemove.forEach((childNode) => childNode.remove());
    }
  },
  replaceRootContainer(container, tagName, attrs) {
    let retainedAttrs = new Set(["id", PHX_SESSION, PHX_STATIC, PHX_MAIN, PHX_ROOT_ID]);
    if (container.tagName.toLowerCase() === tagName.toLowerCase()) {
      Array.from(container.attributes).filter((attr) => !retainedAttrs.has(attr.name.toLowerCase())).forEach((attr) => container.removeAttribute(attr.name));
      Object.keys(attrs).filter((name) => !retainedAttrs.has(name.toLowerCase())).forEach((attr) => container.setAttribute(attr, attrs[attr]));
      return container;
    } else {
      let newContainer = document.createElement(tagName);
      Object.keys(attrs).forEach((attr) => newContainer.setAttribute(attr, attrs[attr]));
      retainedAttrs.forEach((attr) => newContainer.setAttribute(attr, container.getAttribute(attr)));
      newContainer.innerHTML = container.innerHTML;
      container.replaceWith(newContainer);
      return newContainer;
    }
  },
  getSticky(el, name, defaultVal) {
    let op = (DOM.private(el, "sticky") || []).find(([existingName]) => name === existingName);
    if (op) {
      let [_name, _op, stashedResult] = op;
      return stashedResult;
    } else {
      return typeof defaultVal === "function" ? defaultVal() : defaultVal;
    }
  },
  deleteSticky(el, name) {
    this.updatePrivate(el, "sticky", [], (ops) => {
      return ops.filter(([existingName, _]) => existingName !== name);
    });
  },
  putSticky(el, name, op) {
    let stashedResult = op(el);
    this.updatePrivate(el, "sticky", [], (ops) => {
      let existingIndex = ops.findIndex(([existingName]) => name === existingName);
      if (existingIndex >= 0) {
        ops[existingIndex] = [name, op, stashedResult];
      } else {
        ops.push([name, op, stashedResult]);
      }
      return ops;
    });
  },
  applyStickyOperations(el) {
    let ops = DOM.private(el, "sticky");
    if (!ops) {
      return;
    }
    ops.forEach(([name, op, _stashed]) => this.putSticky(el, name, op));
  }
};
var dom_default = DOM;

// js/live_element/upload_entry.js
var UploadEntry = class {
  static isActive(fileEl, file) {
    let isNew = file._phxRef === void 0;
    let activeRefs = fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
    let isActive = activeRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
    return file.size > 0 && (isNew || isActive);
  }
  static isPreflighted(fileEl, file) {
    let preflightedRefs = fileEl.getAttribute(PHX_PREFLIGHTED_REFS).split(",");
    let isPreflighted = preflightedRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
    return isPreflighted && this.isActive(fileEl, file);
  }
  constructor(fileEl, file, view) {
    this.ref = LiveUploader.genFileRef(file);
    this.fileEl = fileEl;
    this.file = file;
    this.view = view;
    this.meta = null;
    this._isCancelled = false;
    this._isDone = false;
    this._progress = 0;
    this._lastProgressSent = -1;
    this._onDone = function() {
    };
    this._onElUpdated = this.onElUpdated.bind(this);
    this.fileEl.addEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
  }
  metadata() {
    return this.meta;
  }
  progress(progress) {
    this._progress = Math.floor(progress);
    if (this._progress > this._lastProgressSent) {
      if (this._progress >= 100) {
        this._progress = 100;
        this._lastProgressSent = 100;
        this._isDone = true;
        this.view.pushFileProgress(this.fileEl, this.ref, 100, () => {
          LiveUploader.untrackFile(this.fileEl, this.file);
          this._onDone();
        });
      } else {
        this._lastProgressSent = this._progress;
        this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
      }
    }
  }
  cancel() {
    this._isCancelled = true;
    this._isDone = true;
    this._onDone();
  }
  isDone() {
    return this._isDone;
  }
  error(reason = "failed") {
    this.view.pushFileProgress(this.fileEl, this.ref, { error: reason });
    LiveUploader.clearFiles(this.fileEl);
  }
  onDone(callback) {
    this._onDone = () => {
      this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
      callback();
    };
  }
  onElUpdated() {
    let activeRefs = this.fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
    if (activeRefs.indexOf(this.ref) === -1) {
      this.cancel();
    }
  }
  toPreflightPayload() {
    return {
      last_modified: this.file.lastModified,
      name: this.file.name,
      size: this.file.size,
      type: this.file.type,
      ref: this.ref
    };
  }
  uploader(uploaders) {
    if (this.meta.uploader) {
      let callback = uploaders[this.meta.uploader] || logError(`no uploader configured for ${this.meta.uploader}`);
      return { name: this.meta.uploader, callback };
    } else {
      return { name: "channel", callback: channelUploader };
    }
  }
  zipPostFlight(resp) {
    this.meta = resp.entries[this.ref];
    if (!this.meta) {
      logError(`no preflight upload response returned with ref ${this.ref}`, { input: this.fileEl, response: resp });
    }
  }
};

// js/live_element/live_uploader.js
var liveUploaderFileRef = 0;
var LiveUploader = class {
  static genFileRef(file) {
    let ref = file._phxRef;
    if (ref !== void 0) {
      return ref;
    } else {
      file._phxRef = (liveUploaderFileRef++).toString();
      return file._phxRef;
    }
  }
  static getEntryDataURL(inputEl, ref, callback) {
    let file = this.activeFiles(inputEl).find((file2) => this.genFileRef(file2) === ref);
    callback(URL.createObjectURL(file));
  }
  static hasUploadsInProgress(formEl) {
    let active = 0;
    dom_default.findUploadInputs(formEl).forEach((input) => {
      if (input.getAttribute(PHX_PREFLIGHTED_REFS) !== input.getAttribute(PHX_DONE_REFS)) {
        active++;
      }
    });
    return active > 0;
  }
  static serializeUploads(inputEl) {
    let files = this.activeFiles(inputEl);
    let fileData = {};
    files.forEach((file) => {
      let entry = { path: inputEl.name };
      let uploadRef = inputEl.getAttribute(PHX_UPLOAD_REF);
      fileData[uploadRef] = fileData[uploadRef] || [];
      entry.ref = this.genFileRef(file);
      entry.name = file.name || entry.ref;
      entry.type = file.type;
      entry.size = file.size;
      fileData[uploadRef].push(entry);
    });
    return fileData;
  }
  static clearFiles(inputEl) {
    inputEl.value = null;
    inputEl.removeAttribute(PHX_UPLOAD_REF);
    dom_default.putPrivate(inputEl, "files", []);
  }
  static untrackFile(inputEl, file) {
    dom_default.putPrivate(inputEl, "files", dom_default.private(inputEl, "files").filter((f) => !Object.is(f, file)));
  }
  static trackFiles(inputEl, files) {
    if (inputEl.getAttribute("multiple") !== null) {
      let newFiles = files.filter((file) => !this.activeFiles(inputEl).find((f) => Object.is(f, file)));
      dom_default.putPrivate(inputEl, "files", this.activeFiles(inputEl).concat(newFiles));
      inputEl.value = null;
    } else {
      dom_default.putPrivate(inputEl, "files", files);
    }
  }
  static activeFileInputs(formEl) {
    let fileInputs = dom_default.findUploadInputs(formEl);
    return Array.from(fileInputs).filter((el) => el.files && this.activeFiles(el).length > 0);
  }
  static activeFiles(input) {
    return (dom_default.private(input, "files") || []).filter((f) => UploadEntry.isActive(input, f));
  }
  static inputsAwaitingPreflight(formEl) {
    let fileInputs = dom_default.findUploadInputs(formEl);
    return Array.from(fileInputs).filter((input) => this.filesAwaitingPreflight(input).length > 0);
  }
  static filesAwaitingPreflight(input) {
    return this.activeFiles(input).filter((f) => !UploadEntry.isPreflighted(input, f));
  }
  constructor(inputEl, view, onComplete) {
    this.view = view;
    this.onComplete = onComplete;
    this._entries = Array.from(LiveUploader.filesAwaitingPreflight(inputEl) || []).map((file) => new UploadEntry(inputEl, file, view));
    this.numEntriesInProgress = this._entries.length;
  }
  entries() {
    return this._entries;
  }
  initAdapterUpload(resp, onError, liveSocket) {
    this._entries = this._entries.map((entry) => {
      entry.zipPostFlight(resp);
      entry.onDone(() => {
        this.numEntriesInProgress--;
        if (this.numEntriesInProgress === 0) {
          this.onComplete();
        }
      });
      return entry;
    });
    let groupedEntries = this._entries.reduce((acc, entry) => {
      let { name, callback } = entry.uploader(liveSocket.uploaders);
      acc[name] = acc[name] || { callback, entries: [] };
      acc[name].entries.push(entry);
      return acc;
    }, {});
    for (let name in groupedEntries) {
      let { callback, entries } = groupedEntries[name];
      callback(entries, onError, resp, liveSocket);
    }
  }
};

// js/live_element/hooks.js
var Hooks = {
  LiveFileUpload: {
    activeRefs() {
      return this.el.getAttribute(PHX_ACTIVE_ENTRY_REFS);
    },
    preflightedRefs() {
      return this.el.getAttribute(PHX_PREFLIGHTED_REFS);
    },
    mounted() {
      this.preflightedWas = this.preflightedRefs();
    },
    updated() {
      let newPreflights = this.preflightedRefs();
      if (this.preflightedWas !== newPreflights) {
        this.preflightedWas = newPreflights;
        if (newPreflights === "") {
          this.__view.cancelSubmit(this.el.form);
        }
      }
      if (this.activeRefs() === "") {
        this.el.value = null;
      }
      this.el.dispatchEvent(new CustomEvent(PHX_LIVE_FILE_UPDATED));
    }
  },
  LiveImgPreview: {
    mounted() {
      this.ref = this.el.getAttribute("data-phx-entry-ref");
      this.inputEl = document.getElementById(this.el.getAttribute(PHX_UPLOAD_REF));
      LiveUploader.getEntryDataURL(this.inputEl, this.ref, (url) => {
        this.url = url;
        this.el.src = url;
      });
    },
    destroyed() {
      URL.revokeObjectURL(this.url);
    }
  }
};
var hooks_default = Hooks;

// js/live_element/dom_post_morph_restorer.js
var DOMPostMorphRestorer = class {
  constructor(containerBefore, containerAfter, updateType) {
    let idsBefore = new Set();
    let idsAfter = new Set([...containerAfter.children].map((child) => child.id));
    let elementsToModify = [];
    Array.from(containerBefore.children).forEach((child) => {
      if (child.id) {
        idsBefore.add(child.id);
        if (idsAfter.has(child.id)) {
          let previousElementId = child.previousElementSibling && child.previousElementSibling.id;
          elementsToModify.push({ elementId: child.id, previousElementId });
        }
      }
    });
    this.containerId = containerAfter.id;
    this.updateType = updateType;
    this.elementsToModify = elementsToModify;
    this.elementIdsToAdd = [...idsAfter].filter((id) => !idsBefore.has(id));
  }
  perform() {
    let container = dom_default.byId(this.containerId);
    this.elementsToModify.forEach((elementToModify) => {
      if (elementToModify.previousElementId) {
        maybe(document.getElementById(elementToModify.previousElementId), (previousElem) => {
          maybe(document.getElementById(elementToModify.elementId), (elem) => {
            let isInRightPlace = elem.previousElementSibling && elem.previousElementSibling.id == previousElem.id;
            if (!isInRightPlace) {
              previousElem.insertAdjacentElement("afterend", elem);
            }
          });
        });
      } else {
        maybe(document.getElementById(elementToModify.elementId), (elem) => {
          let isInRightPlace = elem.previousElementSibling == null;
          if (!isInRightPlace) {
            container.insertAdjacentElement("afterbegin", elem);
          }
        });
      }
    });
    if (this.updateType == "prepend") {
      this.elementIdsToAdd.reverse().forEach((elemId) => {
        maybe(document.getElementById(elemId), (elem) => container.insertAdjacentElement("afterbegin", elem));
      });
    }
  }
};

// node_modules/morphdom/dist/morphdom-esm.js
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === "xmlns") {
          attrName = attr.name;
        }
        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range;
var NS_XHTML = "http://www.w3.org/1999/xhtml";
var doc = typeof document === "undefined" ? void 0 : document;
var HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template");
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement("template");
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement("body");
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, "");
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === "OPTGROUP") {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === "SELECT" && !parentNode.hasAttribute("multiple")) {
        if (fromEl.hasAttribute("selected") && !toEl.selected) {
          fromEl.setAttribute("selected", "selected");
          fromEl.removeAttribute("selected");
        }
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, "selected");
  },
  INPUT: function(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, "checked");
    syncBooleanAttrProp(fromEl, toEl, "disabled");
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute("value")) {
      fromEl.removeAttribute("value");
    }
  },
  TEXTAREA: function(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function(fromEl, toEl) {
    if (!toEl.hasAttribute("multiple")) {
      var selectedIndex = -1;
      var i = 0;
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === "OPTGROUP") {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === "OPTION") {
            if (curChild.hasAttribute("selected")) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {
}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute("id") || node.id;
  }
}
function morphdomFactory(morphAttrs2) {
  return function morphdom2(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === "string") {
      if (fromNode.nodeName === "#document" || fromNode.nodeName === "HTML" || fromNode.nodeName === "BODY") {
        var toNodeHtml = toNode;
        toNode = doc.createElement("html");
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true;
    var fromNodesLookup = Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = void 0;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            addKeyedRemoval(key);
          } else {
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }
    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          addKeyedRemoval(curFromNodeKey);
        } else {
          removeNode(curFromNodeChild, fromEl, true);
        }
        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly2) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly2) {
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }
        morphAttrs2(fromEl, toEl);
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== "TEXTAREA") {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;
      outer:
        while (curToNodeChild) {
          toNextSibling = curToNodeChild.nextSibling;
          curToNodeKey = getNodeKey(curToNodeChild);
          while (curFromNodeChild) {
            fromNextSibling = curFromNodeChild.nextSibling;
            if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
              curToNodeChild = toNextSibling;
              curFromNodeChild = fromNextSibling;
              continue outer;
            }
            curFromNodeKey = getNodeKey(curFromNodeChild);
            var curFromNodeType = curFromNodeChild.nodeType;
            var isCompatible = void 0;
            if (curFromNodeType === curToNodeChild.nodeType) {
              if (curFromNodeType === ELEMENT_NODE) {
                if (curToNodeKey) {
                  if (curToNodeKey !== curFromNodeKey) {
                    if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                      if (fromNextSibling === matchingFromEl) {
                        isCompatible = false;
                      } else {
                        fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                        if (curFromNodeKey) {
                          addKeyedRemoval(curFromNodeKey);
                        } else {
                          removeNode(curFromNodeChild, fromEl, true);
                        }
                        curFromNodeChild = matchingFromEl;
                      }
                    } else {
                      isCompatible = false;
                    }
                  }
                } else if (curFromNodeKey) {
                  isCompatible = false;
                }
                isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                if (isCompatible) {
                  morphEl(curFromNodeChild, curToNodeChild);
                }
              } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                isCompatible = true;
                if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                  curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                }
              }
            }
            if (isCompatible) {
              curToNodeChild = toNextSibling;
              curFromNodeChild = fromNextSibling;
              continue outer;
            }
            if (curFromNodeKey) {
              addKeyedRemoval(curFromNodeKey);
            } else {
              removeNode(curFromNodeChild, fromEl, true);
            }
            curFromNodeChild = fromNextSibling;
          }
          if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
            fromEl.appendChild(matchingFromEl);
            morphEl(matchingFromEl, curToNodeChild);
          } else {
            var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
            if (onBeforeNodeAddedResult !== false) {
              if (onBeforeNodeAddedResult) {
                curToNodeChild = onBeforeNodeAddedResult;
              }
              if (curToNodeChild.actualize) {
                curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
              }
              fromEl.appendChild(curToNodeChild);
              handleNodeAdded(curToNodeChild);
            }
          }
          curToNodeChild = toNextSibling;
          curFromNodeChild = fromNextSibling;
        }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    }
    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
var morphdom_esm_default = morphdom;

// js/live_element/dom_patch.js
var DOMPatch = class {
  static patchEl(fromEl, toEl, activeElement) {
    morphdom_esm_default(fromEl, toEl, {
      childrenOnly: false,
      onBeforeElUpdated: (fromEl2, toEl2) => {
        if (activeElement && activeElement.isSameNode(fromEl2) && dom_default.isFormInput(fromEl2)) {
          dom_default.mergeFocusedInput(fromEl2, toEl2);
          return false;
        }
      }
    });
  }
  constructor(view, container, id, html, targetCID) {
    this.view = view;
    this.liveSocket = view.liveSocket;
    this.container = container;
    this.id = id;
    this.rootID = view.root.id;
    this.html = html;
    this.targetCID = targetCID;
    this.cidPatch = isCid(this.targetCID);
    this.callbacks = {
      beforeadded: [],
      beforeupdated: [],
      beforephxChildAdded: [],
      afteradded: [],
      afterupdated: [],
      afterdiscarded: [],
      afterphxChildAdded: [],
      aftertransitionsDiscarded: []
    };
  }
  before(kind, callback) {
    this.callbacks[`before${kind}`].push(callback);
  }
  after(kind, callback) {
    this.callbacks[`after${kind}`].push(callback);
  }
  trackBefore(kind, ...args) {
    this.callbacks[`before${kind}`].forEach((callback) => callback(...args));
  }
  trackAfter(kind, ...args) {
    this.callbacks[`after${kind}`].forEach((callback) => callback(...args));
  }
  markPrunableContentForRemoval() {
    dom_default.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", (el) => {
      el.setAttribute(PHX_PRUNE, "");
    });
  }
  perform() {
    let { view, liveSocket, container, html } = this;
    let targetContainer = this.isCIDPatch() ? this.targetCIDContainer(html) : container;
    if (this.isCIDPatch() && !targetContainer) {
      return;
    }
    let focused = liveSocket.getActiveElement();
    let { selectionStart, selectionEnd } = focused && dom_default.hasSelectionRange(focused) ? focused : {};
    let phxUpdate = liveSocket.binding(PHX_UPDATE);
    let phxFeedbackFor = liveSocket.binding(PHX_FEEDBACK_FOR);
    let disableWith = liveSocket.binding(PHX_DISABLE_WITH);
    let phxTriggerExternal = liveSocket.binding(PHX_TRIGGER_ACTION);
    let phxRemove = liveSocket.binding("remove");
    let added = [];
    let updates = [];
    let appendPrependUpdates = [];
    let pendingRemoves = [];
    let externalFormTriggered = null;
    let diffHTML = liveSocket.time("premorph container prep", () => {
      return this.buildDiffHTML(container, html, phxUpdate, targetContainer);
    });
    this.trackBefore("added", container);
    this.trackBefore("updated", container, container);
    liveSocket.time("morphdom", () => {
      morphdom_esm_default(targetContainer, diffHTML, {
        childrenOnly: true,
        getNodeKey: (node) => {
          return dom_default.isPhxDestroyed(node) ? null : node.id;
        },
        onBeforeNodeAdded: (el) => {
          this.trackBefore("added", el);
          return el;
        },
        onNodeAdded: (el) => {
          if (el instanceof HTMLImageElement && el.srcset) {
            el.srcset = el.srcset;
          } else if (el instanceof HTMLVideoElement && el.autoplay) {
            el.play();
          }
          if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
            externalFormTriggered = el;
          }
          dom_default.discardError(targetContainer, el, phxFeedbackFor);
          if (dom_default.isPhxChild(el) && view.ownsElement(el)) {
            this.trackAfter("phxChildAdded", el);
          }
          added.push(el);
        },
        onNodeDiscarded: (el) => {
          if (dom_default.isPhxChild(el)) {
            liveSocket.destroyViewByEl(el);
          }
          this.trackAfter("discarded", el);
        },
        onBeforeNodeDiscarded: (el) => {
          if (el.getAttribute && el.getAttribute(PHX_PRUNE) !== null) {
            return true;
          }
          if (el.parentNode !== null && dom_default.isPhxUpdate(el.parentNode, phxUpdate, ["append", "prepend"]) && el.id) {
            return false;
          }
          if (el.getAttribute && el.getAttribute(phxRemove)) {
            pendingRemoves.push(el);
            return false;
          }
          if (this.skipCIDSibling(el)) {
            return false;
          }
          return true;
        },
        onElUpdated: (el) => {
          if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
            externalFormTriggered = el;
          }
          updates.push(el);
        },
        onBeforeElUpdated: (fromEl, toEl) => {
          dom_default.cleanChildNodes(toEl, phxUpdate);
          if (this.skipCIDSibling(toEl)) {
            return false;
          }
          if (dom_default.isIgnored(fromEl, phxUpdate)) {
            this.trackBefore("updated", fromEl, toEl);
            dom_default.mergeAttrs(fromEl, toEl, { isIgnored: true });
            updates.push(fromEl);
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          if (fromEl.type === "number" && (fromEl.validity && fromEl.validity.badInput)) {
            return false;
          }
          if (!dom_default.syncPendingRef(fromEl, toEl, disableWith)) {
            if (dom_default.isUploadInput(fromEl)) {
              this.trackBefore("updated", fromEl, toEl);
              updates.push(fromEl);
            }
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          if (dom_default.isPhxChild(toEl)) {
            let prevSession = fromEl.getAttribute(PHX_SESSION);
            dom_default.mergeAttrs(fromEl, toEl, { exclude: [PHX_STATIC] });
            if (prevSession !== "") {
              fromEl.setAttribute(PHX_SESSION, prevSession);
            }
            fromEl.setAttribute(PHX_ROOT_ID, this.rootID);
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          dom_default.copyPrivates(toEl, fromEl);
          dom_default.discardError(targetContainer, toEl, phxFeedbackFor);
          let isFocusedFormEl = focused && fromEl.isSameNode(focused) && dom_default.isFormInput(fromEl);
          if (isFocusedFormEl) {
            this.trackBefore("updated", fromEl, toEl);
            dom_default.mergeFocusedInput(fromEl, toEl);
            dom_default.syncAttrsToProps(fromEl);
            updates.push(fromEl);
            dom_default.applyStickyOperations(fromEl);
            return false;
          } else {
            if (dom_default.isPhxUpdate(toEl, phxUpdate, ["append", "prepend"])) {
              appendPrependUpdates.push(new DOMPostMorphRestorer(fromEl, toEl, toEl.getAttribute(phxUpdate)));
            }
            dom_default.syncAttrsToProps(toEl);
            dom_default.applyStickyOperations(toEl);
            this.trackBefore("updated", fromEl, toEl);
            return true;
          }
        }
      });
    });
    if (liveSocket.isDebugEnabled()) {
      detectDuplicateIds();
    }
    if (appendPrependUpdates.length > 0) {
      liveSocket.time("post-morph append/prepend restoration", () => {
        appendPrependUpdates.forEach((update) => update.perform());
      });
    }
    liveSocket.silenceEvents(() => dom_default.restoreFocus(focused, selectionStart, selectionEnd));
    dom_default.dispatchEvent(document, "phx:update");
    added.forEach((el) => this.trackAfter("added", el));
    updates.forEach((el) => this.trackAfter("updated", el));
    if (pendingRemoves.length > 0) {
      liveSocket.transitionRemoves(pendingRemoves);
      liveSocket.requestDOMUpdate(() => {
        pendingRemoves.forEach((el) => el.remove());
        this.trackAfter("transitionsDiscarded", pendingRemoves);
      });
    }
    if (externalFormTriggered) {
      liveSocket.disconnect();
      externalFormTriggered.submit();
    }
    return true;
  }
  isCIDPatch() {
    return this.cidPatch;
  }
  skipCIDSibling(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.getAttribute(PHX_SKIP) !== null;
  }
  targetCIDContainer(html) {
    if (!this.isCIDPatch()) {
      return;
    }
    let [first, ...rest] = dom_default.findComponentNodeList(this.container, this.targetCID);
    if (rest.length === 0 && dom_default.childNodeLength(html) === 1) {
      return first;
    } else {
      return first && first.parentNode;
    }
  }
  buildDiffHTML(container, html, phxUpdate, targetContainer) {
    let isCIDPatch = this.isCIDPatch();
    let isCIDWithSingleRoot = isCIDPatch && targetContainer.getAttribute(PHX_COMPONENT) === this.targetCID.toString();
    if (!isCIDPatch || isCIDWithSingleRoot) {
      return html;
    } else {
      let diffContainer = null;
      let template = document.createElement("template");
      diffContainer = dom_default.cloneNode(targetContainer);
      let [firstComponent, ...rest] = dom_default.findComponentNodeList(diffContainer, this.targetCID);
      template.innerHTML = html;
      rest.forEach((el) => el.remove());
      Array.from(diffContainer.childNodes).forEach((child) => {
        if (child.id && child.nodeType === Node.ELEMENT_NODE && child.getAttribute(PHX_COMPONENT) !== this.targetCID.toString()) {
          child.setAttribute(PHX_SKIP, "");
          child.innerHTML = "";
        }
      });
      Array.from(template.content.childNodes).forEach((el) => diffContainer.insertBefore(el, firstComponent));
      firstComponent.remove();
      return diffContainer.outerHTML;
    }
  }
};

// js/live_element/rendered.js
var Rendered = class {
  static extract(diff) {
    let { [REPLY]: reply, [EVENTS]: events, [TITLE]: title } = diff;
    delete diff[REPLY];
    delete diff[EVENTS];
    delete diff[TITLE];
    return { diff, title, reply: reply || null, events: events || [] };
  }
  constructor(viewId, rendered) {
    this.viewId = viewId;
    this.rendered = {};
    this.mergeDiff(rendered);
  }
  parentViewId() {
    return this.viewId;
  }
  toString(onlyCids) {
    return this.recursiveToString(this.rendered, this.rendered[COMPONENTS], onlyCids);
  }
  recursiveToString(rendered, components = rendered[COMPONENTS], onlyCids) {
    onlyCids = onlyCids ? new Set(onlyCids) : null;
    let output = { buffer: "", components, onlyCids };
    this.toOutputBuffer(rendered, null, output);
    return output.buffer;
  }
  componentCIDs(diff) {
    return Object.keys(diff[COMPONENTS] || {}).map((i) => parseInt(i));
  }
  isComponentOnlyDiff(diff) {
    if (!diff[COMPONENTS]) {
      return false;
    }
    return Object.keys(diff).length === 1;
  }
  getComponent(diff, cid) {
    return diff[COMPONENTS][cid];
  }
  mergeDiff(diff) {
    let newc = diff[COMPONENTS];
    let cache = {};
    delete diff[COMPONENTS];
    this.rendered = this.mutableMerge(this.rendered, diff);
    this.rendered[COMPONENTS] = this.rendered[COMPONENTS] || {};
    if (newc) {
      let oldc = this.rendered[COMPONENTS];
      for (let cid in newc) {
        newc[cid] = this.cachedFindComponent(cid, newc[cid], oldc, newc, cache);
      }
      for (let cid in newc) {
        oldc[cid] = newc[cid];
      }
      diff[COMPONENTS] = newc;
    }
  }
  cachedFindComponent(cid, cdiff, oldc, newc, cache) {
    if (cache[cid]) {
      return cache[cid];
    } else {
      let ndiff, stat, scid = cdiff[STATIC];
      if (isCid(scid)) {
        let tdiff;
        if (scid > 0) {
          tdiff = this.cachedFindComponent(scid, newc[scid], oldc, newc, cache);
        } else {
          tdiff = oldc[-scid];
        }
        stat = tdiff[STATIC];
        ndiff = this.cloneMerge(tdiff, cdiff);
        ndiff[STATIC] = stat;
      } else {
        ndiff = cdiff[STATIC] !== void 0 ? cdiff : this.cloneMerge(oldc[cid] || {}, cdiff);
      }
      cache[cid] = ndiff;
      return ndiff;
    }
  }
  mutableMerge(target, source) {
    if (source[STATIC] !== void 0) {
      return source;
    } else {
      this.doMutableMerge(target, source);
      return target;
    }
  }
  doMutableMerge(target, source) {
    for (let key in source) {
      let val = source[key];
      let targetVal = target[key];
      if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
        this.doMutableMerge(targetVal, val);
      } else {
        target[key] = val;
      }
    }
  }
  cloneMerge(target, source) {
    let merged = { ...target, ...source };
    for (let key in merged) {
      let val = source[key];
      let targetVal = target[key];
      if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
        merged[key] = this.cloneMerge(targetVal, val);
      }
    }
    return merged;
  }
  componentToString(cid) {
    return this.recursiveCIDToString(this.rendered[COMPONENTS], cid);
  }
  pruneCIDs(cids) {
    cids.forEach((cid) => delete this.rendered[COMPONENTS][cid]);
  }
  get() {
    return this.rendered;
  }
  isNewFingerprint(diff = {}) {
    return !!diff[STATIC];
  }
  templateStatic(part, templates) {
    if (typeof part === "number") {
      return templates[part];
    } else {
      return part;
    }
  }
  toOutputBuffer(rendered, templates, output) {
    if (rendered[DYNAMICS]) {
      return this.comprehensionToBuffer(rendered, templates, output);
    }
    let { [STATIC]: statics } = rendered;
    statics = this.templateStatic(statics, templates);
    output.buffer += statics[0];
    for (let i = 1; i < statics.length; i++) {
      this.dynamicToBuffer(rendered[i - 1], templates, output);
      output.buffer += statics[i];
    }
  }
  comprehensionToBuffer(rendered, templates, output) {
    let { [DYNAMICS]: dynamics, [STATIC]: statics } = rendered;
    statics = this.templateStatic(statics, templates);
    let compTemplates = rendered[TEMPLATES];
    for (let d = 0; d < dynamics.length; d++) {
      let dynamic = dynamics[d];
      output.buffer += statics[0];
      for (let i = 1; i < statics.length; i++) {
        this.dynamicToBuffer(dynamic[i - 1], compTemplates, output);
        output.buffer += statics[i];
      }
    }
  }
  dynamicToBuffer(rendered, templates, output) {
    if (typeof rendered === "number") {
      output.buffer += this.recursiveCIDToString(output.components, rendered, output.onlyCids);
    } else if (isObject(rendered)) {
      this.toOutputBuffer(rendered, templates, output);
    } else {
      output.buffer += rendered;
    }
  }
  recursiveCIDToString(components, cid, onlyCids) {
    let component = components[cid] || logError(`no component for CID ${cid}`, components);
    let template = document.createElement("template");
    template.innerHTML = this.recursiveToString(component, components, onlyCids);
    let container = template.content;
    let skip = onlyCids && !onlyCids.has(cid);
    let [hasChildNodes, hasChildComponents] = Array.from(container.childNodes).reduce(([hasNodes, hasComponents], child, i) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.getAttribute(PHX_COMPONENT)) {
          return [hasNodes, true];
        }
        child.setAttribute(PHX_COMPONENT, cid);
        if (!child.id) {
          child.id = `${this.parentViewId()}-${cid}-${i}`;
        }
        if (skip) {
          child.setAttribute(PHX_SKIP, "");
          child.innerHTML = "";
        }
        return [true, hasComponents];
      } else {
        if (child.nodeValue.trim() !== "") {
          logError(`only HTML element tags are allowed at the root of components.

got: "${child.nodeValue.trim()}"

within:
`, template.innerHTML.trim());
          child.replaceWith(this.createSpan(child.nodeValue, cid));
          return [true, hasComponents];
        } else {
          child.remove();
          return [hasNodes, hasComponents];
        }
      }
    }, [false, false]);
    if (!hasChildNodes && !hasChildComponents) {
      logError("expected at least one HTML element tag inside a component, but the component is empty:\n", template.innerHTML.trim());
      return this.createSpan("", cid).outerHTML;
    } else if (!hasChildNodes && hasChildComponents) {
      logError("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", template.innerHTML.trim());
      return template.innerHTML;
    } else {
      return template.innerHTML;
    }
  }
  createSpan(text, cid) {
    let span = document.createElement("span");
    span.innerText = text;
    span.setAttribute(PHX_COMPONENT, cid);
    return span;
  }
};

// js/live_element/view_hook.js
var viewHookID = 1;
var ViewHook = class {
  static makeID() {
    return viewHookID++;
  }
  static elementID(el) {
    return el.phxHookId;
  }
  constructor(view, el, callbacks) {
    this.__view = view;
    this.__liveSocket = view.liveSocket;
    this.__callbacks = callbacks;
    this.__listeners = new Set();
    this.__isDisconnected = false;
    this.el = el;
    this.el.phxHookId = this.constructor.makeID();
    for (let key in this.__callbacks) {
      this[key] = this.__callbacks[key];
    }
  }
  __mounted() {
    this.mounted && this.mounted();
  }
  __updated() {
    this.updated && this.updated();
  }
  __beforeUpdate() {
    this.beforeUpdate && this.beforeUpdate();
  }
  __destroyed() {
    this.destroyed && this.destroyed();
  }
  __reconnected() {
    if (this.__isDisconnected) {
      this.__isDisconnected = false;
      this.reconnected && this.reconnected();
    }
  }
  __disconnected() {
    this.__isDisconnected = true;
    this.disconnected && this.disconnected();
  }
  pushEvent(event, payload = {}, onReply = function() {
  }) {
    return this.__view.pushHookEvent(null, event, payload, onReply);
  }
  pushEventTo(phxTarget, event, payload = {}, onReply = function() {
  }) {
    return this.__view.withinTargets(phxTarget, (view, targetCtx) => {
      return view.pushHookEvent(targetCtx, event, payload, onReply);
    });
  }
  handleEvent(event, callback) {
    let callbackRef = (customEvent, bypass) => bypass ? event : callback(customEvent.detail);
    window.addEventListener(`phx:${event}`, callbackRef);
    this.__listeners.add(callbackRef);
    return callbackRef;
  }
  removeHandleEvent(callbackRef) {
    let event = callbackRef(null, true);
    window.removeEventListener(`phx:${event}`, callbackRef);
    this.__listeners.delete(callbackRef);
  }
  upload(name, files) {
    return this.__view.dispatchUploads(name, files);
  }
  uploadTo(phxTarget, name, files) {
    return this.__view.withinTargets(phxTarget, (view) => view.dispatchUploads(name, files));
  }
  __cleanup__() {
    this.__listeners.forEach((callbackRef) => this.removeHandleEvent(callbackRef));
  }
};

// js/live_element/view.js
var serializeForm = (form, meta = {}) => {
  let formData = new FormData(form);
  let toRemove = [];
  formData.forEach((val, key, _index) => {
    if (val instanceof File) {
      toRemove.push(key);
    }
  });
  toRemove.forEach((key) => formData.delete(key));
  let params = new URLSearchParams();
  for (let [key, val] of formData.entries()) {
    params.append(key, val);
  }
  for (let metaKey in meta) {
    params.append(metaKey, meta[metaKey]);
  }
  return params.toString();
};
var View = class {
  constructor(el, liveSocket, parentView, flash) {
    this.liveSocket = liveSocket;
    this.flash = flash;
    this.parent = parentView;
    this.root = parentView ? parentView.root : this;
    this.el = el;
    this.id = this.el.id;
    this.ref = 0;
    this.childJoins = 0;
    this.loaderTimer = null;
    this.pendingDiffs = [];
    this.pruningCIDs = [];
    this.redirect = false;
    this.href = null;
    this.joinCount = this.parent ? this.parent.joinCount - 1 : 0;
    this.joinPending = true;
    this.destroyed = false;
    this.joinCallback = function() {
    };
    this.stopCallback = function() {
    };
    this.pendingJoinOps = this.parent ? null : [];
    this.viewHooks = {};
    this.uploaders = {};
    this.formSubmits = [];
    this.children = this.parent ? null : {};
    this.root.children[this.id] = {};
    this.channel = this.liveSocket.channel(`lv:${this.id}`, () => {
      return {
        redirect: this.redirect ? this.href : void 0,
        url: this.redirect ? void 0 : this.href || void 0,
        params: this.connectParams(),
        session: this.getSession(),
        static: this.getStatic(),
        flash: this.flash
      };
    });
    this.showLoader(this.liveSocket.loaderTimeout);
    this.bindChannel();
  }
  setHref(href) {
    this.href = href;
  }
  setRedirect(href) {
    this.redirect = true;
    this.href = href;
  }
  isMain() {
    return this.liveSocket.main === this;
  }
  connectParams() {
    let params = this.liveSocket.params(this.el);
    let manifest = dom_default.all(document, `[${this.binding(PHX_TRACK_STATIC)}]`).map((node) => node.src || node.href).filter((url) => typeof url === "string");
    if (manifest.length > 0) {
      params["_track_static"] = manifest;
    }
    params["_mounts"] = this.joinCount;
    return params;
  }
  isConnected() {
    return this.channel.canPush();
  }
  getSession() {
    return this.el.getAttribute(PHX_SESSION);
  }
  getStatic() {
    let val = this.el.getAttribute(PHX_STATIC);
    return val === "" ? null : val;
  }
  destroy(callback = function() {
  }) {
    this.destroyAllChildren();
    this.destroyed = true;
    delete this.root.children[this.id];
    if (this.parent) {
      delete this.root.children[this.parent.id][this.id];
    }
    clearTimeout(this.loaderTimer);
    let onFinished = () => {
      callback();
      for (let id in this.viewHooks) {
        this.destroyHook(this.viewHooks[id]);
      }
    };
    dom_default.markPhxChildDestroyed(this.el);
    this.log("destroyed", () => ["the child has been removed from the parent"]);
    this.channel.leave().receive("ok", onFinished).receive("error", onFinished).receive("timeout", onFinished);
  }
  setContainerClasses(...classes) {
    this.el.classList.remove(PHX_CONNECTED_CLASS, PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
    this.el.classList.add(...classes);
  }
  isLoading() {
    return this.el.classList.contains(PHX_DISCONNECTED_CLASS);
  }
  showLoader(timeout) {
    clearTimeout(this.loaderTimer);
    if (timeout) {
      this.loaderTimer = setTimeout(() => this.showLoader(), timeout);
    } else {
      for (let id in this.viewHooks) {
        this.viewHooks[id].__disconnected();
      }
      this.setContainerClasses(PHX_DISCONNECTED_CLASS);
    }
  }
  hideLoader() {
    clearTimeout(this.loaderTimer);
    this.setContainerClasses(PHX_CONNECTED_CLASS);
  }
  triggerReconnected() {
    for (let id in this.viewHooks) {
      this.viewHooks[id].__reconnected();
    }
  }
  log(kind, msgCallback) {
    this.liveSocket.log(this, kind, msgCallback);
  }
  withinTargets(phxTarget, callback) {
    if (phxTarget instanceof HTMLElement) {
      return this.liveSocket.owner(phxTarget, (view) => callback(view, phxTarget));
    }
    if (/^(0|[1-9]\d*)$/.test(phxTarget)) {
      let targets = dom_default.findComponentNodeList(this.el, phxTarget);
      if (targets.length === 0) {
        logError(`no component found matching phx-target of ${phxTarget}`);
      } else {
        callback(this, targets[0]);
      }
    } else {
      let targets = Array.from(document.querySelectorAll(phxTarget));
      if (targets.length === 0) {
        logError(`nothing found matching the phx-target selector "${phxTarget}"`);
      }
      targets.forEach((target) => this.liveSocket.owner(target, (view) => callback(view, target)));
    }
  }
  applyDiff(type, rawDiff, callback) {
    this.log(type, () => ["", clone(rawDiff)]);
    let { diff, reply, events, title } = Rendered.extract(rawDiff);
    if (title) {
      dom_default.putTitle(title);
    }
    callback({ diff, reply, events });
    return reply;
  }
  onJoin(resp) {
    console.log(resp);
    let { rendered, container } = resp;
    if (container) {
      let [tag, attrs] = container;
      this.el = dom_default.replaceRootContainer(this.el, tag, attrs);
    }
    this.childJoins = 0;
    this.joinPending = true;
    this.flash = null;
    browser_default.dropLocal(this.liveSocket.localStorage, window.location.pathname, CONSECUTIVE_RELOADS);
    this.applyDiff("mount", rendered, ({ diff, events }) => {
      this.rendered = new Rendered(this.id, diff);
      let html = this.renderContainer(null, "join");
      console.log(html);
      this.dropPendingRefs();
      let forms = this.formsForRecovery(html);
      console.log(forms);
      this.joinCount++;
      if (forms.length > 0) {
        forms.forEach(([form, newForm, newCid], i) => {
          this.pushFormRecovery(form, newCid, (resp2) => {
            if (i === forms.length - 1) {
              this.onJoinComplete(resp2, html, events);
            }
          });
        });
      } else {
        this.onJoinComplete(resp, html, events);
      }
    });
  }
  dropPendingRefs() {
    dom_default.all(this.el, `[${PHX_REF}]`, (el) => el.removeAttribute(PHX_REF));
  }
  onJoinComplete({ live_patch }, html, events) {
    if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) {
      return this.applyJoinPatch(live_patch, html, events);
    }
    let newChildren = dom_default.findPhxChildrenInFragment(html, this.id).filter((toEl) => {
      let fromEl = toEl.id && this.el.querySelector(`[id="${toEl.id}"]`);
      let phxStatic = fromEl && fromEl.getAttribute(PHX_STATIC);
      if (phxStatic) {
        toEl.setAttribute(PHX_STATIC, phxStatic);
      }
      return this.joinChild(toEl);
    });
    if (newChildren.length === 0) {
      if (this.parent) {
        this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
        this.parent.ackJoin(this);
      } else {
        this.onAllChildJoinsComplete();
        this.applyJoinPatch(live_patch, html, events);
      }
    } else {
      this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
    }
  }
  attachTrueDocEl() {
    this.el = dom_default.byId(this.id);
    this.el.setAttribute(PHX_ROOT_ID, this.root.id);
  }
  dispatchEvents(events) {
    events.forEach(([event, payload]) => {
      window.dispatchEvent(new CustomEvent(`phx:hook:${event}`, { detail: payload }));
    });
  }
  applyJoinPatch(live_patch, html, events) {
    console.log("applying join patch");
    this.attachTrueDocEl();
    let patch = new DOMPatch(this, this.el.renderRoot, this.id, html, null);
    patch.markPrunableContentForRemoval();
    this.performPatch(patch, false);
    this.joinNewChildren();
    dom_default.all(this.el, `[${this.binding(PHX_HOOK)}], [data-phx-${PHX_HOOK}]`, (hookEl) => {
      let hook = this.addHook(hookEl);
      if (hook) {
        hook.__mounted();
      }
    });
    this.joinPending = false;
    this.dispatchEvents(events);
    this.applyPendingUpdates();
    if (live_patch) {
      let { kind, to } = live_patch;
      this.liveSocket.historyPatch(to, kind);
    }
    this.hideLoader();
    if (this.joinCount > 1) {
      this.triggerReconnected();
    }
    this.stopCallback();
  }
  triggerBeforeUpdateHook(fromEl, toEl) {
    this.liveSocket.triggerDOM("onBeforeElUpdated", [fromEl, toEl]);
    let hook = this.getHook(fromEl);
    let isIgnored = hook && dom_default.isIgnored(fromEl, this.binding(PHX_UPDATE));
    if (hook && !fromEl.isEqualNode(toEl) && !(isIgnored && isEqualObj(fromEl.dataset, toEl.dataset))) {
      hook.__beforeUpdate();
      return hook;
    }
  }
  performPatch(patch, pruneCids) {
    let destroyedCIDs = [];
    let phxChildrenAdded = false;
    let updatedHookIds = new Set();
    patch.after("added", (el) => {
      this.liveSocket.triggerDOM("onNodeAdded", [el]);
      let newHook = this.addHook(el);
      if (newHook) {
        newHook.__mounted();
      }
    });
    patch.after("phxChildAdded", (_el) => phxChildrenAdded = true);
    patch.before("updated", (fromEl, toEl) => {
      let hook = this.triggerBeforeUpdateHook(fromEl, toEl);
      if (hook) {
        updatedHookIds.add(fromEl.id);
      }
    });
    patch.after("updated", (el) => {
      if (updatedHookIds.has(el.id)) {
        this.getHook(el).__updated();
      }
    });
    patch.after("discarded", (el) => {
      let cid = this.componentID(el);
      if (isCid(cid) && destroyedCIDs.indexOf(cid) === -1) {
        destroyedCIDs.push(cid);
      }
      let hook = this.getHook(el);
      hook && this.destroyHook(hook);
    });
    patch.perform();
    if (pruneCids) {
      this.maybePushComponentsDestroyed(destroyedCIDs);
    }
    return phxChildrenAdded;
  }
  joinNewChildren() {
    dom_default.findPhxChildren(this.el, this.id).forEach((el) => this.joinChild(el));
  }
  getChildById(id) {
    return this.root.children[this.id][id];
  }
  getDescendentByEl(el) {
    if (el.id === this.id) {
      return this;
    } else {
      return this.children[el.getAttribute(PHX_PARENT_ID)][el.id];
    }
  }
  destroyDescendent(id) {
    for (let parentId in this.root.children) {
      for (let childId in this.root.children[parentId]) {
        if (childId === id) {
          return this.root.children[parentId][childId].destroy();
        }
      }
    }
  }
  joinChild(el) {
    let child = this.getChildById(el.id);
    if (!child) {
      let view = new View(el, this.liveSocket, this);
      this.root.children[this.id][view.id] = view;
      view.join();
      this.childJoins++;
      return true;
    }
  }
  isJoinPending() {
    return this.joinPending;
  }
  ackJoin(_child) {
    this.childJoins--;
    if (this.childJoins === 0) {
      if (this.parent) {
        this.parent.ackJoin(this);
      } else {
        this.onAllChildJoinsComplete();
      }
    }
  }
  onAllChildJoinsComplete() {
    this.joinCallback();
    this.pendingJoinOps.forEach(([view, op]) => {
      if (!view.isDestroyed()) {
        op();
      }
    });
    this.pendingJoinOps = [];
  }
  update(diff, events) {
    if (this.isJoinPending() || this.liveSocket.hasPendingLink()) {
      return this.pendingDiffs.push({ diff, events });
    }
    this.rendered.mergeDiff(diff);
    let phxChildrenAdded = false;
    if (this.rendered.isComponentOnlyDiff(diff)) {
      this.liveSocket.time("component patch complete", () => {
        let parentCids = dom_default.findParentCIDs(this.el, this.rendered.componentCIDs(diff));
        parentCids.forEach((parentCID) => {
          if (this.componentPatch(this.rendered.getComponent(diff, parentCID), parentCID)) {
            phxChildrenAdded = true;
          }
        });
      });
    } else if (!isEmpty(diff)) {
      this.liveSocket.time("full patch complete", () => {
        let html = this.renderContainer(diff, "update");
        let patch = new DOMPatch(this, this.el.renderRoot, this.id, html, null);
        phxChildrenAdded = this.performPatch(patch, true);
      });
    }
    this.dispatchEvents(events);
    if (phxChildrenAdded) {
      this.joinNewChildren();
    }
  }
  renderContainer(diff, kind) {
    return this.liveSocket.time(`toString diff (${kind})`, () => {
      let tag = this.el.tagName;
      let cids = diff ? this.rendered.componentCIDs(diff).concat(this.pruningCIDs) : null;
      let html = this.rendered.toString(cids);
      return `<${tag}>${html}</${tag}>`;
    });
  }
  componentPatch(diff, cid) {
    if (isEmpty(diff))
      return false;
    let html = this.rendered.componentToString(cid);
    let patch = new DOMPatch(this, this.el.renderRoot, this.id, html, cid);
    let childrenAdded = this.performPatch(patch, true);
    return childrenAdded;
  }
  getHook(el) {
    return this.viewHooks[ViewHook.elementID(el)];
  }
  addHook(el) {
    if (ViewHook.elementID(el) || !el.getAttribute) {
      return;
    }
    let hookName = el.getAttribute(`data-phx-${PHX_HOOK}`) || el.getAttribute(this.binding(PHX_HOOK));
    if (hookName && !this.ownsElement(el)) {
      return;
    }
    let callbacks = this.liveSocket.getHookCallbacks(hookName);
    if (callbacks) {
      if (!el.id) {
        logError(`no DOM ID for hook "${hookName}". Hooks require a unique ID on each element.`, el);
      }
      let hook = new ViewHook(this, el, callbacks);
      this.viewHooks[ViewHook.elementID(hook.el)] = hook;
      return hook;
    } else if (hookName !== null) {
      logError(`unknown hook found for "${hookName}"`, el);
    }
  }
  destroyHook(hook) {
    hook.__destroyed();
    hook.__cleanup__();
    delete this.viewHooks[ViewHook.elementID(hook.el)];
  }
  applyPendingUpdates() {
    this.pendingDiffs.forEach(({ diff, events }) => this.update(diff, events));
    this.pendingDiffs = [];
  }
  onChannel(event, cb) {
    this.liveSocket.onChannel(this.channel, event, (resp) => {
      if (this.isJoinPending()) {
        this.root.pendingJoinOps.push([this, () => cb(resp)]);
      } else {
        cb(resp);
      }
    });
  }
  bindChannel() {
    this.liveSocket.onChannel(this.channel, "diff", (rawDiff) => {
      this.applyDiff("update", rawDiff, ({ diff, events }) => this.update(diff, events));
    });
    this.onChannel("redirect", ({ to, flash }) => this.onRedirect({ to, flash }));
    this.onChannel("live_patch", (redir) => this.onLivePatch(redir));
    this.onChannel("live_redirect", (redir) => this.onLiveRedirect(redir));
    this.channel.onError((reason) => this.onError(reason));
    this.channel.onClose((reason) => this.onClose(reason));
  }
  destroyAllChildren() {
    for (let id in this.root.children[this.id]) {
      this.getChildById(id).destroy();
    }
  }
  onLiveRedirect(redir) {
    let { to, kind, flash } = redir;
    let url = this.expandURL(to);
    this.liveSocket.historyRedirect(url, kind, flash);
  }
  onLivePatch(redir) {
    let { to, kind } = redir;
    this.href = this.expandURL(to);
    this.liveSocket.historyPatch(to, kind);
  }
  expandURL(to) {
    return to.startsWith("/") ? `${window.location.protocol}//${window.location.host}${to}` : to;
  }
  onRedirect({ to, flash }) {
    this.liveSocket.redirect(to, flash);
  }
  isDestroyed() {
    return this.destroyed;
  }
  join(callback) {
    if (!this.parent) {
      this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" });
    }
    this.joinCallback = () => callback && callback(this.joinCount);
    this.liveSocket.wrapPush(this, { timeout: false }, () => {
      return this.channel.join().receive("ok", (data) => !this.isDestroyed() && this.onJoin(data)).receive("error", (resp) => !this.isDestroyed() && this.onJoinError(resp)).receive("timeout", () => !this.isDestroyed() && this.onJoinError({ reason: "timeout" }));
    });
  }
  onJoinError(resp) {
    console.log(resp);
    if (resp.reason === "unauthorized" || resp.reason === "stale") {
      this.log("error", () => ["unauthorized live_redirect. Falling back to page request", resp]);
      return this.onRedirect({ to: this.href });
    }
    if (resp.redirect || resp.live_redirect) {
      this.joinPending = false;
      this.channel.leave();
    }
    if (resp.redirect) {
      return this.onRedirect(resp.redirect);
    }
    if (resp.live_redirect) {
      return this.onLiveRedirect(resp.live_redirect);
    }
    this.log("error", () => ["unable to join", resp]);
    return this.liveSocket.reloadWithJitter(this);
  }
  onClose(reason) {
    if (this.isDestroyed()) {
      return;
    }
    if (this.isJoinPending() && document.visibilityState !== "hidden" || this.liveSocket.hasPendingLink() && reason !== "leave") {
      return this.liveSocket.reloadWithJitter(this);
    }
    this.destroyAllChildren();
    this.liveSocket.dropActiveElement(this);
    if (document.activeElement) {
      document.activeElement.blur();
    }
    if (this.liveSocket.isUnloaded()) {
      this.showLoader(BEFORE_UNLOAD_LOADER_TIMEOUT);
    }
  }
  onError(reason) {
    this.onClose(reason);
    this.log("error", () => ["view crashed", reason]);
    if (!this.liveSocket.isUnloaded()) {
      this.displayError();
    }
  }
  displayError() {
    if (this.isMain()) {
      dom_default.dispatchEvent(window, "phx:page-loading-start", { to: this.href, kind: "error" });
    }
    this.showLoader();
    this.setContainerClasses(PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
  }
  pushWithReply(refGenerator, event, payload, onReply = function() {
  }) {
    if (!this.isConnected()) {
      return;
    }
    let [ref, [el]] = refGenerator ? refGenerator() : [null, []];
    let onLoadingDone = function() {
    };
    if (el && el.getAttribute(this.binding(PHX_PAGE_LOADING)) !== null) {
      onLoadingDone = this.liveSocket.withPageLoading({ kind: "element", target: el });
    }
    if (typeof payload.cid !== "number") {
      delete payload.cid;
    }
    return this.liveSocket.wrapPush(this, { timeout: true }, () => {
      return this.channel.push(event, payload, PUSH_TIMEOUT).receive("ok", (resp) => {
        let hookReply = null;
        if (ref !== null) {
          this.undoRefs(ref);
        }
        if (resp.diff) {
          hookReply = this.applyDiff("update", resp.diff, ({ diff, events }) => {
            this.update(diff, events);
          });
        }
        if (resp.redirect) {
          this.onRedirect(resp.redirect);
        }
        if (resp.live_patch) {
          this.onLivePatch(resp.live_patch);
        }
        if (resp.live_redirect) {
          this.onLiveRedirect(resp.live_redirect);
        }
        onLoadingDone();
        onReply(resp, hookReply);
      });
    });
  }
  undoRefs(ref) {
    dom_default.all(this.el.renderRoot, `[${PHX_REF}="${ref}"]`, (el) => {
      let disabledVal = el.getAttribute(PHX_DISABLED);
      el.removeAttribute(PHX_REF);
      if (el.getAttribute(PHX_READONLY) !== null) {
        el.readOnly = false;
        el.removeAttribute(PHX_READONLY);
      }
      if (disabledVal !== null) {
        el.disabled = disabledVal === "true" ? true : false;
        el.removeAttribute(PHX_DISABLED);
      }
      PHX_EVENT_CLASSES.forEach((className) => dom_default.removeClass(el, className));
      let disableRestore = el.getAttribute(PHX_DISABLE_WITH_RESTORE);
      if (disableRestore !== null) {
        el.innerText = disableRestore;
        el.removeAttribute(PHX_DISABLE_WITH_RESTORE);
      }
      let toEl = dom_default.private(el, PHX_REF);
      if (toEl) {
        let hook = this.triggerBeforeUpdateHook(el, toEl);
        DOMPatch.patchEl(el, toEl, this.liveSocket.getActiveElement());
        if (hook) {
          hook.__updated();
        }
        dom_default.deletePrivate(el, PHX_REF);
      }
    });
  }
  putRef(elements, event) {
    let newRef = this.ref++;
    let disableWith = this.binding(PHX_DISABLE_WITH);
    elements.forEach((el) => {
      el.classList.add(`phx-${event}-loading`);
      el.setAttribute(PHX_REF, newRef);
      let disableText = el.getAttribute(disableWith);
      if (disableText !== null) {
        if (!el.getAttribute(PHX_DISABLE_WITH_RESTORE)) {
          el.setAttribute(PHX_DISABLE_WITH_RESTORE, el.innerText);
        }
        el.innerText = disableText;
      }
    });
    return [newRef, elements];
  }
  componentID(el) {
    let cid = el.getAttribute && el.getAttribute(PHX_COMPONENT);
    return cid ? parseInt(cid) : null;
  }
  targetComponentID(target, targetCtx) {
    if (target.getAttribute(this.binding("target"))) {
      return this.closestComponentID(targetCtx);
    } else {
      return null;
    }
  }
  closestComponentID(targetCtx) {
    if (targetCtx) {
      return maybe(targetCtx.closest(`[${PHX_COMPONENT}]`), (el) => this.ownsElement(el) && this.componentID(el));
    } else {
      return null;
    }
  }
  pushHookEvent(targetCtx, event, payload, onReply) {
    if (!this.isConnected()) {
      this.log("hook", () => ["unable to push hook event. LiveView not connected", event, payload]);
      return false;
    }
    let [ref, els] = this.putRef([], "hook");
    this.pushWithReply(() => [ref, els], "event", {
      type: "hook",
      event,
      value: payload,
      cid: this.closestComponentID(targetCtx)
    }, (resp, reply) => onReply(reply, ref));
    return ref;
  }
  extractMeta(el, meta) {
    let prefix = this.binding("value-");
    for (let i = 0; i < el.attributes.length; i++) {
      let name = el.attributes[i].name;
      if (name.startsWith(prefix)) {
        meta[name.replace(prefix, "")] = el.getAttribute(name);
      }
    }
    if (el.value !== void 0) {
      meta.value = el.value;
      if (el.tagName === "INPUT" && CHECKABLE_INPUTS.indexOf(el.type) >= 0 && !el.checked) {
        delete meta.value;
      }
    }
    return meta;
  }
  pushEvent(type, el, targetCtx, phxEvent, meta) {
    this.pushWithReply(() => this.putRef([el], type), "event", {
      type,
      event: phxEvent,
      value: this.extractMeta(el, meta),
      cid: this.targetComponentID(el, targetCtx)
    });
  }
  pushKey(keyElement, targetCtx, kind, phxEvent, meta) {
    this.pushWithReply(() => this.putRef([keyElement], kind), "event", {
      type: kind,
      event: phxEvent,
      value: this.extractMeta(keyElement, meta),
      cid: this.targetComponentID(keyElement, targetCtx)
    });
  }
  pushFileProgress(fileEl, entryRef, progress, onReply = function() {
  }) {
    this.liveSocket.withinOwners(fileEl.form, (view, targetCtx) => {
      view.pushWithReply(null, "progress", {
        event: fileEl.getAttribute(view.binding(PHX_PROGRESS)),
        ref: fileEl.getAttribute(PHX_UPLOAD_REF),
        entry_ref: entryRef,
        progress,
        cid: view.targetComponentID(fileEl.form, targetCtx)
      }, onReply);
    });
  }
  pushInput(inputEl, targetCtx, forceCid, phxEvent, eventTarget, callback) {
    let uploads;
    let cid = isCid(forceCid) ? forceCid : this.targetComponentID(inputEl.form, targetCtx);
    let refGenerator = () => this.putRef([inputEl, inputEl.form], "change");
    let formData = serializeForm(inputEl.form, { _target: eventTarget.name });
    if (dom_default.isUploadInput(inputEl) && inputEl.files && inputEl.files.length > 0) {
      LiveUploader.trackFiles(inputEl, Array.from(inputEl.files));
    }
    uploads = LiveUploader.serializeUploads(inputEl);
    let event = {
      type: "form",
      event: phxEvent,
      value: formData,
      uploads,
      cid
    };
    this.pushWithReply(refGenerator, "event", event, (resp) => {
      dom_default.showError(inputEl, this.liveSocket.binding(PHX_FEEDBACK_FOR));
      if (dom_default.isUploadInput(inputEl) && inputEl.getAttribute("data-phx-auto-upload") !== null) {
        if (LiveUploader.filesAwaitingPreflight(inputEl).length > 0) {
          let [ref, _els] = refGenerator();
          this.uploadFiles(inputEl.form, targetCtx, ref, cid, (_uploads) => {
            callback && callback(resp);
            this.triggerAwaitingSubmit(inputEl.form);
          });
        }
      } else {
        callback && callback(resp);
      }
    });
  }
  triggerAwaitingSubmit(formEl) {
    let awaitingSubmit = this.getScheduledSubmit(formEl);
    if (awaitingSubmit) {
      let [_el, _ref, callback] = awaitingSubmit;
      this.cancelSubmit(formEl);
      callback();
    }
  }
  getScheduledSubmit(formEl) {
    return this.formSubmits.find(([el, _callback]) => el.isSameNode(formEl));
  }
  scheduleSubmit(formEl, ref, callback) {
    if (this.getScheduledSubmit(formEl)) {
      return true;
    }
    this.formSubmits.push([formEl, ref, callback]);
  }
  cancelSubmit(formEl) {
    this.formSubmits = this.formSubmits.filter(([el, ref, _callback]) => {
      if (el.isSameNode(formEl)) {
        this.undoRefs(ref);
        return false;
      } else {
        return true;
      }
    });
  }
  pushFormSubmit(formEl, targetCtx, phxEvent, onReply) {
    let filterIgnored = (el) => {
      let userIgnored = closestPhxBinding(el, `${this.binding(PHX_UPDATE)}=ignore`, el.form);
      return !(userIgnored || closestPhxBinding(el, "data-phx-update=ignore", el.form));
    };
    let filterDisables = (el) => {
      return el.hasAttribute(this.binding(PHX_DISABLE_WITH));
    };
    let filterButton = (el) => el.tagName == "BUTTON";
    let filterInput = (el) => ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
    let refGenerator = () => {
      let formElements = Array.from(formEl.elements);
      let disables = formElements.filter(filterDisables);
      let buttons = formElements.filter(filterButton).filter(filterIgnored);
      let inputs = formElements.filter(filterInput).filter(filterIgnored);
      buttons.forEach((button) => {
        button.setAttribute(PHX_DISABLED, button.disabled);
        button.disabled = true;
      });
      inputs.forEach((input) => {
        input.setAttribute(PHX_READONLY, input.readOnly);
        input.readOnly = true;
        if (input.files) {
          input.setAttribute(PHX_DISABLED, input.disabled);
          input.disabled = true;
        }
      });
      formEl.setAttribute(this.binding(PHX_PAGE_LOADING), "");
      return this.putRef([formEl].concat(disables).concat(buttons).concat(inputs), "submit");
    };
    let cid = this.targetComponentID(formEl, targetCtx);
    if (LiveUploader.hasUploadsInProgress(formEl)) {
      let [ref, _els] = refGenerator();
      return this.scheduleSubmit(formEl, ref, () => this.pushFormSubmit(formEl, targetCtx, phxEvent, onReply));
    } else if (LiveUploader.inputsAwaitingPreflight(formEl).length > 0) {
      let [ref, els] = refGenerator();
      let proxyRefGen = () => [ref, els];
      this.uploadFiles(formEl, targetCtx, ref, cid, (_uploads) => {
        let formData = serializeForm(formEl, {});
        this.pushWithReply(proxyRefGen, "event", {
          type: "form",
          event: phxEvent,
          value: formData,
          cid
        }, onReply);
      });
    } else {
      let formData = serializeForm(formEl);
      console.log("form data", formData);
      this.pushWithReply(refGenerator, "event", {
        type: "form",
        event: phxEvent,
        value: formData,
        cid
      }, onReply);
    }
  }
  uploadFiles(formEl, targetCtx, ref, cid, onComplete) {
    let joinCountAtUpload = this.joinCount;
    let inputEls = LiveUploader.activeFileInputs(formEl);
    let numFileInputsInProgress = inputEls.length;
    inputEls.forEach((inputEl) => {
      let uploader = new LiveUploader(inputEl, this, () => {
        numFileInputsInProgress--;
        if (numFileInputsInProgress === 0) {
          onComplete();
        }
      });
      this.uploaders[inputEl] = uploader;
      let entries = uploader.entries().map((entry) => entry.toPreflightPayload());
      let payload = {
        ref: inputEl.getAttribute(PHX_UPLOAD_REF),
        entries,
        cid: this.targetComponentID(inputEl.form, targetCtx)
      };
      this.log("upload", () => ["sending preflight request", payload]);
      this.pushWithReply(null, "allow_upload", payload, (resp) => {
        this.log("upload", () => ["got preflight response", resp]);
        if (resp.error) {
          this.undoRefs(ref);
          let [entry_ref, reason] = resp.error;
          this.log("upload", () => [`error for entry ${entry_ref}`, reason]);
        } else {
          let onError = (callback) => {
            this.channel.onError(() => {
              if (this.joinCount === joinCountAtUpload) {
                callback();
              }
            });
          };
          uploader.initAdapterUpload(resp, onError, this.liveSocket);
        }
      });
    });
  }
  dispatchUploads(name, filesOrBlobs) {
    let inputs = dom_default.findUploadInputs(this.el).filter((el) => el.name === name);
    if (inputs.length === 0) {
      logError(`no live file inputs found matching the name "${name}"`);
    } else if (inputs.length > 1) {
      logError(`duplicate live file inputs found matching the name "${name}"`);
    } else {
      dom_default.dispatchEvent(inputs[0], PHX_TRACK_UPLOADS, { files: filesOrBlobs });
    }
  }
  pushFormRecovery(form, newCid, callback) {
    this.liveSocket.withinOwners(form, (view, targetCtx) => {
      let input = form.elements[0];
      let phxEvent = form.getAttribute(this.binding(PHX_AUTO_RECOVER)) || form.getAttribute(this.binding("change"));
      view.pushInput(input, targetCtx, newCid, phxEvent, input, callback);
    });
  }
  pushLinkPatch(href, targetEl, callback) {
    let linkRef = this.liveSocket.setPendingLink(href);
    let refGen = targetEl ? () => this.putRef([targetEl], "click") : null;
    this.pushWithReply(refGen, "live_patch", { url: href }, (resp) => {
      if (resp.link_redirect) {
        this.liveSocket.replaceMain(href, null, callback, linkRef);
      } else {
        if (this.liveSocket.commitPendingLink(linkRef)) {
          this.href = href;
        }
        this.applyPendingUpdates();
        callback && callback(linkRef);
      }
    }).receive("timeout", () => this.liveSocket.redirect(window.location.href));
  }
  formsForRecovery(html) {
    if (this.joinCount === 0) {
      return [];
    }
    let phxChange = this.binding("change");
    let template = document.createElement("template");
    template.innerHTML = html;
    return dom_default.all(this.el, `form[${phxChange}]`).filter((form) => form.id && this.ownsElement(form)).filter((form) => form.elements.length > 0).filter((form) => form.getAttribute(this.binding(PHX_AUTO_RECOVER)) !== "ignore").map((form) => {
      let newForm = template.content.querySelector(`form[id="${form.id}"][${phxChange}="${form.getAttribute(phxChange)}"]`);
      if (newForm) {
        return [form, newForm, this.componentID(newForm)];
      } else {
        return [form, null, null];
      }
    }).filter(([form, newForm, newCid]) => newForm);
  }
  maybePushComponentsDestroyed(destroyedCIDs) {
    let willDestroyCIDs = destroyedCIDs.filter((cid) => {
      return dom_default.findComponentNodeList(this.el, cid).length === 0;
    });
    if (willDestroyCIDs.length > 0) {
      this.pruningCIDs.push(...willDestroyCIDs);
      this.pushWithReply(null, "cids_will_destroy", { cids: willDestroyCIDs }, () => {
        this.pruningCIDs = this.pruningCIDs.filter((cid) => willDestroyCIDs.indexOf(cid) !== -1);
        let completelyDestroyCIDs = willDestroyCIDs.filter((cid) => {
          return dom_default.findComponentNodeList(this.el, cid).length === 0;
        });
        if (completelyDestroyCIDs.length > 0) {
          this.pushWithReply(null, "cids_destroyed", { cids: completelyDestroyCIDs }, (resp) => {
            this.rendered.pruneCIDs(resp.cids);
          });
        }
      });
    }
  }
  ownsElement(el) {
    return el.getAttribute(PHX_PARENT_ID) === this.id || maybe(el.closest(PHX_VIEW_SELECTOR), (node) => node.id) === this.id;
  }
  submitForm(form, targetCtx, phxEvent) {
    dom_default.putPrivate(form, PHX_HAS_SUBMITTED, true);
    this.liveSocket.blurActiveElement(this);
    this.pushFormSubmit(form, targetCtx, phxEvent, () => {
      this.liveSocket.restorePreviouslyActiveFocus();
    });
  }
  binding(kind) {
    return this.liveSocket.binding(kind);
  }
};

// js/live_element/js.js
var JS = {
  exec(eventType, phxEvent, view, el, defaults) {
    let [defaultKind, defaultArgs] = defaults || [null, {}];
    let commands = phxEvent.charAt(0) === "[" ? JSON.parse(phxEvent) : [[defaultKind, defaultArgs]];
    commands.forEach(([kind, args]) => {
      if (kind === defaultKind && defaultArgs.data) {
        args.data = Object.assign(args.data || {}, defaultArgs.data);
      }
      this[`exec_${kind}`](eventType, phxEvent, view, el, args);
    });
  },
  exec_dispatch(eventType, phxEvent, view, sourceEl, { to, event, detail }) {
    if (to) {
      dom_default.all(document, to, (el) => dom_default.dispatchEvent(el, event, detail));
    } else {
      dom_default.dispatchEvent(sourceEl, event, detail);
    }
  },
  exec_push(eventType, phxEvent, view, sourceEl, args) {
    let { event, data, target, page_loading, loading, value } = args;
    let pushOpts = { page_loading: !!page_loading, loading, value };
    let targetSrc = eventType === "change" ? sourceEl.form : sourceEl;
    let phxTarget = target || targetSrc.getAttribute(view.binding("target")) || targetSrc;
    view.withinTargets(phxTarget, (targetView, targetCtx) => {
      if (eventType === "change") {
        let { newCid, _target, callback } = args;
        if (_target) {
          pushOpts._target = _target;
        }
        targetView.pushInput(sourceEl, targetCtx, newCid, event || phxEvent, pushOpts, callback);
      } else if (eventType === "submit") {
        targetView.submitForm(sourceEl, targetCtx, event || phxEvent, pushOpts);
      } else {
        targetView.pushEvent(eventType, sourceEl, targetCtx, event || phxEvent, data, pushOpts);
      }
    });
  },
  exec_add_class(eventType, phxEvent, view, sourceEl, { to, names, transition, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.addOrRemoveClasses(el, names, [], transition, time, view));
    } else {
      this.addOrRemoveClasses(sourceEl, names, [], transition, view);
    }
  },
  exec_remove_class(eventType, phxEvent, view, sourceEl, { to, names, transition, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.addOrRemoveClasses(el, [], names, transition, time, view));
    } else {
      this.addOrRemoveClasses(sourceEl, [], names, transition, time, view);
    }
  },
  exec_transition(eventType, phxEvent, view, sourceEl, { time, to, names }) {
    let els = to ? dom_default.all(document, to) : [sourceEl];
    els.forEach((el) => {
      this.addOrRemoveClasses(el, names, []);
      view.transition(time, () => this.addOrRemoveClasses(el, [], names));
    });
  },
  exec_toggle(eventType, phxEvent, view, sourceEl, { to, display, ins, outs, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.toggle(eventType, view, el, display, ins || [], outs || [], time));
    } else {
      this.toggle(eventType, view, sourceEl, display, ins || [], outs || [], time);
    }
  },
  exec_show(eventType, phxEvent, view, sourceEl, { to, display, transition, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.show(eventType, view, el, display, transition, time));
    } else {
      this.show(eventType, view, sourceEl, transition, time);
    }
  },
  exec_hide(eventType, phxEvent, view, sourceEl, { to, display, transition, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.hide(eventType, view, el, display, transition, time));
    } else {
      this.hide(eventType, view, sourceEl, display, transition, time);
    }
  },
  show(eventType, view, el, display, transition, time) {
    let isVisible = this.isVisible(el);
    if (transition.length > 0 && !isVisible) {
      this.toggle(eventType, view, el, display, transition, [], time);
    } else if (!isVisible) {
      this.toggle(eventType, view, el, display, [], [], null);
    }
  },
  hide(eventType, view, el, display, transition, time) {
    let isVisible = this.isVisible(el);
    if (transition.length > 0 && isVisible) {
      this.toggle(eventType, view, el, display, [], transition, time);
    } else if (isVisible) {
      this.toggle(eventType, view, el, display, [], [], time);
    }
  },
  toggle(eventType, view, el, display, in_classes, out_classes, time) {
    if (in_classes.length > 0 || out_classes.length > 0) {
      if (this.isVisible(el)) {
        this.addOrRemoveClasses(el, out_classes, in_classes);
        view.transition(time, () => {
          dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
          this.addOrRemoveClasses(el, [], out_classes);
        });
      } else {
        if (eventType === "remove") {
          return;
        }
        this.addOrRemoveClasses(el, in_classes, out_classes);
        dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = display || "block");
        view.transition(time, () => {
          this.addOrRemoveClasses(el, [], in_classes);
        });
      }
    } else {
      let newDisplay = this.isVisible(el) ? "none" : display || "block";
      dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = newDisplay);
    }
  },
  addOrRemoveClasses(el, adds, removes, transition, time, view) {
    if (transition && transition.length > 0) {
      this.addOrRemoveClasses(el, transition, []);
      return view.transition(time, () => this.addOrRemoveClasses(el, adds, removes.concat(transition)));
    }
    window.requestAnimationFrame(() => {
      let [prevAdds, prevRemoves] = dom_default.getSticky(el, "classes", [[], []]);
      let keepAdds = adds.filter((name) => prevAdds.indexOf(name) < 0 && !el.classList.contains(name));
      let keepRemoves = removes.filter((name) => prevRemoves.indexOf(name) < 0 && el.classList.contains(name));
      let newAdds = prevAdds.filter((name) => removes.indexOf(name) < 0).concat(keepAdds);
      let newRemoves = prevRemoves.filter((name) => adds.indexOf(name) < 0).concat(keepRemoves);
      dom_default.putSticky(el, "classes", (currentEl) => {
        currentEl.classList.remove(...newRemoves);
        currentEl.classList.add(...newAdds);
        return [newAdds, newRemoves];
      });
    });
  },
  hasAllClasses(el, classes) {
    return classes.every((name) => el.classList.contains(name));
  },
  isVisible(el) {
    let style = window.getComputedStyle(el);
    return !(style.opacity === 0 || style.display === "none");
  },
  isToggledOut(el, out_classes) {
    return !this.isVisible(el) || this.hasAllClasses(el, out_classes);
  }
};
var js_default = JS;

// js/live_element/live_socket.js
var LiveSocket = class {
  constructor(url, phxSocket, opts = {}) {
    this.unloaded = false;
    if (!phxSocket || phxSocket.constructor.name === "Object") {
      throw new Error(`
      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:

          import {Socket} from "phoenix"
          import LiveSocket from "live_element"
          let liveSocket = new LiveSocket("/live", Socket, {...})
      `);
    }
    this.socket = new phxSocket(url, opts);
    this.bindingPrefix = opts.bindingPrefix || BINDING_PREFIX;
    this.opts = opts;
    this.params = closure(opts.params || {});
    this.viewLogger = opts.viewLogger;
    this.metadataCallbacks = opts.metadata || {};
    this.defaults = Object.assign(clone(DEFAULTS), opts.defaults || {});
    this.activeElement = null;
    this.prevActive = null;
    this.silenced = false;
    this.main = null;
    this.linkRef = 1;
    this.roots = {};
    this.href = window.location.href;
    this.pendingLink = null;
    this.currentLocation = clone(window.location);
    this.hooks = opts.hooks || {};
    this.uploaders = opts.uploaders || {};
    this.loaderTimeout = opts.loaderTimeout || LOADER_TIMEOUT;
    this.localStorage = opts.localStorage || window.localStorage;
    this.sessionStorage = opts.sessionStorage || window.sessionStorage;
    this.boundTopLevelEvents = false;
    this.domCallbacks = Object.assign({ onNodeAdded: closure(), onBeforeElUpdated: closure() }, opts.dom || {});
    this.transitions = new TransitionSet();
    window.addEventListener("pagehide", (_e) => {
      this.unloaded = true;
    });
    this.socket.onOpen(() => {
      if (this.isUnloaded()) {
        window.location.reload();
      }
    });
  }
  isProfileEnabled() {
    return this.sessionStorage.getItem(PHX_LV_PROFILE) === "true";
  }
  isDebugEnabled() {
    return this.sessionStorage.getItem(PHX_LV_DEBUG) === "true";
  }
  enableDebug() {
    this.sessionStorage.setItem(PHX_LV_DEBUG, "true");
  }
  enableProfiling() {
    this.sessionStorage.setItem(PHX_LV_PROFILE, "true");
  }
  disableDebug() {
    this.sessionStorage.removeItem(PHX_LV_DEBUG);
  }
  disableProfiling() {
    this.sessionStorage.removeItem(PHX_LV_PROFILE);
  }
  enableLatencySim(upperBoundMs) {
    this.enableDebug();
    console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable");
    this.sessionStorage.setItem(PHX_LV_LATENCY_SIM, upperBoundMs);
  }
  disableLatencySim() {
    this.sessionStorage.removeItem(PHX_LV_LATENCY_SIM);
  }
  getLatencySim() {
    let str = this.sessionStorage.getItem(PHX_LV_LATENCY_SIM);
    return str ? parseInt(str) : null;
  }
  getSocket() {
    return this.socket;
  }
  connect() {
    let doConnect = () => {
      if (this.joinRootViews()) {
        this.bindTopLevelEvents();
        this.socket.connect();
      }
    };
    if (["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0) {
      doConnect();
    } else {
      document.addEventListener("DOMContentLoaded", () => doConnect());
    }
  }
  disconnect(callback) {
    this.socket.disconnect(callback);
  }
  execJS(el, encodedJS, eventType = null) {
    this.owner(el, (view) => js_default.exec(eventType, encodedJS, view, el));
  }
  triggerDOM(kind, args) {
    this.domCallbacks[kind](...args);
  }
  time(name, func) {
    if (!this.isProfileEnabled() || !console.time) {
      return func();
    }
    console.time(name);
    let result = func();
    console.timeEnd(name);
    return result;
  }
  log(view, kind, msgCallback) {
    if (this.viewLogger) {
      let [msg, obj] = msgCallback();
      this.viewLogger(view, kind, msg, obj);
    } else if (this.isDebugEnabled()) {
      let [msg, obj] = msgCallback();
      debug(view, kind, msg, obj);
    }
  }
  requestDOMUpdate(callback) {
    this.transitions.after(callback);
  }
  transition(time, onDone = function() {
  }) {
    this.transitions.addTransition(time, onDone);
  }
  onChannel(channel, event, cb) {
    channel.on(event, (data) => {
      let latency = this.getLatencySim();
      if (!latency) {
        cb(data);
      } else {
        console.log(`simulating ${latency}ms of latency from server to client`);
        setTimeout(() => cb(data), latency);
      }
    });
  }
  wrapPush(view, opts, push) {
    let latency = this.getLatencySim();
    let oldJoinCount = view.joinCount;
    if (!latency) {
      if (opts.timeout) {
        return push().receive("timeout", () => {
          if (view.joinCount === oldJoinCount && !view.isDestroyed()) {
            this.reloadWithJitter(view, () => {
              this.log(view, "timeout", () => ["received timeout while communicating with server. Falling back to hard refresh for recovery"]);
            });
          }
        });
      } else {
        return push();
      }
    }
    console.log(`simulating ${latency}ms of latency from client to server`);
    let fakePush = {
      receives: [],
      receive(kind, cb) {
        this.receives.push([kind, cb]);
      }
    };
    setTimeout(() => {
      if (view.isDestroyed()) {
        return;
      }
      fakePush.receives.reduce((acc, [kind, cb]) => acc.receive(kind, cb), push());
    }, latency);
    return fakePush;
  }
  reloadWithJitter(view, log) {
    view.destroy();
    this.disconnect();
    let [minMs, maxMs] = RELOAD_JITTER;
    let afterMs = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    let tries = browser_default.updateLocal(this.localStorage, window.location.pathname, CONSECUTIVE_RELOADS, 0, (count) => count + 1);
    log ? log() : this.log(view, "join", () => [`encountered ${tries} consecutive reloads`]);
    if (tries > MAX_RELOADS) {
      this.log(view, "join", () => [`exceeded ${MAX_RELOADS} consecutive reloads. Entering failsafe mode`]);
      afterMs = FAILSAFE_JITTER;
    }
    setTimeout(() => {
      if (this.hasPendingLink()) {
        window.location = this.pendingLink;
      } else {
        window.location.reload();
      }
    }, afterMs);
  }
  getHookCallbacks(name) {
    return name && name.startsWith("Phoenix.") ? hooks_default[name.split(".")[1]] : this.hooks[name];
  }
  isUnloaded() {
    return this.unloaded;
  }
  isConnected() {
    return this.socket.isConnected();
  }
  getBindingPrefix() {
    return this.bindingPrefix;
  }
  binding(kind) {
    return `${this.getBindingPrefix()}${kind}`;
  }
  channel(topic, params) {
    return this.socket.channel(topic, params);
  }
  joinRootViews() {
    let rootsFound = false;
    dom_default.all(document, `${PHX_VIEW_SELECTOR}:not([${PHX_PARENT_ID}])`, (rootEl) => {
      if (!this.getRootById(rootEl.id)) {
        let view = this.newRootView(rootEl);
        view.setHref(this.getHref());
        view.join();
        if (rootEl.getAttribute(PHX_MAIN)) {
          this.main = view;
        }
      }
      rootsFound = true;
    });
    return rootsFound;
  }
  redirect(to, flash) {
    this.disconnect();
    browser_default.redirect(to, flash);
  }
  replaceMain(href, flash, callback = null, linkRef = this.setPendingLink(href)) {
    let oldMainEl = this.main.el;
    let newMainEl = dom_default.cloneNode(oldMainEl, "");
    this.main.showLoader(this.loaderTimeout);
    this.main.destroy();
    this.main = this.newRootView(newMainEl, flash);
    this.main.setRedirect(href);
    this.transitionRemoves();
    this.main.join((joinCount, onDone) => {
      if (joinCount === 1 && this.commitPendingLink(linkRef)) {
        this.requestDOMUpdate(() => {
          oldMainEl.replaceWith(newMainEl);
          callback && callback();
          onDone();
        });
      }
    });
  }
  transitionRemoves(elements) {
    let removeAttr = this.binding("remove");
    elements = elements || dom_default.all(document, `[${removeAttr}]`);
    elements.forEach((el) => {
      if (document.body.contains(el)) {
        this.execJS(el, el.getAttribute(removeAttr), "remove");
      }
    });
  }
  isPhxView(el) {
    return el.getAttribute && el.getAttribute(PHX_SESSION) !== null;
  }
  newRootView(el, flash) {
    let view = new View(el, this, null, flash);
    this.roots[view.id] = view;
    return view;
  }
  owner(childEl, callback) {
    let view = maybe(childEl.closest(PHX_VIEW_SELECTOR), (el) => this.getViewByEl(el));
    if (view) {
      callback(view);
    }
  }
  withinOwners(childEl, callback) {
    this.owner(childEl, (view) => callback(view, childEl));
  }
  getViewByEl(el) {
    let rootId = el.getAttribute(PHX_ROOT_ID);
    return maybe(this.getRootById(rootId), (root) => root.getDescendentByEl(el));
  }
  getRootById(id) {
    return this.roots[id];
  }
  destroyAllViews() {
    for (let id in this.roots) {
      this.roots[id].destroy();
      delete this.roots[id];
    }
  }
  destroyViewByEl(el) {
    let root = this.getRootById(el.getAttribute(PHX_ROOT_ID));
    if (root) {
      root.destroyDescendent(el.id);
    }
  }
  setActiveElement(target) {
    if (this.activeElement === target) {
      return;
    }
    this.activeElement = target;
    let cancel = () => {
      if (target === this.activeElement) {
        this.activeElement = null;
      }
      target.removeEventListener("mouseup", this);
      target.removeEventListener("touchend", this);
    };
    target.addEventListener("mouseup", cancel);
    target.addEventListener("touchend", cancel);
  }
  getActiveElement() {
    if (document.activeElement === document.body) {
      return this.activeElement || document.activeElement;
    } else {
      return document.activeElement || document.body;
    }
  }
  dropActiveElement(view) {
    if (this.prevActive && view.ownsElement(this.prevActive)) {
      this.prevActive = null;
    }
  }
  restorePreviouslyActiveFocus() {
    if (this.prevActive && this.prevActive !== document.body) {
      this.prevActive.focus();
    }
  }
  blurActiveElement() {
    this.prevActive = this.getActiveElement();
    if (this.prevActive !== document.body) {
      this.prevActive.blur();
    }
  }
  bindTopLevelEvents() {
    if (this.boundTopLevelEvents) {
      return;
    }
    this.boundTopLevelEvents = true;
    document.body.addEventListener("click", function() {
    });
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        this.getSocket().disconnect();
        this.withPageLoading({ to: window.location.href, kind: "redirect" });
        window.location.reload();
      }
    }, true);
    this.bindNav();
    this.bindClicks();
    this.bindForms();
    this.bind({ keyup: "keyup", keydown: "keydown" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
      let matchKey = targetEl.getAttribute(this.binding(PHX_KEY));
      let pressedKey = e.key && e.key.toLowerCase();
      if (matchKey && matchKey.toLowerCase() !== pressedKey) {
        return;
      }
      let data = { key: e.key, ...this.eventMeta(type, e, targetEl) };
      js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
    });
    this.bind({ blur: "focusout", focus: "focusin" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
      if (!eventTarget) {
        let data = { key: e.key, ...this.eventMeta(type, e, targetEl) };
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      }
    });
    this.bind({ blur: "blur", focus: "focus" }, (e, type, view, targetEl, targetCtx, phxEvent, phxTarget) => {
      if (phxTarget === "window") {
        let data = this.eventMeta(type, e, targetEl);
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      }
    });
    window.addEventListener("dragover", (e) => e.preventDefault());
    window.addEventListener("drop", (e) => {
      e.preventDefault();
      let dropTargetId = maybe(closestPhxBinding(e.target, this.binding(PHX_DROP_TARGET)), (trueTarget) => {
        return trueTarget.getAttribute(this.binding(PHX_DROP_TARGET));
      });
      let dropTarget = dropTargetId && document.getElementById(dropTargetId);
      let files = Array.from(e.dataTransfer.files || []);
      if (!dropTarget || dropTarget.disabled || files.length === 0 || !(dropTarget.files instanceof FileList)) {
        return;
      }
      LiveUploader.trackFiles(dropTarget, files);
      dropTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
    this.on(PHX_TRACK_UPLOADS, (e) => {
      let uploadTarget = e.target;
      if (!dom_default.isUploadInput(uploadTarget)) {
        return;
      }
      let files = Array.from(e.detail.files || []).filter((f) => f instanceof File || f instanceof Blob);
      LiveUploader.trackFiles(uploadTarget, files);
      uploadTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }
  eventMeta(eventName, e, targetEl) {
    let callback = this.metadataCallbacks[eventName];
    return callback ? callback(e, targetEl) : {};
  }
  setPendingLink(href) {
    this.linkRef++;
    this.pendingLink = href;
    return this.linkRef;
  }
  commitPendingLink(linkRef) {
    if (this.linkRef !== linkRef) {
      return false;
    } else {
      this.href = this.pendingLink;
      this.pendingLink = null;
      return true;
    }
  }
  getHref() {
    return this.href;
  }
  hasPendingLink() {
    return !!this.pendingLink;
  }
  bind(events, callback) {
    for (let event in events) {
      let browserEventName = events[event];
      this.on(browserEventName, (e) => {
        let binding = this.binding(event);
        let windowBinding = this.binding(`window-${event}`);
        let targetPhxEvent = e.target.getAttribute && e.target.getAttribute(binding);
        if (targetPhxEvent) {
          this.debounce(e.target, e, () => {
            this.withinOwners(e.target, (view) => {
              callback(e, event, view, e.target, targetPhxEvent, null);
            });
          });
        } else {
          dom_default.all(document, `[${windowBinding}]`, (el) => {
            let phxEvent = el.getAttribute(windowBinding);
            this.debounce(el, e, () => {
              this.withinOwners(el, (view) => {
                callback(e, event, view, el, phxEvent, "window");
              });
            });
          });
        }
      });
    }
  }
  bindClicks() {
    this.bindClick("click", "click", false);
    this.bindClick("mousedown", "capture-click", true);
  }
  bindClick(eventName, bindingName, capture) {
    let click = this.binding(bindingName);
    window.addEventListener(eventName, (e) => {
      if (!this.isConnected()) {
        return;
      }
      let target = null;
      if (capture) {
        target = e.target.matches(`[${click}]`) ? e.target : e.target.querySelector(`[${click}]`);
      } else {
        target = closestPhxBinding(e.target, click);
        this.dispatchClickAway(e);
      }
      let phxEvent = target && target.getAttribute(click);
      if (!phxEvent) {
        return;
      }
      if (target.getAttribute("href") === "#") {
        e.preventDefault();
      }
      this.debounce(target, e, () => {
        this.withinOwners(target, (view) => {
          js_default.exec("click", phxEvent, view, target, ["push", { data: this.eventMeta("click", e, target) }]);
        });
      });
    }, capture);
  }
  dispatchClickAway(e) {
    let binding = this.binding("click-away");
    dom_default.all(document, `[${binding}]`, (el) => {
      if (!(el.isSameNode(e.target) || el.contains(e.target))) {
        this.withinOwners(e.target, (view) => {
          let phxEvent = el.getAttribute(binding);
          js_default.exec("click", phxEvent, view, e.target, ["push", { data: this.eventMeta("click", e, e.target) }]);
        });
      }
    });
  }
  bindNav() {
    if (!browser_default.canPushState()) {
      return;
    }
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    let scrollTimer = null;
    window.addEventListener("scroll", (_e) => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        browser_default.updateCurrentState((state) => Object.assign(state, { scroll: window.scrollY }));
      }, 100);
    });
    window.addEventListener("popstate", (event) => {
      if (!this.registerNewLocation(window.location)) {
        return;
      }
      let { type, id, root, scroll } = event.state || {};
      let href = window.location.href;
      this.requestDOMUpdate(() => {
        if (this.main.isConnected() && (type === "patch" && id === this.main.id)) {
          this.main.pushLinkPatch(href, null);
        } else {
          this.replaceMain(href, null, () => {
            if (root) {
              this.replaceRootHistory();
            }
            if (typeof scroll === "number") {
              setTimeout(() => {
                window.scrollTo(0, scroll);
              }, 0);
            }
          });
        }
      });
    }, false);
    window.addEventListener("click", (e) => {
      let target = closestPhxBinding(e.target, PHX_LIVE_LINK);
      let type = target && target.getAttribute(PHX_LIVE_LINK);
      let wantsNewTab = e.metaKey || e.ctrlKey || e.button === 1;
      if (!type || !this.isConnected() || !this.main || wantsNewTab) {
        return;
      }
      let href = target.href;
      let linkState = target.getAttribute(PHX_LINK_STATE);
      e.preventDefault();
      if (this.pendingLink === href) {
        return;
      }
      this.requestDOMUpdate(() => {
        if (type === "patch") {
          this.pushHistoryPatch(href, linkState, target);
        } else if (type === "redirect") {
          this.historyRedirect(href, linkState);
        } else {
          throw new Error(`expected ${PHX_LIVE_LINK} to be "patch" or "redirect", got: ${type}`);
        }
      });
    }, false);
  }
  dispatchEvent(event, payload = {}) {
    dom_default.dispatchEvent(window, `phx:${event}`, payload);
  }
  dispatchEvents(events) {
    events.forEach(([event, payload]) => this.dispatchEvent(event, payload));
  }
  withPageLoading(info, callback) {
    dom_default.dispatchEvent(window, "phx:page-loading-start", info);
    let done = () => dom_default.dispatchEvent(window, "phx:page-loading-stop", info);
    return callback ? callback(done) : done;
  }
  pushHistoryPatch(href, linkState, targetEl) {
    this.withPageLoading({ to: href, kind: "patch" }, (done) => {
      this.main.pushLinkPatch(href, targetEl, (linkRef) => {
        this.historyPatch(href, linkState, linkRef);
        done();
      });
    });
  }
  historyPatch(href, linkState, linkRef = this.setPendingLink(href)) {
    if (!this.commitPendingLink(linkRef)) {
      return;
    }
    browser_default.pushState(linkState, { type: "patch", id: this.main.id }, href);
    this.registerNewLocation(window.location);
  }
  historyRedirect(href, linkState, flash) {
    let scroll = window.scrollY;
    this.withPageLoading({ to: href, kind: "redirect" }, (done) => {
      this.replaceMain(href, flash, () => {
        browser_default.pushState(linkState, { type: "redirect", id: this.main.id, scroll }, href);
        this.registerNewLocation(window.location);
        done();
      });
    });
  }
  replaceRootHistory() {
    browser_default.pushState("replace", { root: true, type: "patch", id: this.main.id });
  }
  registerNewLocation(newLocation) {
    let { pathname, search } = this.currentLocation;
    if (pathname + search === newLocation.pathname + newLocation.search) {
      return false;
    } else {
      this.currentLocation = clone(newLocation);
      return true;
    }
  }
  bindForms() {
    let iterations = 0;
    this.on("submit", (e) => {
      let phxEvent = e.target.getAttribute(this.binding("submit"));
      if (!phxEvent) {
        return;
      }
      e.preventDefault();
      e.target.disabled = true;
      this.withinOwners(e.target, (view) => {
        js_default.exec("submit", phxEvent, view, e.target, ["push", {}]);
      });
    }, false);
    for (let type of ["change", "input"]) {
      this.on(type, (e) => {
        let input = e.target;
        let phxEvent = input.form && input.form.getAttribute(this.binding("change"));
        if (!phxEvent) {
          return;
        }
        if (input.type === "number" && input.validity && input.validity.badInput) {
          return;
        }
        let currentIterations = iterations;
        iterations++;
        let { at, type: lastType } = dom_default.private(input, "prev-iteration") || {};
        if (at === currentIterations - 1 && type !== lastType) {
          return;
        }
        dom_default.putPrivate(input, "prev-iteration", { at: currentIterations, type });
        this.debounce(input, e, () => {
          this.withinOwners(input.form, (view) => {
            dom_default.putPrivate(input, PHX_HAS_FOCUSED, true);
            if (!dom_default.isTextualInput(input)) {
              this.setActiveElement(input);
            }
            js_default.exec("change", phxEvent, view, input, ["push", { _target: e.target.name }]);
          });
        });
      }, false);
    }
  }
  debounce(el, event, callback) {
    let phxDebounce = this.binding(PHX_DEBOUNCE);
    let phxThrottle = this.binding(PHX_THROTTLE);
    let defaultDebounce = this.defaults.debounce.toString();
    let defaultThrottle = this.defaults.throttle.toString();
    dom_default.debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, callback);
  }
  silenceEvents(callback) {
    this.silenced = true;
    callback();
    this.silenced = false;
  }
  on(event, callback) {
    window.addEventListener(event, (e) => {
      if (!this.silenced) {
        callback(e);
      }
    });
  }
};
var TransitionSet = class {
  constructor() {
    this.transitions = new Set();
    this.pendingOps = [];
    this.reset();
  }
  reset() {
    this.transitions.forEach((timer) => {
      cancelTimeout(timer);
      this.transitions.delete(timer);
    });
    this.flushPendingOps();
  }
  after(callback) {
    if (this.size() === 0) {
      callback();
    } else {
      this.pushPendingOp(callback);
    }
  }
  addTransition(time, onDone) {
    let timer = setTimeout(() => {
      this.transitions.delete(timer);
      onDone();
      if (this.size() === 0) {
        this.flushPendingOps();
      }
    }, time);
    this.transitions.add(timer);
  }
  pushPendingOp(op) {
    this.pendingOps.push(op);
  }
  size() {
    return this.transitions.size;
  }
  flushPendingOps() {
    this.pendingOps.forEach((op) => op());
    this.pendingOps = [];
  }
};

// js/live_element/LiveElement.js
var import_phoenix = __toModule(require_phoenix());
var LiveElement = class extends HTMLElement {
  connectedCallback() {
    this.liveSocket = new LiveSocket(this.url, import_phoenix.Socket, {});
    this.liveSocket.enableDebug();
    this.liveSocket.socket.connect();
    this.view = new View(this, this.liveSocket, null, null);
    this.liveSocket.roots[this.view.id] = this.view;
    this.view.channel = this.liveSocket.channel(`lve:${this.id}`, () => {
      return {
        params: { module: this.module },
        session: {}
      };
    });
    this.view.setHref(this.liveSocket.getHref());
    this.view.join();
    this.attachShadow({ mode: "open" });
    this.renderRoot = this.shadowRoot;
    this.bindEvents();
  }
  bindEvents() {
    this.renderRoot.addEventListener("click", (event) => {
      console.log(event);
      const { target } = event;
      let phxEvent = target && target.getAttribute("phx-click");
      if (!phxEvent) {
        return;
      }
      this.view.pushEvent("click", this, this, phxEvent, {});
    }, true);
    this.renderRoot.addEventListener("submit", (event) => {
      console.log(event);
      const { target } = event;
      event.preventDefault();
      let phxEvent = event.target.getAttribute("phx-submit");
      if (!phxEvent) {
        return;
      }
      this.view.submitForm(event.target, this.renderRoot, phxEvent);
    }, true);
  }
};
var LiveElement_default = LiveElement;
export {
  LiveElement_default as LiveElement,
  LiveSocket
};
//# sourceMappingURL=live_element.esm.js.map
