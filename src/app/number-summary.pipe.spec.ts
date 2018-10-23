import { NumberSummaryPipe } from './number-summary.pipe';

describe('NumberSummaryPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberSummaryPipe();
    expect(pipe).toBeTruthy();
  });
});
