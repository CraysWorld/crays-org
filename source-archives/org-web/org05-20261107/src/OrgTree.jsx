import {createElement} from 'react';
import {OrgImage} from './OrgImage';
import {nodeText} from './org-pages.mjs';

const nativeLoginLabels={"Beta Login": "Log in", "Beta-Login": "Login", "Iniciar sesión": "Iniciar sesión", "Inici de sessió beta": "Inici de sessió", "Connexion bêta": "Connexion", "Login beta": "Login", "Accesso beta": "Accesso"};

const svgTags={clippath:'clipPath',lineargradient:'linearGradient',radialgradient:'radialGradient',textpath:'textPath',foreignobject:'foreignObject'};
export function renderOrgNode(node,key){
  if(typeof node==='string')return node;
  const attributes={...node.attributes,key};
  const tag=svgTags[node.tag]??node.tag;
  if(tag==='script'){
    if(attributes.type==='application/ld+json'){
      const json=JSON.stringify(JSON.parse(nodeText(node))).replace(/</g,'\\u003c');
      return <script key={key} type="application/ld+json" dangerouslySetInnerHTML={{__html:json}}/>;
    }
    return null; // Executable original scripts load sequentially after hydration.
  }
  if(tag==='a' && String(attributes.className).split(' ').includes('button-nav') && Object.hasOwn(nativeLoginLabels,nodeText(node).trim())){
    attributes.href='/account';
    attributes.className=String(attributes.className).split(' ').filter(x=>x!=='hide').join(' ');
    return createElement('a',attributes,nativeLoginLabels[nodeText(node).trim()]);
  }
  if(tag==='input'){
    if('value' in attributes){attributes.defaultValue=attributes.value;delete attributes.value;}
    if('checked' in attributes){attributes.defaultChecked=attributes.checked;delete attributes.checked;}
  }
  if(tag==='textarea')return createElement(tag,{...attributes,defaultValue:nodeText(node)});
  if(tag==='img' && Object.keys(attributes).some(x=>x.startsWith('data-org-error-')||x==='data-org-load-class')){
    delete attributes.key;
    return <OrgImage key={key} attributes={attributes}/>;
  }
  return createElement(tag,attributes,...node.children.map((child,index)=>renderOrgNode(child,`${key}.${index}`)));
}
