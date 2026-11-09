import {notFound} from 'next/navigation';
import {getOrgPage} from '../../../src/org-pages.mjs';

export default async function WebsiteLayout({children,params}){
  const page=await getOrgPage((await params).slug);
  if(!page)notFound();
  return <html {...page.htmlAttributes}><body {...page.bodyAttributes}>{children}</body></html>;
}
