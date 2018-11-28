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

export const MATRIX_SIZE = 5
