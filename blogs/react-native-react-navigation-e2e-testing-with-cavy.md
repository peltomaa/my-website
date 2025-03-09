---
title: "React Native + React Navigation e2e testing with Cavy"
date: "Mon Apr 13 2020 03:00:00 GMT+0300 (Eastern European Summer Time)"
description: "Guide to implementing end-to-end testing in React Native apps using Cavy with React Navigation, including navigation testing patterns and best practices."
---


[Cavy](https://cavy.app/) is a awesome React Native e2e testing library. 
It's easy to create tests, but usage React Navigation is undocumented. 

Here is a technique to control React Navigation 5 navigator in tests.

```tsx
// App.ts
import { NavigationContainer } from '@react-navigation/native';
import { useCavy } from 'cavy';

export default function App() {
  const generateTestHook = useCavy();
  return (
    <NavigationContainer ref={generateTestHook('Navigation')}>{/* ... */}</NavigationContainer>
  );
}
```

And create navigateBack helper:

```tsx
// helper.ts
export async function navigateBack(navigation: any) {
    navigation.goBack();
}
```

Call helper from your tests:

```tsx
// navgationSpec.ts
import { TestScope } from 'cavy';
import { navigateBack } from './helpers';

export default function(spec: TestScope) {
  spec.describe('Test', function() {

    spec.it('works', async function() {
      const navigationComponent = await spec.findComponent('Navigation');
      await navigateBack(navigationComponent)
    });
  });
}
```

