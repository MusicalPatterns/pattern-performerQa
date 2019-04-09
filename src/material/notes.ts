import { Note } from '@musical-patterns/material'
import { computeContours, computeDelayContours } from './contours'
import { computeNote } from './features'
import { MaterialQaContours, MaterialQaNotes } from './types'

const computeNotes: () => MaterialQaNotes =
    (): MaterialQaNotes => {
        const contours: MaterialQaContours = computeContours()

        const oscillator: Note[] = contours.oscillator.map(computeNote)
        const sample: Note[] = contours.sample.map(computeNote)

        return {
            oscillator,
            sample,
        }
    }

const computeDelayNotes: () => MaterialQaNotes =
    (): MaterialQaNotes => {
        const contours: MaterialQaContours = computeDelayContours()
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
