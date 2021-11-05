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
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/phoenix/priv/static/phoenix.js
var require_phoenix = __commonJS({
  "node_modules/phoenix/priv/static/phoenix.js"(exports, module2) {
    !function(e4, t3) {
      typeof exports == "object" && typeof module2 == "object" ? module2.exports = t3() : typeof define == "function" && define.amd ? define([], t3) : typeof exports == "object" ? exports.Phoenix = t3() : e4.Phoenix = t3();
    }(exports, function() {
      return function(e4) {
        var t3 = {};
        function n5(i3) {
          if (t3[i3])
            return t3[i3].exports;
          var o5 = t3[i3] = { i: i3, l: false, exports: {} };
          return e4[i3].call(o5.exports, o5, o5.exports, n5), o5.l = true, o5.exports;
        }
        return n5.m = e4, n5.c = t3, n5.d = function(e5, t4, i3) {
          n5.o(e5, t4) || Object.defineProperty(e5, t4, { enumerable: true, get: i3 });
        }, n5.r = function(e5) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e5, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e5, "__esModule", { value: true });
        }, n5.t = function(e5, t4) {
          if (1 & t4 && (e5 = n5(e5)), 8 & t4)
            return e5;
          if (4 & t4 && typeof e5 == "object" && e5 && e5.__esModule)
            return e5;
          var i3 = Object.create(null);
          if (n5.r(i3), Object.defineProperty(i3, "default", { enumerable: true, value: e5 }), 2 & t4 && typeof e5 != "string")
            for (var o5 in e5)
              n5.d(i3, o5, function(t5) {
                return e5[t5];
              }.bind(null, o5));
          return i3;
        }, n5.n = function(e5) {
          var t4 = e5 && e5.__esModule ? function() {
            return e5.default;
          } : function() {
            return e5;
          };
          return n5.d(t4, "a", t4), t4;
        }, n5.o = function(e5, t4) {
          return Object.prototype.hasOwnProperty.call(e5, t4);
        }, n5.p = "", n5(n5.s = 0);
      }([function(e4, t3, n5) {
        (function(t4) {
          e4.exports = t4.Phoenix = n5(2);
        }).call(this, n5(1));
      }, function(e4, t3) {
        var n5;
        n5 = function() {
          return this;
        }();
        try {
          n5 = n5 || new Function("return this")();
        } catch (e5) {
          typeof window == "object" && (n5 = window);
        }
        e4.exports = n5;
      }, function(e4, t3, n5) {
        "use strict";
        function i3(e5) {
          return function(e6) {
            if (Array.isArray(e6))
              return a2(e6);
          }(e5) || function(e6) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(e6))
              return Array.from(e6);
          }(e5) || s5(e5) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function o5(e5) {
          return (o5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e6) {
            return typeof e6;
          } : function(e6) {
            return e6 && typeof Symbol == "function" && e6.constructor === Symbol && e6 !== Symbol.prototype ? "symbol" : typeof e6;
          })(e5);
        }
        function r4(e5, t4) {
          return function(e6) {
            if (Array.isArray(e6))
              return e6;
          }(e5) || function(e6, t5) {
            if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(e6)))
              return;
            var n6 = [], i4 = true, o6 = false, r5 = void 0;
            try {
              for (var s6, a3 = e6[Symbol.iterator](); !(i4 = (s6 = a3.next()).done) && (n6.push(s6.value), !t5 || n6.length !== t5); i4 = true)
                ;
            } catch (e7) {
              o6 = true, r5 = e7;
            } finally {
              try {
                i4 || a3.return == null || a3.return();
              } finally {
                if (o6)
                  throw r5;
              }
            }
            return n6;
          }(e5, t4) || s5(e5, t4) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function s5(e5, t4) {
          if (e5) {
            if (typeof e5 == "string")
              return a2(e5, t4);
            var n6 = Object.prototype.toString.call(e5).slice(8, -1);
            return n6 === "Object" && e5.constructor && (n6 = e5.constructor.name), n6 === "Map" || n6 === "Set" ? Array.from(n6) : n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6) ? a2(e5, t4) : void 0;
          }
        }
        function a2(e5, t4) {
          (t4 == null || t4 > e5.length) && (t4 = e5.length);
          for (var n6 = 0, i4 = new Array(t4); n6 < t4; n6++)
            i4[n6] = e5[n6];
          return i4;
        }
        function c2(e5, t4) {
          if (!(e5 instanceof t4))
            throw new TypeError("Cannot call a class as a function");
        }
        function u2(e5, t4) {
          for (var n6 = 0; n6 < t4.length; n6++) {
            var i4 = t4[n6];
            i4.enumerable = i4.enumerable || false, i4.configurable = true, "value" in i4 && (i4.writable = true), Object.defineProperty(e5, i4.key, i4);
          }
        }
        function h3(e5, t4, n6) {
          return t4 && u2(e5.prototype, t4), n6 && u2(e5, n6), e5;
        }
        n5.r(t3), n5.d(t3, "Channel", function() {
          return _2;
        }), n5.d(t3, "Serializer", function() {
          return H2;
        }), n5.d(t3, "Socket", function() {
          return U;
        }), n5.d(t3, "LongPoll", function() {
          return D;
        }), n5.d(t3, "Ajax", function() {
          return M2;
        }), n5.d(t3, "Presence", function() {
          return N2;
        });
        var l3 = typeof self != "undefined" ? self : null, f2 = typeof window != "undefined" ? window : null, d2 = l3 || f2 || void 0, p2 = 0, v2 = 1, y2 = 2, m2 = 3, g2 = "closed", k2 = "errored", b2 = "joined", j = "joining", C2 = "leaving", E2 = "phx_close", R2 = "phx_error", T2 = "phx_join", S3 = "phx_reply", w2 = "phx_leave", A2 = [E2, R2, T2, S3, w2], L = "longpoll", x2 = "websocket", O = function(e5) {
          if (typeof e5 == "function")
            return e5;
          return function() {
            return e5;
          };
        }, P2 = function() {
          function e5(t4, n6, i4, o6) {
            c2(this, e5), this.channel = t4, this.event = n6, this.payload = i4 || function() {
              return {};
            }, this.receivedResp = null, this.timeout = o6, this.timeoutTimer = null, this.recHooks = [], this.sent = false;
          }
          return h3(e5, [{ key: "resend", value: function(e6) {
            this.timeout = e6, this.reset(), this.send();
          } }, { key: "send", value: function() {
            this.hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload(), ref: this.ref, join_ref: this.channel.joinRef() }));
          } }, { key: "receive", value: function(e6, t4) {
            return this.hasReceived(e6) && t4(this.receivedResp.response), this.recHooks.push({ status: e6, callback: t4 }), this;
          } }, { key: "reset", value: function() {
            this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = false;
          } }, { key: "matchReceive", value: function(e6) {
            var t4 = e6.status, n6 = e6.response;
            e6.ref;
            this.recHooks.filter(function(e7) {
              return e7.status === t4;
            }).forEach(function(e7) {
              return e7.callback(n6);
            });
          } }, { key: "cancelRefEvent", value: function() {
            this.refEvent && this.channel.off(this.refEvent);
          } }, { key: "cancelTimeout", value: function() {
            clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
          } }, { key: "startTimeout", value: function() {
            var e6 = this;
            this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function(t4) {
              e6.cancelRefEvent(), e6.cancelTimeout(), e6.receivedResp = t4, e6.matchReceive(t4);
            }), this.timeoutTimer = setTimeout(function() {
              e6.trigger("timeout", {});
            }, this.timeout);
          } }, { key: "hasReceived", value: function(e6) {
            return this.receivedResp && this.receivedResp.status === e6;
          } }, { key: "trigger", value: function(e6, t4) {
            this.channel.trigger(this.refEvent, { status: e6, response: t4 });
          } }]), e5;
        }(), _2 = function() {
          function e5(t4, n6, i4) {
            var o6 = this;
            c2(this, e5), this.state = g2, this.topic = t4, this.params = O(n6 || {}), this.socket = i4, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = false, this.joinPush = new P2(this, T2, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new J(function() {
              o6.socket.isConnected() && o6.rejoin();
            }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function() {
              return o6.rejoinTimer.reset();
            })), this.stateChangeRefs.push(this.socket.onOpen(function() {
              o6.rejoinTimer.reset(), o6.isErrored() && o6.rejoin();
            })), this.joinPush.receive("ok", function() {
              o6.state = b2, o6.rejoinTimer.reset(), o6.pushBuffer.forEach(function(e6) {
                return e6.send();
              }), o6.pushBuffer = [];
            }), this.joinPush.receive("error", function() {
              o6.state = k2, o6.socket.isConnected() && o6.rejoinTimer.scheduleTimeout();
            }), this.onClose(function() {
              o6.rejoinTimer.reset(), o6.socket.hasLogger() && o6.socket.log("channel", "close ".concat(o6.topic, " ").concat(o6.joinRef())), o6.state = g2, o6.socket.remove(o6);
            }), this.onError(function(e6) {
              o6.socket.hasLogger() && o6.socket.log("channel", "error ".concat(o6.topic), e6), o6.isJoining() && o6.joinPush.reset(), o6.state = k2, o6.socket.isConnected() && o6.rejoinTimer.scheduleTimeout();
            }), this.joinPush.receive("timeout", function() {
              o6.socket.hasLogger() && o6.socket.log("channel", "timeout ".concat(o6.topic, " (").concat(o6.joinRef(), ")"), o6.joinPush.timeout), new P2(o6, w2, O({}), o6.timeout).send(), o6.state = k2, o6.joinPush.reset(), o6.socket.isConnected() && o6.rejoinTimer.scheduleTimeout();
            }), this.on(S3, function(e6, t5) {
              o6.trigger(o6.replyEventName(t5), e6);
            });
          }
          return h3(e5, [{ key: "join", value: function() {
            var e6 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
            if (this.joinedOnce)
              throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
            return this.timeout = e6, this.joinedOnce = true, this.rejoin(), this.joinPush;
          } }, { key: "onClose", value: function(e6) {
            this.on(E2, e6);
          } }, { key: "onError", value: function(e6) {
            return this.on(R2, function(t4) {
              return e6(t4);
            });
          } }, { key: "on", value: function(e6, t4) {
            var n6 = this.bindingRef++;
            return this.bindings.push({ event: e6, ref: n6, callback: t4 }), n6;
          } }, { key: "off", value: function(e6, t4) {
            this.bindings = this.bindings.filter(function(n6) {
              return !(n6.event === e6 && (t4 === void 0 || t4 === n6.ref));
            });
          } }, { key: "canPush", value: function() {
            return this.socket.isConnected() && this.isJoined();
          } }, { key: "push", value: function(e6, t4) {
            var n6 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.timeout;
            if (t4 = t4 || {}, !this.joinedOnce)
              throw new Error("tried to push '".concat(e6, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
            var i4 = new P2(this, e6, function() {
              return t4;
            }, n6);
            return this.canPush() ? i4.send() : (i4.startTimeout(), this.pushBuffer.push(i4)), i4;
          } }, { key: "leave", value: function() {
            var e6 = this, t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
            this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = C2;
            var n6 = function() {
              e6.socket.hasLogger() && e6.socket.log("channel", "leave ".concat(e6.topic)), e6.trigger(E2, "leave");
            }, i4 = new P2(this, w2, O({}), t4);
            return i4.receive("ok", function() {
              return n6();
            }).receive("timeout", function() {
              return n6();
            }), i4.send(), this.canPush() || i4.trigger("ok", {}), i4;
          } }, { key: "onMessage", value: function(e6, t4, n6) {
            return t4;
          } }, { key: "isLifecycleEvent", value: function(e6) {
            return A2.indexOf(e6) >= 0;
          } }, { key: "isMember", value: function(e6, t4, n6, i4) {
            return this.topic === e6 && (!i4 || i4 === this.joinRef() || !this.isLifecycleEvent(t4) || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: e6, event: t4, payload: n6, joinRef: i4 }), false));
          } }, { key: "joinRef", value: function() {
            return this.joinPush.ref;
          } }, { key: "rejoin", value: function() {
            var e6 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.timeout;
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e6));
          } }, { key: "trigger", value: function(e6, t4, n6, i4) {
            var o6 = this.onMessage(e6, t4, n6, i4);
            if (t4 && !o6)
              throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
            for (var r5 = this.bindings.filter(function(t5) {
              return t5.event === e6;
            }), s6 = 0; s6 < r5.length; s6++) {
              r5[s6].callback(o6, n6, i4 || this.joinRef());
            }
          } }, { key: "replyEventName", value: function(e6) {
            return "chan_reply_".concat(e6);
          } }, { key: "isClosed", value: function() {
            return this.state === g2;
          } }, { key: "isErrored", value: function() {
            return this.state === k2;
          } }, { key: "isJoined", value: function() {
            return this.state === b2;
          } }, { key: "isJoining", value: function() {
            return this.state === j;
          } }, { key: "isLeaving", value: function() {
            return this.state === C2;
          } }]), e5;
        }(), H2 = { HEADER_LENGTH: 1, META_LENGTH: 4, KINDS: { push: 0, reply: 1, broadcast: 2 }, encode: function(e5, t4) {
          if (e5.payload.constructor === ArrayBuffer)
            return t4(this.binaryEncode(e5));
          var n6 = [e5.join_ref, e5.ref, e5.topic, e5.event, e5.payload];
          return t4(JSON.stringify(n6));
        }, decode: function(e5, t4) {
          if (e5.constructor === ArrayBuffer)
            return t4(this.binaryDecode(e5));
          var n6 = r4(JSON.parse(e5), 5);
          return t4({ join_ref: n6[0], ref: n6[1], topic: n6[2], event: n6[3], payload: n6[4] });
        }, binaryEncode: function(e5) {
          var t4 = e5.join_ref, n6 = e5.ref, i4 = e5.event, o6 = e5.topic, r5 = e5.payload, s6 = this.META_LENGTH + t4.length + n6.length + o6.length + i4.length, a3 = new ArrayBuffer(this.HEADER_LENGTH + s6), c3 = new DataView(a3), u3 = 0;
          c3.setUint8(u3++, this.KINDS.push), c3.setUint8(u3++, t4.length), c3.setUint8(u3++, n6.length), c3.setUint8(u3++, o6.length), c3.setUint8(u3++, i4.length), Array.from(t4, function(e6) {
            return c3.setUint8(u3++, e6.charCodeAt(0));
          }), Array.from(n6, function(e6) {
            return c3.setUint8(u3++, e6.charCodeAt(0));
          }), Array.from(o6, function(e6) {
            return c3.setUint8(u3++, e6.charCodeAt(0));
          }), Array.from(i4, function(e6) {
            return c3.setUint8(u3++, e6.charCodeAt(0));
          });
          var h4 = new Uint8Array(a3.byteLength + r5.byteLength);
          return h4.set(new Uint8Array(a3), 0), h4.set(new Uint8Array(r5), a3.byteLength), h4.buffer;
        }, binaryDecode: function(e5) {
          var t4 = new DataView(e5), n6 = t4.getUint8(0), i4 = new TextDecoder();
          switch (n6) {
            case this.KINDS.push:
              return this.decodePush(e5, t4, i4);
            case this.KINDS.reply:
              return this.decodeReply(e5, t4, i4);
            case this.KINDS.broadcast:
              return this.decodeBroadcast(e5, t4, i4);
          }
        }, decodePush: function(e5, t4, n6) {
          var i4 = t4.getUint8(1), o6 = t4.getUint8(2), r5 = t4.getUint8(3), s6 = this.HEADER_LENGTH + this.META_LENGTH - 1, a3 = n6.decode(e5.slice(s6, s6 + i4));
          s6 += i4;
          var c3 = n6.decode(e5.slice(s6, s6 + o6));
          s6 += o6;
          var u3 = n6.decode(e5.slice(s6, s6 + r5));
          return s6 += r5, { join_ref: a3, ref: null, topic: c3, event: u3, payload: e5.slice(s6, e5.byteLength) };
        }, decodeReply: function(e5, t4, n6) {
          var i4 = t4.getUint8(1), o6 = t4.getUint8(2), r5 = t4.getUint8(3), s6 = t4.getUint8(4), a3 = this.HEADER_LENGTH + this.META_LENGTH, c3 = n6.decode(e5.slice(a3, a3 + i4));
          a3 += i4;
          var u3 = n6.decode(e5.slice(a3, a3 + o6));
          a3 += o6;
          var h4 = n6.decode(e5.slice(a3, a3 + r5));
          a3 += r5;
          var l4 = n6.decode(e5.slice(a3, a3 + s6));
          a3 += s6;
          var f3 = e5.slice(a3, e5.byteLength);
          return { join_ref: c3, ref: u3, topic: h4, event: S3, payload: { status: l4, response: f3 } };
        }, decodeBroadcast: function(e5, t4, n6) {
          var i4 = t4.getUint8(1), o6 = t4.getUint8(2), r5 = this.HEADER_LENGTH + 2, s6 = n6.decode(e5.slice(r5, r5 + i4));
          r5 += i4;
          var a3 = n6.decode(e5.slice(r5, r5 + o6));
          return r5 += o6, { join_ref: null, ref: null, topic: s6, event: a3, payload: e5.slice(r5, e5.byteLength) };
        } }, U = function() {
          function e5(t4) {
            var n6 = this, i4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            c2(this, e5), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i4.timeout || 1e4, this.transport = i4.transport || d2.WebSocket || D, this.defaultEncoder = H2.encode.bind(H2), this.defaultDecoder = H2.decode.bind(H2), this.closeWasClean = false, this.unloaded = false, this.binaryType = i4.binaryType || "arraybuffer", this.transport !== D ? (this.encode = i4.encode || this.defaultEncoder, this.decode = i4.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f2 && f2.addEventListener && f2.addEventListener("beforeunload", function(e6) {
              n6.conn && (n6.unloaded = true, n6.abnormalClose("unloaded"));
            }), this.heartbeatIntervalMs = i4.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function(e6) {
              return i4.rejoinAfterMs ? i4.rejoinAfterMs(e6) : [1e3, 2e3, 5e3][e6 - 1] || 1e4;
            }, this.reconnectAfterMs = function(e6) {
              return n6.unloaded ? 100 : i4.reconnectAfterMs ? i4.reconnectAfterMs(e6) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e6 - 1] || 5e3;
            }, this.logger = i4.logger || null, this.longpollerTimeout = i4.longpollerTimeout || 2e4, this.params = O(i4.params || {}), this.endPoint = "".concat(t4, "/").concat(x2), this.vsn = i4.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new J(function() {
              n6.teardown(function() {
                return n6.connect();
              });
            }, this.reconnectAfterMs);
          }
          return h3(e5, [{ key: "protocol", value: function() {
            return location.protocol.match(/^https/) ? "wss" : "ws";
          } }, { key: "endPointURL", value: function() {
            var e6 = M2.appendParams(M2.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
            return e6.charAt(0) !== "/" ? e6 : e6.charAt(1) === "/" ? "".concat(this.protocol(), ":").concat(e6) : "".concat(this.protocol(), "://").concat(location.host).concat(e6);
          } }, { key: "disconnect", value: function(e6, t4, n6) {
            this.closeWasClean = true, this.reconnectTimer.reset(), this.teardown(e6, t4, n6);
          } }, { key: "connect", value: function(e6) {
            var t4 = this;
            e6 && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = O(e6)), this.conn || (this.closeWasClean = false, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function() {
              return t4.onConnOpen();
            }, this.conn.onerror = function(e7) {
              return t4.onConnError(e7);
            }, this.conn.onmessage = function(e7) {
              return t4.onConnMessage(e7);
            }, this.conn.onclose = function(e7) {
              return t4.onConnClose(e7);
            });
          } }, { key: "log", value: function(e6, t4, n6) {
            this.logger(e6, t4, n6);
          } }, { key: "hasLogger", value: function() {
            return this.logger !== null;
          } }, { key: "onOpen", value: function(e6) {
            var t4 = this.makeRef();
            return this.stateChangeCallbacks.open.push([t4, e6]), t4;
          } }, { key: "onClose", value: function(e6) {
            var t4 = this.makeRef();
            return this.stateChangeCallbacks.close.push([t4, e6]), t4;
          } }, { key: "onError", value: function(e6) {
            var t4 = this.makeRef();
            return this.stateChangeCallbacks.error.push([t4, e6]), t4;
          } }, { key: "onMessage", value: function(e6) {
            var t4 = this.makeRef();
            return this.stateChangeCallbacks.message.push([t4, e6]), t4;
          } }, { key: "onConnOpen", value: function() {
            this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = false, this.closeWasClean = false, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function(e6) {
              return (0, r4(e6, 2)[1])();
            });
          } }, { key: "resetHeartbeat", value: function() {
            var e6 = this;
            this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(function() {
              return e6.sendHeartbeat();
            }, this.heartbeatIntervalMs));
          } }, { key: "teardown", value: function(e6, t4, n6) {
            var i4 = this;
            if (!this.conn)
              return e6 && e6();
            this.waitForBufferDone(function() {
              i4.conn && (t4 ? i4.conn.close(t4, n6 || "") : i4.conn.close()), i4.waitForSocketClosed(function() {
                i4.conn && (i4.conn.onclose = function() {
                }, i4.conn = null), e6 && e6();
              });
            });
          } }, { key: "waitForBufferDone", value: function(e6) {
            var t4 = this, n6 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            n6 !== 5 && this.conn && this.conn.bufferedAmount ? setTimeout(function() {
              t4.waitForBufferDone(e6, n6 + 1);
            }, 150 * n6) : e6();
          } }, { key: "waitForSocketClosed", value: function(e6) {
            var t4 = this, n6 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            n6 !== 5 && this.conn && this.conn.readyState !== m2 ? setTimeout(function() {
              t4.waitForSocketClosed(e6, n6 + 1);
            }, 150 * n6) : e6();
          } }, { key: "onConnClose", value: function(e6) {
            this.hasLogger() && this.log("transport", "close", e6), this.triggerChanError(), clearInterval(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function(t4) {
              return (0, r4(t4, 2)[1])(e6);
            });
          } }, { key: "onConnError", value: function(e6) {
            this.hasLogger() && this.log("transport", e6), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function(t4) {
              return (0, r4(t4, 2)[1])(e6);
            });
          } }, { key: "triggerChanError", value: function() {
            this.channels.forEach(function(e6) {
              e6.isErrored() || e6.isLeaving() || e6.isClosed() || e6.trigger(R2);
            });
          } }, { key: "connectionState", value: function() {
            switch (this.conn && this.conn.readyState) {
              case p2:
                return "connecting";
              case v2:
                return "open";
              case y2:
                return "closing";
              default:
                return "closed";
            }
          } }, { key: "isConnected", value: function() {
            return this.connectionState() === "open";
          } }, { key: "remove", value: function(e6) {
            this.off(e6.stateChangeRefs), this.channels = this.channels.filter(function(t4) {
              return t4.joinRef() !== e6.joinRef();
            });
          } }, { key: "off", value: function(e6) {
            for (var t4 in this.stateChangeCallbacks)
              this.stateChangeCallbacks[t4] = this.stateChangeCallbacks[t4].filter(function(t5) {
                var n6 = r4(t5, 1)[0];
                return e6.indexOf(n6) === -1;
              });
          } }, { key: "channel", value: function(e6) {
            var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n6 = new _2(e6, t4, this);
            return this.channels.push(n6), n6;
          } }, { key: "push", value: function(e6) {
            var t4 = this;
            if (this.hasLogger()) {
              var n6 = e6.topic, i4 = e6.event, o6 = e6.payload, r5 = e6.ref, s6 = e6.join_ref;
              this.log("push", "".concat(n6, " ").concat(i4, " (").concat(s6, ", ").concat(r5, ")"), o6);
            }
            this.isConnected() ? this.encode(e6, function(e7) {
              return t4.conn.send(e7);
            }) : this.sendBuffer.push(function() {
              return t4.encode(e6, function(e7) {
                return t4.conn.send(e7);
              });
            });
          } }, { key: "makeRef", value: function() {
            var e6 = this.ref + 1;
            return e6 === this.ref ? this.ref = 0 : this.ref = e6, this.ref.toString();
          } }, { key: "sendHeartbeat", value: function() {
            if (this.isConnected()) {
              if (this.pendingHeartbeatRef)
                return this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), void this.abnormalClose("heartbeat timeout");
              this.pendingHeartbeatRef = this.makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
            }
          } }, { key: "abnormalClose", value: function(e6) {
            this.closeWasClean = false, this.conn.readyState === v2 && this.conn.close(1e3, e6);
          } }, { key: "flushSendBuffer", value: function() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function(e6) {
              return e6();
            }), this.sendBuffer = []);
          } }, { key: "onConnMessage", value: function(e6) {
            var t4 = this;
            this.decode(e6.data, function(e7) {
              var n6 = e7.topic, i4 = e7.event, o6 = e7.payload, s6 = e7.ref, a3 = e7.join_ref;
              s6 && s6 === t4.pendingHeartbeatRef && (t4.pendingHeartbeatRef = null), t4.hasLogger() && t4.log("receive", "".concat(o6.status || "", " ").concat(n6, " ").concat(i4, " ").concat(s6 && "(" + s6 + ")" || ""), o6);
              for (var c3 = 0; c3 < t4.channels.length; c3++) {
                var u3 = t4.channels[c3];
                u3.isMember(n6, i4, o6, a3) && u3.trigger(i4, o6, s6, a3);
              }
              for (var h4 = 0; h4 < t4.stateChangeCallbacks.message.length; h4++) {
                (0, r4(t4.stateChangeCallbacks.message[h4], 2)[1])(e7);
              }
            });
          } }, { key: "leaveOpenTopic", value: function(e6) {
            var t4 = this.channels.find(function(t5) {
              return t5.topic === e6 && (t5.isJoined() || t5.isJoining());
            });
            t4 && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e6, '"')), t4.leave());
          } }]), e5;
        }(), D = function() {
          function e5(t4) {
            c2(this, e5), this.endPoint = null, this.token = null, this.skipHeartbeat = true, this.onopen = function() {
            }, this.onerror = function() {
            }, this.onmessage = function() {
            }, this.onclose = function() {
            }, this.pollEndpoint = this.normalizeEndpoint(t4), this.readyState = p2, this.poll();
          }
          return h3(e5, [{ key: "normalizeEndpoint", value: function(e6) {
            return e6.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + x2), "$1/" + L);
          } }, { key: "endpointURL", value: function() {
            return M2.appendParams(this.pollEndpoint, { token: this.token });
          } }, { key: "closeAndRetry", value: function() {
            this.close(), this.readyState = p2;
          } }, { key: "ontimeout", value: function() {
            this.onerror("timeout"), this.closeAndRetry();
          } }, { key: "poll", value: function() {
            var e6 = this;
            this.readyState !== v2 && this.readyState !== p2 || M2.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function(t4) {
              if (t4) {
                var n6 = t4.status, i4 = t4.token, o6 = t4.messages;
                e6.token = i4;
              } else
                n6 = 0;
              switch (n6) {
                case 200:
                  o6.forEach(function(t5) {
                    return e6.onmessage({ data: t5 });
                  }), e6.poll();
                  break;
                case 204:
                  e6.poll();
                  break;
                case 410:
                  e6.readyState = v2, e6.onopen(), e6.poll();
                  break;
                case 403:
                  e6.onerror(), e6.close();
                  break;
                case 0:
                case 500:
                  e6.onerror(), e6.closeAndRetry();
                  break;
                default:
                  throw new Error("unhandled poll status ".concat(n6));
              }
            });
          } }, { key: "send", value: function(e6) {
            var t4 = this;
            M2.request("POST", this.endpointURL(), "application/json", e6, this.timeout, this.onerror.bind(this, "timeout"), function(e7) {
              e7 && e7.status === 200 || (t4.onerror(e7 && e7.status), t4.closeAndRetry());
            });
          } }, { key: "close", value: function(e6, t4) {
            this.readyState = m2, this.onclose();
          } }]), e5;
        }(), M2 = function() {
          function e5() {
            c2(this, e5);
          }
          return h3(e5, null, [{ key: "request", value: function(e6, t4, n6, i4, o6, r5, s6) {
            if (d2.XDomainRequest) {
              var a3 = new XDomainRequest();
              this.xdomainRequest(a3, e6, t4, i4, o6, r5, s6);
            } else {
              var c3 = new d2.XMLHttpRequest();
              this.xhrRequest(c3, e6, t4, n6, i4, o6, r5, s6);
            }
          } }, { key: "xdomainRequest", value: function(e6, t4, n6, i4, o6, r5, s6) {
            var a3 = this;
            e6.timeout = o6, e6.open(t4, n6), e6.onload = function() {
              var t5 = a3.parseJSON(e6.responseText);
              s6 && s6(t5);
            }, r5 && (e6.ontimeout = r5), e6.onprogress = function() {
            }, e6.send(i4);
          } }, { key: "xhrRequest", value: function(e6, t4, n6, i4, o6, r5, s6, a3) {
            var c3 = this;
            e6.open(t4, n6, true), e6.timeout = r5, e6.setRequestHeader("Content-Type", i4), e6.onerror = function() {
              a3 && a3(null);
            }, e6.onreadystatechange = function() {
              if (e6.readyState === c3.states.complete && a3) {
                var t5 = c3.parseJSON(e6.responseText);
                a3(t5);
              }
            }, s6 && (e6.ontimeout = s6), e6.send(o6);
          } }, { key: "parseJSON", value: function(e6) {
            if (!e6 || e6 === "")
              return null;
            try {
              return JSON.parse(e6);
            } catch (t4) {
              return console && console.log("failed to parse JSON response", e6), null;
            }
          } }, { key: "serialize", value: function(e6, t4) {
            var n6 = [];
            for (var i4 in e6)
              if (e6.hasOwnProperty(i4)) {
                var r5 = t4 ? "".concat(t4, "[").concat(i4, "]") : i4, s6 = e6[i4];
                o5(s6) === "object" ? n6.push(this.serialize(s6, r5)) : n6.push(encodeURIComponent(r5) + "=" + encodeURIComponent(s6));
              }
            return n6.join("&");
          } }, { key: "appendParams", value: function(e6, t4) {
            if (Object.keys(t4).length === 0)
              return e6;
            var n6 = e6.match(/\?/) ? "&" : "?";
            return "".concat(e6).concat(n6).concat(this.serialize(t4));
          } }]), e5;
        }();
        M2.states = { complete: 4 };
        var N2 = function() {
          function e5(t4) {
            var n6 = this, i4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            c2(this, e5);
            var o6 = i4.events || { state: "presence_state", diff: "presence_diff" };
            this.state = {}, this.pendingDiffs = [], this.channel = t4, this.joinRef = null, this.caller = { onJoin: function() {
            }, onLeave: function() {
            }, onSync: function() {
            } }, this.channel.on(o6.state, function(t5) {
              var i5 = n6.caller, o7 = i5.onJoin, r5 = i5.onLeave, s6 = i5.onSync;
              n6.joinRef = n6.channel.joinRef(), n6.state = e5.syncState(n6.state, t5, o7, r5), n6.pendingDiffs.forEach(function(t6) {
                n6.state = e5.syncDiff(n6.state, t6, o7, r5);
              }), n6.pendingDiffs = [], s6();
            }), this.channel.on(o6.diff, function(t5) {
              var i5 = n6.caller, o7 = i5.onJoin, r5 = i5.onLeave, s6 = i5.onSync;
              n6.inPendingSyncState() ? n6.pendingDiffs.push(t5) : (n6.state = e5.syncDiff(n6.state, t5, o7, r5), s6());
            });
          }
          return h3(e5, [{ key: "onJoin", value: function(e6) {
            this.caller.onJoin = e6;
          } }, { key: "onLeave", value: function(e6) {
            this.caller.onLeave = e6;
          } }, { key: "onSync", value: function(e6) {
            this.caller.onSync = e6;
          } }, { key: "list", value: function(t4) {
            return e5.list(this.state, t4);
          } }, { key: "inPendingSyncState", value: function() {
            return !this.joinRef || this.joinRef !== this.channel.joinRef();
          } }], [{ key: "syncState", value: function(e6, t4, n6, i4) {
            var o6 = this, r5 = this.clone(e6), s6 = {}, a3 = {};
            return this.map(r5, function(e7, n7) {
              t4[e7] || (a3[e7] = n7);
            }), this.map(t4, function(e7, t5) {
              var n7 = r5[e7];
              if (n7) {
                var i5 = t5.metas.map(function(e8) {
                  return e8.phx_ref;
                }), c3 = n7.metas.map(function(e8) {
                  return e8.phx_ref;
                }), u3 = t5.metas.filter(function(e8) {
                  return c3.indexOf(e8.phx_ref) < 0;
                }), h4 = n7.metas.filter(function(e8) {
                  return i5.indexOf(e8.phx_ref) < 0;
                });
                u3.length > 0 && (s6[e7] = t5, s6[e7].metas = u3), h4.length > 0 && (a3[e7] = o6.clone(n7), a3[e7].metas = h4);
              } else
                s6[e7] = t5;
            }), this.syncDiff(r5, { joins: s6, leaves: a3 }, n6, i4);
          } }, { key: "syncDiff", value: function(e6, t4, n6, o6) {
            var r5 = t4.joins, s6 = t4.leaves, a3 = this.clone(e6);
            return n6 || (n6 = function() {
            }), o6 || (o6 = function() {
            }), this.map(r5, function(e7, t5) {
              var o7 = a3[e7];
              if (a3[e7] = t5, o7) {
                var r6, s7 = a3[e7].metas.map(function(e8) {
                  return e8.phx_ref;
                }), c3 = o7.metas.filter(function(e8) {
                  return s7.indexOf(e8.phx_ref) < 0;
                });
                (r6 = a3[e7].metas).unshift.apply(r6, i3(c3));
              }
              n6(e7, o7, t5);
            }), this.map(s6, function(e7, t5) {
              var n7 = a3[e7];
              if (n7) {
                var i4 = t5.metas.map(function(e8) {
                  return e8.phx_ref;
                });
                n7.metas = n7.metas.filter(function(e8) {
                  return i4.indexOf(e8.phx_ref) < 0;
                }), o6(e7, n7, t5), n7.metas.length === 0 && delete a3[e7];
              }
            }), a3;
          } }, { key: "list", value: function(e6, t4) {
            return t4 || (t4 = function(e7, t5) {
              return t5;
            }), this.map(e6, function(e7, n6) {
              return t4(e7, n6);
            });
          } }, { key: "map", value: function(e6, t4) {
            return Object.getOwnPropertyNames(e6).map(function(n6) {
              return t4(n6, e6[n6]);
            });
          } }, { key: "clone", value: function(e6) {
            return JSON.parse(JSON.stringify(e6));
          } }]), e5;
        }(), J = function() {
          function e5(t4, n6) {
            c2(this, e5), this.callback = t4, this.timerCalc = n6, this.timer = null, this.tries = 0;
          }
          return h3(e5, [{ key: "reset", value: function() {
            this.tries = 0, clearTimeout(this.timer);
          } }, { key: "scheduleTimeout", value: function() {
            var e6 = this;
            clearTimeout(this.timer), this.timer = setTimeout(function() {
              e6.tries = e6.tries + 1, e6.callback();
            }, this.timerCalc(this.tries + 1));
          } }]), e5;
        }();
      }]);
    });
  }
});

// js/live_element/index.js
__export(exports, {
  LiveElement: () => LiveElement_default,
  LiveSocket: () => LiveSocket
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
    reader.onload = (e4) => {
      if (e4.target.error === null) {
        this.offset += e4.target.result.byteLength;
        this.pushChunk(e4.target.result);
      } else {
        return logError("Read error: " + e4.target.error);
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
  for (let i3 = 0, len = elems.length; i3 < len; i3++) {
    if (ids.has(elems[i3].id)) {
      console.error(`Multiple IDs detected: ${elems[i3].id}. Ensure unique element ids.`);
    } else {
      ids.add(elems[i3].id);
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
  for (let x2 in obj) {
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
    for (let i3 = sourceAttrs.length - 1; i3 >= 0; i3--) {
      let name = sourceAttrs[i3].name;
      if (exclude.indexOf(name) < 0) {
        target.setAttribute(name, source.getAttribute(name));
      }
    }
    let targetAttrs = target.attributes;
    for (let i3 = targetAttrs.length - 1; i3 >= 0; i3--) {
      let name = targetAttrs[i3].name;
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
      return ops.filter(([existingName, _2]) => existingName !== name);
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
    dom_default.putPrivate(inputEl, "files", dom_default.private(inputEl, "files").filter((f2) => !Object.is(f2, file)));
  }
  static trackFiles(inputEl, files) {
    if (inputEl.getAttribute("multiple") !== null) {
      let newFiles = files.filter((file) => !this.activeFiles(inputEl).find((f2) => Object.is(f2, file)));
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
    return (dom_default.private(input, "files") || []).filter((f2) => UploadEntry.isActive(input, f2));
  }
  static inputsAwaitingPreflight(formEl) {
    let fileInputs = dom_default.findUploadInputs(formEl);
    return Array.from(fileInputs).filter((input) => this.filesAwaitingPreflight(input).length > 0);
  }
  static filesAwaitingPreflight(input) {
    return this.activeFiles(input).filter((f2) => !UploadEntry.isPreflighted(input, f2));
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
  for (var i3 = toNodeAttrs.length - 1; i3 >= 0; i3--) {
    attr = toNodeAttrs[i3];
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
  for (var d2 = fromNodeAttrs.length - 1; d2 >= 0; d2--) {
    attr = fromNodeAttrs[d2];
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
      var i3 = 0;
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
              selectedIndex = i3;
              break;
            }
            i3++;
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
        for (var i3 = 0, len = keyedRemovalList.length; i3 < len; i3++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i3]];
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
        childrenOnly: targetContainer.getAttribute(PHX_COMPONENT) === null,
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
    return Object.keys(diff[COMPONENTS] || {}).map((i3) => parseInt(i3));
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
    for (let i3 = 1; i3 < statics.length; i3++) {
      this.dynamicToBuffer(rendered[i3 - 1], templates, output);
      output.buffer += statics[i3];
    }
  }
  comprehensionToBuffer(rendered, templates, output) {
    let { [DYNAMICS]: dynamics, [STATIC]: statics } = rendered;
    statics = this.templateStatic(statics, templates);
    let compTemplates = rendered[TEMPLATES];
    for (let d2 = 0; d2 < dynamics.length; d2++) {
      let dynamic = dynamics[d2];
      output.buffer += statics[0];
      for (let i3 = 1; i3 < statics.length; i3++) {
        this.dynamicToBuffer(dynamic[i3 - 1], compTemplates, output);
        output.buffer += statics[i3];
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
    let [hasChildNodes, hasChildComponents] = Array.from(container.childNodes).reduce(([hasNodes, hasComponents], child, i3) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.getAttribute(PHX_COMPONENT)) {
          return [hasNodes, true];
        }
        child.setAttribute(PHX_COMPONENT, cid);
        if (!child.id) {
          child.id = `${this.parentViewId()}-${cid}-${i3}`;
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
        forms.forEach(([form, newForm, newCid], i3) => {
          this.pushFormRecovery(form, newCid, (resp2) => {
            if (i3 === forms.length - 1) {
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
    for (let i3 = 0; i3 < el.attributes.length; i3++) {
      let name = el.attributes[i3].name;
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
    window.addEventListener("pageshow", (e4) => {
      if (e4.persisted) {
        this.getSocket().disconnect();
        this.withPageLoading({ to: window.location.href, kind: "redirect" });
        window.location.reload();
      }
    }, true);
    this.bindNav();
    this.bindClicks();
    this.bindForms();
    this.bind({ keyup: "keyup", keydown: "keydown" }, (e4, type, view, targetEl, phxEvent, eventTarget) => {
      let matchKey = targetEl.getAttribute(this.binding(PHX_KEY));
      let pressedKey = e4.key && e4.key.toLowerCase();
      if (matchKey && matchKey.toLowerCase() !== pressedKey) {
        return;
      }
      let data = { key: e4.key, ...this.eventMeta(type, e4, targetEl) };
      js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
    });
    this.bind({ blur: "focusout", focus: "focusin" }, (e4, type, view, targetEl, phxEvent, eventTarget) => {
      if (!eventTarget) {
        let data = { key: e4.key, ...this.eventMeta(type, e4, targetEl) };
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      }
    });
    this.bind({ blur: "blur", focus: "focus" }, (e4, type, view, targetEl, targetCtx, phxEvent, phxTarget) => {
      if (phxTarget === "window") {
        let data = this.eventMeta(type, e4, targetEl);
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      }
    });
    window.addEventListener("dragover", (e4) => e4.preventDefault());
    window.addEventListener("drop", (e4) => {
      e4.preventDefault();
      let dropTargetId = maybe(closestPhxBinding(e4.target, this.binding(PHX_DROP_TARGET)), (trueTarget) => {
        return trueTarget.getAttribute(this.binding(PHX_DROP_TARGET));
      });
      let dropTarget = dropTargetId && document.getElementById(dropTargetId);
      let files = Array.from(e4.dataTransfer.files || []);
      if (!dropTarget || dropTarget.disabled || files.length === 0 || !(dropTarget.files instanceof FileList)) {
        return;
      }
      LiveUploader.trackFiles(dropTarget, files);
      dropTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
    this.on(PHX_TRACK_UPLOADS, (e4) => {
      let uploadTarget = e4.target;
      if (!dom_default.isUploadInput(uploadTarget)) {
        return;
      }
      let files = Array.from(e4.detail.files || []).filter((f2) => f2 instanceof File || f2 instanceof Blob);
      LiveUploader.trackFiles(uploadTarget, files);
      uploadTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }
  eventMeta(eventName, e4, targetEl) {
    let callback = this.metadataCallbacks[eventName];
    return callback ? callback(e4, targetEl) : {};
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
      this.on(browserEventName, (e4) => {
        let binding = this.binding(event);
        let windowBinding = this.binding(`window-${event}`);
        let targetPhxEvent = e4.target.getAttribute && e4.target.getAttribute(binding);
        if (targetPhxEvent) {
          this.debounce(e4.target, e4, () => {
            this.withinOwners(e4.target, (view) => {
              callback(e4, event, view, e4.target, targetPhxEvent, null);
            });
          });
        } else {
          dom_default.all(document, `[${windowBinding}]`, (el) => {
            let phxEvent = el.getAttribute(windowBinding);
            this.debounce(el, e4, () => {
              this.withinOwners(el, (view) => {
                callback(e4, event, view, el, phxEvent, "window");
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
    window.addEventListener(eventName, (e4) => {
      if (!this.isConnected()) {
        return;
      }
      let target = null;
      if (capture) {
        target = e4.target.matches(`[${click}]`) ? e4.target : e4.target.querySelector(`[${click}]`);
      } else {
        target = closestPhxBinding(e4.target, click);
        this.dispatchClickAway(e4);
      }
      let phxEvent = target && target.getAttribute(click);
      if (!phxEvent) {
        return;
      }
      if (target.getAttribute("href") === "#") {
        e4.preventDefault();
      }
      this.debounce(target, e4, () => {
        this.withinOwners(target, (view) => {
          js_default.exec("click", phxEvent, view, target, ["push", { data: this.eventMeta("click", e4, target) }]);
        });
      });
    }, capture);
  }
  dispatchClickAway(e4) {
    let binding = this.binding("click-away");
    dom_default.all(document, `[${binding}]`, (el) => {
      if (!(el.isSameNode(e4.target) || el.contains(e4.target))) {
        this.withinOwners(e4.target, (view) => {
          let phxEvent = el.getAttribute(binding);
          js_default.exec("click", phxEvent, view, e4.target, ["push", { data: this.eventMeta("click", e4, e4.target) }]);
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
    window.addEventListener("click", (e4) => {
      let target = closestPhxBinding(e4.target, PHX_LIVE_LINK);
      let type = target && target.getAttribute(PHX_LIVE_LINK);
      let wantsNewTab = e4.metaKey || e4.ctrlKey || e4.button === 1;
      if (!type || !this.isConnected() || !this.main || wantsNewTab) {
        return;
      }
      let href = target.href;
      let linkState = target.getAttribute(PHX_LINK_STATE);
      e4.preventDefault();
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
    this.on("submit", (e4) => {
      let phxEvent = e4.target.getAttribute(this.binding("submit"));
      if (!phxEvent) {
        return;
      }
      e4.preventDefault();
      e4.target.disabled = true;
      this.withinOwners(e4.target, (view) => {
        js_default.exec("submit", phxEvent, view, e4.target, ["push", {}]);
      });
    }, false);
    for (let type of ["change", "input"]) {
      this.on(type, (e4) => {
        let input = e4.target;
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
        this.debounce(input, e4, () => {
          this.withinOwners(input.form, (view) => {
            dom_default.putPrivate(input, PHX_HAS_FOCUSED, true);
            if (!dom_default.isTextualInput(input)) {
              this.setActiveElement(input);
            }
            js_default.exec("change", phxEvent, view, input, ["push", { _target: e4.target.name }]);
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
    window.addEventListener(event, (e4) => {
      if (!this.silenced) {
        callback(e4);
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

// node_modules/@lit/reactive-element/css-tag.js
var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = new Map();
var s = class {
  constructor(t3, n5) {
    if (this._$cssResult$ = true, n5 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3;
  }
  get styleSheet() {
    let e4 = n.get(this.cssText);
    return t && e4 === void 0 && (n.set(this.cssText, e4 = new CSSStyleSheet()), e4.replaceSync(this.cssText)), e4;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t3) => new s(typeof t3 == "string" ? t3 : t3 + "", e);
var r = (t3, ...n5) => {
  const o5 = t3.length === 1 ? t3[0] : n5.reduce((e4, n6, s5) => e4 + ((t4) => {
    if (t4._$cssResult$ === true)
      return t4.cssText;
    if (typeof t4 == "number")
      return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n6) + t3[s5 + 1], t3[0]);
  return new s(o5, e);
};
var i = (e4, n5) => {
  t ? e4.adoptedStyleSheets = n5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n5.forEach((t3) => {
    const n6 = document.createElement("style"), s5 = window.litNonce;
    s5 !== void 0 && n6.setAttribute("nonce", s5), n6.textContent = t3.cssText, e4.appendChild(n6);
  });
};
var S = t ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e4 = "";
  for (const n5 of t4.cssRules)
    e4 += n5.cssText;
  return o(e4);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window.reactiveElementPolyfillSupport;
var r2 = { toAttribute(t3, i3) {
  switch (i3) {
    case Boolean:
      t3 = t3 ? "" : null;
      break;
    case Object:
    case Array:
      t3 = t3 == null ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, i3) {
  let s5 = t3;
  switch (i3) {
    case Boolean:
      s5 = t3 !== null;
      break;
    case Number:
      s5 = t3 === null ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t3);
      } catch (t4) {
        s5 = null;
      }
  }
  return s5;
} };
var h = (t3, i3) => i3 !== t3 && (i3 == i3 || t3 == t3);
var o2 = { attribute: true, type: String, converter: r2, reflect: false, hasChanged: h };
var n2 = class extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t3) {
    var i3;
    (i3 = this.l) !== null && i3 !== void 0 || (this.l = []), this.l.push(t3);
  }
  static get observedAttributes() {
    this.finalize();
    const t3 = [];
    return this.elementProperties.forEach((i3, s5) => {
      const e4 = this._$Eh(s5, i3);
      e4 !== void 0 && (this._$Eu.set(e4, s5), t3.push(e4));
    }), t3;
  }
  static createProperty(t3, i3 = o2) {
    if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t3, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t3)) {
      const s5 = typeof t3 == "symbol" ? Symbol() : "__" + t3, e4 = this.getPropertyDescriptor(t3, s5, i3);
      e4 !== void 0 && Object.defineProperty(this.prototype, t3, e4);
    }
  }
  static getPropertyDescriptor(t3, i3, s5) {
    return { get() {
      return this[i3];
    }, set(e4) {
      const r4 = this[t3];
      this[i3] = e4, this.requestUpdate(t3, r4, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) || o2;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t3 = Object.getPrototypeOf(this);
    if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t4 = this.properties, i3 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
      for (const s5 of i3)
        this.createProperty(s5, t4[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i3) {
    const s5 = [];
    if (Array.isArray(i3)) {
      const e4 = new Set(i3.flat(1 / 0).reverse());
      for (const i4 of e4)
        s5.unshift(S(i4));
    } else
      i3 !== void 0 && s5.push(S(i3));
    return s5;
  }
  static _$Eh(t3, i3) {
    const s5 = i3.attribute;
    return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
  }
  o() {
    var t3;
    this._$Ev = new Promise((t4) => this.enableUpdating = t4), this._$AL = new Map(), this._$Ep(), this.requestUpdate(), (t3 = this.constructor.l) === null || t3 === void 0 || t3.forEach((t4) => t4(this));
  }
  addController(t3) {
    var i3, s5;
    ((i3 = this._$Em) !== null && i3 !== void 0 ? i3 : this._$Em = []).push(t3), this.renderRoot !== void 0 && this.isConnected && ((s5 = t3.hostConnected) === null || s5 === void 0 || s5.call(t3));
  }
  removeController(t3) {
    var i3;
    (i3 = this._$Em) === null || i3 === void 0 || i3.splice(this._$Em.indexOf(t3) >>> 0, 1);
  }
  _$Ep() {
    this.constructor.elementProperties.forEach((t3, i3) => {
      this.hasOwnProperty(i3) && (this._$Et.set(i3, this[i3]), delete this[i3]);
    });
  }
  createRenderRoot() {
    var t3;
    const s5 = (t3 = this.shadowRoot) !== null && t3 !== void 0 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t3;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
      var i3;
      return (i3 = t4.hostConnected) === null || i3 === void 0 ? void 0 : i3.call(t4);
    });
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    var t3;
    (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
      var i3;
      return (i3 = t4.hostDisconnected) === null || i3 === void 0 ? void 0 : i3.call(t4);
    });
  }
  attributeChangedCallback(t3, i3, s5) {
    this._$AK(t3, s5);
  }
  _$Eg(t3, i3, s5 = o2) {
    var e4, h3;
    const n5 = this.constructor._$Eh(t3, s5);
    if (n5 !== void 0 && s5.reflect === true) {
      const o5 = ((h3 = (e4 = s5.converter) === null || e4 === void 0 ? void 0 : e4.toAttribute) !== null && h3 !== void 0 ? h3 : r2.toAttribute)(i3, s5.type);
      this._$Ei = t3, o5 == null ? this.removeAttribute(n5) : this.setAttribute(n5, o5), this._$Ei = null;
    }
  }
  _$AK(t3, i3) {
    var s5, e4, h3;
    const o5 = this.constructor, n5 = o5._$Eu.get(t3);
    if (n5 !== void 0 && this._$Ei !== n5) {
      const t4 = o5.getPropertyOptions(n5), l3 = t4.converter, a2 = (h3 = (e4 = (s5 = l3) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e4 !== void 0 ? e4 : typeof l3 == "function" ? l3 : null) !== null && h3 !== void 0 ? h3 : r2.fromAttribute;
      this._$Ei = n5, this[n5] = a2(i3, t4.type), this._$Ei = null;
    }
  }
  requestUpdate(t3, i3, s5) {
    let e4 = true;
    t3 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || h)(this[t3], i3) ? (this._$AL.has(t3) || this._$AL.set(t3, i3), s5.reflect === true && this._$Ei !== t3 && (this._$ES === void 0 && (this._$ES = new Map()), this._$ES.set(t3, s5))) : e4 = false), !this.isUpdatePending && e4 && (this._$Ev = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ev;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return t3 != null && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t3;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i4) => this[i4] = t4), this._$Et = void 0);
    let i3 = false;
    const s5 = this._$AL;
    try {
      i3 = this.shouldUpdate(s5), i3 ? (this.willUpdate(s5), (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
        var i4;
        return (i4 = t4.hostUpdate) === null || i4 === void 0 ? void 0 : i4.call(t4);
      }), this.update(s5)) : this._$EU();
    } catch (t4) {
      throw i3 = false, this._$EU(), t4;
    }
    i3 && this._$AE(s5);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    var i3;
    (i3 = this._$Em) === null || i3 === void 0 || i3.forEach((t4) => {
      var i4;
      return (i4 = t4.hostUpdated) === null || i4 === void 0 ? void 0 : i4.call(t4);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ev;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$ES !== void 0 && (this._$ES.forEach((t4, i3) => this._$Eg(i3, this[i3], t4)), this._$ES = void 0), this._$EU();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
n2.finalized = true, n2.elementProperties = new Map(), n2.elementStyles = [], n2.shadowRootOptions = { mode: "open" }, e2 == null || e2({ ReactiveElement: n2 }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.0.1");

// node_modules/lit-html/lit-html.js
var t2;
var i2 = globalThis.trustedTypes;
var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var e3 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + e3;
var n3 = `<${o3}>`;
var l = document;
var h2 = (t3 = "") => l.createComment(t3);
var r3 = (t3) => t3 === null || typeof t3 != "object" && typeof t3 != "function";
var d = Array.isArray;
var u = (t3) => {
  var i3;
  return d(t3) || typeof ((i3 = t3) === null || i3 === void 0 ? void 0 : i3[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea)$/i;
var $ = (t3) => (i3, ...s5) => ({ _$litType$: t3, strings: i3, values: s5 });
var p = $(1);
var y = $(2);
var b = Symbol.for("lit-noChange");
var T = Symbol.for("lit-nothing");
var x = new WeakMap();
var w = (t3, i3, s5) => {
  var e4, o5;
  const n5 = (e4 = s5 == null ? void 0 : s5.renderBefore) !== null && e4 !== void 0 ? e4 : i3;
  let l3 = n5._$litPart$;
  if (l3 === void 0) {
    const t4 = (o5 = s5 == null ? void 0 : s5.renderBefore) !== null && o5 !== void 0 ? o5 : null;
    n5._$litPart$ = l3 = new N(i3.insertBefore(h2(), t4), t4, void 0, s5 != null ? s5 : {});
  }
  return l3._$AI(t3), l3;
};
var A = l.createTreeWalker(l, 129, null, false);
var C = (t3, i3) => {
  const o5 = t3.length - 1, l3 = [];
  let h3, r4 = i3 === 2 ? "<svg>" : "", d2 = c;
  for (let i4 = 0; i4 < o5; i4++) {
    const s5 = t3[i4];
    let o6, u3, $2 = -1, p2 = 0;
    for (; p2 < s5.length && (d2.lastIndex = p2, u3 = d2.exec(s5), u3 !== null); )
      p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o6 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h3 = void 0);
    const y2 = d2 === f && t3[i4 + 1].startsWith("/>") ? " " : "";
    r4 += d2 === c ? s5 + n3 : $2 >= 0 ? (l3.push(o6), s5.slice(0, $2) + "$lit$" + s5.slice($2) + e3 + y2) : s5 + e3 + ($2 === -2 ? (l3.push(void 0), i4) : y2);
  }
  const u2 = r4 + (t3[o5] || "<?>") + (i3 === 2 ? "</svg>" : "");
  return [s3 !== void 0 ? s3.createHTML(u2) : u2, l3];
};
var P = class {
  constructor({ strings: t3, _$litType$: s5 }, n5) {
    let l3;
    this.parts = [];
    let r4 = 0, d2 = 0;
    const u2 = t3.length - 1, c2 = this.parts, [v2, a2] = C(t3, s5);
    if (this.el = P.createElement(v2, n5), A.currentNode = this.el.content, s5 === 2) {
      const t4 = this.el.content, i3 = t4.firstChild;
      i3.remove(), t4.append(...i3.childNodes);
    }
    for (; (l3 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l3.nodeType === 1) {
        if (l3.hasAttributes()) {
          const t4 = [];
          for (const i3 of l3.getAttributeNames())
            if (i3.endsWith("$lit$") || i3.startsWith(e3)) {
              const s6 = a2[d2++];
              if (t4.push(i3), s6 !== void 0) {
                const t5 = l3.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i4 = /([.?@])?(.*)/.exec(s6);
                c2.push({ type: 1, index: r4, name: i4[2], strings: t5, ctor: i4[1] === "." ? M : i4[1] === "?" ? k : i4[1] === "@" ? H : S2 });
              } else
                c2.push({ type: 6, index: r4 });
            }
          for (const i3 of t4)
            l3.removeAttribute(i3);
        }
        if (g.test(l3.tagName)) {
          const t4 = l3.textContent.split(e3), s6 = t4.length - 1;
          if (s6 > 0) {
            l3.textContent = i2 ? i2.emptyScript : "";
            for (let i3 = 0; i3 < s6; i3++)
              l3.append(t4[i3], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
            l3.append(t4[s6], h2());
          }
        }
      } else if (l3.nodeType === 8)
        if (l3.data === o3)
          c2.push({ type: 2, index: r4 });
        else {
          let t4 = -1;
          for (; (t4 = l3.data.indexOf(e3, t4 + 1)) !== -1; )
            c2.push({ type: 7, index: r4 }), t4 += e3.length - 1;
        }
      r4++;
    }
  }
  static createElement(t3, i3) {
    const s5 = l.createElement("template");
    return s5.innerHTML = t3, s5;
  }
};
function V(t3, i3, s5 = t3, e4) {
  var o5, n5, l3, h3;
  if (i3 === b)
    return i3;
  let d2 = e4 !== void 0 ? (o5 = s5._$Cl) === null || o5 === void 0 ? void 0 : o5[e4] : s5._$Cu;
  const u2 = r3(i3) ? void 0 : i3._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n5 = d2 == null ? void 0 : d2._$AO) === null || n5 === void 0 || n5.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t3), d2._$AT(t3, s5, e4)), e4 !== void 0 ? ((l3 = (h3 = s5)._$Cl) !== null && l3 !== void 0 ? l3 : h3._$Cl = [])[e4] = d2 : s5._$Cu = d2), d2 !== void 0 && (i3 = V(t3, d2._$AS(t3, i3.values), d2, e4)), i3;
}
var E = class {
  constructor(t3, i3) {
    this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t3) {
    var i3;
    const { el: { content: s5 }, parts: e4 } = this._$AD, o5 = ((i3 = t3 == null ? void 0 : t3.creationScope) !== null && i3 !== void 0 ? i3 : l).importNode(s5, true);
    A.currentNode = o5;
    let n5 = A.nextNode(), h3 = 0, r4 = 0, d2 = e4[0];
    for (; d2 !== void 0; ) {
      if (h3 === d2.index) {
        let i4;
        d2.type === 2 ? i4 = new N(n5, n5.nextSibling, this, t3) : d2.type === 1 ? i4 = new d2.ctor(n5, d2.name, d2.strings, this, t3) : d2.type === 6 && (i4 = new I(n5, this, t3)), this.v.push(i4), d2 = e4[++r4];
      }
      h3 !== (d2 == null ? void 0 : d2.index) && (n5 = A.nextNode(), h3++);
    }
    return o5;
  }
  m(t3) {
    let i3 = 0;
    for (const s5 of this.v)
      s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t3, s5, i3), i3 += s5.strings.length - 2) : s5._$AI(t3[i3])), i3++;
  }
};
var N = class {
  constructor(t3, i3, s5, e4) {
    var o5;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s5, this.options = e4, this._$Cg = (o5 = e4 == null ? void 0 : e4.isConnected) === null || o5 === void 0 || o5;
  }
  get _$AU() {
    var t3, i3;
    return (i3 = (t3 = this._$AM) === null || t3 === void 0 ? void 0 : t3._$AU) !== null && i3 !== void 0 ? i3 : this._$Cg;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i3 = this._$AM;
    return i3 !== void 0 && t3.nodeType === 11 && (t3 = i3.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i3 = this) {
    t3 = V(this, t3, i3), r3(t3) ? t3 === T || t3 == null || t3 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t3 !== this._$AH && t3 !== b && this.$(t3) : t3._$litType$ !== void 0 ? this.T(t3) : t3.nodeType !== void 0 ? this.S(t3) : u(t3) ? this.M(t3) : this.$(t3);
  }
  A(t3, i3 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t3, i3);
  }
  S(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.A(t3));
  }
  $(t3) {
    this._$AH !== T && r3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.S(l.createTextNode(t3)), this._$AH = t3;
  }
  T(t3) {
    var i3;
    const { values: s5, _$litType$: e4 } = t3, o5 = typeof e4 == "number" ? this._$AC(t3) : (e4.el === void 0 && (e4.el = P.createElement(e4.h, this.options)), e4);
    if (((i3 = this._$AH) === null || i3 === void 0 ? void 0 : i3._$AD) === o5)
      this._$AH.m(s5);
    else {
      const t4 = new E(o5, this), i4 = t4.p(this.options);
      t4.m(s5), this.S(i4), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i3 = x.get(t3.strings);
    return i3 === void 0 && x.set(t3.strings, i3 = new P(t3)), i3;
  }
  M(t3) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s5, e4 = 0;
    for (const o5 of t3)
      e4 === i3.length ? i3.push(s5 = new N(this.A(h2()), this.A(h2()), this, this.options)) : s5 = i3[e4], s5._$AI(o5), e4++;
    e4 < i3.length && (this._$AR(s5 && s5._$AB.nextSibling, e4), i3.length = e4);
  }
  _$AR(t3 = this._$AA.nextSibling, i3) {
    var s5;
    for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i3); t3 && t3 !== this._$AB; ) {
      const i4 = t3.nextSibling;
      t3.remove(), t3 = i4;
    }
  }
  setConnected(t3) {
    var i3;
    this._$AM === void 0 && (this._$Cg = t3, (i3 = this._$AP) === null || i3 === void 0 || i3.call(this, t3));
  }
};
var S2 = class {
  constructor(t3, i3, s5, e4, o5) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e4, this.options = o5, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3, i3 = this, s5, e4) {
    const o5 = this.strings;
    let n5 = false;
    if (o5 === void 0)
      t3 = V(this, t3, i3, 0), n5 = !r3(t3) || t3 !== this._$AH && t3 !== b, n5 && (this._$AH = t3);
    else {
      const e5 = t3;
      let l3, h3;
      for (t3 = o5[0], l3 = 0; l3 < o5.length - 1; l3++)
        h3 = V(this, e5[s5 + l3], i3, l3), h3 === b && (h3 = this._$AH[l3]), n5 || (n5 = !r3(h3) || h3 !== this._$AH[l3]), h3 === T ? t3 = T : t3 !== T && (t3 += (h3 != null ? h3 : "") + o5[l3 + 1]), this._$AH[l3] = h3;
    }
    n5 && !e4 && this.k(t3);
  }
  k(t3) {
    t3 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
  }
};
var M = class extends S2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t3) {
    this.element[this.name] = t3 === T ? void 0 : t3;
  }
};
var k = class extends S2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t3) {
    t3 && t3 !== T ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }
};
var H = class extends S2 {
  constructor(t3, i3, s5, e4, o5) {
    super(t3, i3, s5, e4, o5), this.type = 5;
  }
  _$AI(t3, i3 = this) {
    var s5;
    if ((t3 = (s5 = V(this, t3, i3, 0)) !== null && s5 !== void 0 ? s5 : T) === b)
      return;
    const e4 = this._$AH, o5 = t3 === T && e4 !== T || t3.capture !== e4.capture || t3.once !== e4.once || t3.passive !== e4.passive, n5 = t3 !== T && (e4 === T || o5);
    o5 && this.element.removeEventListener(this.name, this, e4), n5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    var i3, s5;
    typeof this._$AH == "function" ? this._$AH.call((s5 = (i3 = this.options) === null || i3 === void 0 ? void 0 : i3.host) !== null && s5 !== void 0 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var I = class {
  constructor(t3, i3, s5) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    V(this, t3);
  }
};
var R = window.litHtmlPolyfillSupport;
R == null || R(P, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.0.1");

// node_modules/lit-element/lit-element.js
var l2;
var o4;
var s4 = class extends n2 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t3, e4;
    const i3 = super.createRenderRoot();
    return (t3 = (e4 = this.renderOptions).renderBefore) !== null && t3 !== void 0 || (e4.renderBefore = i3.firstChild), i3;
  }
  update(t3) {
    const i3 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = w(i3, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t3;
    super.connectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(true);
  }
  disconnectedCallback() {
    var t3;
    super.disconnectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(false);
  }
  render() {
    return b;
  }
};
s4.finalized = true, s4._$litElement$ = true, (l2 = globalThis.litElementHydrateSupport) === null || l2 === void 0 || l2.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
n4 == null || n4({ LitElement: s4 });
((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.0.1");

// js/live_element/LiveElement.js
var import_phoenix = __toModule(require_phoenix());
var LiveElement = class extends s4 {
  static get styles() {
    return r`
      :host {
        display: block;
        padding: 25px;
        color: var(--live-element-text-color, #000);
      }
    `;
  }
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      module: { type: String },
      url: { type: String }
    };
  }
  connectedCallback() {
    super.connectedCallback();
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
  }
  constructor() {
    super();
  }
  firstUpdated() {
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
  viewUpdated() {
    console.log("view updated");
  }
  __increment() {
    this.counter += 1;
  }
};
var LiveElement_default = LiveElement;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=live_element.cjs.js.map
