import { PitchDurationXYZ } from '@musical-patterns/material'
import { ContourElement, ContourWhole, to } from '@musical-patterns/utilities'
import { computeBlocks } from './blocks'
import { PerformerQaBlocks, PerformerQaContours } from './types'

const computeContourElement: (blockElement: number) => ContourElement<PitchDurationXYZ> =
    (blockElement: number): ContourElement<PitchDurationXYZ> =>
        to.ContourElement<PitchDurationXYZ>([
            blockElement,
            blockElement,
            blockElement,
            blockElement,
            blockElement,
        ])

const computeContours: () => PerformerQaContours =
    (): PerformerQaContours => {
        const blocks: PerformerQaBlocks = computeBlocks()

        const oscillator: ContourWhole<PitchDurationXYZ> = to.ContourWhole<PitchDurationXYZ>(
            blocks.oscillator.map(computeContourElement),
        )
        const sample: ContourWhole<PitchDurationXYZ> = to.ContourWhole<PitchDurationXYZ>(
            blocks.sample.map(computeContourElement),
        )

        return {
            oscillator,
            sample,
        }
    }

export {
    computeContours,
}
