'use client';
import {useEffect} from 'react';

// Original document scripts depend on order and the complete document DOM.
// All links remain ordinary document navigations, so each page starts cleanly.
export function OrgScripts({scripts}){
  useEffect(()=>{
    let cancelled=false;
    const nodes=[];
    const failures=[];
    let loadedCount=0;
    async function load(){
      for(const original of scripts){
        if(cancelled)return;
        const attributes=original.attributes;
        if(attributes.type==='application/ld+json')continue;
        const script=document.createElement('script');
        for(const [key,value] of Object.entries(attributes)){
          if(['src','async','defer','key'].includes(key))continue;
          script.setAttribute(key==='crossOrigin'?'crossorigin':key,String(value));
        }
        nodes.push(script);
        if(attributes.src){
          script.src=attributes.src;script.async=false;
          const loaded=new Promise(resolve=>{script.onload=()=>resolve(true);script.onerror=()=>{
            const failure={src:attributes.src,kind:'load_error'};
            failures.push(failure);
            console.error('Original Org script failed; remaining original scripts continue:',attributes.src);
            resolve(false);
          };});
          document.body.appendChild(script);if(await loaded)loadedCount+=1;
        }else{
          script.textContent=original.children.filter(x=>typeof x==='string').join('');
          document.body.appendChild(script);loadedCount+=1;
        }
      }
      if(!cancelled){
        document.documentElement.dataset.orgScriptsReady=failures.length?'partial':'true';
        document.documentElement.dataset.orgScriptFailures=JSON.stringify(failures);
        document.documentElement.dataset.orgScriptsLoaded=String(loadedCount);
      }
    }
    load().catch(error=>{document.documentElement.dataset.orgScriptsReady='failed';console.error(error);});
    return ()=>{cancelled=true;for(const node of nodes)node.remove();};
  },[scripts]);
  return null;
}
