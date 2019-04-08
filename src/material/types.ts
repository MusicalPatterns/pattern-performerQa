import { Note } from '@musical-patterns/material'
import { PitchDurationXYZ } from '@musical-patterns/pattern'
import { Block, ContourWhole, KeyMap } from '@musical-patterns/utilities'

interface PerformerQaMaterialSkeleton {
    oscillator: never,
    sample: never,
}

type PerformerQaBlocks = KeyMap<PerformerQaMaterialSkeleton, Block>

type PerformerQaContours = KeyMap<PerformerQaMaterialSkeleton, ContourWhole<PitchDurationXYZ>>

type PerformerQaNotes = KeyMap<PerformerQaMaterialSkeleton, Note[]>

export {
    PerformerQaBlocks,
    PerformerQaContours,
    PerformerQaNotes,
}
