import { NoteSpec } from '@musical-patterns/compiler'
import { buildContours } from './contours'
import { buildNoteSpec } from './notes'
import { PerformerQaContours, PerformerQaParts } from './types'

const buildParts: () => PerformerQaParts =
    (): PerformerQaParts => {
        const contours: PerformerQaContours = buildContours()

        const oscillator: NoteSpec[] = contours.oscillator.map(buildNoteSpec)
        const sample: NoteSpec[] = contours.sample.map(buildNoteSpec)

        return {
            oscillator,
            sample,
        }
    }

export {
    buildParts,
}
