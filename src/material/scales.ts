import { MaterializeScales, materializeStandardScales, Scales, thunkFlatValueScale } from '@musical-patterns/material'
import { Specs } from '@musical-patterns/spec'
import { insteadOf, Pitch, Scalar, Value } from '@musical-patterns/utilities'

const materializeScales: MaterializeScales =
    (specs: Specs): Scales => {
        const flatValueScalars: Array<Scalar<Value>> = thunkFlatValueScale().scalars || []
        const flatPitchScalars: Array<Scalar<Pitch>> =
            // tslint:disable-next-line no-unnecessary-callback-wrapper
            flatValueScalars.map((scalar: Scalar<Value>): Scalar<Pitch> => insteadOf<Scalar, Pitch>(scalar))

        return materializeStandardScales(
            specs,
            { valueScalars: flatValueScalars, pitchScalars: flatPitchScalars },
        )
    }

export {
    materializeScales,
}
