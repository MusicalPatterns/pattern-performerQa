import { Id } from '@musical-patterns/id'
import { Patterns, StandardPattern } from '@musical-patterns/pattern'
import { delayMaterial, material } from './material'
import { delayMetadata, metadata } from './metadata'
import { spec } from './spec'

const pattern: StandardPattern = {
    id: Id.MATERIAL_QA,
    material,
    metadata,
    spec,
}

const delayPattern: StandardPattern = {
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
