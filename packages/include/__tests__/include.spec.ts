import { describe, expect, it } from 'vitest';
import { include } from '..';

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

describe('exclude.ts', () => {
  it('should pick first array', () => {    
    expect(include(arr, [1])).deep.eq([[1, 2, 3]]);
    expect(include(arr, [2])).deep.eq([[1, 2, 3]]);
    expect(include(arr, [3])).deep.eq([[1, 2, 3]]);
  });

  it('should pick second array', () => {    
    expect(include(arr, [4])).deep.eq([[4, 5, 6]]);
    expect(include(arr, [5])).deep.eq([[4, 5, 6]]);
    expect(include(arr, [6])).deep.eq([[4, 5, 6]]);
  });

  it('should pick third array', () => {    
    expect(include(arr, [7])).deep.eq([[7, 8, 9]]);
    expect(include(arr, [8])).deep.eq([[7, 8, 9]]);
    expect(include(arr, [9])).deep.eq([[7, 8, 9]]);
  });
});
