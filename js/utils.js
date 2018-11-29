import { html } from 'https://unpkg.com/@polymer/lit-element@0.6.3/lit-element.js?module'

// This is the map to use to convert chars to numbers
// There is a better way to do this just people may not know ascii conversion charts
const CHAR_MAP = {
  ' ': 0,
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
}

const NUMBER_MAP = _.keys(CHAR_MAP)

export const PAGE_WIDTH = '910px'

export const MATRIX_SIZE = Number(new URL(window.location).search.split('size=')[1] || 5)

export const LOCK = html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><clipPath><rect y="8" x="8" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect width="32" height="32" x="392.57" y="507.8" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect width="32" height="32" x="392.57" y="507.8" fill="none" rx="16"/></clipPath><clipPath><rect width="32" height="32" x="8" y="8" fill="none" rx="16"/></clipPath><clipPath><rect width="32" height="32" x="392.57" y="507.8" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="8" x="8" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><path d="m0 706.47h1490.93v-706.47h-1490.93v706.47"/></clipPath><clipPath><path d="m22.2 686.12h1447.73v-667.19h-1447.73v667.19"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="507.8" x="392.57" height="32" width="32" fill="none" rx="16"/></clipPath><clipPath><rect y="8" x="8" height="32" width="32" fill="none" rx="16"/></clipPath></defs><g transform="matrix(.9939 0 0 .9939.06-1023.96)" fill="#eee"><path d="m12.157 1046.55c.017.093-.045.168-.139.168h-1.997c-.094 0-.157-.076-.139-.168l.318-1.685c-.241-.219-.392-.536-.392-.887 0-.663.537-1.2 1.2-1.2.663 0 1.2.537 1.2 1.2 0 .342-.143.65-.372.869z"/><path d="m14.216 1040.15h-6.415v-1.98c0-1.769 1.439-3.207 3.207-3.207 1.769 0 3.207 1.439 3.207 3.207zm1.711.018v-1.998c0-2.712-2.206-4.919-4.919-4.919-2.712 0-4.919 2.207-4.919 4.919v1.998c-.388.081-.68.426-.68.837v7.488c0 .472.384.855.856.855h9.485c.472 0 .856-.384.856-.855v-7.488c0-.411-.292-.756-.68-.837"/></g></svg>`

export const UNLOCK = html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g transform="matrix(.04252 0 0 .04252 3 2.958)" fill="#eee"><path d="m299.02 161.26h-185.84v-46.28c0-41.34 33.635-74.979 74.979-74.979 33.758 0 63.51 22.716 72.36 55.24 2.898 10.657 13.888 16.946 24.547 14.05 10.659-2.898 16.949-13.889 14.05-24.548-13.57-49.896-59.2-84.74-110.96-84.74-63.4 0-114.98 51.58-114.98 114.98v46.715c-9.06 1.902-15.888 9.952-15.888 19.571v175.05c0 11.03 8.972 20 20 20h221.73c11.03 0 20-8.972 20-20v-175.05c0-11.03-8.972-20-20-20"/><path d="m215.02 310.91c.408 2.162-1.058 3.931-3.258 3.931h-46.677c-2.2 0-3.666-1.769-3.258-3.931l7.432-39.39c-5.626-5.131-9.157-12.52-9.157-20.734 0-15.495 12.561-28.06 28.06-28.06 15.495 0 28.06 12.561 28.06 28.06 0 7.991-3.346 15.195-8.707 20.305z"/></g></svg>`

export function encodeChar(x) {
  if (x.length > 0) {
    return [ ...x ].map(c => CHAR_MAP[c.toLowerCase()])
  }
  return CHAR_MAP[x]
}

export function decodeChar(x) {
  if (x.length > 0) {
    return [ ...x ].map(c => NUMBER_MAP[c.toLowerCase()])
  }
  return NUMBER_MAP[x] || ''
}

export function generateMatrix(m, n, range=26) {
  let matrix;
  do {
    matrix = [ ...Array(m) ].map(x => [ ...Array(n) ].map(_ => Math.floor(Math.random() * range)))
  } while (math.det(matrix) == 0);
  return matrix;
}
