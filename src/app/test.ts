import { Provider } from '@angular/core';

class Test {}

export function TestProvider(): Provider {
  return {
      provide: Test,
      useValue: new Test()
  };
}
