/* =============================================================================
   artwork.js · Project illustrations
   -----------------------------------------------------------------------------
   Purpose   One-ink line drawings shown beside each project in "Selected work".
   Format    Inline SVG strings on a 120 × 90 canvas. Every drawing uses
             currentColor, so its colour comes from CSS (.project-art → --sand).
   Used by   main.js, looked up by each project's `art` key in content.js.
   Add one   1. Add a new key below with its SVG string.
             2. Set `art: '<key>'` on the project in content.js.
   ========================================================================== */

window.Portfolio = window.Portfolio || {};

window.Portfolio.artwork = (function () {
  'use strict';

  /**
   * Tick marks for the Mission Control dial.
   * Nine ticks spaced evenly over the upper half-circle, centred on (60, 70).
   * Even ticks are long (radius 30 → 22); odd ticks are short (30 → 26).
   * @returns {string} SVG <path> elements
   */
  function dialTicks() {
    const CX = 60, CY = 70, OUTER = 30;
    return Array.from({ length: 9 }, (_, i) => {
      const angle = Math.PI + i * Math.PI / 8;
      const inner = i % 2 ? 26 : 22;
      const x1 = (CX + Math.cos(angle) * OUTER).toFixed(1);
      const y1 = (CY + Math.sin(angle) * OUTER).toFixed(1);
      const x2 = (CX + Math.cos(angle) * inner).toFixed(1);
      const y2 = (CY + Math.sin(angle) * inner).toFixed(1);
      return `<path d="M${x1} ${y1}L${x2} ${y2}"/>`;
    }).join('');
  }

  return Object.freeze({

    /* Promethic: an open ring with a centre point and a four-point spark */
    promethic:
      '<svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round">' +
        '<path d="M84 22A32 32 0 1 0 92 45"/>' +
        '<circle cx="60" cy="45" r="6" fill="currentColor" stroke="none"/>' +
        '<path d="M90 14l2.4 6.6 6.6 2.4-6.6 2.4L90 32l-2.4-6.6-6.6-2.4 6.6-2.4z" fill="currentColor" stroke="none"/>' +
      '</svg>',

    /* Thama Thama Driving School: a traffic light on the road */
    thama:
      '<svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="3.5">' +
        '<rect x="44" y="8" width="32" height="74" rx="16"/>' +
        '<circle cx="60" cy="25" r="8"/>' +
        '<circle cx="60" cy="45" r="8"/>' +
        '<circle cx="60" cy="65" r="8" fill="currentColor"/>' +
        '<path d="M20 82h80" stroke-linecap="round"/>' +
      '</svg>',

    /* Bukhosi Learning Hub: a sun rising over a stack of books */
    bukhosi:
      '<svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round">' +
        '<path d="M28 50a32 32 0 0 1 64 0"/>' +
        '<path d="M60 8v8M30 20l6 6M90 20l-6 6"/>' +
        '<rect x="24" y="56" width="72" height="9" rx="2"/>' +
        '<rect x="30" y="65" width="62" height="9" rx="2"/>' +
        '<rect x="22" y="74" width="76" height="9" rx="2"/>' +
      '</svg>',

    /* Mission Control: a console dial with its needle */
    mission:
      '<svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round">' +
        '<path d="M22 70a38 38 0 0 1 76 0"/>' +
        dialTicks() +
        '<path d="M60 70l20-22" stroke-width="4.5"/>' +
        '<circle cx="60" cy="70" r="5" fill="currentColor"/>' +
      '</svg>',

    /* Gold vs Grey: two team score bars with a star for the leader */
    xp:
      '<svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round">' +
        '<rect x="30" y="34" width="24" height="48" rx="3" fill="currentColor"/>' +
        '<rect x="66" y="48" width="24" height="34" rx="3"/>' +
        '<path d="M42 8l3.5 7.5 8 1-6 5.5 1.6 8-7.1-4-7.1 4 1.6-8-6-5.5 8-1z" fill="currentColor"/>' +
        '<path d="M18 82h84" stroke-linecap="round"/>' +
      '</svg>'
  });
})();
