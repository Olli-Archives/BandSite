import indexOffset from './indexOffset';


describe('test indexOffset function', ()=>{
  it('at index 0 an offset of -1 will return the max index', ()=>{
    const array = ['1','2','3'];
    const offset = -1;
    const index = 0;
    const updatedIndex = indexOffset(array, offset, index);
    expect(updatedIndex).toEqual(2);
  })
  it('at index of 1 and offset of -1 will return 0', ()=>{
    const array = ['1','2','3'];
    const offset = -1;
    const index = 1;
    const updatedIndex = indexOffset(array, offset, index);
    expect(updatedIndex).toEqual(0);
  })
  it('at an indox offset of 1 and at the end of array, will return first item', ()=>{
    const array = ['1','2','3'];
    const offset = +1;
    const index = 2;
    const updatedIndex = indexOffset(array, offset, index);
    expect(updatedIndex).toEqual(0);
  })
  it('at start of array, offst of 1 will get next index', ()=>{
    const array = ['1','2','3'];
    const offset = +1;
    const index = 0;
    const updatedIndex = indexOffset(array, offset, index);
    expect(updatedIndex).toEqual(1);
  })

})