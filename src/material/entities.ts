import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/material'
import { MATERIAL_QA_DELAY } from './constants'
import { computeDelayNotes, computeNotes } from './notes'
import { MaterialQaNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: MaterialQaNotes = computeNotes()

        const oscillator: Entity = {
            sections: [ { notes: notes.oscillator } ],
            timbreName: TimbreNameEnum.SAW,
        }
        const sample: Entity = {
            sections: [ { notes: notes.sample } ],
            timbreName: TimbreNameEnum.PIANO,
        }

        return [
            oscillator,
            sample,
        ]
    }

const materializeDelayEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: MaterialQaNotes = computeDelayNotes()

        const oscillator: Entity = {
            delay: MATERIAL_QA_DELAY,
            sections: [ { notes: notes.oscillator } ],
            timbreName: TimbreNameEnum.SAW,
        }
        const sample: Entity = {
            sections: [ { notes: notes.sample } ],
            timbreName: TimbreNameEnum.PIANO,
        }

        return [
            oscillator,
            sample,
        ]
    }

export {
    materializeEntities,
    materializeDelayEntities,
}
