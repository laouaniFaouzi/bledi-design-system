/* Renders the design-system cards and UI kits when the compiled _ds_bundle.js
   is not present (e.g. opened straight from disk, or before the first compile).
   Load AFTER React + @babel/standalone. Set window.__DS_BASE__ to the project root. */
window.__DS_FILES__ = [
  'components/core/Icon.jsx',
  'components/core/Button.jsx',
  'components/core/Badge.jsx',
  'components/core/Chip.jsx',
  'components/core/Avatar.jsx',
  'components/core/Card.jsx',
  'components/core/Alert.jsx',
  'components/core/EmptyState.jsx',
  'components/core/RatingStars.jsx',
  'components/core/VerifiedMark.jsx',
  'components/forms/Field.jsx',
  'components/forms/Input.jsx',
  'components/forms/Select.jsx',
  'components/forms/OptionToggle.jsx',
  'components/forms/Checkbox.jsx',
  'components/forms/Switch.jsx',
  'components/forms/CodeInput.jsx',
  'components/forms/PhotoUploader.jsx',
  'components/feedback/Dialog.jsx',
  'components/feedback/Toast.jsx',
  'components/feedback/StatusTimeline.jsx',
  'components/navigation/SegmentedTabs.jsx',
  'components/navigation/UnderlineTabs.jsx',
  'components/navigation/TopNav.jsx',
  'components/navigation/BottomNav.jsx',
  'components/navigation/StepProgress.jsx',
  'components/domain/RouteLine.jsx',
  'components/domain/RequestCard.jsx',
  'components/domain/OfficialTripCard.jsx',
  'components/domain/TripBanner.jsx',
  'components/domain/VerificationRow.jsx',
  'components/domain/ProtectionPanel.jsx',
];

window.BlediResolve = async function () {
  for (const k of Object.keys(window)) {
    try {
      const v = window[k];
      if (v && typeof v === 'object' && v.Button && v.RequestCard && v.Icon) return v;
    } catch (e) { /* cross-origin frame — skip */ }
  }
  if (window.BlediDS) return window.BlediDS;
  const base = window.__DS_BASE__ || './';
  let src = '';
  for (const p of window.__DS_FILES__) {
    const text = await (await fetch(base + p)).text();
    const stripped = text
      .split('\n')
      .filter((line) => !/^\s*import\s/.test(line))
      .join('\n');
    src += stripped.replace(/\bexport function\b/g, 'function') + '\n';
  }
  const names = Array.from(src.matchAll(/^function ([A-Z][A-Za-z0-9]*)/gm)).map((m) => m[1]);
  const wrapped = 'function __dsFactory(React){\n' + src + '\nreturn {' + names.join(',') + '};\n}';
  const compiled = Babel.transform(wrapped, { presets: [['react', { runtime: 'classic' }]] }).code;
  window.BlediDS = new Function(compiled + '\nreturn __dsFactory;')()(React);
  return window.BlediDS;
};
