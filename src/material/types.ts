import { Note, PitchDurationXYZ } from '@musical-patterns/material'
import { Block, ContourWhole, KeyMap } from '@musical-patterns/utilities'

interface MaterialQaMaterialSkeleton {
    oscillator: never,
    sample: never,
}

type MaterialQaBlocks = KeyMap<MaterialQaMaterialSkeleton, Block>

type MaterialQaContours = KeyMap<MaterialQaMaterialSkeleton, ContourWhole<PitchDurationXYZ>>

type MaterialQaNotes = KeyMap<MaterialQaMaterialSkeleton, Note[]>

export {
    MaterialQaBlocks,
    MaterialQaContours,
    MaterialQaNotes,
}
