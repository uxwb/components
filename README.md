# @uxwb/components

## Demo

see [here](https://uxwb.ru/)

## Installation

```bash
  $ npm i @uxwb/components --save
```

## Use

`styles.scss`

```scss
@import "@uxwb/components";
```

`app.module.ts`

```typescript
import { UxwbComponentsModule } from '@uxwb/components';

@NgModule({
  ...
  imports: [
    ...
    UxwbComponentsModule,
  ],
  ...
})
```

## Components

* uxwb-list
* uxwb-input
* uxwb-tab

## License

BSD-3-Clause License. See the LICENSE file for details.
