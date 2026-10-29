# Course content

The course is made of **modules**, and each module has a list of **lessons** and a separate list of **exercises**.
The types live in [`src/course/types.ts`](../course/types.ts), and the list of modules lives in [`src/course/registry.ts`](../course/registry.ts).

Each module renders as one scroll-snap page: an intro, then all its lessons in order, and a button to the next module at the end. Only the current module is loaded. The sidebar lists every module, with collapsible Lessons and Exercises menus. Exercises open on top of the page, and Back returns to the same scroll position.

```
content/modules/
  01-foundations/
    index.ts          module definition: title, description, lessons[], exercises[]
    lessons/*.tsx     one Lesson per file (default export)
    exercises/*.tsx   one Exercise per file (default export)
```

URLs:
- `/#/<module>` is the module's intro.
- `/#/<module>/<lesson>` is the lesson. The URL updates as you scroll.
- `/#/<module>/exercises/<exercise>` is the exercise.

The number prefix on a folder only sorts it; it isn't part of the URL.

## Add a lesson
1. Create `lessons/my-topic.tsx`. Write one function per section body, then default-export a `Lesson`:
   ```tsx
   const intro = () => (<div><p>…</p><CodeCell>{`print("hi")`}</CodeCell></div>)

   const lesson: Lesson = {
   	slug: 'my-topic',
   	title: 'My Topic',
   	summary: 'One-line description.',
   	sections: [
   		{ id: 'intro', eyebrow: 'My Topic', title: 'Section heading', body: intro },
   		{ id: 'more', eyebrow: 'My Topic', title: 'Going deeper', tocLabel: 'Deeper', nested: true, body: more },
   	],
   }
   export default lesson
   ```
   Each section is one full-screen page on the scroller. While the lesson is on screen, the sidebar lists its sections; `nested: true` indents a section there.
2. Import it in the module's `index.ts` and add it to `lessons`, in reading order.

## Add an exercise
Create `exercises/my-exercise.tsx`, which default-exports an `Exercise` (`slug`, `title`, `summary`, `prompt`, `starterCode`). Then add it to the module's `exercises`. Exercises are placeholders for now: the prompt plus a runnable editor. Checking, hints and solutions come later.

## Add a module
1. Create `content/modules/NN-my-module/index.ts`, which default-exports a `Module`.
2. Add it to the `modules` array in `src/course/registry.ts`. The array order is the course order.
