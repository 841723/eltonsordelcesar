# Instrucciones del repositorio

- Usa Node.js 26.13.0 indicado en `.nvmrc`. Para instalación limpia: `npm ci`.
- Comandos disponibles: `npm run dev`, `npm run check` (`astro check`), `npm run build` y `npm run preview`. No hay scripts de test ni lint.
- Es una landing estática de una sola ruta; la entrada es `src/pages/index.astro`. Los datos del negocio y los medios se centralizan en `src/data/business.ts`.
- Antes de modificar la UI, lee `.design`; ese archivo es el contrato visual vigente.
- El sitio se publica bajo `/eltonsordelcesar/` en GitHub Pages. El workflow obtiene `--site` y `--base` de `configure-pages`; para probar localmente ese prefijo usa `npm run build -- --base /eltonsordelcesar`.
- No uses rutas raíz hardcodeadas para imágenes públicas: constrúyelas con `import.meta.env.BASE_URL` mediante `mediaPath` en `src/data/business.ts`. El preload del hero usa `business.media.hero.src`.
- Los archivos públicos están en `public/media/images`; conserva en `business.ts` la fuente y el estado provisional al añadir o sustituir imágenes.
- GitHub Pages debe tener **Settings → Pages → Source: GitHub Actions** habilitado para que el workflow pueda obtener la configuración del sitio.
