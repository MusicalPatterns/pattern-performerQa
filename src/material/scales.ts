import {
    computeFlatDurationsScale,
    MaterializeScales,
    materializeStandardScales,
    Scale,
} from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { Hz, insteadOf, Ms, Scalar } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scale[] => {
        const flatDurationsScalars: Array<Scalar<Ms>> = computeFlatDurationsScale().scalars || []
        const flatPitchScalars: Array<Scalar<Hz>> =
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            flatDurationsScalars.map((scalar: Scalar<Ms>) => insteadOf<Scalar, Hz>(scalar))

        return materializeStandardScales(
            specs,
            { durationScalars: flatDurationsScalars, pitchScalars: flatPitchScalars },
        )
    }

export {
    materializeScales,
}
