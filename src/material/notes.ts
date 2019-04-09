import { Note } from '@musical-patterns/material'
import { computeContours, computeDelayContours } from './contours'
import { computeNote } from './features'
import { PerformerQaContours, PerformerQaNotes } from './types'

const computeNotes: () => PerformerQaNotes =
    (): PerformerQaNotes => {
        const contours: PerformerQaContours = computeContours()

        const oscillator: Note[] = contours.oscillator.map(computeNote)
        const sample: Note[] = contours.sample.map(computeNote)

        return {
            oscillator,
            sample,
        }
    }

const computeDelayNotes: () => PerformerQaNotes =
    (): PerformerQaNotes => {
        const contours: PerformerQaContours = computeDelayContours()
        const oscillator: Note[] = contours.oscillator.map(computeNote)
        const sample: Note[] = contours.sample.map(computeNote)

        return {
            oscillator,
            sample,
        }
    }

export {
    computeDelayNotes,
    computeNotes,
}
