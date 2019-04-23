import {
    Note,
    PitchDurationXYZ,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { as, ContourElement, Scalar, use } from '@musical-patterns/utilities'
import { CENTER_BLOCKS_ON_ORIGIN } from './constants'

const computeNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    ([ pitch, duration, x, y, z ]: ContourElement<PitchDurationXYZ>): Note => ({
        duration: {
            scalar: as.Scalar<Scalar>(duration),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitch: {
            index: as.Ordinal<Scalar[]>(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
        position: [
            {
                scalar: as.Scalar<Scalar>(use.Cardinal(x, CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: as.Scalar<Scalar>(use.Cardinal(y, CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: as.Scalar<Scalar>(use.Cardinal(z, CENTER_BLOCKS_ON_ORIGIN)),
            },
        ],
    })

export {
    computeNote,
}
