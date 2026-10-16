# Design Decisions

## Visual direction

The portfolio combines three complementary ideas:

- an editorial, evidence-led shell for trust and readability;
- interactive project instruments where depth benefits from user control;
- chapter numbering for longer technical and career narratives.

The result is intentionally light, restrained, and professional. Warm-grey
surfaces reduce glare without introducing alternating dark sections.

## Typography

Large headings establish hierarchy, but scale and weight are moderated to avoid
an aggressive presentation. Serif display type supports an editorial tone on
the homepage; compact sans-serif and monospace labels support technical
diagrams.

## Visual explanation

Visualizations are functional rather than decorative. They should explain a
system relationship, decision sequence, model comparison, or measurable
change. A visualization should be understandable in roughly 10–15 seconds and
must include an accessible text description.

## Progressive disclosure

The homepage contains only the strongest evidence. Work pages hold technical
depth. Secondary projects and historical material should be collapsible or
placed in the Work library rather than expanding the homepage indefinitely.

## Motion

Motion may establish personality or explain a state change, but must not delay
access to the content. Transitions should be brief and respect reduced-motion
preferences. Scroll hijacking and blocking preloaders are out of scope.

## Responsive behavior

Diagrams collapse from horizontal systems into readable vertical sequences.
Navigation, cards, metrics, and diagrams must remain usable without hover.

## Accessibility

- Semantic headings and landmarks
- Descriptive labels for diagrams and interactive controls
- Keyboard-operable tabs and links
- Sufficient contrast on every tonal surface
- Reduced-motion support for future animation
- No meaning conveyed by color alone

## Decision record

### ADR-001: Light-only public visual system

**Status:** Accepted

The public site uses light and light-tonal surfaces. Mixing dark feature panels
into otherwise light pages created visual discontinuity and weakened the
professional tone.

### ADR-002: Recent-first career narrative

**Status:** Accepted

Current and recent roles appear first because hiring decisions weight recent
scope more strongly than early-career chronology.

### ADR-003: Separate Chamomile and cancellation-policy intelligence

**Status:** Accepted

The projects solve different product and technical problems. Chamomile is a
corpus-scale retrieval system; cancellation badging is a structured extraction
and confidence-routing system. Separate pages make both stories clearer.
