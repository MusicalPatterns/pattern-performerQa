import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import { buildFlatDurationsScale, materializeStandardScales, StandardSpec } from '@musical-patterns/pattern'
import { Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (spec: StandardSpec): Scale[] => {
        const flatDurationsScalars: Scalar[] = buildFlatDurationsScale().scalars || []

        return materializeStandardScales(
            spec,
            { durationScalars: flatDurationsScalars, pitchScalars: flatDurationsScalars },
        )
    }

export {
    materializeScales,
}
