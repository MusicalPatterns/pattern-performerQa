import { NoteSpec } from '@musical-patterns/compiler'
import { PitchDurationXYZ } from '@musical-patterns/pattern'
import { Block, ContourWhole, KeyMap } from '@musical-patterns/utilities'

interface PerformerQaMaterialSkeleton {
    oscillator: never,
    sample: never,
}

type PerformerQaBlocks = KeyMap<PerformerQaMaterialSkeleton, Block>

type PerformerQaContours = KeyMap<PerformerQaMaterialSkeleton, ContourWhole<PitchDurationXYZ>>

type PerformerQaParts = KeyMap<PerformerQaMaterialSkeleton, NoteSpec[]>

export {
    PerformerQaBlocks,
    PerformerQaContours,
    PerformerQaParts,
}
