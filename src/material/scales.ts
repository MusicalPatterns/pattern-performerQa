import {
    computeFlatDurationsScale,
    MaterializeScales,
    materializeStandardScales,
    Scale,
} from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { Duration, insteadOf, Pitch, Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] => {
        const flatDurationsScalars: Array<Scalar<Duration>> = computeFlatDurationsScale().scalars || []
        const flatPitchScalars: Array<Scalar<Pitch>> =
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            flatDurationsScalars.map((scalar: Scalar<Duration>) => insteadOf<Scalar, Pitch>(scalar))

        return materializeStandardScales(
            specs,
            { durationScalars: flatDurationsScalars, pitchScalars: flatPitchScalars },
        )
    }

export {
    materializeScales,
}
