import { PitchValueXYZ } from '@musical-patterns/material'
import { as, ContourElement, ContourWhole, Thunk } from '@musical-patterns/utilities'
import { thunkBlocks, thunkDelayBlocks } from './blocks'
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

const thunkContours: Thunk<MaterialQaContours> =
    (): MaterialQaContours => {
        const blocks: MaterialQaBlocks = thunkBlocks()

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

const thunkDelayContours: Thunk<MaterialQaContours> =
    (): MaterialQaContours => {
        const blocks: MaterialQaBlocks = thunkDelayBlocks()

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
    thunkContours,
    thunkDelayContours,
}
