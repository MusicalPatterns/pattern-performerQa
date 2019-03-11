import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import { computeFlatDurationsScale, materializeStandardScales, StandardSpec } from '@musical-patterns/pattern'
import { Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] => {
        const flatDurationsScalars: Scalar[] = computeFlatDurationsScale().scalars || []

        return materializeStandardScales(
            spec,
            { durationScalars: flatDurationsScalars, pitchScalars: flatDurationsScalars },
        )
    }

export {
    materializeScales,
}
