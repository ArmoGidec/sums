import { describe, expect, it } from 'vitest';
import { exclude } from '..';

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

describe('exclude.ts', () => {
  it('should exclude first array', () => {    
    expect(exclude(arr, [1])).deep.eq([[4, 5, 6], [7, 8, 9]]);
  });

  it('should exclude second array', () => {    
    expect(exclude(arr, [4])).deep.eq([[1, 2, 3], [7, 8, 9]]);
  });

  it('should exclude third array', () => {    
    expect(exclude(arr, [7])).deep.eq([[1, 2, 3], [4, 5, 6]]);
  });

  it('should left first array', () => {    
    expect(exclude(arr, [4, 7])).deep.eq([[1, 2, 3]]);
  });

  it('should left second array', () => {    
    expect(exclude(arr, [1, 7])).deep.eq([[4, 5, 6]]);
  });

  it('should left third array', () => {    
    expect(exclude(arr, [1, 4])).deep.eq([[7, 8, 9]]);
  });
});
