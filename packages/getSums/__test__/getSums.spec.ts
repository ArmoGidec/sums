import { it, expect, describe } from 'vitest';
import { getSums } from '..';

describe('getSums.ts', () => {
  it('Should be eq [[1, 2]]', async () => {
    const sums = await getSums(3, 2);
    expect(sums).deep.eq([[1, 2]]);
  });
  
  it('Should be eq [[1, 2, 3]]', async () => {
    const sums = await getSums(6, 3);
    expect(sums).deep.eq([[1, 2, 3]]);
  });
  
  it('Should be eq [[1, 2, 4]]', async () => {
    const sums = await getSums(7, 3);
    expect(sums).deep.eq([[1, 2, 4]]);
  });
  
  it('Should be eq [[1, 2, 5], [1, 3, 4]]', async () => {
    const sums = await getSums(8, 3);
    expect(sums).deep.eq([[1, 2, 5], [1, 3, 4]]);
  });
  
  it('Should be eq [[6, 8, 9]]', async () => {
    const sums = await getSums(23, 3);
    expect(sums).deep.eq([[6, 8, 9]]);
  });
});
