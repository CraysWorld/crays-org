import {AccountEntry} from '../../../src/account-entry/AccountEntry';
import {getOrgPage,collectNodes} from '../../../src/org-pages.mjs';
import {renderOrgNode} from '../../../src/OrgTree';
import {OrgScripts} from '../../../src/OrgScripts';
import styles from './org-account-frame.module.css';

export const metadata={title:'Account & Sign-in | CRAYS Association',description:'One secure CRAYS account for your world, services and member support.',alternates:{canonical:'https://www.crays.org/account'}};
const links=Object.freeze({login:'https://member.crays.world/auth/login',signup:'https://member.crays.world/auth/login?screen_hint=signup',team:'https://member.crays.world/work/auth/login'});
export default async function Page(){
  const home=await getOrgPage();
  const header=home.children.find(n=>typeof n!=='string' && String(n.attributes.className).split(' ').includes('navbar10_component'));
  const footer=home.children.find(n=>typeof n!=='string' && n.tag==='footer');
  const head=home.head.filter(n=>typeof n!=='string' && ['link','style'].includes(n.tag));
  const scripts=[...collectNodes([footer],'script'),...home.children.filter(n=>typeof n!=='string' && n.tag==='script')];
  return <div className={styles.frame}>{head.map((n,i)=>renderOrgNode(n,`ah${i}`))}<AccountEntry locale="en" links={links} header={renderOrgNode(header,'account-header')} footer={renderOrgNode(footer,'account-footer')}/><OrgScripts scripts={scripts}/></div>;
}
