import { Note } from '@musical-patterns/compiler'
import { buildContours } from './contours'
import { buildNote } from './features'
import { PerformerQaContours, PerformerQaNotes } from './types'

const buildNotes: () => PerformerQaNotes =
    (): PerformerQaNotes => {
        const contours: PerformerQaContours = buildContours()

        const oscillator: Note[] = contours.oscillator.map(buildNote)
        const sample: Note[] = contours.sample.map(buildNote)

        return {
            oscillator,
            sample,
        }
    }

export {
    buildNotes,
}
