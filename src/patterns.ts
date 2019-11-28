import { Id } from '@musical-patterns/id'
import { Pattern, Patterns } from '@musical-patterns/pattern'
import { delayMaterial, material } from './material'
import { delayMetadata, metadata } from './metadata'
import { spec } from './spec'

const pattern: Pattern = {
    id: Id.MATERIAL_QA,
    material,
    metadata,
    spec,
}

const delayPattern: Pattern = {
    id: Id.MATERIAL_QA_DELAY,
    material: delayMaterial,
    metadata: delayMetadata,
    spec,
}

const patterns: Partial<Patterns> = {
    [ pattern.id ]: pattern,
    [ delayPattern.id ]: delayPattern,
}

export {
    pattern,
    patterns,
}
