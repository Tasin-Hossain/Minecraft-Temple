// /editor/extensions/TextAlign.js
import { TextAlign as TAlign } from '@tiptap/extension-text-align'

export const TextAlign = TAlign.extend({
  addOptions() {   return {
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
    }
  },
})
