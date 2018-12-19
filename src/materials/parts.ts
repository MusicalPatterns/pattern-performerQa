import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildBlocks } from './blocks'
import { buildNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const {
            firstBlock,
            secondBlock,
        } = buildBlocks()
        const firstPart: NoteSpec[] = firstBlock.map(buildNoteSpec)
        const secondPart: NoteSpec[] = secondBlock.map(buildNoteSpec)

        return {
            firstPart,
            secondPart,
        }
    }

export {
    buildParts,
}
