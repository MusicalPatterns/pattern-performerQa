import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationXYZ } from '@musical-patterns/pattern'
import { Block, ContourWhole, PropertyMap } from '@musical-patterns/utilities'

interface PerformerQaMaterialSkeleton {
    oscillator: never,
    sample: never,
}

type PerformerQaBlocks = PropertyMap<PerformerQaMaterialSkeleton, Block>

type PerformerQaContours = PropertyMap<PerformerQaMaterialSkeleton, ContourWhole<PitchDurationXYZ>>

type PerformerQaParts = PropertyMap<PerformerQaMaterialSkeleton, NoteSpec[]>

export {
    PerformerQaBlocks,
    PerformerQaContours,
    PerformerQaParts,
}
