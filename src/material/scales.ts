import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildFlatDurationsScale, buildStandardScales, StandardSpec } from '@musical-patterns/pattern'
import { Scalar } from '@musical-patterns/utilities'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const flatDurationsScalars: Scalar[] = buildFlatDurationsScale().scalars || []

        return buildStandardScales(
            spec,
            { durationScalars: flatDurationsScalars, pitchScalars: flatDurationsScalars },
        )
    }

export {
    buildScales,
}
