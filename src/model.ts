import type {ComponentType} from 'react';
export type SystemId = 'shop'|'crm'|'erp'|'warehouse'|'finance'|'data'|'reports';
export interface TeachingNotes { understand:string; say:string; action:string; question:string; misconceptions:string; transition:string }
export interface Scene {id:string; title:string; subtitle:string; section:string; kind:'reveal'|'landscape'|'order'|'methods'|'risks'|'mapping'|'improvement'; steps:string[]; concept:string; question:string; notes:TeachingNotes; visual?:ComponentType<{step:number}>}
export interface Chapter {id:string; title:string; description:string; concepts:string[]; scenes:Scene[]}
export interface Connection {id:string; source:SystemId; target:SystemId; data:string; method:'API'|'Fil'|'Kö'; frequency:string; verified:boolean}
export const systems:{id:SystemId;name:string;role:string;owner:string;x:number;y:number}[]=[
{id:'shop',name:'Webbshop',role:'Kundmöte & beställning',owner:'E-handel',x:70,y:80},
{id:'crm',name:'CRM',role:'Kundrelation & kontakt',owner:'Försäljning',x:70,y:340},
{id:'erp',name:'ERP',role:'Order & affärslogik',owner:'Orderorganisation',x:390,y:210},
{id:'warehouse',name:'Lagersystem',role:'Plock, pack & leverans',owner:'Logistik',x:710,y:70},
{id:'finance',name:'Ekonomisystem',role:'Fakturering & bokföring',owner:'Ekonomi',x:710,y:350},
{id:'data',name:'Datalager',role:'Samlad analysdata',owner:'Analys',x:1040,y:210},
{id:'reports',name:'Rapportportal',role:'Beslutsstöd & uppföljning',owner:'Verksamhetsstyrning',x:1340,y:210}];
export const connections:Connection[]=[
{id:'shop-erp',source:'shop',target:'erp',data:'Order, kund-ID, orderrader',method:'API',frequency:'Vid beställning',verified:true},
{id:'shop-crm',source:'shop',target:'crm',data:'Kontaktuppgifter, kund-ID',method:'API',frequency:'Vid kundändring',verified:true},
{id:'erp-warehouse',source:'erp',target:'warehouse',data:'Order-ID, artiklar, antal, leveransadress',method:'Kö',frequency:'Löpande',verified:true},
{id:'erp-finance',source:'erp',target:'finance',data:'Order-ID, belopp, moms, fakturaadress',method:'API',frequency:'Vid fakturaunderlag',verified:true},
{id:'warehouse-erp',source:'warehouse',target:'erp',data:'Leveransstatus, order-ID',method:'Kö',frequency:'Vid leverans',verified:true},
{id:'erp-data',source:'erp',target:'data',data:'Orderhistorik',method:'Fil',frequency:'Varje timme',verified:true},
{id:'finance-data',source:'finance',target:'data',data:'Fakturor, betalningsstatus',method:'Fil',frequency:'Varje timme',verified:true},
{id:'crm-data',source:'crm',target:'data',data:'Kundsegment (att verifiera)',method:'Fil',frequency:'Ej verifierad',verified:false},
{id:'data-reports',source:'data',target:'reports',data:'Aggregerade nyckeltal',method:'API',frequency:'Vid uppdatering av rapport',verified:true}];
export const example={customer:'Alex Andersson',customerId:'K-1042',order:'ORD-2048',product:'P-310 · Fjällryggsäck',quantity:2,total:'1 598 kr',address:'Exempelgatan 12, Örebro',invoice:'FA-8301'};
export function downstream(start:SystemId){const visited=new Set<SystemId>([start]);let changed=true;while(changed){changed=false;for(const c of connections.filter(c=>c.verified)){if(visited.has(c.source)&&!visited.has(c.target)){visited.add(c.target);changed=true}}}visited.delete(start);return [...visited]}
export function advance(scene:number,step:number,direction:number,scenes:Scene[]){if(direction>0){if(step<scenes[scene].steps.length-1)return {scene,step:step+1};if(scene<scenes.length-1)return {scene:scene+1,step:0}}else{if(step>0)return {scene,step:step-1};if(scene>0)return {scene:scene-1,step:scenes[scene-1].steps.length-1}}return {scene,step}}
