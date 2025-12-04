module.exports = [
"[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlarmScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function AlarmScreen({ onDismiss }) {
    const [audioReady, setAudioReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = new Audio("data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==");
        setAudioReady(true);
        const playRadarSound = ()=>{
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            } catch (e) {
                console.log("Audio context not available");
            }
        };
        playRadarSound();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 bg-black flex items-center justify-center z-50",
        initial: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full flex flex-col items-center justify-center space-y-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-center",
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: 0.2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white text-9xl font-light tracking-tight",
                            children: "06:00"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400 text-lg mt-4",
                            children: "Alarme"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-48 h-48 flex items-center justify-center",
                    children: [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute rounded-full border-2 border-gray-600",
                            style: {
                                width: 120 + i * 50,
                                height: 120 + i * 50
                            },
                            animate: {
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ],
                                opacity: [
                                    0.5,
                                    0.2,
                                    0.5
                                ]
                            },
                            transition: {
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Number.POSITIVE_INFINITY
                            }
                        }, i, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: onDismiss,
                    className: "mt-16 px-12 py-5 bg-red-600 text-white rounded-full text-2xl font-semibold hover:bg-red-700 transition",
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5
                    },
                    children: "Parar"
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetroTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const stations = [
    {
        time: "5:50",
        location: "Camaragibe",
        description: "Partida de casa",
        icon: "🏠"
    },
    {
        time: "6:10",
        location: "Estação Camaragibe",
        description: "Embarque no metrô",
        icon: "🚇"
    },
    {
        time: "7:20",
        location: "Estação Recife",
        description: "1h10 no metrô espremida",
        icon: "📍"
    },
    {
        time: "7:40",
        location: "Cais de Santa Rita",
        description: "20 min de ônibus lotado",
        icon: "🚌"
    },
    {
        time: "7:45",
        location: "Novo Hotel",
        description: "Chegada ao trabalho",
        icon: "💼"
    },
    {
        time: "12:45",
        location: "Volta para Casa",
        description: "Intervalo para casa",
        icon: "↩️"
    },
    {
        time: "14:15",
        location: "Estação Camaragibe",
        description: "Retorno à faculdade",
        icon: "📚"
    },
    {
        time: "18:30",
        location: "Universidade São Miguel",
        description: "Aulas de Enfermagem",
        icon: "🎓"
    },
    {
        time: "23:00",
        location: "Alberto Maia",
        description: "Chegada em casa",
        icon: "🌙"
    }
];
function MetroTimeline() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.1,
        triggerOnce: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-red-600 to-orange-600 transform -translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-12",
                children: stations.map((station, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`,
                        initial: {
                            opacity: 0,
                            x: index % 2 === 0 ? 100 : -100
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {
                            opacity: 0
                        },
                        transition: {
                            delay: index * 0.1,
                            duration: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-blue-600 mb-2",
                                            children: station.time
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-1",
                                            children: station.location
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: station.description
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-0 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "w-16 h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-2xl shadow-lg z-10",
                                    animate: inView ? {
                                        scale: [
                                            1,
                                            1.2,
                                            1
                                        ]
                                    } : {},
                                    transition: {
                                        delay: index * 0.1 + 0.3,
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY
                                    },
                                    children: station.icon
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BusFillingGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function BusFillingGame() {
    const [passengers, setPassengers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.3,
        triggerOnce: false
    });
    const maxPassengers = 50;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inView) {
            setIsVisible(true);
        }
    }, [
        inView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isVisible) return;
        const interval = setInterval(()=>{
            setPassengers((prev)=>{
                if (prev < maxPassengers) {
                    return prev + 1;
                }
                return prev;
            });
        }, 200);
        return ()=>clearInterval(interval);
    }, [
        isVisible
    ]);
    const addPassenger = ()=>{
        if (passengers < maxPassengers) {
            setPassengers((prev)=>prev + 1);
        }
    };
    const fillPercentage = passengers / maxPassengers * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "max-w-4xl mx-auto space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-yellow-400 rounded-full px-8 py-12 relative overflow-hidden shadow-2xl",
                initial: {
                    scale: 0.8,
                    opacity: 0
                },
                animate: isVisible ? {
                    scale: 1,
                    opacity: 1
                } : {},
                transition: {
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-4 left-1/4 w-6 h-6 bg-gray-800 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-4 right-1/4 w-6 h-6 bg-gray-800 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-10 gap-2 mb-6",
                        children: Array.from({
                            length: maxPassengers
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `w-full aspect-square rounded-lg flex items-center justify-center text-lg ${i < passengers ? "bg-red-500 text-white" : "bg-gray-200 text-gray-400"}`,
                                initial: {
                                    scale: 0
                                },
                                animate: i < passengers ? {
                                    scale: 1
                                } : {
                                    scale: 0
                                },
                                transition: {
                                    delay: i * 0.03
                                },
                                children: "👤"
                            }, i, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "bg-gradient-to-r from-red-500 to-orange-500 h-full",
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: `${fillPercentage}%`
                            },
                            transition: {
                                duration: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-lg font-bold text-gray-800",
                        children: [
                            passengers,
                            "/",
                            maxPassengers,
                            " Passageiros (",
                            Math.round(fillPercentage),
                            "%)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            passengers === maxPassengers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-red-100 border-l-4 border-red-600 p-6 rounded",
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-800 font-semibold text-lg",
                        children: "✓ Lotado — Situação diária de milhares de passageiros da RMR"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-700 mt-2",
                        children: "Essa é a realidade que Mirelly e tantos outros enfrentam todos os dias."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: addPassenger,
                    disabled: passengers === maxPassengers,
                    className: "px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition",
                    whileHover: {
                        scale: passengers === maxPassengers ? 1 : 1.05
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    children: "Adicionar Passageiro"
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MotoAppSimulator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MotoAppSimulator() {
    const [requested, setRequested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [arriving, setArriving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [arrived, setArrived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.5,
        triggerOnce: false
    });
    const handleRequest = ()=>{
        setRequested(true);
        setArriving(true);
        setTimeout(()=>{
            setArriving(false);
            setArrived(true);
        }, 4000);
    };
    const handleReset = ()=>{
        setRequested(false);
        setArriving(false);
        setArrived(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 mx-auto max-w-sm",
                initial: {
                    scale: 0.8,
                    opacity: 0
                },
                animate: inView ? {
                    scale: 1,
                    opacity: 1
                } : {},
                transition: {
                    duration: 0.6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-yellow-100 to-orange-100 p-4 min-h-screen flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-4 pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: "99 Moto"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: !requested ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex-1 flex flex-col items-center justify-center space-y-6",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-white rounded-lg h-48 relative border-2 border-gray-300 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-4xl",
                                                    children: "🗺️"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "absolute bottom-4 right-4 text-3xl bg-red-500 w-10 h-10 rounded-full flex items-center justify-center",
                                                animate: {
                                                    x: [
                                                        0,
                                                        -80,
                                                        -160,
                                                        -240
                                                    ],
                                                    y: [
                                                        0,
                                                        -30,
                                                        30,
                                                        0
                                                    ]
                                                },
                                                transition: {
                                                    duration: 3,
                                                    repeat: Number.POSITIVE_INFINITY
                                                },
                                                children: "🏍️"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 font-semibold",
                                                children: "Solicite uma moto agora"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: "Chegada estimada: 15 minutos"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: handleRequest,
                                        className: "w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-lg text-lg transition",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: "SOLICITAR MOTO"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "initial", true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this) : arriving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex-1 flex flex-col items-center justify-center space-y-6",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-white rounded-lg h-48 relative border-2 border-gray-300 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute text-4xl",
                                                    animate: {
                                                        x: [
                                                            -200,
                                                            0
                                                        ],
                                                        y: [
                                                            100,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 3
                                                    },
                                                    children: "🏍️"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute text-3xl",
                                                    animate: {
                                                        scale: [
                                                            0.5,
                                                            1
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: Number.POSITIVE_INFINITY
                                                    },
                                                    children: "📍"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "text-center",
                                        animate: {
                                            scale: [
                                                1,
                                                1.1,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Number.POSITIVE_INFINITY
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-gray-900",
                                                children: "Moto chegando em 15 minutos"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-2",
                                                children: "Motociclista: João | 4.9 ⭐"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "arriving", true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex-1 flex flex-col items-center justify-center space-y-6",
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "text-6xl",
                                        animate: {
                                            scale: [
                                                1,
                                                1.2,
                                                1
                                            ],
                                            rotate: [
                                                0,
                                                10,
                                                -10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Number.POSITIVE_INFINITY
                                        },
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl font-bold text-gray-900",
                                                children: "Moto Chegou!"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-2",
                                                children: "Seu motociclista está aqui"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: handleReset,
                                        className: "w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-4 rounded-lg text-lg transition",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: "RECOMEÇAR"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "arrived", true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            arrived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mt-8 p-6 bg-yellow-50 rounded-lg border-2 border-yellow-400",
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800 font-semibold text-center",
                    children: "Apenas scrollando você libera o próximo conteúdo — como um captcha humano."
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MotorcycleGrowthChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const data = [
    {
        year: 2020,
        value: 58976
    },
    {
        year: 2021,
        value: 58976
    },
    {
        year: 2022,
        value: 58976
    },
    {
        year: 2023,
        value: 58976
    },
    {
        year: 2024,
        value: 58976 + 93900
    },
    {
        year: 2025,
        value: 58976 + 93900
    }
];
function MotorcycleGrowthChart() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.3,
        triggerOnce: false
    });
    const maxValue = Math.max(...data.map((d)=>d.value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "w-full bg-white p-8 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end justify-between space-x-2 h-96",
                children: data.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex-1 flex flex-col items-center space-y-2",
                        initial: {
                            height: 0
                        },
                        animate: inView ? {
                            height: "auto"
                        } : {},
                        transition: {
                            delay: i * 0.15,
                            duration: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-full bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg relative group",
                                style: {
                                    height: `${item.value / maxValue * 300}px`
                                },
                                initial: {
                                    scaleY: 0
                                },
                                animate: inView ? {
                                    scaleY: 1
                                } : {},
                                transition: {
                                    delay: i * 0.15 + 0.2,
                                    duration: 0.8
                                },
                                origin: "bottom",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition",
                                    children: item.value.toLocaleString("pt-BR")
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-sm font-semibold text-gray-700",
                                initial: {
                                    opacity: 0
                                },
                                animate: inView ? {
                                    opacity: 1
                                } : {},
                                transition: {
                                    delay: i * 0.15 + 0.4
                                },
                                children: item.year
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.year, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Quantidade de motocicletas emplacadas por ano em Pernambuco"
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RidesChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const rideStages = [
    {
        period: "2022",
        rides: 20000,
        label: "20K"
    },
    {
        period: "Início 2024",
        rides: 40000,
        label: "40K"
    },
    {
        period: "Hoje",
        rides: 50000,
        label: "50K"
    }
];
function RidesChart() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.3,
        triggerOnce: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "w-full space-y-8",
        children: [
            rideStages.map((stage, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center space-x-4",
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: inView ? {
                        opacity: 1,
                        x: 0
                    } : {},
                    transition: {
                        delay: i * 0.2,
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full h-20 relative overflow-hidden flex items-center px-6",
                            initial: {
                                width: 0
                            },
                            animate: inView ? {
                                width: "100%"
                            } : {},
                            transition: {
                                delay: i * 0.2 + 0.2,
                                duration: 0.8
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "text-white font-bold text-2xl",
                                initial: {
                                    opacity: 0
                                },
                                animate: inView ? {
                                    opacity: 1
                                } : {},
                                transition: {
                                    delay: i * 0.2 + 0.6
                                },
                                children: stage.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-fit text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-gray-900",
                                    children: stage.period
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        stage.rides.toLocaleString("pt-BR"),
                                        " corridas/dia"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "mt-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500",
                initial: {
                    opacity: 0
                },
                animate: inView ? {
                    opacity: 1
                } : {},
                transition: {
                    delay: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800 text-sm",
                    children: "Crescimento de ~50% em apenas dois anos no estado, impulsionado pela expansão dos serviços de entrega e transporte de passageiros."
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeathsChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function DeathsChart() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.3,
        triggerOnce: false
    });
    const deaths = 693;
    const victims = 31265;
    const deathsPerDay = Math.round(deaths / 365);
    const victimsPerDay = Math.round(victims / 365);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "w-full space-y-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-red-50 p-8 rounded-lg border-l-4 border-red-600",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: inView ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: 0.6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm font-semibold mb-2",
                                    children: "MORTES POR DIA EM 2023"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-5xl font-bold text-red-600",
                                    children: deathsPerDay
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 sm:mt-0 flex space-x-1 flex-wrap justify-center sm:justify-end",
                            children: Array.from({
                                length: Math.min(deathsPerDay, 3)
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "text-5xl",
                                    initial: {
                                        scale: 0
                                    },
                                    animate: inView ? {
                                        scale: 1
                                    } : {},
                                    transition: {
                                        delay: 0.6 + i * 0.2
                                    },
                                    children: "💀"
                                }, i, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-white border-2 border-red-300 p-8 rounded-lg",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: inView ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    delay: 0.2,
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm font-semibold mb-4",
                        children: "TOTAL DE VÍTIMAS EM 2023"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl font-bold text-red-600 mb-4",
                        children: victims.toLocaleString("pt-BR")
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                        initial: {
                            scaleX: 0
                        },
                        animate: inView ? {
                            scaleX: 1
                        } : {},
                        transition: {
                            delay: 0.4,
                            duration: 0.8
                        },
                        origin: "left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "bg-red-600 h-full",
                            initial: {
                                width: 0
                            },
                            animate: inView ? {
                                width: "100%"
                            } : {},
                            transition: {
                                delay: 0.6,
                                duration: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-sm mt-4",
                        children: "Aumento de aproximadamente 13,6% em relação ao ano anterior"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                initial: {
                    opacity: 0
                },
                animate: inView ? {
                    opacity: 1
                } : {},
                transition: {
                    delay: 0.4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm font-semibold mb-2",
                                children: "LEVADAS A HOSPITAIS POR DIA"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-bold text-orange-600",
                                children: "~20"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mt-2",
                                children: "Lotando leitos de urgência e traumatologia"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm font-semibold mb-2",
                                children: "VÍTIMAS FATAIS"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-bold text-yellow-600",
                                children: "43%"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mt-2",
                                children: "Das mortes no trânsito do Recife em 2024"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CyclistsChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const cyclistData = [
    {
        type: "Ciclistas Mortos",
        value: "Alto",
        color: "bg-red-500",
        icon: "💀"
    },
    {
        type: "Feridos Graves",
        value: "Crescente",
        color: "bg-orange-500",
        icon: "🤕"
    },
    {
        type: "Subnotificação",
        value: "Significativa",
        color: "bg-yellow-500",
        icon: "📊"
    },
    {
        type: "Insegurança Percebida",
        value: "Muito Alta",
        color: "bg-red-600",
        icon: "⚠️"
    }
];
function CyclistsChart() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.3,
        triggerOnce: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                children: cyclistData.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `${item.color} text-white rounded-lg p-6`,
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: inView ? {
                            opacity: 1,
                            scale: 1
                        } : {},
                        transition: {
                            delay: i * 0.1,
                            duration: 0.6
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-4",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-2",
                                children: item.type
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90",
                                children: item.value
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mt-8",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: inView ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    delay: 0.5,
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-blue-900 mb-4",
                        children: "Realidades do Ciclista"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3 text-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 font-bold",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Desrespeito de motoristas e invasão frequente de ciclofaixas"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 font-bold",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Falta de iluminação, sinalização e fiscalização adequadas"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 font-bold",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ciclovias desconectadas que não formam uma rede coesa"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 font-bold",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Medo e vulnerabilidade especialmente em horários noturnos"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetroMapComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function MetroMapComponent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "w-full",
        initial: {
            opacity: 0,
            scale: 0.95
        },
        whileInView: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.8
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-4 sm:p-8 rounded-lg shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/mapa-metro-recife.jpg",
                        alt: "Mapa do Metrô do Recife com as três linhas: Centro (laranja), Sul (vermelha) e Azul. Mostra as estações integradas com ônibus e trens diesel.",
                        className: "w-full h-auto rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.3,
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-orange-900 mb-2",
                                    children: "Linha Centro"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-orange-800",
                                    children: "Laranja - Principal eixo de mobilidade"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-red-50 rounded-lg border-l-4 border-red-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-red-900 mb-2",
                                    children: "Linha Sul"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-800",
                                    children: "Vermelha - Conecta sul e centro"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-blue-900 mb-2",
                                    children: "Linha Azul"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-800",
                                    children: "Azul - Expansão recente"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CyclePathMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function CyclePathMap() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.3,
        triggerOnce: false
    });
    const areas = [
        {
            name: "Centro",
            coverage: 85,
            connected: true
        },
        {
            name: "Zona Oeste",
            coverage: 45,
            connected: false
        },
        {
            name: "Zona Sul",
            coverage: 60,
            connected: false
        },
        {
            name: "Zona Norte",
            coverage: 35,
            connected: false
        },
        {
            name: "Olinda",
            coverage: 50,
            connected: false
        },
        {
            name: "Jaboatão",
            coverage: 40,
            connected: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "w-full space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600",
                initial: {
                    opacity: 0
                },
                animate: inView ? {
                    opacity: 1
                } : {},
                transition: {
                    duration: 0.6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800",
                    children: "O Recife possui 191,5 km de rotas cicloviárias até 2024, mas muitos trechos permanecem desconectados, com ciclofaixas pintadas em vez de ciclovias fisicamente separadas."
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: areas.map((area, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center space-x-4",
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            delay: i * 0.1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-fit w-32",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-gray-900",
                                        children: area.name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600",
                                        children: area.connected ? "✓ Conectado" : "✗ Desconectado"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex-1 bg-gray-200 rounded-full h-6 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `h-full ${area.connected ? "bg-green-500" : "bg-red-500"}`,
                                    initial: {
                                        width: 0
                                    },
                                    animate: inView ? {
                                        width: `${area.coverage}%`
                                    } : {},
                                    transition: {
                                        delay: i * 0.1 + 0.2,
                                        duration: 0.8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-fit text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-gray-900",
                                    children: [
                                        area.coverage,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8",
                initial: {
                    opacity: 0
                },
                animate: inView ? {
                    opacity: 1
                } : {},
                transition: {
                    delay: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 p-4 rounded-lg border-l-4 border-red-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-red-900 mb-2",
                                children: "Desconexão"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-800",
                                children: "Ciclovias fragmentadas que não conectam pontos-chave"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-orange-900 mb-2",
                                children: "Qualidade Baixa"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-orange-800",
                                children: "Ciclofaixas pintadas em vez de ciclovias protegidas"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-yellow-900 mb-2",
                                children: "Periferias Negligenciadas"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-yellow-800",
                                children: "Cobertura menor nas zonas oeste e norte"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-purple-900 mb-2",
                                children: "Falta de Integração"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-purple-800",
                                children: "Sem conexão efetiva com transporte público"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/TextSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const colorClasses = {
    blue: "border-blue-600 text-blue-950",
    red: "border-red-600 text-red-950",
    orange: "border-orange-600 text-orange-950"
};
function TextSection({ title, blocks, color }) {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        threshold: 0.1,
        triggerOnce: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4",
        style: {
            borderTopColor: color === "blue" ? "#1A2A6C" : color === "red" ? "#D72638" : "#F46036"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: `text-4xl sm:text-5xl font-light mb-12 pb-6 border-b-4 ${colorClasses[color]}`,
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: inView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.6
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/TextSection.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: blocks.map((block, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "text-lg leading-relaxed text-gray-800",
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: index * 0.1,
                                duration: 0.6
                            },
                            children: block
                        }, index, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/TextSection.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/TextSection.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/metro-recife-map/components/TextSection.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/metro-recife-map/components/TextSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Navigation() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
        className: "fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200",
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.6
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "text-2xl font-light text-blue-950",
                        whileHover: {
                            scale: 1.05
                        },
                        children: "Mobilidade RMR"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/Navigation.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "text-gray-600 hover:text-blue-600 transition",
                        whileHover: {
                            scale: 1.1
                        },
                        children: "☰"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/Navigation.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/metro-recife-map/components/Navigation.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/metro-recife-map/components/Navigation.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/metro-recife-map/components/Navigation.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].footer, {
        className: "bg-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8",
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        transition: {
            duration: 0.8
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Sobre"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm leading-relaxed",
                                    children: "Uma investigação jornalística sobre mobilidade urbana, infraestrutura e o custo humano dos deslocamentos na Região Metropolitana do Recife."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Seções"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-gray-300 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-white transition",
                                                children: "Introdução"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-white transition",
                                                children: "O Custo Humano"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-white transition",
                                                children: "Sonho da Mobilidade"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-white transition",
                                                children: "Alternativas"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Dados"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm leading-relaxed",
                                    children: "Baseado em entrevistas, dados públicos e relatórios de mobilidade urbana da RMR e Pernambuco."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-700 pt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-400 text-sm",
                        children: "© 2025 Investigação Jornalística. Todos os direitos reservados."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/metro-recife-map/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/components/HomePage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$MetroTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/MetroTimeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$BusFillingGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/BusFillingGame.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$MotoAppSimulator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/MotoAppSimulator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$MotorcycleGrowthChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/infographics/MotorcycleGrowthChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$RidesChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/infographics/RidesChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$DeathsChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/infographics/DeathsChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$CyclistsChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/infographics/CyclistsChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$maps$2f$MetroMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/maps/MetroMap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$maps$2f$CyclePathMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/maps/CyclePathMap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$TextSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/TextSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/Footer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "bg-white overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 bg-gradient-to-b from-white to-blue-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "max-w-4xl w-full text-center",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl sm:text-6xl lg:text-7xl font-light mb-6 text-blue-950 leading-tight",
                            children: "Mobilidade em Recife"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl sm:text-2xl text-gray-600 font-light leading-relaxed",
                            children: "O Custo Humano da Rotina"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 w-24 bg-red-600 mx-auto mt-8"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$TextSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Introdução: Mais um Dia",
                blocks: [
                    `São cinco da manhã e o dia ainda nem começou direito, mas o sol, sempre apressado no Recife, já se espalha como se houvesse um para cada habitante da cidade. O corpo sente o peso de ontem, mas a rotina não espera, não pede licença, não pergunta se você está pronto. Apenas segue.`,
                    `Do mesmo jeito começa, de segunda a sexta, a jornada de Mirelly, jovem aprendiz durante o dia e universitária de Enfermagem à noite, que atravessa a Região Metropolitana para mais um dia. Uma maratona que ninguém escolhe, mas milhões enfrentam.`,
                    `Moradora de Camaragibe, mais precisamente do bairro de Alberto Maia, Mirelly desperta às cinco da manhã. Não há luxo de tempo. Ela corre para se arrumar, tomar banho e comer alguma coisa antes de sair. Acordar mais cedo significaria abrir mão de quinze minutinhos daquele sono que, para uma rotina como a dela, vale ouro. Às 5:50, ela tranca a porta e desce a rua rumo à Estação Camaragibe. É o início de mais um dia igual aos outros.`,
                    `Ela pega o metrô na última estação da Linha Centro às 6h10. Mirelly segue todo o percurso até a Estação Recife, espremida entre mochilas, cotovelos e sonos acumulados. Lá se vão uma hora e dez minutos.`,
                    `A corrida da manhã ainda não terminou. Falta ainda uma última perna: 20 minutos da Estação Recife até o Cais de Santa Rita. Em pé, espremida e o ônibus, quase sempre com o ar condicionado quebrado, no calor das oito da manhã. Vinte minutos que, para quem viaja como sardinha em lata, se alongam como horas. A etapa final: cinco minutos de caminhada até o trabalho. E é ali, ao chegar, que Mirelly finalmente pode respirar. Ironicamente, o único momento da manhã em que ela "descansa" é quando a jornada se inicia.`
                ],
                color: "blue"
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "A Rotina de Mirelly"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$MetroTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$TextSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "O Custo Humano da Mobilidade",
                blocks: [
                    `A rotina de Mirelly não é um ponto fora da curva; é, na verdade, o retrato de um sistema que se arrasta muito antes de o sol nascer. O transporte público da Região Metropolitana do Recife (ônibus, metrô, terminais e linhas de integração) opera num regime de sobrevivência.`,
                    `Há anos, fala-se de modernização, reorganização e ampliação, mas a realidade cotidiana é outra: composições que funcionam no limite, corredores exclusivos improvisados ou compartilhados, terminais com infraestrutura desgastada e obras que nunca terminam no prazo anunciado.`,
                    `Quando se fala em mobilidade, o debate público costuma se prender a números: tempo médio de deslocamento, quantidade de linhas, extensão de corredores, orçamento. Mas existe um dado que raramente entra nos relatórios oficiais: o custo humano desses deslocamentos.`,
                    `Para Mirelly, esse custo se mede no corpo e na cabeça. O sono sempre curto, o cansaço acumulado, a tensão permanente de depender de um metrô que pode parar, de um ônibus que pode atrasar, de uma conexão que talvez não chegue.`,
                    `Se Mirelly chega às 7h45 no trabalho, a volta para casa só termina perto das 23h, depois da faculdade. O tempo livre, quando existe, é mínimo. Sobram poucos minutos para conversar com a família, ajudar em casa, descansar ou simplesmente existir sem correr.`
                ],
                color: "red"
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "Lotação Diária"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 mb-8 max-w-2xl mx-auto",
                            children: "A medida que você navega por essa história, o ônibus vai enchendo com as realidades de milhares de pessoas na Grande Recife."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$BusFillingGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "Linhas do Metrô do Recife"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$maps$2f$MetroMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$TextSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "O Sonho da Mobilidade",
                blocks: [
                    `Ainda cedo e a cidade já revela sua primeira verdade do dia: mover-se é difícil. As ruas engarrafadas antes das sete, as filas nos terminais, a espera demorada por um ônibus que talvez venha, ou talvez não.`,
                    `No meio desse cotidiano marcado por atraso, calor e insegurança, cresce um desejo coletivo, quase instintivo: escapar. E, para muitos, essa fuga tem forma e som. Uma moto que corta o trânsito como uma linha reta desenhada sobre o caos.`,
                    `É nesse cenário que a moto deixa de ser apenas um objeto de transporte e passa a representar uma solução possível, acessível e concreta. A motivação é clara. Primeiro, o tempo: o que antes levava duas horas, às vezes cai para trinta minutos.`,
                    `Esses fatores explicam o crescimento constante da presença das motos pelas ruas. Nos últimos anos, aumentaram não apenas as vendas, mas também as compras financiadas, parceladas em longos prazos para caber no orçamento mensal.`,
                    `Mas todo sonho tem outro lado. E, neste caso, ele aparece nas estatísticas. Em toda a Grande Recife, cresce de forma preocupante o número de acidentes envolvendo motociclistas. São colisões, quedas, atropelamentos, muitos deles resultando em ferimentos graves e mortes.`
                ],
                color: "orange"
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "99 Moto"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 mb-8 max-w-2xl mx-auto",
                            children: "A solução rápida que atrai milhares diariamente, mas traz riscos crescentes."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$MotoAppSimulator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "Crescimento da Frota de Motocicletas"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto",
                            children: "Entre 2020 e 2025 foram emplacadas aproximadamente 294.884 motos em Pernambuco — média de ~58.976 motos por ano."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$MotorcycleGrowthChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-red-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "Corridas de Moto por Aplicativo"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto",
                            children: "O crescimento dos serviços de motos por aplicativo de transporte de passageiros cresceu ~50% em apenas dois anos."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$RidesChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "O Preço da Liberdade"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto",
                            children: "Em 2023, Pernambuco registrou 31.265 vítimas de acidentes com motos e 693 mortes. Aumento de aproximadamente 13,6% no total de vítimas."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$DeathsChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$TextSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Alternativas de Mobilidade",
                blocks: [
                    `Diante do colapso do transporte público na Região Metropolitana do Recife (RMR), a bicicleta é aclamada como uma alternativa viável, sustentável e economicamente acessível.`,
                    `O discurso oficial na RMR frequentemente incentiva os modais ativos, prometendo uma mobilidade mais humana e sustentável. As prefeituras implementam quilômetros de rotas cicloviárias (Recife atingiu 191,5 km até 2024).`,
                    `No entanto, a realidade da infraestrutura contrasta drasticamente com a propaganda: Muitos trechos construídos são desconectados e não formam uma rede coesa. Frequentemente, são implementadas ciclofaixas (separação por pintura) em vez de ciclovias (separada fisicamente do tráfego).`,
                    `Quem depende da bicicleta para ir ao trabalho ou à faculdade enfrenta um ambiente hostil e perigoso: Há desrespeito de motoristas, invasão de ciclofaixas e a falta de fiscalização e manutenção.`,
                    `A persistência de dados negativos reforça o medo e afasta potenciais usuários da alternativa sustentável. O Recife registrou um número alto de ciclistas mortos, superando as vítimas fatais entre motoristas de carro e ônibus.`
                ],
                color: "blue"
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-green-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "Ciclovias do Recife"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto",
                            children: "Recife alcançou 191,5 km de rotas cicloviárias, mas muitos trechos permanecem desconectados."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$maps$2f$CyclePathMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "text-4xl sm:text-5xl font-light text-blue-950 text-center mb-12",
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: "Acidentes com Ciclistas"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto",
                            children: "A vulnerabilidade do ciclista é alta, especialmente em um trânsito agressivo."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$infographics$2f$CyclistsChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$TextSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Conclusão: Repensar a Mobilidade",
                blocks: [
                    `O futuro da mobilidade na Região Metropolitana do Recife depende de decisões que vão muito além de abrir novas vias. Exige planejamento integrado, investimento público consistente e uma mudança profunda de prioridades: colocar as pessoas e não apenas os veículos no centro das políticas urbanas.`,
                    `Os desafios são urgentes e visíveis. O primeiro é a recuperação e modernização do transporte público, especialmente ônibus e metrô, que hoje não atendem à demanda e aprofundam a sensação de abandono dos usuários.`,
                    `A construção de um futuro diferente passa por soluções coletivas e articuladas. A integração entre modais é fundamental: ônibus, metrô, bicicletas e transporte por aplicativo precisam funcionar de forma complementar.`,
                    `Pensar em mobilidade é pensar em direitos. Dividir a cidade de forma justa significa garantir que todas as pessoas possam se deslocar com segurança, rapidez e dignidade, independentemente do bairro onde vivem ou da renda que têm. Quando a mobilidade funciona, a cidade respira melhor e as pessoas também.`
                ],
                color: "red"
            }, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/metro-recife-map/components/HomePage.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/metro-recife-map/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$AlarmScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/AlarmScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$HomePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/metro-recife-map/components/HomePage.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [alarmDismissed, setAlarmDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: !alarmDismissed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$AlarmScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onDismiss: ()=>setAlarmDismissed(true)
            }, "alarm", false, {
                fileName: "[project]/Downloads/metro-recife-map/app/page.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$metro$2d$recife$2d$map$2f$components$2f$HomePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/metro-recife-map/app/page.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, this)
            }, "home", false, {
                fileName: "[project]/Downloads/metro-recife-map/app/page.tsx",
                lineNumber: 17,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/metro-recife-map/app/page.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/metro-recife-map/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_metro-recife-map_bf1bb17b._.js.map