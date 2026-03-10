# Page Transition Kit

Reusable GSAP page transition extracted from this demo.

## Files

- `index.js`: exports the reusable pieces
- `transitionManager.js`: transition engine
- `transitions/defaultTransition.js`: the default clip-path transition
- `styles.css`: minimum required CSS
- `markup.html`: required DOM structure

## Install In Another Project

1. Copy the `page-transition-kit` folder into the other project.
2. Install `gsap` there.
3. Add the markup from `markup.html` to your app shell.
4. Import `styles.css`.
5. Wire the manager into your router.

## Example

```js
import { gsap } from "gsap";
import {
  createTransitionManager,
  defaultTransition,
} from "./page-transition-kit/index.js";

const transitionManager = createTransitionManager({
  getTransition() {
    return defaultTransition(gsap);
  },
  setHTML({ nextContainer, nextHTML, contentSelector }) {
    const content = document.createElement("main");
    content.id = contentSelector.replace("#", "");
    content.className = "page_content";
    content.innerHTML = nextHTML;
    nextContainer.appendChild(content);
  },
});

async function performTransition({
  currentNamespace,
  nextNamespace,
  nextHTML,
  nextModule,
}) {
  const nextContainer = await transitionManager.run({
    currentNamespace,
    nextNamespace,
    nextHTML,
    nextModule,
  });

  gsap.set(nextContainer, {
    clearProps: "clipPath,position,top,left,width,height,zIndex,opacity",
    force3D: true,
  });
}
```

## Notes

- `getTransition(currentNamespace, nextNamespace)` lets you return different animations per route pair.
- `nextModule.init({ container })` is called automatically if present.
- Images inside the next container are awaited before the transition starts.
- This kit does not include routing. It only handles the transition lifecycle.
