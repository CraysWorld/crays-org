import {readFile} from 'node:fs/promises';
import path from 'node:path';
import registry from '../data/routes.json' with {type:'json'};

export async function getOrgPage(slug=[]){
  const route='/'+slug.join('/');
  // The immutable registry chooses the file; request input is never a file path.
  const name=registry[route];
  if(!name) return null;
  return JSON.parse(await readFile(path.join(process.cwd(),'data/pages',name),'utf8'));
}
export function collectNodes(nodes,tag){
  return nodes.flatMap(node=>typeof node==='string'?[]:[...(node.tag===tag?[node]:[]),...collectNodes(node.children,tag)]);
}
export function nodeText(node){return typeof node==='string'?node:node.children.map(nodeText).join('');}
export function pageMetadata(page){
  const meta=collectNodes(page.head,'meta');
  const named=name=>meta.find(n=>n.attributes.name===name)?.attributes.content;
  const property=name=>meta.find(n=>n.attributes.property===name)?.attributes.content;
  const canonical=collectNodes(page.head,'link').find(n=>n.attributes.rel==='canonical')?.attributes.href;
  return {title:nodeText(collectNodes(page.head,'title')[0]??''),description:named('description'),
    robots:named('robots'),keywords:named('keywords'),alternates:{canonical},
    openGraph:{title:property('og:title'),description:property('og:description'),url:property('og:url'),
      siteName:property('og:site_name'),images:property('og:image')?[{url:property('og:image'),alt:property('og:image:alt')}]:[]},
    twitter:{card:named('twitter:card')??'summary_large_image',title:named('twitter:title'),description:named('twitter:description'),images:named('twitter:image')?[named('twitter:image')]:[]}};
}
