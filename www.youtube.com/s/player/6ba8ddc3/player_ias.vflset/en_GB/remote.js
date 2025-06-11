(function(g) {
    var window = this;
    'use strict';
    var V2B = function(k) {
            if (k instanceof g.AB) return k;
            if (typeof k.jo == "function") return k.jo(!1);
            if (g.uo(k)) {
                var X = 0,
                    V = new g.AB;
                V.next = function() {
                    for (;;) {
                        if (X >= k.length) return g.qp;
                        if (X in k) return g.DL(k[X++]);
                        X++
                    }
                };
                return V
            }
            throw Error("Not implemented");
        },
        C6z = function(k, X, V) {
            if (g.uo(k)) g.DB(k, X, V);
            else
                for (k = V2B(k);;) {
                    var C = k.next();
                    if (C.done) break;
                    X.call(V, C.value, void 0, k)
                }
        },
        ke = function(k) {
            g.Jm(k, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Ug()).toString(36));
            return k
        },
        Xc = function(k, X, V) {
            Array.isArray(V) || (V = [String(V)]);
            g.HYo(k.j, X, V)
        },
        irz = function(k, X) {
            var V = [];
            C6z(X, function(C) {
                try {
                    var y = g.Rp.prototype.W.call(this, C, !0)
                } catch (U) {
                    if (U == "Storage: Invalid value was encountered") return;
                    throw U;
                }
                y === void 0 ? V.push(C) : g.lyX(y) && V.push(C)
            }, k);
            return V
        },
        yaB = function(k, X) {
            irz(k, X).forEach(function(V) {
                g.Rp.prototype.remove.call(this, V)
            }, k)
        },
        UIQ = function(k) {
            if (k.Sm) {
                if (k.Sm.locationOverrideToken) return {
                    locationOverrideToken: k.Sm.locationOverrideToken
                };
                if (k.Sm.latitudeE7 != null && k.Sm.longitudeE7 != null) return {
                    latitudeE7: k.Sm.latitudeE7,
                    longitudeE7: k.Sm.longitudeE7
                }
            }
            return null
        },
        Nkc = function(k, X) {
            g.Eg(k, X) || k.push(X)
        },
        xIQ = function(k) {
            var X = 0,
                V;
            for (V in k) X++;
            return X
        },
        P6c = function(k, X) {
            return g.L1(k, X)
        },
        Tkg = function(k) {
            try {
                return g.g$.JSON.parse(k)
            } catch (X) {}
            k = String(k);
            if (/^\s*$/.test(k) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(k.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + k + ")")
            } catch (X) {}
            throw Error("Invalid JSON string: " + k);
        },
        VD = function(k) {
            if (g.g$.JSON) try {
                return g.g$.JSON.parse(k)
            } catch (X) {}
            return Tkg(k)
        },
        qGz = function() {
            var k = Ck();
            this.V = k;
            k.CV("/client_streamz/youtube/living_room/mdx/channel/opened", g.fY("channel_type"))
        },
        M2c = function() {
            var k = Ck();
            this.V = k;
            k.CV("/client_streamz/youtube/living_room/mdx/channel/closed", g.fY("channel_type"))
        },
        o5g = function() {
            var k = Ck();
            this.V = k;
            k.CV("/client_streamz/youtube/living_room/mdx/channel/message_received", g.fY("channel_type"))
        },
        e_g = function() {
            var k = Ck();
            this.V = k;
            k.CV("/client_streamz/youtube/living_room/mdx/channel/success")
        },
        f7B = function() {
            var k = Ck();
            this.V = k;
            k.CV("/client_streamz/youtube/living_room/mdx/channel/error", g.fY("channel_type"), g.fY("error_type"))
        },
        E5z = function() {
            var k = Ck();
            this.V = k;
            k.CV("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        JaR = function() {
            var k = Ck();
            this.V = k;
            k.CV("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        raz = function(k) {
            if (k.h5 && typeof k.h5 == "function") return k.h5();
            if (typeof Map !== "undefined" && k instanceof Map || typeof Set !== "undefined" && k instanceof Set) return Array.from(k.values());
            if (typeof k === "string") return k.split("");
            if (g.uo(k)) {
                for (var X = [], V = k.length, C = 0; C < V; C++) X.push(k[C]);
                return X
            }
            return g.z_(k)
        },
        h_B = function(k) {
            if (k.PR && typeof k.PR == "function") return k.PR();
            if (!k.h5 || typeof k.h5 != "function") {
                if (typeof Map !== "undefined" && k instanceof Map) return Array.from(k.keys());
                if (!(typeof Set !== "undefined" && k instanceof Set)) {
                    if (g.uo(k) || typeof k === "string") {
                        var X = [];
                        k = k.length;
                        for (var V = 0; V < k; V++) X.push(V);
                        return X
                    }
                    return g.gC(k)
                }
            }
        },
        Wmc = function(k, X) {
            if (k.forEach && typeof k.forEach == "function") k.forEach(X, void 0);
            else if (g.uo(k) || typeof k === "string") Array.prototype.forEach.call(k, X, void 0);
            else
                for (var V = h_B(k), C = raz(k), y = C.length, U = 0; U < y; U++) X.call(void 0, C[U], V && V[U], k)
        },
        s1C = function(k, X, V, C) {
            var y = new g.PJ(null);
            k && g.T2(y, k);
            X && g.qC(y, X);
            V && g.MC(y, V);
            C && (y.W = C);
            return y
        },
        OrB = function(k, X) {
            return new g.Ph(k, X)
        },
        is = function(k, X) {
            return Object.prototype.hasOwnProperty.call(k, X)
        },
        j1R = function(k, X) {
            return k === X
        },
        yD = function(k, X) {
            this.W = {};
            this.V = [];
            this.r6 = this.size = 0;
            var V = arguments.length;
            if (V > 1) {
                if (V % 2) throw Error("Uneven number of arguments");
                for (var C = 0; C < V; C += 2) this.set(arguments[C], arguments[C + 1])
            } else if (k)
                if (k instanceof yD)
                    for (V = k.PR(), C = 0; C < V.length; C++) this.set(V[C], k.get(V[C]));
                else
                    for (C in k) this.set(C, k[C])
        },
        Uy = function(k) {
            if (k.size != k.V.length) {
                for (var X = 0, V = 0; X < k.V.length;) {
                    var C = k.V[X];
                    is(k.W, C) && (k.V[V++] = C);
                    X++
                }
                k.V.length = V
            }
            if (k.size != k.V.length) {
                X = {};
                for (C = V = 0; V < k.V.length;) {
                    var y = k.V[V];
                    is(X, y) || (k.V[C++] = y, X[y] = 1);
                    V++
                }
                k.V.length = C
            }
        },
        NT = function(k) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new yD;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            k && (this.id = k.id || k.name, this.name = k.name, this.clientName = k.clientName ? k.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = k.app, this.type = k.type || "REMOTE_CONTROL", this.username = k.user || "", this.avatar = k.userAvatarUri || "", this.obfuscatedGaiaId = k.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = k.ownerObfuscatedGaiaId || "", this.theme = k.theme || "u", I7O(this, k.capabilities || ""), KmB(this, k.compatibleSenderThemes || ""), $I3(this, k.experiments || ""), this.brand = k.brand || "", this.model = k.model || "", this.year = k.year || 0, this.os = k.os || "", this.osVersion = k.osVersion || "", this.chipset = k.chipset || "", this.mdxDialServerType = k.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", k = k.deviceInfo) && (k = JSON.parse(k), this.brand = k.brand || "", this.model = k.model || "", this.year = k.year || 0, this.os = k.os || "", this.osVersion = k.osVersion || "", this.chipset = k.chipset || "", this.clientName = k.clientName ? k.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = k.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        I7O = function(k, X) {
            k.capabilities.clear();
            g.vf(X.split(","), g.yB(P6c, Bkg)).forEach(function(V) {
                k.capabilities.add(V)
            })
        },
        KmB = function(k, X) {
            k.compatibleSenderThemes.clear();
            g.vf(X.split(","), g.yB(P6c, n5B)).forEach(function(V) {
                k.compatibleSenderThemes.add(V)
            })
        },
        $I3 = function(k, X) {
            k.experiments.clear();
            X.split(",").forEach(function(V) {
                k.experiments.add(V)
            })
        },
        xe = function(k) {
            k = k || {};
            this.name = k.name || "";
            this.id = k.id || k.screenId || "";
            this.token = k.token || k.loungeToken || "";
            this.uuid = k.uuid || k.dialId || "";
            this.idType = k.screenIdType || "normal"
        },
        Pm = function(k, X) {
            return !!X && (k.id == X || k.uuid == X)
        },
        l7C = function(k) {
            return {
                name: k.name,
                screenId: k.id,
                loungeToken: k.token,
                dialId: k.uuid,
                screenIdType: k.idType
            }
        },
        Lm3 = function(k) {
            return new xe(k)
        },
        SGB = function(k) {
            return Array.isArray(k) ? g.pq(k, Lm3) : []
        },
        TI = function(k) {
            return k ? '{name:"' + k.name + '",id:' + k.id.substr(0, 6) + "..,token:" + ((k.token ? ".." + k.token.slice(-6) : "-") + ",uuid:" + (k.uuid ? ".." + k.uuid.slice(-6) : "-") + ",idType:" + k.idType + "}") : "null"
        },
        poJ = function(k) {
            return Array.isArray(k) ? "[" + g.pq(k, TI).join(",") + "]" : "null"
        },
        YGO = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(k) {
                    var X = Math.random() * 16 | 0;
                    return (k == "x" ? X : X & 3 | 8).toString(16)
                })
        },
        ulZ = function(k) {
            return g.pq(k, function(X) {
                return {
                    key: X.id,
                    name: X.name
                }
            })
        },
        kmB = function(k, X) {
            return g.ez(k, function(V) {
                return V || X ? !V != !X ? !1 : V.id == X.id : !0
            })
        },
        qT = function(k, X) {
            return g.ez(k, function(V) {
                return Pm(V, X)
            })
        },
        XDJ = function() {
            var k = (0, g.bv)();
            k && yaB(k, k.V.jo(!0))
        },
        MT = function() {
            var k = g.aB("yt-remote-connected-devices") || [];
            g.tR(k);
            return k
        },
        VXO = function(k) {
            if (k.length == 0) return [];
            var X = k[0].indexOf("#"),
                V = X == -1 ? k[0] : k[0].substring(0, X);
            return g.pq(k, function(C, y) {
                return y == 0 ? C : C.substring(V.length)
            })
        },
        CvB = function(k) {
            g.Zn("yt-remote-connected-devices", k, 86400)
        },
        oj = function() {
            if (iLB) return iLB;
            var k = g.aB("yt-remote-device-id");
            k || (k = YGO(), g.Zn("yt-remote-device-id", k, 31536E3));
            for (var X = MT(), V = 1, C = k; g.Eg(X, C);) V++, C = k + "#" + V;
            return iLB = C
        },
        y91 = function() {
            var k = MT(),
                X = oj();
            g.zm() && g.AR(k, X);
            k = VXO(k);
            if (k.length == 0) try {
                g.QQ("remote_sid")
            } catch (V) {} else try {
                g.Z7("remote_sid", k.join(","), -1)
            } catch (V) {}
        },
        US5 = function() {
            return g.aB("yt-remote-session-browser-channel")
        },
        NoZ = function() {
            return g.aB("yt-remote-local-screens") || []
        },
        xSz = function() {
            g.Zn("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Pv3 = function(k) {
            k.length > 5 && (k = k.slice(k.length - 5));
            var X = g.pq(NoZ(), function(C) {
                    return C.loungeToken
                }),
                V = g.pq(k, function(C) {
                    return C.loungeToken
                });
            g.YV(V, function(C) {
                return !g.Eg(X, C)
            }) && xSz();
            g.Zn("yt-remote-local-screens", k, 31536E3)
        },
        e9 = function(k) {
            k || (g.Qi("yt-remote-session-screen-id"), g.Qi("yt-remote-session-video-id"));
            y91();
            k = MT();
            g.rC(k, oj());
            CvB(k)
        },
        ToR = function() {
            if (!fk) {
                var k = g.Qf();
                k && (fk = new g.dU(k))
            }
        },
        qsz = function() {
            ToR();
            return fk ? !!fk.get("yt-remote-use-staging-server") : !1
        },
        Ey = function(k, X) {
            g.T0[k] = !0;
            var V = g.xo();
            V && V.publish.apply(V, arguments);
            g.T0[k] = !1
        },
        MXc = function() {},
        Ck = function() {
            if (!J8) {
                J8 = new g.Fz(new MXc);
                var k = g.Bo("client_streamz_web_flush_count", -1);
                k !== -1 && (J8.U = k)
            }
            return J8
        },
        oR1 = function() {
            var k = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return k ? parseInt(k[1], 10) : 0
        },
        ejg = function(k) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + k) != -1 || document.currentScript.src.indexOf("&" + k) != -1)
        },
        fnB = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        rP = function(k) {
            k.length ? ERc(k.shift(), function() {
                rP(k)
            }) : J9_()
        },
        r9c = function(k) {
            return "chrome-extension://" + k + "/cast_sender.js"
        },
        ERc = function(k, X, V) {
            var C = document.createElement("script");
            C.onerror = X;
            V && (C.onload = V);
            g.xJ(C, g.mB(k));
            (document.head || document.documentElement).appendChild(C)
        },
        hj1 = function() {
            var k = oR1(),
                X = [];
            if (k > 1) {
                var V = k - 1;
                X.push("//www.gstatic.com/eureka/clank/" + k + "/cast_sender.js");
                X.push("//www.gstatic.com/eureka/clank/" + V + "/cast_sender.js")
            }
            return X
        },
        J9_ = function() {
            var k = fnB();
            k && k(!1, "No cast extension found")
        },
        sBB = function() {
            if (WMQ) {
                var k = 2,
                    X = fnB(),
                    V = function() {
                        k--;
                        k == 0 && X && X(!0)
                    };
                window.__onGCastApiAvailable = V;
                ERc("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", J9_, V)
            }
        },
        OL1 = function() {
            sBB();
            var k = hj1();
            k.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            rP(k)
        },
        InZ = function() {
            sBB();
            var k = hj1();
            k.push.apply(k, g.G(jBR.map(r9c)));
            k.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            rP(k)
        },
        h8 = function(k, X, V) {
            g.H.call(this);
            this.X = V != null ? (0, g.iB)(k, V) : k;
            this.Gh = X;
            this.Y = (0, g.iB)(this.Qd, this);
            this.V = !1;
            this.W = 0;
            this.U = this.ZQ = null;
            this.j = []
        },
        Wm = function() {},
        KMg = function() {
            g.VZ.call(this, "p")
        },
        $SZ = function() {
            g.VZ.call(this, "o")
        },
        nR1 = function() {
            return Bo1 = Bo1 || new g.rK
        },
        GmB = function(k) {
            g.VZ.call(this, "serverreachability", k)
        },
        sy = function(k) {
            var X = nR1();
            X.dispatchEvent(new GmB(X, k))
        },
        wDJ = function(k) {
            g.VZ.call(this, "statevent", k)
        },
        Oy = function(k) {
            var X = nR1();
            X.dispatchEvent(new wDJ(X, k))
        },
        mSJ = function(k, X, V, C) {
            g.VZ.call(this, "timingevent", k);
            this.size = X;
            this.rtt = V;
            this.retries = C
        },
        j9 = function(k, X) {
            if (typeof k !== "function") throw Error("Fn must not be null and must be a function");
            return g.g$.setTimeout(function() {
                k()
            }, X)
        },
        Ij = function() {},
        Kk = function(k, X, V, C) {
            this.U = k;
            this.j = X;
            this.Et = V;
            this.Rc = C || 1;
            this.tO = new g.OR(this);
            this.dB = 45E3;
            this.uq = null;
            this.X = !1;
            this.D = this.Gc = this.T = this.n4 = this.qC = this.D8 = this.k9 = null;
            this.U2 = [];
            this.V = null;
            this.N = 0;
            this.Y = this.gB = null;
            this.VD = -1;
            this.bq = !1;
            this.Tc = 0;
            this.Z8 = null;
            this.XT = this.s2 = this.yD = this.Y9 = !1;
            this.W = new tXz
        },
        tXz = function() {
            this.U = null;
            this.V = "";
            this.W = !1
        },
        dS1 = function(k, X, V) {
            k.n4 = 1;
            k.T = ke(X.clone());
            k.D = V;
            k.Y9 = !0;
            c93(k, null)
        },
        c93 = function(k, X) {
            k.qC = Date.now();
            $e(k);
            k.Gc = k.T.clone();
            Xc(k.Gc, "t", k.Rc);
            k.N = 0;
            var V = k.U.n4;
            k.W = new tXz;
            k.V = A9c(k.U, V ? X : null, !k.D);
            k.Tc > 0 && (k.Z8 = new g.Nc((0, g.iB)(k.QX, k, k.V), k.Tc));
            k.tO.listen(k.V, "readystatechange", k.Mk);
            X = k.uq ? g.kQ(k.uq) : {};
            k.D ? (k.gB || (k.gB = "POST"), X["Content-Type"] = "application/x-www-form-urlencoded", k.V.send(k.Gc, k.gB, k.D, X)) : (k.gB = "GET", k.V.send(k.Gc, k.gB, null, X));
            sy(1)
        },
        Rjz = function(k) {
            if (!DSJ(k)) return g.Vx(k.V);
            var X = g.CM(k.V);
            if (X === "") return "";
            var V = "",
                C = X.length,
                y = g.kS(k.V) == 4;
            if (!k.W.U) {
                if (typeof TextDecoder === "undefined") return Bm(k), nk(k), "";
                k.W.U = new g.g$.TextDecoder
            }
            for (var U = 0; U < C; U++) k.W.W = !0, V += k.W.U.decode(X[U], {
                stream: !(y && U == C - 1)
            });
            X.length = 0;
            k.W.V += V;
            k.N = 0;
            return k.W.V
        },
        DSJ = function(k) {
            return k.V ? k.gB == "GET" && k.n4 != 2 && k.U.mR : !1
        },
        vRg = function(k, X) {
            var V = k.N,
                C = X.indexOf("\n", V);
            if (C == -1) return HLg;
            V = Number(X.substring(V, C));
            if (isNaN(V)) return bLc;
            C += 1;
            if (C + V > X.length) return HLg;
            X = X.slice(C, C + V);
            k.N = C + V;
            return X
        },
        $e = function(k) {
            k.D8 = Date.now() + k.dB;
            ZLC(k, k.dB)
        },
        ZLC = function(k, X) {
            if (k.k9 != null) throw Error("WatchDog timer not null");
            k.k9 = j9((0, g.iB)(k.Ry, k), X)
        },
        anJ = function(k) {
            k.k9 && (g.g$.clearTimeout(k.k9), k.k9 = null)
        },
        nk = function(k) {
            k.U.cV() || k.bq || QBC(k.U, k)
        },
        Bm = function(k) {
            anJ(k);
            g.JB(k.Z8);
            k.Z8 = null;
            k.tO.removeAll();
            if (k.V) {
                var X = k.V;
                k.V = null;
                X.abort();
                X.dispose()
            }
        },
        Ys3 = function(k, X) {
            try {
                var V = k.U;
                if (V.OW != 0 && (V.V == k || zjB(V.W, k)))
                    if (!k.s2 && zjB(V.W, k) && V.OW == 3) {
                        try {
                            var C = V.uO.V.parse(X)
                        } catch (O) {
                            C = null
                        }
                        if (Array.isArray(C) && C.length == 3) {
                            var y = C;
                            if (y[0] == 0) a: {
                                if (!V.T) {
                                    if (V.V)
                                        if (V.V.qC + 3E3 < k.qC) GI(V), wP(V);
                                        else break a;
                                    FMg(V);
                                    Oy(18)
                                }
                            }
                            else V.WF = y[1], 0 < V.WF - V.Z8 && y[2] < 37500 && V.s2 && V.U2 == 0 && !V.k9 && (V.k9 = j9((0, g.iB)(V.Z5, V), 6E3));
                            if (gR_(V.W) <= 1 && V.d2) {
                                try {
                                    V.d2()
                                } catch (O) {}
                                V.d2 = void 0
                            }
                        } else mn(V, 11)
                    } else if ((k.s2 || V.V == k) && GI(V), !g.fQ(X))
                    for (y = V.uO.V.parse(X), X = 0; X < y.length; X++) {
                        var U = y[X];
                        V.Z8 = U[0];
                        U = U[1];
                        if (V.OW == 2)
                            if (U[0] == "c") {
                                V.j = U[1];
                                V.Rc = U[2];
                                var N = U[3];
                                N != null && (V.Rd = N);
                                var P = U[5];
                                P != null && typeof P === "number" && P > 0 && (V.Tc = 1.5 * P);
                                C = V;
                                var T = k.AQ();
                                if (T) {
                                    var q = g.iN(T, "X-Client-Wire-Protocol");
                                    if (q) {
                                        var M = C.W;
                                        !M.V && (g.Jc(q, "spdy") || g.Jc(q, "quic") || g.Jc(q, "h2")) && (M.j = M.Y, M.V = new Set, M.W && (ln1(M, M.W), M.W = null))
                                    }
                                    if (C.Y9) {
                                        var e = g.iN(T, "X-HTTP-Session-Id");
                                        e && (C.Sm = e, g.Jm(C.uq, C.Y9, e))
                                    }
                                }
                                V.OW = 3;
                                V.Y && V.Y.GT();
                                V.Ic && (V.NU = Date.now() - k.qC);
                                C = V;
                                var f = k;
                                C.QJ = LMg(C, C.n4 ? C.Rc : null, C.Et);
                                if (f.s2) {
                                    SsQ(C.W,
                                        f);
                                    var E = f,
                                        J = C.Tc;
                                    J && E.setTimeout(J);
                                    E.k9 && (anJ(E), $e(E));
                                    C.V = f
                                } else pDB(C);
                                V.U.length > 0 && t8(V)
                            } else U[0] != "stop" && U[0] != "close" || mn(V, 7);
                        else V.OW == 3 && (U[0] == "stop" || U[0] == "close" ? U[0] == "stop" ? mn(V, 7) : V.disconnect() : U[0] != "noop" && V.Y && V.Y.JX(U), V.U2 = 0)
                    }
                sy(4)
            } catch (O) {}
        },
        usc = function(k, X) {
            this.V = k;
            this.map = X;
            this.context = null
        },
        kG5 = function(k) {
            this.Y = k || 10;
            g.g$.PerformanceNavigationTiming ? (k = g.g$.performance.getEntriesByType("navigation"), k = k.length > 0 && (k[0].nextHopProtocol == "hq" || k[0].nextHopProtocol == "h2")) : k = !!(g.g$.chrome && g.g$.chrome.loadTimes && g.g$.chrome.loadTimes() && g.g$.chrome.loadTimes().wasFetchedViaSpdy);
            this.j = k ? this.Y : 1;
            this.V = null;
            this.j > 1 && (this.V = new Set);
            this.W = null;
            this.U = []
        },
        X7c = function(k) {
            return k.W ? !0 : k.V ? k.V.size >= k.j : !1
        },
        gR_ = function(k) {
            return k.W ? 1 : k.V ? k.V.size : 0
        },
        zjB = function(k, X) {
            return k.W ? k.W == X : k.V ? k.V.has(X) : !1
        },
        ln1 =
        function(k, X) {
            k.V ? k.V.add(X) : k.W = X
        },
        SsQ = function(k, X) {
            k.W && k.W == X ? k.W = null : k.V && k.V.has(X) && k.V.delete(X)
        },
        VL3 = function(k) {
            if (k.W != null) return k.U.concat(k.W.U2);
            if (k.V != null && k.V.size !== 0) {
                var X = k.U;
                k = g.W(k.V.values());
                for (var V = k.next(); !V.done; V = k.next()) X = X.concat(V.value.U2);
                return X
            }
            return g.sg(k.U)
        },
        C2B = function(k, X) {
            var V = new Ij;
            if (g.g$.Image) {
                var C = new Image;
                C.onload = g.yB(cm, V, "TestLoadImage: loaded", !0, X, C);
                C.onerror = g.yB(cm, V, "TestLoadImage: error", !1, X, C);
                C.onabort = g.yB(cm, V, "TestLoadImage: abort", !1, X, C);
                C.ontimeout = g.yB(cm, V, "TestLoadImage: timeout", !1, X, C);
                g.g$.setTimeout(function() {
                    if (C.ontimeout) C.ontimeout()
                }, 1E4);
                C.src = k
            } else X(!1)
        },
        ifZ = function(k, X) {
            var V = new Ij,
                C = new AbortController,
                y = setTimeout(function() {
                    C.abort();
                    cm(V, "TestPingServer: timeout", !1, X)
                }, 1E4);
            fetch(k, {
                signal: C.signal
            }).then(function(U) {
                clearTimeout(y);
                U.ok ? cm(V, "TestPingServer: ok", !0, X) : cm(V, "TestPingServer: server error", !1, X)
            }).catch(function() {
                clearTimeout(y);
                cm(V, "TestPingServer: error", !1, X)
            })
        },
        cm = function(k, X, V, C, y) {
            try {
                y && (y.onload = null, y.onerror = null, y.onabort = null, y.ontimeout = null), C(V)
            } catch (U) {}
        },
        yKZ = function() {
            this.V = new Wm
        },
        UF5 = function(k, X, V) {
            var C = V || "";
            try {
                Wmc(k, function(y, U) {
                    var N = y;
                    g.kO(y) && (N = g.ld(y));
                    X.push(C + U + "=" + encodeURIComponent(N))
                })
            } catch (y) {
                throw X.push(C + "type=" + encodeURIComponent("_badmap")), y;
            }
        },
        dP = function(k, X, V) {
            return V && V.w9 ? V.w9[k] || X : X
        },
        NuZ = function(k) {
            this.U = [];
            this.Rc = this.QJ = this.uq = this.Et = this.V = this.Sm = this.Y9 = this.bq = this.N = this.VD = this.D = null;
            this.Qz = this.Gc = 0;
            this.HI = dP("failFast", !1, k);
            this.s2 = this.k9 = this.T = this.X = this.Y = null;
            this.MQ = !0;
            this.WF = this.Z8 = -1;
            this.XT = this.U2 = this.qC = 0;
            this.sD = dP("baseRetryDelayMs", 5E3, k);
            this.JG = dP("retryDelaySeedMs", 1E4, k);
            this.Kp = dP("forwardChannelMaxRetries", 2, k);
            this.RM = dP("forwardChannelRequestTimeoutMs", 2E4, k);
            this.xL = k && k.rZH || void 0;
            this.M_ = k && k.ksC || void 0;
            this.mR = k && k.q98 || !1;
            this.Tc = void 0;
            this.n4 = k && k.Yd2 ||
                !1;
            this.j = "";
            this.W = new kG5(k && k.Qh2);
            this.uO = new yKZ;
            this.tO = k && k.aHz || !1;
            this.D8 = k && k.D$B || !1;
            this.tO && this.D8 && (this.D8 = !1);
            this.Rt = k && k.b_b || !1;
            k && k.Bv4 && (this.MQ = !1);
            this.Ic = !this.tO && this.MQ && k && k.Jto || !1;
            this.n0 = void 0;
            k && k.Ue && k.Ue > 0 && (this.n0 = k.Ue);
            this.d2 = void 0;
            this.NU = 0;
            this.dB = !1;
            this.yD = this.gB = null
        },
        wP = function(k) {
            k.V && (xFB(k), k.V.cancel(), k.V = null)
        },
        P21 = function(k) {
            wP(k);
            k.T && (g.g$.clearTimeout(k.T), k.T = null);
            GI(k);
            k.W.cancel();
            k.X && (typeof k.X === "number" && g.g$.clearTimeout(k.X), k.X = null)
        },
        t8 = function(k) {
            X7c(k.W) || k.X || (k.X = !0, g.G6(k.pN, k), k.qC = 0)
        },
        qOJ = function(k, X) {
            if (gR_(k.W) >= k.W.j - (k.X ? 1 : 0)) return !1;
            if (k.X) return k.U = X.U2.concat(k.U), !0;
            if (k.OW == 1 || k.OW == 2 || k.qC >= (k.HI ? 0 : k.Kp)) return !1;
            k.X = j9((0, g.iB)(k.pN, k, X), TuB(k, k.qC));
            k.qC++;
            return !0
        },
        o2B = function(k, X) {
            var V;
            X ? V = X.Et : V = k.Gc++;
            var C = k.uq.clone();
            g.Jm(C, "SID", k.j);
            g.Jm(C, "RID", V);
            g.Jm(C, "AID", k.Z8);
            A8(k, C);
            k.N && k.D && g.sR(C, k.N, k.D);
            V = new Kk(k, k.j, V, k.qC + 1);
            k.N === null && (V.uq = k.D);
            X && (k.U = X.U2.concat(k.U));
            X = ML_(k, V, 1E3);
            V.setTimeout(Math.round(k.RM * .5) + Math.round(k.RM * .5 * Math.random()));
            ln1(k.W, V);
            dS1(V, C, X)
        },
        A8 = function(k, X) {
            k.bq && g.bB(k.bq, function(V, C) {
                g.Jm(X, C, V)
            });
            k.Y && Wmc({}, function(V, C) {
                g.Jm(X, C, V)
            })
        },
        ML_ = function(k, X, V) {
            V = Math.min(k.U.length, V);
            var C = k.Y ? (0, g.iB)(k.Y.TI, k.Y, k) : null;
            a: {
                for (var y = k.U, U = -1;;) {
                    var N = ["count=" + V];
                    U == -1 ? V > 0 ? (U = y[0].V, N.push("ofs=" + U)) : U = 0 : N.push("ofs=" + U);
                    for (var P = !0, T = 0; T < V; T++) {
                        var q = y[T].V,
                            M = y[T].map;
                        q -= U;
                        if (q < 0) U = Math.max(0, y[T].V - 100), P = !1;
                        else try {
                            UF5(M, N, "req" + q + "_")
                        } catch (e) {
                            C && C(M)
                        }
                    }
                    if (P) {
                        C = N.join("&");
                        break a
                    }
                }
                C = void 0
            }
            k = k.U.splice(0, V);
            X.U2 = k;
            return C
        },
        pDB = function(k) {
            k.V || k.T || (k.XT = 1, g.G6(k.MF, k), k.U2 = 0)
        },
        FMg = function(k) {
            if (k.V || k.T || k.U2 >= 3) return !1;
            k.XT++;
            k.T = j9((0, g.iB)(k.MF, k), TuB(k, k.U2));
            k.U2++;
            return !0
        },
        xFB = function(k) {
            k.gB != null && (g.g$.clearTimeout(k.gB), k.gB = null)
        },
        erB = function(k) {
            k.V = new Kk(k, k.j, "rpc", k.XT);
            k.N === null && (k.V.uq = k.D);
            k.V.Tc = 0;
            var X = k.QJ.clone();
            g.Jm(X, "RID", "rpc");
            g.Jm(X, "SID", k.j);
            g.Jm(X, "AID", k.Z8);
            g.Jm(X, "CI", k.s2 ? "0" : "1");
            !k.s2 && k.n0 && g.Jm(X, "TO", k.n0);
            g.Jm(X, "TYPE", "xmlhttp");
            A8(k, X);
            k.N && k.D && g.sR(X, k.N, k.D);
            k.Tc && k.V.setTimeout(k.Tc);
            var V = k.V;
            k = k.Rc;
            V.n4 = 1;
            V.T = ke(X.clone());
            V.D = null;
            V.Y9 = !0;
            c93(V, k)
        },
        GI = function(k) {
            k.k9 != null && (g.g$.clearTimeout(k.k9), k.k9 = null)
        },
        QBC = function(k, X) {
            var V = null;
            if (k.V == X) {
                GI(k);
                xFB(k);
                k.V = null;
                var C = 2
            } else if (zjB(k.W, X)) V = X.U2, SsQ(k.W, X), C = 1;
            else return;
            if (k.OW != 0)
                if (X.X)
                    if (C == 1) {
                        V = X.D ? X.D.length : 0;
                        X = Date.now() - X.qC;
                        var y = k.qC;
                        C = nR1();
                        C.dispatchEvent(new mSJ(C, V, X, y));
                        t8(k)
                    } else pDB(k);
            else {
                var U = X.VD;
                y = X.getLastError();
                if (y == 3 || y == 0 && U > 0 || !(C == 1 && qOJ(k, X) || C == 2 && FMg(k))) switch (V && V.length > 0 && (X = k.W, X.U = X.U.concat(V)), y) {
                    case 1:
                        mn(k, 5);
                        break;
                    case 4:
                        mn(k, 10);
                        break;
                    case 3:
                        mn(k, 6);
                        break;
                    default:
                        mn(k, 2)
                }
            }
        },
        TuB = function(k, X) {
            var V = k.sD + Math.floor(Math.random() *
                k.JG);
            k.isActive() || (V *= 2);
            return V * X
        },
        mn = function(k, X) {
            if (X == 2) {
                var V = (0, g.iB)(k.bJo, k),
                    C = k.M_,
                    y = !C;
                C = new g.PJ(C || "//www.google.com/images/cleardot.gif");
                g.g$.location && g.g$.location.protocol == "http" || g.T2(C, "https");
                ke(C);
                y ? C2B(C.toString(), V) : ifZ(C.toString(), V)
            } else Oy(2);
            k.OW = 0;
            k.Y && k.Y.TT(X);
            faR(k);
            P21(k)
        },
        faR = function(k) {
            k.OW = 0;
            k.yD = [];
            if (k.Y) {
                var X = VL3(k.W);
                if (X.length != 0 || k.U.length != 0) g.jz(k.yD, X), g.jz(k.yD, k.U), k.W.U.length = 0, g.sg(k.U), k.U.length = 0;
                k.Y.Zq()
            }
        },
        E2z = function(k) {
            if (k.OW == 0) return k.yD;
            var X = [];
            g.jz(X, VL3(k.W));
            g.jz(X, k.U);
            return X
        },
        LMg = function(k, X, V) {
            var C = g.ri(V);
            C.V != "" ? (X && g.qC(C, X + "." + C.V), g.MC(C, C.U)) : (C = g.g$.location, C = s1C(C.protocol, X ? X + "." + C.hostname : C.hostname, +C.port, V));
            X = k.Y9;
            V = k.Sm;
            X && V && g.Jm(C, X, V);
            g.Jm(C, "VER", k.Rd);
            A8(k, C);
            return C
        },
        A9c = function(k, X, V) {
            if (X && !k.n4) throw Error("Can't create secondary domain capable XhrIo object.");
            X = k.mR && !k.xL ? new g.pN(new g.yj({
                tL: V
            })) : new g.pN(k.xL);
            X.N = k.n4;
            return X
        },
        JKB = function() {},
        rKC = function() {},
        Rj = function(k, X) {
            g.rK.call(this);
            this.V = new NuZ(X);
            this.Y = k;
            this.W = X && X.a89 || null;
            k = X && X.jb9 || null;
            X && X.H_z && (k ? k["X-Client-Protocol"] = "webchannel" : k = {
                "X-Client-Protocol": "webchannel"
            });
            this.V.D = k;
            k = X && X.x22 || null;
            X && X.Yk && (k ? k["X-WebChannel-Content-Type"] = X.Yk : k = {
                "X-WebChannel-Content-Type": X.Yk
            });
            X && X.U1 && (k ? k["X-WebChannel-Client-Profile"] = X.U1 : k = {
                "X-WebChannel-Client-Profile": X.U1
            });
            this.V.VD = k;
            (k = X && X.Eb9) && !g.fQ(k) && (this.V.N = k);
            this.X = X && X.Yd2 || !1;
            this.j = X && X.QUY || !1;
            (X = X && X.aX) && !g.fQ(X) && (this.V.Y9 = X, g.lB(this.W, X) && (k =
                this.W, X in k && delete k[X]));
            this.U = new Dx(this)
        },
        hrO = function(k) {
            KMg.call(this);
            k.__headers__ && (this.headers = k.__headers__, this.statusCode = k.__status__, delete k.__headers__, delete k.__status__);
            var X = k.__sm__;
            X ? this.data = (this.V = g.QB(X)) ? g.YO(X, this.V) : X : this.data = k
        },
        WWC = function(k) {
            $SZ.call(this);
            this.status = 1;
            this.errorCode = k
        },
        Dx = function(k) {
            this.V = k
        },
        svO = function(k, X) {
            this.W = k;
            this.V = X
        },
        Of1 = function(k) {
            return E2z(k.V).map(function(X) {
                var V = k.W;
                X = X.map;
                "__data__" in X ? (X = X.__data__, V = V.j ? Tkg(X) : X) : V = X;
                return V
            })
        },
        Hm = function(k, X) {
            if (typeof k !== "function") throw Error("Fn must not be null and must be a function");
            return g.g$.setTimeout(function() {
                k()
            }, X)
        },
        vm = function(k) {
            bs.dispatchEvent(new jv3(bs, k))
        },
        jv3 = function(k) {
            g.VZ.call(this, "statevent", k)
        },
        Zx = function(k, X, V, C) {
            this.V = k;
            this.j = X;
            this.N = V;
            this.X = C || 1;
            this.W = 45E3;
            this.U = new g.OR(this);
            this.Y = new g.a3;
            this.Y.setInterval(250)
        },
        KWz = function(k, X, V) {
            k.U3 = 1;
            k.Of = ke(X.clone());
            k.x0 = V;
            k.Y9 = !0;
            IaO(k, null)
        },
        $FO = function(k, X, V, C, y) {
            k.U3 = 1;
            k.Of = ke(X.clone());
            k.x0 = null;
            k.Y9 = V;
            y && (k.r$ = !1);
            IaO(k, C)
        },
        IaO = function(k, X) {
            k.cE = Date.now();
            BuB(k);
            k.kE = k.Of.clone();
            Xc(k.kE, "t", k.X);
            k.jh = 0;
            k.j$ = k.V.rK(k.V.lX() ? X : null);
            k.gK > 0 && (k.yW = new g.Nc((0, g.iB)(k.Id, k, k.j$), k.gK));
            k.U.listen(k.j$, "readystatechange", k.GI);
            X = k.h4 ? g.kQ(k.h4) : {};
            k.x0 ? (k.Pj = "POST", X["Content-Type"] = "application/x-www-form-urlencoded", k.j$.send(k.kE, k.Pj, k.x0, X)) : (k.Pj = "GET", k.r$ && !g.lp && (X.Connection = "close"), k.j$.send(k.kE, k.Pj, null, X));
            k.V.gD(1)
        },
        w7C = function(k, X) {
            var V = k.jh,
                C = X.indexOf("\n", V);
            if (C == -1) return n2g;
            V = Number(X.substring(V, C));
            if (isNaN(V)) return GGB;
            C += 1;
            if (C + V > X.length) return n2g;
            X = X.slice(C, C + V);
            k.jh = C + V;
            return X
        },
        BuB = function(k) {
            k.Yj = Date.now() + k.W;
            mFC(k, k.W)
        },
        mFC = function(k, X) {
            if (k.Ol != null) throw Error("WatchDog timer not null");
            k.Ol = Hm((0, g.iB)(k.Jx, k), X)
        },
        tLB = function(k) {
            k.Ol && (g.g$.clearTimeout(k.Ol), k.Ol = null)
        },
        cK3 = function(k) {
            k.V.cV() || k.FF || k.V.u$(k)
        },
        aj = function(k) {
            tLB(k);
            g.JB(k.yW);
            k.yW = null;
            k.Y.stop();
            k.U.removeAll();
            if (k.j$) {
                var X = k.j$;
                k.j$ = null;
                X.abort();
                X.dispose()
            }
            k.e7 && (k.e7 = null)
        },
        dFB = function(k, X) {
            try {
                k.V.dS(k, X), k.V.gD(4)
            } catch (V) {}
        },
        DFB = function(k, X, V, C, y) {
            if (C == 0) V(!1);
            else {
                var U = y || 0;
                C--;
                AKC(k, X, function(N) {
                    N ? V(!0) : g.g$.setTimeout(function() {
                        DFB(k, X, V, C, U)
                    }, U)
                })
            }
        },
        AKC = function(k, X, V) {
            var C = new Image;
            C.onload = function() {
                try {
                    QD(C), V(!0)
                } catch (y) {}
            };
            C.onerror = function() {
                try {
                    QD(C), V(!1)
                } catch (y) {}
            };
            C.onabort = function() {
                try {
                    QD(C), V(!1)
                } catch (y) {}
            };
            C.ontimeout = function() {
                try {
                    QD(C), V(!1)
                } catch (y) {}
            };
            g.g$.setTimeout(function() {
                if (C.ontimeout) C.ontimeout()
            }, X);
            C.src = k
        },
        QD = function(k) {
            k.onload = null;
            k.onerror = null;
            k.onabort = null;
            k.ontimeout = null
        },
        RrR = function(k) {
            this.V = k;
            this.W = new Wm
        },
        HfB = function(k) {
            var X = zI(k.V, k.G6, "/mail/images/cleardot.gif");
            ke(X);
            DFB(X.toString(), 5E3, (0, g.iB)(k.AU, k), 3, 2E3);
            k.gD(1)
        },
        bfB = function(k) {
            var X = k.V.X;
            X != null ? (vm(5), X ? (vm(11), Fc(k.V, k, !1)) : (vm(12), Fc(k.V, k, !0))) : (k.mO = new Zx(k), k.mO.h4 = k.AM, X = k.V, X = zI(X, X.lX() ? k.CP : null, k.Lx), vm(5), Xc(X, "TYPE", "xmlhttp"), $FO(k.mO, X, !1, k.CP, !1))
        },
        v2Z = function(k, X, V) {
            this.V = 1;
            this.W = [];
            this.U = [];
            this.Y = new Wm;
            this.D = k || null;
            this.X = X != null ? X : null;
            this.T = V || !1
        },
        Zfg = function(k, X) {
            this.V = k;
            this.map = X;
            this.context = null
        },
        aaB = function(k, X, V, C) {
            g.VZ.call(this, "timingevent", k);
            this.size = X;
            this.rtt = V;
            this.retries = C
        },
        QvR = function(k) {
            g.VZ.call(this, "serverreachability", k)
        },
        FWQ = function(k) {
            k.ix(1, 0);
            k.Bj = zI(k, null, k.b$);
            zr5(k)
        },
        g2B = function(k) {
            k.ev && (k.ev.abort(), k.ev = null);
            k.UW && (k.UW.cancel(), k.UW = null);
            k.EH && (g.g$.clearTimeout(k.EH), k.EH = null);
            gP(k);
            k.qv && (k.qv.cancel(), k.qv = null);
            k.U9 && (g.g$.clearTimeout(k.U9), k.U9 = null)
        },
        lac = function(k, X) {
            if (k.V == 0) throw Error("Invalid operation: sending map when state is closed");
            k.W.push(new Zfg(k.Iy++, X));
            k.V != 2 && k.V != 3 || zr5(k)
        },
        LWO = function(k) {
            var X = 0;
            k.UW && X++;
            k.qv && X++;
            return X
        },
        zr5 = function(k) {
            k.qv || k.U9 || (k.U9 = Hm((0, g.iB)(k.cK, k), 0), k.Su = 0)
        },
        YOB = function(k, X) {
            if (k.V == 1) {
                if (!X) {
                    k.oI = Math.floor(Math.random() * 1E5);
                    X = k.oI++;
                    var V = new Zx(k, "", X);
                    V.h4 = k.o5;
                    var C = SOO(k),
                        y = k.Bj.clone();
                    g.Jm(y, "RID", X);
                    g.Jm(y, "CVER", "1");
                    ls(k, y);
                    KWz(V, y, C);
                    k.qv = V;
                    k.V = 2
                }
            } else k.V == 3 && (X ? p7O(k, X) : k.W.length == 0 || k.qv || p7O(k))
        },
        p7O = function(k, X) {
            if (X)
                if (k.Nh > 6) {
                    k.W = k.U.concat(k.W);
                    k.U.length = 0;
                    var V = k.oI - 1;
                    X = SOO(k)
                } else V = X.N, X = X.x0;
            else V = k.oI++, X = SOO(k);
            var C = k.Bj.clone();
            g.Jm(C, "SID", k.j);
            g.Jm(C, "RID", V);
            g.Jm(C, "AID", k.l9);
            ls(k, C);
            V = new Zx(k, k.j, V, k.Su + 1);
            V.h4 = k.o5;
            V.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            k.qv = V;
            KWz(V, C, X)
        },
        ls = function(k, X) {
            k.F6 && (k = k.F6.V$()) && g.bB(k, function(V, C) {
                g.Jm(X, C, V)
            })
        },
        SOO = function(k) {
            var X = Math.min(k.W.length, 1E3),
                V = ["count=" + X];
            if (k.Nh > 6 && X > 0) {
                var C = k.W[0].V;
                V.push("ofs=" + C)
            } else C = 0;
            for (var y = {}, U = 0; U < X; y = {
                    p5: void 0
                }, U++) {
                y.p5 = k.W[U].V;
                var N = k.W[U].map;
                y.p5 = k.Nh <= 6 ? U : y.p5 - C;
                try {
                    g.bB(N, function(P) {
                        return function(T, q) {
                            V.push("req" + P.p5 + "_" + q + "=" + encodeURIComponent(T))
                        }
                    }(y))
                } catch (P) {
                    V.push("req" + y.p5 + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            k.U = k.U.concat(k.W.splice(0, X));
            return V.join("&")
        },
        uQ5 = function(k) {
            k.UW || k.EH || (k.N = 1, k.EH = Hm((0, g.iB)(k.SK, k), 0), k.F9 = 0)
        },
        XTO = function(k) {
            if (k.UW || k.EH || k.F9 >= 3) return !1;
            k.N++;
            k.EH = Hm((0, g.iB)(k.SK, k), k4O(k, k.F9));
            k.F9++;
            return !0
        },
        Fc = function(k, X, V) {
            k.cP = k.X == null ? V : !k.X;
            k.ZA = X.h6;
            k.T || FWQ(k)
        },
        gP = function(k) {
            k.sI != null && (g.g$.clearTimeout(k.sI), k.sI = null)
        },
        k4O = function(k, X) {
            var V = 5E3 + Math.floor(Math.random() * 1E4);
            k.isActive() || (V *= 2);
            return V * X
        },
        Lk = function(k, X) {
            if (X == 2 || X == 9) {
                var V = null;
                k.F6 && (V = null);
                var C = (0, g.iB)(k.edG, k);
                V || (V = new g.PJ("//www.google.com/images/cleardot.gif"), ke(V));
                AKC(V.toString(), 1E4, C)
            } else vm(2);
            VQQ(k, X)
        },
        VQQ = function(k, X) {
            k.V = 0;
            k.F6 && k.F6.Dq(X);
            CWR(k);
            g2B(k)
        },
        CWR = function(k) {
            k.V = 0;
            k.ZA = -1;
            if (k.F6)
                if (k.U.length == 0 && k.W.length == 0) k.F6.hM();
                else {
                    var X = g.sg(k.U),
                        V = g.sg(k.W);
                    k.U.length = 0;
                    k.W.length = 0;
                    k.F6.hM(X, V)
                }
        },
        zI = function(k, X, V) {
            var C = g.ri(V);
            if (C.V != "") X && g.qC(C, X + "." + C.V), g.MC(C, C.U);
            else {
                var y = window.location;
                C = s1C(y.protocol, X ? X + "." + y.hostname : y.hostname, +y.port, V)
            }
            k.Dl && g.bB(k.Dl, function(U, N) {
                g.Jm(C, N, U)
            });
            g.Jm(C, "VER", k.Nh);
            ls(k, C);
            return C
        },
        iiB = function() {},
        yx5 = function() {
            this.V = [];
            this.W = []
        },
        UhB = function(k) {
            g.VZ.call(this, "channelMessage");
            this.message = k
        },
        N3Z = function(k) {
            g.VZ.call(this, "channelError");
            this.error = k
        },
        xh_ = function(k, X) {
            this.action = k;
            this.params = X || {}
        },
        S9 = function(k, X) {
            g.H.call(this);
            this.V = new g.C2(this.Buo, 0, this);
            g.b(this, this.V);
            this.Gh = 5E3;
            this.W = 0;
            if (typeof k === "function") X && (k = (0, g.iB)(k, X));
            else if (k && typeof k.handleEvent === "function") k = (0, g.iB)(k.handleEvent, k);
            else throw Error("Invalid listener argument");
            this.U = k
        },
        PWB = function(k, X, V, C, y, U, N, P, T, q, M, e, f, E) {
            V = V === void 0 ? !1 : V;
            C = C === void 0 ? function() {
                return ""
            } : C;
            y = y === void 0 ? !1 : y;
            U = U === void 0 ? !1 : U;
            N = N === void 0 ? !1 : N;
            P = P === void 0 ? function() {
                return g.R3({})
            } : P;
            T = T === void 0 ? !1 : T;
            M = M === void 0 ? !1 : M;
            e = e === void 0 ? !1 : e;
            f = f === void 0 ? !1 : f;
            E = E === void 0 ? !1 : E;
            this.n4 = k;
            this.k9 = X;
            this.X = new g.ch;
            this.W = new S9(this.x_b, this);
            this.V = null;
            this.N = !1;
            this.D = null;
            this.qC = "";
            this.U2 = this.T = 0;
            this.U = [];
            this.XT = V;
            this.Y9 = C;
            this.Y = U;
            this.uq = P;
            this.bq = q;
            this.Rc = N;
            this.gB = null;
            this.j = g.R3();
            this.Et = y;
            this.yD = T;
            this.tO = M;
            this.D8 = e;
            this.MQ = f;
            this.VD = E;
            this.Tc = new qGz;
            this.s2 = new M2c;
            this.dB = new e_g;
            this.Gc = new o5g;
            this.Z8 = new f7B;
            this.Ic = new E5z;
            this.d2 = new JaR
        },
        MQg = function(k,
            X, V, C, y) {
            T35(k);
            if (k.V) {
                var U = g.k5("ID_TOKEN"),
                    N = k.V.o5 || {};
                U ? N["x-youtube-identity-token"] = U : delete N["x-youtube-identity-token"];
                k.V.o5 = N
            }
            q6B(k);
            C ? (C.getState() != 3 && LWO(C) == 0 || C.getState(), k.V.connect(X, V, k.k9, C.j, C.l9)) : y ? k.V.connect(X, V, k.k9, y.sessionId, y.arrayId) : k.V.connect(X, V, k.k9)
        },
        EmB = function(k, X) {
            return k.MQ ? !0 : k.D8 ? Object.values(om3).includes(X) : k.tO ? !Object.values(epQ).includes(X) : k.VD ? Object.values(f65).includes(X) : !1
        },
        hpc = function(k) {
            var X, V;
            g.D(function(C) {
                if (C.W == 1) return g.Om(C, 2), g.d(C, Jx_(k), 2);
                g.G$(C);
                X = k.U;
                k.U = [];
                V = X.length;
                rxO(k, X, V);
                pk(k);
                return g.m0(C, 0)
            })
        },
        rxO = function(k, X, V) {
            for (var C = 0; C < V; ++C) lac(k.V, X[C]);
            pk(k)
        },
        pk = function(k) {
            k.publish("handlerOpened");
            k.Tc.Tx("BROWSER_CHANNEL")
        },
        T35 = function(k) {
            if (k.V) {
                var X = k.Y9(),
                    V = k.V.o5 || {};
                X ? V["x-youtube-lounge-xsrf-token"] = X : delete V["x-youtube-lounge-xsrf-token"];
                k.V.o5 = V
            }
        },
        Jx_ = function(k) {
            if (k.yD) return g.R3();
            if (!k.Rc) return WDZ(k);
            k.gB === null && (k.gB = WDZ(k));
            return k.gB
        },
        WDZ = function(k) {
            return g.ve(k.uq().then(function(X) {
                ssZ(k, X)
            }).dP(function() {}), function() {
                k.gB = null
            })
        },
        ssZ = function(k, X) {
            if (k.V) {
                var V = k.V.o5 || {};
                X && Object.keys(X).length > 0 ? V = Object.assign({}, V, X) : delete V.Authorization;
                k.V.o5 = V
            }
        },
        q6B = function(k) {
            k.bq && !k.Y && ssZ(k, k.bq())
        },
        Ye = function(k) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.V = "/api/lounge";
            this.W = !0;
            k = k || document.location.href;
            var X = Number(g.jd(k)[4] || null) || "";
            X && (this.port = ":" + X);
            this.domain = g.Id(k) || "";
            k = g.Iu();
            k.search("MSIE") >= 0 && (k = k.match(/MSIE ([\d.]+)/)[1], g.jk(k, "10.0") < 0 && (this.W = !1))
        },
        us = function(k, X) {
            var V = k.V;
            k.W && (V = k.scheme + "://" + k.domain + k.port + k.V);
            return g.mT(V + X, {})
        },
        OiB = function(k, X) {
            g.rK.call(this);
            var V = this;
            this.oM = k();
            this.oM.subscribe("handlerOpened", this.OF, this);
            this.oM.subscribe("handlerClosed", this.onClosed, this);
            this.oM.subscribe("handlerError", function(C, y) {
                V.onError(y)
            });
            this.oM.subscribe("handlerMessage", this.onMessage, this);
            this.V = X
        },
        jsQ = function(k, X, V) {
            var C = this;
            V = V === void 0 ? function() {
                return ""
            } : V;
            var y = y === void 0 ? new rKC : y;
            var U = U === void 0 ? new g.ch : U;
            this.pathPrefix = k;
            this.V = X;
            this.qC = V;
            this.Y = U;
            this.T = null;
            this.D = this.N = 0;
            this.channel = null;
            this.X = 0;
            this.U = new S9(function() {
                C.U.isActive();
                var N;
                ((N = C.channel) == null ? void 0 : gR_((new svO(N, N.V)).V.W)) === 0 && C.connect(C.T, C.N)
            });
            this.j = {};
            this.W = {};
            this.k9 = !1;
            this.logger = null;
            this.U2 = [];
            this.Ed = void 0;
            this.uq = new qGz;
            this.gB = new M2c;
            this.bq = new o5g;
            this.Y9 = new f7B
        },
        I6Q = function(k) {
            g.T6(k.channel, "m", function() {
                k.X = 3;
                k.U.reset();
                k.T = null;
                k.N = 0;
                for (var X = g.W(k.U2), V = X.next(); !V.done; V = X.next()) V = V.value, k.channel && k.channel.send(V);
                k.U2 = [];
                k.publish("webChannelOpened");
                k.uq.Tx("WEB_CHANNEL")
            });
            g.T6(k.channel, "n", function() {
                k.X = 0;
                k.U.isActive() || k.publish("webChannelClosed");
                var X, V = (X = k.channel) == null ? void 0 : Of1(new svO(X, X.V));
                V && (k.U2 = [].concat(g.G(V)));
                k.gB.Tx("WEB_CHANNEL")
            });
            g.T6(k.channel, "p", function(X) {
                var V = X.data;
                V[0] === "gracefulReconnect" ? (k.U.start(), k.channel && k.channel.close()) : k.publish("webChannelMessage", new xh_(V[0], V[1]));
                k.Ed = X.statusCode;
                k.bq.Tx("WEB_CHANNEL")
            });
            g.T6(k.channel, "o", function() {
                k.Ed === 401 || k.U.start();
                k.publish("webChannelError");
                k.Y9.Tx("WEB_CHANNEL", "")
            })
        },
        KDB = function(k) {
            var X = k.qC();
            X ? k.j["x-youtube-lounge-xsrf-token"] = X : delete k.j["x-youtube-lounge-xsrf-token"]
        },
        $h5 = function(k) {
            g.rK.call(this);
            this.V = k();
            this.V.subscribe("webChannelOpened", this.FK, this);
            this.V.subscribe("webChannelClosed", this.onClosed, this);
            this.V.subscribe("webChannelError", this.onError, this);
            this.V.subscribe("webChannelMessage", this.onMessage, this)
        },
        B3B = function(k, X, V, C, y) {
            function U() {
                return new PWB(us(k, "/bc"), X, !1, V, C)
            }
            V = V === void 0 ? function() {
                return ""
            } : V;
            return g.$5("enable_mdx_web_channel_desktop") ? new $h5(function() {
                return new jsQ(us(k, "/wc"), X, V)
            }) : new OiB(U, y)
        },
        mhg = function() {
            var k = nm5;
            G4c();
            ky.push(k);
            wTB()
        },
        X$ = function(k, X) {
            G4c();
            var V = tQR(k, String(X));
            ky.length == 0 ? cx3(V) : (wTB(), g.DB(ky, function(C) {
                C(V)
            }))
        },
        VW = function(k) {
            X$("CP", k)
        },
        G4c = function() {
            ky || (ky = g.LZ("yt.mdx.remote.debug.handlers_") || [], g.lo("yt.mdx.remote.debug.handlers_", ky))
        },
        cx3 = function(k) {
            var X = (Cw + 1) % 50;
            Cw = X;
            ih[X] = k;
            yW || (yW = X == 49)
        },
        wTB = function() {
            var k = ky;
            if (ih[0]) {
                var X = yW ? Cw : -1,
                    V = {};
                do V = {
                    cZ: void 0
                }, X = (X + 1) % 50, V.cZ = ih[X], g.DB(k, function(C) {
                    return function(y) {
                        y(C.cZ)
                    }
                }(V));
                while (X != Cw);
                ih = Array(50);
                Cw = -1;
                yW = !1
            }
        },
        tQR = function(k, X) {
            var V = (Date.now() - dhQ) / 1E3;
            V.toFixed && (V = V.toFixed(3));
            var C = [];
            C.push("[", V + "s", "] ");
            C.push("[", "yt.mdx.remote", "] ");
            C.push(k + ": " + X, "\n");
            return C.join("")
        },
        UL = function(k) {
            g.ED.call(this);
            this.X = k;
            this.screens = []
        },
        Axz = function(k, X) {
            var V = k.get(X.uuid) || k.get(X.id);
            if (V) return k = V.name, V.id = X.id || V.id, V.name = X.name, V.token = X.token, V.uuid = X.uuid || V.uuid, V.name != k;
            k.screens.push(X);
            return !0
        },
        DhB = function(k, X) {
            var V = k.screens.length != X.length;
            k.screens = g.vf(k.screens, function(U) {
                return !!kmB(X, U)
            });
            for (var C = X.length, y = 0; y < C; y++) V = Axz(k, X[y]) || V;
            return V
        },
        Rpz = function(k, X) {
            var V = k.screens.length;
            k.screens = g.vf(k.screens, function(C) {
                return !(C || X ? !C != !X ? 0 : C.id == X.id : 1)
            });
            return k.screens.length < V
        },
        Hig = function(k, X, V, C, y) {
            g.ED.call(this);
            this.U = k;
            this.N = X;
            this.j = V;
            this.X = C;
            this.Y = y;
            this.W = 0;
            this.V = null;
            this.ZQ = NaN
        },
        Pi = function(k) {
            UL.call(this, "LocalScreenService");
            this.W = k;
            this.V = NaN;
            N2(this);
            this.info("Initializing with " + poJ(this.screens))
        },
        biz = function(k) {
            if (k.screens.length) {
                var X = g.pq(k.screens, function(C) {
                        return C.id
                    }),
                    V = us(k.W, "/pairing/get_lounge_token_batch");
                k.W.sendRequest("POST", V, {
                    screen_ids: X.join(",")
                }, (0, g.iB)(k.Rv, k), (0, g.iB)(k.QK, k))
            }
        },
        N2 = function(k) {
            if (g.$5("deprecate_pair_servlet_enabled")) return DhB(k, []);
            var X = SGB(NoZ());
            X = g.vf(X, function(V) {
                return !V.uuid
            });
            return DhB(k, X)
        },
        Tk = function(k, X) {
            Pv3(g.pq(k.screens, l7C));
            X && xSz()
        },
        ZiB = function(k, X) {
            g.ED.call(this);
            this.X = X;
            X = (X = g.aB("yt-remote-online-screen-ids") || "") ? X.split(",") : [];
            for (var V = {}, C = this.X(), y = C.length, U = 0; U < y; ++U) {
                var N = C[U].id;
                V[N] = g.Eg(X, N)
            }
            this.V = V;
            this.Y = k;
            this.U = this.j = NaN;
            this.W = null;
            vmR("Initialized with " + g.ld(this.V))
        },
        a6g = function(k, X, V) {
            var C = us(k.Y, "/pairing/get_screen_availability");
            k.Y.sendRequest("POST", C, {
                lounge_token: X.token
            }, (0, g.iB)(function(y) {
                y = y.screens || [];
                for (var U = y.length, N = 0; N < U; ++N)
                    if (y[N].loungeToken == X.token) {
                        V(y[N].status == "online");
                        return
                    }
                V(!1)
            }, k), (0, g.iB)(function() {
                V(!1)
            }, k))
        },
        zpR = function(k, X) {
            a: if (xIQ(X) != xIQ(k.V)) var V = !1;
                else {
                    V = g.gC(X);
                    for (var C = V.length, y = 0; y < C; ++y)
                        if (!k.V[V[y]]) {
                            V = !1;
                            break a
                        }
                    V = !0
                }V || (vmR("Updated online screens: " + g.ld(k.V)), k.V = X, k.publish("screenChange"));Qsc(k)
        },
        q2 = function(k) {
            isNaN(k.U) || g.j2(k.U);
            k.U = g.sG((0, g.iB)(k.eG, k), k.j > 0 && k.j < g.Ug() ? 2E4 : 1E4)
        },
        vmR = function(k) {
            X$("OnlineScreenService", k)
        },
        FD_ = function(k) {
            var X = {};
            g.DB(k.X(), function(V) {
                V.token ? X[V.token] = V.id : this.Xk("Requesting availability of screen w/o lounge token.")
            });
            return X
        },
        Qsc = function(k) {
            k = g.gC(g.vQ(k.V, function(X) {
                return X
            }));
            g.tR(k);
            k.length ? g.Zn("yt-remote-online-screen-ids", k.join(","), 60) : g.Qi("yt-remote-online-screen-ids")
        },
        M2 = function(k, X) {
            X = X === void 0 ? !1 : X;
            UL.call(this, "ScreenService");
            this.j = k;
            this.N = X;
            this.V = this.W = null;
            this.U = [];
            this.Y = {};
            gmO(this)
        },
        LDQ = function(k, X, V, C, y, U) {
            k.info("getAutomaticScreenByIds " + V + " / " + X);
            V || (V = k.Y[X]);
            var N = k.gL(),
                P = V ? qT(N, V) : null;
            V && (k.N || P) || (P = qT(N, X));
            if (P) {
                P.uuid = X;
                var T = oU(k, P);
                a6g(k.V, T, function(q) {
                    y(q ? T : null)
                })
            } else V ? l6Z(k, V, (0, g.iB)(function(q) {
                var M = oU(this, new xe({
                    name: C,
                    screenId: V,
                    loungeToken: q,
                    dialId: X || ""
                }));
                a6g(this.V, M, function(e) {
                    y(e ? M : null)
                })
            }, k), U) : y(null)
        },
        S6z = function(k, X) {
            for (var V = k.screens.length, C = 0; C < V; ++C)
                if (k.screens[C].name == X) return k.screens[C];
            return null
        },
        pT5 = function(k, X, V) {
            a6g(k.V, X, V)
        },
        l6Z = function(k, X, V, C) {
            k.info("requestLoungeToken_ for " + X);
            var y = {
                postParams: {
                    screen_ids: X
                },
                method: "POST",
                context: k,
                onSuccess: function(U, N) {
                    U = N && N.screens || [];
                    U[0] && U[0].screenId == X ? V(U[0].loungeToken) : C(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    C(Error("Request screen lounge token failed"))
                }
            };
            g.mm(us(k.j, "/pairing/get_lounge_token_batch"), y)
        },
        Y6O = function(k) {
            k.screens = k.W.gL();
            var X = k.Y,
                V = {},
                C;
            for (C in X) V[X[C]] = C;
            X = k.screens.length;
            for (C = 0; C < X; ++C) {
                var y = k.screens[C];
                y.uuid = V[y.id] || ""
            }
            k.info("Updated manual screens: " + poJ(k.screens))
        },
        gmO = function(k) {
            ujB(k);
            k.W = new Pi(k.j);
            k.W.subscribe("screenChange", (0, g.iB)(k.FS, k));
            Y6O(k);
            k.N || (k.U = SGB(g.aB("yt-remote-automatic-screen-cache") || []));
            ujB(k);
            k.info("Initializing automatic screens: " + poJ(k.U));
            k.V = new ZiB(k.j, (0, g.iB)(k.gL, k, !0));
            k.V.subscribe("screenChange", (0, g.iB)(function() {
                this.publish("onlineScreenChange")
            }, k))
        },
        oU = function(k, X) {
            var V = k.get(X.id);
            V ? (V.uuid = X.uuid, X = V) : ((V = qT(k.U, X.uuid)) ? (V.id = X.id, V.token = X.token, X = V) : k.U.push(X), k.N || k0B(k));
            ujB(k);
            k.Y[X.uuid] = X.id;
            g.Zn("yt-remote-device-id-map", k.Y, 31536E3);
            return X
        },
        k0B = function(k) {
            k = g.vf(k.U, function(X) {
                return X.idType != "shortLived"
            });
            g.Zn("yt-remote-automatic-screen-cache", g.pq(k, l7C))
        },
        ujB = function(k) {
            k.Y = g.aB("yt-remote-device-id-map") || {}
        },
        el = function(k, X, V) {
            g.ED.call(this);
            this.Y9 = V;
            this.j = k;
            this.W = X;
            this.V = null
        },
        fw = function(k, X) {
            k.V = X;
            k.publish("sessionScreen", k.V)
        },
        X_c = function(k, X) {
            k.V && (k.V.token = X, oU(k.j, k.V));
            k.publish("sessionScreen", k.V)
        },
        EL = function(k, X) {
            X$(k.Y9, X)
        },
        JE = function(k, X, V) {
            el.call(this, k, X, "CastSession");
            var C = this;
            this.config_ = V;
            this.U = null;
            this.U2 = (0, g.iB)(this.oy, this);
            this.gB = (0, g.iB)(this.bQC, this);
            this.k9 = g.sG(function() {
                VAc(C, null)
            }, 12E4);
            this.N = this.Y = this.X = this.T = 0;
            this.qC = !1;
            this.D = "unknown"
        },
        icC = function(k, X) {
            g.j2(k.N);
            k.N = 0;
            X == 0 ? CDC(k) : k.N = g.sG(function() {
                CDC(k)
            }, X)
        },
        CDC = function(k) {
            yz_(k, "getLoungeToken");
            g.j2(k.Y);
            k.Y = g.sG(function() {
                UB_(k, null)
            }, 3E4)
        },
        yz_ = function(k, X) {
            k.info("sendYoutubeMessage_: " + X + " " + g.ld());
            var V = {};
            V.type = X;
            k.U ? k.U.sendMessage("urn:x-cast:com.google.youtube.mdx", V, function() {}, (0, g.iB)(function() {
                EL(this, "Failed to send message: " + X + ".")
            }, k)) : EL(k, "Sending yt message without session: " + g.ld(V))
        },
        NW5 = function(k, X) {
            X ? (k.info("onConnectedScreenId_: Received screenId: " + X), k.V && k.V.id == X || k.eU(X, function(V) {
                fw(k, V)
            }, function() {
                return k.Hn()
            }, 5)) : k.Hn(Error("Waiting for session status timed out."))
        },
        PDJ = function(k, X, V) {
            k.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(X));
            var C = new xe(X);
            xB5(k, C, function(y) {
                y ? (k.qC = !0, oU(k.j, C), fw(k, C), k.D = "unknown", icC(k, V)) : (g.Cr(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(X) + " is not online.")), k.Hn())
            }, 5)
        },
        VAc = function(k, X) {
            g.j2(k.k9);
            k.k9 = 0;
            X ? k.config_.enableCastLoungeToken && X.loungeToken ? X.deviceId ? k.V && k.V.uuid == X.deviceId || (X.loungeTokenRefreshIntervalMs ? PDJ(k, {
                    name: k.W.friendlyName,
                    screenId: X.screenId,
                    loungeToken: X.loungeToken,
                    dialId: X.deviceId,
                    screenIdType: "shortLived"
                }, X.loungeTokenRefreshIntervalMs) : (g.Cr(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(X) + ".")), NW5(k, X.screenId))) : (g.Cr(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(X) + ".")), NW5(k, X.screenId)) :
                NW5(k, X.screenId) : k.Hn(Error("Waiting for session status timed out."))
        },
        UB_ = function(k, X) {
            g.j2(k.Y);
            k.Y = 0;
            var V = null;
            if (X)
                if (X.loungeToken) {
                    var C;
                    ((C = k.V) == null ? void 0 : C.token) == X.loungeToken && (V = "staleLoungeToken")
                } else V = "missingLoungeToken";
            else V = "noLoungeTokenResponse";
            V ? (k.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(X) + ", error: " + V)), k.D = V, icC(k, 3E4)) : (X_c(k, X.loungeToken), k.qC = !1, k.D = "unknown", icC(k, X.loungeTokenRefreshIntervalMs))
        },
        xB5 = function(k, X, V, C) {
            g.j2(k.X);
            k.X = 0;
            pT5(k.j, X, function(y) {
                y || C < 0 ? V(y) : k.X = g.sG(function() {
                    xB5(k, X, V, C - 1)
                }, 300)
            })
        },
        TWO = function(k) {
            g.j2(k.T);
            k.T = 0;
            g.j2(k.X);
            k.X = 0;
            g.j2(k.k9);
            k.k9 = 0;
            g.j2(k.Y);
            k.Y = 0;
            g.j2(k.N);
            k.N = 0
        },
        r4 = function(k, X, V, C) {
            el.call(this, k, X, "DialSession");
            this.config_ = C;
            this.U = this.T = null;
            this.gB = "";
            this.n4 = V;
            this.uq = null;
            this.k9 = function() {};
            this.D = NaN;
            this.bq = (0, g.iB)(this.vC, this);
            this.Y = function() {};
            this.N = this.X = 0;
            this.U2 = !1;
            this.qC = "unknown"
        },
        hE = function(k) {
            var X;
            return !!(k.config_.enableDialLoungeToken && ((X = k.U) == null ? 0 : X.getDialAppInfo))
        },
        q7_ = function(k) {
            k.Y = k.j.y$(k.gB, k.W.label, k.W.friendlyName, hE(k), function(X, V) {
                k.Y = function() {};
                k.U2 = !0;
                fw(k, X);
                X.idType == "shortLived" && V > 0 && Wi(k, V)
            }, function(X) {
                k.Y = function() {};
                k.Hn(X)
            })
        },
        MA3 = function(k) {
            var X = {};
            X.pairingCode = k.gB;
            X.theme = k.n4;
            qsz() && (X.env_useStageMdx = 1);
            return g.wj(X)
        },
        ooB = function(k) {
            return new Promise(function(X) {
                k.gB = YGO();
                if (k.uq) {
                    var V = new chrome.cast.DialLaunchResponse(!0, MA3(k));
                    X(V);
                    q7_(k)
                } else k.k9 = function() {
                    g.j2(k.D);
                    k.k9 = function() {};
                    k.D = NaN;
                    var C = new chrome.cast.DialLaunchResponse(!0, MA3(k));
                    X(C);
                    q7_(k)
                }, k.D = g.sG(function() {
                    k.k9()
                }, 100)
            })
        },
        fGc = function(k, X, V) {
            k.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(X));
            var C = new xe(X);
            return (new Promise(function(y) {
                eoB(k, C, function(U) {
                    U ? (k.U2 = !0, oU(k.j, C), fw(k, C), Wi(k, V)) : g.Cr(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(X) + " is not online."));
                    y(U)
                }, 5)
            })).then(function(y) {
                return y ? new chrome.cast.DialLaunchResponse(!1) : ooB(k)
            })
        },
        EoJ = function(k, X) {
            var V = k.T.receiver.label,
                C = k.W.friendlyName;
            return (new Promise(function(y) {
                LDQ(k.j, V, X, C, function(U) {
                    U && U.token && fw(k, U);
                    y(U)
                }, function(U) {
                    EL(k, "Failed to get DIAL screen: " + U);
                    y(null)
                })
            })).then(function(y) {
                return y && y.token ? new chrome.cast.DialLaunchResponse(!1) : ooB(k)
            })
        },
        eoB = function(k, X, V, C) {
            g.j2(k.X);
            k.X = 0;
            pT5(k.j, X, function(y) {
                y || C < 0 ? V(y) : k.X = g.sG(function() {
                    eoB(k, X, V, C - 1)
                }, 300)
            })
        },
        Wi = function(k, X) {
            k.info("getDialAppInfoWithTimeout_ " + X);
            hE(k) && (g.j2(k.N), k.N = 0, X == 0 ? JzZ(k) : k.N = g.sG(function() {
                JzZ(k)
            }, X))
        },
        JzZ = function(k) {
            hE(k) && k.U.getDialAppInfo(function(X) {
                k.info("getDialAppInfo dialLaunchData: " + JSON.stringify(X));
                X = X.extraData || {};
                var V = null;
                if (X.loungeToken) {
                    var C;
                    ((C = k.V) == null ? void 0 : C.token) == X.loungeToken && (V = "staleLoungeToken")
                } else V = "missingLoungeToken";
                V ? (k.qC = V, Wi(k, 3E4)) : (k.U2 = !1, k.qC = "unknown", X_c(k, X.loungeToken), Wi(k, X.loungeTokenRefreshIntervalMs))
            }, function(X) {
                k.info("getDialAppInfo error: " + X);
                k.qC = "noLoungeTokenResponse";
                Wi(k, 3E4)
            })
        },
        rzg = function(k) {
            g.j2(k.X);
            k.X = 0;
            g.j2(k.N);
            k.N = 0;
            k.Y();
            k.Y = function() {};
            g.j2(k.D)
        },
        sL = function(k, X) {
            el.call(this, k, X, "ManualSession");
            this.U = g.sG((0, g.iB)(this.pF, this, null), 150)
        },
        OL = function(k, X) {
            g.ED.call(this);
            this.config_ = X;
            this.W = k;
            this.T = X.appId || "233637DE";
            this.j = X.theme || "cl";
            this.D = X.disableCastApi || !1;
            this.X = X.forceMirroring || !1;
            this.V = null;
            this.N = !1;
            this.U = [];
            this.Y = (0, g.iB)(this.EMa, this)
        },
        ho_ = function(k, X) {
            return X ? g.ez(k.U, function(V) {
                return Pm(X, V.label)
            }, k) : null
        },
        jl = function(k) {
            X$("Controller", k)
        },
        nm5 = function(k) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(k)
        },
        IU = function(k) {
            return k.N || !!k.U.length || !!k.V
        },
        Kw = function(k, X, V) {
            X != k.V && (g.JB(k.V), (k.V = X) ? (V ? k.publish("yt-remote-cast2-receiver-resumed",
                X.W) : k.publish("yt-remote-cast2-receiver-selected", X.W), X.subscribe("sessionScreen", (0, g.iB)(k.w4, k, X)), X.subscribe("sessionFailed", function() {
                return Wsc(k, X)
            }), X.V ? k.publish("yt-remote-cast2-session-change", X.V) : V && k.V.pF(null)) : k.publish("yt-remote-cast2-session-change", null))
        },
        Wsc = function(k, X) {
            k.V == X && k.publish("yt-remote-cast2-session-failed")
        },
        sfO = function(k) {
            var X = k.W.Wv(),
                V = k.V && k.V.W;
            k = g.pq(X, function(C) {
                V && Pm(C, V.label) && (V = null);
                var y = C.uuid ? C.uuid : C.id,
                    U = ho_(this, C);
                U ? (U.label = y, U.friendlyName = C.name) : (U = new chrome.cast.Receiver(y, C.name), U.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return U
            }, k);
            V && (V.receiverType != chrome.cast.ReceiverType.CUSTOM && (V = new chrome.cast.Receiver(V.label, V.friendlyName), V.receiverType = chrome.cast.ReceiverType.CUSTOM), k.push(V));
            return k
        },
        noC = function(k, X, V, C) {
            C.disableCastApi ? $y("Cannot initialize because disabled by Mdx config.") : Oc_() ? jfg(X, C) && (IGg(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Ks_(k, V) : (window.__onGCastApiAvailable = function(y, U) {
                y ? Ks_(k, V) : (Bi("Failed to load cast API: " + U), $BR(!1), IGg(!1), g.Qi("yt-remote-cast-available"), g.Qi("yt-remote-cast-receiver"),
                    BWB(), V(!1))
            }, C.loadCastApiSetupScript ? g.fc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? oR1() >= 60 && OL1() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? J9_() : oR1() >= 89 ? InZ() : (sBB(), rP(jBR.map(r9c))))) : $y("Cannot initialize because not running Chrome")
        },
        BWB = function() {
            $y("dispose");
            var k = nw();
            k && k.dispose();
            g.lo("yt.mdx.remote.cloudview.instance_", null);
            G0B(!1);
            g.of(w_3);
            w_3.length = 0
        },
        Gk = function() {
            return !!g.aB("yt-remote-cast-installed")
        },
        mB_ = function() {
            var k = g.aB("yt-remote-cast-receiver");
            return k ? k.friendlyName : null
        },
        tAZ = function() {
            $y("clearCurrentReceiver");
            g.Qi("yt-remote-cast-receiver")
        },
        czB = function() {
            return Gk() ? nw() ? nw().getCastSession() : (Bi("getCastSelector: Cast is not initialized."), null) : (Bi("getCastSelector: Cast API is not installed!"), null)
        },
        dB5 = function() {
            Gk() ? nw() ? w4() ? ($y("Requesting cast selector."), nw().requestSession()) : ($y("Wait for cast API to be ready to request the session."), w_3.push(g.MB("yt-remote-cast2-api-ready", dB5))) : Bi("requestCastSelector: Cast is not initialized.") : Bi("requestCastSelector: Cast API is not installed!")
        },
        mX = function(k, X) {
            w4() ? nw().setConnectedScreenStatus(k, X) : Bi("setConnectedScreenStatus called before ready.")
        },
        Oc_ = function() {
            var k = g.Iu().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.ZJ || k
        },
        Azc = function(k, X) {
            nw().init(k, X)
        },
        jfg = function(k, X) {
            var V = !1;
            nw() || (k = new OL(k, X), k.subscribe("yt-remote-cast2-availability-change", function(C) {
                g.Zn("yt-remote-cast-available", C);
                Ey("yt-remote-cast2-availability-change", C)
            }), k.subscribe("yt-remote-cast2-receiver-selected", function(C) {
                $y("onReceiverSelected: " + C.friendlyName);
                g.Zn("yt-remote-cast-receiver", C);
                Ey("yt-remote-cast2-receiver-selected", C)
            }), k.subscribe("yt-remote-cast2-receiver-resumed", function(C) {
                $y("onReceiverResumed: " + C.friendlyName);
                g.Zn("yt-remote-cast-receiver", C);
                Ey("yt-remote-cast2-receiver-resumed", C)
            }), k.subscribe("yt-remote-cast2-session-change", function(C) {
                $y("onSessionChange: " + TI(C));
                C || g.Qi("yt-remote-cast-receiver");
                Ey("yt-remote-cast2-session-change", C)
            }), g.lo("yt.mdx.remote.cloudview.instance_", k), V = !0);
            $y("cloudview.createSingleton_: " + V);
            return V
        },
        nw = function() {
            return g.LZ("yt.mdx.remote.cloudview.instance_")
        },
        Ks_ = function(k, X) {
            $BR(!0);
            IGg(!1);
            Azc(k, function(V) {
                V ? (G0B(!0), g.eA("yt-remote-cast2-api-ready")) : (Bi("Failed to initialize cast API."), $BR(!1), g.Qi("yt-remote-cast-available"), g.Qi("yt-remote-cast-receiver"), BWB());
                X(V)
            })
        },
        $y = function(k) {
            X$("cloudview", k)
        },
        Bi = function(k) {
            X$("cloudview", k)
        },
        $BR = function(k) {
            $y("setCastInstalled_ " + k);
            g.Zn("yt-remote-cast-installed", k)
        },
        w4 = function() {
            return !!g.LZ("yt.mdx.remote.cloudview.apiReady_")
        },
        G0B = function(k) {
            $y("setApiReady_ " + k);
            g.lo("yt.mdx.remote.cloudview.apiReady_", k)
        },
        IGg = function(k) {
            g.lo("yt.mdx.remote.cloudview.initializing_", k)
        },
        tE = function(k) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.Y = this.X = 0;
            this.trackData = null;
            this.uo = this.zr = !1;
            this.T = this.U = this.N = this.W = 0;
            this.V = NaN;
            this.j = !1;
            this.reset(k)
        },
        DBJ = function(k) {
            k.audioTrackId = null;
            k.trackData = null;
            k.playerState = -1;
            k.zr = !1;
            k.uo = !1;
            k.X = 0;
            k.Y = g.Ug();
            k.W = 0;
            k.N = 0;
            k.U = 0;
            k.T = 0;
            k.V = NaN;
            k.j = !1
        },
        ci = function(k) {
            return k.isPlaying() ? (g.Ug() - k.Y) / 1E3 : 0
        },
        d4 = function(k, X) {
            k.X = X;
            k.Y = g.Ug()
        },
        AE = function(k) {
            switch (k.playerState) {
                case 1:
                case 1081:
                    return (g.Ug() - k.Y) / 1E3 + k.X;
                case -1E3:
                    return 0
            }
            return k.X
        },
        Roc = function(k) {
            return k.j ? k.N + ci(k) : k.N
        },
        Dr = function(k, X, V) {
            var C = k.videoId;
            k.videoId = X;
            k.index = V;
            X != C && DBJ(k)
        },
        Hc1 = function(k) {
            var X = {};
            X.index = k.index;
            X.listId = k.listId;
            X.videoId = k.videoId;
            X.playerState = k.playerState;
            X.volume = k.volume;
            X.muted = k.muted;
            X.audioTrackId = k.audioTrackId;
            X.trackData = g.X9(k.trackData);
            X.hasPrevious = k.zr;
            X.hasNext = k.uo;
            X.playerTime = k.X;
            X.playerTimeAt = k.Y;
            X.seekableStart = k.W;
            X.seekableEnd = k.N;
            X.duration = k.U;
            X.loadedTime = k.T;
            X.liveIngestionTime = k.V;
            return X
        },
        Hi = function(k, X) {
            g.ED.call(this);
            var V = this;
            this.U = 0;
            this.j = k;
            this.X = [];
            this.Y = new yx5;
            this.W = this.V = null;
            this.D = (0, g.iB)(this.Gcb, this);
            this.N = (0, g.iB)(this.vU, this);
            this.T = (0, g.iB)(this.JO2, this);
            this.k9 = (0, g.iB)(this.I8o, this);
            var C = 0;
            k ? (C = k.getProxyState(), C != 3 && (k.subscribe("proxyStateChange", this.vr, this), bcc(this))) : C = 3;
            C != 0 && (X ? this.vr(C) : g.sG(function() {
                V.vr(C)
            }, 0));
            (k = czB()) && RU(this, k);
            this.subscribe("yt-remote-cast2-session-change", this.k9)
        },
        bh = function(k) {
            return new tE(k.j.getPlayerContextData())
        },
        bcc = function(k) {
            g.DB("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(X) {
                this.X.push(this.j.subscribe(X, g.yB(this.b0q, X), this))
            }, k)
        },
        voB = function(k) {
            g.DB(k.X, function(X) {
                this.j.unsubscribeByKey(X)
            }, k);
            k.X.length = 0
        },
        vi = function(k) {
            return k.getState() == 1
        },
        Zr = function(k, X) {
            var V = k.Y;
            V.V.length + V.W.length < 50 && k.Y.enqueue(X)
        },
        ZcC = function(k, X, V) {
            var C = bh(k);
            d4(C, V);
            C.playerState != -1E3 && (C.playerState = X);
            aU(k, C)
        },
        QW = function(k, X, V) {
            k.j.sendMessage(X, V)
        },
        aU = function(k, X) {
            voB(k);
            k.j.setPlayerContextData(Hc1(X));
            bcc(k)
        },
        RU = function(k, X) {
            k.W && (k.W.removeUpdateListener(k.D), k.W.removeMediaListener(k.N), k.vU(null));
            k.W = X;
            k.W && (VW("Setting cast session: " + k.W.sessionId), k.W.addUpdateListener(k.D), k.W.addMediaListener(k.N), k.W.media.length && k.vU(k.W.media[0]))
        },
        aGB = function(k) {
            var X = k.V.media,
                V = k.V.customData;
            if (X && V) {
                var C = bh(k);
                X.contentId != C.videoId && VW("Cast changing video to: " + X.contentId);
                C.videoId = X.contentId;
                C.playerState = V.playerState;
                d4(C, k.V.getEstimatedTime());
                aU(k, C)
            } else VW("No cast media video. Ignoring state update.")
        },
        zk = function(k, X, V) {
            return (0, g.iB)(function(C) {
                this.Xk("Failed to " + X + " with cast v2 channel. Error code: " + C.code);
                C.code != chrome.cast.ErrorCode.TIMEOUT && (this.Xk("Retrying " + X + " using MDx browser channel."), QW(this, X, V))
            }, k)
        },
        lh = function(k, X, V, C) {
            C = C === void 0 ? !1 : C;
            g.ED.call(this);
            var y = this;
            this.X = NaN;
            this.gB = !1;
            this.D = this.T = this.U2 = this.qC = NaN;
            this.k9 = [];
            this.Y = this.N = this.j = this.V = this.W = null;
            this.uq = k;
            this.bq = C;
            this.k9.push(g.Gm(window, "beforeunload", function() {
                y.Hm(2)
            }));
            this.U = [];
            this.V = new tE;
            this.n4 = X.id;
            this.Y9 = X.idType;
            this.W = B3B(this.uq, V, this.aP, this.Y9 == "shortLived", this.n4);
            this.W.listen("channelOpened", function() {
                QfB(y)
            });
            this.W.listen("channelClosed", function() {
                F$("Channel closed");
                isNaN(y.X) ? e9(!0) : e9();
                y.dispose()
            });
            this.W.listen("channelError", function(U) {
                e9();
                isNaN(y.I$()) ? (U == 1 && y.Y9 == "shortLived" && y.publish("browserChannelAuthError", U), F$("Channel error: " + U + " without reconnection"), y.dispose()) : (y.gB = !0, F$("Channel error: " + U + " with reconnection in " + y.I$() + " ms"), g4(y, 2))
            });
            this.W.listen("channelMessage", function(U) {
                zoz(y, U)
            });
            this.W.Gs(X.token);
            this.subscribe("remoteQueueChange", function() {
                var U = y.V.videoId;
                g.zm() && g.Zn("yt-remote-session-video-id", U)
            })
        },
        Fs5 = function(k) {
            return g.ez(k.U, function(X) {
                return X.type == "LOUNGE_SCREEN"
            })
        },
        F$ = function(k) {
            X$("conn", k)
        },
        g4 = function(k, X) {
            k.publish("proxyStateChange", X)
        },
        go5 = function(k) {
            k.X = g.sG(function() {
                F$("Connecting timeout");
                k.Hm(1)
            }, 2E4)
        },
        lGg = function(k) {
            g.j2(k.X);
            k.X = NaN
        },
        Ls5 = function(k) {
            g.j2(k.qC);
            k.qC = NaN
        },
        p_C = function(k) {
            S7B(k);
            k.U2 = g.sG(function() {
                Lw(k, "getNowPlaying")
            }, 2E4)
        },
        S7B = function(k) {
            g.j2(k.U2);
            k.U2 = NaN
        },
        QfB = function(k) {
            F$("Channel opened");
            k.gB && (k.gB = !1, Ls5(k), k.qC = g.sG(function() {
                F$("Timing out waiting for a screen.");
                k.Hm(1)
            }, 15E3))
        },
        uN_ = function(k, X) {
            var V = null;
            if (X) {
                var C = Fs5(k);
                C && (V = {
                    clientName: C.clientName,
                    deviceMake: C.brand,
                    deviceModel: C.model,
                    osVersion: C.osVersion
                })
            }
            g.lo("yt.mdx.remote.remoteClient_", V);
            X && (lGg(k), Ls5(k));
            V = k.W.dU() && isNaN(k.X);
            X == V ? X && (g4(k, 1), Lw(k, "getSubtitlesTrack")) : X ? (k.gC() && k.V.reset(), g4(k, 1), Lw(k, "getNowPlaying"), Y7J(k)) : k.Hm(1)
        },
        kaR = function(k, X) {
            var V = X.params.videoId;
            delete X.params.videoId;
            V == k.V.videoId && (g.p1(X.params) ? k.V.trackData = null : k.V.trackData = X.params, k.publish("remotePlayerChange"))
        },
        XBg = function(k, X, V) {
            var C = X.params.videoId || X.params.video_id,
                y = parseInt(X.params.currentIndex, 10);
            k.V.listId = X.params.listId || k.V.listId;
            Dr(k.V, C, y);
            k.publish("remoteQueueChange", V)
        },
        CPg = function(k, X) {
            X.params = X.params || {};
            XBg(k, X, "NOW_PLAYING_MAY_CHANGE");
            V1z(k, X);
            k.publish("autoplayDismissed")
        },
        V1z = function(k, X) {
            var V = parseInt(X.params.currentTime || X.params.current_time, 10);
            d4(k.V, isNaN(V) ? 0 : V);
            V = parseInt(X.params.state, 10);
            V = isNaN(V) ? -1 : V;
            V == -1 && k.V.playerState == -1E3 && (V = -1E3);
            k.V.playerState = V;
            V = Number(X.params.loadedTime);
            k.V.T = isNaN(V) ? 0 : V;
            k.V.Fl(Number(X.params.duration));
            V = k.V;
            var C = Number(X.params.liveIngestionTime);
            V.V = C;
            V.j = isNaN(C) ? !1 : !0;
            V = k.V;
            C = Number(X.params.seekableStartTime);
            X = Number(X.params.seekableEndTime);
            V.W = isNaN(C) ? 0 : C;
            V.N = isNaN(X) ? 0 : X;
            k.V.playerState == 1 ? p_C(k) : S7B(k);
            k.publish("remotePlayerChange")
        },
        iI1 = function(k, X) {
            if (k.V.playerState != -1E3) {
                var V =
                    1085;
                switch (parseInt(X.params.adState, 10)) {
                    case 1:
                        V = 1081;
                        break;
                    case 2:
                        V = 1084;
                        break;
                    case 0:
                        V = 1083
                }
                k.V.playerState = V;
                X = parseInt(X.params.currentTime, 10);
                d4(k.V, isNaN(X) ? 0 : X);
                k.publish("remotePlayerChange")
            }
        },
        yOQ = function(k, X) {
            var V = X.params.muted == "true";
            k.V.volume = parseInt(X.params.volume, 10);
            k.V.muted = V;
            k.publish("remotePlayerChange")
        },
        Uig = function(k, X) {
            k.N = X.params.videoId;
            k.publish("nowAutoplaying", parseInt(X.params.timeout, 10))
        },
        NqZ = function(k, X) {
            k.N = X.params.videoId || null;
            k.publish("autoplayUpNext", k.N)
        },
        xi3 = function(k, X) {
            k.Y = X.params.autoplayMode;
            k.publish("autoplayModeChange", k.Y);
            k.Y == "DISABLED" && k.publish("autoplayDismissed")
        },
        PPB = function(k, X) {
            var V = X.params.hasNext == "true";
            k.V.zr = X.params.hasPrevious == "true";
            k.V.uo = V;
            k.publish("previousNextChange")
        },
        zoz = function(k, X) {
            X = X.message;
            X.params ? F$("Received: action=" + X.action + ", params=" + g.ld(X.params)) : F$("Received: action=" + X.action + " {}");
            switch (X.action) {
                case "loungeStatus":
                    X = VD(X.params.devices);
                    k.U = g.pq(X, function(C) {
                        return new NT(C)
                    });
                    X = !!g.ez(k.U, function(C) {
                        return C.type == "LOUNGE_SCREEN"
                    });
                    uN_(k, X);
                    X = k.Ld("mlm");
                    k.publish("multiStateLoopEnabled", X);
                    break;
                case "loungeScreenDisconnected":
                    g.hR(k.U, function(C) {
                        return C.type == "LOUNGE_SCREEN"
                    });
                    uN_(k, !1);
                    break;
                case "remoteConnected":
                    var V = new NT(VD(X.params.device));
                    g.ez(k.U, function(C) {
                        return C.equals(V)
                    }) || Nkc(k.U, V);
                    break;
                case "remoteDisconnected":
                    V = new NT(VD(X.params.device));
                    g.hR(k.U, function(C) {
                        return C.equals(V)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    XBg(k, X, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    CPg(k, X);
                    break;
                case "onStateChange":
                    V1z(k, X);
                    break;
                case "onAdStateChange":
                    iI1(k, X);
                    break;
                case "onVolumeChanged":
                    yOQ(k, X);
                    break;
                case "onSubtitlesTrackChanged":
                    kaR(k, X);
                    break;
                case "nowAutoplaying":
                    Uig(k, X);
                    break;
                case "autoplayDismissed":
                    k.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    NqZ(k, X);
                    break;
                case "onAutoplayModeChanged":
                    xi3(k, X);
                    break;
                case "onHasPreviousNextChanged":
                    PPB(k,
                        X);
                    break;
                case "requestAssistedSignIn":
                    k.publish("assistedSignInRequested", X.params.authCode);
                    break;
                case "onLoopModeChanged":
                    k.publish("loopModeChange", X.params.loopMode);
                    break;
                default:
                    F$("Unrecognized action: " + X.action)
            }
        },
        Y7J = function(k) {
            g.j2(k.D);
            k.D = g.sG(function() {
                k.Hm(1)
            }, 864E5)
        },
        Lw = function(k, X, V) {
            V ? F$("Sending: action=" + X + ", params=" + g.ld(V)) : F$("Sending: action=" + X);
            k.W.sendMessage(X, V)
        },
        TqQ = function(k) {
            UL.call(this, "ScreenServiceProxy");
            this.X6 = k;
            this.V = [];
            this.V.push(this.X6.$_s("screenChange", (0, g.iB)(this.yT, this)));
            this.V.push(this.X6.$_s("onlineScreenChange", (0, g.iB)(this.Haq, this)))
        },
        fzZ = function(k, X) {
            ToR();
            if (!fk || !fk.get("yt-remote-disable-remote-module-for-dev")) {
                X = g.k5("MDX_CONFIG") || X;
                XDJ();
                y91();
                Sl || (Sl = new Ye(X ? X.loungeApiHost : void 0), qsz() && (Sl.V = "/api/loungedev"));
                pw || (pw = g.LZ("yt.mdx.remote.deferredProxies_") || [], g.lo("yt.mdx.remote.deferredProxies_", pw));
                qUB();
                var V = Yy();
                if (!V) {
                    var C = new M2(Sl, X ? X.disableAutomaticScreenCache || !1 : !1);
                    g.lo("yt.mdx.remote.screenService_", C);
                    V = Yy();
                    var y = {};
                    X && (y = {
                        appId: X.appId,
                        disableDial: X.disableDial,
                        theme: X.theme,
                        loadCastApiSetupScript: X.loadCastApiSetupScript,
                        disableCastApi: X.disableCastApi,
                        enableDialLoungeToken: X.enableDialLoungeToken,
                        enableCastLoungeToken: X.enableCastLoungeToken,
                        forceMirroring: X.forceMirroring
                    });
                    g.lo("yt.mdx.remote.enableConnectWithInitialState_", X ? X.enableConnectWithInitialState || !1 : !1);
                    noC(k, C, function(U) {
                        U ? uh() && mX(uh(), "YouTube TV") : C.subscribe("onlineScreenChange", function() {
                            Ey("yt-remote-receiver-availability-change")
                        })
                    }, y)
                }
                X && !g.LZ("yt.mdx.remote.initialized_") && (g.lo("yt.mdx.remote.initialized_", !0), kz("Initializing: " + g.ld(X)),
                    XA.push(g.MB("yt-remote-cast2-api-ready", function() {
                        Ey("yt-remote-api-ready")
                    })), XA.push(g.MB("yt-remote-cast2-availability-change", function() {
                        Ey("yt-remote-receiver-availability-change")
                    })), XA.push(g.MB("yt-remote-cast2-receiver-selected", function() {
                        V_(null);
                        Ey("yt-remote-auto-connect", "cast-selector-receiver")
                    })), XA.push(g.MB("yt-remote-cast2-receiver-resumed", function() {
                        Ey("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), XA.push(g.MB("yt-remote-cast2-session-change", M1_)), XA.push(g.MB("yt-remote-connection-change", function(U) {
                        U ? mX(uh(), "YouTube TV") : C7() || (mX(null, null), tAZ())
                    })), XA.push(g.MB("yt-remote-cast2-session-failed", function() {
                        Ey("yt-remote-connection-failed")
                    })), k = oD_(), X.isAuto && (k.id += "#dial"), y = X.capabilities || [], y.length > 0 && (k.capabilities =
                        y), k.name = X.device, k.app = X.app, (X = X.theme) && (k.theme = X), kz(" -- with channel params: " + g.ld(k)), k ? (g.Zn("yt-remote-session-app", k.app), g.Zn("yt-remote-session-name", k.name)) : (g.Qi("yt-remote-session-app"), g.Qi("yt-remote-session-name")), g.lo("yt.mdx.remote.channelParams_", k), V.start(), uh() || eGB())
            }
        },
        EDB = function() {
            var k = Yy().X6.$_gos();
            var X = iJ();
            X && y_() && (kmB(k, X) || k.push(X));
            return ulZ(k)
        },
        rO5 = function() {
            var k = JOg();
            !k && Gk() && mB_() && (k = {
                key: "cast-selector-receiver",
                name: mB_()
            });
            return k
        },
        JOg = function() {
            var k = EDB(),
                X = iJ();
            X || (X = C7());
            return g.ez(k, function(V) {
                return X && Pm(X, V.key) ? !0 : !1
            })
        },
        iJ = function() {
            var k = uh();
            if (!k) return null;
            var X = Yy().gL();
            return qT(X, k)
        },
        M1_ = function(k) {
            kz("remote.onCastSessionChange_: " + TI(k));
            if (k) {
                var X = iJ();
                if (X && X.id == k.id) {
                    if (mX(X.id, "YouTube TV"), k.idType == "shortLived" && (k = k.token)) Uc && (Uc.token = k), (X = y_()) && X.Gs(k)
                } else X && Nj(), xz(k, 1)
            } else y_() && Nj()
        },
        Nj = function() {
            w4() ? nw().stopSession() : Bi("stopSession called before API ready.");
            var k = y_();
            k && (k.disconnect(1), hGg(null))
        },
        WgO = function() {
            var k = y_();
            return !!k && k.getProxyState() != 3
        },
        kz = function(k) {
            X$("remote", k)
        },
        Yy = function() {
            if (!sNQ) {
                var k = g.LZ("yt.mdx.remote.screenService_");
                sNQ = k ? new TqQ(k) : null
            }
            return sNQ
        },
        uh = function() {
            return g.LZ("yt.mdx.remote.currentScreenId_")
        },
        OIB = function(k) {
            g.lo("yt.mdx.remote.currentScreenId_", k)
        },
        jNB = function() {
            return g.LZ("yt.mdx.remote.connectData_")
        },
        V_ = function(k) {
            g.lo("yt.mdx.remote.connectData_", k)
        },
        y_ = function() {
            return g.LZ("yt.mdx.remote.connection_")
        },
        hGg = function(k) {
            var X = y_();
            V_(null);
            k || OIB("");
            g.lo("yt.mdx.remote.connection_", k);
            pw && (g.DB(pw, function(V) {
                V(k)
            }), pw.length = 0);
            X && !k ? Ey("yt-remote-connection-change", !1) : !X && k && Ey("yt-remote-connection-change", !0)
        },
        C7 = function() {
            var k = g.zm();
            if (!k) return null;
            var X = Yy();
            if (!X) return null;
            X = X.gL();
            return qT(X, k)
        },
        xz = function(k, X) {
            uh();
            iJ() && iJ();
            if (Ps) Uc = k;
            else {
                OIB(k.id);
                var V = g.LZ("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                k = new lh(Sl, k, oD_(), V);
                k.connect(X, jNB());
                k.subscribe("beforeDisconnect", function(C) {
                    Ey("yt-remote-before-disconnect", C)
                });
                k.subscribe("beforeDispose", function() {
                    y_() && (y_(), hGg(null))
                });
                k.subscribe("browserChannelAuthError", function() {
                    var C = iJ();
                    C && C.idType == "shortLived" && (w4() ? nw().handleBrowserChannelAuthError() : Bi("refreshLoungeToken called before API ready."))
                });
                hGg(k)
            }
        },
        eGB = function() {
            var k = C7();
            k ? (kz("Resume connection to: " + TI(k)), xz(k, 0)) : (e9(), tAZ(), kz("Skipping connecting because no session screen found."))
        },
        qUB = function() {
            var k = oD_();
            if (g.p1(k)) {
                k = oj();
                var X = g.aB("yt-remote-session-name") || "",
                    V = g.aB("yt-remote-session-app") || "";
                k = {
                    device: "REMOTE_CONTROL",
                    id: k,
                    name: X,
                    app: V,
                    mdxVersion: 3
                };
                k.authuser = String(g.k5("SESSION_INDEX", "0"));
                (X = g.k5("DELEGATED_SESSION_ID")) && (k.pageId = String(X));
                g.lo("yt.mdx.remote.channelParams_", k)
            }
        },
        oD_ = function() {
            return g.LZ("yt.mdx.remote.channelParams_") || {}
        },
        $iB = function(k, X, V) {
            g.H.call(this);
            var C = this;
            this.V = k;
            this.B = X;
            this.va = V;
            this.events = new g.FG(this);
            this.Y = !1;
            this.X = new g.eq(64);
            this.W = new g.C2(this.d$, 500, this);
            this.U = new g.C2(this.Oz, 1E3, this);
            this.T = new h8(this.Fbc, 0, this);
            this.j = {};
            this.D = new g.C2(this.l0, 1E3, this);
            this.N = new g.Nc(this.seekTo, 1E3, this);
            this.k9 = this.events.Z(this.B, "onVolumeChange", function(y) {
                Iz_(C, y)
            });
            g.b(this, this.events);
            this.events.Z(X, "onCaptionsTrackListChanged", this.YtB);
            this.events.Z(X, "captionschanged", this.Z4q);
            this.events.Z(X, "captionssettingschanged", this.kW);
            this.events.Z(X, "videoplayerreset", this.aG);
            this.events.Z(X, "mdxautoplaycancel", function() {
                C.va.xO()
            });
            X.L("enable_mdx_video_play_directly") && this.events.Z(X, "videodatachange", function() {
                KgB(C.V) || TT(C) || qj(C, 0)
            });
            k = this.va;
            k.ez();
            k.subscribe("proxyStateChange", this.BZ, this);
            k.subscribe("remotePlayerChange", this.PO, this);
            k.subscribe("remoteQueueChange", this.aG, this);
            k.subscribe("previousNextChange", this.Uw, this);
            k.subscribe("nowAutoplaying", this.tE, this);
            k.subscribe("autoplayDismissed", this.Ml, this);
            g.b(this, this.W);
            g.b(this, this.U);
            g.b(this, this.T);
            g.b(this, this.D);
            g.b(this, this.N);
            this.kW();
            this.aG();
            this.PO()
        },
        Iz_ = function(k, X) {
            if (TT(k)) {
                k.va.unsubscribe("remotePlayerChange", k.PO, k);
                var V = Math.round(X.volume);
                X = !!X.muted;
                var C = bh(k.va);
                if (V !== C.volume || X !== C.muted) k.va.setVolume(V, X), k.D.start();
                k.va.subscribe("remotePlayerChange", k.PO, k)
            }
        },
        BqC = function(k) {
            k.L0(0);
            k.W.stop();
            k.aM(new g.eq(64))
        },
        nDB = function(k, X) {
            if (TT(k) && !k.Y) {
                var V = null;
                X && (V = {
                    style: k.B.getSubtitlesUserSettings()
                }, Object.assign(V, X));
                k.va.j4(k.B.getVideoData(1).videoId, V);
                k.j = bh(k.va).trackData
            }
        },
        qj = function(k, X) {
            var V = k.B.getPlaylist();
            if (V == null ? 0 : V.listId) {
                var C = V.index;
                var y = V.listId.toString()
            }
            V = k.B.getVideoData(1);
            k.va.playVideo(V.videoId, X, C, y, V.playerParams, V.uq, UIQ(V));
            k.aM(new g.eq(1))
        },
        Gaz = function(k, X) {
            if (X) {
                var V = k.B.getOption("captions", "tracklist", {
                    Cd: 1
                });
                V && V.length ? (k.B.setOption("captions", "track", X), k.Y = !1) : (k.B.loadModule("captions"), k.Y = !0)
            } else k.B.setOption("captions", "track", {})
        },
        TT = function(k) {
            return bh(k.va).videoId === k.B.getVideoData(1).videoId
        },
        wBB = function(k, X) {
            g.Zc.call(this, k);
            this.V = X
        },
        Mj = function() {
            g.F.call(this, {
                C: "div",
                K: "ytp-mdx-popup-dialog",
                G: {
                    role: "dialog"
                },
                S: [{
                    C: "div",
                    K: "ytp-mdx-popup-dialog-inner-content",
                    S: [{
                        C: "div",
                        K: "ytp-mdx-popup-title",
                        jz: "You're signed out"
                    }, {
                        C: "div",
                        K: "ytp-mdx-popup-description",
                        jz: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        C: "div",
                        K: "ytp-mdx-privacy-popup-buttons",
                        S: [{
                            C: "button",
                            AO: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            jz: "Cancel"
                        }, {
                            C: "button",
                            AO: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            jz: "Confirm"
                        }]
                    }]
                }]
            });
            this.fade = new g.Tz(this, 250);
            this.cancelButton = this.zc("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.zc("ytp-mdx-privacy-popup-confirm");
            g.b(this, this.fade);
            this.Z(this.cancelButton, "click", this.V);
            this.Z(this.confirmButton, "click", this.W)
        },
        o8 = function(k) {
            g.F.call(this, {
                C: "div",
                K: "ytp-remote",
                S: [{
                    C: "div",
                    K: "ytp-remote-display-status",
                    S: [{
                        C: "div",
                        K: "ytp-remote-display-status-icon",
                        S: [g.qO0()]
                    }, {
                        C: "div",
                        K: "ytp-remote-display-status-text",
                        jz: "{{statustext}}"
                    }]
                }]
            });
            this.api = k;
            this.fade = new g.Tz(this, 250);
            g.b(this, this.fade);
            this.Z(k, "presentingplayerstatechange", this.onStateChange);
            this.K0(k.getPlayerStateObject())
        },
        e8 = function(k, X) {
            g.bm.call(this, "Play on", 1, k, X);
            this.B = k;
            this.Jp = {};
            this.Z(k, "onMdxReceiversChange", this.j);
            this.Z(k, "presentingplayerstatechange", this.j);
            this.j()
        },
        miB = function(k) {
            g.jb.call(this, k);
            this.Em = {
                key: YGO(),
                name: "This computer"
            };
            this.a8 = null;
            this.subscriptions = [];
            this.Vp = this.va = null;
            this.Jp = [this.Em];
            this.hZ = this.Em;
            this.IZ = new g.eq(64);
            this.Rj = 0;
            this.jI = -1;
            this.xY = !1;
            this.CO = this.E5 = this.hh = null;
            if (!g.gI(this.player.J()) && !g.F6(this.player.J())) {
                k = this.player;
                var X = g.It(k);
                X && (X = X.gk()) && (X = new e8(k, X), g.b(this, X));
                X = new o8(k);
                g.b(this, X);
                g.at(k, X.element, 4);
                this.hh = new Mj;
                g.b(this, this.hh);
                g.at(k, this.hh.element, 4);
                this.xY = !!C7()
            }
        },
        f7 = function(k) {
            k.E5 && (k.player.removeEventListener("presentingplayerstatechange",
                k.E5), k.E5 = null)
        },
        t1z = function(k, X, V) {
            k.IZ = V;
            k.player.publish("presentingplayerstatechange", new g.sj(V, X))
        },
        Ec = function(k, X) {
            if (X.key !== k.hZ.key)
                if (X.key === k.Em.key) Nj();
                else if (KgB(k) && cOg(k), k.hZ = X, !k.player.J().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.F6(k.player.J())) {
                var V = k.player.getPlaylistId();
                var C = k.player.getVideoData(1);
                var y = C.videoId;
                if (!V && !y || (k.player.getAppState() === 2 || k.player.getAppState() === 1) && k.player.J().L("should_clear_video_data_on_player_cued_unstarted")) C = null;
                else {
                    var U = k.player.getPlaylist();
                    if (U) {
                        var N = [];
                        for (var P = 0; P < U.length; P++) N[P] = g.W1(U, P).videoId
                    } else N = [y];
                    U = k.player.getCurrentTime(1);
                    k = {
                        videoIds: N,
                        listId: V,
                        videoId: y,
                        playerParams: C.playerParams,
                        clickTrackingParams: C.uq,
                        index: Math.max(k.player.getPlaylistIndex(), 0),
                        currentTime: U === 0 ? void 0 : U
                    };
                    (C = UIQ(C)) && (k.locationInfo = C);
                    C = k
                }
                kz("Connecting to: " + g.ld(X));
                X.key == "cast-selector-receiver" ? (V_(C || null), X = C || null, w4() ? nw().setLaunchParams(X) : Bi("setLaunchParams called before ready.")) : !C && WgO() && uh() == X.key ? Ey("yt-remote-connection-change", !0) : (Nj(), V_(C || null), C = Yy().gL(), (X = qT(C, X.key)) && xz(X, 1))
            }
        },
        KgB = function(k) {
            var X = k.player.J();
            return !X.L("mdx_enable_privacy_disclosure_ui") || k.isLoggedIn() || k.xY || !k.hh ? !1 : g.NA(X) || g.Pr(X)
        },
        cOg = function(k) {
            k.player.getPlayerStateObject().isPlaying() ? k.player.pauseVideo() : (k.E5 = function(X) {
                !k.xY && g.j$(X, 8) && (k.player.pauseVideo(), f7(k))
            }, k.player.addEventListener("presentingplayerstatechange", k.E5));
            k.hh && k.hh.MU();
            y_() || (Ps = !0)
        };
    g.dX.prototype.O5 = g.ym(49, function() {
        this.app.wL().O5()
    });
    g.gT.prototype.O5 = g.ym(48, function() {
        this.CO = null
    });
    g.dX.prototype.qr = g.ym(47, function(k) {
        this.app.wL().qr(k)
    });
    g.gT.prototype.qr = g.ym(46, function(k) {
        this.CO = k
    });
    qGz.prototype.Tx = function(k) {
        this.V.Vy("/client_streamz/youtube/living_room/mdx/channel/opened", k)
    };
    M2c.prototype.Tx = function(k) {
        this.V.Vy("/client_streamz/youtube/living_room/mdx/channel/closed", k)
    };
    o5g.prototype.Tx = function(k) {
        this.V.Vy("/client_streamz/youtube/living_room/mdx/channel/message_received", k)
    };
    e_g.prototype.Tx = function() {
        this.V.Vy("/client_streamz/youtube/living_room/mdx/channel/success")
    };
    f7B.prototype.Tx = function(k, X) {
        this.V.Vy("/client_streamz/youtube/living_room/mdx/channel/error", k, X)
    };
    E5z.prototype.Tx = function() {
        this.V.Vy("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    };
    JaR.prototype.Tx = function() {
        this.V.Vy("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    };
    g.r = yD.prototype;
    g.r.h5 = function() {
        Uy(this);
        for (var k = [], X = 0; X < this.V.length; X++) k.push(this.W[this.V[X]]);
        return k
    };
    g.r.PR = function() {
        Uy(this);
        return this.V.concat()
    };
    g.r.has = function(k) {
        return is(this.W, k)
    };
    g.r.equals = function(k, X) {
        if (this === k) return !0;
        if (this.size != k.size) return !1;
        X = X || j1R;
        Uy(this);
        for (var V, C = 0; V = this.V[C]; C++)
            if (!X(this.get(V), k.get(V))) return !1;
        return !0
    };
    g.r.isEmpty = function() {
        return this.size == 0
    };
    g.r.clear = function() {
        this.W = {};
        this.r6 = this.size = this.V.length = 0
    };
    g.r.remove = function(k) {
        return this.delete(k)
    };
    g.r.delete = function(k) {
        return is(this.W, k) ? (delete this.W[k], --this.size, this.r6++, this.V.length > 2 * this.size && Uy(this), !0) : !1
    };
    g.r.get = function(k, X) {
        return is(this.W, k) ? this.W[k] : X
    };
    g.r.set = function(k, X) {
        is(this.W, k) || (this.size += 1, this.V.push(k), this.r6++);
        this.W[k] = X
    };
    g.r.forEach = function(k, X) {
        for (var V = this.PR(), C = 0; C < V.length; C++) {
            var y = V[C],
                U = this.get(y);
            k.call(X, U, y, this)
        }
    };
    g.r.clone = function() {
        return new yD(this)
    };
    g.r.keys = function() {
        return g.Bh(this.jo(!0)).V()
    };
    g.r.values = function() {
        return g.Bh(this.jo(!1)).V()
    };
    g.r.entries = function() {
        var k = this;
        return OrB(this.keys(), function(X) {
            return [X, k.get(X)]
        })
    };
    g.r.jo = function(k) {
        Uy(this);
        var X = 0,
            V = this.r6,
            C = this,
            y = new g.AB;
        y.next = function() {
            if (V != C.r6) throw Error("The map has changed since the iterator was created");
            if (X >= C.V.length) return g.qp;
            var U = C.V[X++];
            return g.DL(k ? U : C.W[U])
        };
        return y
    };
    var Bkg = {
            U1C: "atp",
            plC: "ska",
            VoG: "que",
            z14: "mus",
            Rjz: "sus",
            dM4: "dsp",
            r5q: "seq",
            yg2: "mic",
            WoH: "dpa",
            BLY: "mlm",
            m1z: "dsdtr",
            ut9: "ntb",
            eN4: "vsp",
            gv2: "scn",
            y54: "rpe",
            D14: "dcn",
            tI4: "dcp",
            pq4: "pas",
            vIc: "drq",
            n6H: "opf",
            wn9: "els",
            Xnb: "isg",
            bVC: "svq",
            qOC: "mvp",
            qWz: "ads",
            OVq: "stcp",
            ERG: "sads",
            oIq: "dloc",
            kXY: "dcw"
        },
        n5B = {
            uGc: "u",
            hs2: "cl",
            RAG: "k",
            PTq: "i",
            iO8: "cr",
            Xq9: "m",
            sOa: "g",
            Mb: "up"
        },
        om3 = {
            f2: "adPlaying",
            eZ: "onAdStateChange"
        },
        epQ = {
            e1b: "nowPlaying",
            xAO: "onStateChange",
            f2: "adPlaying",
            eZ: "onAdStateChange",
            u3: "nowPlayingShorts",
            b3: "onShortsStateChange"
        },
        f65 = {
            u3: "nowPlayingShorts",
            b3: "onShortsStateChange"
        };
    NT.prototype.equals = function(k) {
        return k ? this.id == k.id : !1
    };
    var iLB = "",
        fk = null;
    g.h(MXc, g.lk);
    var J8, WMQ = ejg("loadCastFramework") || ejg("loadCastApplicationFramework"),
        jBR = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.PQ(h8, g.H);
    g.r = h8.prototype;
    g.r.K1 = function(k) {
        this.j = arguments;
        this.V = !1;
        this.ZQ ? this.U = g.Ug() + this.Gh : this.ZQ = g.QZ(this.Y, this.Gh)
    };
    g.r.stop = function() {
        this.ZQ && (g.g$.clearTimeout(this.ZQ), this.ZQ = null);
        this.U = null;
        this.V = !1;
        this.j = []
    };
    g.r.pause = function() {
        ++this.W
    };
    g.r.resume = function() {
        this.W && (--this.W, !this.W && this.V && (this.V = !1, this.X.apply(null, this.j)))
    };
    g.r.C4 = function() {
        this.stop();
        h8.Ud.C4.call(this)
    };
    g.r.Qd = function() {
        this.ZQ && (g.g$.clearTimeout(this.ZQ), this.ZQ = null);
        this.U ? (this.ZQ = g.QZ(this.Y, this.U - g.Ug()), this.U = null) : this.W ? this.V = !0 : (this.V = !1, this.X.apply(null, this.j))
    };
    Wm.prototype.stringify = function(k) {
        return g.g$.JSON.stringify(k, void 0)
    };
    Wm.prototype.parse = function(k) {
        return g.g$.JSON.parse(k, void 0)
    };
    g.PQ(KMg, g.VZ);
    g.PQ($SZ, g.VZ);
    var Bo1 = null;
    g.PQ(GmB, g.VZ);
    g.PQ(wDJ, g.VZ);
    g.PQ(mSJ, g.VZ);
    Ij.prototype.debug = function() {};
    Ij.prototype.info = function() {};
    Ij.prototype.warning = function() {};
    var bLc = {},
        HLg = {};
    g.r = Kk.prototype;
    g.r.setTimeout = function(k) {
        this.dB = k
    };
    g.r.Mk = function(k) {
        k = k.target;
        var X = this.Z8;
        X && g.kS(k) == 3 ? X.Xs() : this.QX(k)
    };
    g.r.QX = function(k) {
        try {
            if (k == this.V) a: {
                var X = g.kS(this.V),
                    V = this.V.W,
                    C = this.V.getStatus();
                if (!(X < 3) && (X != 3 || this.V && (this.W.W || g.Vx(this.V) || g.CM(this.V)))) {
                    this.bq || X != 4 || V == 7 || (V == 8 || C <= 0 ? sy(3) : sy(2));
                    anJ(this);
                    var y = this.V.getStatus();
                    this.VD = y;
                    var U = Rjz(this);
                    if (this.X = y == 200) {
                        if (this.yD && !this.s2) {
                            b: {
                                if (this.V) {
                                    var N = g.iN(this.V, "X-HTTP-Initial-Response");
                                    if (N && !g.fQ(N)) {
                                        var P = N;
                                        break b
                                    }
                                }
                                P = null
                            }
                            if (k = P) this.s2 = !0,
                            Ys3(this, k);
                            else {
                                this.X = !1;
                                this.Y = 3;
                                Oy(12);
                                Bm(this);
                                nk(this);
                                break a
                            }
                        }
                        if (this.Y9) {
                            k = !0;
                            for (var T; !this.bq && this.N < U.length;)
                                if (T = vRg(this, U), T == HLg) {
                                    X == 4 && (this.Y = 4, Oy(14), k = !1);
                                    break
                                } else if (T == bLc) {
                                this.Y = 4;
                                Oy(15);
                                k = !1;
                                break
                            } else Ys3(this, T);
                            DSJ(this) && this.N != 0 && (this.W.V = this.W.V.slice(this.N), this.N = 0);
                            X != 4 || U.length != 0 || this.W.W || (this.Y = 1, Oy(16), k = !1);
                            this.X = this.X && k;
                            k ? U.length > 0 && !this.XT && (this.XT = !0, this.U.qJ(this)) : (Bm(this), nk(this))
                        } else Ys3(this, U);
                        X == 4 && Bm(this);
                        this.X && !this.bq && (X == 4 ? QBC(this.U, this) : (this.X = !1, $e(this)))
                    } else g.s$X(this.V), y == 400 && U.indexOf("Unknown SID") >
                        0 ? (this.Y = 3, Oy(12)) : (this.Y = 0, Oy(13)), Bm(this), nk(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.r.cancel = function() {
        this.bq = !0;
        Bm(this)
    };
    g.r.Ry = function() {
        this.k9 = null;
        var k = Date.now();
        k - this.D8 >= 0 ? (this.n4 != 2 && (sy(3), Oy(17)), Bm(this), this.Y = 2, nk(this)) : ZLC(this, this.D8 - k)
    };
    g.r.getLastError = function() {
        return this.Y
    };
    g.r.AQ = function() {
        return this.V
    };
    kG5.prototype.cancel = function() {
        this.U = VL3(this);
        if (this.W) this.W.cancel(), this.W = null;
        else if (this.V && this.V.size !== 0) {
            for (var k = g.W(this.V.values()), X = k.next(); !X.done; X = k.next()) X.value.cancel();
            this.V.clear()
        }
    };
    g.r = NuZ.prototype;
    g.r.Rd = 8;
    g.r.OW = 1;
    g.r.connect = function(k, X, V, C) {
        Oy(0);
        this.Et = k;
        this.bq = X || {};
        V && C !== void 0 && (this.bq.OSID = V, this.bq.OAID = C);
        this.s2 = this.MQ;
        this.uq = LMg(this, null, this.Et);
        t8(this)
    };
    g.r.disconnect = function() {
        P21(this);
        if (this.OW == 3) {
            var k = this.Gc++,
                X = this.uq.clone();
            g.Jm(X, "SID", this.j);
            g.Jm(X, "RID", k);
            g.Jm(X, "TYPE", "terminate");
            A8(this, X);
            k = new Kk(this, this.j, k);
            k.n4 = 2;
            k.T = ke(X.clone());
            X = !1;
            if (g.g$.navigator && g.g$.navigator.sendBeacon) try {
                X = g.g$.navigator.sendBeacon(k.T.toString(), "")
            } catch (V) {}!X && g.g$.Image && ((new Image).src = k.T, X = !0);
            X || (k.V = A9c(k.U, null), k.V.send(k.T));
            k.qC = Date.now();
            $e(k)
        }
        faR(this)
    };
    g.r.cV = function() {
        return this.OW == 0
    };
    g.r.getState = function() {
        return this.OW
    };
    g.r.pN = function(k) {
        if (this.X)
            if (this.X = null, this.OW == 1) {
                if (!k) {
                    this.Gc = Math.floor(Math.random() * 1E5);
                    k = this.Gc++;
                    var X = new Kk(this, "", k),
                        V = this.D;
                    this.VD && (V ? (V = g.kQ(V), g.VV(V, this.VD)) : V = this.VD);
                    this.N !== null || this.D8 || (X.uq = V, V = null);
                    var C;
                    if (this.tO) a: {
                        for (var y = C = 0; y < this.U.length; y++) {
                            b: {
                                var U = this.U[y];
                                if ("__data__" in U.map && (U = U.map.__data__, typeof U === "string")) {
                                    U = U.length;
                                    break b
                                }
                                U = void 0
                            }
                            if (U === void 0) break;C += U;
                            if (C > 4096) {
                                C = y;
                                break a
                            }
                            if (C === 4096 || y === this.U.length - 1) {
                                C = y + 1;
                                break a
                            }
                        }
                        C =
                        1E3
                    }
                    else C = 1E3;
                    C = ML_(this, X, C);
                    y = this.uq.clone();
                    g.Jm(y, "RID", k);
                    g.Jm(y, "CVER", 22);
                    this.Y9 && g.Jm(y, "X-HTTP-Session-Id", this.Y9);
                    A8(this, y);
                    V && (this.D8 ? C = "headers=" + g.ex(g.bY$(V)) + "&" + C : this.N && g.sR(y, this.N, V));
                    ln1(this.W, X);
                    this.Rt && g.Jm(y, "TYPE", "init");
                    this.tO ? (g.Jm(y, "$req", C), g.Jm(y, "SID", "null"), X.yD = !0, dS1(X, y, null)) : dS1(X, y, C);
                    this.OW = 2
                }
            } else this.OW == 3 && (k ? o2B(this, k) : this.U.length == 0 || X7c(this.W) || o2B(this))
    };
    g.r.MF = function() {
        this.T = null;
        erB(this);
        if (this.Ic && !(this.dB || this.V == null || this.NU <= 0)) {
            var k = 2 * this.NU;
            this.gB = j9((0, g.iB)(this.pYY, this), k)
        }
    };
    g.r.pYY = function() {
        this.gB && (this.gB = null, this.s2 = !1, this.dB = !0, Oy(10), wP(this), erB(this))
    };
    g.r.qJ = function(k) {
        this.V == k && this.Ic && !this.dB && (xFB(this), this.dB = !0, Oy(11))
    };
    g.r.Z5 = function() {
        this.k9 != null && (this.k9 = null, wP(this), FMg(this), Oy(19))
    };
    g.r.bJo = function(k) {
        k ? Oy(2) : Oy(1)
    };
    g.r.isActive = function() {
        return !!this.Y && this.Y.isActive(this)
    };
    g.r = JKB.prototype;
    g.r.GT = function() {};
    g.r.JX = function() {};
    g.r.TT = function() {};
    g.r.Zq = function() {};
    g.r.isActive = function() {
        return !0
    };
    g.r.TI = function() {};
    g.PQ(Rj, g.rK);
    Rj.prototype.open = function() {
        this.V.Y = this.U;
        this.X && (this.V.n4 = !0);
        this.V.connect(this.Y, this.W || void 0)
    };
    Rj.prototype.close = function() {
        this.V.disconnect()
    };
    Rj.prototype.send = function(k) {
        var X = this.V;
        if (typeof k === "string") {
            var V = {};
            V.__data__ = k;
            k = V
        } else this.j && (V = {}, V.__data__ = g.ld(k), k = V);
        X.U.push(new usc(X.Qz++, k));
        X.OW == 3 && t8(X)
    };
    Rj.prototype.C4 = function() {
        this.V.Y = null;
        delete this.U;
        this.V.disconnect();
        delete this.V;
        Rj.Ud.C4.call(this)
    };
    g.PQ(hrO, KMg);
    g.PQ(WWC, $SZ);
    g.PQ(Dx, JKB);
    Dx.prototype.GT = function() {
        this.V.dispatchEvent("m")
    };
    Dx.prototype.JX = function(k) {
        this.V.dispatchEvent(new hrO(k))
    };
    Dx.prototype.TT = function(k) {
        this.V.dispatchEvent(new WWC(k))
    };
    Dx.prototype.Zq = function() {
        this.V.dispatchEvent("n")
    };
    var bs = new g.rK;
    g.h(jv3, g.VZ);
    g.r = Zx.prototype;
    g.r.h4 = null;
    g.r.y8 = !1;
    g.r.Ol = null;
    g.r.Yj = null;
    g.r.cE = null;
    g.r.U3 = null;
    g.r.Of = null;
    g.r.kE = null;
    g.r.x0 = null;
    g.r.j$ = null;
    g.r.jh = 0;
    g.r.e7 = null;
    g.r.Pj = null;
    g.r.n8 = null;
    g.r.SC = -1;
    g.r.r$ = !0;
    g.r.FF = !1;
    g.r.gK = 0;
    g.r.yW = null;
    var GGB = {},
        n2g = {};
    g.r = Zx.prototype;
    g.r.setTimeout = function(k) {
        this.W = k
    };
    g.r.GI = function(k) {
        k = k.target;
        var X = this.yW;
        X && g.kS(k) == 3 ? X.Xs() : this.Id(k)
    };
    g.r.Id = function(k) {
        try {
            if (k == this.j$) a: {
                var X = g.kS(this.j$),
                    V = this.j$.W,
                    C = this.j$.getStatus();
                if (g.lp && !g.$J("420+")) {
                    if (X < 4) break a
                } else if (X < 3 || X == 3 && !g.Vx(this.j$)) break a;this.FF || X != 4 || V == 7 || (V == 8 || C <= 0 ? this.V.gD(3) : this.V.gD(2));tLB(this);
                var y = this.j$.getStatus();this.SC = y;
                var U = g.Vx(this.j$);
                if (this.y8 = y == 200) {
                    X == 4 && aj(this);
                    if (this.Y9) {
                        for (k = !0; !this.FF && this.jh < U.length;) {
                            var N = w7C(this, U);
                            if (N == n2g) {
                                X == 4 && (this.n8 = 4, vm(15), k = !1);
                                break
                            } else if (N == GGB) {
                                this.n8 = 4;
                                vm(16);
                                k = !1;
                                break
                            } else dFB(this,
                                N)
                        }
                        X == 4 && U.length == 0 && (this.n8 = 1, vm(17), k = !1);
                        this.y8 = this.y8 && k;
                        k || (aj(this), cK3(this))
                    } else dFB(this, U);
                    this.y8 && !this.FF && (X == 4 ? this.V.u$(this) : (this.y8 = !1, BuB(this)))
                } else y == 400 && U.indexOf("Unknown SID") > 0 ? (this.n8 = 3, vm(13)) : (this.n8 = 0, vm(14)),
                aj(this),
                cK3(this)
            }
        } catch (P) {} finally {}
    };
    g.r.cancel = function() {
        this.FF = !0;
        aj(this)
    };
    g.r.Jx = function() {
        this.Ol = null;
        var k = Date.now();
        k - this.Yj >= 0 ? (this.U3 != 2 && this.V.gD(3), aj(this), this.n8 = 2, vm(18), cK3(this)) : mFC(this, this.Yj - k)
    };
    g.r.getLastError = function() {
        return this.n8
    };
    g.r = RrR.prototype;
    g.r.AM = null;
    g.r.mO = null;
    g.r.ZP = !1;
    g.r.Lx = null;
    g.r.DG = null;
    g.r.h6 = -1;
    g.r.CP = null;
    g.r.G6 = null;
    g.r.connect = function(k) {
        this.Lx = k;
        k = zI(this.V, null, this.Lx);
        vm(3);
        Date.now();
        var X = this.V.D;
        X != null ? (this.CP = X[0], (this.G6 = X[1]) ? (this.DG = 1, HfB(this)) : (this.DG = 2, bfB(this))) : (Xc(k, "MODE", "init"), this.mO = new Zx(this), this.mO.h4 = this.AM, $FO(this.mO, k, !1, null, !0), this.DG = 0)
    };
    g.r.AU = function(k) {
        if (k) this.DG = 2, bfB(this);
        else {
            vm(4);
            var X = this.V;
            X.ZA = X.ev.h6;
            Lk(X, 9)
        }
        k && this.gD(2)
    };
    g.r.rK = function(k) {
        return this.V.rK(k)
    };
    g.r.abort = function() {
        this.mO && (this.mO.cancel(), this.mO = null);
        this.h6 = -1
    };
    g.r.cV = function() {
        return !1
    };
    g.r.dS = function(k, X) {
        this.h6 = k.SC;
        if (this.DG == 0)
            if (X) {
                try {
                    var V = this.W.parse(X)
                } catch (C) {
                    k = this.V;
                    k.ZA = this.h6;
                    Lk(k, 2);
                    return
                }
                this.CP = V[0];
                this.G6 = V[1]
            } else k = this.V, k.ZA = this.h6, Lk(k, 2);
        else this.DG == 2 && (this.ZP ? (vm(7), Date.now()) : X == "11111" ? (vm(6), this.ZP = !0, Date.now(), this.h6 = 200, this.mO.cancel(), vm(12), Fc(this.V, this, !0)) : (vm(8), Date.now(), this.ZP = !1))
    };
    g.r.u$ = function() {
        this.h6 = this.mO.SC;
        if (this.mO.y8) this.DG == 0 ? this.G6 ? (this.DG = 1, HfB(this)) : (this.DG = 2, bfB(this)) : this.DG == 2 && (this.ZP ? (vm(12), Fc(this.V, this, !0)) : (vm(11), Fc(this.V, this, !1)));
        else {
            this.DG == 0 ? vm(9) : this.DG == 2 && vm(10);
            var k = this.V;
            this.mO.getLastError();
            k.ZA = this.h6;
            Lk(k, 2)
        }
    };
    g.r.lX = function() {
        return this.V.lX()
    };
    g.r.isActive = function() {
        return this.V.isActive()
    };
    g.r.gD = function(k) {
        this.V.gD(k)
    };
    g.r = v2Z.prototype;
    g.r.o5 = null;
    g.r.Dl = null;
    g.r.qv = null;
    g.r.UW = null;
    g.r.b$ = null;
    g.r.Bj = null;
    g.r.Oh = null;
    g.r.eJ = null;
    g.r.oI = 0;
    g.r.Iy = 0;
    g.r.F6 = null;
    g.r.U9 = null;
    g.r.EH = null;
    g.r.sI = null;
    g.r.ev = null;
    g.r.cP = null;
    g.r.l9 = -1;
    g.r.F_ = -1;
    g.r.ZA = -1;
    g.r.Su = 0;
    g.r.F9 = 0;
    g.r.Nh = 8;
    var diz = {
        OK: 0,
        aXb: 2,
        DvO: 4,
        bcG: 5,
        AHG: 6,
        STOP: 7,
        Ab: 8,
        Cvq: 9,
        Pva: 10,
        aUa: 11,
        zM9: 12
    };
    g.PQ(aaB, g.VZ);
    g.PQ(QvR, g.VZ);
    g.r = v2Z.prototype;
    g.r.connect = function(k, X, V, C, y) {
        vm(0);
        this.b$ = X;
        this.Dl = V || {};
        C && y !== void 0 && (this.Dl.OSID = C, this.Dl.OAID = y);
        this.T ? (Hm((0, g.iB)(this.jp, this, k), 100), FWQ(this)) : this.jp(k)
    };
    g.r.disconnect = function() {
        g2B(this);
        if (this.V == 3) {
            var k = this.oI++,
                X = this.Bj.clone();
            g.Jm(X, "SID", this.j);
            g.Jm(X, "RID", k);
            g.Jm(X, "TYPE", "terminate");
            ls(this, X);
            k = new Zx(this, this.j, k);
            k.U3 = 2;
            k.Of = ke(X.clone());
            (new Image).src = k.Of.toString();
            k.cE = Date.now();
            BuB(k)
        }
        CWR(this)
    };
    g.r.jp = function(k) {
        this.ev = new RrR(this);
        this.ev.AM = this.o5;
        this.ev.W = this.Y;
        this.ev.connect(k)
    };
    g.r.cV = function() {
        return this.V == 0
    };
    g.r.getState = function() {
        return this.V
    };
    g.r.cK = function(k) {
        this.U9 = null;
        YOB(this, k)
    };
    g.r.SK = function() {
        this.EH = null;
        this.UW = new Zx(this, this.j, "rpc", this.N);
        this.UW.h4 = this.o5;
        this.UW.gK = 0;
        var k = this.Oh.clone();
        g.Jm(k, "RID", "rpc");
        g.Jm(k, "SID", this.j);
        g.Jm(k, "CI", this.cP ? "0" : "1");
        g.Jm(k, "AID", this.l9);
        ls(this, k);
        g.Jm(k, "TYPE", "xmlhttp");
        $FO(this.UW, k, !0, this.eJ, !1)
    };
    g.r.dS = function(k, X) {
        if (this.V != 0 && (this.UW == k || this.qv == k))
            if (this.ZA = k.SC, this.qv == k && this.V == 3)
                if (this.Nh > 7) {
                    try {
                        var V = this.Y.parse(X)
                    } catch (C) {
                        V = null
                    }
                    if (Array.isArray(V) && V.length == 3)
                        if (k = V, k[0] == 0) a: {
                            if (!this.EH) {
                                if (this.UW)
                                    if (this.UW.cE + 3E3 < this.qv.cE) gP(this), this.UW.cancel(), this.UW = null;
                                    else break a;
                                XTO(this);
                                vm(19)
                            }
                        }
                    else this.F_ = k[1], 0 < this.F_ - this.l9 && k[2] < 37500 && this.cP && this.F9 == 0 && !this.sI && (this.sI = Hm((0, g.iB)(this.dn, this), 6E3));
                    else Lk(this, 11)
                } else X != "y2f%" && Lk(this, 11);
        else if (this.UW ==
            k && gP(this), !g.fQ(X))
            for (k = this.Y.parse(X), X = 0; X < k.length; X++) V = k[X], this.l9 = V[0], V = V[1], this.V == 2 ? V[0] == "c" ? (this.j = V[1], this.eJ = V[2], V = V[3], V != null ? this.Nh = V : this.Nh = 6, this.V = 3, this.F6 && this.F6.vK(), this.Oh = zI(this, this.lX() ? this.eJ : null, this.b$), uQ5(this)) : V[0] == "stop" && Lk(this, 7) : this.V == 3 && (V[0] == "stop" ? Lk(this, 7) : V[0] != "noop" && this.F6 && this.F6.tX(V), this.F9 = 0)
    };
    g.r.dn = function() {
        this.sI != null && (this.sI = null, this.UW.cancel(), this.UW = null, XTO(this), vm(20))
    };
    g.r.u$ = function(k) {
        if (this.UW == k) {
            gP(this);
            this.UW = null;
            var X = 2
        } else if (this.qv == k) this.qv = null, X = 1;
        else return;
        this.ZA = k.SC;
        if (this.V != 0)
            if (k.y8)
                if (X == 1) {
                    X = k.x0 ? k.x0.length : 0;
                    k = Date.now() - k.cE;
                    var V = bs;
                    V.dispatchEvent(new aaB(V, X, k, this.Su));
                    zr5(this);
                    this.F6 && this.F6.mE(this, this.U);
                    this.U.length = 0
                } else uQ5(this);
        else {
            V = k.getLastError();
            var C;
            if (!(C = V == 3 || V == 7 || V == 0 && this.ZA > 0)) {
                if (C = X == 1) this.qv || this.U9 || this.V == 1 || this.Su >= 2 ? C = !1 : (this.U9 = Hm((0, g.iB)(this.cK, this, k), k4O(this, this.Su)), this.Su++,
                    C = !0);
                C = !(C || X == 2 && XTO(this))
            }
            if (C) switch (V) {
                case 1:
                    Lk(this, 5);
                    break;
                case 4:
                    Lk(this, 10);
                    break;
                case 3:
                    Lk(this, 6);
                    break;
                case 7:
                    Lk(this, 12);
                    break;
                default:
                    Lk(this, 2)
            }
        }
    };
    g.r.ix = function(k) {
        if (!g.Eg(arguments, this.V)) throw Error("Unexpected channel state: " + this.V);
    };
    g.r.edG = function(k) {
        k ? vm(2) : (vm(1), VQQ(this, 8))
    };
    g.r.rK = function(k) {
        if (k) throw Error("Can't create secondary domain capable XhrIo object.");
        k = new g.pN;
        k.N = !1;
        return k
    };
    g.r.isActive = function() {
        return !!this.F6 && this.F6.isActive(this)
    };
    g.r.gD = function(k) {
        var X = bs;
        X.dispatchEvent(new QvR(X, k))
    };
    g.r.lX = function() {
        return !1
    };
    g.r = iiB.prototype;
    g.r.vK = function() {};
    g.r.tX = function() {};
    g.r.mE = function() {};
    g.r.Dq = function() {};
    g.r.hM = function() {};
    g.r.V$ = function() {
        return {}
    };
    g.r.isActive = function() {
        return !0
    };
    g.r = yx5.prototype;
    g.r.enqueue = function(k) {
        this.W.push(k)
    };
    g.r.isEmpty = function() {
        return this.V.length === 0 && this.W.length === 0
    };
    g.r.clear = function() {
        this.V = [];
        this.W = []
    };
    g.r.contains = function(k) {
        return g.Eg(this.V, k) || g.Eg(this.W, k)
    };
    g.r.remove = function(k) {
        var X = this.V;
        var V = (0, g.HZ5)(X, k);
        V >= 0 ? (g.JR(X, V), X = !0) : X = !1;
        return X || g.rC(this.W, k)
    };
    g.r.h5 = function() {
        for (var k = [], X = this.V.length - 1; X >= 0; --X) k.push(this.V[X]);
        X = this.W.length;
        for (var V = 0; V < X; ++V) k.push(this.W[V]);
        return k
    };
    g.h(UhB, g.VZ);
    g.h(N3Z, g.VZ);
    g.PQ(S9, g.H);
    g.r = S9.prototype;
    g.r.Buo = function() {
        this.Gh = Math.min(3E5, this.Gh * 2);
        this.U();
        this.W && this.start()
    };
    g.r.start = function() {
        var k = this.Gh + 15E3 * Math.random();
        g.iT(this.V, k);
        this.W = Date.now() + k
    };
    g.r.stop = function() {
        this.V.stop();
        this.W = 0
    };
    g.r.isActive = function() {
        return this.V.isActive()
    };
    g.r.reset = function() {
        this.V.stop();
        this.Gh = 5E3
    };
    g.PQ(PWB, iiB);
    g.r = PWB.prototype;
    g.r.subscribe = function(k, X, V) {
        return this.X.subscribe(k, X, V)
    };
    g.r.unsubscribe = function(k, X, V) {
        return this.X.unsubscribe(k, X, V)
    };
    g.r.IW = function(k) {
        return this.X.IW(k)
    };
    g.r.publish = function(k, X) {
        return this.X.publish.apply(this.X, arguments)
    };
    g.r.dispose = function() {
        this.N || (this.N = !0, g.JB(this.X), this.disconnect(), g.JB(this.W), this.W = null, this.Y9 = function() {
            return ""
        }, this.uq = function() {
            return g.R3({})
        })
    };
    g.r.ez = function() {
        return this.N
    };
    g.r.connect = function(k, X, V) {
        var C = this,
            y, U, N, P;
        return g.D(function(T) {
            if (T.W == 1) return g.Om(T, 2), C.Y ? g.d(T, C.j, 2) : T.wB(2);
            g.G$(T);
            if (C.N || C.V && C.V.getState() == 2) return T.return();
            C.qC = "";
            C.W.stop();
            C.D = k || null;
            C.T = X || 0;
            y = C.n4 + "/test";
            U = C.n4 + "/bind";
            N = new v2Z(V ? V.firstTestResults : null, V ? V.secondTestResults : null, C.XT);
            if (P = C.V) P.F6 = null;
            N.F6 = C;
            C.V = N;
            if (C.Y) return C.j = Jx_(C).then(function() {
                return MQg(C, y, U, P, V)
            }), T.return(C.j.then(function() {
                C.j = g.R3()
            }));
            MQg(C, y, U, P, V);
            return g.m0(T, 0)
        })
    };
    g.r.disconnect = function(k) {
        try {
            this.Y && (this.j.cancel(), this.j = g.R3())
        } finally {
            this.U2 = k || 0, this.W && this.W.stop(), T35(this), this.V && (this.V.getState() == 3 && YOB(this.V), this.V.disconnect()), this.U2 = 0
        }
    };
    g.r.sendMessage = function(k, X) {
        var V = this,
            C;
        return g.D(function(y) {
            switch (y.W) {
                case 1:
                    g.Om(y, 2);
                    if (!V.Y) {
                        y.wB(2);
                        break
                    }
                    return g.d(y, V.j, 2);
                case 2:
                    g.G$(y);
                    if (V.N) return y.return();
                    C = {
                        _sc: k
                    };
                    X && g.VV(C, X);
                    if (V.W.isActive() || (V.V ? V.V.getState() : 0) == 2) {
                        V.U.push(C);
                        y.wB(6);
                        break
                    }
                    if (!V.dU()) {
                        y.wB(6);
                        break
                    }
                    g.Om(y, 8);
                    if (!V.Y || EmB(V, k)) {
                        y.wB(8);
                        break
                    }
                    return g.d(y, Jx_(V), 8);
                case 8:
                    g.G$(y, 0, 0, 1);
                    V.dU() && (EmB(V, k) || q6B(V), T35(V), lac(V.V, C));
                    g.m0(y, 6, 1);
                    break;
                case 6:
                    g.m0(y, 0)
            }
        })
    };
    g.r.vK = function() {
        this.W.reset();
        this.D = null;
        this.T = 0;
        if (this.U.length)
            if (this.Y) hpc(this);
            else {
                var k = this.U;
                this.U = [];
                var X = k.length;
                q6B(this);
                rxO(this, k, X);
                pk(this)
            }
        else pk(this)
    };
    g.r.Dq = function(k) {
        var X = k == 2 && this.V.ZA == 401;
        k == 4 || X || this.W.start();
        this.publish("handlerError", k, X);
        X = Object.keys(diz).find(function(V) {
            return diz[V] === k
        });
        this.Z8.Tx("BROWSER_CHANNEL", X != null ? X : "UNKNOWN")
    };
    g.r.hM = function(k, X) {
        if (!this.W.isActive()) this.publish("handlerClosed");
        else if (X)
            for (var V = X.length, C = 0; C < V; ++C) {
                var y = X[C].map;
                y && this.U.push(y)
            }
        this.s2.Tx("BROWSER_CHANNEL");
        k && this.Ic.V.E7("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", k.length);
        X && this.d2.V.E7("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", X.length)
    };
    g.r.mE = function(k, X) {
        X != null && k != null && this.dB.Tx()
    };
    g.r.V$ = function() {
        var k = {
            v: 2
        };
        this.qC && (k.gsessionid = this.qC);
        this.T != 0 && (k.ui = "" + this.T);
        this.U2 != 0 && (k.ui = "" + this.U2);
        this.D && g.VV(k, this.D);
        return k
    };
    g.r.tX = function(k) {
        k[0] == "S" ? this.qC = k[1] : k[0] == "gracefulReconnect" ? (this.W.start(), this.V.disconnect()) : this.publish("handlerMessage", new xh_(k[0], k[1]));
        this.Gc.Tx("BROWSER_CHANNEL")
    };
    g.r.dU = function() {
        return !!this.V && this.V.getState() == 3
    };
    g.r.Gs = function(k) {
        (this.k9.loungeIdToken = k) || this.W.stop();
        if (this.Et && this.V) {
            var X = this.V.o5 || {};
            k ? X["X-YouTube-LoungeId-Token"] = k : delete X["X-YouTube-LoungeId-Token"];
            this.V.o5 = X
        }
    };
    g.r.getDeviceId = function() {
        return this.k9.id
    };
    g.r.dM = function() {
        return this.W.isActive() ? this.W.W - Date.now() : NaN
    };
    g.r.Wy = function() {
        var k = this.W;
        g.yf(k.V);
        k.start()
    };
    g.r.x_b = function() {
        this.W.isActive();
        LWO(this.V) == 0 && this.connect(this.D, this.T)
    };
    Ye.prototype.sendRequest = function(k, X, V, C, y, U, N) {
        k = {
            format: U ? "RAW" : "JSON",
            method: k,
            context: this,
            timeout: 5E3,
            withCredentials: !!N,
            onSuccess: g.yB(this.j, C, !U),
            onError: g.yB(this.U, y),
            onTimeout: g.yB(this.Y, y)
        };
        V && (k.postParams = V, k.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.mm(X, k)
    };
    Ye.prototype.j = function(k, X, V, C) {
        X ? k(C) : k({
            text: V.responseText
        })
    };
    Ye.prototype.U = function(k, X) {
        k(Error("Request error: " + X.status))
    };
    Ye.prototype.Y = function(k) {
        k(Error("request timed out"))
    };
    g.h(OiB, g.rK);
    g.r = OiB.prototype;
    g.r.connect = function(k, X, V) {
        this.oM.connect(k, X, V)
    };
    g.r.disconnect = function(k) {
        this.oM.disconnect(k)
    };
    g.r.Wy = function() {
        this.oM.Wy()
    };
    g.r.getDeviceId = function() {
        return this.oM.getDeviceId()
    };
    g.r.dM = function() {
        return this.oM.dM()
    };
    g.r.dU = function() {
        return this.oM.dU()
    };
    g.r.OF = function() {
        this.dispatchEvent("channelOpened");
        var k = this.oM,
            X = this.V;
        g.Zn("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !k.V.cP,
            sessionId: k.V.j,
            arrayId: k.V.l9
        });
        g.Zn("yt-remote-session-screen-id", X);
        k = MT();
        X = oj();
        g.Eg(k, X) || k.push(X);
        CvB(k);
        y91()
    };
    g.r.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.r.onMessage = function(k) {
        this.dispatchEvent(new UhB(k))
    };
    g.r.onError = function(k) {
        this.dispatchEvent(new N3Z(k ? 1 : 0))
    };
    g.r.sendMessage = function(k, X) {
        this.oM.sendMessage(k, X)
    };
    g.r.Gs = function(k) {
        this.oM.Gs(k)
    };
    g.r.dispose = function() {
        this.oM.dispose()
    };
    g.r = jsQ.prototype;
    g.r.connect = function(k, X) {
        k = k === void 0 ? {} : k;
        X = X === void 0 ? 0 : X;
        this.X !== 2 && (this.U.stop(), this.T = k, this.N = X, KDB(this), (k = g.k5("ID_TOKEN")) ? this.j["x-youtube-identity-token"] = k : delete this.j["x-youtube-identity-token"], this.V && (this.W.device = this.V.device, this.W.name = this.V.name, this.W.app = this.V.app, this.W.id = this.V.id, this.V.yOY && (this.W.mdxVersion = "" + this.V.yOY), this.V.theme && (this.W.theme = this.V.theme), this.V.capabilities && (this.W.capabilities = this.V.capabilities), this.V.IT && (this.W.cst = this.V.IT),
            this.V.authuser && (this.W.authuser = this.V.authuser), this.V.pageId && (this.W.pageId = this.V.pageId)), this.N !== 0 ? this.W.ui = "" + this.N : delete this.W.ui, Object.assign(this.W, this.T), this.channel = new Rj(this.pathPrefix, {
            aX: "gsessionid",
            jb9: this.j,
            a89: this.W
        }), this.channel.open(), this.X = 2, I6Q(this))
    };
    g.r.disconnect = function(k) {
        this.D = k === void 0 ? 0 : k;
        this.U.stop();
        KDB(this);
        this.channel && (this.D !== 0 ? this.W.ui = "" + this.D : delete this.W.ui, this.channel.close());
        this.D = 0
    };
    g.r.dM = function() {
        return this.U.isActive() ? this.U.W - Date.now() : NaN
    };
    g.r.Wy = function() {
        var k = this.U;
        g.yf(k.V);
        k.start()
    };
    g.r.sendMessage = function(k, X) {
        this.channel && (KDB(this), k = Object.assign({}, {
            _sc: k
        }, X), this.channel.send(k))
    };
    g.r.Gs = function(k) {
        k || this.U.stop();
        k ? this.j["X-YouTube-LoungeId-Token"] = k : delete this.j["X-YouTube-LoungeId-Token"]
    };
    g.r.getDeviceId = function() {
        return this.V ? this.V.id : ""
    };
    g.r.publish = function(k) {
        return this.Y.publish.apply(this.Y, [k].concat(g.G(g.Ar.apply(1, arguments))))
    };
    g.r.subscribe = function(k, X, V) {
        return this.Y.subscribe(k, X, V)
    };
    g.r.unsubscribe = function(k, X, V) {
        return this.Y.unsubscribe(k, X, V)
    };
    g.r.IW = function(k) {
        return this.Y.IW(k)
    };
    g.r.dispose = function() {
        this.k9 || (this.k9 = !0, g.JB(this.Y), this.disconnect(), g.JB(this.U), this.qC = function() {
            return ""
        })
    };
    g.r.ez = function() {
        return this.k9
    };
    g.h($h5, g.rK);
    g.r = $h5.prototype;
    g.r.connect = function(k, X) {
        this.V.connect(k, X)
    };
    g.r.disconnect = function(k) {
        this.V.disconnect(k)
    };
    g.r.Wy = function() {
        this.V.Wy()
    };
    g.r.getDeviceId = function() {
        return this.V.getDeviceId()
    };
    g.r.dM = function() {
        return this.V.dM()
    };
    g.r.dU = function() {
        return this.V.X === 3
    };
    g.r.FK = function() {
        this.dispatchEvent("channelOpened")
    };
    g.r.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.r.onMessage = function(k) {
        this.dispatchEvent(new UhB(k))
    };
    g.r.onError = function() {
        this.dispatchEvent(new N3Z(this.V.Ed === 401 ? 1 : 0))
    };
    g.r.sendMessage = function(k, X) {
        this.V.sendMessage(k, X)
    };
    g.r.Gs = function(k) {
        this.V.Gs(k)
    };
    g.r.dispose = function() {
        this.V.dispose()
    };
    var dhQ = Date.now(),
        ky = null,
        ih = Array(50),
        Cw = -1,
        yW = !1;
    g.PQ(UL, g.ED);
    UL.prototype.gL = function() {
        return this.screens
    };
    UL.prototype.contains = function(k) {
        return !!kmB(this.screens, k)
    };
    UL.prototype.get = function(k) {
        return k ? qT(this.screens, k) : null
    };
    UL.prototype.info = function(k) {
        X$(this.X, k)
    };
    g.h(Hig, g.ED);
    g.r = Hig.prototype;
    g.r.start = function() {
        !this.V && isNaN(this.ZQ) && this.TF()
    };
    g.r.stop = function() {
        this.V && (this.V.abort(), this.V = null);
        isNaN(this.ZQ) || (g.j2(this.ZQ), this.ZQ = NaN)
    };
    g.r.C4 = function() {
        this.stop();
        g.ED.prototype.C4.call(this)
    };
    g.r.TF = function() {
        this.ZQ = NaN;
        this.V = g.mm(us(this.U, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.iB)(this.cC, this),
            onError: (0, g.iB)(this.SO, this),
            onTimeout: (0, g.iB)(this.lx, this)
        })
    };
    g.r.cC = function(k, X) {
        this.V = null;
        k = X.screen || {};
        k.dialId = this.j;
        k.name = this.X;
        X = -1;
        this.Y && k.shortLivedLoungeToken && k.shortLivedLoungeToken.value && k.shortLivedLoungeToken.refreshIntervalMs && (k.screenIdType = "shortLived", k.loungeToken = k.shortLivedLoungeToken.value, X = k.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new xe(k), X)
    };
    g.r.SO = function(k) {
        this.V = null;
        k.status && k.status == 404 ? this.W >= AO3.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (k = AO3[this.W], this.ZQ = g.sG((0, g.iB)(this.TF, this), k), this.W++) : this.publish("pairingFailed", Error("Server error " + k.status))
    };
    g.r.lx = function() {
        this.V = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var AO3 = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.PQ(Pi, UL);
    g.r = Pi.prototype;
    g.r.start = function() {
        N2(this) && this.publish("screenChange");
        !g.aB("yt-remote-lounge-token-expiration") && biz(this);
        g.j2(this.V);
        this.V = g.sG((0, g.iB)(this.start, this), 1E4)
    };
    g.r.add = function(k, X) {
        N2(this);
        Axz(this, k);
        Tk(this, !1);
        this.publish("screenChange");
        X(k);
        k.token || biz(this)
    };
    g.r.remove = function(k, X) {
        var V = N2(this);
        Rpz(this, k) && (Tk(this, !1), V = !0);
        X(k);
        V && this.publish("screenChange")
    };
    g.r.Fu = function(k, X, V, C) {
        var y = N2(this),
            U = this.get(k.id);
        U ? (U.name != X && (U.name = X, Tk(this, !1), y = !0), V(k)) : C(Error("no such local screen."));
        y && this.publish("screenChange")
    };
    g.r.C4 = function() {
        g.j2(this.V);
        Pi.Ud.C4.call(this)
    };
    g.r.Rv = function(k) {
        N2(this);
        var X = this.screens.length;
        k = k && k.screens || [];
        for (var V = k.length, C = 0; C < V; ++C) {
            var y = k[C],
                U = this.get(y.screenId);
            U && (U.token = y.loungeToken, --X)
        }
        Tk(this, !X);
        X && X$(this.X, "Missed " + X + " lounge tokens.")
    };
    g.r.QK = function(k) {
        X$(this.X, "Requesting lounge tokens failed: " + k)
    };
    g.h(ZiB, g.ED);
    g.r = ZiB.prototype;
    g.r.start = function() {
        var k = parseInt(g.aB("yt-remote-fast-check-period") || "0", 10);
        (this.j = g.Ug() - 144E5 < k ? 0 : k) ? q2(this): (this.j = g.Ug() + 3E5, g.Zn("yt-remote-fast-check-period", this.j), this.eG())
    };
    g.r.isEmpty = function() {
        return g.p1(this.V)
    };
    g.r.update = function() {
        vmR("Updating availability on schedule.");
        var k = this.X(),
            X = g.vQ(this.V, function(V, C) {
                return V && !!qT(k, C)
            }, this);
        zpR(this, X)
    };
    g.r.C4 = function() {
        g.j2(this.U);
        this.U = NaN;
        this.W && (this.W.abort(), this.W = null);
        g.ED.prototype.C4.call(this)
    };
    g.r.eG = function() {
        g.j2(this.U);
        this.U = NaN;
        this.W && this.W.abort();
        var k = FD_(this);
        if (xIQ(k)) {
            var X = us(this.Y, "/pairing/get_screen_availability");
            this.W = this.Y.sendRequest("POST", X, {
                lounge_token: g.gC(k).join(",")
            }, (0, g.iB)(this.DUO, this, k), (0, g.iB)(this.lQH, this))
        } else zpR(this, {}), q2(this)
    };
    g.r.DUO = function(k, X) {
        this.W = null;
        var V = g.gC(FD_(this));
        if (g.cQ(V, g.gC(k))) {
            X = X.screens || [];
            V = {};
            for (var C = X.length, y = 0; y < C; ++y) V[k[X[y].loungeToken]] = X[y].status == "online";
            zpR(this, V);
            q2(this)
        } else this.Xk("Changing Screen set during request."), this.eG()
    };
    g.r.lQH = function(k) {
        this.Xk("Screen availability failed: " + k);
        this.W = null;
        q2(this)
    };
    g.r.Xk = function(k) {
        X$("OnlineScreenService", k)
    };
    g.PQ(M2, UL);
    g.r = M2.prototype;
    g.r.start = function() {
        this.W.start();
        this.V.start();
        this.screens.length && (this.publish("screenChange"), this.V.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.r.add = function(k, X, V) {
        this.W.add(k, X, V)
    };
    g.r.remove = function(k, X, V) {
        this.W.remove(k, X, V);
        this.V.update()
    };
    g.r.Fu = function(k, X, V, C) {
        this.W.contains(k) ? this.W.Fu(k, X, V, C) : (k = "Updating name of unknown screen: " + k.name, X$(this.X, k), C(Error(k)))
    };
    g.r.gL = function(k) {
        return k ? this.screens : g.WQ(this.screens, g.vf(this.U, function(X) {
            return !this.contains(X)
        }, this))
    };
    g.r.Wv = function() {
        return g.vf(this.gL(!0), function(k) {
            return !!this.V.V[k.id]
        }, this)
    };
    g.r.y$ = function(k, X, V, C, y, U) {
        var N = this;
        this.info("getDialScreenByPairingCode " + k + " / " + X);
        var P = new Hig(this.j, k, X, V, C);
        P.subscribe("pairingComplete", function(T, q) {
            g.JB(P);
            y(oU(N, T), q)
        });
        P.subscribe("pairingFailed", function(T) {
            g.JB(P);
            U(T)
        });
        P.start();
        return (0, g.iB)(P.stop, P)
    };
    g.r.D5 = function(k, X, V, C) {
        g.mm(us(this.j, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: k
            },
            timeout: 5E3,
            onSuccess: (0, g.iB)(function(y, U) {
                y = new xe(U.screen || {});
                if (!y.name || S6z(this, y.name)) {
                    a: {
                        U = y.name;
                        for (var N = 2, P = X(U, N); S6z(this, P);) {
                            N++;
                            if (N > 20) break a;
                            P = X(U, N)
                        }
                        U = P
                    }
                    y.name = U
                }
                V(oU(this, y))
            }, this),
            onError: (0, g.iB)(function(y) {
                C(Error("pairing request failed: " + y.status))
            }, this),
            onTimeout: (0, g.iB)(function() {
                C(Error("pairing request timed out."))
            }, this)
        })
    };
    g.r.C4 = function() {
        g.JB(this.W);
        g.JB(this.V);
        M2.Ud.C4.call(this)
    };
    g.r.FS = function() {
        Y6O(this);
        this.publish("screenChange");
        this.V.update()
    };
    M2.prototype.dispose = M2.prototype.dispose;
    g.PQ(el, g.ED);
    g.r = el.prototype;
    g.r.Hn = function(k) {
        this.ez() || (k && (EL(this, "" + k), this.publish("sessionFailed")), this.V = null, this.publish("sessionScreen", null))
    };
    g.r.info = function(k) {
        X$(this.Y9, k)
    };
    g.r.Up = function() {
        return null
    };
    g.r.lW = function(k) {
        var X = this.W;
        k ? (X.displayStatus = new chrome.cast.ReceiverDisplayStatus(k, []), X.displayStatus.showStop = !0) : X.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(X, (0, g.iB)(function() {
            this.info("Updated receiver status for " + X.friendlyName + ": " + k)
        }, this), (0, g.iB)(function() {
            EL(this, "Failed to update receiver status for: " + X.friendlyName)
        }, this))
    };
    g.r.C4 = function() {
        this.lW("");
        el.Ud.C4.call(this)
    };
    g.h(JE, el);
    g.r = JE.prototype;
    g.r.Fe = function(k) {
        if (this.U) {
            if (this.U == k) return;
            EL(this, "Overriding cast session with new session object");
            TWO(this);
            this.qC = !1;
            this.D = "unknown";
            this.U.removeUpdateListener(this.U2);
            this.U.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.gB)
        }
        this.U = k;
        this.U.addUpdateListener(this.U2);
        this.U.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.gB);
        yz_(this, "getMdxSessionStatus")
    };
    g.r.pF = function(k) {
        this.info("launchWithParams no-op for Cast: " + g.ld(k))
    };
    g.r.stop = function() {
        this.U ? this.U.stop((0, g.iB)(function() {
            this.Hn()
        }, this), (0, g.iB)(function() {
            this.Hn(Error("Failed to stop receiver app."))
        }, this)) : this.Hn(Error("Stopping cast device without session."))
    };
    g.r.lW = function() {};
    g.r.C4 = function() {
        this.info("disposeInternal");
        TWO(this);
        this.U && (this.U.removeUpdateListener(this.U2), this.U.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.gB));
        this.U = null;
        el.prototype.C4.call(this)
    };
    g.r.bQC = function(k, X) {
        if (!this.ez())
            if (X)
                if (X = VD(X), g.kO(X)) switch (k = "" + X.type, X = X.data || {}, this.info("onYoutubeMessage_: " + k + " " + g.ld(X)), k) {
                    case "mdxSessionStatus":
                        VAc(this, X);
                        break;
                    case "loungeToken":
                        UB_(this, X);
                        break;
                    default:
                        EL(this, "Unknown youtube message: " + k)
                } else EL(this, "Unable to parse message.");
                else EL(this, "No data in message.")
    };
    g.r.eU = function(k, X, V, C) {
        g.j2(this.T);
        this.T = 0;
        LDQ(this.j, this.W.label, k, this.W.friendlyName, (0, g.iB)(function(y) {
            y ? X(y) : C >= 0 ? (EL(this, "Screen " + k + " appears to be offline. " + C + " retries left."), this.T = g.sG((0, g.iB)(this.eU, this, k, X, V, C - 1), 300)) : V(Error("Unable to fetch screen."))
        }, this), V)
    };
    g.r.Up = function() {
        return this.U
    };
    g.r.oy = function(k) {
        this.ez() || k || (EL(this, "Cast session died."), this.Hn())
    };
    g.h(r4, el);
    g.r = r4.prototype;
    g.r.Fe = function(k) {
        this.U = k;
        this.U.addUpdateListener(this.bq)
    };
    g.r.pF = function(k) {
        this.uq = k;
        this.k9()
    };
    g.r.stop = function() {
        rzg(this);
        this.U ? this.U.stop((0, g.iB)(this.Hn, this, null), (0, g.iB)(this.Hn, this, "Failed to stop DIAL device.")) : this.Hn()
    };
    g.r.C4 = function() {
        rzg(this);
        this.U && this.U.removeUpdateListener(this.bq);
        this.U = null;
        el.prototype.C4.call(this)
    };
    g.r.vC = function(k) {
        this.ez() || k || (EL(this, "DIAL session died."), this.Y(), this.Y = function() {}, this.Hn())
    };
    g.h(sL, el);
    sL.prototype.stop = function() {
        this.Hn()
    };
    sL.prototype.Fe = function() {};
    sL.prototype.pF = function() {
        g.j2(this.U);
        this.U = NaN;
        var k = qT(this.j.gL(), this.W.label);
        k ? fw(this, k) : this.Hn(Error("No such screen"))
    };
    sL.prototype.C4 = function() {
        g.j2(this.U);
        this.U = NaN;
        el.prototype.C4.call(this)
    };
    g.h(OL, g.ED);
    g.r = OL.prototype;
    g.r.init = function(k, X) {
        chrome.cast.timeout.requestSession = 3E4;
        var V = new chrome.cast.SessionRequest(this.T, [chrome.cast.Capability.AUDIO_OUT]);
        g.$5("desktop_enable_cast_connect") && (V.androidReceiverCompatible = !0);
        this.D || (V.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var C = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        k = k || this.X ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var y = (0, g.iB)(this.sM9, this);
        V = new chrome.cast.ApiConfig(V, (0, g.iB)(this.zF,
            this), y, C, k);
        V.customDialLaunchCallback = (0, g.iB)(this.tz4, this);
        chrome.cast.initialize(V, (0, g.iB)(function() {
            this.ez() || (chrome.cast.addReceiverActionListener(this.Y), mhg(), this.W.subscribe("onlineScreenChange", (0, g.iB)(this.Pv, this)), this.U = sfO(this), chrome.cast.setCustomReceivers(this.U, function() {}, (0, g.iB)(function(U) {
                this.Xk("Failed to set initial custom receivers: " + g.ld(U))
            }, this)), this.publish("yt-remote-cast2-availability-change", IU(this)), X(!0))
        }, this), (0, g.iB)(function(U) {
            this.Xk("Failed to initialize API: " +
                g.ld(U));
            X(!1)
        }, this))
    };
    g.r.JWC = function(k, X) {
        jl("Setting connected screen ID: " + k + " -> " + X);
        if (this.V) {
            var V = this.V.V;
            if (!k || V && V.id != k) jl("Unsetting old screen status: " + this.V.W.friendlyName), Kw(this, null)
        }
        if (k && X) {
            if (!this.V) {
                k = qT(this.W.gL(), k);
                if (!k) {
                    jl("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (k.idType == "shortLived") {
                    jl("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                V = ho_(this, k);
                V || (jl("setConnectedScreenStatus: Connected receiver not custom..."), V = new chrome.cast.Receiver(k.uuid ?
                    k.uuid : k.id, k.name), V.receiverType = chrome.cast.ReceiverType.CUSTOM, this.U.push(V), chrome.cast.setCustomReceivers(this.U, function() {}, (0, g.iB)(function(C) {
                    this.Xk("Failed to set initial custom receivers: " + g.ld(C))
                }, this)));
                jl("setConnectedScreenStatus: new active receiver: " + V.friendlyName);
                Kw(this, new sL(this.W, V), !0)
            }
            this.V.lW(X)
        } else jl("setConnectedScreenStatus: no screen.")
    };
    g.r.d_a = function(k) {
        this.ez() ? this.Xk("Setting connection data on disposed cast v2") : this.V ? this.V.pF(k) : this.Xk("Setting connection data without a session")
    };
    g.r.VT = function() {
        this.ez() ? this.Xk("Stopping session on disposed cast v2") : this.V ? (this.V.stop(), Kw(this, null)) : jl("Stopping non-existing session")
    };
    g.r.requestSession = function() {
        chrome.cast.requestSession((0, g.iB)(this.zF, this), (0, g.iB)(this.oMH, this))
    };
    g.r.C4 = function() {
        this.W.unsubscribe("onlineScreenChange", (0, g.iB)(this.Pv, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.Y);
        var k = nm5,
            X = g.LZ("yt.mdx.remote.debug.handlers_");
        g.rC(X || [], k);
        g.JB(this.V);
        g.ED.prototype.C4.call(this)
    };
    g.r.Xk = function(k) {
        X$("Controller", k)
    };
    g.r.w4 = function(k, X) {
        this.V == k && (X || Kw(this, null), this.publish("yt-remote-cast2-session-change", X))
    };
    g.r.EMa = function(k, X) {
        if (!this.ez())
            if (k) switch (k.friendlyName = chrome.cast.unescape(k.friendlyName), jl("onReceiverAction_ " + k.label + " / " + k.friendlyName + "-- " + X), X) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.V)
                        if (this.V.W.label != k.label) jl("onReceiverAction_: Stopping active receiver: " + this.V.W.friendlyName), this.V.stop();
                        else {
                            jl("onReceiverAction_: Casting to active receiver.");
                            this.V.V && this.publish("yt-remote-cast2-session-change", this.V.V);
                            break
                        }
                    switch (k.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            Kw(this,
                                new sL(this.W, k));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            Kw(this, new r4(this.W, k, this.j, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            Kw(this, new JE(this.W, k, this.config_));
                            break;
                        default:
                            this.Xk("Unknown receiver type: " + k.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.V && this.V.W.label == k.label ? this.V.stop() : this.Xk("Stopping receiver w/o session: " + k.friendlyName)
            } else this.Xk("onReceiverAction_ called without receiver.")
    };
    g.r.tz4 = function(k) {
        if (this.ez()) return Promise.reject(Error("disposed"));
        var X = k.receiver;
        X.receiverType != chrome.cast.ReceiverType.DIAL && (this.Xk("Not DIAL receiver: " + X.friendlyName), X.receiverType = chrome.cast.ReceiverType.DIAL);
        var V = this.V ? this.V.W : null;
        if (!V || V.label != X.label) return this.Xk("Receiving DIAL launch request for non-clicked DIAL receiver: " + X.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (V && V.label == X.label && V.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.V.V) return jl("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.V.V), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Xk('Changing CAST intent from "' + V.receiverType + '" to "dial" for ' + X.friendlyName);
            Kw(this, new r4(this.W, X, this.j, this.config_))
        }
        X = this.V;
        X.T = k;
        X.T.appState == chrome.cast.DialAppState.RUNNING ? (k = X.T.extraData || {}, V = k.screenId || null, hE(X) && k.loungeToken ? k.loungeTokenRefreshIntervalMs ? k = fGc(X, {
            name: X.W.friendlyName,
            screenId: k.screenId,
            loungeToken: k.loungeToken,
            dialId: X.T.receiver.label,
            screenIdType: "shortLived"
        }, k.loungeTokenRefreshIntervalMs) : (g.Cr(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(k) + ".")), k = EoJ(X, V)) : k = EoJ(X, V)) : k = ooB(X);
        return k
    };
    g.r.zF = function(k) {
        var X = this;
        if (!this.ez() && !this.X) {
            jl("New cast session ID: " + k.sessionId);
            var V = k.receiver;
            if (V.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.V)
                    if (V.receiverType == chrome.cast.ReceiverType.CAST) jl("Got resumed cast session before resumed mdx connection."), V.friendlyName = chrome.cast.unescape(V.friendlyName), Kw(this, new JE(this.W, V, this.config_), !0);
                    else {
                        this.Xk("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var C = this.V.W,
                    y = qT(this.W.gL(),
                        C.label);
                y && Pm(y, V.label) && C.receiverType != chrome.cast.ReceiverType.CAST && V.receiverType == chrome.cast.ReceiverType.CAST && (jl("onSessionEstablished_: manual to cast session change " + V.friendlyName), g.JB(this.V), this.V = new JE(this.W, V, this.config_), this.V.subscribe("sessionScreen", (0, g.iB)(this.w4, this, this.V)), this.V.subscribe("sessionFailed", function() {
                    return Wsc(X, X.V)
                }), this.V.pF(null));
                this.V.Fe(k)
            }
        }
    };
    g.r.mN = function() {
        return this.V ? this.V.Up() : null
    };
    g.r.oMH = function(k) {
        this.ez() || (this.Xk("Failed to estabilish a session: " + g.ld(k)), k.code != chrome.cast.ErrorCode.CANCEL && Kw(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.r.sM9 = function(k) {
        jl("Receiver availability updated: " + k);
        if (!this.ez()) {
            var X = IU(this);
            this.N = k == chrome.cast.ReceiverAvailability.AVAILABLE;
            IU(this) != X && this.publish("yt-remote-cast2-availability-change", IU(this))
        }
    };
    g.r.Pv = function() {
        this.ez() || (this.U = sfO(this), jl("Updating custom receivers: " + g.ld(this.U)), chrome.cast.setCustomReceivers(this.U, function() {}, (0, g.iB)(function() {
            this.Xk("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", IU(this)))
    };
    OL.prototype.setLaunchParams = OL.prototype.d_a;
    OL.prototype.setConnectedScreenStatus = OL.prototype.JWC;
    OL.prototype.stopSession = OL.prototype.VT;
    OL.prototype.getCastSession = OL.prototype.mN;
    OL.prototype.requestSession = OL.prototype.requestSession;
    OL.prototype.init = OL.prototype.init;
    OL.prototype.dispose = OL.prototype.dispose;
    var w_3 = [];
    g.r = tE.prototype;
    g.r.reset = function(k) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        DBJ(this);
        this.volume = -1;
        this.muted = !1;
        k && (this.index = k.index, this.listId = k.listId, this.videoId = k.videoId, this.playerState = k.playerState, this.volume = k.volume, this.muted = k.muted, this.audioTrackId = k.audioTrackId, this.trackData = k.trackData, this.zr = k.hasPrevious, this.uo = k.hasNext, this.X = k.playerTime, this.Y = k.playerTimeAt, this.W = k.seekableStart, this.N = k.seekableEnd, this.U = k.duration, this.T = k.loadedTime, this.V = k.liveIngestionTime, this.j = !isNaN(this.V))
    };
    g.r.isPlaying = function() {
        return this.playerState == 1
    };
    g.r.isBuffering = function() {
        return this.playerState == 3
    };
    g.r.uu = function() {
        return this.playerState == 1081
    };
    g.r.Fl = function(k) {
        this.U = isNaN(k) ? 0 : k
    };
    g.r.getDuration = function() {
        return this.j ? this.U + ci(this) : this.U
    };
    g.r.clone = function() {
        return new tE(Hc1(this))
    };
    g.h(Hi, g.ED);
    g.r = Hi.prototype;
    g.r.getState = function() {
        return this.U
    };
    g.r.dM = function() {
        return this.j.getReconnectTimeout()
    };
    g.r.Wy = function() {
        this.j.reconnect()
    };
    g.r.play = function() {
        vi(this) ? (this.V ? this.V.play(null, g.or, zk(this, "play")) : QW(this, "play"), ZcC(this, 1, AE(bh(this))), this.publish("remotePlayerChange")) : Zr(this, this.play)
    };
    g.r.pause = function() {
        vi(this) ? (this.V ? this.V.pause(null, g.or, zk(this, "pause")) : QW(this, "pause"), ZcC(this, 2, AE(bh(this))), this.publish("remotePlayerChange")) : Zr(this, this.pause)
    };
    g.r.seekTo = function(k) {
        if (vi(this)) {
            if (this.V) {
                var X = bh(this),
                    V = new chrome.cast.media.SeekRequest;
                V.currentTime = k;
                X.isPlaying() || X.isBuffering() ? V.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : V.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.V.seek(V, g.or, zk(this, "seekTo", {
                    newTime: k
                }))
            } else QW(this, "seekTo", {
                newTime: k
            });
            ZcC(this, 3, k);
            this.publish("remotePlayerChange")
        } else Zr(this, g.yB(this.seekTo, k))
    };
    g.r.stop = function() {
        if (vi(this)) {
            this.V ? this.V.stop(null, g.or, zk(this, "stopVideo")) : QW(this, "stopVideo");
            var k = bh(this);
            k.index = -1;
            k.videoId = "";
            DBJ(k);
            aU(this, k);
            this.publish("remotePlayerChange")
        } else Zr(this, this.stop)
    };
    g.r.setVolume = function(k, X) {
        if (vi(this)) {
            var V = bh(this);
            if (this.W) {
                if (V.volume != k) {
                    var C = Math.round(k) / 100;
                    this.W.setReceiverVolumeLevel(C, (0, g.iB)(function() {
                        VW("set receiver volume: " + C)
                    }, this), (0, g.iB)(function() {
                        this.Xk("failed to set receiver volume.")
                    }, this))
                }
                V.muted != X && this.W.setReceiverMuted(X, (0, g.iB)(function() {
                    VW("set receiver muted: " + X)
                }, this), (0, g.iB)(function() {
                    this.Xk("failed to set receiver muted.")
                }, this))
            } else {
                var y = {
                    volume: k,
                    muted: X
                };
                V.volume != -1 && (y.delta = k - V.volume);
                QW(this, "setVolume", y)
            }
            V.muted = X;
            V.volume = k;
            aU(this, V)
        } else Zr(this, g.yB(this.setVolume, k, X))
    };
    g.r.j4 = function(k, X) {
        if (vi(this)) {
            var V = bh(this);
            k = {
                videoId: k
            };
            X && (V.trackData = {
                trackName: X.name,
                languageCode: X.languageCode,
                sourceLanguageCode: X.translationLanguage ? X.translationLanguage.languageCode : "",
                languageName: X.languageName,
                kind: X.kind
            }, k.style = g.ld(X.style), g.VV(k, V.trackData));
            QW(this, "setSubtitlesTrack", k);
            aU(this, V)
        } else Zr(this, g.yB(this.j4, k, X))
    };
    g.r.setAudioTrack = function(k, X) {
        vi(this) ? (X = X.getLanguageInfo().getId(), QW(this, "setAudioTrack", {
            videoId: k,
            audioTrackId: X
        }), k = bh(this), k.audioTrackId = X, aU(this, k)) : Zr(this, g.yB(this.setAudioTrack, k, X))
    };
    g.r.playVideo = function(k, X, V, C, y, U, N) {
        C = C === void 0 ? null : C;
        y = y === void 0 ? null : y;
        U = U === void 0 ? null : U;
        N = N === void 0 ? null : N;
        var P = bh(this),
            T = {
                videoId: k
            };
        V !== void 0 && (T.currentIndex = V);
        Dr(P, k, V || 0);
        X !== void 0 && (d4(P, X), T.currentTime = X);
        C && (T.listId = C);
        y && (T.playerParams = y);
        U && (T.clickTrackingParams = U);
        N && (T.locationInfo = g.ld(N));
        QW(this, "setPlaylist", T);
        C || aU(this, P)
    };
    g.r.xg = function(k, X) {
        if (vi(this)) {
            if (k && X) {
                var V = bh(this);
                Dr(V, k, X);
                aU(this, V)
            }
            QW(this, "previous")
        } else Zr(this, g.yB(this.xg, k, X))
    };
    g.r.nextVideo = function(k, X) {
        if (vi(this)) {
            if (k && X) {
                var V = bh(this);
                Dr(V, k, X);
                aU(this, V)
            }
            QW(this, "next")
        } else Zr(this, g.yB(this.nextVideo, k, X))
    };
    g.r.Qq = function() {
        if (vi(this)) {
            QW(this, "clearPlaylist");
            var k = bh(this);
            k.reset();
            aU(this, k);
            this.publish("remotePlayerChange")
        } else Zr(this, this.Qq)
    };
    g.r.xO = function() {
        vi(this) ? QW(this, "dismissAutoplay") : Zr(this, this.xO)
    };
    g.r.dispose = function() {
        if (this.U != 3) {
            var k = this.U;
            this.U = 3;
            this.publish("proxyStateChange", k, this.U)
        }
        g.ED.prototype.dispose.call(this)
    };
    g.r.C4 = function() {
        voB(this);
        this.j = null;
        this.Y.clear();
        RU(this, null);
        g.ED.prototype.C4.call(this)
    };
    g.r.vr = function(k) {
        if ((k != this.U || k == 2) && this.U != 3 && k != 0) {
            var X = this.U;
            this.U = k;
            this.publish("proxyStateChange", X, k);
            if (k == 1)
                for (; !this.Y.isEmpty();) X = k = this.Y, X.V.length === 0 && (X.V = X.W, X.V.reverse(), X.W = []), k.V.pop().apply(this);
            else k == 3 && this.dispose()
        }
    };
    g.r.b0q = function(k, X) {
        this.publish(k, X)
    };
    g.r.Gcb = function(k) {
        if (!k) this.vU(null), RU(this, null);
        else if (this.W.receiver.volume) {
            k = this.W.receiver.volume;
            var X = bh(this),
                V = Math.round(100 * k.level || 0);
            if (X.volume != V || X.muted != k.muted) VW("Cast volume update: " + k.level + (k.muted ? " muted" : "")), X.volume = V, X.muted = !!k.muted, aU(this, X)
        }
    };
    g.r.vU = function(k) {
        VW("Cast media: " + !!k);
        this.V && this.V.removeUpdateListener(this.T);
        if (this.V = k) this.V.addUpdateListener(this.T), aGB(this), this.publish("remotePlayerChange")
    };
    g.r.JO2 = function(k) {
        k ? (aGB(this), this.publish("remotePlayerChange")) : this.vU(null)
    };
    g.r.xH = function() {
        QW(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.r.I8o = function() {
        var k = czB();
        k && RU(this, k)
    };
    g.r.Xk = function(k) {
        X$("CP", k)
    };
    g.h(lh, g.ED);
    g.r = lh.prototype;
    g.r.connect = function(k, X) {
        if (X) {
            var V = X.listId,
                C = X.videoId,
                y = X.videoIds,
                U = X.playerParams,
                N = X.clickTrackingParams,
                P = X.index,
                T = {
                    videoId: C
                },
                q = X.currentTime,
                M = X.locationInfo;
            X = X.loopMode;
            q !== void 0 && (T.currentTime = q <= 5 ? 0 : q);
            U && (T.playerParams = U);
            M && (T.locationInfo = M);
            N && (T.clickTrackingParams = N);
            V && (T.listId = V);
            y && y.length > 0 && (T.videoIds = y.join(","));
            P !== void 0 && (T.currentIndex = P);
            this.bq && (T.loopMode = X || "LOOP_MODE_OFF");
            V && (this.V.listId = V);
            this.V.videoId = C;
            this.V.index = P || 0;
            this.V.state = 3;
            d4(this.V,
                q);
            this.Y = "UNSUPPORTED";
            V = this.bq ? "setInitialState" : "setPlaylist";
            F$("Connecting with " + V + " and params: " + g.ld(T));
            this.W.connect({
                method: V,
                params: g.ld(T)
            }, k, US5())
        } else F$("Connecting without params"), this.W.connect({}, k, US5());
        go5(this)
    };
    g.r.Gs = function(k) {
        this.W.Gs(k)
    };
    g.r.dispose = function() {
        this.ez() || (g.lo("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), g4(this, 3));
        g.ED.prototype.dispose.call(this)
    };
    g.r.C4 = function() {
        lGg(this);
        S7B(this);
        Ls5(this);
        g.j2(this.T);
        this.T = NaN;
        g.j2(this.D);
        this.D = NaN;
        this.j = null;
        g.wo(this.k9);
        this.k9.length = 0;
        this.W.dispose();
        g.ED.prototype.C4.call(this);
        this.Y = this.N = this.U = this.V = this.W = null
    };
    g.r.Ld = function(k) {
        if (!this.U || this.U.length === 0) return !1;
        for (var X = g.W(this.U), V = X.next(); !V.done; V = X.next())
            if (!V.value.capabilities.has(k)) return !1;
        return !0
    };
    g.r.XS = function() {
        var k = 3;
        this.ez() || (k = 0, isNaN(this.I$()) ? this.W.dU() && isNaN(this.X) && (k = 1) : k = 2);
        return k
    };
    g.r.Hm = function(k) {
        F$("Disconnecting with " + k);
        g.lo("yt.mdx.remote.remoteClient_", null);
        lGg(this);
        this.publish("beforeDisconnect", k);
        k == 1 && e9();
        this.W.disconnect(k);
        this.dispose()
    };
    g.r.PT = function() {
        var k = this.V;
        this.j && (k = this.V.clone(), Dr(k, this.j, k.index));
        return Hc1(k)
    };
    g.r.SDG = function(k) {
        var X = this,
            V = new tE(k);
        V.videoId && V.videoId != this.V.videoId && (this.j = V.videoId, g.j2(this.T), this.T = g.sG(function() {
            if (X.j) {
                var y = X.j;
                X.j = null;
                X.V.videoId != y && Lw(X, "getNowPlaying")
            }
        }, 5E3));
        var C = [];
        this.V.listId == V.listId && this.V.videoId == V.videoId && this.V.index == V.index || C.push("remoteQueueChange");
        this.V.playerState == V.playerState && this.V.volume == V.volume && this.V.muted == V.muted && AE(this.V) == AE(V) && g.ld(this.V.trackData) == g.ld(V.trackData) || C.push("remotePlayerChange");
        this.V.reset(k);
        g.DB(C, function(y) {
            this.publish(y)
        }, this)
    };
    g.r.gC = function() {
        var k = this.W.getDeviceId(),
            X = g.ez(this.U, function(V) {
                return V.type == "REMOTE_CONTROL" && V.id != k
            });
        return X ? X.id : ""
    };
    g.r.I$ = function() {
        return this.W.dM()
    };
    g.r.iM = function() {
        return this.Y || "UNSUPPORTED"
    };
    g.r.I_ = function() {
        return this.N || ""
    };
    g.r.W8 = function() {
        !isNaN(this.I$()) && this.W.Wy()
    };
    g.r.pI9 = function(k, X) {
        Lw(this, k, X);
        Y7J(this)
    };
    g.r.aP = function() {
        var k = g.a1("SAPISID", "") || g.a1("__Secure-1PAPISID") || "",
            X = g.a1("__Secure-3PAPISID", "") || "";
        if (!k && !X) return "";
        k = g.Uu(g.yo(k), 2);
        X = g.Uu(g.yo(X), 2);
        return g.Uu(g.yo("," + k + "," + X), 2)
    };
    lh.prototype.subscribe = lh.prototype.subscribe;
    lh.prototype.unsubscribeByKey = lh.prototype.IW;
    lh.prototype.getProxyState = lh.prototype.XS;
    lh.prototype.disconnect = lh.prototype.Hm;
    lh.prototype.getPlayerContextData = lh.prototype.PT;
    lh.prototype.setPlayerContextData = lh.prototype.SDG;
    lh.prototype.getOtherConnectedRemoteId = lh.prototype.gC;
    lh.prototype.getReconnectTimeout = lh.prototype.I$;
    lh.prototype.getAutoplayMode = lh.prototype.iM;
    lh.prototype.getAutoplayVideoId = lh.prototype.I_;
    lh.prototype.reconnect = lh.prototype.W8;
    lh.prototype.sendMessage = lh.prototype.pI9;
    lh.prototype.getXsrfToken = lh.prototype.aP;
    lh.prototype.isCapabilitySupportedOnConnectedDevices = lh.prototype.Ld;
    g.h(TqQ, UL);
    g.r = TqQ.prototype;
    g.r.gL = function(k) {
        return this.X6.$_gs(k)
    };
    g.r.contains = function(k) {
        return !!this.X6.$_c(k)
    };
    g.r.get = function(k) {
        return this.X6.$_g(k)
    };
    g.r.start = function() {
        this.X6.$_st()
    };
    g.r.add = function(k, X, V) {
        this.X6.$_a(k, X, V)
    };
    g.r.remove = function(k, X, V) {
        this.X6.$_r(k, X, V)
    };
    g.r.Fu = function(k, X, V, C) {
        this.X6.$_un(k, X, V, C)
    };
    g.r.C4 = function() {
        for (var k = this.V.length, X = 0; X < k; ++X) this.X6.$_ubk(this.V[X]);
        this.V.length = 0;
        this.X6 = null;
        UL.prototype.C4.call(this)
    };
    g.r.yT = function() {
        this.publish("screenChange")
    };
    g.r.Haq = function() {
        this.publish("onlineScreenChange")
    };
    M2.prototype.$_st = M2.prototype.start;
    M2.prototype.$_gspc = M2.prototype.D5;
    M2.prototype.$_gsppc = M2.prototype.y$;
    M2.prototype.$_c = M2.prototype.contains;
    M2.prototype.$_g = M2.prototype.get;
    M2.prototype.$_a = M2.prototype.add;
    M2.prototype.$_un = M2.prototype.Fu;
    M2.prototype.$_r = M2.prototype.remove;
    M2.prototype.$_gs = M2.prototype.gL;
    M2.prototype.$_gos = M2.prototype.Wv;
    M2.prototype.$_s = M2.prototype.subscribe;
    M2.prototype.$_ubk = M2.prototype.IW;
    var Uc = null,
        Ps = !1,
        Sl = null,
        pw = null,
        sNQ = null,
        XA = [];
    g.h($iB, g.H);
    g.r = $iB.prototype;
    g.r.C4 = function() {
        g.H.prototype.C4.call(this);
        this.W.stop();
        this.U.stop();
        this.T.stop();
        var k = this.va;
        k.unsubscribe("proxyStateChange", this.BZ, this);
        k.unsubscribe("remotePlayerChange", this.PO, this);
        k.unsubscribe("remoteQueueChange", this.aG, this);
        k.unsubscribe("previousNextChange", this.Uw, this);
        k.unsubscribe("nowAutoplaying", this.tE, this);
        k.unsubscribe("autoplayDismissed", this.Ml, this);
        this.va = this.V = null
    };
    g.r.rk = function(k) {
        var X = g.Ar.apply(1, arguments);
        if (this.va.U != 2)
            if (TT(this)) {
                if (!bh(this.va).uu() || k !== "control_seek") switch (k) {
                    case "control_toggle_play_pause":
                        bh(this.va).isPlaying() ? this.va.pause() : this.va.play();
                        break;
                    case "control_play":
                        this.va.play();
                        break;
                    case "control_pause":
                        this.va.pause();
                        break;
                    case "control_seek":
                        this.N.Xs(X[0], X[1]);
                        break;
                    case "control_subtitles_set_track":
                        nDB(this, X[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(X[0])
                }
            } else switch (k) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    X =
                        this.B.getCurrentTime();
                    qj(this, X === 0 ? void 0 : X);
                    break;
                case "control_seek":
                    qj(this, X[0]);
                    break;
                case "control_subtitles_set_track":
                    nDB(this, X[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(X[0])
            }
    };
    g.r.Z4q = function(k) {
        this.T.K1(k)
    };
    g.r.Fbc = function(k) {
        this.rk("control_subtitles_set_track", g.p1(k) ? null : k)
    };
    g.r.kW = function() {
        var k = this.B.getOption("captions", "track");
        g.p1(k) || nDB(this, k)
    };
    g.r.L0 = function(k) {
        this.V.L0(k, this.B.getVideoData().lengthSeconds)
    };
    g.r.YtB = function() {
        g.p1(this.j) || Gaz(this, this.j);
        this.Y = !1
    };
    g.r.BZ = function(k, X) {
        this.U.stop();
        X === 2 && this.Oz()
    };
    g.r.PO = function() {
        if (TT(this)) {
            this.W.stop();
            var k = bh(this.va);
            switch (k.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.V.jI = 1;
                    break;
                case 1082:
                case 1083:
                    this.V.jI = 0;
                    break;
                default:
                    this.V.jI = -1
            }
            switch (k.playerState) {
                case 1081:
                case 1:
                    this.aM(new g.eq(8));
                    this.d$();
                    break;
                case 1085:
                case 3:
                    this.aM(new g.eq(9));
                    break;
                case 1083:
                case 0:
                    this.aM(new g.eq(2));
                    this.N.stop();
                    this.L0(this.B.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.aM(new g.eq(4));
                    break;
                case 2:
                    this.aM(new g.eq(4));
                    this.L0(AE(k));
                    break;
                case -1:
                    this.aM(new g.eq(64));
                    break;
                case -1E3:
                    this.aM(new g.eq(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        QA: 2
                    }))
            }
            k = bh(this.va).trackData;
            var X = this.j;
            (k || X ? k && X && k.trackName == X.trackName && k.languageCode == X.languageCode && k.languageName == X.languageName && k.kind == X.kind : 1) || (this.j = k, Gaz(this, k));
            k = bh(this.va);
            k.volume === -1 || Math.round(this.B.getVolume()) === k.volume && this.B.isMuted() === k.muted || this.D.isActive() || this.l0()
        } else BqC(this)
    };
    g.r.Uw = function() {
        this.B.publish("mdxpreviousnextchange")
    };
    g.r.aG = function() {
        TT(this) || BqC(this)
    };
    g.r.tE = function(k) {
        isNaN(k) || this.B.publish("mdxnowautoplaying", k)
    };
    g.r.Ml = function() {
        this.B.publish("mdxautoplaycanceled")
    };
    g.r.setAudioTrack = function(k) {
        TT(this) && this.va.setAudioTrack(this.B.getVideoData(1).videoId, k)
    };
    g.r.seekTo = function(k, X) {
        bh(this.va).playerState === -1 ? qj(this, k) : X && this.va.seekTo(k)
    };
    g.r.l0 = function() {
        var k = this;
        if (TT(this)) {
            var X = bh(this.va);
            this.events.rQ(this.k9);
            X.muted ? this.B.mute() : this.B.unMute();
            this.B.setVolume(X.volume);
            this.k9 = this.events.Z(this.B, "onVolumeChange", function(V) {
                Iz_(k, V)
            })
        }
    };
    g.r.d$ = function() {
        this.W.stop();
        if (!this.va.ez()) {
            var k = bh(this.va);
            k.isPlaying() && this.aM(new g.eq(8));
            this.L0(AE(k));
            this.W.start()
        }
    };
    g.r.Oz = function() {
        this.U.stop();
        this.W.stop();
        var k = this.va.dM();
        this.va.U == 2 && !isNaN(k) && this.U.start()
    };
    g.r.aM = function(k) {
        this.U.stop();
        var X = this.X;
        if (!g.Wt(X, k)) {
            var V = g.S(k, 2);
            V !== g.S(this.X, 2) && this.B.S9(V);
            this.X = k;
            t1z(this.V, X, k)
        }
    };
    g.h(wBB, g.Zc);
    g.r = wBB.prototype;
    g.r.getCurrentTime = function() {
        return this.V.getCurrentTime()
    };
    g.r.getDuration = function() {
        return this.V.getDuration()
    };
    g.r.UE = function() {
        return this.V.UE()
    };
    g.r.wk = function() {
        return this.V.wk()
    };
    g.r.rP = function() {
        return this.V.rP()
    };
    g.r.IV = function() {
        return this.V.IV()
    };
    g.r.getPlayerState = function() {
        return this.V.IZ
    };
    g.r.isAtLiveHead = function() {
        return this.V.isAtLiveHead()
    };
    g.r.pauseVideo = function() {
        this.V.Ie("control_pause")
    };
    g.r.playVideo = function() {
        var k = this;
        return g.D(function(X) {
            k.V.Ie("control_play");
            return X.return()
        })
    };
    g.r.seekTo = function(k, X) {
        this.V.Ie("control_seek", k, !(X == null ? 0 : X.zP))
    };
    g.r.Qi = function(k) {
        this.V.Ie("control_set_audio_track", k);
        return !0
    };
    g.h(Mj, g.F);
    Mj.prototype.MU = function() {
        this.fade.show()
    };
    Mj.prototype.YP = function() {
        this.fade.hide()
    };
    Mj.prototype.V = function() {
        Ey("mdx-privacy-popup-cancel");
        this.YP()
    };
    Mj.prototype.W = function() {
        Ey("mdx-privacy-popup-confirm");
        this.YP()
    };
    g.h(o8, g.F);
    o8.prototype.onStateChange = function(k) {
        this.K0(k.state)
    };
    o8.prototype.K0 = function(k) {
        if (this.api.getPresentingPlayerType() === 3) {
            var X = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            k = g.S(k, 128) ? g.Bu("Error on $RECEIVER_NAME", X) : k.isPlaying() || k.isPaused() ? g.Bu("Playing on $RECEIVER_NAME", X) : g.Bu("Connected to $RECEIVER_NAME", X);
            this.updateValue("statustext", k);
            this.fade.show()
        } else this.fade.hide()
    };
    g.h(e8, g.bm);
    e8.prototype.j = function() {
        var k = this.B.getOption("remote", "receivers");
        k && k.length > 1 && !this.B.getOption("remote", "quickCast") ? (this.Jp = g.RZ(k, this.V, this), this.yP(g.pq(k, this.V)), k = this.B.getOption("remote", "currentReceiver"), k = this.V(k), this.options[k] && this.cS(k), this.enable(!0)) : this.enable(!1)
    };
    e8.prototype.V = function(k) {
        return k.key
    };
    e8.prototype.Wq = function(k) {
        return k === "cast-selector-receiver" ? "Cast..." : this.Jp[k].name
    };
    e8.prototype.PS = function(k) {
        g.bm.prototype.PS.call(this, k);
        this.B.setOption("remote", "currentReceiver", this.Jp[k]);
        this.Ut.YP()
    };
    g.h(miB, g.jb);
    g.r = miB.prototype;
    g.r.create = function() {
        var k = this.player.J(),
            X = g.Fi(k);
        k = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: k.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: k.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: k.L("enable_cast_short_lived_lounge_token")
        };
        fzZ(X, k);
        this.subscriptions.push(g.MB("yt-remote-before-disconnect", this.MzO, this));
        this.subscriptions.push(g.MB("yt-remote-connection-change", this.H0O, this));
        this.subscriptions.push(g.MB("yt-remote-receiver-availability-change", this.CR,
            this));
        this.subscriptions.push(g.MB("yt-remote-auto-connect", this.NQO, this));
        this.subscriptions.push(g.MB("yt-remote-receiver-resumed", this.xUo, this));
        this.subscriptions.push(g.MB("mdx-privacy-popup-confirm", this.oLb, this));
        this.subscriptions.push(g.MB("mdx-privacy-popup-cancel", this.tma, this));
        this.CR()
    };
    g.r.load = function() {
        this.player.cancelPlayback();
        g.jb.prototype.load.call(this);
        this.CO = new wBB(this.player.J(), this);
        this.player.qr(this.CO);
        this.a8 = new $iB(this, this.player, this.va);
        var k = (k = jNB()) ? k.currentTime : 0;
        var X = WgO() ? new Hi(y_(), void 0) : null;
        k == 0 && X && (k = AE(bh(X)));
        k !== 0 && this.L0(k);
        t1z(this, this.IZ, this.IZ);
        this.player.DH(6)
    };
    g.r.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.player.O5();
        this.hZ = this.Em;
        g.r1(this.a8, this.va);
        this.va = this.CO = this.a8 = null;
        g.jb.prototype.unload.call(this);
        this.player.DH(5);
        f7(this)
    };
    g.r.C4 = function() {
        g.of(this.subscriptions);
        g.jb.prototype.C4.call(this)
    };
    g.r.Ie = function(k) {
        var X = g.Ar.apply(1, arguments);
        this.loaded && this.a8.rk.apply(this.a8, [k].concat(g.G(X)))
    };
    g.r.getAdState = function() {
        return this.jI
    };
    g.r.zr = function() {
        return this.va ? bh(this.va).zr : !1
    };
    g.r.uo = function() {
        return this.va ? bh(this.va).uo : !1
    };
    g.r.L0 = function(k, X) {
        this.Rj = k || 0;
        this.player.publish("progresssync", k, X);
        this.player.S6("onVideoProgress", k || 0)
    };
    g.r.getCurrentTime = function() {
        return this.Rj
    };
    g.r.getDuration = function() {
        return bh(this.va).getDuration() || 0
    };
    g.r.UE = function() {
        var k = bh(this.va);
        return k.j ? k.V + ci(k) : k.V
    };
    g.r.wk = function() {
        return bh(this.va).T
    };
    g.r.rP = function() {
        return Roc(bh(this.va))
    };
    g.r.IV = function() {
        var k = bh(this.va);
        return k.W > 0 ? k.W + ci(k) : k.W
    };
    g.r.getProgressState = function() {
        var k = bh(this.va),
            X = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !k.uu() && this.player.lR(),
            clipEnd: X.clipEnd,
            clipStart: X.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: this.getDuration(),
            ingestionTime: this.UE(),
            isAtLiveHead: this.isAtLiveHead(),
            loaded: this.wk(),
            seekableEnd: this.rP(),
            seekableStart: this.IV(),
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.r.isAtLiveHead = function() {
        return Roc(bh(this.va)) - this.getCurrentTime() <= 1
    };
    g.r.nextVideo = function() {
        this.va && this.va.nextVideo()
    };
    g.r.xg = function() {
        this.va && this.va.xg()
    };
    g.r.MzO = function(k) {
        k === 1 && (this.Vp = this.va ? bh(this.va) : null)
    };
    g.r.H0O = function() {
        var k = WgO() ? new Hi(y_(), void 0) : null;
        if (k) {
            var X = this.hZ;
            this.loaded && this.unload();
            this.va = k;
            this.Vp = null;
            X.key !== this.Em.key && (this.hZ = X, this.load())
        } else g.JB(this.va), this.va = null, this.loaded && (this.unload(), (k = this.Vp) && k.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(k.videoId, AE(k)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.r.CR = function() {
        var k = [this.Em],
            X = k.concat,
            V = EDB();
        Gk() && g.aB("yt-remote-cast-available") && V.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Jp = X.call(k, V);
        k = rO5() || this.Em;
        Ec(this, k);
        this.player.S6("onMdxReceiversChange")
    };
    g.r.NQO = function() {
        var k = rO5();
        Ec(this, k)
    };
    g.r.xUo = function() {
        this.hZ = rO5()
    };
    g.r.oLb = function() {
        this.xY = !0;
        f7(this);
        Ps = !1;
        Uc && xz(Uc, 1);
        Uc = null
    };
    g.r.tma = function() {
        this.xY = !1;
        f7(this);
        Ec(this, this.Em);
        this.hZ = this.Em;
        Ps = !1;
        Uc = null;
        this.player.playVideo()
    };
    g.r.l2 = function(k, X) {
        switch (k) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Jp;
            case "currentReceiver":
                return X && (X.key === "cast-selector-receiver" ? dB5() : Ec(this, X)), this.loaded ? this.hZ : this.Em;
            case "quickCast":
                return this.Jp.length === 2 && this.Jp[1].key === "cast-selector-receiver" ? (X && dB5(), !0) : !1
        }
    };
    g.r.xH = function() {
        this.va.xH()
    };
    g.r.So = function() {
        return !1
    };
    g.r.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.r.isLoggedIn = function() {
        var k, X;
        return ((k = g.k5("PLAYER_CONFIG")) == null ? void 0 : (X = k.args) == null ? void 0 : X.authuser) !== void 0 ? !0 : !(!g.k5("SESSION_INDEX") && !g.k5("LOGGED_IN"))
    };
    g.Oq("remote", miB);
})(_yt_player);