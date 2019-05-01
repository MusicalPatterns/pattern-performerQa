import { Note, PitchValueXYZ } from '@musical-patterns/material'
import { as, ContourElement, Pitch, Position, Scalar, use, Value } from '@musical-patterns/utilities'
import { CENTER_BLOCKS_ON_ORIGIN } from './constants'

const computeNote: (contourElement: ContourElement<PitchValueXYZ>) => Note =
    ([ pitch, value, x, y, z ]: ContourElement<PitchValueXYZ>): Note => ({
        pitch: {
            index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
        },
        position: [
            {
                scalar: as.Scalar<Position>(use.Cardinal(x, CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: as.Scalar<Position>(use.Cardinal(y, CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: as.Scalar<Position>(use.Cardinal(z, CENTER_BLOCKS_ON_ORIGIN)),
            },
        ],
        value: {
            scalar: as.Scalar<Value>(value),
        },
    })

export {
    computeNote,
}
