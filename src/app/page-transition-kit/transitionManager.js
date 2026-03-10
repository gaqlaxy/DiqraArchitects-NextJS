export function createTransitionManager({
  wrapperSelector = '[data-transition="wrapper"]',
  containerSelector = '[data-transition="container"]',
  contentSelector = "#page_content",
  getTransition,
  setHTML,
  afterEnter,
}) {
  if (typeof getTransition !== "function") {
    throw new Error("createTransitionManager requires a getTransition function.");
  }

  if (typeof setHTML !== "function") {
    throw new Error("createTransitionManager requires a setHTML function.");
  }

  async function run({
    currentNamespace,
    nextNamespace,
    nextHTML,
    nextModule,
    context = {},
  }) {
    const currentContainer = document.querySelector(containerSelector);
    const wrapper = document.querySelector(wrapperSelector);

    if (!currentContainer || !wrapper) {
      throw new Error("Transition wrapper/container elements were not found.");
    }

    const nextContainer = currentContainer.cloneNode(false);
    nextContainer.setAttribute("data-namespace", nextNamespace);

    setHTML({ nextContainer, nextHTML, contentSelector });
    wrapper.appendChild(nextContainer);

    await waitForImages(nextContainer);

    if (typeof nextModule?.init === "function") {
      nextModule.init({ container: nextContainer, ...context });
    }

    if (typeof afterEnter === "function") {
      await afterEnter({ currentContainer, nextContainer, nextModule, context });
    }

    const transition = getTransition(currentNamespace, nextNamespace, context);
    const timeline = await transition(currentContainer, nextContainer, context);

    if (timeline?.then) {
      await timeline.then();
    }

    currentContainer.remove();

    return nextContainer;
  }

  return { run };
}

function waitForImages(container) {
  const images = container.querySelectorAll("img");

  if (images.length === 0) {
    return Promise.resolve();
  }

  return Promise.all(
    Array.from(images).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }

          img.onload = resolve;
          img.onerror = resolve;
        }),
    ),
  );
}
