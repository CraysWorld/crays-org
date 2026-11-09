import {notFound} from 'next/navigation';
import {getOrgPage,collectNodes,pageMetadata} from '../../../src/org-pages.mjs';
import {renderOrgNode} from '../../../src/OrgTree';
import {OrgScripts} from '../../../src/OrgScripts';

export const dynamic='force-dynamic';
export async function generateMetadata({params}){
  const page=await getOrgPage((await params).slug);if(!page)notFound();return pageMetadata(page);
}
export default async function Page({params}){
  const page=await getOrgPage((await params).slug);if(!page)notFound();
  const head=page.head.filter(n=>typeof n!=='string' && ['link','style','script'].includes(n.tag));
  const scripts=[...collectNodes(page.head,'script'),...collectNodes(page.children,'script')];
  return <>{head.map((n,i)=>renderOrgNode(n,`h${i}`))}{page.children.map((n,i)=>renderOrgNode(n,`b${i}`))}<OrgScripts scripts={scripts}/></>;
}
