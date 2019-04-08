import { MaterializeScales, Scale } from '@musical-patterns/material'
import { computeFlatDurationsScale, materializeStandardScales, StandardSpecs } from '@musical-patterns/pattern'
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
