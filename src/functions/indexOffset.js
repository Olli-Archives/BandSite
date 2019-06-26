export default function indexOffset(array, offset, index){
  console.log('received array is', array);

 const length = array.length;

 if(offset < 0 && (offset + index) < 0 ){
   console.log('with length:',length,'with offset:',offset,'with index', index,'returning:',array.length + offset)
   return array.length + offset;
 } else if( offset < 0 && (offset + index) >= 0){
  console.log('with length:',length,'with offset:',offset,'with index', index,'returning:',offset + index)
   return offset + index;
 }else if( offset > 0 && ( offset + index) > length -1){
  console.log('with length:',length,'with offset:',offset,'with index', index,'returning:',offset + index - array.length)
   return offset + index - array.length;
 }else if( offset > 0 && (offset + index) <= length -1){
  console.log('with length:',length,'with offset:',offset,'with index', index,'returning:',offset + index)
   return offset + index;
 }else if( offset === 0){
  console.log('with length:',length,'with offset:',offset,'with index', index,'returning:',index)
   return index;

 }
 else{
   console.log('couldnt find a case with offset', offset, );
   return 0;
 }

}
