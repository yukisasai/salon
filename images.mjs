/** 03 美容脱毛サロン「ぬか / NUKA」深い葡萄色 × シャンパンゴールド */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { atmosphere, texture, portraitBox } from '../_shared/scenes.mjs';
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), 'images');
mkdirSync(OUT, { recursive: true });
const put = (n, s) => writeFileSync(resolve(OUT, n + '.svg'), s, 'utf8');

const PLUM='#3A2130', PLUM2='#5A3348', WINE='#7A3E56', BLUSH='#E8D6DE', GOLD='#C9A46A', PAPER='#F7F2F4';

put('hero',  atmosphere({ w:1400,h:1750, palette:[PLUM,PLUM2,WINE,'#2A1723'], seed:22, light:.24, label:'メイン' }));
put('og',    atmosphere({ w:1200,h:630,  palette:[PLUM,PLUM2,WINE],           seed:22, light:.24, label:'OGP' }));
put('room',  atmosphere({ w:1000,h:750,  palette:['#2E1A26',PLUM2,'#4A2A3A'], seed:31, light:.2,  label:'施術室' }));
put('silk',  texture({ w:1000,h:1000, base:'#6B3A50', tint:'#1E1017', kind:'fabric', label:'ドレープ' }));
put('st-01', portraitBox({ w:700,h:900, bg:PLUM2, ink:PAPER, accent:GOLD, label:'実写差し替え', note:'スタッフ / バストアップ' }));
put('st-02', portraitBox({ w:700,h:900, bg:WINE,  ink:PAPER, accent:GOLD, label:'実写差し替え', note:'スタッフ / バストアップ' }));
['01','02','03'].forEach((n,i)=>put('c-'+n, portraitBox({ w:400,h:400, bg:[PLUM2,WINE,'#4A2A3A'][i], ink:PAPER, accent:GOLD, label:'お客様', note:'' })));
console.log('✓ 03-salon 9枚');
