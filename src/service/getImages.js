// import React from 'react';
import {apiFetch} from './fetch';

export function getImages(){
  const path = 'images'
   return apiFetch(path, 'GET')
    .then(pics=>pics);

} 