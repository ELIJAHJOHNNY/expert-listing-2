# Expert Listing Assessment Implementation Brief

Build the Expert Listing frontend assessment in this workspace as a production-quality Next.js application.

## Reference material

The prompt includes a screenshot of the target mobile screen: `iPhone 14 Plus - 1486.png`. Treat that screenshot as the visual source of truth for the initial feed screen.

The original Figma reference is:

`https://www.figma.com/design/C8hFYZsdzyRwdhjzmFsgFH/ExpertListing-Assessment?node-id=1127-3129`

If Figma MCP access is available, use it to inspect the exact node, screenshot, metadata, and assets before implementation. If the connected Figma account lacks access, use the attached screenshot faithfully and do not block progress.

## Assessment requirements

Implement the screen with the following requirements in mind:

- Match the supplied design as closely as possible.
- Use Next.js, React, TypeScript, and Tailwind CSS.
- Make the experience responsive across mobile, tablet, and desktop.
- Use clean, reusable, maintainable components and a clear folder structure.
- Add hover, transition, focus, pressed, and micro-interaction states where they improve the experience.
- Static or mock data is acceptable. Do not build a backend.
- Keep dependencies lightweight.
- Prioritise visual accuracy, responsive behavior, component quality, performance, and overall UX.

## Screen to build

Build a mobile-first property social feed with these visible regions:

1. A top application bar with the Expert Listing wordmark, a messages icon, and a create button.
2. A horizontally scrollable story rail with circular avatars, gradient rings, story labels, and an add-story affordance.
3. Filter and trending-search pills.
4. A compact post composer with an avatar and placeholder text.
5. Feed posts with author details, role, time, location, overflow menu, post copy, engagement controls, comments, and a bookmark control.
6. Property posts that include a large visual, a dark `For Rent` or `For Sale` pill, carousel indicator, reaction summary, and interaction counts.
7. A video-style property post with a play affordance and duration treatment.
8. A persistent bottom navigation with Home, Feed, Wishlist, Notification, and Profile. Feed is active and includes a small Beta label.

Use believable Lagos property data and names. The feed should feel like a trustworthy local property product, not a generic social-media clone.

## Responsive direction

The screenshot is a narrow iPhone design. Preserve its dense scan rhythm on mobile.

For tablet and desktop, do not stretch each feed row across the full viewport. Keep a centered, constrained feed column, introduce comfortable page gutters, and retain the bottom navigation or adapt it thoughtfully without losing the mobile design language. Ensure images retain good crops and all interaction targets remain easy to use.

## Suggested architecture

Use a maintainable structure such as:

```text
src/
  app/
    page.tsx
    globals.css
  components/
    feed/
      feed-post.tsx
      property-media.tsx
      story-rail.tsx
      composer.tsx
    navigation/
      bottom-navigation.tsx
    ui/
      icon-button.tsx
      pill.tsx
  data/
    feed.ts
  types/
    feed.ts
```

Use typed mock data rather than hard-coding every post directly in JSX. Keep reusable primitives small and focused.

## Images and icons

If Figma MCP provides assets, download and use those exact assets. Otherwise, use appropriate image URLs or local mock assets with stable sizing and intentional cropping. Do not leave empty placeholders.

## Interaction details

- Story items should have hover/focus feedback on larger screens.
- Like and bookmark actions should visibly toggle state.
- Navigation should visibly update its active state.
- Property-media controls should have accessible labels.
- Include keyboard-visible focus states.
- Respect `prefers-reduced-motion`.

## Validation

Before handing off:

1. Run formatting, linting, and a production build.
2. Verify the screen at a narrow mobile width, tablet width, and desktop width.
3. Compare the mobile result to the supplied screenshot and correct major spacing, sizing, color, and hierarchy differences.
4. Do not claim the work is complete until these checks pass.

## Submission README

Create a separate `README.md` for the GitHub repository. It should be concise and reviewer-facing, covering:

- What was built.
- How to run it locally.
- The chosen stack.
- Responsive approach.
- Assumptions and trade-offs, especially that the source reference is a mobile screen and desktop/tablet layouts were inferred.
- Any mock-data or asset assumptions.

Do not put this implementation brief into the submission README.
