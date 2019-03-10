import { Entity, MaterializeEntities, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildNotes } from './notes'
import { PerformerQaNotes } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const notes: PerformerQaNotes = buildNotes()

        const oscillator: Entity = {
            notes: notes.oscillator,
            timbreName: TimbreNameEnum.SAW,
        }
        const sample: Entity = {
            notes: notes.sample,
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
