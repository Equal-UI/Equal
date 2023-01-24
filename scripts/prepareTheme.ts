// import full from '../src/theme/full'
// import light from '../src/theme/light'
// import dark from '../src/theme/dark'
import fs from 'fs'

fs.mkdirSync('./dist/theme', { recursive: true })
fs.copyFileSync('./src/theme/full.ts', './dist/theme/full.ts')
fs.copyFileSync('./src/theme/full.ts', './dist/theme/full.js')
fs.copyFileSync('./src/theme/light.ts', './dist/theme/light.ts')
fs.copyFileSync('./src/theme/light.ts', './dist/theme/light.js')
fs.copyFileSync('./src/theme/dark.ts', './dist/theme/dark.ts')
fs.copyFileSync('./src/theme/dark.ts', './dist/theme/dark.js')

// fs.writeFileSync('./dist/theme/full.json', JSON.stringify(full, null, 2))
// fs.writeFileSync('./dist/theme/light.json', JSON.stringify(light, null, 2))
// fs.writeFileSync('./dist/theme/dark.json', JSON.stringify(dark, null, 2))
