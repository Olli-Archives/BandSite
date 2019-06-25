export default function indexOffset(array, offset, index){
 const length = array.length;

 if(offset < 0 && (offset + index) < 0 ){
   return array.length + offset;
 } else if( offset < 0 && (offset + index) >= 0){
   return offset + index;
 }else if( offset > 0 && ( offset + index) > length -1){
   return offset + index - array.length;
 }else if( offset > 0 && (offset + index) < length -1){
   return offset + index;
 }else{
   return 0;
 }

}
