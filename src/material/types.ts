import { Note, PitchValueXYZ } from '@musical-patterns/material'
import { Block, ContourWhole, KeyMap, ObjectOf } from '@musical-patterns/utilities'

interface MaterialQaMaterialSkeleton extends ObjectOf<never> {
    oscillator: never,
    sample: never,
}

type MaterialQaBlocks = KeyMap<MaterialQaMaterialSkeleton, Block>

type MaterialQaContours = KeyMap<MaterialQaMaterialSkeleton, ContourWhole<PitchValueXYZ>>

type MaterialQaNotes = KeyMap<MaterialQaMaterialSkeleton, Note[]>

export {
    MaterialQaBlocks,
    MaterialQaContours,
    MaterialQaNotes,
}
