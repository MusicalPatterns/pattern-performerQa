import { PitchValueXYZ } from '@musical-patterns/material'
import { as, ContourElement, ContourWhole } from '@musical-patterns/utilities'
import { computeBlocks, computeDelayBlocks } from './blocks'
import { MaterialQaBlocks, MaterialQaContours } from './types'

const computeContourElement: (blockElement: number) => ContourElement<PitchValueXYZ> =
    (blockElement: number): ContourElement<PitchValueXYZ> =>
        as.ContourElement<PitchValueXYZ>([
            blockElement,
            blockElement,
            blockElement,
            blockElement,
            blockElement,
        ])

const computeContours: () => MaterialQaContours =
    (): MaterialQaContours => {
        const blocks: MaterialQaBlocks = computeBlocks()

        const oscillator: ContourWhole<PitchValueXYZ> = as.ContourWhole<PitchValueXYZ>(
            blocks.oscillator.map(computeContourElement),
        )
        const sample: ContourWhole<PitchValueXYZ> = as.ContourWhole<PitchValueXYZ>(
            blocks.sample.map(computeContourElement),
        )

        return {
            oscillator,
            sample,
        }
    }

const computeDelayContours: () => MaterialQaContours =
    (): MaterialQaContours => {
        const blocks: MaterialQaBlocks = computeDelayBlocks()

        const oscillator: ContourWhole<PitchValueXYZ> = as.ContourWhole<PitchValueXYZ>(
            blocks.oscillator.map(computeContourElement),
        )
        const sample: ContourWhole<PitchValueXYZ> = as.ContourWhole<PitchValueXYZ>(
            blocks.sample.map(computeContourElement),
        )

        return {
            oscillator,
            sample,
        }
    }

export {
    computeContours,
    computeDelayContours,
}
