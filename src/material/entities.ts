import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/material'
import { PERFORMER_QA_DELAY } from './constants'
import { computeDelayNotes, computeNotes } from './notes'
import { PerformerQaNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: PerformerQaNotes = computeNotes()

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
        const notes: PerformerQaNotes = computeDelayNotes()

        const oscillator: Entity = {
            delay: PERFORMER_QA_DELAY,
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
