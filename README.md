# ​​Vogel’s Approximation Method

## Usage

```ts
import { vam, type Problem, type Step } from "vogels-approximation-method";

const problem: Problem = {
  matrix: [
    [3, 2, 7, 6],
    [7, 5, 2, 3],
    [2, 5, 4, 5],
  ],
  x: [60, 40, 20, 15],
  y: [50, 60, 25],
};
const steps: Step[] = vam(problem);
const solution: Step = steps[steps.length - 1];
```
