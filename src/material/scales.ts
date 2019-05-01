import { computeFlatValueScale, MaterializeScales, materializeStandardScales, Scales } from '@musical-patterns/material'
import { StandardSpecs } from '@musical-patterns/spec'
import { insteadOf, Pitch, Scalar, Value } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (specs: StandardSpecs): Scales => {
        const flatValueScalars: Array<Scalar<Value>> = computeFlatValueScale().scalars || []
        const flatPitchScalars: Array<Scalar<Pitch>> =
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            flatValueScalars.map((scalar: Scalar<Value>) => insteadOf<Scalar, Pitch>(scalar))

        return materializeStandardScales(
            specs,
            { valueScalars: flatValueScalars, pitchScalars: flatPitchScalars },
        )
    }

export {
    materializeScales,
}
