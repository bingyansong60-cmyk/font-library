import {defineConfig} from 'vite';
export default defineConfig({base:'/font-library/',build:{sourcemap:false},server:{proxy:{'/membership-api':{target:'https://font-library-membership.abcgajgwhb.chatgpt.site',changeOrigin:true,rewrite:path=>path.replace(/^\/membership-api/,'/api')}}}});
