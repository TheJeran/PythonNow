export const sections = [
  {
    id: 'intro',
    eyebrow: '00 — Welcome',
    title: 'Learn Python, right here in the browser.',
    body: 'Every code block on this page is live. Nothing installs, nothing to configure — just scroll, read, and run.',
    code: `print("hello, world")`,
  },
  {
    id: 'variables',
    eyebrow: '01 — Variables',
    title: 'Naming your data',
    body: 'A variable is just a label pointing at a value. Change the numbers below and run it again.',
    code: `price = 4.5\nquantity = 3\ntotal = price * quantity\nprint(total)`,
  },
  {
    id: 'loops',
    eyebrow: '02 — Loops',
    title: 'Repeating yourself, on purpose',
    body: 'A for loop walks through a sequence one item at a time.',
    code: `for n in range(5):\n    print(n, n * n)`,
  },
  {
    id: 'functions',
    eyebrow: '03 — Functions',
    title: 'Packaging up behaviour',
    body: 'Functions let you name a piece of logic and reuse it.',
    code: `def greet(name):\n    return f"hello, {name}"\n\nprint(greet("world"))`,
  },
]
