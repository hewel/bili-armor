import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    format: 'iife',
    name: 'app',
    sourcemap: !production,
    file: production ? 'public/BiliArmor.js' : 'public/dist/bundle.js',
    banner: () => {
      return production
        ? `
        // ==UserScript==
        // @name BiliArmor
        // @description 哔哩哔哩工具
        // @author ${pkg.author.name}
        // @include *://www.bilibili.com/*
        // @include *://space.bilibili.com/*
        // @version ${pkg.version}
        // ==/UserScript==
        `
        : ''
    },
    // intro: () => {
    //   const process = {
    //     env: {
    //       NODE_ENV: production ? 'production' : 'development',
    //     },
    //   }
    //   return `const process = ${JSON.stringify(process)}`
    // },
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      // css: (css) => {
      //   css.write('public/dist/bundle.css');
      // },
      emitCss: true,
    }),
    postcss({
      sourcemap: !production,
      plugins: [
        require('tailwindcss'),
        production && require('autoprefixer'),
        require('postcss-csso'),
      ].filter((p) => p),
    }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production &&
      terser({
        output: {
          comments: (node, { type, value }) => {
            const keywords = [
              '@name',
              '@namespace',
              '@version',
              '@author',
              '@description',
              '@homepage',
              '@homepageURL',
              '@website',
              '@source',
              '@icon',
              '@iconURL',
              '@defaulticon',
              '@icon64',
              '@icon64URL',
              '@updateURL',
              '@downloadURL',
              '@supportURL',
              '@include',
              '@match',
              '@exclude',
              '@require',
              '@resource',
              '@connect',
              '@run-at',
              '@grant',
              '@noframes',
              '@unwrap',
              '@nocompat',
              'UserScript',
            ]
            return (
              type === 'comment1' && new RegExp(keywords.join('|'), 'i').test(value)
            )
          },
        },
      }),
  ],
  watch: {
    clearScreen: false,
  },
}

function serve() {
  let started = false

  return {
    writeBundle() {
      if (!started) {
        started = true

        require('child_process').spawn('serve', ['public'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        })
      }
    },
  }
}
