import {
    Note,
    PitchDurationXYZ,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { apply, ContourElement, to } from '@musical-patterns/utilities'
import { CENTER_BLOCKS_ON_ORIGIN } from './constants'

const computeNote: (contourElement: ContourElement<PitchDurationXYZ>) => Note =
    ([ pitch, duration, x, y, z ]: ContourElement<PitchDurationXYZ>): Note => ({
        duration: {
            scalar: to.Scalar(duration),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitch: {
            index: to.Ordinal(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
        position: [
            {
                scalar: to.Scalar(apply.Translation(x, CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: to.Scalar(apply.Translation(y, CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: to.Scalar(apply.Translation(z, CENTER_BLOCKS_ON_ORIGIN)),
            },
        ],
    })

export {
    computeNote,
}
