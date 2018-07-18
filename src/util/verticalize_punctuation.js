// @flow

import {
    charHasRotatedVerticalOrientation,
} from './script_detection';

export const verticalizedCharacterMap = {
    '!': '︕',
    '#': '＃',
    '$': '＄',
    '%': '％',
    '&': '＆',
    '(': '︵',
    ')': '︶',
    '*': '＊',
    '+': '＋',
    ',': '︐',
    '-': '︲',
    '.': '・',
    '/': '／',
    ':': '︓',
    ';': '︔',
    '<': '︿',
    '=': '＝',
    '>': '﹀',
    '?': '︖',
    '@': '＠',
    '[': '﹇',
    '\\': '＼',
    ']': '﹈',
    '^': '＾',
    '_': '︳',
    '`': '｀',
    '{': '︷',
    '|': '―',
    '}': '︸',
    '~': '～',
    '¢': '￠',
    '£': '￡',
    '¥': '￥',
    '¦': '￤',
    '¬': '￢',
    '¯': '￣',
    '–': '︲',
    '—': '︱',
    '‘': '﹃',
    '’': '﹄',
    '“': '﹁',
    '”': '﹂',
    '…': '︙',
    '‧': '・',
    '₩': '￦',
    '、': '︑',
    '。': '︒',
    '〈': '︿',
    '〉': '﹀',
    '《': '︽',
    '》': '︾',
    '「': '﹁',
    '」': '﹂',
    '『': '﹃',
    '』': '﹄',
    '【': '︻',
    '】': '︼',
    '〔': '︹',
    '〕': '︺',
    '〖': '︗',
    '〗': '︘',
    '！': '︕',
    '（': '︵',
    '）': '︶',
    '，': '︐',
    '－': '︲',
    '．': '・',
    '：': '︓',
    '；': '︔',
    '＜': '︿',
    '＞': '﹀',
    '？': '︖',
    '［': '﹇',
    '］': '﹈',
    '＿': '︳',
    '｛': '︷',
    '｜': '―',
    '｝': '︸',
    '｟': '︵',
    '｠': '︶',
    '｡': '︒',
    '｢': '﹁',
    '｣': '﹂'
};

export default function verticalizePunctuation(input: Array<{ charCode: number, section: number}>) {
    for (let i = 0; i < input.length; i++) {
        const nextChar = input[i + 1] || null;
        const prevChar = input[i - 1] || null;

        const canReplacePunctuation = (
            (!nextChar || !charHasRotatedVerticalOrientation(nextChar.charCode) || verticalizedCharacterMap[input[i + 1].charCode]) &&
            (!prevChar || !charHasRotatedVerticalOrientation(prevChar.charCode) || verticalizedCharacterMap[input[i - 1].charCode])
        );

        if (canReplacePunctuation && verticalizedCharacterMap[input[i].charCode]) {
            input[i].charCode = verticalizedCharacterMap[input[i].charCode];
        }
    }
}
