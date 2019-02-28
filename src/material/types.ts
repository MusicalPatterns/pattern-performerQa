import { NoteSpec } from '@musical-patterns/compiler'
import { Block, PropertyMap } from '@musical-patterns/utilities'

interface PerformerQaMaterialSkeleton {
    oscillator: never,
    sample: never,
}

type PerformerQaBlocks = PropertyMap<PerformerQaMaterialSkeleton, Block>

type PerformerQaParts = PropertyMap<PerformerQaMaterialSkeleton, NoteSpec[]>

export {
    PerformerQaBlocks,
    PerformerQaParts,
}
