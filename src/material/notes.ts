import { Note } from '@musical-patterns/material'
import { Thunk } from '@musical-patterns/utilities'
import { thunkContours, thunkDelayContours } from './contours'
import { computeNote } from './features'
import { MaterialQaContours, MaterialQaNotes } from './types'

const thunkNotes: Thunk<MaterialQaNotes> =
    (): MaterialQaNotes => {
        const contours: MaterialQaContours = thunkContours()

        const oscillator: Note[] = contours.oscillator.map(computeNote)
        const sample: Note[] = contours.sample.map(computeNote)

        return {
            oscillator,
            sample,
        }
    }

const thunkDelayNotes: Thunk<MaterialQaNotes> =
    (): MaterialQaNotes => {
        const contours: MaterialQaContours = thunkDelayContours()
        const oscillator: Note[] = contours.oscillator.map(computeNote)
        const sample: Note[] = contours.sample.map(computeNote)

        return {
            oscillator,
            sample,
        }
    }

export {
    thunkDelayNotes,
    thunkNotes,
}
