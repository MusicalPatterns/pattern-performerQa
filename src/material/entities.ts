import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from './parts'
import { PerformerQaParts } from './types'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const parts: PerformerQaParts = buildParts()

        const oscillator: Entity = {
            noteSpecs: parts.oscillator,
            timbreName: TimbreNameEnum.SAW,
        }
        const sample: Entity = {
            noteSpecs: parts.sample,
            timbreName: TimbreNameEnum.PIANO,
        }

        return [
            oscillator,
            sample,
        ]
    }

export {
    buildEntities,
}
