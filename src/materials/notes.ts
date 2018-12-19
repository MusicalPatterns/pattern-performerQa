import { NoteSpec } from '@musical-patterns/compiler'
import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import { from, Index, to } from '@musical-patterns/utilities'

const buildNoteSpec: (index: Index) => NoteSpec =
    (index: Index): NoteSpec =>
        ({
            durationSpec: {
                scalar: to.Scalar(from.Index(index)),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            pitchSpec: {
                index,
                scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
            },
            sustainSpec: {
                offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                scalar: to.Scalar(from.Index(index)),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        })

export {
    buildNoteSpec,
}
