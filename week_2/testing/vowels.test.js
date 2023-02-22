import { removeVowels } from './vowels.js';


describe('removeVowels', () => {
  test('deals with no vowels', () => {
    const example1 = removeVowels('bcd');
    const example2 = removeVowels('lkj');
    expect(example1).toEqual('bcd');
    expect(example2).toEqual('lkj');
  });
  test('deals with only vowels', () => {
    expect(removeVowels('aei')).toEqual('');
    expect(removeVowels('oiu')).toEqual('');
  });
  test('deals with starting vowels', () => {
    expect(removeVowels('ant')).toEqual('nt');
    expect(removeVowels('old')).toEqual('ld');
  });
  test('deals with ending vowels', () => {
    expect(removeVowels('bee')).toEqual('b');
    expect(removeVowels('hi')).toEqual('h');
  });
  test('deals with complex words', () => {
    expect(removeVowels('cannot')).toEqual('cnnt');
    expect(removeVowels('delicious')).toEqual('dlcs');
  });
  test('Jake wants to get BlueShirt', () => {
    expect(removeVowels('AEas')).toEqual('s');
  });
});