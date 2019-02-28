import { NoteSpec } from '@musical-patterns/compiler'
import { buildBlocks } from './blocks'
import { buildNoteSpec } from './notes'
import { PerformerQaBlocks, PerformerQaParts } from './types'

const buildParts: () => PerformerQaParts =
    (): PerformerQaParts => {
        const blocks: PerformerQaBlocks = buildBlocks()
        const oscillator: NoteSpec[] = blocks.oscillator.map(buildNoteSpec)
        const sample: NoteSpec[] = blocks.sample.map(buildNoteSpec)

        return {
            oscillator,
            sample,
        }
    }

export {
    buildParts,
}
