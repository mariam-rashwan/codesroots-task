import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  let pipe: FullNamePipe;

  beforeEach(() => {
    pipe = new FullNamePipe();
  });

  it('should return full name', () => {
    const firstName = 'Ahmed';
    const lastName = 'Ali';
    const result = pipe.transform(firstName, lastName);
    expect(result).toEqual('Dr. Ahmed Ali');
  });


  it('create an instance', () => {
    expect(pipe.transform("Ahmed")).toBeTruthy();
  });

  
});
