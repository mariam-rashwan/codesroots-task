import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {

  let pipe :TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should return an empty string if input is null', () => {
    const result = pipe.transform('');
    expect(result).toEqual('');
  });


  it('should truncate string to specified number of words', () => {
   const input = 'It helps to restore the bodys natural balance and provides hydration to health purity and quality drinking water that keeps you fresh and rejuvenated throughout the day.\r\nNow always have clean and safe water with this drinking water bottle';
  const expectedOutput = 'It helps to restore the bodys natural balance and provides hydration to health purity and quality drinking water....';
    expect(pipe.transform(input, 18)).toBe(expectedOutput);
  });   

  
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });
});
