'use client';
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Avatar: () => Avatar,
  Badge: () => Badge,
  BottomNav: () => BottomNav,
  Button: () => Button,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Chip: () => Chip,
  CodeInput: () => CodeInput,
  Dialog: () => Dialog,
  EmptyState: () => EmptyState,
  Field: () => Field,
  Icon: () => Icon,
  Input: () => Input,
  Logo: () => Logo,
  LogoMark: () => LogoMark,
  LogoWordmark: () => LogoWordmark,
  OfficialTripCard: () => OfficialTripCard,
  OptionToggle: () => OptionToggle,
  PhotoUploader: () => PhotoUploader,
  ProtectionPanel: () => ProtectionPanel,
  RatingStars: () => RatingStars,
  RequestCard: () => RequestCard,
  RouteLine: () => RouteLine,
  SegmentedTabs: () => SegmentedTabs,
  Select: () => Select,
  StatusTimeline: () => StatusTimeline,
  StepProgress: () => StepProgress,
  Switch: () => Switch,
  Textarea: () => Textarea,
  Toast: () => Toast,
  TopNav: () => TopNav,
  TripBanner: () => TripBanner,
  UnderlineTabs: () => UnderlineTabs,
  VerificationRow: () => VerificationRow,
  VerifiedMark: () => VerifiedMark,
  VerifiedName: () => VerifiedName,
  defaultBottomNavItems: () => defaultBottomNavItems,
  defaultTopNavItems: () => defaultTopNavItems
});
module.exports = __toCommonJS(index_exports);

// src/components/brand/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var DEFAULT_MARK = "./assets/bledi-b-mark.png";
var TAGLINE = "Le lien entre ici et l\xE0-bas";
function tones(tone, color) {
  if (tone === "mono") return { tile: color || "var(--bledi-ink-900)", word: color || "var(--bledi-ink-900)", sub: color || "var(--bledi-ink-900)", rule: color || "var(--bledi-ink-900)" };
  if (tone === "onDark") return { tile: "var(--bledi-green-700)", word: "var(--bledi-gold-400)", sub: "var(--text-on-dark-muted)", rule: "rgba(244,241,234,.5)" };
  return { tile: "var(--bledi-green-700)", word: "var(--bledi-green-700)", sub: "var(--text-secondary)", rule: "var(--border-default)" };
}
function LogoMark({ size = 40, shape = "squircle", tone = "onLight", color, tileColor, markSrc = DEFAULT_MARK, style, ...rest }) {
  const t = tones(tone, color);
  if (tileColor) t.tile = tileColor;
  const radius = shape === "circle" ? "50%" : shape === "square" ? Math.round(size * 0.08) : Math.round(size * 0.24);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      role: "img",
      "aria-label": "Bledi",
      style: {
        width: size,
        height: size,
        flex: "0 0 auto",
        boxSizing: "border-box",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: t.tile,
        borderRadius: radius,
        overflow: "hidden",
        ...style
      },
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: markSrc, alt: "", style: { width: size * 0.62, height: size * 0.62, display: "block", objectFit: "contain" } })
    }
  );
}
function LogoWordmark({ size = 28, tone = "onLight", color, style, ...rest }) {
  const t = { word: color || tones(tone).word };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        color: t.word,
        whiteSpace: "nowrap",
        ...style
      },
      ...rest,
      children: "Bledi"
    }
  );
}
function Tagline({ size, tone, color, rules }) {
  const t = tones(tone, color);
  const line = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { height: 1, width: size * 0.9, background: t.rule, flex: "0 0 auto" } });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: size * 0.45, color: t.sub, fontFamily: "var(--font-sans)", fontWeight: "var(--weight-medium)", fontSize: size, lineHeight: 1.2, letterSpacing: "0.01em", whiteSpace: "nowrap" }, children: [
    rules ? line : null,
    TAGLINE,
    rules ? line : null
  ] });
}
function Logo({
  variant = "horizontal",
  size = 40,
  tone = "onLight",
  color,
  tagline = false,
  shape,
  tileColor,
  markSrc = DEFAULT_MARK,
  href,
  style,
  ...rest
}) {
  const t = tones(tone, color);
  const wrap = (children, extra) => {
    const El = href ? "a" : "span";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      El,
      {
        href,
        "aria-label": "Bledi",
        style: { display: "inline-flex", textDecoration: "none", ...extra, ...style },
        ...rest,
        children
      }
    );
  };
  if (tileColor) t.tile = tileColor;
  if (variant === "mark") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size, shape: shape || "squircle", tone, color, tileColor, markSrc, style, ...rest });
  if (variant === "wordmark") {
    return wrap(
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: size * 0.16 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoWordmark, { size: size * 0.72, tone, color }),
        tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tagline, { size: size * 0.2, tone, color }) : null
      ] }),
      { alignItems: "center" }
    );
  }
  if (variant === "stacked") {
    return wrap(
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", flexDirection: "column", alignItems: "center", gap: size * 0.28 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size, shape: shape || "squircle", tone, color, tileColor, markSrc }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoWordmark, { size: size * 0.62, tone, color }),
        tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tagline, { size: size * 0.17, tone, color }) : null
      ] }),
      { flexDirection: "column", alignItems: "center" }
    );
  }
  if (variant === "compact") {
    return wrap(
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "span",
        {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: size * 0.26,
            padding: `${size * 0.16}px ${size * 0.4}px ${size * 0.16}px ${size * 0.22}px`,
            background: t.tile,
            borderRadius: "var(--radius-pill)",
            boxSizing: "border-box"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: markSrc, alt: "", style: { width: size * 0.56, height: size * 0.56, display: "block", objectFit: "contain" } }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoWordmark, { size: size * 0.52, tone: "mono", color: tone === "mono" ? "var(--bledi-neutral-000)" : "var(--bledi-gold-400)" })
          ]
        }
      ),
      { alignItems: "center" }
    );
  }
  if (variant === "appIcon") {
    return wrap(
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "span",
        {
          style: {
            width: size,
            height: size,
            boxSizing: "border-box",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: size * 0.045,
            padding: size * 0.1,
            background: t.tile,
            borderRadius: size * 0.22
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: markSrc, alt: "", style: { width: size * 0.42, height: size * 0.42, display: "block", objectFit: "contain" } }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoWordmark, { size: size * 0.2, tone: "mono", color: "var(--bledi-gold-400)" }),
            tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tagline, { size: size * 0.052, color: "rgba(255,255,255,.86)", tone: "mono", rules: true }) : null
          ]
        }
      ),
      { alignItems: "center" }
    );
  }
  return wrap(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: size * 0.28 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size, shape: shape || "squircle", tone, color, tileColor, markSrc }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: size * 0.08 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoWordmark, { size: size * 0.58, tone, color }),
        tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tagline, { size: size * 0.17, tone, color }) : null
      ] })
    ] }),
    { alignItems: "center" }
  );
}

// src/components/core/Alert.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var alertTones = {
  notice: { background: "var(--surface-notice)", border: "1px solid var(--border-notice)", icon: "var(--bledi-gold-600)" },
  neutral: { background: "var(--surface-muted)", border: "1px solid transparent", icon: "var(--text-secondary)" },
  outline: { background: "var(--surface-card)", border: "1px solid var(--border-default)", icon: "var(--text-secondary)" },
  danger: { background: "var(--bledi-green-900)", border: "1px solid transparent", icon: "#FFFFFF" }
};
function Alert({ tone = "notice", icon, style, children, ...rest }) {
  const t = alertTones[tone];
  const onDark = tone === "danger";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      style: {
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        background: t.background,
        border: t.border,
        borderRadius: "var(--radius-lg)",
        padding: "12px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-normal)",
        color: onDark ? "var(--text-accent)" : "var(--text-primary)",
        textAlign: onDark ? "center" : "left",
        justifyContent: onDark ? "center" : "flex-start",
        fontWeight: onDark ? "var(--weight-semibold)" : "var(--weight-regular)",
        ...style
      },
      ...rest,
      children: [
        icon ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { color: t.icon, display: "inline-flex", flex: "0 0 auto", marginTop: "1px" }, children: icon }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children })
      ]
    }
  );
}

// src/components/core/Avatar.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var avatarSizes = { sm: 32, md: 40, lg: 56 };
function Avatar({ initial, size = "md", tone = "brand", style, ...rest }) {
  const px = avatarSizes[size];
  const dark = tone === "brand";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "span",
    {
      style: {
        width: px,
        height: px,
        flex: "0 0 auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        background: dark ? "var(--bledi-green-700)" : "var(--surface-muted)",
        color: dark ? "#FFFFFF" : "var(--text-primary)",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--weight-semibold)",
        fontSize: px * 0.4,
        lineHeight: 1,
        ...style
      },
      ...rest,
      children: initial
    }
  );
}

// src/components/core/Badge.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var badgeTones = {
  neutral: { background: "var(--surface-muted)", color: "var(--text-primary)", border: "1px solid transparent" },
  verified: { background: "var(--surface-notice)", color: "var(--bledi-gold-600)", border: "1px solid var(--border-notice)" },
  brand: { background: "var(--bledi-green-100)", color: "var(--text-brand)", border: "1px solid transparent" },
  onDark: { background: "rgba(233,185,73,0.14)", color: "var(--text-accent)", border: "1px solid rgba(233,185,73,0.3)" },
  danger: { background: "var(--surface-danger)", color: "var(--text-danger)", border: "1px solid transparent" }
};
function Badge({ tone = "neutral", icon, caps = false, style, children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: caps ? "var(--tracking-caps)" : "var(--tracking-normal)",
        textTransform: caps ? "uppercase" : "none",
        padding: "5px 10px",
        borderRadius: "var(--radius-pill)",
        lineHeight: 1.2,
        ...badgeTones[tone],
        ...style
      },
      ...rest,
      children: [
        icon,
        children
      ]
    }
  );
}

// src/components/core/Button.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var btnBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--weight-medium)",
  borderRadius: "var(--radius-pill)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "var(--transition-default)",
  lineHeight: 1
};
var btnSizes = {
  sm: { fontSize: "var(--text-sm)", padding: "9px 16px", minHeight: "34px" },
  md: { fontSize: "var(--text-base)", padding: "12px 22px", minHeight: "44px" },
  lg: { fontSize: "var(--text-md)", padding: "15px 28px", minHeight: "52px" }
};
var btnVariants = {
  primary: { background: "var(--action-primary-bg)", color: "var(--action-primary-fg)" },
  accent: { background: "var(--action-accent-bg)", color: "var(--action-accent-fg)", fontWeight: "var(--weight-semibold)" },
  quiet: { background: "var(--action-quiet-bg)", color: "var(--action-quiet-fg)" },
  outline: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border-default)" },
  outlineOnDark: { background: "rgba(255,255,255,0.06)", color: "var(--text-on-dark)", borderColor: "rgba(255,255,255,0.22)" },
  ghost: { background: "transparent", color: "var(--text-brand)" }
};
function Button({
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft,
  iconRight,
  as = "button",
  asChild = false,
  style,
  children,
  ...rest
}) {
  const styleFinal = {
    ...btnBase,
    ...btnSizes[size],
    ...btnVariants[variant],
    width: block ? "100%" : void 0,
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? "none" : void 0,
    ...style
  };
  if (asChild && React.isValidElement(children)) {
    const enfant = children;
    return React.cloneElement(
      enfant,
      // Le style de l-enfant l-emporte : c-est lui qu-on habille, pas l-inverse.
      { ...rest, style: { ...styleFinal, ...enfant.props.style } },
      iconLeft,
      enfant.props.children,
      iconRight
    );
  }
  const Tag = as;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    Tag,
    {
      disabled: Tag === "button" ? disabled : void 0,
      style: styleFinal,
      ...rest,
      children: [
        iconLeft,
        children,
        iconRight
      ]
    }
  );
}

// src/components/core/Card.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Card({ tone = "light", padding = "var(--space-5)", style, children, ...rest }) {
  const dark = tone === "dark";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      style: {
        background: dark ? "var(--gradient-panel)" : "var(--surface-card)",
        color: dark ? "var(--text-on-dark)" : "var(--text-primary)",
        border: dark ? "none" : "1px solid var(--border-default)",
        borderRadius: "var(--radius-xl)",
        boxShadow: dark ? "var(--shadow-panel)" : "var(--shadow-card)",
        padding,
        ...style
      },
      ...rest,
      children
    }
  );
}

// src/components/core/Chip.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Chip({ icon, selected = false, forbidden = false, style, children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        color: forbidden ? "var(--text-primary)" : "var(--text-primary)",
        background: selected ? "var(--surface-selected)" : "var(--surface-card)",
        border: "1px solid " + (selected ? "var(--border-strong)" : "var(--border-default)"),
        borderRadius: "var(--radius-pill)",
        padding: "9px 16px",
        lineHeight: 1.2,
        ...style
      },
      ...rest,
      children: [
        icon ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { color: forbidden ? "var(--text-danger)" : "var(--text-brand)", display: "inline-flex" }, children: icon }) : null,
        children
      ]
    }
  );
}

// src/components/core/EmptyState.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function EmptyState({ icon, title, description, action, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-10) var(--space-6)",
        textAlign: "center",
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: {
          width: 44,
          height: 44,
          borderRadius: "var(--radius-pill)",
          background: "var(--surface-muted)",
          color: "var(--text-secondary)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "var(--space-4)"
        }, children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { fontSize: "var(--text-md)", fontWeight: "var(--weight-semibold)", color: "var(--text-primary)" }, children: title }),
        description ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: "4px" }, children: description }) : null,
        action ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { marginTop: "var(--space-5)" }, children: action }) : null
      ]
    }
  );
}

// src/components/core/Icon.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var iconPaths = {
  "inbox": ["M22 12h-6l-2 3h-4l-2-3H2", "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"],
  "plane": ["M14.64 2.34a1.88 1.88 0 0 1 2.66 2.66L14 8.3l1.4 7.3-1.9 1.9-2.7-5.4-3.1 3.1.3 2.4-1.4 1.4-1.9-3.5L1.2 13.6l1.4-1.4 2.4.3 3.1-3.1L2.7 6.7l1.9-1.9 7.3 1.4 2.74-3.86z"],
  "ship": ["M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 1.3 0 1.9-.5 2.5-1", "M4 18 2.5 12.5A1 1 0 0 1 3.5 11H20.5a1 1 0 0 1 1 1.5L20 18", "M12 11V7", "M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5"],
  "message": ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
  "user": ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  "bell": ["M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", "M10.3 21a1.94 1.94 0 0 0 3.4 0"],
  "shield-check": ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"],
  "check": ["M20 6 9 17l-5-5"],
  "x": ["M18 6 6 18", "m6 6 12 12"],
  "arrow-right": ["M5 12h14", "m12 5 7 7-7 7"],
  "arrow-left": ["M19 12H5", "m12 19-7-7 7-7"],
  "plus": ["M5 12h14", "M12 5v14"],
  "ban": ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "m4.9 4.9 14.2 14.2"],
  "camera": ["M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z", "M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  "key": ["M15.5 7.5a4.5 4.5 0 1 1-4.24 6L3 22H2v-3l8.5-8.26A4.5 4.5 0 0 1 15.5 7.5z"],
  "file": ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6"],
  "package": ["m7.5 4.27 9 5.15", "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", "m3.3 7 8.7 5 8.7-5", "M12 22V12"],
  "calendar": ["M8 2v4", "M16 2v4", "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M3 10h18"],
  "clock": ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M12 7v5l3 2"],
  "credit-card": ["M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "M2 10h20"],
  "eye-off": ["M10.7 5.1A9.9 9.9 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.7 2.7", "M6.6 6.6A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.4-1.6", "m2 2 20 20", "M9.9 9.9a3 3 0 0 0 4.2 4.2"],
  "star": ["m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z"],
  "lock": ["M5 11h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z", "M8 11V7a4 4 0 0 1 8 0v4"],
  "phone": ["M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"],
  "mail": ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "m22 7-10 6L2 7"],
  "id-card": ["M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M6.5 16a3 3 0 0 1 5 0", "M14 10h4", "M14 14h4"],
  "smile": ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M8 14s1.5 2 4 2 4-2 4-2", "M9 9h.01", "M15 9h.01"],
  "sparkles": ["m12 3 1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z", "M19 15l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z"],
  "alert": ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M12 8v5", "M12 16h.01"],
  "shirt": ["M20.4 5.9 16 4a4 4 0 0 1-8 0L3.6 5.9a1 1 0 0 0-.55 1.25l1.2 3.6a1 1 0 0 0 .95.68H7v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8h1.8a1 1 0 0 0 .95-.68l1.2-3.6a1 1 0 0 0-.55-1.25z"],
  "briefcase": ["M3 7h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z", "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"],
  "gift": ["M3 12h18v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z", "M2 8h20v4H2z", "M12 8v13", "M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5", "M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5"],
  "glasses": ["M6 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M18 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M9 13h6", "M3 12l2-5", "M21 12l-2-5"],
  "suitcase": ["M4 7h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z", "M8 7V4h8v3", "M9 11v5", "M15 11v5"]
};
function Icon({ name, size = 18, strokeWidth = 2, fill = "none", style, ...rest }) {
  const d = iconPaths[name] || [];
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill,
      stroke: "currentColor",
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { display: "block", flex: "0 0 auto", ...style },
      "aria-hidden": "true",
      ...rest,
      children: d.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: p }, i))
    }
  );
}

// src/components/core/RatingStars.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function RatingStars({ value = 0, count, size = 14, editable = false, onChange, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-sans)", ...style }, ...rest, children: [
    [1, 2, 3, 4, 5].map((n) => {
      const on = n <= Math.round(value);
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "span",
        {
          onClick: editable && onChange ? () => onChange(n) : void 0,
          style: {
            color: on ? "var(--bledi-gold-500)" : "var(--bledi-neutral-200)",
            display: "inline-flex",
            cursor: editable ? "pointer" : "default"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { name: "star", size, fill: on ? "currentColor" : "none" })
        },
        n
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: { fontSize: "var(--text-sm)", color: "var(--text-primary)", marginLeft: 4 }, children: value.toFixed(1) }),
    count != null ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { style: { fontSize: "var(--text-xs)", color: "var(--text-secondary)" }, children: [
      "\xB7 ",
      count,
      " avis"
    ] }) : null
  ] });
}

// src/components/core/VerifiedMark.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var DEFAULT_SRC = "./assets/bledi-b-mark.png";
function VerifiedMark({ size = 18, tone = "brand", src = DEFAULT_SRC, title = "Profil v\xE9rifi\xE9 par Bledi", style, ...rest }) {
  const dark = tone === "onDark";
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "span",
    {
      role: "img",
      "aria-label": title,
      title,
      style: {
        width: size,
        height: size,
        flex: "0 0 auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        boxSizing: "border-box",
        background: dark ? "var(--bledi-gold-400)" : "var(--bledi-green-700)",
        border: dark ? "none" : Math.max(1, size * 0.075) + "px solid var(--bledi-gold-400)",
        ...style
      },
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "img",
        {
          src,
          alt: "",
          style: {
            width: size * 0.76,
            height: size * 0.76,
            display: "block",
            objectFit: "contain",
            /* le tracé est blanc : on le teinte en vert profond sur la pastille or */
            filter: dark ? "brightness(0) saturate(100%) invert(11%) sepia(38%) saturate(1600%) hue-rotate(120deg)" : "none"
          }
        }
      )
    }
  );
}
function VerifiedName({ name, verified = false, size = "var(--text-base)", markSize = 18, tone = "brand", markSrc, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontSize: size, fontWeight: "var(--weight-medium)", ...style }, ...rest, children: [
    name,
    verified ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(VerifiedMark, { size: markSize, tone, src: markSrc }) : null
  ] });
}

// src/components/domain/OfficialTripCard.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function OfficialTripCard({ carrier, reference, route, date, times, selected = false, onSelect, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "button",
    {
      type: "button",
      onClick: onSelect,
      style: {
        display: "block",
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        background: selected ? "var(--surface-selected)" : "var(--surface-card)",
        border: "1px solid " + (selected ? "var(--border-strong)" : "var(--border-default)"),
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-4)",
        transition: "var(--transition-default)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-4)" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { style: { fontSize: "var(--text-base)", fontWeight: "var(--weight-semibold)", color: "var(--text-brand)" }, children: [
            carrier,
            " \xB7 ",
            reference
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Badge, { tone: "verified", icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon, { name: "shield-check", size: 12 }), children: "V\xE9rifi\xE9" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { style: { fontSize: "var(--text-sm)", marginTop: 4 }, children: route }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 6 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon, { name: "calendar", size: 13 }),
          date
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 4 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon, { name: "clock", size: 13 }),
          times
        ] }),
        selected ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--text-brand)" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Icon, { name: "check", size: 14 }),
          "Trajet s\xE9lectionn\xE9"
        ] }) : null
      ]
    }
  );
}

// src/components/domain/ProtectionPanel.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function ProtectionPanel({ title = "Protection Bledi", description, points = [], linkLabel, onLink, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "section",
    {
      style: {
        background: "var(--gradient-panel)",
        color: "var(--text-on-dark)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-6)",
        boxShadow: "var(--shadow-panel)",
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { style: { width: 38, height: 38, borderRadius: "var(--radius-pill)", background: "rgba(233,185,73,0.16)", color: "var(--text-accent)", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Icon, { name: "shield-check", size: 18 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { style: { margin: "var(--space-4) 0 var(--space-2)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" }, children: title }),
        description ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { style: { margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-on-dark-muted)" }, children: description }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { style: { listStyle: "none", margin: "var(--space-5) 0 0", padding: 0, display: "flex", flexDirection: "column", gap: "var(--space-3)" }, children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("li", { style: { display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-sm)" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { style: { color: "var(--text-accent)", display: "inline-flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Icon, { name: "check", size: 15 }) }),
          p
        ] }, p)) }),
        linkLabel ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          "button",
          {
            type: "button",
            onClick: onLink,
            style: { marginTop: "var(--space-5)", paddingTop: "var(--space-4)", borderTop: "1px solid rgba(255,255,255,0.14)", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", border: "none", color: "var(--text-accent)", fontFamily: "inherit", fontSize: "var(--text-base)", cursor: "pointer" },
            children: [
              linkLabel,
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Icon, { name: "arrow-right", size: 16 })
            ]
          }
        ) : null
      ]
    }
  );
}

// src/components/domain/RouteLine.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function RouteLine({
  from,
  fromCode,
  fromTime,
  to,
  toCode,
  toTime,
  fromLabel = "D\xE9part",
  toLabel = "Arriv\xE9e",
  style,
  ...rest
}) {
  const col = { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 };
  const cap = { fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-secondary)" };
  const place = { fontSize: "var(--text-base)", color: "var(--text-primary)" };
  const time = { fontSize: "var(--text-md)", fontWeight: "var(--weight-semibold)", color: "var(--text-primary)" };
  const code = { fontSize: "var(--text-xs)", color: "var(--text-secondary)" };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "var(--space-4)", fontFamily: "var(--font-sans)", ...style }, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: col, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: cap, children: fromLabel }),
      from ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: place, children: from }) : null,
      fromCode || fromTime ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { style: { display: "flex", alignItems: "baseline", gap: 8 }, children: [
        fromCode ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: code, children: fromCode }) : null,
        fromTime ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: time, children: fromTime }) : null
      ] }) : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { width: 34, height: 34, borderRadius: "var(--radius-pill)", background: "var(--surface-notice)", color: "var(--bledi-gold-600)", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Icon, { name: "arrow-right", size: 16 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { ...col, alignItems: "flex-end", textAlign: "right" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: cap, children: toLabel }),
      to ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: place, children: to }) : null,
      toCode || toTime ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { style: { display: "flex", alignItems: "baseline", gap: 8 }, children: [
        toCode ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: code, children: toCode }) : null,
        toTime ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: time, children: toTime }) : null
      ] }) : null
    ] })
  ] });
}

// src/components/domain/RequestCard.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function RequestCard({
  badges = [],
  category,
  carrier,
  flight,
  route = {},
  date,
  author,
  authorVerified = false,
  markSrc,
  authorRole,
  budget,
  budgetLabel = "Budget propos\xE9",
  routeLabels,
  message,
  details,
  notices,
  action,
  style,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "article",
    {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-card)",
        fontFamily: "var(--font-sans)",
        overflow: "hidden",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { padding: "var(--space-5)", borderBottom: "1px solid var(--border-default)" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-start" }, children: badges }),
          category ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: "8px" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Badge, { tone: "neutral", children: category }) }) : null,
          carrier || flight ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h3", { style: { margin: "var(--space-4) 0 var(--space-5)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)", color: "var(--text-brand)" }, children: [
            carrier,
            carrier && flight ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: { marginLeft: 6 }, children: flight }) : flight
          ] }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(RouteLine, { ...route, fromLabel: routeLabels?.from, toLabel: routeLabels?.to }),
          date ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: "var(--space-4)", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Icon, { name: "calendar", size: 14 }),
            date
          ] }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }, children: [
          author || budget ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)" }, children: [
            author ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-3)" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Avatar, { initial: author.charAt(0) }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(VerifiedName, { name: author, verified: authorVerified, markSrc }),
                authorRole ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { fontSize: "var(--text-xs)", color: "var(--text-secondary)" }, children: authorRole }) : null
              ] })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", {}),
            budget ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { textAlign: "right" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-secondary)" }, children: budgetLabel }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)" }, children: budget })
            ] }) : null
          ] }) : null,
          message ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { style: { margin: 0, fontSize: "var(--text-base)", lineHeight: "var(--leading-normal)" }, children: message }) : null,
          details ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { background: "var(--surface-muted)", borderRadius: "var(--radius-lg)", padding: "var(--space-4)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-primary)" }, children: details }) : null,
          notices,
          action
        ] })
      ]
    }
  );
}

// src/components/domain/TripBanner.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function TripBanner({ eyebrow = "Trajet officiel", title, route, schedule, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      style: {
        background: "var(--gradient-panel)",
        color: "var(--text-on-dark)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-5)",
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)", fontWeight: "var(--weight-semibold)" }, children: eyebrow }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { fontSize: "var(--text-md)", fontWeight: "var(--weight-semibold)", marginTop: 8 }, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { fontSize: "var(--text-sm)", color: "var(--text-on-dark-muted)", marginTop: 4 }, children: route }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { fontSize: "var(--text-sm)", color: "var(--text-on-dark-muted)", marginTop: 2 }, children: schedule })
      ]
    }
  );
}

// src/components/domain/VerificationRow.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function VerificationRow({ icon, title, description, status = "OK", done = true, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-4)",
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { style: { width: 34, height: 34, flex: "0 0 auto", borderRadius: "var(--radius-md)", background: "var(--surface-muted)", color: "var(--text-brand)", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { style: { fontSize: "var(--text-base)", fontWeight: "var(--weight-medium)" }, children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { style: { fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginTop: 2 }, children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: "var(--text-sm)", color: done ? "var(--text-brand)" : "var(--text-secondary)" }, children: [
          done ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Icon, { name: "check", size: 15 }) : null,
          status
        ] })
      ]
    }
  );
}

// src/components/feedback/Dialog.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Dialog({ open = false, title, description, onClose, actions, children, style, ...rest }) {
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(7, 43, 26, 0.42)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-5)"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            width: "100%",
            maxWidth: 460,
            background: "var(--surface-card)",
            borderRadius: "var(--radius-2xl)",
            boxShadow: "0 24px 60px rgba(7,43,26,0.28)",
            padding: "var(--space-6)",
            fontFamily: "var(--font-sans)",
            ...style
          },
          ...rest,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-4)" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { style: { margin: 0, fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)" }, children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  style: { background: "var(--surface-muted)", border: "none", borderRadius: "var(--radius-pill)", width: 30, height: 30, display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text-secondary)", flex: "0 0 auto" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Icon, { name: "x", size: 15 })
                }
              )
            ] }),
            description ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { style: { margin: "var(--space-3) 0 0", fontSize: "var(--text-base)", color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)" }, children: description }) : null,
            children ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: { marginTop: "var(--space-5)" }, children }) : null,
            actions ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: { display: "flex", gap: "var(--space-3)", justifyContent: "flex-end", marginTop: "var(--space-6)" }, children: actions }) : null
          ]
        }
      )
    }
  );
}

// src/components/feedback/StatusTimeline.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function StatusTimeline({ steps = [], current = 0, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ol", { style: { listStyle: "none", margin: 0, padding: 0, fontFamily: "var(--font-sans)", ...style }, ...rest, children: steps.map((s, i) => {
    const done = i < current;
    const active = i === current;
    const last = i === steps.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("li", { style: { display: "flex", gap: "var(--space-4)" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", flex: "0 0 auto" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { style: {
          width: 26,
          height: 26,
          borderRadius: "var(--radius-pill)",
          background: done || active ? "var(--bledi-green-700)" : "var(--surface-muted)",
          color: done || active ? "#FFFFFF" : "var(--text-secondary)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "var(--text-xs)",
          fontWeight: "var(--weight-semibold)"
        }, children: done ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Icon, { name: "check", size: 13, strokeWidth: 2.6 }) : i + 1 }),
        !last ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { style: { width: 2, flex: 1, minHeight: 26, background: done ? "var(--bledi-green-700)" : "var(--bledi-neutral-200)" } }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { style: { paddingBottom: last ? 0 : "var(--space-5)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { fontSize: "var(--text-base)", fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)", color: done || active ? "var(--text-primary)" : "var(--text-secondary)" }, children: s.label }),
        s.detail ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 2 }, children: s.detail }) : null
      ] })
    ] }, s.label);
  }) });
}

// src/components/feedback/Toast.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function Toast({ tone = "success", children, onClose, style, ...rest }) {
  const success = tone === "success";
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        background: success ? "var(--gradient-panel)" : "var(--bledi-red-600)",
        color: success ? "var(--text-on-dark)" : "#FFFFFF",
        borderRadius: "var(--radius-pill)",
        padding: "13px 20px",
        boxShadow: "var(--shadow-panel)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { style: { color: success ? "var(--text-accent)" : "#FFFFFF", display: "inline-flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Icon, { name: success ? "check" : "alert", size: 16 }) }),
        children,
        onClose ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type: "button", onClick: onClose, style: { background: "transparent", border: "none", color: "inherit", opacity: 0.6, cursor: "pointer", padding: 0, display: "inline-flex" }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Icon, { name: "x", size: 14 }) }) : null
      ]
    }
  );
}

// src/components/forms/Checkbox.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function Checkbox({ checked = false, onChange, label, hint, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "label",
    {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        background: "var(--surface-card)",
        border: "1px solid " + (checked ? "var(--border-strong)" : "var(--border-default)"),
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-4)",
        transition: "var(--transition-default)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { type: "checkbox", checked, onChange: (e) => onChange && onChange(e.target.checked), style: { position: "absolute", opacity: 0, width: 0, height: 0 } }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { style: {
          width: 22,
          height: 22,
          flex: "0 0 auto",
          borderRadius: "var(--radius-sm)",
          background: checked ? "var(--bledi-green-700)" : "var(--surface-card)",
          border: "1px solid " + (checked ? "var(--bledi-green-700)" : "var(--border-default)"),
          color: "#FFFFFF",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "var(--transition-default)"
        }, children: checked ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icon, { name: "check", size: 14, strokeWidth: 2.6 }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { style: { display: "block" }, children: label }),
          hint ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { style: { display: "block", fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 2 }, children: hint }) : null
        ] })
      ]
    }
  );
}

// src/components/forms/CodeInput.tsx
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime22 = require("react/jsx-runtime");
function CodeInput({ length = 6, value = "", onChange, style, ...rest }) {
  const refs = React2.useRef([]);
  const chars = Array.from({ length }, (_, i) => value[i] || "");
  const set = (i, ch) => {
    const next = chars.slice();
    next[i] = ch.replace(/[^0-9A-Za-z]/g, "").slice(-1).toUpperCase();
    const joined = next.join("");
    if (onChange) onChange(joined);
    if (next[i]) refs.current[i + 1]?.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: { display: "flex", gap: "var(--space-2)", ...style }, ...rest, children: chars.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "input",
    {
      ref: (el) => {
        refs.current[i] = el;
      },
      value: c,
      inputMode: "numeric",
      onChange: (e) => set(i, e.target.value),
      onKeyDown: (e) => {
        if (e.key === "Backspace" && !c) refs.current[i - 1]?.focus();
      },
      style: {
        width: 46,
        height: 56,
        textAlign: "center",
        boxSizing: "border-box",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xl)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-primary)",
        background: "var(--surface-card)",
        border: "1px solid " + (c ? "var(--border-strong)" : "var(--border-default)"),
        borderRadius: "var(--radius-md)",
        outline: "none",
        transition: "var(--transition-default)"
      }
    },
    i
  )) });
}

// src/components/forms/Field.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function Field({ label, hint, htmlFor, children, style, ...rest }) {
  const styleLibelle = {
    display: "block",
    fontSize: "var(--text-sm)",
    color: "var(--text-secondary)",
    marginBottom: "var(--space-2)"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { style: { fontFamily: "var(--font-sans)", ...style }, ...rest, children: [
    label ? htmlFor ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { htmlFor, style: styleLibelle, children: label }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: styleLibelle, children: label }) : null,
    children,
    hint ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { style: { fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginTop: "var(--space-2)" }, children: hint }) : null
  ] });
}

// src/components/forms/Input.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var inputBase = {
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-base)",
  color: "var(--text-primary)",
  background: "var(--surface-card)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  padding: "12px 14px",
  outline: "none",
  transition: "var(--transition-default)"
};
function Input({ style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("input", { style: { ...inputBase, minHeight: "var(--tap-target-min)", ...style }, ...rest });
}
function Textarea({ rows = 4, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("textarea", { rows, style: { ...inputBase, resize: "vertical", lineHeight: "var(--leading-normal)", ...style }, ...rest });
}

// src/components/forms/OptionToggle.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function OptionToggle({ options = [], value, onChange, columns = 2, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { style: { display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "var(--space-3)", ...style }, ...rest, children: options.map((o) => {
    const active = o.value === value;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => onChange && onChange(o.value),
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          color: active ? "var(--text-brand)" : "var(--text-primary)",
          background: active ? "var(--surface-selected)" : "var(--surface-card)",
          border: "1px solid " + (active ? "var(--border-strong)" : "var(--border-default)"),
          borderRadius: "var(--radius-pill)",
          padding: "13px 18px",
          minHeight: "var(--tap-target-min)",
          cursor: "pointer",
          transition: "var(--transition-default)"
        },
        children: [
          o.icon,
          o.label
        ]
      },
      o.value
    );
  }) });
}

// src/components/forms/PhotoUploader.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function PhotoUploader({ label = "Photos de l'objet", hint, count = 0, min = 2, onAdd, style, ...rest }) {
  const slots = Array.from({ length: Math.max(min, count + 1) });
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { style: { fontFamily: "var(--font-sans)", ...style }, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { style: { fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "var(--space-3)" }, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(104px, 1fr))", gap: "var(--space-3)" }, children: slots.map((_, i) => {
      const filled = i < count;
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
        "button",
        {
          type: "button",
          onClick: filled ? void 0 : onAdd,
          style: {
            aspectRatio: "1 / 1",
            cursor: filled ? "default" : "pointer",
            background: filled ? "repeating-linear-gradient(135deg, var(--surface-muted) 0 8px, var(--bledi-cream-200) 8px 16px)" : "var(--surface-card)",
            border: "1px " + (filled ? "solid" : "dashed") + " var(--border-default)",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "var(--text-secondary)",
            fontFamily: "inherit",
            fontSize: "var(--text-2xs)"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Icon, { name: "camera", size: 18 }),
            filled ? "photo " + (i + 1) : "ajouter"
          ]
        },
        i
      );
    }) }),
    hint ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { style: { fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginTop: "var(--space-3)" }, children: hint }) : null
  ] });
}

// src/components/forms/Select.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function Select({ options = [], placeholder, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { position: "relative", ...style }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "select",
      {
        style: {
          width: "100%",
          boxSizing: "border-box",
          appearance: "none",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-base)",
          color: "var(--text-primary)",
          background: "var(--surface-card)",
          border: "1px solid var(--border-default)",
          borderRadius: "var(--radius-md)",
          padding: "11px 34px 11px 14px",
          minHeight: "var(--tap-target-min)",
          outline: "none"
        },
        ...rest,
        children: [
          placeholder ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "", children: placeholder }) : null,
          options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: o, children: o }, o))
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { style: { position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)", pointerEvents: "none", fontSize: 11, lineHeight: 1 }, children: "\u25B2\u25BC" })
  ] });
}

// src/components/forms/Switch.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
function Switch({ checked = false, onChange, label, hint, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    "label",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-4)",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: { display: "block" }, children: label }),
          hint ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: { display: "block", fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: 2 }, children: hint }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("input", { type: "checkbox", checked, onChange: (e) => onChange && onChange(e.target.checked), style: { position: "absolute", opacity: 0, width: 0, height: 0 } }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: {
          width: 46,
          height: 28,
          flex: "0 0 auto",
          borderRadius: "var(--radius-pill)",
          background: checked ? "var(--bledi-green-700)" : "var(--bledi-neutral-200)",
          padding: 3,
          boxSizing: "border-box",
          transition: "var(--transition-default)",
          display: "inline-flex",
          justifyContent: checked ? "flex-end" : "flex-start"
        }, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { style: { width: 22, height: 22, borderRadius: "var(--radius-pill)", background: "#FFFFFF", boxShadow: "var(--shadow-card)" } }) })
      ]
    }
  );
}

// src/components/navigation/BottomNav.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var defaultBottomNavItems = [
  { value: "requests", label: "Demandes", icon: "inbox" },
  { value: "trips", label: "Mes trajets", icon: "plane" },
  { value: "publish", label: "Publier", icon: "plus", primary: true },
  { value: "messages", label: "Messages", icon: "message" },
  { value: "profile", label: "Profil", icon: "user" }
];
function BottomNav({
  active = "requests",
  onNavigate,
  items = defaultBottomNavItems,
  style,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "nav",
    {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        alignItems: "end",
        background: "var(--surface-card)",
        borderTop: "var(--border-width) solid var(--border-default)",
        padding: "var(--space-2) var(--space-2) var(--space-3)",
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest,
      children: items.map((it) => {
        const on = it.value === active;
        if (it.primary) {
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
            "button",
            {
              type: "button",
              "aria-current": on ? "page" : void 0,
              onClick: () => onNavigate && onNavigate(it.value),
              style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, background: "transparent", border: "none", cursor: "pointer" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { style: { width: 46, height: 46, borderRadius: "var(--radius-pill)", background: "var(--bledi-green-700)", color: "#FFF", display: "inline-flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { name: it.icon, size: 22 }) }),
                /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { style: { fontSize: "var(--text-2xs)", color: "var(--text-secondary)" }, children: it.label })
              ]
            },
            it.value
          );
        }
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
          "button",
          {
            type: "button",
            "aria-current": on ? "page" : void 0,
            onClick: () => onNavigate && onNavigate(it.value),
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: on ? "var(--text-brand)" : "var(--text-secondary)",
              padding: "6px 0"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Icon, { name: it.icon, size: 20 }),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { style: { fontSize: "var(--text-2xs)", fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)" }, children: it.label })
            ]
          },
          it.value
        );
      })
    }
  );
}

// src/components/navigation/SegmentedTabs.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
function SegmentedTabs({ tabs = [], value, onChange, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    "div",
    {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
        background: "var(--surface-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "4px",
        ...style
      },
      ...rest,
      children: tabs.map((t) => {
        const active = t.value === value;
        return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "button",
          {
            type: "button",
            onClick: () => onChange && onChange(t.value),
            style: {
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              fontWeight: active ? "var(--weight-medium)" : "var(--weight-regular)",
              color: active ? "#FFFFFF" : "var(--text-primary)",
              background: active ? "var(--bledi-green-700)" : "transparent",
              border: "none",
              borderRadius: "var(--radius-pill)",
              padding: "11px 12px",
              cursor: "pointer",
              transition: "var(--transition-default)"
            },
            children: t.label
          },
          t.value
        );
      })
    }
  );
}

// src/components/navigation/StepProgress.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function StepProgress({ step = 1, total = 5, label, stepLabel, style, ...rest }) {
  const pct = Math.max(0, Math.min(1, step / total)) * 100;
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { style: { fontFamily: "var(--font-sans)", ...style }, ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginBottom: "8px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: stepLabel || `\xC9tape ${step} sur ${total}` }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: label })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { style: { height: 4, borderRadius: "var(--radius-pill)", background: "var(--surface-muted)", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { style: { width: `${pct}%`, height: "100%", background: "var(--bledi-green-700)", borderRadius: "var(--radius-pill)", transition: "width var(--duration-slow) var(--ease-standard)" } }) })
  ] });
}

// src/components/navigation/TopNav.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var defaultTopNavItems = [
  { value: "requests", label: "Demandes", icon: "inbox" },
  { value: "trips", label: "Mes trajets", icon: "plane" },
  { value: "messages", label: "Messages", icon: "message" },
  { value: "profile", label: "Profil", icon: "user" }
];
function TopNav({
  active = "requests",
  onNavigate,
  items = defaultTopNavItems,
  logoSrc,
  logoHref,
  onLogo,
  logoLabel = "Bledi",
  bell,
  actions,
  style,
  ...rest
}) {
  const marque = logoSrc ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("img", { src: logoSrc, alt: logoLabel, style: { width: 44, height: 44, borderRadius: "var(--radius-pill)", display: "block" } }) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { style: { fontWeight: "var(--weight-bold)", color: "var(--text-brand)", fontSize: "var(--text-lg)" }, children: logoLabel });
  const styleMarque = { display: "flex", alignItems: "center", background: "transparent", border: "none", padding: 0, cursor: "pointer" };
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
    "header",
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "var(--nav-height)",
        padding: "0 var(--space-6)",
        background: "var(--color-bg)",
        borderBottom: "var(--border-width) solid var(--border-default)",
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest,
      children: [
        logoHref ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("a", { href: logoHref, "aria-label": logoLabel, style: { ...styleMarque, textDecoration: "none" }, children: marque }) : onLogo ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("button", { type: "button", onClick: onLogo, "aria-label": logoLabel, style: styleMarque, children: marque }) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { style: { display: "flex", alignItems: "center" }, children: marque }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("nav", { style: { display: "flex", alignItems: "center", gap: "var(--space-2)" }, children: items.map((it) => {
          const on = it.value === active;
          return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
            "button",
            {
              type: "button",
              "aria-current": on ? "page" : void 0,
              onClick: () => onNavigate && onNavigate(it.value),
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-2)",
                fontFamily: "inherit",
                fontSize: "var(--text-base)",
                color: on ? "#FFFFFF" : "var(--text-primary)",
                background: on ? "var(--bledi-green-700)" : "transparent",
                border: "none",
                borderRadius: "var(--radius-pill)",
                padding: "10px 18px",
                cursor: "pointer",
                transition: "var(--transition-default)"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Icon, { name: it.icon, size: 16 }),
                it.label
              ]
            },
            it.value
          );
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-2)" }, children: [
          bell,
          actions
        ] })
      ]
    }
  );
}

// src/components/navigation/UnderlineTabs.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
function UnderlineTabs({ tabs = [], value, onChange, style, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { style: { display: "grid", gridTemplateColumns: `repeat(${tabs.length}, 1fr)`, borderBottom: "1px solid var(--border-default)", ...style }, ...rest, children: tabs.map((t) => {
    const active = t.value === value;
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
      "button",
      {
        type: "button",
        onClick: () => onChange && onChange(t.value),
        style: {
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)",
          color: active ? "var(--text-primary)" : "var(--text-secondary)",
          background: "transparent",
          border: "none",
          borderBottom: "2px solid " + (active ? "var(--bledi-green-700)" : "transparent"),
          padding: "12px 8px",
          marginBottom: "-1px",
          cursor: "pointer"
        },
        children: t.label
      },
      t.value
    );
  }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Avatar,
  Badge,
  BottomNav,
  Button,
  Card,
  Checkbox,
  Chip,
  CodeInput,
  Dialog,
  EmptyState,
  Field,
  Icon,
  Input,
  Logo,
  LogoMark,
  LogoWordmark,
  OfficialTripCard,
  OptionToggle,
  PhotoUploader,
  ProtectionPanel,
  RatingStars,
  RequestCard,
  RouteLine,
  SegmentedTabs,
  Select,
  StatusTimeline,
  StepProgress,
  Switch,
  Textarea,
  Toast,
  TopNav,
  TripBanner,
  UnderlineTabs,
  VerificationRow,
  VerifiedMark,
  VerifiedName,
  defaultBottomNavItems,
  defaultTopNavItems
});
//# sourceMappingURL=index.cjs.map