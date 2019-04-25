import {
    Note,
    PitchDurationXYZ,
    STANDARD_DURATION_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { as, ContourElement, Duration, Pitch, Position, Scalar, use } from '@musical-patterns/utilities'
import { CENTER_BLOCKS_ON_ORIGIN } from './constants'

const computeNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    ([ pitch, duration, x, y, z ]: ContourElement<PitchDurationXYZ>): Note => ({
        duration: {
            scalar: as.Scalar<Duration>(duration),
            scaleIndex: STANDARD_DURATION_SCALE_INDEX,
        },
        pitch: {
            index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
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
    })

export {
    computeNote,
}
