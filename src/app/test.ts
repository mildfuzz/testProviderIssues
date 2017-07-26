import { Provider } from '@angular/core';

export class Test {}

export function TestProvider(): Provider {
  return {
      provide: Test,
      useValue: new Test()
  };
}
