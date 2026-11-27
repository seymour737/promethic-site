/* =============================================================================
   main.js · Page behaviour
   -----------------------------------------------------------------------------
   Purpose   Renders the content from content.js into the page and runs the
             header's live elements and the contact interactions.
   Depends   content.js  → window.Portfolio.content
             artwork.js  → window.Portfolio.artwork
   Load      <script defer> in index.html, after both dependencies.

   Contents  1. Configuration
             2. Utilities
             3. Renderers       renderProjects, renderLinks
             4. Live elements   startClock, startLedMark
             5. Interactions    watchHeaderScroll, setupCopyEmail
             6. Start-up sequence
   ========================================================================== */

(function () {
  'use strict';

  const { content, artwork } = window.Portfolio;


  /* ---------------------------------------------------------------------------
     1. Configuration
     ------------------------------------------------------------------------ */

  const CLOCK_TIMEZONE      = 'Africa/Johannesburg';  // shown as SAST
  const CLOCK_REFRESH_MS    = 15000;
  const LED_FRAME_MS        = 1800;   // time each LED frame stays on screen
  const COPY_FEEDBACK_MS    = 1800;   // how long "Copied" shows before resetting
  const HEADER_SCROLL_PX    = 8;      // scroll distance before the header divider appears

  /**
   * LED mark frames, played in order on a loop.
   * Each frame is 25 characters describing a 5 × 5 grid, read row by row from
   * the top-left: '1' = lit, '0' = off. Inspired by the BBC micro:bit display.
   */
  const LED_FRAMES = [
    '0111110000100001000001111',   // C
    '0101011111111110111000100',   // heart
    '0000001010000001000101110',   // smile
    '1111010001111101000010000'    // P for Promethic
  ];


  /* ---------------------------------------------------------------------------
     2. Utilities
     ------------------------------------------------------------------------ */

  const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

  /** Escape a value for safe insertion into HTML. */
  const escapeHtml = value => String(value).replace(/[&<>"]/g, ch => HTML_ESCAPES[ch]);


  /* ---------------------------------------------------------------------------
     3. Renderers
     ------------------------------------------------------------------------ */

  /** Build the "Selected work" list (#project-list) from content.projects. */
  function renderProjects() {
    document.getElementById('project-list').innerHTML = content.projects.map(p => `
      <li class="project">
        <div>
          <h3>${escapeHtml(p.name)}</h3>
          <span class="project-kind muted">${escapeHtml(p.kind)}</span>
          <span class="project-status">${escapeHtml(p.status)}</span>
        </div>
        <div class="project-desc">
          <p>${escapeHtml(p.desc)}</p>
          <div class="project-tags">${p.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
        </div>
        <div class="project-art" aria-hidden="true">${artwork[p.art] || ''}</div>
      </li>`).join('');
  }

  /** Build the "Elsewhere" list (#link-list) from content.links. */
  function renderLinks() {
    document.getElementById('link-list').innerHTML = content.links.map(l =>
      `<li><a href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)} <span aria-hidden="true">↗</span></a></li>`
    ).join('');
  }


  /* ---------------------------------------------------------------------------
     4. Live elements
     ------------------------------------------------------------------------ */

  /** Header clock (#clock): current South African time, e.g. "14:05 SAST". */
  function startClock() {
    const el = document.getElementById('clock');
    const format = new Intl.DateTimeFormat('en-ZA', {
      hour: '2-digit', minute: '2-digit', hour12: false, timeZone: CLOCK_TIMEZONE
    });
    const tick = () => { el.textContent = format.format(new Date()) + ' SAST'; };
    tick();
    setInterval(tick, CLOCK_REFRESH_MS);
  }

  /**
   * Header LED mark (#led): builds the 25 cells and cycles through LED_FRAMES.
   * Stays on the first frame for visitors who prefer reduced motion.
   */
  function startLedMark() {
    const led = document.getElementById('led');
    led.innerHTML = '<i></i>'.repeat(25);
    const cells = [...led.children];
    const show = frame => cells.forEach((cell, i) => cell.classList.toggle('on', frame[i] === '1'));

    let current = 0;
    show(LED_FRAMES[current]);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      setInterval(() => {
        current = (current + 1) % LED_FRAMES.length;
        show(LED_FRAMES[current]);
      }, LED_FRAME_MS);
    }
  }


  /* ---------------------------------------------------------------------------
     5. Interactions
     ------------------------------------------------------------------------ */

  /** Show the header's bottom divider once the page has scrolled. */
  function watchHeaderScroll() {
    const header = document.getElementById('site-header');
    const update = () => header.classList.toggle('scrolled', window.scrollY > HEADER_SCROLL_PX);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /** "Copy" button (#copy-email): copies the address in #email to the clipboard. */
  function setupCopyEmail() {
    const button = document.getElementById('copy-email');
    button.addEventListener('click', async () => {
      const address = document.getElementById('email').textContent;
      try {
        await navigator.clipboard.writeText(address);
        button.textContent = 'Copied';
      } catch (err) {
        button.textContent = 'Select and copy';   // clipboard blocked: ask the visitor to copy by hand
      }
      setTimeout(() => { button.textContent = 'Copy'; }, COPY_FEEDBACK_MS);
    });
  }


  /* ---------------------------------------------------------------------------
     6. Start-up sequence
     ------------------------------------------------------------------------ */

  renderProjects();
  renderLinks();
  startClock();
  startLedMark();
  watchHeaderScroll();
  setupCopyEmail();
})();
