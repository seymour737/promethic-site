/* =============================================================================
   content.js · Site content                                       ✎ EDIT HERE
   -----------------------------------------------------------------------------
   Purpose   Everything on the page that changes over time lives in this file,
             so routine updates never touch layout or behaviour code.
   Sections  1. links     → "Elsewhere" list in the Contact section
             2. projects  → "Selected work" list
   Rules     • Plain text only. Values are HTML-escaped when rendered, so tags
               will show as literal text.
             • Order in each list is the order shown on the page.
   Used by   main.js
   See also  docs/MAINTENANCE.md for step-by-step procedures.
   ========================================================================== */

window.Portfolio = window.Portfolio || {};

window.Portfolio.content = {

  /* ---------------------------------------------------------------------------
     1. LINKS
        label   Text shown on the page
        url     Full address, opened in a new tab
     ------------------------------------------------------------------------ */
  links: [
    { label: 'WhatsApp',    url: 'https://wa.me/qr/7R2XZYSANPY5G1?s=v' },
    { label: 'GitHub',      url: 'https://github.com/seymour737' },
    { label: 'Google Play', url: 'https://play.google.com/store/apps/dev?id=8577988121423880677' }
  ],

  /* ---------------------------------------------------------------------------
     2. PROJECTS
        name    Project title
        kind    One-line category, shown under the title
        status  Short label in the sand accent colour (e.g. 'In development')
        desc    One or two sentences
        tags    Technology chips
        art     Key of a drawing in artwork.js
     ------------------------------------------------------------------------ */
  projects: [
    {
      name:   'Promethic',
      kind:   'Educational apps, Android and web',
      status: 'On Google Play',
      desc:   'My own company. A collection of study apps for learners: includes a Grade 12 subject suite, the word game Define Dash, and Apply to Uni.',
      tags:   ['Android', 'Java', 'Firebase', 'Brand'],
      art:    'promethic'
    },
    {
      name:   'Thama Thama Driving School',
      kind:   'Website',
      status: '2026',
      desc:   'A mobile-first site with a video hero, a wall of learners who passed, real pricing for both branches, and WhatsApp booking.',
      tags:   ['HTML', 'CSS', 'JavaScript'],
      art:    'thama'
    },
    {
      name:   'Bukhosi Learning Hub',
      kind:   'Website',
      status: 'Client site',
      desc:   'A website for a tutoring service, built to help parents find the right tutors for their child.',
      tags:   ['HTML', 'CSS', 'JavaScript'],
      art:    'bukhosi'
    },
    {
      name:   'Mission Control',
      kind:   'Classroom game, Grades 5-7',
      status: 'In development',
      desc:   'A team game where learners solve Maths and Science crises at a shared console of sliders, dials and thrust pads, each with a different role.',
      tags:   ['JavaScript', 'Firebase'],
      art:    'mission'
    },
    {
      name:   'Gold vs Grey',
      kind:   'Classroom tool',
      status: 'In daily use',
      desc:   'The team XP scoreboard that runs behaviour and rewards in my computer lab, shown live on the classroom screen.',
      tags:   ['JavaScript'],
      art:    'xp'
    }
  ]
};
