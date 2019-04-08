import {
    computeFlatDurationsScale,
    MaterializeScales,
    materializeStandardScales,
    Scale,
} from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] => {
        const flatDurationsScalars: Scalar[] = computeFlatDurationsScale().scalars || []

        return materializeStandardScales(
            specs,
            { durationScalars: flatDurationsScalars, pitchScalars: flatDurationsScalars },
        )
    }

export {
    materializeScales,
}
