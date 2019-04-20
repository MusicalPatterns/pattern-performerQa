import { PitchDurationXYZ } from '@musical-patterns/material'
import { as, ContourElement, ContourWhole } from '@musical-patterns/utilities'
import { computeBlocks, computeDelayBlocks } from './blocks'
import { MaterialQaBlocks, MaterialQaContours } from './types'

const computeContourElement: (blockElement: number) => ContourElement<PitchDurationXYZ> =
    (blockElement: number): ContourElement<PitchDurationXYZ> =>
        as.ContourElement<PitchDurationXYZ>([
            blockElement,
            blockElement,
            blockElement,
            blockElement,
            blockElement,
        ])

const computeContours: () => MaterialQaContours =
    (): MaterialQaContours => {
        const blocks: MaterialQaBlocks = computeBlocks()

        const oscillator: ContourWhole<PitchDurationXYZ> = as.ContourWhole<PitchDurationXYZ>(
            blocks.oscillator.map(computeContourElement),
        )
        const sample: ContourWhole<PitchDurationXYZ> = as.ContourWhole<PitchDurationXYZ>(
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

        const oscillator: ContourWhole<PitchDurationXYZ> = as.ContourWhole<PitchDurationXYZ>(
            blocks.oscillator.map(computeContourElement),
        )
        const sample: ContourWhole<PitchDurationXYZ> = as.ContourWhole<PitchDurationXYZ>(
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
