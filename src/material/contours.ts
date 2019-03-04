import { PitchDurationXYZ } from '@musical-patterns/pattern'
import { ContourElement, ContourWhole, to } from '@musical-patterns/utilities'
import { buildBlocks } from './blocks'
import { PerformerQaBlocks, PerformerQaContours } from './types'

const buildContourElement: (blockElement: number) => ContourElement<PitchDurationXYZ> =
    (blockElement: number): ContourElement<PitchDurationXYZ> =>
        to.ContourElement<PitchDurationXYZ>([
            blockElement,
            blockElement,
            blockElement,
            blockElement,
            blockElement,
        ])

const buildContours: () => PerformerQaContours =
    (): PerformerQaContours => {
        const blocks: PerformerQaBlocks = buildBlocks()

        const oscillator: ContourWhole<PitchDurationXYZ> = to.ContourWhole<PitchDurationXYZ>(
            blocks.oscillator.map(buildContourElement),
        )
        const sample: ContourWhole<PitchDurationXYZ> = to.ContourWhole<PitchDurationXYZ>(
            blocks.sample.map(buildContourElement),
        )

        return {
            oscillator,
            sample,
        }
    }

export {
    buildContours,
}
