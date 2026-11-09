'use client';
import {useRef} from 'react';

// Explicit equivalents of the three original trusted image fallback handlers.
// No inline JavaScript or event-handler strings are evaluated.
export function OrgImage({attributes}){
  const retried=useRef(false);
  function onError(event){
    const image=event.currentTarget;
    if(attributes['data-org-error-hide']){image.hidden=true;return;}
    if(retried.current)return;
    retried.current=true;
    const localBrand=attributes['data-org-error-local-brand'];
    if(localBrand){image.classList.add('is-source-icon');image.src=localBrand;return;}
    const fallback=attributes['data-org-error-favicon'];
    if(fallback){image.classList.add('is-source-icon');image.src=fallback;}
    else if(attributes['data-org-error-youtube'])image.src=image.src.replace('https://img.youtube.com/','https://i.ytimg.com/');
  }
  return <img {...attributes} onLoad={event=>{if(attributes['data-org-load-class'])event.currentTarget.classList.add(attributes['data-org-load-class']);}} onError={onError}/>;
}
