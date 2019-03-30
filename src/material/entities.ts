import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/compiler'
import { computeNotes } from './notes'
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

export {
    materializeEntities,
}
