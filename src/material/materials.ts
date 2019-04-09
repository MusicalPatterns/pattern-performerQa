import { Material } from '@musical-patterns/material'
import { materializeDelayEntities, materializeEntities } from './entities'
import { materializeScales } from './scales'

const material: Material = {
    materializeEntities,
    materializeScales,
}

const delayMaterial: Material = {
    materializeEntities: materializeDelayEntities,
    materializeScales,
}

export {
    material,
    delayMaterial,
}
